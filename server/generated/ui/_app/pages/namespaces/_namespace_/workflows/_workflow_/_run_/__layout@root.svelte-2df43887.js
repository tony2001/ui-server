import{S as ae,i as re,s as oe,e as w,k as P,w as V,c as g,a as k,d as i,m as Q,x as W,b as d,g as D,M as u,y as F,N as Ve,J as me,K as _e,L as pe,q as h,o as b,B as C,l as ce,n as We,p as Fe,P as Me,I as de,t as j,h as L,E as se,j as ie,af as Ae,O as ge,X as De,f as Oe}from"../../../../../../chunks/index-e3f4fa3b.js";import{r as he,a as we,h as Re}from"../../../../../../chunks/route-for-api-8a6e0990.js";import{W as je,f as Le}from"../../../../../../chunks/workflow-status-6835929d.js";import{F as Ce,f as qe,m as Be,n as Ue}from"../../../../../../chunks/index.es-159da191.js";import{p as ke}from"../../../../../../chunks/stores-1c428733.js";import{e as He,f as Je,g as Ke,h as Ye,i as Xe}from"../../../../../../chunks/route-for-8819f00e.js";import{n as ze}from"../../../../../../chunks/notifications-736aa513.js";import{B as ue}from"../../../../../../chunks/button-5b59e270.js";import{f as Ge}from"../../../../../../chunks/events-service-f5fed6bd.js";import"../../../../../../chunks/navigation-3f1ea447.js";import"../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../chunks/index-d28ebc24.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/simplify-attributes-425c0027.js";import"../../../../../../chunks/format-date-5178fba5.js";import"../../../../../../chunks/index-84a0e35f.js";import"../../../../../../chunks/data-converter-config-888a4b59.js";import"../../../../../../chunks/persist-store-789d3dc3.js";import"../../../../../../chunks/atob-5f9d7101.js";import"../../../../../../chunks/index-a8ee0a5c.js";import"../../../../../../chunks/get-event-categorization-b2bce139.js";async function Ze(r,e=fetch){const n=await he(we("task-queue",r),{request:e,params:{taskQueueType:"1"}}),t=await he(we("task-queue",r),{request:e,params:{taskQueueType:"2"}});t.pollers.forEach(a=>{a.taskQueueTypes=["ACTIVITY"]}),n.pollers.forEach(a=>{a.taskQueueTypes=["WORKFLOW"]});const s=a=>(o,f)=>{const l=o[f.identity]||{lastAccessTime:void 0,taskQueueTypes:[]};return o[f.identity]={lastAccessTime:!l.lastAccessTime||l.lastAccessTime<f.lastAccessTime?f.lastAccessTime:l.lastAccessTime,taskQueueTypes:l.taskQueueTypes.concat([a])},o};return t.pollers.filter(a=>n.pollers.some(o=>{if(a.identity===o.identity)return a.taskQueueTypes=[...o.taskQueueTypes,...a.taskQueueTypes],a})),t.pollers.reduce(s("ACTIVITY"),n.pollers.reduce(s("WORKFLOW"),{})),{pollers:t.pollers,taskQueueStatus:t.taskQueueStatus}}async function xe({workflow:r,namespace:e,reason:n}){return await he(we("workflow.terminate",{namespace:e,workflowId:r.id,runId:r.runId}),{options:{method:"POST",body:JSON.stringify({reason:n})},shouldRetry:!1})}const et=r=>({}),Pe=r=>({}),tt=r=>({}),Qe=r=>({});function Se(r){let e,n,t,s,a,o,f,l,_,E,S,p,$,q,v,N,X,B;o=new Ce({props:{icon:qe}});const z=r[4].title,y=de(z,r,r[8],Qe),I=y||nt(),G=r[4].content,M=de(G,r,r[8],Pe),H=M||st();return $=new ue({props:{secondary:!0,$$slots:{default:[at]},$$scope:{ctx:r}}}),$.$on("click",r[6]),v=new ue({props:{destroy:!0,disabled:r[2],$$slots:{default:[rt]},$$scope:{ctx:r}}}),v.$on("click",r[7]),{c(){e=w("div"),n=w("div"),t=P(),s=w("div"),a=w("div"),V(o.$$.fragment),f=P(),l=w("div"),I&&I.c(),_=P(),E=w("div"),H&&H.c(),S=P(),p=w("div"),V($.$$.fragment),q=P(),V(v.$$.fragment),this.h()},l(c){e=g(c,"DIV",{class:!0});var T=k(e);n=g(T,"DIV",{class:!0}),k(n).forEach(i),t=Q(T),s=g(T,"DIV",{class:!0});var A=k(s);a=g(A,"DIV",{class:!0});var U=k(a);W(o.$$.fragment,U),U.forEach(i),f=Q(A),l=g(A,"DIV",{class:!0});var J=k(l);I&&I.l(J),J.forEach(i),_=Q(A),E=g(A,"DIV",{class:!0});var K=k(E);H&&H.l(K),K.forEach(i),S=Q(A),p=g(A,"DIV",{class:!0});var Z=k(p);W($.$$.fragment,Z),q=Q(Z),W(v.$$.fragment,Z),Z.forEach(i),A.forEach(i),T.forEach(i),this.h()},h(){d(n,"class","overlay svelte-p12tlm"),d(a,"class","float-right cursor-pointer p-6"),d(l,"class","title svelte-p12tlm"),d(E,"class","content svelte-p12tlm"),d(p,"class","flex justify-end items-center p-6 space-x-2"),d(s,"class","body svelte-p12tlm"),d(e,"class","modal svelte-p12tlm")},m(c,T){D(c,e,T),u(e,n),u(e,t),u(e,s),u(s,a),F(o,a,null),u(s,f),u(s,l),I&&I.m(l,null),u(s,_),u(s,E),H&&H.m(E,null),u(s,S),u(s,p),F($,p,null),u(p,q),F(v,p,null),N=!0,X||(B=Ve(a,"click",r[5]),X=!0)},p(c,T){y&&y.p&&(!N||T&256)&&me(y,z,c,c[8],N?pe(z,c[8],T,tt):_e(c[8]),Qe),M&&M.p&&(!N||T&256)&&me(M,G,c,c[8],N?pe(G,c[8],T,et):_e(c[8]),Pe);const A={};T&256&&(A.$$scope={dirty:T,ctx:c}),$.$set(A);const U={};T&4&&(U.disabled=c[2]),T&258&&(U.$$scope={dirty:T,ctx:c}),v.$set(U)},i(c){N||(h(o.$$.fragment,c),h(I,c),h(H,c),h($.$$.fragment,c),h(v.$$.fragment,c),N=!0)},o(c){b(o.$$.fragment,c),b(I,c),b(H,c),b($.$$.fragment,c),b(v.$$.fragment,c),N=!1},d(c){c&&i(e),C(o),I&&I.d(c),H&&H.d(c),C($),C(v),X=!1,B()}}}function nt(r){let e,n;return{c(){e=w("h3"),n=j("Title")},l(t){e=g(t,"H3",{});var s=k(e);n=L(s,"Title"),s.forEach(i)},m(t,s){D(t,e,s),u(e,n)},p:se,d(t){t&&i(e)}}}function st(r){let e,n;return{c(){e=w("span"),n=j("Content")},l(t){e=g(t,"SPAN",{});var s=k(e);n=L(s,"Content"),s.forEach(i)},m(t,s){D(t,e,s),u(e,n)},p:se,d(t){t&&i(e)}}}function at(r){let e;return{c(){e=j("Cancel")},l(n){e=L(n,"Cancel")},m(n,t){D(n,e,t)},d(n){n&&i(e)}}}function rt(r){let e;return{c(){e=j(r[1])},l(n){e=L(n,r[1])},m(n,t){D(n,e,t)},p(n,t){t&2&&ie(e,n[1])},d(n){n&&i(e)}}}function ot(r){let e,n,t=r[0]&&Se(r);return{c(){t&&t.c(),e=ce()},l(s){t&&t.l(s),e=ce()},m(s,a){t&&t.m(s,a),D(s,e,a),n=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&h(t,1)):(t=Se(s),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(We(),b(t,1,1,()=>{t=null}),Fe())},i(s){n||(h(t),n=!0)},o(s){b(t),n=!1},d(s){t&&t.d(s),s&&i(e)}}}function lt(r,e,n){let{$$slots:t={},$$scope:s}=e,{open:a=!1}=e,{confirmText:o="Confirm"}=e,{confirmDisabled:f=!1}=e;const l=Me(),_=()=>l("cancelModal",{}),E=()=>l("cancelModal",{}),S=()=>l("confirmModal",{});return r.$$set=p=>{"open"in p&&n(0,a=p.open),"confirmText"in p&&n(1,o=p.confirmText),"confirmDisabled"in p&&n(2,f=p.confirmDisabled),"$$scope"in p&&n(8,s=p.$$scope)},[a,o,f,l,t,_,E,S,s]}class ft extends ae{constructor(e){super(),re(this,e,lt,ot,oe,{open:0,confirmText:1,confirmDisabled:2})}}function Ne(r){let e,n,t,s;return e=new ue({props:{destroy:!0,$$slots:{default:[it]},$$scope:{ctx:r}}}),e.$on("click",r[3]),t=new ft({props:{open:r[2],confirmText:"Terminate",$$slots:{content:[ut],title:[ct]},$$scope:{ctx:r}}}),t.$on("cancelModal",r[4]),t.$on("confirmModal",r[6]),{c(){V(e.$$.fragment),n=P(),V(t.$$.fragment)},l(a){W(e.$$.fragment,a),n=Q(a),W(t.$$.fragment,a)},m(a,o){F(e,a,o),D(a,n,o),F(t,a,o),s=!0},p(a,o){const f={};o&1024&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const l={};o&4&&(l.open=a[2]),o&1026&&(l.$$scope={dirty:o,ctx:a}),t.$set(l)},i(a){s||(h(e.$$.fragment,a),h(t.$$.fragment,a),s=!0)},o(a){b(e.$$.fragment,a),b(t.$$.fragment,a),s=!1},d(a){C(e,a),a&&i(n),C(t,a)}}}function it(r){let e;return{c(){e=j("Terminate")},l(n){e=L(n,"Terminate")},m(n,t){D(n,e,t)},d(n){n&&i(e)}}}function ct(r){let e,n;return{c(){e=w("h3"),n=j("Terminate Workflow"),this.h()},l(t){e=g(t,"H3",{slot:!0});var s=k(e);n=L(s,"Terminate Workflow"),s.forEach(i),this.h()},h(){d(e,"slot","title")},m(t,s){D(t,e,s),u(e,n)},p:se,d(t){t&&i(e)}}}function ut(r){let e,n,t,s,a,o,f;return{c(){e=w("div"),n=w("p"),t=j(`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),s=P(),a=w("input"),this.h()},l(l){e=g(l,"DIV",{slot:!0});var _=k(e);n=g(_,"P",{});var E=k(n);t=L(E,`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),E.forEach(i),s=Q(_),a=g(_,"INPUT",{class:!0,placeholder:!0}),_.forEach(i),this.h()},h(){d(a,"class","block w-full border border-gray-200 rounded-md p-2 mt-4"),d(a,"placeholder","Enter a reason"),d(e,"slot","content")},m(l,_){D(l,e,_),u(e,n),u(n,t),u(e,s),u(e,a),Ae(a,r[1]),o||(f=Ve(a,"input",r[8]),o=!0)},p(l,_){_&2&&a.value!==l[1]&&Ae(a,l[1])},d(l){l&&i(e),o=!1,f()}}}function mt(r){let e=r[5](r[0]),n,t,s=e&&Ne(r);return{c(){s&&s.c(),n=ce()},l(a){s&&s.l(a),n=ce()},m(a,o){s&&s.m(a,o),D(a,n,o),t=!0},p(a,[o]){o&1&&(e=a[5](a[0])),e?s?(s.p(a,o),o&1&&h(s,1)):(s=Ne(a),s.c(),h(s,1),s.m(n.parentNode,n)):s&&(We(),b(s,1,1,()=>{s=null}),Fe())},i(a){t||(h(s),t=!0)},o(a){b(s),t=!1},d(a){s&&s.d(a),a&&i(n)}}}function _t(r,e,n){let{workflow:t}=e,{namespace:s}=e,a="",o=!1;const f=()=>n(2,o=!0),l=()=>n(2,o=!1),_=$=>String($.status)==="Running",E=()=>{n(2,o=!1),n(1,a=""),ze.add("success","Workflow Terminated"),window.location.reload()},S=()=>{xe({workflow:t,namespace:s,reason:a}).then(E).catch(Re)};function p(){a=this.value,n(1,a)}return r.$$set=$=>{"workflow"in $&&n(0,t=$.workflow),"namespace"in $&&n(7,s=$.namespace)},[t,a,o,f,l,_,S,s,p]}class pt extends ae{constructor(e){super(),re(this,e,_t,mt,oe,{workflow:0,namespace:7})}}function dt(r){let e,n;return{c(){e=w("span"),n=j("Download"),this.h()},l(t){e=g(t,"SPAN",{class:!0});var s=k(e);n=L(s,"Download"),s.forEach(i),this.h()},h(){d(e,"class","hidden md:inline")},m(t,s){D(t,e,s),u(e,n)},p:se,d(t){t&&i(e)}}}function ht(r){let e,n;return e=new ue({props:{secondary:!0,icon:Be,$$slots:{default:[dt]},$$scope:{ctx:r}}}),e.$on("click",r[0]),{c(){V(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,s){F(e,t,s),n=!0},p(t,[s]){const a={};s&32&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function wt(r,e,n){let t;ge(r,ke,l=>n(1,t=l));const{workflow:s,run:a,namespace:o}=t.params;return[async()=>{const l=await Ge({namespace:o,workflowId:s,runId:a}),_=JSON.stringify({events:l},null,2);E(_,`${a}/events.json`,"text/plain");function E(S,p,$){const q=document.createElement("a"),v=new Blob([S],{type:$});q.href=URL.createObjectURL(v),q.download=p,q.click()}}]}class gt extends ae{constructor(e){super(),re(this,e,wt,ht,oe,{})}}function kt(r){let e;return{c(){e=j(r[1])},l(n){e=L(n,r[1])},m(n,t){D(n,e,t)},p(n,t){t&2&&ie(e,n[1])},d(n){n&&i(e)}}}function $t(r){let e,n,t,s;return{c(){e=j(r[1]),n=P(),t=w("span"),s=j(r[2]),this.h()},l(a){e=L(a,r[1]),n=Q(a),t=g(a,"SPAN",{class:!0});var o=k(t);s=L(o,r[2]),o.forEach(i),this.h()},h(){d(t,"class","px-2 text-blue-700 bg-blue-100 rounded-sm")},m(a,o){D(a,e,o),D(a,n,o),D(a,t,o),u(t,s)},p(a,o){o&2&&ie(e,a[1]),o&4&&ie(s,a[2])},d(a){a&&i(e),a&&i(n),a&&i(t)}}}function bt(r){let e;function n(a,o){return a[2]||a[2]===0?$t:kt}let t=n(r),s=t(r);return{c(){e=w("a"),s.c(),this.h()},l(a){e=g(a,"A",{class:!0,href:!0});var o=k(e);s.l(o),o.forEach(i),this.h()},h(){d(e,"class","block text-sm md:text-base border-b-2 whitespace-nowrap svelte-sf1jtj"),d(e,"href",r[0]),De(e,"active",r[3])},m(a,o){D(a,e,o),s.m(e,null)},p(a,[o]){t===(t=n(a))&&s?s.p(a,o):(s.d(1),s=t(a),s&&(s.c(),s.m(e,null))),o&1&&d(e,"href",a[0]),o&8&&De(e,"active",a[3])},i:se,o:se,d(a){a&&i(e),s.d()}}}function vt(r,e,n){let t,s;ge(r,ke,l=>n(4,s=l));let{href:a}=e,{label:o}=e,{amount:f=null}=e;return r.$$set=l=>{"href"in l&&n(0,a=l.href),"label"in l&&n(1,o=l.label),"amount"in l&&n(2,f=l.amount)},r.$$.update=()=>{r.$$.dirty&17&&n(3,t=s.url.pathname.includes(a))},[a,o,f,t,s]}class fe extends ae{constructor(e){super(),re(this,e,vt,bt,oe,{href:0,label:1,amount:2})}}function Tt(r){var Z,$e,be,ve,Te;let e,n,t,s,a,o,f,l,_,E,S,p=r[1].id+"",$,q,v,N,X,B,z,y,I,G,M,H,c,T,A,U,J,K;return s=new Ce({props:{icon:Ue}}),_=new je({props:{status:(Z=r[1])==null?void 0:Z.status}}),N=new gt({}),B=new pt({props:{workflow:r[1],namespace:r[0]}}),I=new fe({props:{label:"History",href:He(r[3]),amount:($e=r[1])==null?void 0:$e.historyEvents}}),M=new fe({props:{label:"Workers",href:Je(r[3]),amount:(ve=(be=r[2])==null?void 0:be.pollers)==null?void 0:ve.length}}),c=new fe({props:{label:"Pending Activities",href:Ke(r[3]),amount:(Te=r[1].pendingActivities)==null?void 0:Te.length}}),A=new fe({props:{label:"Stack Trace",href:Ye(r[3])}}),J=new fe({props:{label:"Queries",href:Xe(r[3])}}),{c(){e=w("header"),n=w("main"),t=w("a"),V(s.$$.fragment),o=P(),f=w("div"),l=w("h1"),V(_.$$.fragment),E=P(),S=w("span"),$=j(p),q=P(),v=w("div"),V(N.$$.fragment),X=P(),V(B.$$.fragment),z=P(),y=w("nav"),V(I.$$.fragment),G=P(),V(M.$$.fragment),H=P(),V(c.$$.fragment),T=P(),V(A.$$.fragment),U=P(),V(J.$$.fragment),this.h()},l(m){e=g(m,"HEADER",{class:!0});var O=k(e);n=g(O,"MAIN",{class:!0});var Y=k(n);t=g(Y,"A",{href:!0,class:!0,style:!0});var ne=k(t);W(s.$$.fragment,ne),ne.forEach(i),o=Q(Y),f=g(Y,"DIV",{class:!0});var x=k(f);l=g(x,"H1",{class:!0});var ee=k(l);W(_.$$.fragment,ee),E=Q(ee),S=g(ee,"SPAN",{class:!0});var le=k(S);$=L(le,p),le.forEach(i),ee.forEach(i),q=Q(x),v=g(x,"DIV",{class:!0});var te=k(v);W(N.$$.fragment,te),X=Q(te),W(B.$$.fragment,te),te.forEach(i),x.forEach(i),z=Q(Y),y=g(Y,"NAV",{class:!0});var R=k(y);W(I.$$.fragment,R),G=Q(R),W(M.$$.fragment,R),H=Q(R),W(c.$$.fragment,R),T=Q(R),W(A.$$.fragment,R),U=Q(R),W(J.$$.fragment,R),R.forEach(i),Y.forEach(i),O.forEach(i),this.h()},h(){d(t,"href",a="/namespaces/"+r[0]+"/workflows"),d(t,"class","absolute top-2 back-to-workflows"),Oe(t,"left","-1.5rem"),d(S,"class","font-medium select-all"),d(l,"class","text-2xl flex relative items-center gap-4"),d(v,"class","ml-8 flex justify-end items-center gap-4"),d(f,"class","flex justify-between items-center mb-8"),d(y,"class","flex gap-6 flex-wrap"),d(n,"class","flex flex-col gap-1 relative"),d(e,"class","flex flex-col gap-4")},m(m,O){D(m,e,O),u(e,n),u(n,t),F(s,t,null),u(n,o),u(n,f),u(f,l),F(_,l,null),u(l,E),u(l,S),u(S,$),u(f,q),u(f,v),F(N,v,null),u(v,X),F(B,v,null),u(n,z),u(n,y),F(I,y,null),u(y,G),F(M,y,null),u(y,H),F(c,y,null),u(y,T),F(A,y,null),u(y,U),F(J,y,null),K=!0},p(m,[O]){var te,R,Ee,ye,Ie;(!K||O&1&&a!==(a="/namespaces/"+m[0]+"/workflows"))&&d(t,"href",a);const Y={};O&2&&(Y.status=(te=m[1])==null?void 0:te.status),_.$set(Y),(!K||O&2)&&p!==(p=m[1].id+"")&&ie($,p);const ne={};O&2&&(ne.workflow=m[1]),O&1&&(ne.namespace=m[0]),B.$set(ne);const x={};O&2&&(x.amount=(R=m[1])==null?void 0:R.historyEvents),I.$set(x);const ee={};O&4&&(ee.amount=(ye=(Ee=m[2])==null?void 0:Ee.pollers)==null?void 0:ye.length),M.$set(ee);const le={};O&2&&(le.amount=(Ie=m[1].pendingActivities)==null?void 0:Ie.length),c.$set(le)},i(m){K||(h(s.$$.fragment,m),h(_.$$.fragment,m),h(N.$$.fragment,m),h(B.$$.fragment,m),h(I.$$.fragment,m),h(M.$$.fragment,m),h(c.$$.fragment,m),h(A.$$.fragment,m),h(J.$$.fragment,m),K=!0)},o(m){b(s.$$.fragment,m),b(_.$$.fragment,m),b(N.$$.fragment,m),b(B.$$.fragment,m),b(I.$$.fragment,m),b(M.$$.fragment,m),b(c.$$.fragment,m),b(A.$$.fragment,m),b(J.$$.fragment,m),K=!1},d(m){m&&i(e),C(s),C(_),C(N),C(B),C(I),C(M),C(c),C(A),C(J)}}}function Et(r,e,n){let t;ge(r,ke,l=>n(4,t=l));let{namespace:s}=e,{workflow:a}=e,{workers:o}=e;const f={namespace:s,workflow:a.id,run:a.runId};return r.$$set=l=>{"namespace"in l&&n(0,s=l.namespace),"workflow"in l&&n(1,a=l.workflow),"workers"in l&&n(2,o=l.workers)},r.$$.update=()=>{r.$$.dirty&16&&t.url.pathname.includes(He(f))},[s,a,o,f,t]}class yt extends ae{constructor(e){super(),re(this,e,Et,Tt,oe,{namespace:0,workflow:1,workers:2})}}function It(r){let e,n,t,s;n=new yt({props:{namespace:r[1],workflow:r[0],workers:r[2]}});const a=r[4].default,o=de(a,r,r[3],null);return{c(){e=w("main"),V(n.$$.fragment),t=P(),o&&o.c(),this.h()},l(f){e=g(f,"MAIN",{class:!0});var l=k(e);W(n.$$.fragment,l),t=Q(l),o&&o.l(l),l.forEach(i),this.h()},h(){d(e,"class","flex flex-col gap-6 h-full")},m(f,l){D(f,e,l),F(n,e,null),u(e,t),o&&o.m(e,null),s=!0},p(f,[l]){const _={};l&2&&(_.namespace=f[1]),l&1&&(_.workflow=f[0]),l&4&&(_.workers=f[2]),n.$set(_),o&&o.p&&(!s||l&8)&&me(o,a,f,f[3],s?pe(a,f[3],l,null):_e(f[3]),null)},i(f){s||(h(n.$$.fragment,f),h(o,f),s=!0)},o(f){b(n.$$.fragment,f),b(o,f),s=!1},d(f){f&&i(e),C(n),o&&o.d(f)}}}const Xt=async function({params:r,fetch:e}){const{workflow:n,run:t,namespace:s}=r,a={namespace:s,workflowId:decodeURIComponent(n),runId:t},o=await Le(a,e),{taskQueue:f}=o,l=await Ze({queue:f,namespace:s});return{props:{workflow:o,namespace:s,workers:l},stuff:{workflow:o,workers:l}}};function At(r,e,n){let{$$slots:t={},$$scope:s}=e,{workflow:a}=e,{namespace:o}=e,{workers:f}=e;return r.$$set=l=>{"workflow"in l&&n(0,a=l.workflow),"namespace"in l&&n(1,o=l.namespace),"workers"in l&&n(2,f=l.workers),"$$scope"in l&&n(3,s=l.$$scope)},[a,o,f,s,t]}class zt extends ae{constructor(e){super(),re(this,e,At,It,oe,{workflow:0,namespace:1,workers:2})}}export{zt as default,Xt as load};