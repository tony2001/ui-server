import{S,b as U,a as z,N as p,m as T,p as q,q as B,k as g,Q as y,R as v,f as C,T as F,z as G,g as d,h as H,j as h,U as J,X as I,O as j,P as L,G as D,H as N,I as O,J as P,C as Q,c as R,D as V,d as X,u as E,E as A,L as K,F as M}from"./index.f15f06ee.js";import{I as W}from"./icon.6a988f87.js";function Y(i){let e;const t=i[7].default,l=D(t,i,i[6],null);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,u){l&&l.m(s,u),e=!0},p(s,u){l&&l.p&&(!e||u&64)&&N(l,t,s,s[6],e?P(t,s[6],u,null):O(s[6]),null)},i(s){e||(h(l,s),e=!0)},o(s){d(l,s),e=!1},d(s){l&&l.d(s)}}}function Z(i){let e,t,l,s,u;t=new W({props:{name:i[0],class:"h-auto"}});const _=i[7].default,c=D(_,i,i[6],null);return{c(){e=T("div"),Q(t.$$.fragment),l=R(),c&&c.c(),this.h()},l(a){e=q(a,"DIV",{class:!0});var n=B(e);V(t.$$.fragment,n),l=X(n),c&&c.l(n),n.forEach(g),this.h()},h(){E(e,"class",s="flex items-center justify-center gap-2 "+i[2]+" svelte-1vs3on1")},m(a,n){C(a,e,n),A(t,e,null),K(e,l),c&&c.m(e,null),u=!0},p(a,n){const b={};n&1&&(b.name=a[0]),t.$set(b),c&&c.p&&(!u||n&64)&&N(c,_,a,a[6],u?P(_,a[6],n,null):O(a[6]),null),(!u||n&4&&s!==(s="flex items-center justify-center gap-2 "+a[2]+" svelte-1vs3on1"))&&E(e,"class",s)},i(a){u||(h(t.$$.fragment,a),h(c,a),u=!0)},o(a){d(t.$$.fragment,a),d(c,a),u=!1},d(a){a&&g(e),M(t),c&&c.d(a)}}}function w(i){let e,t,l,s,u,_,c;const a=[Z,Y],n=[];function b(o,f){return o[0]?0:1}t=b(i),l=n[t]=a[t](i);let m=[{type:"button"},{class:"icon-button"},{"data-testid":s=i[4]["data-testid"]},{"aria-label":i[1]},i[5]],r={};for(let o=0;o<m.length;o+=1)r=p(r,m[o]);return{c(){e=T("button"),l.c(),this.h()},l(o){e=q(o,"BUTTON",{type:!0,class:!0,"data-testid":!0,"aria-label":!0});var f=B(e);l.l(f),f.forEach(g),this.h()},h(){y(e,r),v(e,"hoverable",i[3]),v(e,"svelte-1vs3on1",!0)},m(o,f){C(o,e,f),n[t].m(e,null),e.autofocus&&e.focus(),u=!0,_||(c=F(e,"click",i[8]),_=!0)},p(o,[f]){let k=t;t=b(o),t===k?n[t].p(o,f):(G(),d(n[k],1,1,()=>{n[k]=null}),H(),l=n[t],l?l.p(o,f):(l=n[t]=a[t](o),l.c()),h(l,1),l.m(e,null)),y(e,r=J(m,[{type:"button"},{class:"icon-button"},(!u||f&16&&s!==(s=o[4]["data-testid"]))&&{"data-testid":s},(!u||f&2)&&{"aria-label":o[1]},f&32&&o[5]])),v(e,"hoverable",o[3]),v(e,"svelte-1vs3on1",!0)},i(o){u||(h(l),u=!0)},o(o){d(l),u=!1},d(o){o&&g(e),n[t].d(),_=!1,c()}}}function x(i,e,t){const l=["icon","label","classes","hoverable"];let s=I(e,l),{$$slots:u={},$$scope:_}=e,{icon:c=null}=e,{label:a=""}=e,{classes:n=""}=e,{hoverable:b=!1}=e;function m(r){L.call(this,i,r)}return i.$$set=r=>{t(4,e=p(p({},e),j(r))),t(5,s=I(e,l)),"icon"in r&&t(0,c=r.icon),"label"in r&&t(1,a=r.label),"classes"in r&&t(2,n=r.classes),"hoverable"in r&&t(3,b=r.hoverable),"$$scope"in r&&t(6,_=r.$$scope)},e=j(e),[c,a,n,b,e,s,_,u,m]}class te extends S{constructor(e){super(),U(this,e,x,w,z,{icon:0,label:1,classes:2,hoverable:3})}}export{te as I};