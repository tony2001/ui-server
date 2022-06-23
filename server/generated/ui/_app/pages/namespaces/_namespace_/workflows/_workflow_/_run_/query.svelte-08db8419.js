import{S as H,i as M,s as Z,ab as Q,e as w,c as y,a as E,d as _,g as k,ad as A,q as d,o as g,w as q,x as C,y as I,E as f,B as S,_ as j,$ as z,k as D,m as L,b as T,M as v,Z as F,t as B,h as O,l as V,n as G,p as J,ae as K}from"../../../../../../chunks/index-4d40a842.js";import{g as U,a as W}from"../../../../../../chunks/query-service-ac7d8851.js";import{C as X}from"../../../../../../chunks/code-block-8b0b8411.js";import{S as Y,O as x}from"../../../../../../chunks/select-c764adad.js";import{E as ee}from"../../../../../../chunks/empty-state-49b705c8.js";import{B as te}from"../../../../../../chunks/button-46d5e57c.js";import"../../../../../../chunks/route-for-api-bddd80a6.js";import"../../../../../../chunks/index-af0e9636.js";import"../../../../../../chunks/notifications-136c5477.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/route-for-e4b4dbdd.js";import"../../../../../../chunks/atob-eb4fc9a1.js";import"../../../../../../chunks/index-12dad8b6.js";import"../../../../../../chunks/copy-to-clipboard-64f182bb.js";function N(o,t,n){const e=o.slice();return e[10]=t[n],e}function ne(o){let t,n;return t=new ee({props:{title:"An Error Occurred",content:"Please make sure you have at least one worker running."}}),{c(){q(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){I(t,e,l),n=!0},p:f,i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function le(o){let t,n,e,l,r,a,c,s,h;function b(i){o[6](i)}let p={id:"query-select",label:"Query Type",dataCy:"query-select",$$slots:{default:[re]},$$scope:{ctx:o}};o[0]!==void 0&&(p.value=o[0]),n=new Y({props:p}),j.push(()=>z(n,"value",b)),r=new te({props:{icon:"refresh",iconScale:.8,loading:me,$$slots:{default:[ae]},$$scope:{ctx:o}}}),r.$on("click",o[7]);let m={ctx:o,current:null,token:null,hasCatch:!1,pending:ie,then:se,catch:ce,value:9,blocks:[,,,]};return Q(s=o[1],m),{c(){t=w("div"),q(n.$$.fragment),l=D(),q(r.$$.fragment),a=D(),c=w("div"),m.block.c(),this.h()},l(i){t=y(i,"DIV",{class:!0});var u=E(t);C(n.$$.fragment,u),l=L(u),C(r.$$.fragment,u),u.forEach(_),a=L(i),c=y(i,"DIV",{class:!0});var $=E(c);m.block.l($),$.forEach(_),this.h()},h(){T(t,"class","flex items-center gap-4"),T(c,"class","flex items-start h-full")},m(i,u){k(i,t,u),I(n,t,null),v(t,l),I(r,t,null),k(i,a,u),k(i,c,u),m.block.m(c,m.anchor=null),m.mount=()=>c,m.anchor=null,h=!0},p(i,u){o=i;const $={};u&8192&&($.$$scope={dirty:u,ctx:o}),!e&&u&1&&(e=!0,$.value=o[0],F(()=>e=!1)),n.$set($);const R={};u&8192&&(R.$$scope={dirty:u,ctx:o}),r.$set(R),m.ctx=o,u&2&&s!==(s=o[1])&&Q(s,m)||A(m,o,u)},i(i){h||(d(n.$$.fragment,i),d(r.$$.fragment,i),d(m.block),h=!0)},o(i){g(n.$$.fragment,i),g(r.$$.fragment,i);for(let u=0;u<3;u+=1){const $=m.blocks[u];g($)}h=!1},d(i){i&&_(t),S(n),S(r),i&&_(a),i&&_(c),m.block.d(),m.token=null,m=null}}}function oe(o){let t=o[10]+"",n;return{c(){n=B(t)},l(e){n=O(e,t)},m(e,l){k(e,n,l)},p:f,d(e){e&&_(n)}}}function P(o){let t,n;return t=new x({props:{value:o[10],$$slots:{default:[oe]},$$scope:{ctx:o}}}),{c(){q(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){I(t,e,l),n=!0},p(e,l){const r={};l&8192&&(r.$$scope={dirty:l,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function re(o){let t,n,e=o[8],l=[];for(let a=0;a<e.length;a+=1)l[a]=P(N(o,e,a));const r=a=>g(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();t=V()},l(a){for(let c=0;c<l.length;c+=1)l[c].l(a);t=V()},m(a,c){for(let s=0;s<l.length;s+=1)l[s].m(a,c);k(a,t,c),n=!0},p(a,c){if(c&4){e=a[8];let s;for(s=0;s<e.length;s+=1){const h=N(a,e,s);l[s]?(l[s].p(h,c),d(l[s],1)):(l[s]=P(h),l[s].c(),d(l[s],1),l[s].m(t.parentNode,t))}for(G(),s=e.length;s<l.length;s+=1)r(s);J()}},i(a){if(!n){for(let c=0;c<e.length;c+=1)d(l[c]);n=!0}},o(a){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)g(l[c]);n=!1},d(a){K(l,a),a&&_(t)}}}function ae(o){let t;return{c(){t=B("Refresh")},l(n){t=O(n,"Refresh")},m(n,e){k(n,t,e)},d(n){n&&_(t)}}}function ce(o){return{c:f,l:f,m:f,p:f,i:f,o:f,d:f}}function se(o){let t,n;return t=new X({props:{content:o[9]}}),{c(){q(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){I(t,e,l),n=!0},p(e,l){const r={};l&2&&(r.content=e[9]),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function ie(o){return{c:f,l:f,m:f,p:f,i:f,o:f,d:f}}function ue(o){let t,n,e,l,r,a;return{c(){t=w("div"),n=w("h2"),e=B("Loading\u2026"),l=D(),r=w("p"),a=B("(This will fail if you have no workers running.)"),this.h()},l(c){t=y(c,"DIV",{class:!0});var s=E(t);n=y(s,"H2",{class:!0});var h=E(n);e=O(h,"Loading\u2026"),h.forEach(_),l=L(s),r=y(s,"P",{});var b=E(r);a=O(b,"(This will fail if you have no workers running.)"),b.forEach(_),s.forEach(_),this.h()},h(){T(n,"class","font-bold text-2xl mb-4"),T(t,"class","text-center")},m(c,s){k(c,t,s),v(t,n),v(n,e),v(t,l),v(t,r),v(r,a)},p:f,i:f,o:f,d(c){c&&_(t)}}}function fe(o){let t,n,e={ctx:o,current:null,token:null,hasCatch:!0,pending:ue,then:le,catch:ne,value:8,blocks:[,,,]};return Q(o[2],e),{c(){t=w("section"),e.block.c()},l(l){t=y(l,"SECTION",{});var r=E(t);e.block.l(r),r.forEach(_)},m(l,r){k(l,t,r),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null,n=!0},p(l,[r]){o=l,A(e,o,r)},i(l){n||(d(e.block),n=!0)},o(l){for(let r=0;r<3;r+=1){const a=e.blocks[r];g(a)}n=!1},d(l){l&&_(t),e.block.d(),e.token=null,e=null}}}const Se=async function({params:o,stuff:t}){const{namespace:n}=o,{workflow:e}=t;return{props:{namespace:n,workflow:{id:e.id,runId:e.runId}}}};let me=!1;function pe(o,t,n){let{namespace:e}=t,{workflow:l}=t,r,a=U({namespace:e,workflow:l}).then(p=>(n(0,r=r||p[0]),p)),c;const s=p=>{n(1,c=W({namespace:e,workflow:l,queryType:p}))};function h(p){r=p,n(0,r)}const b=()=>s(r);return o.$$set=p=>{"namespace"in p&&n(4,e=p.namespace),"workflow"in p&&n(5,l=p.workflow)},o.$$.update=()=>{o.$$.dirty&1&&r&&s(r)},[r,c,a,s,e,l,h,b]}class Te extends H{constructor(t){super(),M(this,t,pe,fe,Z,{namespace:4,workflow:5})}}export{Te as default,Se as load};
