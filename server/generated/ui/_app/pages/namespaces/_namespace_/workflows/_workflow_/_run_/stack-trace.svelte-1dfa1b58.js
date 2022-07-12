import{S as V,i as O,s as j,w,k as q,e as S,x as v,m as P,c as E,a as R,d as p,y as T,g as k,q as g,o as h,B as y,N as W,a9 as B,l as D,ac as F,t as d,h as b,M as _,E as N,b as I,j as M}from"../../../../../../chunks/index-c85ade65.js";import{p as z}from"../../../../../../chunks/stores-2c13cc16.js";import{w as G}from"../../../../../../chunks/workflow-run-d9e4b1b8.js";import{b as Q}from"../../../../../../chunks/query-service-8c50f98d.js";import{C as H}from"../../../../../../chunks/code-block-8a2b205f.js";import{B as J}from"../../../../../../chunks/button-8fce3286.js";import{E as A}from"../../../../../../chunks/empty-state-ebe0fe80.js";import{P as K}from"../../../../../../chunks/page-title-de4dcecc.js";import{L as U}from"../../../../../../chunks/loading-67332923.js";import{L as X}from"../../../../../../chunks/link-d95c4680.js";import"../../../../../../chunks/index-203c0d43.js";import"../../../../../../chunks/with-loading-22689bcc.js";import"../../../../../../chunks/workflow-service-321a1bb9.js";import"../../../../../../chunks/simplify-attributes-6c8439d9.js";import"../../../../../../chunks/format-date-f8f72e15.js";import"../../../../../../chunks/to-duration-3f40f60b.js";import"../../../../../../chunks/is-18735aa3.js";import"../../../../../../chunks/route-for-api-6329577c.js";import"../../../../../../chunks/route-for-ef692dd7.js";import"../../../../../../chunks/notifications-9d24bb07.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/is-function-b969a126.js";import"../../../../../../chunks/atob-eb4fc9a1.js";import"../../../../../../chunks/index-c8da0ebb.js";import"../../../../../../chunks/copy-to-clipboard-b8e3d18c.js";import"../../../../../../chunks/badge-f8ed4f09.js";function Y(s){let e,r;return e=new A({props:{title:"No Stack Traces Found",dataCy:"query-stack-trace-empty",$$slots:{default:[te]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){T(e,t,n),r=!0},p(t,n){const l={};n&2048&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function Z(s){let e,r,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:oe,then:ne,catch:re,value:9,error:10,blocks:[,,,]};return B(r=s[1],n),{c(){e=D(),n.block.c()},l(l){e=D(),n.block.l(l)},m(l,a){k(l,e,a),n.block.m(l,n.anchor=a),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(l,a){s=l,n.ctx=s,a&2&&r!==(r=s[1])&&B(r,n)||F(n,s,a)},i(l){t||(g(n.block),t=!0)},o(l){for(let a=0;a<3;a+=1){const f=n.blocks[a];h(f)}t=!1},d(l){l&&p(e),n.block.d(l),n.token=null,n=null}}}function x(s){var m;let e,r,t,n,l=((m=s[3])==null?void 0:m.taskQueue)+"",a,f,u;return t=new X({props:{href:"https://docs.temporal.io/concepts/what-is-a-query/#stack-trace-query",$$slots:{default:[ee]},$$scope:{ctx:s}}}),{c(){e=S("p"),r=d("To enable "),w(t.$$.fragment),n=d(", run a Worker on the "),a=d(l),f=d(" Task Queue.")},l(o){e=E(o,"P",{});var i=R(e);r=b(i,"To enable "),v(t.$$.fragment,i),n=b(i,", run a Worker on the "),a=b(i,l),f=b(i," Task Queue."),i.forEach(p)},m(o,i){k(o,e,i),_(e,r),T(t,e,null),_(e,n),_(e,a),_(e,f),u=!0},p(o,i){const c={};i&2048&&(c.$$scope={dirty:i,ctx:o}),t.$set(c)},i(o){u||(g(t.$$.fragment,o),u=!0)},o(o){h(t.$$.fragment,o),u=!1},d(o){o&&p(e),y(t)}}}function ee(s){let e;return{c(){e=d("stack traces")},l(r){e=b(r,"stack traces")},m(r,t){k(r,e,t)},d(r){r&&p(e)}}}function te(s){var n,l;let e,r,t=s[3].isRunning&&((l=(n=s[4])==null?void 0:n.pollers)==null?void 0:l.length)===0&&x(s);return{c(){t&&t.c(),e=D()},l(a){t&&t.l(a),e=D()},m(a,f){t&&t.m(a,f),k(a,e,f),r=!0},p(a,f){var u,m;a[3].isRunning&&((m=(u=a[4])==null?void 0:u.pollers)==null?void 0:m.length)===0&&t.p(a,f)},i(a){r||(g(t),r=!0)},o(a){h(t),r=!1},d(a){t&&t.d(a),a&&p(e)}}}function re(s){let e,r;return e=new A({props:{title:"An Error Occured",content:"Please make sure you have at least one worker running."}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){T(e,t,n),r=!0},p:N,i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function ne(s){let e,r,t,n,l,a=s[0].toLocaleTimeString()+"",f,u,m,o,i;return r=new J({props:{iconScale:.8,icon:"refresh",loading:se,$$slots:{default:[ae]},$$scope:{ctx:s}}}),r.$on("click",s[5]),o=new H({props:{content:s[9],language:"text",dataCy:"query-stack-trace"}}),{c(){e=S("div"),w(r.$$.fragment),t=q(),n=S("p"),l=d("Stack Trace at "),f=d(a),u=q(),m=S("div"),w(o.$$.fragment),this.h()},l(c){e=E(c,"DIV",{class:!0});var $=R(e);v(r.$$.fragment,$),t=P($),n=E($,"P",{});var C=R(n);l=b(C,"Stack Trace at "),f=b(C,a),C.forEach(p),$.forEach(p),u=P(c),m=E(c,"DIV",{class:!0});var L=R(m);v(o.$$.fragment,L),L.forEach(p),this.h()},h(){I(e,"class","flex items-center gap-4"),I(m,"class","flex items-start h-full")},m(c,$){k(c,e,$),T(r,e,null),_(e,t),_(e,n),_(n,l),_(n,f),k(c,u,$),k(c,m,$),T(o,m,null),i=!0},p(c,$){const C={};$&2048&&(C.$$scope={dirty:$,ctx:c}),r.$set(C),(!i||$&1)&&a!==(a=c[0].toLocaleTimeString()+"")&&M(f,a);const L={};$&2&&(L.content=c[9]),o.$set(L)},i(c){i||(g(r.$$.fragment,c),g(o.$$.fragment,c),i=!0)},o(c){h(r.$$.fragment,c),h(o.$$.fragment,c),i=!1},d(c){c&&p(e),y(r),c&&p(u),c&&p(m),y(o)}}}function ae(s){let e;return{c(){e=d("Refresh")},l(r){e=b(r,"Refresh")},m(r,t){k(r,e,t)},d(r){r&&p(e)}}}function oe(s){let e,r,t,n,l,a;return r=new U({}),{c(){e=S("div"),w(r.$$.fragment),t=q(),n=S("p"),l=d("(This will fail if you have no workers running.)"),this.h()},l(f){e=E(f,"DIV",{class:!0});var u=R(e);v(r.$$.fragment,u),t=P(u),n=E(u,"P",{});var m=R(n);l=b(m,"(This will fail if you have no workers running.)"),m.forEach(p),u.forEach(p),this.h()},h(){I(e,"class","text-center")},m(f,u){k(f,e,u),T(r,e,null),_(e,t),_(e,n),_(n,l),a=!0},p:N,i(f){a||(g(r.$$.fragment,f),a=!0)},o(f){h(r.$$.fragment,f),a=!1},d(f){f&&p(e),y(r)}}}function le(s){let e,r,t,n,l,a;e=new K({props:{title:`Stack Trace | ${s[3].id}`,url:s[2].url.href}});const f=[Z,Y],u=[];function m(o,i){var c,$;return o[3].isRunning&&(($=(c=o[4])==null?void 0:c.pollers)==null?void 0:$.length)>0?0:1}return n=m(s),l=u[n]=f[n](s),{c(){w(e.$$.fragment),r=q(),t=S("section"),l.c()},l(o){v(e.$$.fragment,o),r=P(o),t=E(o,"SECTION",{});var i=R(t);l.l(i),i.forEach(p)},m(o,i){T(e,o,i),k(o,r,i),k(o,t,i),u[n].m(t,null),a=!0},p(o,[i]){const c={};i&4&&(c.url=o[2].url.href),e.$set(c),l.p(o,i)},i(o){a||(g(e.$$.fragment,o),g(l),a=!0)},o(o){h(e.$$.fragment,o),h(l),a=!1},d(o){y(e,o),o&&p(r),o&&p(t),u[n].d()}}}let se=!1;function ce(s,e,r){let t,n;W(s,G,c=>r(6,t=c)),W(s,z,c=>r(2,n=c));const{namespace:l}=n.params,{workflow:a,workers:f}=t;let u=new Date;const m=()=>Q({workflow:a,namespace:l});let o;const i=()=>{r(1,o=Q({workflow:a,namespace:l})),o.then(()=>{r(0,u=new Date)})};return a.isRunning&&r(1,o=m()),[u,o,n,a,f,i]}class ie extends V{constructor(e){super(),O(this,e,ce,le,j,{})}}function fe(s){let e,r;return e=new ie({}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){T(e,t,n),r=!0},p:N,i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}class Qe extends V{constructor(e){super(),O(this,e,null,fe,j,{})}}export{Qe as default};
