import{S as ge,i as he,s as we,L as ke,aS as ye,e as k,t as M,k as F,w as W,c as y,a as I,h as B,d as f,m as O,x as L,b as w,U as ce,g as V,G as $,y as N,j as se,q as H,o as G,B as q,K as Ee,P as Ie,Q as De,l as ue,O as Ae,F as Ve,R as Ce,n as me,a1 as Se,ar as Pe,p as $e,H as je,I as He,J as Ge}from"../../../../../../../../chunks/vendor-c58cc9e7.js";import{i as Te,a as Fe,g as _e}from"../../../../../../../../chunks/index-58e45ca5.js";import{p as be}from"../../../../../../../../chunks/stores-810f7c97.js";import{E as Oe}from"../../../../../../../../chunks/empty-state-e72ccb43.js";import{P as Re}from"../../../../../../../../chunks/pagination-3da5c2a8.js";import{F as We}from"../../../../../../../../chunks/filter-select-913ec031.js";import{O as U}from"../../../../../../../../chunks/select-0e194110.js";import"../../../../../../../../chunks/data-converter-config-1c047ebd.js";import"../../../../../../../../chunks/atob-5f9d7101.js";import"../../../../../../../../chunks/format-date-85eb5f8c.js";import"../../../../../../../../chunks/navigation-093db9e2.js";import"../../../../../../../../chunks/singletons-a6a7384f.js";function Le(a){let e,t,l,r=a[0].id+"",n,i,c,v,g,p=a[0].name+"",b,P,C,A,s,o,D=a[0].timestamp+"",h,K,S;return s=new ke({props:{icon:ye,class:"inline"}}),{c(){e=k("a"),t=k("article"),l=k("p"),n=M(r),i=F(),c=k("div"),v=k("h2"),g=k("span"),b=M(p),C=F(),A=k("p"),W(s.$$.fragment),o=F(),h=M(D),this.h()},l(_){e=y(_,"A",{href:!0,"sveltekit:noscroll":!0,class:!0});var E=I(e);t=y(E,"ARTICLE",{class:!0});var T=I(t);l=y(T,"P",{class:!0});var X=I(l);n=B(X,r),X.forEach(f),i=O(T),c=y(T,"DIV",{class:!0});var Q=I(c);v=y(Q,"H2",{class:!0});var J=I(v);g=y(J,"SPAN",{class:!0});var z=I(g);b=B(z,p),z.forEach(f),J.forEach(f),C=O(Q),A=y(Q,"P",{class:!0});var d=I(A);L(s.$$.fragment,d),o=O(d),h=B(d,D),d.forEach(f),Q.forEach(f),T.forEach(f),E.forEach(f),this.h()},h(){w(l,"class","w-5 text-center text-gray-500"),w(g,"class",P="label "+a[0].classification+" font-semibold svelte-74j1yw"),w(v,"class","mb-2"),w(A,"class","text-sm"),w(c,"class","w-full"),w(t,"class","flex gap-4 items-center p-4 w-full"),w(e,"href",K=a[0].id+a[1].url.search),w(e,"sveltekit:noscroll",""),w(e,"class","flex border-b-2 border-gray-300 w-full items-center hover:bg-gray-50 svelte-74j1yw"),ce(e,"active",a[2](a[1].params.eventId))},m(_,E){V(_,e,E),$(e,t),$(t,l),$(l,n),$(t,i),$(t,c),$(c,v),$(v,g),$(g,b),$(c,C),$(c,A),N(s,A,null),$(A,o),$(A,h),S=!0},p(_,[E]){(!S||E&1)&&r!==(r=_[0].id+"")&&se(n,r),(!S||E&1)&&p!==(p=_[0].name+"")&&se(b,p),(!S||E&1&&P!==(P="label "+_[0].classification+" font-semibold svelte-74j1yw"))&&w(g,"class",P),(!S||E&1)&&D!==(D=_[0].timestamp+"")&&se(h,D),(!S||E&3&&K!==(K=_[0].id+_[1].url.search))&&w(e,"href",K),E&6&&ce(e,"active",_[2](_[1].params.eventId))},i(_){S||(H(s.$$.fragment,_),S=!0)},o(_){G(s.$$.fragment,_),S=!1},d(_){_&&f(e),q(s)}}}function Ne(a,e,t){let l;Ee(a,be,i=>t(1,l=i));let{event:r}=e;const n=i=>{if(Te(r))return r.id===i;if(Fe(r))return r.eventIds.has(i)};return a.$$set=i=>{"event"in i&&t(0,r=i.event)},[r,l,n]}class qe extends ge{constructor(e){super();he(this,e,Ne,Le,we,{event:0})}}function pe(a,e,t){const l=a.slice();return l[8]=e[t],l}function Me(a){let e;return{c(){e=M("All")},l(t){e=B(t,"All")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Be(a){let e;return{c(){e=M("Activity")},l(t){e=B(t,"Activity")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Je(a){let e;return{c(){e=M("Command")},l(t){e=B(t,"Command")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Ke(a){let e;return{c(){e=M("Signal")},l(t){e=B(t,"Signal")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Qe(a){let e;return{c(){e=M("Timer")},l(t){e=B(t,"Timer")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Ue(a){let e;return{c(){e=M("Child Workflow")},l(t){e=B(t,"Child Workflow")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function ze(a){let e;return{c(){e=M("Workflow")},l(t){e=B(t,"Workflow")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Xe(a){let e,t,l,r,n,i,c,v,g,p,b,P,C,A;return e=new U({props:{value:void 0,$$slots:{default:[Me]},$$scope:{ctx:a}}}),l=new U({props:{value:"activity",$$slots:{default:[Be]},$$scope:{ctx:a}}}),n=new U({props:{value:"command",$$slots:{default:[Je]},$$scope:{ctx:a}}}),c=new U({props:{value:"signal",$$slots:{default:[Ke]},$$scope:{ctx:a}}}),g=new U({props:{value:"timer",$$slots:{default:[Qe]},$$scope:{ctx:a}}}),b=new U({props:{value:"child-workflow",$$slots:{default:[Ue]},$$scope:{ctx:a}}}),C=new U({props:{value:"workflow",$$slots:{default:[ze]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment),t=F(),W(l.$$.fragment),r=F(),W(n.$$.fragment),i=F(),W(c.$$.fragment),v=F(),W(g.$$.fragment),p=F(),W(b.$$.fragment),P=F(),W(C.$$.fragment)},l(s){L(e.$$.fragment,s),t=O(s),L(l.$$.fragment,s),r=O(s),L(n.$$.fragment,s),i=O(s),L(c.$$.fragment,s),v=O(s),L(g.$$.fragment,s),p=O(s),L(b.$$.fragment,s),P=O(s),L(C.$$.fragment,s)},m(s,o){N(e,s,o),V(s,t,o),N(l,s,o),V(s,r,o),N(n,s,o),V(s,i,o),N(c,s,o),V(s,v,o),N(g,s,o),V(s,p,o),N(b,s,o),V(s,P,o),N(C,s,o),A=!0},p(s,o){const D={};o&32&&(D.$$scope={dirty:o,ctx:s}),e.$set(D);const h={};o&32&&(h.$$scope={dirty:o,ctx:s}),l.$set(h);const K={};o&32&&(K.$$scope={dirty:o,ctx:s}),n.$set(K);const S={};o&32&&(S.$$scope={dirty:o,ctx:s}),c.$set(S);const _={};o&32&&(_.$$scope={dirty:o,ctx:s}),g.$set(_);const E={};o&32&&(E.$$scope={dirty:o,ctx:s}),b.$set(E);const T={};o&32&&(T.$$scope={dirty:o,ctx:s}),C.$set(T)},i(s){A||(H(e.$$.fragment,s),H(l.$$.fragment,s),H(n.$$.fragment,s),H(c.$$.fragment,s),H(g.$$.fragment,s),H(b.$$.fragment,s),H(C.$$.fragment,s),A=!0)},o(s){G(e.$$.fragment,s),G(l.$$.fragment,s),G(n.$$.fragment,s),G(c.$$.fragment,s),G(g.$$.fragment,s),G(b.$$.fragment,s),G(C.$$.fragment,s),A=!1},d(s){q(e,s),s&&f(t),q(l,s),s&&f(r),q(n,s),s&&f(i),q(c,s),s&&f(v),q(g,s),s&&f(p),q(b,s),s&&f(P),q(C,s)}}}function ve(a){let e,t,l,r;return t=new Oe({props:{title:"No Events Match",content:"There are no events that match your filters. Adjust your filters to see your events."}}),{c(){e=k("div"),W(t.$$.fragment),l=F(),this.h()},l(n){e=y(n,"DIV",{class:!0});var i=I(e);L(t.$$.fragment,i),l=O(i),i.forEach(f),this.h()},h(){w(e,"class","p-2")},m(n,i){V(n,e,i),N(t,e,null),$(e,l),r=!0},p:Ae,i(n){r||(H(t.$$.fragment,n),r=!0)},o(n){G(t.$$.fragment,n),r=!1},d(n){n&&f(e),q(t)}}}function de(a,e){let t,l,r;return l=new qe({props:{event:e[8]}}),{key:a,first:null,c(){t=ue(),W(l.$$.fragment),this.h()},l(n){t=ue(),L(l.$$.fragment,n),this.h()},h(){this.first=t},m(n,i){V(n,t,i),N(l,n,i),r=!0},p(n,i){e=n;const c={};i&128&&(c.event=e[8]),l.$set(c)},i(n){r||(H(l.$$.fragment,n),r=!0)},o(n){G(l.$$.fragment,n),r=!1},d(n){n&&f(t),q(l,n)}}}function Ye(a){let e,t,l,r,n,i,c,v,g,p,b,P,C,A,s,o,D,h=[],K=new Map,S,_,E,T;function X(u){a[4](u)}let Q={parameter:"category",$$slots:{default:[Xe]},$$scope:{ctx:a}};a[0]!==void 0&&(Q.value=a[0]),v=new We({props:Q}),Ie.push(()=>De(v,"value",X));let J=a[7];const z=u=>u[8].id;for(let u=0;u<J.length;u+=1){let m=pe(a,J,u),j=z(m);K.set(j,h[u]=de(j,m))}let d=null;J.length||(d=ve());const x=a[3].default,R=Ve(x,a,a[5],null);return{c(){e=k("section"),t=k("div"),l=k("header"),r=k("h3"),n=M("Summary"),i=F(),c=k("div"),W(v.$$.fragment),p=F(),b=k("header"),P=k("h3"),C=M("Details"),A=F(),s=k("div"),o=k("div"),D=k("div");for(let u=0;u<h.length;u+=1)h[u].c();d&&d.c(),S=F(),_=k("div"),E=k("div"),R&&R.c(),this.h()},l(u){e=y(u,"SECTION",{class:!0});var m=I(e);t=y(m,"DIV",{class:!0});var j=I(t);l=y(j,"HEADER",{class:!0});var Y=I(l);r=y(Y,"H3",{});var le=I(r);n=B(le,"Summary"),le.forEach(f),i=O(Y),c=y(Y,"DIV",{class:!0});var ae=I(c);L(v.$$.fragment,ae),ae.forEach(f),Y.forEach(f),p=O(j),b=y(j,"HEADER",{class:!0});var ne=I(b);P=y(ne,"H3",{});var re=I(P);C=B(re,"Details"),re.forEach(f),ne.forEach(f),j.forEach(f),A=O(m),s=y(m,"DIV",{class:!0});var Z=I(s);o=y(Z,"DIV",{class:!0});var oe=I(o);D=y(oe,"DIV",{class:!0});var ee=I(D);for(let te=0;te<h.length;te+=1)h[te].l(ee);d&&d.l(ee),ee.forEach(f),oe.forEach(f),S=O(Z),_=y(Z,"DIV",{class:!0});var ie=I(_);E=y(ie,"DIV",{class:!0});var fe=I(E);R&&R.l(fe),fe.forEach(f),ie.forEach(f),Z.forEach(f),m.forEach(f),this.h()},h(){w(c,"class","flex items-center gap-4"),w(l,"class","table-header border-r-2 rounded-tl-lg w-1/3 svelte-8ovwki"),w(b,"class","table-header rounded-tr-lg w-2/3 svelte-8ovwki"),w(t,"class","flex w-full"),w(D,"class","rounded-bl-lg overflow-y-scroll h-full"),w(o,"class","flex flex-col w-1/3 border-r-2 border-gray-300 rounded-bl-lg"),w(E,"class","overflow-y-scroll overflow-x-hidden rounded-br-lg px-4 w-full py-4"),w(_,"class","flex flex-col w-2/3"),w(s,"class","flex"),w(e,"class","flex flex-col border-2 border-gray-300 rounded-lg w-full mb-6")},m(u,m){V(u,e,m),$(e,t),$(t,l),$(l,r),$(r,n),$(l,i),$(l,c),N(v,c,null),$(t,p),$(t,b),$(b,P),$(P,C),$(e,A),$(e,s),$(s,o),$(o,D);for(let j=0;j<h.length;j+=1)h[j].m(D,null);d&&d.m(D,null),$(s,S),$(s,_),$(_,E),R&&R.m(E,null),T=!0},p(u,m){const j={};m&32&&(j.$$scope={dirty:m,ctx:u}),!g&&m&1&&(g=!0,j.value=u[0],Ce(()=>g=!1)),v.$set(j),m&128&&(J=u[7],me(),h=Se(h,m,z,1,u,J,K,D,Pe,de,null,pe),$e(),!J.length&&d?d.p(u,m):J.length?d&&(me(),G(d,1,1,()=>{d=null}),$e()):(d=ve(),d.c(),H(d,1),d.m(D,null))),R&&R.p&&(!T||m&32)&&je(R,x,u,u[5],T?Ge(x,u[5],m,null):He(u[5]),null)},i(u){if(!T){H(v.$$.fragment,u);for(let m=0;m<J.length;m+=1)H(h[m]);H(R,u),T=!0}},o(u){G(v.$$.fragment,u);for(let m=0;m<h.length;m+=1)G(h[m]);G(R,u),T=!1},d(u){u&&f(e),q(v);for(let m=0;m<h.length;m+=1)h[m].d();d&&d.d(),R&&R.d(u)}}}function Ze(a){let e,t;return e=new Re({props:{items:a[1],startingIndex:a[2],$$slots:{default:[Ye,({visibleItems:l})=>({7:l}),({visibleItems:l})=>l?128:0]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,r){N(e,l,r),t=!0},p(l,[r]){const n={};r&2&&(n.items=l[1]),r&161&&(n.$$scope={dirty:r,ctx:l}),e.$set(n)},i(l){t||(H(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}const mt=async function({stuff:a,url:e,params:t}){const l=e.searchParams.get("category"),r=["summary","compact","json"],n=_e(a.events,l),i=_e(a.eventGroups,l);let c;return t.view==="summary"&&(c=n),t.view==="compact"&&(c=i),r.includes(t.view)?{props:{items:c,category:l},stuff:{matchingEvents:n,matchingEventGroups:i}}:{status:404}};function xe(a,e,t){let l;Ee(a,be,p=>t(6,l=p));let{$$slots:r={},$$scope:n}=e,{items:i}=e,{category:c}=e;const v=i.findIndex(({id:p})=>l.params.eventId===p);function g(p){c=p,t(0,c)}return a.$$set=p=>{"items"in p&&t(1,i=p.items),"category"in p&&t(0,c=p.category),"$$scope"in p&&t(5,n=p.$$scope)},[c,i,v,r,g,n]}class $t extends ge{constructor(e){super();he(this,e,xe,Ze,we,{items:1,category:0})}}export{$t as default,mt as load};