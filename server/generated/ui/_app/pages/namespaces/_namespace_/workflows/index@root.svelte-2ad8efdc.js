import{X as Le,S as ee,i as te,s as re,e as W,w as R,c as F,a as q,x as I,d as w,b as T,g as S,y as N,q as h,o as b,B as P,T as H,t as O,k as C,h as j,m as A,R as ie,M as E,ab as ke,j as ue,n as z,p as Q,G as Be,N as D,W as $e,ar as De,_ as Z,$ as Y,Z as x,l as L,ad as Oe,a7 as Ue,al as Ve,E as G,I as Me,J as ze,K as Qe,L as He,v as Ge,a9 as _e,an as Je}from"../../../../chunks/index-604742bf.js";import{p as je}from"../../../../chunks/stores-810822a9.js";import{t as de}from"../../../../chunks/time-format-1e4f6616.js";import{w as ve,l as Ke,a as Xe,u as Ze,b as Ye}from"../../../../chunks/workflows-adaeb979.js";import{n as ye}from"../../../../chunks/nav-open-3c3c705a.js";import{l as Te}from"../../../../chunks/namespaces-8e051ffd.js";import{p as xe}from"../../../../chunks/persist-store-e5ba5089.js";import{a as et}from"../../../../chunks/is-18735aa3.js";import{t as we,W as tt,a as rt}from"../../../../chunks/workflows-summary-row-2b2da9ff.js";import{E as lt}from"../../../../chunks/empty-state-323474bd.js";import{P as nt}from"../../../../chunks/pagination-c5abc316.js";import{I as fe}from"../../../../chunks/index-3ce11c61.js";import{j as at}from"../../../../chunks/index-c0547148.js";import{u as ge}from"../../../../chunks/update-query-parameters-380a438e.js";import{k as ce}from"../../../../chunks/to-duration-3f40f60b.js";import{t as Se}from"../../../../chunks/workflow-service-043afb0d.js";import{S as he,O as J}from"../../../../chunks/select-4556bdf3.js";import{c as ot}from"../../../../chunks/copy-to-clipboard-8832075c.js";import{S as st}from"../../../../chunks/search-57d27b49.js";import"../../../../chunks/index-c9e619a8.js";import"../../../../chunks/with-loading-22689bcc.js";import"../../../../chunks/is-function-b969a126.js";import"../../../../chunks/format-date-14f9c053.js";import"../../../../chunks/route-for-93451b94.js";import"../../../../chunks/workflow-status-ca8cb7e9.js";import"../../../../chunks/filter-select-9b8307b8.js";import"../../../../chunks/navigation-6709cf39.js";import"../../../../chunks/singletons-d1fb5791.js";import"../../../../chunks/simplify-attributes-f2a24cc6.js";import"../../../../chunks/route-for-api-c17383fe.js";import"../../../../chunks/notifications-cfed8e58.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/button-75595856.js";import"../../../../chunks/badge-cd9e2482.js";const be=xe("viewedFeatureTags",null),it=n=>{var r;let e=(r=Le(be))!=null?r:[];e.includes(n)||(e=[...e,n],be.set(e))},ct=n=>et(n)?n==="basic"||n==="advanced":!1,ut=n=>{const e=n.searchParams.get("search");return ct(e)?e:(n.searchParams.set("search","basic"),"basic")};function Ee(n){let e,r,t;return r=new fe({props:{name:n[3],scale:.9,stroke:"currentcolor"}}),{c(){e=W("span"),R(r.$$.fragment),this.h()},l(l){e=F(l,"SPAN",{class:!0});var o=q(e);I(r.$$.fragment,o),o.forEach(w),this.h()},h(){T(e,"class","icon-container svelte-1k4c3aw")},m(l,o){S(l,e,o),N(r,e,null),t=!0},p(l,o){const s={};o&8&&(s.name=l[3]),r.$set(s)},i(l){t||(h(r.$$.fragment,l),t=!0)},o(l){b(r.$$.fragment,l),t=!1},d(l){l&&w(e),P(r)}}}function Re(n){let e,r,t,l,o;return r=new fe({props:{name:n[8]?"checkMark":"copy",stroke:"currentcolor"}}),{c(){e=W("div"),R(r.$$.fragment),this.h()},l(s){e=F(s,"DIV",{class:!0});var a=q(e);I(r.$$.fragment,a),a.forEach(w),this.h()},h(){T(e,"class","copy-icon-container svelte-1k4c3aw")},m(s,a){S(s,e,a),N(r,e,null),t=!0,l||(o=H(e,"click",n[9]),l=!0)},p(s,a){const i={};a&256&&(i.name=s[8]?"checkMark":"copy"),r.$set(i)},i(s){t||(h(r.$$.fragment,s),t=!0)},o(s){b(r.$$.fragment,s),t=!1},d(s){s&&w(e),P(r),l=!1,o()}}}function ft(n){let e,r,t,l,o,s,a,i,c,v,u,m=n[3]!==""&&Ee(n),_=n[6]&&Re(n);return{c(){e=W("div"),r=W("label"),t=O(n[2]),l=C(),m&&m.c(),o=C(),s=W("input"),a=C(),_&&_.c(),this.h()},l(p){e=F(p,"DIV",{class:!0});var g=q(e);r=F(g,"LABEL",{for:!0,class:!0});var d=q(r);t=j(d,n[2]),d.forEach(w),l=A(g),m&&m.l(g),o=A(g),s=F(g,"INPUT",{class:!0,placeholder:!0,id:!0,name:!0}),a=A(g),_&&_.l(g),g.forEach(w),this.h()},h(){T(r,"for",n[1]),T(r,"class","hidden"),T(s,"class","m-2 block w-full bg-white focus:outline-none svelte-1k4c3aw"),s.disabled=n[6],T(s,"placeholder",n[4]),T(s,"id",n[1]),T(s,"name",n[5]),ie(s,"copyable",n[6]),T(e,"class",i="input-container "+n[7]+" svelte-1k4c3aw"),ie(e,"copyable",n[6])},m(p,g){S(p,e,g),E(e,r),E(r,t),E(e,l),m&&m.m(e,null),E(e,o),E(e,s),ke(s,n[0]),E(e,a),_&&_.m(e,null),c=!0,v||(u=[H(s,"input",n[13]),H(s,"input",n[11]),H(s,"change",n[12])],v=!0)},p(p,[g]){(!c||g&4)&&ue(t,p[2]),(!c||g&2)&&T(r,"for",p[1]),p[3]!==""?m?(m.p(p,g),g&8&&h(m,1)):(m=Ee(p),m.c(),h(m,1),m.m(e,o)):m&&(z(),b(m,1,1,()=>{m=null}),Q()),(!c||g&64)&&(s.disabled=p[6]),(!c||g&16)&&T(s,"placeholder",p[4]),(!c||g&2)&&T(s,"id",p[1]),(!c||g&32)&&T(s,"name",p[5]),g&1&&s.value!==p[0]&&ke(s,p[0]),g&64&&ie(s,"copyable",p[6]),p[6]?_?(_.p(p,g),g&64&&h(_,1)):(_=Re(p),_.c(),h(_,1),_.m(e,null)):_&&(z(),b(_,1,1,()=>{_=null}),Q()),(!c||g&128&&i!==(i="input-container "+p[7]+" svelte-1k4c3aw"))&&T(e,"class",i),g&192&&ie(e,"copyable",p[6])},i(p){c||(h(m),h(_),c=!0)},o(p){b(m),b(_),c=!1},d(p){p&&w(e),m&&m.d(),_&&_.d(),v=!1,Be(u)}}}function pt(n,e,r){let t,{id:l}=e,{label:o}=e,{value:s}=e,{icon:a=""}=e,{placeholder:i=o}=e,{name:c=l}=e,{copyable:v=!1}=e,{theme:u="light"}=e;const{copy:m,copied:_}=ot(s);D(n,_,$=>r(8,t=$));function p($){$e.call(this,n,$)}function g($){$e.call(this,n,$)}function d(){s=this.value,r(0,s)}return n.$$set=$=>{"id"in $&&r(1,l=$.id),"label"in $&&r(2,o=$.label),"value"in $&&r(0,s=$.value),"icon"in $&&r(3,a=$.icon),"placeholder"in $&&r(4,i=$.placeholder),"name"in $&&r(5,c=$.name),"copyable"in $&&r(6,v=$.copyable),"theme"in $&&r(7,u=$.theme)},[s,l,o,a,i,c,v,u,t,m,_,p,g,d]}class Ie extends ee{constructor(e){super(),te(this,e,pt,ft,re,{id:1,label:2,value:0,icon:3,placeholder:4,name:5,copyable:6,theme:7})}}function Ne(n,e,r){const t=n.slice();return t[15]=e[r][0],t[16]=e[r][1],t}function Pe(n,e,r){const t=n.slice();return t[16]=e[r],t}function mt(n){let e,r,t,l,o;return{c(){e=W("a"),r=O("Advanced Search"),this.h()},l(s){e=F(s,"A",{href:!0,class:!0});var a=q(e);r=j(a,"Advanced Search"),a.forEach(w),this.h()},h(){T(e,"href",t=n[2].url.pathname+"?searchType=advanced"),T(e,"class","text-blue-700")},m(s,a){S(s,e,a),E(e,r),l||(o=H(e,"click",De(n[6]("advanced"))),l=!0)},p(s,a){a&4&&t!==(t=s[2].url.pathname+"?searchType=advanced")&&T(e,"href",t)},d(s){s&&w(e),l=!1,o()}}}function _t(n){let e,r,t,l,o;return{c(){e=W("a"),r=O("Basic Search"),this.h()},l(s){e=F(s,"A",{href:!0,class:!0});var a=q(e);r=j(a,"Basic Search"),a.forEach(w),this.h()},h(){T(e,"href",t=n[2].url.pathname+"?searchType=basic"),T(e,"class","text-blue-700")},m(s,a){S(s,e,a),E(e,r),l||(o=H(e,"click",De(n[6]("basic"))),l=!0)},p(s,a){a&4&&t!==(t=s[2].url.pathname+"?searchType=basic")&&T(e,"href",t)},d(s){s&&w(e),l=!1,o()}}}function gt(n){let e,r,t,l,o,s,a,i,c,v,u,m,_,p,g,d;function $(f){n[9](f)}let y={icon:"search",id:"workflow-id-filter",label:"Workflow ID"};n[3].workflowId!==void 0&&(y.value=n[3].workflowId),r=new Ie({props:y}),Z.push(()=>Y(r,"value",$)),r.$on("input",n[8]);function V(f){n[10](f)}let K={icon:"search",id:"workflow-type-filter",label:"Workflow Type"};n[3].workflowType!==void 0&&(K.value=n[3].workflowType),o=new Ie({props:K}),Z.push(()=>Y(o,"value",V)),o.$on("input",n[8]);function ae(f){n[11](f)}let oe={id:"time-range-filter",label:"Time Range",$$slots:{default:[kt]},$$scope:{ctx:n}};n[3].timeRange!==void 0&&(oe.value=n[3].timeRange),i=new he({props:oe}),Z.push(()=>Y(i,"value",ae)),i.$on("change",n[8]);function se(f){n[12](f)}let le={id:"execution-status-filter",label:"Workflow Status",$$slots:{default:[vt]},$$scope:{ctx:n}};n[3].executionStatus!==void 0&&(le.value=n[3].executionStatus),u=new he({props:le}),Z.push(()=>Y(u,"value",se)),u.$on("change",n[8]);function U(f){n[13](f)}let ne={id:"filter-by-relative-time",$$slots:{default:[Et]},$$scope:{ctx:n}};return n[4]!==void 0&&(ne.value=n[4]),p=new he({props:ne}),Z.push(()=>Y(p,"value",U)),{c(){e=W("div"),R(r.$$.fragment),l=C(),R(o.$$.fragment),a=C(),R(i.$$.fragment),v=C(),R(u.$$.fragment),_=C(),R(p.$$.fragment),this.h()},l(f){e=F(f,"DIV",{class:!0});var k=q(e);I(r.$$.fragment,k),l=A(k),I(o.$$.fragment,k),a=A(k),I(i.$$.fragment,k),v=A(k),I(u.$$.fragment,k),_=A(k),I(p.$$.fragment,k),k.forEach(w),this.h()},h(){T(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5")},m(f,k){S(f,e,k),N(r,e,null),E(e,l),N(o,e,null),E(e,a),N(i,e,null),E(e,v),N(u,e,null),E(e,_),N(p,e,null),d=!0},p(f,k){const M={};!t&&k&8&&(t=!0,M.value=f[3].workflowId,x(()=>t=!1)),r.$set(M);const B={};!s&&k&8&&(s=!0,B.value=f[3].workflowType,x(()=>s=!1)),o.$set(B);const X={};k&2097160&&(X.$$scope={dirty:k,ctx:f}),!c&&k&8&&(c=!0,X.value=f[3].timeRange,x(()=>c=!1)),i.$set(X);const pe={};k&2097152&&(pe.$$scope={dirty:k,ctx:f}),!m&&k&8&&(m=!0,pe.value=f[3].executionStatus,x(()=>m=!1)),u.$set(pe);const me={};k&2097152&&(me.$$scope={dirty:k,ctx:f}),!g&&k&16&&(g=!0,me.value=f[4],x(()=>g=!1)),p.$set(me)},i(f){d||(h(r.$$.fragment,f),h(o.$$.fragment,f),h(i.$$.fragment,f),h(u.$$.fragment,f),h(p.$$.fragment,f),d=!0)},o(f){b(r.$$.fragment,f),b(o.$$.fragment,f),b(i.$$.fragment,f),b(u.$$.fragment,f),b(p.$$.fragment,f),d=!1},d(f){f&&w(e),P(r),P(o),P(i),P(u),P(p)}}}function ht(n){let e,r;return e=new st({props:{icon:!0,id:"advanced-search",placeholder:"Query\u2026",value:n[1]}}),e.$on("submit",n[7]),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&2&&(o.value=t[1]),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function dt(n){let e;return{c(){e=O("All")},l(r){e=j(r,"All")},m(r,t){S(r,e,t)},d(r){r&&w(e)}}}function We(n){let e,r;return e=new J({props:{value:n[3].timeRange,$$slots:{default:[wt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&8&&(o.value=t[3].timeRange),l&2097160&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function wt(n){let e=n[3].timeRange+"",r;return{c(){r=O(e)},l(t){r=j(t,e)},m(t,l){S(t,r,l)},p(t,l){l&8&&e!==(e=t[3].timeRange+"")&&ue(r,e)},d(t){t&&w(r)}}}function bt(n){let e=n[16]+"",r;return{c(){r=O(e)},l(t){r=j(t,e)},m(t,l){S(t,r,l)},p:G,d(t){t&&w(r)}}}function Fe(n){let e,r;return e=new J({props:{value:n[16],$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&2097152&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function kt(n){let e,r,t=n[3].timeRange&&!ce.includes(n[3].timeRange),l,o,s;e=new J({props:{value:null,$$slots:{default:[dt]},$$scope:{ctx:n}}});let a=t&&We(n),i=ce,c=[];for(let u=0;u<i.length;u+=1)c[u]=Fe(Pe(n,i,u));const v=u=>b(c[u],1,1,()=>{c[u]=null});return{c(){R(e.$$.fragment),r=C(),a&&a.c(),l=C();for(let u=0;u<c.length;u+=1)c[u].c();o=L()},l(u){I(e.$$.fragment,u),r=A(u),a&&a.l(u),l=A(u);for(let m=0;m<c.length;m+=1)c[m].l(u);o=L()},m(u,m){N(e,u,m),S(u,r,m),a&&a.m(u,m),S(u,l,m);for(let _=0;_<c.length;_+=1)c[_].m(u,m);S(u,o,m),s=!0},p(u,m){const _={};if(m&2097152&&(_.$$scope={dirty:m,ctx:u}),e.$set(_),m&8&&(t=u[3].timeRange&&!ce.includes(u[3].timeRange)),t?a?(a.p(u,m),m&8&&h(a,1)):(a=We(u),a.c(),h(a,1),a.m(l.parentNode,l)):a&&(z(),b(a,1,1,()=>{a=null}),Q()),m&0){i=ce;let p;for(p=0;p<i.length;p+=1){const g=Pe(u,i,p);c[p]?(c[p].p(g,m),h(c[p],1)):(c[p]=Fe(g),c[p].c(),h(c[p],1),c[p].m(o.parentNode,o))}for(z(),p=i.length;p<c.length;p+=1)v(p);Q()}},i(u){if(!s){h(e.$$.fragment,u),h(a);for(let m=0;m<i.length;m+=1)h(c[m]);s=!0}},o(u){b(e.$$.fragment,u),b(a),c=c.filter(Boolean);for(let m=0;m<c.length;m+=1)b(c[m]);s=!1},d(u){P(e,u),u&&w(r),a&&a.d(u),u&&w(l),Oe(c,u),u&&w(o)}}}function $t(n){let e=n[15]+"",r;return{c(){r=O(e)},l(t){r=j(t,e)},m(t,l){S(t,r,l)},p:G,d(t){t&&w(r)}}}function qe(n,e){let r,t,l;return t=new J({props:{value:e[16],$$slots:{default:[$t]},$$scope:{ctx:e}}}),{key:n,first:null,c(){r=L(),R(t.$$.fragment),this.h()},l(o){r=L(),I(t.$$.fragment,o),this.h()},h(){this.first=r},m(o,s){S(o,r,s),N(t,o,s),l=!0},p(o,s){e=o;const a={};s&2097152&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(o){l||(h(t.$$.fragment,o),l=!0)},o(o){b(t.$$.fragment,o),l=!1},d(o){o&&w(r),P(t,o)}}}function vt(n){let e=[],r=new Map,t,l,o=Object.entries(n[5]);const s=a=>a[15];for(let a=0;a<o.length;a+=1){let i=Ne(n,o,a),c=s(i);r.set(c,e[a]=qe(c,i))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=L()},l(a){for(let i=0;i<e.length;i+=1)e[i].l(a);t=L()},m(a,i){for(let c=0;c<e.length;c+=1)e[c].m(a,i);S(a,t,i),l=!0},p(a,i){i&32&&(o=Object.entries(a[5]),z(),e=Ue(e,i,s,1,a,o,r,t.parentNode,Ve,qe,t,Ne),Q())},i(a){if(!l){for(let i=0;i<o.length;i+=1)h(e[i]);l=!0}},o(a){for(let i=0;i<e.length;i+=1)b(e[i]);l=!1},d(a){for(let i=0;i<e.length;i+=1)e[i].d(a);a&&w(t)}}}function yt(n){let e;return{c(){e=O("Relative")},l(r){e=j(r,"Relative")},m(r,t){S(r,e,t)},d(r){r&&w(e)}}}function Tt(n){let e;return{c(){e=O("UTC")},l(r){e=j(r,"UTC")},m(r,t){S(r,e,t)},d(r){r&&w(e)}}}function St(n){let e;return{c(){e=O("Local")},l(r){e=j(r,"Local")},m(r,t){S(r,e,t)},d(r){r&&w(e)}}}function Et(n){let e,r,t,l,o,s;return e=new J({props:{value:"relative",$$slots:{default:[yt]},$$scope:{ctx:n}}}),t=new J({props:{value:"UTC",$$slots:{default:[Tt]},$$scope:{ctx:n}}}),o=new J({props:{value:"local",$$slots:{default:[St]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),r=C(),R(t.$$.fragment),l=C(),R(o.$$.fragment)},l(a){I(e.$$.fragment,a),r=A(a),I(t.$$.fragment,a),l=A(a),I(o.$$.fragment,a)},m(a,i){N(e,a,i),S(a,r,i),N(t,a,i),S(a,l,i),N(o,a,i),s=!0},p(a,i){const c={};i&2097152&&(c.$$scope={dirty:i,ctx:a}),e.$set(c);const v={};i&2097152&&(v.$$scope={dirty:i,ctx:a}),t.$set(v);const u={};i&2097152&&(u.$$scope={dirty:i,ctx:a}),o.$set(u)},i(a){s||(h(e.$$.fragment,a),h(t.$$.fragment,a),h(o.$$.fragment,a),s=!0)},o(a){b(e.$$.fragment,a),b(t.$$.fragment,a),b(o.$$.fragment,a),s=!1},d(a){P(e,a),a&&w(r),P(t,a),a&&w(l),P(o,a)}}}function Rt(n){let e,r,t,l,o,s;function a(_,p){return _[0]==="advanced"?_t:mt}let i=a(n),c=i(n);const v=[ht,gt],u=[];function m(_,p){return _[0]==="advanced"?0:1}return l=m(n),o=u[l]=v[l](n),{c(){e=W("section"),r=W("p"),c.c(),t=C(),o.c(),this.h()},l(_){e=F(_,"SECTION",{class:!0});var p=q(e);r=F(p,"P",{class:!0});var g=q(r);c.l(g),g.forEach(w),t=A(p),o.l(p),p.forEach(w),this.h()},h(){T(r,"class","text-right text-xs"),T(e,"class","flex flex-col gap-2")},m(_,p){S(_,e,p),E(e,r),c.m(r,null),E(e,t),u[l].m(e,null),s=!0},p(_,[p]){i===(i=a(_))&&c?c.p(_,p):(c.d(1),c=i(_),c&&(c.c(),c.m(r,null)));let g=l;l=m(_),l===g?u[l].p(_,p):(z(),b(u[g],1,1,()=>{u[g]=null}),Q(),o=u[l],o?o.p(_,p):(o=u[l]=v[l](_),o.c()),h(o,1),o.m(e,null))},i(_){s||(h(o),s=!0)},o(_){b(o),s=!1},d(_){_&&w(e),c.d(),u[l].d()}}}function It(n,e,r){let t,l,o,s;D(n,je,y=>r(2,o=y)),D(n,de,y=>r(4,s=y));let{searchType:a}=e;const i=Se({timeRange:"All"}),c={All:null,Running:"Running","Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"},v=y=>()=>{r(0,a=y),ge({parameter:"search",value:a,url:o.url})},u=y=>{const V=new FormData(y.target);r(1,t=String(V.get("query"))),r(3,l=we(t)),ge({url:o.url,parameter:"query",value:t})},m=at(()=>{r(1,t=Se(l)),ge({url:o.url,parameter:"query",value:t,allowEmpty:!0})},300);function _(y){n.$$.not_equal(l.workflowId,y)&&(l.workflowId=y,r(3,l),r(1,t),r(2,o))}function p(y){n.$$.not_equal(l.workflowType,y)&&(l.workflowType=y,r(3,l),r(1,t),r(2,o))}function g(y){n.$$.not_equal(l.timeRange,y)&&(l.timeRange=y,r(3,l),r(1,t),r(2,o))}function d(y){n.$$.not_equal(l.executionStatus,y)&&(l.executionStatus=y,r(3,l),r(1,t),r(2,o))}function $(y){s=y,de.set(s)}return n.$$set=y=>{"searchType"in y&&r(0,a=y.searchType)},n.$$.update=()=>{n.$$.dirty&4&&r(1,t=o.url.searchParams.get("query")),n.$$.dirty&2&&r(3,l=we(t!=null?t:i))},[a,t,o,l,s,c,v,u,m,_,p,g,d,$]}class Nt extends ee{constructor(e){super(),te(this,e,It,Rt,re,{searchType:0})}}function Pt(n){let e,r,t,l,o,s,a;return t=new fe({props:{name:"spinner",scale:.5,class:"block h-full w-full animate-spin"}}),{c(){e=W("div"),r=W("div"),R(t.$$.fragment),l=C(),o=W("h2"),s=O(n[0]),this.h()},l(i){e=F(i,"DIV",{class:!0});var c=q(e);r=F(c,"DIV",{class:!0});var v=q(r);I(t.$$.fragment,v),v.forEach(w),l=A(c),o=F(c,"H2",{class:!0});var u=q(o);s=j(u,n[0]),u.forEach(w),c.forEach(w),this.h()},h(){T(r,"class","flex h-16 w-16 items-center justify-center rounded-full bg-gray-200"),T(o,"class","text-xl font-medium"),T(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(i,c){S(i,e,c),E(e,r),N(t,r,null),E(e,l),E(e,o),E(o,s),a=!0},p(i,[c]){(!a||c&1)&&ue(s,i[0])},i(i){a||(h(t.$$.fragment,i),a=!0)},o(i){b(t.$$.fragment,i),a=!1},d(i){i&&w(e),P(t)}}}function Wt(n,e,r){let{title:t="Loading\u2026"}=e;return n.$$set=l=>{"title"in l&&r(0,t=l.title)},[t]}class Ft extends ee{constructor(e){super(),te(this,e,Wt,Pt,re,{title:0})}}function qt(n){let e;return{c(){e=W("span"),this.h()},l(r){e=F(r,"SPAN",{class:!0}),q(e).forEach(w),this.h()},h(){T(e,"class","new-tag svelte-246dbv")},m(r,t){S(r,e,t)},p:G,i:G,o:G,d(r){r&&w(e)}}}function Ct(n){let e;const r=n[4].default,t=Me(r,n,n[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&8)&&ze(t,r,l,l[3],e?He(r,l[3],o,null):Qe(l[3]),null)},i(l){e||(h(t,l),e=!0)},o(l){b(t,l),e=!1},d(l){t&&t.d(l)}}}function At(n){let e,r,t,l;const o=[Ct,qt],s=[];function a(i,c){return i[0]?0:1}return e=a(n),r=s[e]=o[e](n),{c(){r.c(),t=L()},l(i){r.l(i),t=L()},m(i,c){s[e].m(i,c),S(i,t,c),l=!0},p(i,[c]){let v=e;e=a(i),e===v?s[e].p(i,c):(z(),b(s[v],1,1,()=>{s[v]=null}),Q(),r=s[e],r?r.p(i,c):(r=s[e]=o[e](i),r.c()),h(r,1),r.m(t.parentNode,t))},i(i){l||(h(r),l=!0)},o(i){b(r),l=!1},d(i){s[e].d(i),i&&w(t)}}}function Dt(n,e,r){let t,l;D(n,be,i=>r(2,l=i));let{$$slots:o={},$$scope:s}=e,{feature:a}=e;return n.$$set=i=>{"feature"in i&&r(1,a=i.feature),"$$scope"in i&&r(3,s=i.$$scope)},n.$$.update=()=>{n.$$.dirty&6&&r(0,t=l==null?void 0:l.includes(a))},[t,a,l,s,o]}class Ot extends ee{constructor(e){super(),te(this,e,Dt,At,re,{feature:1})}}function Ce(n,e,r){const t=n.slice();return t[14]=e[r],t}function jt(n){let e,r;return e=new lt({props:{title:"No Workflows Found",content:n[7],error:n[6]}}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&64&&(o.error=t[6]),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Lt(n){let e,r;return e=new nt({props:{items:n[3],updating:n[4],$$slots:{default:[Vt,({visibleItems:t})=>({13:t}),({visibleItems:t})=>t?8192:0]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&8&&(o.items=t[3]),l&16&&(o.updating=t[4]),l&139298&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Bt(n){let e,r;return e=new Ft({}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p:G,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Ae(n){let e,r;return e=new rt({props:{workflow:n[14],namespace:n[1].params.namespace,timeFormat:n[5]}}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&8192&&(o.workflow=t[14]),l&2&&(o.namespace=t[1].params.namespace),l&32&&(o.timeFormat=t[5]),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Ut(n){let e,r,t=n[13],l=[];for(let s=0;s<t.length;s+=1)l[s]=Ae(Ce(n,t,s));const o=s=>b(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=L()},l(s){for(let a=0;a<l.length;a+=1)l[a].l(s);e=L()},m(s,a){for(let i=0;i<l.length;i+=1)l[i].m(s,a);S(s,e,a),r=!0},p(s,a){if(a&8226){t=s[13];let i;for(i=0;i<t.length;i+=1){const c=Ce(s,t,i);l[i]?(l[i].p(c,a),h(l[i],1)):(l[i]=Ae(c),l[i].c(),h(l[i],1),l[i].m(e.parentNode,e))}for(z(),i=t.length;i<l.length;i+=1)o(i);Q()}},i(s){if(!r){for(let a=0;a<t.length;a+=1)h(l[a]);r=!0}},o(s){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)b(l[a]);r=!1},d(s){Oe(l,s),s&&w(e)}}}function Vt(n){let e,r;return e=new tt({props:{$$slots:{default:[Ut]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&139298&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Mt(n){let e,r,t,l,o,s,a,i,c,v=n[1].params.namespace+"",u,m,_,p,g,d,$,y,V,K,ae;o=new fe({props:{name:"namespaceSelect",scale:1.6,class:"mx-2 inline cursor-pointer"}}),a=new Ot({props:{feature:"namespaceSelector"}});function oe(f){n[9](f)}let se={};n[0]!==void 0&&(se.searchType=n[0]),_=new Nt({props:se}),Z.push(()=>Y(_,"searchType",oe));const le=[Bt,Lt,jt],U=[];function ne(f,k){return f[2]?0:f[3].length?1:2}return d=ne(n),$=U[d]=le[d](n),{c(){e=W("div"),r=W("h1"),t=O(`Recent Workflows
    `),l=W("button"),R(o.$$.fragment),s=C(),R(a.$$.fragment),i=C(),c=W("p"),u=O(v),m=C(),R(_.$$.fragment),g=C(),$.c(),y=L(),this.h()},l(f){e=F(f,"DIV",{});var k=q(e);r=F(k,"H1",{class:!0});var M=q(r);t=j(M,`Recent Workflows
    `),l=F(M,"BUTTON",{class:!0,"data-cy":!0});var B=q(l);I(o.$$.fragment,B),s=A(B),I(a.$$.fragment,B),B.forEach(w),M.forEach(w),i=A(k),c=F(k,"P",{class:!0});var X=q(c);u=j(X,v),X.forEach(w),k.forEach(w),m=A(f),I(_.$$.fragment,f),g=A(f),$.l(f),y=L(),this.h()},h(){T(l,"class","relative"),T(l,"data-cy","namespace-select-button"),T(r,"class","text-2xl"),T(c,"class","text-sm text-gray-600")},m(f,k){S(f,e,k),E(e,r),E(r,t),E(r,l),N(o,l,null),E(l,s),N(a,l,null),E(e,i),E(e,c),E(c,u),S(f,m,k),N(_,f,k),S(f,g,k),U[d].m(f,k),S(f,y,k),V=!0,K||(ae=H(l,"click",n[8]),K=!0)},p(f,[k]){(!V||k&2)&&v!==(v=f[1].params.namespace+"")&&ue(u,v);const M={};!p&&k&1&&(p=!0,M.searchType=f[0],x(()=>p=!1)),_.$set(M);let B=d;d=ne(f),d===B?U[d].p(f,k):(z(),b(U[B],1,1,()=>{U[B]=null}),Q(),$=U[d],$?$.p(f,k):($=U[d]=le[d](f),$.c()),h($,1),$.m(y.parentNode,y))},i(f){V||(h(o.$$.fragment,f),h(a.$$.fragment,f),h(_.$$.fragment,f),h($),V=!0)},o(f){b(o.$$.fragment,f),b(a.$$.fragment,f),b(_.$$.fragment,f),b($),V=!1},d(f){f&&w(e),P(o),P(a),f&&w(m),P(_,f),f&&w(g),U[d].d(f),f&&w(y),K=!1,ae()}}}function zt(n,e,r){let t,l,o,s,a,i,c,v,u;D(n,ye,d=>r(10,t=d)),D(n,ve,d=>r(11,l=d)),D(n,je,d=>r(1,o=d)),D(n,Te,d=>r(12,s=d)),D(n,Ke,d=>r(2,a=d)),D(n,Xe,d=>r(3,i=d)),D(n,Ze,d=>r(4,c=d)),D(n,de,d=>r(5,v=d)),D(n,Ye,d=>r(6,u=d));let m=ut(o.url);const _=m==="advanced"?"Please check your syntax and try again.":"If you have filters applied, try adjusting them.";Ge(()=>{_e(Te,s=o.params.namespace,s)}),Je(()=>{const d=o.url.searchParams.get("query"),$=d?we(d):{};_e(ve,l={parameters:$,searchType:m},l)});function p(){_e(ye,t=!t,t),it("namespaceSelector")}function g(d){m=d,r(0,m)}return[m,o,a,i,c,v,u,_,p,g]}class Qt extends ee{constructor(e){super(),te(this,e,zt,Mt,re,{})}}function Ht(n){let e,r;return e=new Qt({}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p:G,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}class Rr extends ee{constructor(e){super(),te(this,e,null,Ht,re,{})}}export{Rr as default};
