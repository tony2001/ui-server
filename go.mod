module github.com/temporalio/ui-server/v2

go 1.18

require (
	github.com/coreos/go-oidc/v3 v3.1.0
	github.com/gogo/gateway v1.1.0
	github.com/gogo/googleapis v1.4.1
	github.com/gogo/protobuf v1.3.2
	github.com/golang/protobuf v1.5.2
	github.com/gorilla/securecookie v1.1.1
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/labstack/echo/v4 v4.6.3
	github.com/stretchr/testify v1.8.0
	github.com/urfave/cli/v2 v2.3.0
	go.temporal.io/api v1.8.1-0.20220603192404-e65836719706
	golang.org/x/net v0.0.0-20220909164309-bea034e7d591
	golang.org/x/oauth2 v0.0.0-20220223155221-ee480838109b
	google.golang.org/grpc v1.48.0
	gopkg.in/validator.v2 v2.0.0-20210331031555-b37d688a7fb0
	gopkg.in/yaml.v3 v3.0.1
)

require (
	github.com/cpuguy83/go-md2man/v2 v2.0.1 // indirect
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/golang-jwt/jwt v3.2.2+incompatible // indirect
	github.com/google/go-cmp v0.5.7 // indirect
	github.com/labstack/gommon v0.3.1 // indirect
	github.com/mattn/go-colorable v0.1.12 // indirect
	github.com/mattn/go-isatty v0.0.14 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	github.com/russross/blackfriday/v2 v2.1.0 // indirect
	github.com/valyala/bytebufferpool v1.0.0 // indirect
	github.com/valyala/fasttemplate v1.2.1 // indirect
	golang.org/x/crypto v0.0.0-20220214200702-86341886e292 // indirect
	golang.org/x/sys v0.0.0-20220728004956-3c1f35247d10 // indirect
	golang.org/x/text v0.3.7 // indirect
	golang.org/x/time v0.0.0-20220224211638-0e9765cccd65 // indirect
	google.golang.org/appengine v1.6.7 // indirect
	google.golang.org/genproto v0.0.0-20220712132514-bdd2acd4974d // indirect
	google.golang.org/protobuf v1.28.0 // indirect
	gopkg.in/square/go-jose.v2 v2.6.0 // indirect
)

replace github.com/grpc-ecosystem/grpc-gateway => github.com/temporalio/grpc-gateway v1.17.0
