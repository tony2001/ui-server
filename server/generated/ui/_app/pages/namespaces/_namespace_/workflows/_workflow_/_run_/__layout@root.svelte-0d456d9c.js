var Be=Object.defineProperty;var Te=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var Ae=(o,e,r)=>e in o?Be(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,de=(o,e)=>{for(var r in e||(e={}))Oe.call(e,r)&&Ae(o,r,e[r]);if(Te)for(var r of Te(e))Ue.call(e,r)&&Ae(o,r,e[r]);return o};import{S as O,i as U,s as J,I as pe,e as _,c as $,a as g,d as c,g as S,J as we,K as he,L as _e,q as p,a4 as Je,a5 as Qe,o as h,a6 as ze,w as I,k as j,x as E,m as N,y as T,B as A,l as Se,n as Fe,p as He,t as V,h as C,b as d,M as m,E as ne,ab as We,T as Ke,R as je,N as ee,C as Ne,V as Pe,j as ae}from"../../../../../../chunks/index-604742bf.js";import{p as qe}from"../../../../../../chunks/stores-810822a9.js";import{l as Ge,w as Xe}from"../../../../../../chunks/workflow-run-624d35b2.js";import{f as Ve}from"../../../../../../chunks/index-69aa65a3.js";import{I as Le}from"../../../../../../chunks/index-0574ae1f.js";import{e as Ye}from"../../../../../../chunks/event-view-509b3c08.js";import{w as Ze}from"../../../../../../chunks/workflows-7916e910.js";import{t as xe}from"../../../../../../chunks/workflow-service-1145e8db.js";import{e as Ce,f as et,g as tt,h as rt,i as nt,j as De}from"../../../../../../chunks/route-for-93451b94.js";import{W as at}from"../../../../../../chunks/workflow-status-ca8cb7e9.js";import{r as ot,a as st,h as lt}from"../../../../../../chunks/route-for-api-9ffcc9f9.js";import{n as ft}from"../../../../../../chunks/notifications-cfed8e58.js";import{B as Me}from"../../../../../../chunks/button-0ce95595.js";import{M as it}from"../../../../../../chunks/modal-0d6320a7.js";import{f as ut}from"../../../../../../chunks/events-service-f4aac116.js";import"../../../../../../chunks/index-c9e619a8.js";import"../../../../../../chunks/with-loading-22689bcc.js";import"../../../../../../chunks/persist-store-e5ba5089.js";import"../../../../../../chunks/is-function-b969a126.js";import"../../../../../../chunks/version-check-9d9f9783.js";import"../../../../../../chunks/settings-0aa2906c.js";import"../../../../../../chunks/simplify-attributes-64d6cf1a.js";import"../../../../../../chunks/format-date-919f4714.js";import"../../../../../../chunks/to-duration-271d3946.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/index-fd0dc0c9.js";import"../../../../../../chunks/is-http-3668e20a.js";import"../../../../../../chunks/data-converter-config-8cf2e48e.js";import"../../../../../../chunks/atob-eb4fc9a1.js";import"../../../../../../chunks/get-event-categorization-8a63628f.js";function ct(o){let e,r,t,a;const n=o[1].default,s=pe(n,o,o[0],null);return{c(){e=_("div"),s&&s.c()},l(l){e=$(l,"DIV",{});var f=g(e);s&&s.l(f),f.forEach(c)},m(l,f){S(l,e,f),s&&s.m(e,null),a=!0},p(l,[f]){s&&s.p&&(!a||f&1)&&we(s,n,l,l[0],a?_e(n,l[0],f,null):he(l[0]),null)},i(l){a||(p(s,l),Je(()=>{t&&t.end(1),r=Qe(e,Ve,{y:-50,duration:150,delay:50}),r.start()}),a=!0)},o(l){h(s,l),r&&r.invalidate(),t=ze(e,Ve,{y:-50,duration:150}),a=!1},d(l){l&&c(e),s&&s.d(l),l&&t&&t.end()}}}function mt(o,e,r){let{$$slots:t={},$$scope:a}=e;return o.$$set=n=>{"$$scope"in n&&r(0,a=n.$$scope)},[a,t]}class dt extends O{constructor(e){super(),U(this,e,mt,ct,J,{})}}async function pt({workflow:o,namespace:e,reason:r}){return await ot(st("workflow.terminate",{namespace:e,workflowId:o.id,runId:o.runId}),{options:{method:"POST",body:JSON.stringify({reason:r})},shouldRetry:!1})}function Re(o){let e,r,t,a;return e=new Me({props:{destroy:!0,$$slots:{default:[wt]},$$scope:{ctx:o}}}),e.$on("click",o[3]),t=new it({props:{open:o[2],confirmText:"Terminate",$$slots:{content:[_t],title:[ht]},$$scope:{ctx:o}}}),t.$on("cancelModal",o[4]),t.$on("confirmModal",o[6]),{c(){I(e.$$.fragment),r=j(),I(t.$$.fragment)},l(n){E(e.$$.fragment,n),r=N(n),E(t.$$.fragment,n)},m(n,s){T(e,n,s),S(n,r,s),T(t,n,s),a=!0},p(n,s){const l={};s&1024&&(l.$$scope={dirty:s,ctx:n}),e.$set(l);const f={};s&4&&(f.open=n[2]),s&1026&&(f.$$scope={dirty:s,ctx:n}),t.$set(f)},i(n){a||(p(e.$$.fragment,n),p(t.$$.fragment,n),a=!0)},o(n){h(e.$$.fragment,n),h(t.$$.fragment,n),a=!1},d(n){A(e,n),n&&c(r),A(t,n)}}}function wt(o){let e;return{c(){e=V("Terminate")},l(r){e=C(r,"Terminate")},m(r,t){S(r,e,t)},d(r){r&&c(e)}}}function ht(o){let e,r;return{c(){e=_("h3"),r=V("Terminate Workflow"),this.h()},l(t){e=$(t,"H3",{slot:!0});var a=g(e);r=C(a,"Terminate Workflow"),a.forEach(c),this.h()},h(){d(e,"slot","title")},m(t,a){S(t,e,a),m(e,r)},p:ne,d(t){t&&c(e)}}}function _t(o){let e,r,t,a,n,s,l;return{c(){e=_("div"),r=_("p"),t=V(`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),a=j(),n=_("input"),this.h()},l(f){e=$(f,"DIV",{slot:!0});var i=g(e);r=$(i,"P",{});var w=g(r);t=C(w,`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),w.forEach(c),a=N(i),n=$(i,"INPUT",{class:!0,placeholder:!0}),i.forEach(c),this.h()},h(){d(n,"class","mt-4 block w-full rounded-md border border-gray-200 p-2"),d(n,"placeholder","Enter a reason"),d(e,"slot","content")},m(f,i){S(f,e,i),m(e,r),m(r,t),m(e,a),m(e,n),We(n,o[1]),s||(l=Ke(n,"input",o[8]),s=!0)},p(f,i){i&2&&n.value!==f[1]&&We(n,f[1])},d(f){f&&c(e),s=!1,l()}}}function $t(o){let e=o[5](o[0]),r,t,a=e&&Re(o);return{c(){a&&a.c(),r=Se()},l(n){a&&a.l(n),r=Se()},m(n,s){a&&a.m(n,s),S(n,r,s),t=!0},p(n,[s]){s&1&&(e=n[5](n[0])),e?a?(a.p(n,s),s&1&&p(a,1)):(a=Re(n),a.c(),p(a,1),a.m(r.parentNode,r)):a&&(Fe(),h(a,1,1,()=>{a=null}),He())},i(n){t||(p(a),t=!0)},o(n){h(a),t=!1},d(n){a&&a.d(n),n&&c(r)}}}function gt(o,e,r){let{workflow:t}=e,{namespace:a}=e,n="",s=!1;const l=()=>r(2,s=!0),f=()=>r(2,s=!1),i=v=>String(v.status)==="Running",w=()=>{r(2,s=!1),r(1,n=""),ft.add("success","Workflow Terminated"),window.location.reload()},b=()=>{pt({workflow:t,namespace:a,reason:n}).then(w).catch(lt)};function k(){n=this.value,r(1,n)}return o.$$set=v=>{"workflow"in v&&r(0,t=v.workflow),"namespace"in v&&r(7,a=v.namespace)},[t,n,s,l,f,i,b,a,k]}class kt extends O{constructor(e){super(),U(this,e,gt,$t,J,{workflow:0,namespace:7})}}function bt(o){let e,r;return{c(){e=_("span"),r=V("Download"),this.h()},l(t){e=$(t,"SPAN",{class:!0});var a=g(e);r=C(a,"Download"),a.forEach(c),this.h()},h(){d(e,"class","hidden md:inline")},m(t,a){S(t,e,a),m(e,r)},p:ne,d(t){t&&c(e)}}}function vt(o){let e,r;return e=new Me({props:{secondary:!0,icon:"download",$$slots:{default:[bt]},$$scope:{ctx:o}}}),e.$on("click",o[0]),{c(){I(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,[a]){const n={};a&16&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function yt(o,e,r){let{namespace:t}=e,{workflowId:a}=e,{runId:n}=e;const s=async()=>{const l=await ut({namespace:t,workflowId:a,runId:n}),f=JSON.stringify({events:l},null,2);i(f,`${n}/events.json`,"text/plain");function i(w,b,k){const v=document.createElement("a"),Q=new Blob([w],{type:k});v.href=URL.createObjectURL(Q),v.download=b,v.click()}};return o.$$set=l=>{"namespace"in l&&r(1,t=l.namespace),"workflowId"in l&&r(2,a=l.workflowId),"runId"in l&&r(3,n=l.runId)},[s,t,a,n]}class It extends O{constructor(e){super(),U(this,e,yt,vt,J,{namespace:1,workflowId:2,runId:3})}}function Et(o){let e;return{c(){e=V(o[1])},l(r){e=C(r,o[1])},m(r,t){S(r,e,t)},p(r,t){t&2&&ae(e,r[1])},d(r){r&&c(e)}}}function Tt(o){let e,r,t,a;return{c(){e=V(o[1]),r=j(),t=_("span"),a=V(o[2]),this.h()},l(n){e=C(n,o[1]),r=N(n),t=$(n,"SPAN",{class:!0});var s=g(t);a=C(s,o[2]),s.forEach(c),this.h()},h(){d(t,"class","rounded-sm bg-blue-100 px-2 text-blue-700")},m(n,s){S(n,e,s),S(n,r,s),S(n,t,s),m(t,a)},p(n,s){s&2&&ae(e,n[1]),s&4&&ae(a,n[2])},d(n){n&&c(e),n&&c(r),n&&c(t)}}}function At(o){let e,r;function t(s,l){return s[2]||s[2]===0?Tt:Et}let a=t(o),n=a(o);return{c(){e=_("a"),n.c(),this.h()},l(s){e=$(s,"A",{class:!0,href:!0,"data-cy":!0});var l=g(e);n.l(l),l.forEach(c),this.h()},h(){d(e,"class","block whitespace-nowrap text-sm md:text-base svelte-sf1jtj"),d(e,"href",o[0]),d(e,"data-cy",r=o[4].dataCy),je(e,"active",o[3])},m(s,l){S(s,e,l),n.m(e,null)},p(s,[l]){a===(a=t(s))&&n?n.p(s,l):(n.d(1),n=a(s),n&&(n.c(),n.m(e,null))),l&1&&d(e,"href",s[0]),l&16&&r!==(r=s[4].dataCy)&&d(e,"data-cy",r),l&8&&je(e,"active",s[3])},i:ne,o:ne,d(s){s&&c(e),n.d()}}}function St(o,e,r){let t,a;ee(o,qe,f=>r(5,a=f));let{href:n}=e,{label:s}=e,{amount:l=null}=e;return o.$$set=f=>{r(4,e=Ne(Ne({},e),Pe(f))),"href"in f&&r(0,n=f.href),"label"in f&&r(1,s=f.label),"amount"in f&&r(2,l=f.amount)},o.$$.update=()=>{o.$$.dirty&33&&r(3,t=a.url.pathname.includes(n))},e=Pe(e),[n,s,l,t,e,a]}class re extends O{constructor(e){super(),U(this,e,St,At,J,{href:0,label:1,amount:2})}}function Wt(o){var $e,ge,ke,be,ve;let e,r,t,a,n,s,l,f,i,w,b,k,v,Q=o[1].id+"",oe,se,R,F,le,H,fe,W,q,ie,L,ue,M,ce,z,me,K,x;return n=new Le({props:{scale:.8,name:"caretLeft",class:"inline"}}),b=new at({props:{status:($e=o[1])==null?void 0:$e.status}}),F=new It({props:{namespace:o[0],workflowId:o[1].id,runId:o[1].runId}}),H=new kt({props:{workflow:o[1],namespace:o[0]}}),q=new re({props:{label:"History",href:Ce(de({view:o[3]},o[4])),amount:(ge=o[1])==null?void 0:ge.historyEvents,dataCy:"history-tab"}}),L=new re({props:{label:"Workers",href:et(o[4]),amount:(be=(ke=o[2])==null?void 0:ke.pollers)==null?void 0:be.length,dataCy:"workers-tab"}}),M=new re({props:{label:"Pending Activities",href:tt(o[4]),amount:(ve=o[1].pendingActivities)==null?void 0:ve.length,dataCy:"pending-activities-tab"}}),z=new re({props:{label:"Stack Trace",href:rt(o[4]),dataCy:"stack-trace-tab"}}),K=new re({props:{label:"Queries",href:nt(o[4]),dataCy:"queries-tab"}}),{c(){e=_("header"),r=_("main"),t=_("div"),a=_("a"),I(n.$$.fragment),s=V("Back to Workflows"),f=j(),i=_("div"),w=_("h1"),I(b.$$.fragment),k=j(),v=_("span"),oe=V(Q),se=j(),R=_("div"),I(F.$$.fragment),le=j(),I(H.$$.fragment),fe=j(),W=_("nav"),I(q.$$.fragment),ie=j(),I(L.$$.fragment),ue=j(),I(M.$$.fragment),ce=j(),I(z.$$.fragment),me=j(),I(K.$$.fragment),this.h()},l(u){e=$(u,"HEADER",{class:!0});var y=g(e);r=$(y,"MAIN",{class:!0});var D=g(r);t=$(D,"DIV",{class:!0});var G=g(t);a=$(G,"A",{href:!0,"data-cy":!0,class:!0});var X=g(a);E(n.$$.fragment,X),s=C(X,"Back to Workflows"),X.forEach(c),G.forEach(c),f=N(D),i=$(D,"DIV",{class:!0});var B=g(i);w=$(B,"H1",{class:!0});var Y=g(w);E(b.$$.fragment,Y),k=N(Y),v=$(Y,"SPAN",{class:!0});var te=g(v);oe=C(te,Q),te.forEach(c),Y.forEach(c),se=N(B),R=$(B,"DIV",{class:!0});var Z=g(R);E(F.$$.fragment,Z),le=N(Z),E(H.$$.fragment,Z),Z.forEach(c),B.forEach(c),fe=N(D),W=$(D,"NAV",{class:!0});var P=g(W);E(q.$$.fragment,P),ie=N(P),E(L.$$.fragment,P),ue=N(P),E(M.$$.fragment,P),ce=N(P),E(z.$$.fragment,P),me=N(P),E(K.$$.fragment,P),P.forEach(c),D.forEach(c),y.forEach(c),this.h()},h(){d(a,"href",l=`/namespaces/${o[0]}/workflows?query=${De(o[6])}&search=${o[5]}`),d(a,"data-cy","back-to-workflows"),d(a,"class","back-to-workflows svelte-st9g8m"),d(t,"class","-mt-3 -ml-2 block"),d(v,"class","select-all font-medium"),d(w,"class","relative flex items-center gap-4 text-2xl"),d(R,"class","ml-8 flex items-center justify-end gap-4"),d(i,"class","mb-8 flex items-center justify-between"),d(W,"class","flex flex-wrap gap-6"),d(r,"class","relative flex flex-col gap-1"),d(e,"class","mb-4 flex flex-col gap-4")},m(u,y){S(u,e,y),m(e,r),m(r,t),m(t,a),T(n,a,null),m(a,s),m(r,f),m(r,i),m(i,w),T(b,w,null),m(w,k),m(w,v),m(v,oe),m(i,se),m(i,R),T(F,R,null),m(R,le),T(H,R,null),m(r,fe),m(r,W),T(q,W,null),m(W,ie),T(L,W,null),m(W,ue),T(M,W,null),m(W,ce),T(z,W,null),m(W,me),T(K,W,null),x=!0},p(u,[y]){var Z,P,ye,Ie,Ee;(!x||y&1&&l!==(l=`/namespaces/${u[0]}/workflows?query=${De(u[6])}&search=${u[5]}`))&&d(a,"href",l);const D={};y&2&&(D.status=(Z=u[1])==null?void 0:Z.status),b.$set(D),(!x||y&2)&&Q!==(Q=u[1].id+"")&&ae(oe,Q);const G={};y&1&&(G.namespace=u[0]),y&2&&(G.workflowId=u[1].id),y&2&&(G.runId=u[1].runId),F.$set(G);const X={};y&2&&(X.workflow=u[1]),y&1&&(X.namespace=u[0]),H.$set(X);const B={};y&8&&(B.href=Ce(de({view:u[3]},u[4]))),y&2&&(B.amount=(P=u[1])==null?void 0:P.historyEvents),q.$set(B);const Y={};y&4&&(Y.amount=(Ie=(ye=u[2])==null?void 0:ye.pollers)==null?void 0:Ie.length),L.$set(Y);const te={};y&2&&(te.amount=(Ee=u[1].pendingActivities)==null?void 0:Ee.length),M.$set(te)},i(u){x||(p(n.$$.fragment,u),p(b.$$.fragment,u),p(F.$$.fragment,u),p(H.$$.fragment,u),p(q.$$.fragment,u),p(L.$$.fragment,u),p(M.$$.fragment,u),p(z.$$.fragment,u),p(K.$$.fragment,u),x=!0)},o(u){h(n.$$.fragment,u),h(b.$$.fragment,u),h(F.$$.fragment,u),h(H.$$.fragment,u),h(q.$$.fragment,u),h(L.$$.fragment,u),h(M.$$.fragment,u),h(z.$$.fragment,u),h(K.$$.fragment,u),x=!1},d(u){u&&c(e),A(n),A(b),A(F),A(H),A(q),A(L),A(M),A(z),A(K)}}}function jt(o,e,r){let t,a;ee(o,Ze,k=>r(7,t=k)),ee(o,Ye,k=>r(3,a=k));let{namespace:n}=e,{workflow:s}=e,{workers:l}=e;const f={namespace:n,workflow:s.id,run:s.runId},{parameters:i,searchType:w}=t,b=xe(i);return o.$$set=k=>{"namespace"in k&&r(0,n=k.namespace),"workflow"in k&&r(1,s=k.workflow),"workers"in k&&r(2,l=k.workers)},[n,s,l,a,f,w,b]}class Nt extends O{constructor(e){super(),U(this,e,jt,Wt,J,{namespace:0,workflow:1,workers:2})}}function Pt(o){let e,r,t,a,n,s,l;return t=new Le({props:{name:"spinner",scale:.5,class:"block h-full w-full animate-spin"}}),{c(){e=_("div"),r=_("div"),I(t.$$.fragment),a=j(),n=_("h2"),s=V(o[0]),this.h()},l(f){e=$(f,"DIV",{class:!0});var i=g(e);r=$(i,"DIV",{class:!0});var w=g(r);E(t.$$.fragment,w),w.forEach(c),a=N(i),n=$(i,"H2",{class:!0});var b=g(n);s=C(b,o[0]),b.forEach(c),i.forEach(c),this.h()},h(){d(r,"class","flex h-16 w-16 items-center justify-center rounded-full bg-gray-200"),d(n,"class","text-xl font-medium"),d(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(f,i){S(f,e,i),m(e,r),T(t,r,null),m(e,a),m(e,n),m(n,s),l=!0},p(f,[i]){(!l||i&1)&&ae(s,f[0])},i(f){l||(p(t.$$.fragment,f),l=!0)},o(f){h(t.$$.fragment,f),l=!1},d(f){f&&c(e),A(t)}}}function Vt(o,e,r){let{title:t="Loading\u2026"}=e;return o.$$set=a=>{"title"in a&&r(0,t=a.title)},[t]}class Ct extends O{constructor(e){super(),U(this,e,Vt,Pt,J,{title:0})}}function Dt(o){let e,r;return e=new dt({props:{$$slots:{default:[Ft]},$$scope:{ctx:o}}}),{c(){I(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,a){const n={};a&18&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Rt(o){let e,r;return e=new Ct({}),{c(){I(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p:ne,i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ft(o){let e,r,t;e=new Nt({props:{namespace:o[2],workflow:o[1].workflow,workers:o[1].workers}});const a=o[3].default,n=pe(a,o,o[4],null);return{c(){I(e.$$.fragment),r=j(),n&&n.c()},l(s){E(e.$$.fragment,s),r=N(s),n&&n.l(s)},m(s,l){T(e,s,l),S(s,r,l),n&&n.m(s,l),t=!0},p(s,l){const f={};l&2&&(f.workflow=s[1].workflow),l&2&&(f.workers=s[1].workers),e.$set(f),n&&n.p&&(!t||l&16)&&we(n,a,s,s[4],t?_e(a,s[4],l,null):he(s[4]),null)},i(s){t||(p(e.$$.fragment,s),p(n,s),t=!0)},o(s){h(e.$$.fragment,s),h(n,s),t=!1},d(s){A(e,s),s&&c(r),n&&n.d(s)}}}function Ht(o){let e,r,t,a;const n=[Rt,Dt],s=[];function l(f,i){return f[0]?0:1}return r=l(o),t=s[r]=n[r](o),{c(){e=_("main"),t.c(),this.h()},l(f){e=$(f,"MAIN",{class:!0});var i=g(e);t.l(i),i.forEach(c),this.h()},h(){d(e,"class","flex h-full flex-col gap-6")},m(f,i){S(f,e,i),s[r].m(e,null),a=!0},p(f,[i]){let w=r;r=l(f),r===w?s[r].p(f,i):(Fe(),h(s[w],1,1,()=>{s[w]=null}),He(),t=s[r],t?t.p(f,i):(t=s[r]=n[r](f),t.c()),p(t,1),t.m(e,null))},i(f){a||(p(t),a=!0)},o(f){h(t),a=!1},d(f){f&&c(e),s[r].d()}}}function qt(o,e,r){let t,a,n;ee(o,qe,i=>r(5,t=i)),ee(o,Ge,i=>r(0,a=i)),ee(o,Xe,i=>r(1,n=i));let{$$slots:s={},$$scope:l}=e;const{namespace:f}=t.params;return o.$$set=i=>{"$$scope"in i&&r(4,l=i.$$scope)},[a,n,f,s,l]}class Lt extends O{constructor(e){super(),U(this,e,qt,Ht,J,{})}}function Mt(o){let e;const r=o[0].default,t=pe(r,o,o[1],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&2)&&we(t,r,a,a[1],e?_e(r,a[1],n,null):he(a[1]),null)},i(a){e||(p(t,a),e=!0)},o(a){h(t,a),e=!1},d(a){t&&t.d(a)}}}function Bt(o){let e,r;return e=new Lt({props:{$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){I(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){T(e,t,a),r=!0},p(t,[a]){const n={};a&2&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ot(o,e,r){let{$$slots:t={},$$scope:a}=e;return o.$$set=n=>{"$$scope"in n&&r(1,a=n.$$scope)},[t,a]}class br extends O{constructor(e){super(),U(this,e,Ot,Bt,J,{})}}export{br as default};