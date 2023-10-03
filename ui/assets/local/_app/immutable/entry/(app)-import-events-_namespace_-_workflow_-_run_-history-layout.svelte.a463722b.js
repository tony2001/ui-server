import{S as M,b as P,a as Q,G as R,m as j,w as A,c as q,C as T,p as I,q as N,x as F,k as c,d as y,D as V,u as _,f as S,L as g,E as C,H as W,I as X,J as Y,j as v,g as h,F as D,K as Z,n as J}from"../chunks/index.efded970.js";import{E as x}from"../chunks/event-history-file-import.eb9f584f.js";import{T as ee,a as G}from"../chunks/toggle-buttons.0c77af29.js";import{t as H}from"../chunks/translate.b5031429.js";import{l as te}from"../chunks/namespaces.2d966c62.js";import{d as k}from"../chunks/route-for.d19e1f1a.js";function se(a){let t=H("workflows","history")+"",s;return{c(){s=A(t)},l(e){s=F(e,t)},m(e,o){S(e,s,o)},p:J,d(e){e&&c(s)}}}function ne(a){let t=H("workflows","compact")+"",s;return{c(){s=A(t)},l(e){s=F(e,t)},m(e,o){S(e,s,o)},p:J,d(e){e&&c(s)}}}function oe(a){let t=H("workflows","json")+"",s;return{c(){s=A(t)},l(e){s=F(e,t)},m(e,o){S(e,s,o)},p:J,d(e){e&&c(s)}}}function ae(a){let t,s,e,o,l,i;return t=new G({props:{icon:"feed",href:k(a[0],"feed"),$$slots:{default:[se]},$$scope:{ctx:a}}}),e=new G({props:{icon:"compact",href:k(a[0],"compact"),$$slots:{default:[ne]},$$scope:{ctx:a}}}),l=new G({props:{icon:"json",href:k(a[0],"json"),$$slots:{default:[oe]},$$scope:{ctx:a}}}),{c(){T(t.$$.fragment),s=q(),T(e.$$.fragment),o=q(),T(l.$$.fragment)},l(n){V(t.$$.fragment,n),s=y(n),V(e.$$.fragment,n),o=y(n),V(l.$$.fragment,n)},m(n,r){C(t,n,r),S(n,s,r),C(e,n,r),S(n,o,r),C(l,n,r),i=!0},p(n,r){const b={};r&1&&(b.href=k(n[0],"feed")),r&4&&(b.$$scope={dirty:r,ctx:n}),t.$set(b);const m={};r&1&&(m.href=k(n[0],"compact")),r&4&&(m.$$scope={dirty:r,ctx:n}),e.$set(m);const p={};r&1&&(p.href=k(n[0],"json")),r&4&&(p.$$scope={dirty:r,ctx:n}),l.$set(p)},i(n){i||(v(t.$$.fragment,n),v(e.$$.fragment,n),v(l.$$.fragment,n),i=!0)},o(n){h(t.$$.fragment,n),h(e.$$.fragment,n),h(l.$$.fragment,n),i=!1},d(n){D(t,n),n&&c(s),D(e,n),n&&c(o),D(l,n)}}}function le(a){let t,s,e,o=H("events","import-event-history")+"",l,i,n,r,b,m,p,d,L,E;r=new x({}),d=new ee({props:{$$slots:{default:[ae]},$$scope:{ctx:a}}});const U=a[1].default,$=R(U,a,a[2],null);return{c(){t=j("section"),s=j("nav"),e=j("h3"),l=A(o),i=q(),n=j("div"),T(r.$$.fragment),b=q(),m=j("nav"),p=j("div"),T(d.$$.fragment),L=q(),$&&$.c(),this.h()},l(f){t=I(f,"SECTION",{id:!0});var u=N(t);s=I(u,"NAV",{class:!0,"aria-label":!0});var w=N(s);e=I(w,"H3",{class:!0});var K=N(e);l=F(K,o),K.forEach(c),i=y(w),n=I(w,"DIV",{class:!0});var O=N(n);V(r.$$.fragment,O),O.forEach(c),w.forEach(c),b=y(u),m=I(u,"NAV",{class:!0,"aria-label":!0});var z=N(m);p=I(z,"DIV",{id:!0,class:!0});var B=N(p);V(d.$$.fragment,B),B.forEach(c),z.forEach(c),L=y(u),$&&$.l(u),u.forEach(c),this.h()},h(){_(e,"class","text-lg font-medium"),_(n,"class","flex gap-4"),_(s,"class","flex items-end justify-between gap-4 pb-4"),_(s,"aria-label",H("events","import-event-history")),_(p,"id","event-view-toggle"),_(p,"class","flex gap-4 bg-white"),_(m,"class","flex items-end justify-end gap-4"),_(m,"aria-label",H("events","event-history-view")),_(t,"id","event-history")},m(f,u){S(f,t,u),g(t,s),g(s,e),g(e,l),g(s,i),g(s,n),C(r,n,null),g(t,b),g(t,m),g(m,p),C(d,p,null),g(t,L),$&&$.m(t,null),E=!0},p(f,[u]){const w={};u&5&&(w.$$scope={dirty:u,ctx:f}),d.$set(w),$&&$.p&&(!E||u&4)&&W($,U,f,f[2],E?Y(U,f[2],u,null):X(f[2]),null)},i(f){E||(v(r.$$.fragment,f),v(d.$$.fragment,f),v($,f),E=!0)},o(f){h(r.$$.fragment,f),h(d.$$.fragment,f),h($,f),E=!1},d(f){f&&c(t),D(r),D(d),$&&$.d(f)}}}function re(a,t,s){let e;Z(a,te,i=>s(0,e=i));let{$$slots:o={},$$scope:l}=t;return a.$$set=i=>{"$$scope"in i&&s(2,l=i.$$scope)},[e,o,l]}class fe extends M{constructor(t){super(),P(this,t,re,le,Q,{})}}function ie(a){let t;const s=a[0].default,e=R(s,a,a[1],null);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,l){e&&e.m(o,l),t=!0},p(o,l){e&&e.p&&(!t||l&2)&&W(e,s,o,o[1],t?Y(s,o[1],l,null):X(o[1]),null)},i(o){t||(v(e,o),t=!0)},o(o){h(e,o),t=!1},d(o){e&&e.d(o)}}}function $e(a){let t,s;return t=new fe({props:{$$slots:{default:[ie]},$$scope:{ctx:a}}}),{c(){T(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,o){C(t,e,o),s=!0},p(e,[o]){const l={};o&2&&(l.$$scope={dirty:o,ctx:e}),t.$set(l)},i(e){s||(v(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){D(t,e)}}}function ue(a,t,s){let{$$slots:e={},$$scope:o}=t;return a.$$set=l=>{"$$scope"in l&&s(1,o=l.$$scope)},[e,o]}class ve extends M{constructor(t){super(),P(this,t,ue,$e,Q,{})}}export{ve as default};
