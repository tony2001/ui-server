import{S as _e,i as fe,s as me,l as N,m as S,n as C,h as b,q as A,ax as ee,ag as de,b as P,N as E,as as ge,U as le,g as se,ac as ve,aq as ke,d as re,f as V,t as H,o as be,J as we,a as F,c as O,K as ye,L as Ee,M as Te,E as x,a0 as te,r as Q,u as X,x as B,y as J,p as W,z as K,Z as ne,C as Y,O as $,a4 as Ie,F as he,e as oe,v as Le}from"../../chunks/index-89809c17.js";import{g as Ne}from"../../chunks/navigation-fbe70647.js";import{p as Se}from"../../chunks/stores-5080fd27.js";import{l as ie,n as Ve}from"../../chunks/namespaces-d4484f73.js";import{r as He}from"../../chunks/route-for-ec0d3387.js";import{E as pe}from"../../chunks/empty-state-b9f6e6dd.js";import{I as Ue}from"../../chunks/icon-2287732c.js";import{P as ze}from"../../chunks/page-title-480c98d1.js";import{b as Ce}from"../../chunks/workflow-service-0d4d5701.js";import{n as We}from"../../chunks/notifications-db2d60e4.js";import"../../chunks/singletons-eca981c1.js";import"../../chunks/index-850385bc.js";import"../../chunks/persist-store-154b32b6.js";import"../../chunks/parse-with-big-int-561ccb8b.js";import"../../chunks/settings-82191e74.js";import"../../chunks/simplify-attributes-055c76f2.js";import"../../chunks/format-date-c1755997.js";import"../../chunks/format-time-d031c2bc.js";import"../../chunks/is-44021919.js";import"../../chunks/route-for-api-14542cb7.js";import"../../chunks/auth-user-33df49d8.js";import"../../chunks/is-network-error-5f9e2367.js";function ae(r,e,t){const l=r.slice();return l[23]=e[t],l}const Me=r=>({item:r&16}),ce=r=>({item:r[23].data});function Pe(r){let e;return{c(){e=Q("Missing template")},l(t){e=X(t,"Missing template")},m(t,l){P(t,e,l)},d(t){t&&b(e)}}}function ue(r,e){let t,l,o;const m=e[14].default,f=we(m,e,e[13],ce),i=f||Pe();return{key:r,first:null,c(){t=N("svelte-virtual-list-row"),i&&i.c(),l=F(),this.h()},l(s){t=S(s,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var _=C(t);i&&i.l(_),l=O(_),_.forEach(b),this.h()},h(){ee(t,"class","svelte-1kdxoed"),this.first=t},m(s,_){P(s,t,_),i&&i.m(t,null),E(t,l),o=!0},p(s,_){e=s,f&&f.p&&(!o||_&8208)&&ye(f,m,e,e[13],o?Te(m,e[13],_,Me):Ee(e[13]),ce)},i(s){o||(V(i,s),o=!0)},o(s){H(i,s),o=!1},d(s){s&&b(t),i&&i.d(s)}}}function Re(r){let e,t,l=[],o=new Map,m,f,i,s,_=r[4];const h=u=>u[23].index;for(let u=0;u<_.length;u+=1){let a=ae(r,_,u),g=h(a);o.set(g,l[u]=ue(g,a))}return{c(){e=N("svelte-virtual-list-viewport"),t=N("svelte-virtual-list-contents");for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=S(u,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var a=C(e);t=S(a,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var g=C(t);for(let c=0;c<l.length;c+=1)l[c].l(g);g.forEach(b),a.forEach(b),this.h()},h(){A(t,"padding-top",r[5]+"px"),A(t,"padding-bottom",r[6]+"px"),ee(t,"class","svelte-1kdxoed"),A(e,"height",r[0]),ee(e,"class","svelte-1kdxoed"),de(()=>r[17].call(e))},m(u,a){P(u,e,a),E(e,t);for(let g=0;g<l.length;g+=1)l[g].m(t,null);r[15](t),r[16](e),m=ge(e,r[17].bind(e)),f=!0,i||(s=le(e,"scroll",r[7]),i=!0)},p(u,[a]){a&8208&&(_=u[4],se(),l=ve(l,a,h,1,u,_,o,t,ke,ue,null,ae),re()),(!f||a&32)&&A(t,"padding-top",u[5]+"px"),(!f||a&64)&&A(t,"padding-bottom",u[6]+"px"),(!f||a&1)&&A(e,"height",u[0])},i(u){if(!f){for(let a=0;a<_.length;a+=1)V(l[a]);f=!0}},o(u){for(let a=0;a<l.length;a+=1)H(l[a]);f=!1},d(u){u&&b(e);for(let a=0;a<l.length;a+=1)l[a].d();r[15](null),r[16](null),m(),i=!1,s()}}}function Ae(r,e,t){let{$$slots:l={},$$scope:o}=e,{items:m}=e,{height:f="100%"}=e,{itemHeight:i=void 0}=e,{start:s=0}=e,{end:_=0}=e,h=[],u,a,g,c=0,T,I,k=0,w=0,L;async function q(n,p,v){const{scrollTop:y}=a;await x();let z=k-y,d=s;for(;z<p&&d<n.length;){let D=u[d-s];D||(t(9,_=d+1),await x(),D=u[d-s]),z+=h[d]=v||D.offsetHeight,d+=1}t(9,_=d);const M=n.length-_;L=(k+z)/_,t(6,w=M*L),h.length=n.length}async function Z(){const{scrollTop:n}=a,p=s;for(let d=0;d<u.length;d+=1)h[s+d]=i||u[d].offsetHeight;let v=0,y=0;for(;v<m.length;){const d=h[v]||L;if(y+d>n){t(8,s=v),t(5,k=y);break}y+=d,v+=1}for(;v<m.length&&(y+=h[v]||L,v+=1,!(y>n+c)););t(9,_=v);const z=m.length-_;for(L=y/_;v<m.length;)h[v++]=L;if(t(6,w=z*L),s<p){await x();let d=0,M=0;for(let R=s;R<p;R+=1)u[R-s]&&(d+=h[R],M+=i||u[R-s].offsetHeight);const D=M-d;a.scrollTo(0,n+D)}}be(()=>{u=g.getElementsByTagName("svelte-virtual-list-row"),t(12,I=!0)});function j(n){te[n?"unshift":"push"](()=>{g=n,t(3,g)})}function U(n){te[n?"unshift":"push"](()=>{a=n,t(2,a)})}function G(){c=this.offsetHeight,t(1,c)}return r.$$set=n=>{"items"in n&&t(10,m=n.items),"height"in n&&t(0,f=n.height),"itemHeight"in n&&t(11,i=n.itemHeight),"start"in n&&t(8,s=n.start),"end"in n&&t(9,_=n.end),"$$scope"in n&&t(13,o=n.$$scope)},r.$$.update=()=>{r.$$.dirty&1792&&t(4,T=m.slice(s,_).map((n,p)=>({index:p+s,data:n}))),r.$$.dirty&7170&&I&&q(m,c,i)},[f,c,a,g,T,k,w,Z,s,_,m,i,I,o,l,j,U,G]}class Fe extends _e{constructor(e){super(),fe(this,e,Ae,Re,me,{items:10,height:0,itemHeight:11,start:8,end:9})}}function Oe(r){let e,t;return e=new pe({props:{title:"No Namespaces. Contact your admin to create one."}}),{c(){B(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,o){K(e,l,o),t=!0},p:he,i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function qe(r){let e,t,l,o;const m=[Be,De],f=[];function i(s,_){return s[3].length?0:1}return e=i(r),t=f[e]=m[e](r),{c(){t.c(),l=oe()},l(s){t.l(s),l=oe()},m(s,_){f[e].m(s,_),P(s,l,_),o=!0},p(s,_){let h=e;e=i(s),e===h?f[e].p(s,_):(se(),H(f[h],1,1,()=>{f[h]=null}),re(),t=f[e],t?t.p(s,_):(t=f[e]=m[e](s),t.c()),V(t,1),t.m(l.parentNode,l))},i(s){o||(V(t),o=!0)},o(s){H(t),o=!1},d(s){f[e].d(s),s&&b(l)}}}function De(r){let e,t;return e=new pe({props:{title:"No results."}}),{c(){B(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,o){K(e,l,o),t=!0},p:he,i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Be(r){let e,t;return e=new Fe({props:{items:r[3],itemHeight:50,$$slots:{default:[Je,({item:l})=>({11:l}),({item:l})=>l?2048:0]},$$scope:{ctx:r}}}),{c(){B(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,o){K(e,l,o),t=!0},p(l,o){const m={};o&8&&(m.items=l[3]),o&6144&&(m.$$scope={dirty:o,ctx:l}),e.$set(m)},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Je(r){let e,t=r[11].namespace+"",l,o,m;function f(){return r[9](r[11])}return{c(){e=N("li"),l=Q(t),this.h()},l(i){e=S(i,"LI",{class:!0});var s=C(e);l=X(s,t),s.forEach(b),this.h()},h(){W(e,"class","link-item svelte-ttx97")},m(i,s){P(i,e,s),E(e,l),o||(m=le(e,"click",f),o=!0)},p(i,s){r=i,s&2048&&t!==(t=r[11].namespace+"")&&Le(l,t)},d(i){i&&b(e),o=!1,m()}}}function Ke(r){let e,t,l,o,m,f,i,s,_,h,u,a,g,c,T,I,k,w,L,q,Z;e=new ze({props:{title:"Select Namespace",url:r[4].url.href}}),a=new Ue({props:{name:"search"}});const j=[qe,Oe],U=[];function G(n,p){return n[1].length?0:1}return k=G(r),w=U[k]=j[k](r),{c(){B(e.$$.fragment),t=F(),l=N("div"),o=N("h1"),m=Q("Welcome to Temporal"),f=F(),i=N("p"),s=Q("Select a namespace to get started."),_=F(),h=N("div"),u=N("div"),B(a.$$.fragment),g=F(),c=N("input"),T=F(),I=N("ul"),w.c(),this.h()},l(n){J(e.$$.fragment,n),t=O(n),l=S(n,"DIV",{class:!0});var p=C(l);o=S(p,"H1",{class:!0});var v=C(o);m=X(v,"Welcome to Temporal"),v.forEach(b),f=O(p),i=S(p,"P",{class:!0});var y=C(i);s=X(y,"Select a namespace to get started."),y.forEach(b),_=O(p),h=S(p,"DIV",{class:!0});var z=C(h);u=S(z,"DIV",{class:!0});var d=C(u);J(a.$$.fragment,d),d.forEach(b),g=O(z),c=S(z,"INPUT",{class:!0,placeholder:!0}),z.forEach(b),T=O(p),I=S(p,"UL",{class:!0});var M=C(I);w.l(M),M.forEach(b),p.forEach(b),this.h()},h(){W(o,"class","my-4 text-3xl"),W(i,"class","mb-8"),W(u,"class","ml-4 mr-2"),W(c,"class","w-full"),W(c,"placeholder","Search"),W(h,"class","mb-5 flex rounded-full border p-1 pr-4"),W(I,"class","h-screen w-full"),W(l,"class","w-full p-8 xl:w-1/2")},m(n,p){K(e,n,p),P(n,t,p),P(n,l,p),E(l,o),E(o,m),E(l,f),E(l,i),E(i,s),E(l,_),E(l,h),E(h,u),K(a,u,null),E(h,g),E(h,c),ne(c,r[0]),r[8](c),E(l,T),E(l,I),U[k].m(I,null),L=!0,q||(Z=le(c,"input",r[7]),q=!0)},p(n,[p]){const v={};p&16&&(v.url=n[4].url.href),e.$set(v),p&1&&c.value!==n[0]&&ne(c,n[0]);let y=k;k=G(n),k===y?U[k].p(n,p):(se(),H(U[y],1,1,()=>{U[y]=null}),re(),w=U[k],w?w.p(n,p):(w=U[k]=j[k](n),w.c()),V(w,1),w.m(I,null))},i(n){L||(V(e.$$.fragment,n),V(a.$$.fragment,n),V(w),L=!0)},o(n){H(e.$$.fragment,n),H(a.$$.fragment,n),H(w),L=!1},d(n){Y(e,n),n&&b(t),n&&b(l),Y(a),r[8](null),U[k].d(),q=!1,Z()}}}function Ye(r,e,t){let l,o,m,f,i,s;$(r,ie,c=>t(10,f=c)),$(r,Ve,c=>t(6,i=c)),$(r,Se,c=>t(4,s=c));let _=null,h="";function u(){h=this.value,t(0,h)}function a(c){te[c?"unshift":"push"](()=>{_=c,t(2,_)})}const g=c=>c==null?void 0:c.onClick(c.namespace);return r.$$.update=()=>{r.$$.dirty&64&&t(5,l=i.map(c=>{var T;return(T=c==null?void 0:c.namespaceInfo)===null||T===void 0?void 0:T.name})),r.$$.dirty&32&&t(1,o=l.map(c=>({namespace:c,onClick:async T=>{const{authorized:I}=await Ce(T);I?(Ie(ie,f=T,f),Ne(He({namespace:T}))):We.add("error","You do not have access to this namespace.")}}))),r.$$.dirty&3&&t(3,m=o.filter(({namespace:c})=>c.includes(h)))},[h,o,_,m,s,l,i,u,a,g]}class pt extends _e{constructor(e){super(),fe(this,e,Ye,Ke,me,{})}}export{pt as default};