import{S,i as V,s as q,l as k,m as v,n as I,h as b,p as _,b as j,T as D,g as J,t as d,d as K,f as h,C as y,V as g,W as L,I as C,J as B,K as T,L as E,w as M,a as N,x as O,c as U,y as W,M as z,B as A}from"./index-9ea626a2.js";import{I as F}from"./icon-3b6c42df.js";function G(o){let e;const l=o[5].default,t=C(l,o,o[4],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,i){t&&t.m(n,i),e=!0},p(n,i){t&&t.p&&(!e||i&16)&&B(t,l,n,n[4],e?E(l,n[4],i,null):T(n[4]),null)},i(n){e||(h(t,n),e=!0)},o(n){d(t,n),e=!1},d(n){t&&t.d(n)}}}function H(o){let e,l,t,n,i;l=new F({props:{class:"h-4",name:o[0]}});const f=o[5].default,c=C(f,o,o[4],null);return{c(){e=k("div"),M(l.$$.fragment),t=N(),c&&c.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=I(e);O(l.$$.fragment,s),t=U(s),c&&c.l(s),s.forEach(b),this.h()},h(){_(e,"class",n="flex items-center justify-center gap-2 "+o[1]+" svelte-1pksj5i")},m(a,s){j(a,e,s),W(l,e,null),z(e,t),c&&c.m(e,null),i=!0},p(a,s){const m={};s&1&&(m.name=a[0]),l.$set(m),c&&c.p&&(!i||s&16)&&B(c,f,a,a[4],i?E(f,a[4],s,null):T(a[4]),null),(!i||s&2&&n!==(n="flex items-center justify-center gap-2 "+a[1]+" svelte-1pksj5i"))&&_(e,"class",n)},i(a){i||(h(l.$$.fragment,a),h(c,a),i=!0)},o(a){d(l.$$.fragment,a),d(c,a),i=!1},d(a){a&&b(e),A(l),c&&c.d(a)}}}function P(o){let e,l,t,n,i,f,c;const a=[H,G],s=[];function m(u,r){return u[0]?0:1}return l=m(o),t=s[l]=a[l](o),{c(){e=k("button"),t.c(),this.h()},l(u){e=v(u,"BUTTON",{class:!0,"data-cy":!0,type:!0});var r=I(e);t.l(r),r.forEach(b),this.h()},h(){_(e,"class","icon-button svelte-1pksj5i"),_(e,"data-cy",n=o[3].dataCy),_(e,"type",o[2])},m(u,r){j(u,e,r),s[l].m(e,null),i=!0,f||(c=D(e,"click",o[6]),f=!0)},p(u,[r]){let p=l;l=m(u),l===p?s[l].p(u,r):(J(),d(s[p],1,1,()=>{s[p]=null}),K(),t=s[l],t?t.p(u,r):(t=s[l]=a[l](u),t.c()),h(t,1),t.m(e,null)),(!i||r&8&&n!==(n=u[3].dataCy))&&_(e,"data-cy",n),(!i||r&4)&&_(e,"type",u[2])},i(u){i||(h(t),i=!0)},o(u){d(t),i=!1},d(u){u&&b(e),s[l].d(),f=!1,c()}}}function Q(o,e,l){let{$$slots:t={},$$scope:n}=e,{icon:i=null}=e,{classes:f=""}=e,{type:c="button"}=e;function a(s){L.call(this,o,s)}return o.$$set=s=>{l(3,e=y(y({},e),g(s))),"icon"in s&&l(0,i=s.icon),"classes"in s&&l(1,f=s.classes),"type"in s&&l(2,c=s.type),"$$scope"in s&&l(4,n=s.$$scope)},e=g(e),[i,f,c,e,n,t,a]}class Y extends S{constructor(e){super(),V(this,e,Q,P,q,{icon:0,classes:1,type:2})}}export{Y as I};