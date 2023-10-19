import{S as fe,b as me,a as he,m as N,p as z,q as P,k as b,v as O,aw as le,a3 as ve,f as C,L as E,am as be,Q as pe,z as ae,aa as ke,ab as we,h as ne,j as V,g as H,o as ye,G as Ee,c as F,d as W,H as Te,I as Ie,J as Le,t as ee,A as se,w as Z,x as $,a0 as Ve,C as q,D as B,u as R,E as j,a1 as He,F as G,K as te,a5 as Se,n as ge,e as re,P as Y,y as Ne}from"../chunks/index.4f558bb8.js";import{g as ze}from"../chunks/navigation.2afe5528.js";import{p as Pe}from"../chunks/stores.160eb1c9.js";import{P as Re}from"../chunks/page-title.75738e6f.js";import{E as de}from"../chunks/empty-state.bc5082d1.js";import{I as Ue}from"../chunks/input.b5d6ea2c.js";import{t as U}from"../chunks/translate.94e97902.js";import{d as Ae}from"../chunks/workflow-service.bd07f630.js";import{l as oe,n as Ce}from"../chunks/namespaces.4960ba5e.js";import{t as Me}from"../chunks/toaster.4a4789ce.js";import{r as Oe}from"../chunks/route-for.b382f28e.js";function ie(s,e,t){const l=s.slice();return l[23]=e[t],l}const De=s=>({item:s&16}),ce=s=>({item:s[23].data});function Fe(s){let e;return{c(){e=Z("Missing template")},l(t){e=$(t,"Missing template")},m(t,l){C(t,e,l)},d(t){t&&b(e)}}}function ue(s,e){let t,l,i;const f=e[14].default,u=Ee(f,e,e[13],ce),_=u||Fe();return{key:s,first:null,c(){t=N("svelte-virtual-list-row"),_&&_.c(),l=F(),this.h()},l(a){t=z(a,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var o=P(t);_&&_.l(o),l=W(o),o.forEach(b),this.h()},h(){le(t,"class","svelte-1kdxoed"),this.first=t},m(a,o){C(a,t,o),_&&_.m(t,null),E(t,l),i=!0},p(a,o){e=a,u&&u.p&&(!i||o&8208)&&Te(u,f,e,e[13],i?Le(f,e[13],o,De):Ie(e[13]),ce)},i(a){i||(V(_,a),i=!0)},o(a){H(_,a),i=!1},d(a){a&&b(t),_&&_.d(a)}}}function We(s){let e,t,l=[],i=new Map,f,u,_,a,o=s[4];const p=c=>c[23].index;for(let c=0;c<o.length;c+=1){let n=ie(s,o,c),m=p(n);i.set(m,l[c]=ue(m,n))}return{c(){e=N("svelte-virtual-list-viewport"),t=N("svelte-virtual-list-contents");for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){e=z(c,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var n=P(e);t=z(n,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var m=P(t);for(let w=0;w<l.length;w+=1)l[w].l(m);m.forEach(b),n.forEach(b),this.h()},h(){O(t,"padding-top",s[5]+"px"),O(t,"padding-bottom",s[6]+"px"),le(t,"class","svelte-1kdxoed"),O(e,"height",s[0]),le(e,"class","svelte-1kdxoed"),ve(()=>s[17].call(e))},m(c,n){C(c,e,n),E(e,t);for(let m=0;m<l.length;m+=1)l[m].m(t,null);s[15](t),s[16](e),f=be(e,s[17].bind(e)),u=!0,_||(a=pe(e,"scroll",s[7]),_=!0)},p(c,[n]){n&8208&&(o=c[4],ae(),l=ke(l,n,p,1,c,o,i,t,we,ue,null,ie),ne()),(!u||n&32)&&O(t,"padding-top",c[5]+"px"),(!u||n&64)&&O(t,"padding-bottom",c[6]+"px"),(!u||n&1)&&O(e,"height",c[0])},i(c){if(!u){for(let n=0;n<o.length;n+=1)V(l[n]);u=!0}},o(c){for(let n=0;n<l.length;n+=1)H(l[n]);u=!1},d(c){c&&b(e);for(let n=0;n<l.length;n+=1)l[n].d();s[15](null),s[16](null),f(),_=!1,a()}}}function qe(s,e,t){let{$$slots:l={},$$scope:i}=e,{items:f}=e,{height:u="100%"}=e,{itemHeight:_=void 0}=e,{start:a=0}=e,{end:o=0}=e,p=[],c,n,m,w=0,M,T,v=0,k=0,I;async function x(r,h,d){const{scrollTop:y}=n;await ee();let L=v-y,g=a;for(;L<h&&g<r.length;){let D=c[g-a];D||(t(9,o=g+1),await ee(),D=c[g-a]);const A=p[g]=d||D.offsetHeight;L+=A,g+=1}t(9,o=g);const X=r.length-o;I=(v+L)/o,t(6,k=X*I),p.length=r.length}async function J(){const{scrollTop:r}=n,h=a;for(let g=0;g<c.length;g+=1)p[a+g]=_||c[g].offsetHeight;let d=0,y=0;for(;d<f.length;){const g=p[d]||I;if(y+g>r){t(8,a=d),t(5,v=y);break}y+=g,d+=1}for(;d<f.length&&(y+=p[d]||I,d+=1,!(y>r+w)););t(9,o=d);const L=f.length-o;for(I=y/o;d<f.length;)p[d++]=I;if(t(6,k=L*I),a<h){await ee();let g=0,X=0;for(let A=a;A<h;A+=1)c[A-a]&&(g+=p[A],X+=_||c[A-a].offsetHeight);const D=X-g;n.scrollTo(0,r+D)}}ye(()=>{c=m.getElementsByTagName("svelte-virtual-list-row"),t(12,T=!0)});function K(r){se[r?"unshift":"push"](()=>{m=r,t(3,m)})}function S(r){se[r?"unshift":"push"](()=>{n=r,t(2,n)})}function Q(){w=this.offsetHeight,t(1,w)}return s.$$set=r=>{"items"in r&&t(10,f=r.items),"height"in r&&t(0,u=r.height),"itemHeight"in r&&t(11,_=r.itemHeight),"start"in r&&t(8,a=r.start),"end"in r&&t(9,o=r.end),"$$scope"in r&&t(13,i=r.$$scope)},s.$$.update=()=>{s.$$.dirty&1792&&t(4,M=f.slice(a,o).map((r,h)=>({index:h+a,data:r}))),s.$$.dirty&7170&&T&&x(f,w,_)},[u,w,n,m,M,v,k,J,a,o,f,_,T,i,l,K,S,Q]}class Be extends fe{constructor(e){super(),me(this,e,qe,We,he,{items:10,height:0,itemHeight:11,start:8,end:9})}}function _e(s){const e=s[9]===s[2][0];s[10]=e;const t=s[9]===s[2][s[2].length-1];s[11]=t}function je(s){let e,t;return e=new de({props:{title:U("namespaces.select-namespace-empty-state")}}),{c(){q(e.$$.fragment)},l(l){B(e.$$.fragment,l)},m(l,i){j(e,l,i),t=!0},p:ge,i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function Ge(s){let e,t,l,i;const f=[Ke,Je],u=[];function _(a,o){return a[2].length?0:1}return e=_(s),t=u[e]=f[e](s),{c(){t.c(),l=re()},l(a){t.l(a),l=re()},m(a,o){u[e].m(a,o),C(a,l,o),i=!0},p(a,o){let p=e;e=_(a),e===p?u[e].p(a,o):(ae(),H(u[p],1,1,()=>{u[p]=null}),ne(),t=u[e],t?t.p(a,o):(t=u[e]=f[e](a),t.c()),V(t,1),t.m(l.parentNode,l))},i(a){i||(V(t),i=!0)},o(a){H(t),i=!1},d(a){u[e].d(a),a&&b(l)}}}function Je(s){let e,t;return e=new de({props:{title:U("common.no-results")}}),{c(){q(e.$$.fragment)},l(l){B(e.$$.fragment,l)},m(l,i){j(e,l,i),t=!0},p:ge,i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function Ke(s){let e,t;return e=new Be({props:{items:s[2],itemHeight:50,$$slots:{default:[Qe,({item:l})=>({9:l}),({item:l})=>l?512:0]},$$scope:{ctx:s}}}),{c(){q(e.$$.fragment)},l(l){B(e.$$.fragment,l)},m(l,i){j(e,l,i),t=!0},p(l,i){const f={};i&4&&(f.items=l[2]),i&4612&&(f.$$scope={dirty:i,ctx:l}),e.$set(f)},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function Qe(s){_e(s);let e,t,l=s[9].namespace+"",i,f,u;function _(){return s[7](s[9])}return{c(){e=N("div"),t=N("button"),i=Z(l),this.h()},l(a){e=z(a,"DIV",{class:!0});var o=P(e);t=z(o,"BUTTON",{class:!0});var p=P(t);i=$(p,l),p.forEach(b),o.forEach(b),this.h()},h(){R(t,"class","w-full truncate p-3 text-left"),R(e,"class","link-item svelte-uk7srb"),Y(e,"first",s[10]),Y(e,"last",s[11])},m(a,o){C(a,e,o),E(e,t),E(t,i),f||(u=pe(t,"click",_),f=!0)},p(a,o){s=a,_e(s),o&512&&l!==(l=s[9].namespace+"")&&Ne(i,l),o&516&&Y(e,"first",s[10]),o&516&&Y(e,"last",s[11])},d(a){a&&b(e),f=!1,u()}}}function Xe(s){let e,t,l,i,f=U("namespaces.select-namespace-welcome")+"",u,_,a,o=U("namespaces.select-namespace")+"",p,c,n,m,w,M,T,v,k,I;e=new Re({props:{title:U("namespaces.namespace-select-header"),url:s[3].url.href}});function x(r){s[6](r)}let J={id:"search-namespaces",type:"search",label:U("common.search"),labelHidden:!0,placeholder:U("common.search"),icon:"search"};s[0]!==void 0&&(J.value=s[0]),m=new Ue({props:J}),se.push(()=>Ve(m,"value",x));const K=[Ge,je],S=[];function Q(r,h){return r[1].length?0:1}return v=Q(s),k=S[v]=K[v](s),{c(){q(e.$$.fragment),t=F(),l=N("div"),i=N("h1"),u=Z(f),_=F(),a=N("p"),p=Z(o),c=F(),n=N("form"),q(m.$$.fragment),M=F(),T=N("div"),k.c(),this.h()},l(r){B(e.$$.fragment,r),t=W(r),l=z(r,"DIV",{class:!0});var h=P(l);i=z(h,"H1",{class:!0});var d=P(i);u=$(d,f),d.forEach(b),_=W(h),a=z(h,"P",{class:!0});var y=P(a);p=$(y,o),y.forEach(b),c=W(h),n=z(h,"FORM",{class:!0,role:!0});var L=P(n);B(m.$$.fragment,L),L.forEach(b),M=W(h),T=z(h,"DIV",{class:!0,"aria-label":!0});var g=P(T);k.l(g),g.forEach(b),h.forEach(b),this.h()},h(){R(i,"class","my-4 text-3xl"),R(a,"class","mb-8"),R(n,"class","mb-5"),R(n,"role","search"),R(T,"class","h-screen w-full"),R(T,"aria-label",U("common.namespaces")),R(l,"class","w-full p-8 xl:w-1/2")},m(r,h){j(e,r,h),C(r,t,h),C(r,l,h),E(l,i),E(i,u),E(l,_),E(l,a),E(a,p),E(l,c),E(l,n),j(m,n,null),E(l,M),E(l,T),S[v].m(T,null),I=!0},p(r,[h]){const d={};h&8&&(d.url=r[3].url.href),e.$set(d);const y={};!w&&h&1&&(w=!0,y.value=r[0],He(()=>w=!1)),m.$set(y);let L=v;v=Q(r),v===L?S[v].p(r,h):(ae(),H(S[L],1,1,()=>{S[L]=null}),ne(),k=S[v],k?k.p(r,h):(k=S[v]=K[v](r),k.c()),V(k,1),k.m(T,null))},i(r){I||(V(e.$$.fragment,r),V(m.$$.fragment,r),V(k),I=!0)},o(r){H(e.$$.fragment,r),H(m.$$.fragment,r),H(k),I=!1},d(r){G(e,r),r&&b(t),r&&b(l),G(m),S[v].d()}}}function Ye(s,e,t){let l,i,f,u,_,a;te(s,oe,n=>t(8,u=n)),te(s,Ce,n=>t(5,_=n)),te(s,Pe,n=>t(3,a=n));let o="";function p(n){o=n,t(0,o)}const c=n=>n==null?void 0:n.onClick(n.namespace);return s.$$.update=()=>{s.$$.dirty&32&&t(4,l=_.map(n=>{var m;return(m=n==null?void 0:n.namespaceInfo)===null||m===void 0?void 0:m.name})),s.$$.dirty&16&&t(1,i=l.map(n=>({namespace:n,onClick:async m=>{const{authorized:w}=await Ae(m);w?(Se(oe,u=m,u),ze(Oe({namespace:m}))):Me.push({variant:"error",message:U("namespaces.unauthorized-namespace-error")})}}))),s.$$.dirty&3&&t(2,f=i.filter(({namespace:n})=>n.includes(o)))},[o,i,f,a,l,_,p,c]}class it extends fe{constructor(e){super(),me(this,e,Ye,Xe,he,{})}}export{it as default};
