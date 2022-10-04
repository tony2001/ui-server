// The MIT License
//
// Copyright (c) 2020 Temporal Technologies Inc.  All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

package api

import (
	"fmt"
	"net/http"

	"github.com/gogo/gateway"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/labstack/echo/v4"
	"golang.org/x/net/context"
	"google.golang.org/grpc"

	"github.com/temporalio/ui-server/v2/server/auth"
	"github.com/temporalio/ui-server/v2/server/config"
	"github.com/temporalio/ui-server/v2/server/generated/api/workflowservice/v1"
	"github.com/temporalio/ui-server/v2/server/rpc"
	"github.com/temporalio/ui-server/v2/server/version"
)

type Auth struct {
	Enabled bool
	Options []string
}

type CodecResponse struct {
	Endpoint        string
	PassAccessToken bool
}

type SettingsResponse struct {
	Auth                        *Auth
	DefaultNamespace            string
	ShowTemporalSystemNamespace bool
	FeedbackURL                 string
	NotifyOnNewVersion          bool
	Codec                       *CodecResponse
	Version                     string
	DisableWriteActions         bool
}

func TemporalAPIHandler(cfgProvider *config.ConfigProviderWithRefresh, apiMiddleware []Middleware) echo.HandlerFunc {
	return func(c echo.Context) error {
		err := auth.ValidateAuth(c, cfgProvider)
		if err != nil {
			return err
		}

		cfg, err := cfgProvider.GetConfig()
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}

		tls, err := rpc.CreateTLSConfig(cfg.TemporalGRPCAddress, &cfg.TLS)
		if err != nil {
			fmt.Printf("unable to read TLS configs: %s", err)
		}
		conn := rpc.CreateGRPCConnection(cfg.TemporalGRPCAddress, tls)
		defer conn.Close()

		mux, err := getTemporalClientMux(c, conn, apiMiddleware)
		if err != nil {
			return err
		}

		mux.ServeHTTP(c.Response(), c.Request())
		return nil
	}
}

func GetSettings(cfgProvier *config.ConfigProviderWithRefresh) func(echo.Context) error {
	return func(c echo.Context) error {
		cfg, err := cfgProvier.GetConfig()
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}

		var options []string
		if len(cfg.Auth.Providers) != 0 {
			authProviderCfg := cfg.Auth.Providers[0].Options
			for k := range authProviderCfg {
				options = append(options, k)
			}
		}

		settings := &SettingsResponse{
			Auth: &Auth{
				Enabled: cfg.Auth.Enabled,
				Options: options,
			},
			DefaultNamespace:            cfg.DefaultNamespace,
			ShowTemporalSystemNamespace: cfg.ShowTemporalSystemNamespace,
			FeedbackURL:                 cfg.FeedbackURL,
			NotifyOnNewVersion:          cfg.NotifyOnNewVersion,
			Codec: &CodecResponse{
				Endpoint:        cfg.Codec.Endpoint,
				PassAccessToken: cfg.Codec.PassAccessToken,
			},
			Version:             version.UIVersion,
			DisableWriteActions: cfg.DisableWriteActions,
		}

		return c.JSON(http.StatusOK, settings)
	}
}

func getTemporalClientMux(c echo.Context, temporalConn *grpc.ClientConn, apiMiddleware []Middleware) (*runtime.ServeMux, error) {
	var muxOpts []runtime.ServeMuxOption
	for _, m := range apiMiddleware {
		muxOpts = append(muxOpts, m(c))
	}

	tMux := runtime.NewServeMux(
		append(muxOpts,
			withMarshaler(),
			version.WithVersionHeader(c),
			// This is necessary to get error details properly
			// marshalled in unary requests.
			runtime.WithProtoErrorHandler(runtime.DefaultHTTPProtoErrorHandler),
		)...,
	)

	if err := workflowservice.RegisterWorkflowServiceHandler(context.Background(), tMux, temporalConn); err != nil {
		return nil, err
	}
	return tMux, nil
}

func withMarshaler() runtime.ServeMuxOption {
	jsonpb := &gateway.JSONPb{
		EmitDefaults: true,
		Indent:       "  ",
		OrigName:     false,
	}

	return runtime.WithMarshalerOption(runtime.MIMEWildcard, jsonpb)
}
