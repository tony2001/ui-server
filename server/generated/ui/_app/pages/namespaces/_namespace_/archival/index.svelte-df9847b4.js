import{S as le,i as ie,s as re,e as F,k as R,c as H,a as N,m as C,d,ao as ee,g as k,T as L,O as de,P as ge,Q as be,q as y,o as E,f as J,_ as ke,an as ve,U as we,n as Z,a1 as ye,ak as Ee,p as x,v as Te,N as Ae,t as V,h as W,D as $,I as te,b as q,E as S,l as K,w as P,x as U,y as M,B as O,J as Se,ap as ae,K as Le,aq as Fe}from"../../../../chunks/index-4f955b1f.js";import{a as ue}from"../../../../chunks/workflow-status-f57631ff.js";import{W as He,a as Ne,b as Ie}from"../../../../chunks/_workflow-filters-afb47c3f.js";import{E as Ve}from"../../../../chunks/empty-state-2dcd34e2.js";import{C as _e}from"../../../../chunks/code-block-ea06467c.js";import"../../../../chunks/route-for-api-b747a479.js";import"../../../../chunks/navigation-3f1ea447.js";import"../../../../chunks/singletons-d1fb5791.js";import"../../../../chunks/index-eae5a65e.js";import"../../../../chunks/notifications-2d1c3827.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/route-for-d606e623.js";import"../../../../chunks/simplify-attributes-7a858880.js";import"../../../../chunks/format-date-0917cdb3.js";import"../../../../chunks/table-link-8c74cb5c.js";import"../../../../chunks/stores-8f54f2cb.js";import"../../../../chunks/select-7cfdb92d.js";import"../../../../chunks/index.es-3f7bba01.js";function se(a,e,t){const l=a.slice();return l[23]=e[t],l}const We=a=>({item:a&16}),ne=a=>({item:a[23].data});function De(a){let e;return{c(){e=V("Missing template")},l(t){e=W(t,"Missing template")},m(t,l){k(t,e,l)},d(t){t&&d(e)}}}function oe(a,e){let t,l,i;const n=e[14].default,s=Ae(n,e,e[13],ne),u=s||De();return{key:a,first:null,c(){t=F("svelte-virtual-list-row"),u&&u.c(),l=R(),this.h()},l(r){t=H(r,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var c=N(t);u&&u.l(c),l=C(c),c.forEach(d),this.h()},h(){ee(t,"class","svelte-1kdxoed"),this.first=t},m(r,c){k(r,t,c),u&&u.m(t,null),L(t,l),i=!0},p(r,c){e=r,s&&s.p&&(!i||c&8208)&&de(s,n,e,e[13],i?be(n,e[13],c,We):ge(e[13]),ne)},i(r){i||(y(u,r),i=!0)},o(r){E(u,r),i=!1},d(r){r&&d(t),u&&u.d(r)}}}function Re(a){let e,t,l=[],i=new Map,n,s,u,r,c=a[4];const p=f=>f[23].index;for(let f=0;f<c.length;f+=1){let o=se(a,c,f),_=p(o);i.set(_,l[f]=oe(_,o))}return{c(){e=F("svelte-virtual-list-viewport"),t=F("svelte-virtual-list-contents");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=H(f,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var o=N(e);t=H(o,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var _=N(t);for(let h=0;h<l.length;h+=1)l[h].l(_);_.forEach(d),o.forEach(d),this.h()},h(){J(t,"padding-top",a[5]+"px"),J(t,"padding-bottom",a[6]+"px"),ee(t,"class","svelte-1kdxoed"),J(e,"height",a[0]),ee(e,"class","svelte-1kdxoed"),ke(()=>a[17].call(e))},m(f,o){k(f,e,o),L(e,t);for(let _=0;_<l.length;_+=1)l[_].m(t,null);a[15](t),a[16](e),n=ve(e,a[17].bind(e)),s=!0,u||(r=we(e,"scroll",a[7]),u=!0)},p(f,[o]){o&8208&&(c=f[4],Z(),l=ye(l,o,p,1,f,c,i,t,Ee,oe,null,se),x()),(!s||o&32)&&J(t,"padding-top",f[5]+"px"),(!s||o&64)&&J(t,"padding-bottom",f[6]+"px"),(!s||o&1)&&J(e,"height",f[0])},i(f){if(!s){for(let o=0;o<c.length;o+=1)y(l[o]);s=!0}},o(f){for(let o=0;o<l.length;o+=1)E(l[o]);s=!1},d(f){f&&d(e);for(let o=0;o<l.length;o+=1)l[o].d();a[15](null),a[16](null),n(),u=!1,r()}}}function Ce(a,e,t){let{$$slots:l={},$$scope:i}=e,{items:n}=e,{height:s="100%"}=e,{itemHeight:u=void 0}=e,{start:r=0}=e,{end:c=0}=e,p=[],f,o,_,h=0,T,b,m=0,v=0,I;async function z(g,B,A){const{scrollTop:D}=o;await $();let Q=m-D,w=r;for(;Q<B&&w<g.length;){let G=f[w-r];G||(t(9,c=w+1),await $(),G=f[w-r]),Q+=p[w]=A||G.offsetHeight,w+=1}t(9,c=w);const Y=g.length-c;I=(m+Q)/c,t(6,v=Y*I),p.length=g.length}async function X(){const{scrollTop:g}=o,B=r;for(let w=0;w<f.length;w+=1)p[r+w]=u||f[w].offsetHeight;let A=0,D=0;for(;A<n.length;){const w=p[A]||I;if(D+w>g){t(8,r=A),t(5,m=D);break}D+=w,A+=1}for(;A<n.length&&(D+=p[A]||I,A+=1,!(D>g+h)););t(9,c=A);const Q=n.length-c;for(I=D/c;A<n.length;)p[A++]=I;if(t(6,v=Q*I),r<B){await $();let w=0,Y=0;for(let j=r;j<B;j+=1)f[j-r]&&(w+=p[j],Y+=u||f[j-r].offsetHeight);const G=Y-w;o.scrollTo(0,g+G)}}Te(()=>{f=_.getElementsByTagName("svelte-virtual-list-row"),t(12,b=!0)});function me(g){te[g?"unshift":"push"](()=>{_=g,t(3,_)})}function he(g){te[g?"unshift":"push"](()=>{o=g,t(2,o)})}function pe(){h=this.offsetHeight,t(1,h)}return a.$$set=g=>{"items"in g&&t(10,n=g.items),"height"in g&&t(0,s=g.height),"itemHeight"in g&&t(11,u=g.itemHeight),"start"in g&&t(8,r=g.start),"end"in g&&t(9,c=g.end),"$$scope"in g&&t(13,i=g.$$scope)},a.$$.update=()=>{a.$$.dirty&1792&&t(4,T=n.slice(r,c).map((g,B)=>({index:B+r,data:g}))),a.$$.dirty&7170&&b&&z(n,h,u)},[s,h,o,_,T,m,v,X,r,c,n,u,b,i,l,me,he,pe]}class Pe extends le{constructor(e){super(),ie(this,e,Ce,Re,re,{items:10,height:0,itemHeight:11,start:8,end:9})}}function Ue(a){let e,t,l;return{c(){e=F("tr"),t=F("td"),l=V("Loading"),this.h()},l(i){e=H(i,"TR",{});var n=N(e);t=H(n,"TD",{colspan:!0,class:!0});var s=N(t);l=W(s,"Loading"),s.forEach(d),n.forEach(d),this.h()},h(){q(t,"colspan","5"),q(t,"class","m-auto p-12 text-center font-extralight text-2xl")},m(i,n){k(i,e,n),L(e,t),L(t,l)},p:S,i:S,o:S,d(i){i&&d(e)}}}class Me extends le{constructor(e){super(),ie(this,e,null,Ue,re,{})}}function ce(a){a[8]=a[9].workflows}function Oe(a){let e,t,l,i,n,s,u,r,c,p,f,o,_,h,T;u=new _e({props:{content:"tctl --namespace default namespace update --has enabled",language:"text"}});let b=!a[2]&&fe();return{c(){e=F("h2"),t=V("This namespace is currently not enabled for archival."),l=R(),i=F("p"),n=V("Run this command to enable Archival for Event Histories:"),s=R(),P(u.$$.fragment),r=R(),b&&b.c(),c=R(),p=F("p"),f=V("For more details please check out "),o=F("a"),_=V("Archival Docs"),h=V("."),this.h()},l(m){e=H(m,"H2",{class:!0});var v=N(e);t=W(v,"This namespace is currently not enabled for archival."),v.forEach(d),l=C(m),i=H(m,"P",{});var I=N(i);n=W(I,"Run this command to enable Archival for Event Histories:"),I.forEach(d),s=C(m),U(u.$$.fragment,m),r=C(m),b&&b.l(m),c=C(m),p=H(m,"P",{});var z=N(p);f=W(z,"For more details please check out "),o=H(z,"A",{class:!0,href:!0,target:!0});var X=N(o);_=W(X,"Archival Docs"),X.forEach(d),h=W(z,"."),z.forEach(d),this.h()},h(){q(e,"class","text-2xl"),q(o,"class","text-blue-700 underline"),q(o,"href","https://docs.temporal.io/docs/server/archive-data/"),q(o,"target","_blank")},m(m,v){k(m,e,v),L(e,t),k(m,l,v),k(m,i,v),L(i,n),k(m,s,v),M(u,m,v),k(m,r,v),b&&b.m(m,v),k(m,c,v),k(m,p,v),L(p,f),L(p,o),L(o,_),L(p,h),T=!0},p(m,v){m[2]?b&&(Z(),E(b,1,1,()=>{b=null}),x()):b?v&4&&y(b,1):(b=fe(),b.c(),y(b,1),b.m(c.parentNode,c))},i(m){T||(y(u.$$.fragment,m),y(b),T=!0)},o(m){E(u.$$.fragment,m),E(b),T=!1},d(m){m&&d(e),m&&d(l),m&&d(i),m&&d(s),O(u,m),m&&d(r),b&&b.d(m),m&&d(c),m&&d(p)}}}function qe(a){let e,t,l,i,n,s,u,r,c;function p(_){a[7](_)}let f={};a[3]!==void 0&&(f.timeFormat=a[3]),i=new He({props:f}),te.push(()=>Se(i,"timeFormat",p));let o={ctx:a,current:null,token:null,hasCatch:!1,pending:Ge,then:Be,catch:ze,value:9,blocks:[,,,]};return ae(r=a[4],o),{c(){e=F("h2"),t=V("Archived Workflows"),l=R(),P(i.$$.fragment),s=R(),u=K(),o.block.c(),this.h()},l(_){e=H(_,"H2",{class:!0});var h=N(e);t=W(h,"Archived Workflows"),h.forEach(d),l=C(_),U(i.$$.fragment,_),s=C(_),u=K(),o.block.l(_),this.h()},h(){q(e,"class","text-2xl")},m(_,h){k(_,e,h),L(e,t),k(_,l,h),M(i,_,h),k(_,s,h),k(_,u,h),o.block.m(_,o.anchor=h),o.mount=()=>u.parentNode,o.anchor=u,c=!0},p(_,h){a=_;const T={};!n&&h&8&&(n=!0,T.timeFormat=a[3],Le(()=>n=!1)),i.$set(T),o.ctx=a,h&16&&r!==(r=a[4])&&ae(r,o)||Fe(o,a,h)},i(_){c||(y(i.$$.fragment,_),y(o.block),c=!0)},o(_){E(i.$$.fragment,_);for(let h=0;h<3;h+=1){const T=o.blocks[h];E(T)}c=!1},d(_){_&&d(e),_&&d(l),O(i,_),_&&d(s),_&&d(u),o.block.d(_),o.token=null,o=null}}}function fe(a){let e,t,l,i,n;return i=new _e({props:{content:"tctl --namespace default namespace update -vas enabled",language:"text"}}),{c(){e=F("p"),t=V("To enable Visibility Archival:"),l=R(),P(i.$$.fragment)},l(s){e=H(s,"P",{});var u=N(e);t=W(u,"To enable Visibility Archival:"),u.forEach(d),l=C(s),U(i.$$.fragment,s)},m(s,u){k(s,e,u),L(e,t),k(s,l,u),M(i,s,u),n=!0},i(s){n||(y(i.$$.fragment,s),n=!0)},o(s){E(i.$$.fragment,s),n=!1},d(s){s&&d(e),s&&d(l),O(i,s)}}}function ze(a){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function Be(a){ce(a);let e,t,l,i;const n=[Je,je],s=[];function u(r,c){return r[8].length?0:1}return e=u(a),t=s[e]=n[e](a),{c(){t.c(),l=K()},l(r){t.l(r),l=K()},m(r,c){s[e].m(r,c),k(r,l,c),i=!0},p(r,c){ce(r);let p=e;e=u(r),e===p?s[e].p(r,c):(Z(),E(s[p],1,1,()=>{s[p]=null}),x(),t=s[e],t?t.p(r,c):(t=s[e]=n[e](r),t.c()),y(t,1),t.m(l.parentNode,l))},i(r){i||(y(t),i=!0)},o(r){E(t),i=!1},d(r){s[e].d(r),r&&d(l)}}}function je(a){let e,t;return e=new Ve({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){P(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,i){M(e,l,i),t=!0},p:S,i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function Je(a){let e,t;return e=new Ne({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,i){M(e,l,i),t=!0},p(l,i){const n={};i&2073&&(n.$$scope={dirty:i,ctx:l}),e.$set(n)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function Ke(a){let e,t;return e=new Ie({props:{workflow:a[10],namespace:a[0],timeFormat:a[3]}}),{c(){P(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,i){M(e,l,i),t=!0},p(l,i){const n={};i&1024&&(n.workflow=l[10]),i&1&&(n.namespace=l[0]),i&8&&(n.timeFormat=l[3]),e.$set(n)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function Qe(a){let e,t;return e=new Pe({props:{items:a[8],$$slots:{default:[Ke,({item:l})=>({10:l}),({item:l})=>l?1024:0]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,i){M(e,l,i),t=!0},p(l,i){const n={};i&16&&(n.items=l[8]),i&3081&&(n.$$scope={dirty:i,ctx:l}),e.$set(n)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function Ge(a){let e,t;return e=new Me({}),{c(){P(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,i){M(e,l,i),t=!0},p:S,i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function Xe(a){let e,t,l,i;const n=[qe,Oe],s=[];function u(r,c){return r[1]?0:1}return e=u(a),t=s[e]=n[e](a),{c(){t.c(),l=K()},l(r){t.l(r),l=K()},m(r,c){s[e].m(r,c),k(r,l,c),i=!0},p(r,[c]){let p=e;e=u(r),e===p?s[e].p(r,c):(Z(),E(s[p],1,1,()=>{s[p]=null}),x(),t=s[e],t?t.p(r,c):(t=s[e]=n[e](r),t.c()),y(t,1),t.m(l.parentNode,l))},i(r){i||(y(t),i=!0)},o(r){E(t),i=!1},d(r){s[e].d(r),r&&d(l)}}}const pt=async function({params:a,url:e,stuff:t}){var l,i;const{searchParams:n}=e;n.has("time-range")||n.set("time-range","24 hours");const s=a.namespace,u=n.get("workflow-id"),r=n.get("workflow-type"),c=n.get("time-range"),p=n.get("status"),f={workflowId:u,workflowType:r,closeTime:c,executionStatus:p},_=t.namespaces.find(m=>m.namespaceInfo.name===s),h=((l=_==null?void 0:_.config)===null||l===void 0?void 0:l.historyArchivalState)==="Enabled",T=((i=_==null?void 0:_.config)===null||i===void 0?void 0:i.visibilityArchivalState)==="Enabled";return{props:{initialData:h?await ue(s,f,fetch):Promise.resolve(null),namespace:s,parameters:f,archivalEnabled:h,visibilityArchivalEnabled:T}}};function Ye(a,e,t){let{namespace:l}=e,{initialData:i}=e,{parameters:n}=e,{archivalEnabled:s=!1}=e,{visibilityArchivalEnabled:u=!1}=e,r="UTC",c=i;function p(f){r=f,t(3,r)}return a.$$set=f=>{"namespace"in f&&t(0,l=f.namespace),"initialData"in f&&t(5,i=f.initialData),"parameters"in f&&t(6,n=f.parameters),"archivalEnabled"in f&&t(1,s=f.archivalEnabled),"visibilityArchivalEnabled"in f&&t(2,u=f.visibilityArchivalEnabled)},a.$$.update=()=>{a.$$.dirty&67&&s&&t(4,c=ue(l,n))},[l,s,u,r,c,i,n,p]}class dt extends le{constructor(e){super(),ie(this,e,Ye,Xe,re,{namespace:0,initialData:5,parameters:6,archivalEnabled:1,visibilityArchivalEnabled:2})}}export{dt as default,pt as load};