import{S as I,i as T,s as H,K as U,e as M,c as D,a as G,d as $,b as P,a6 as A,g as w,M as V,N as z,O as Q,q as _,o as p,F as X,G as Y,ak as q,t as J,w as d,k as B,l as v,h as K,x as k,m as N,L as Z,y as b,H as x,al as ee,B as y,T as h,n as L,p as O,J as te}from"../../../../chunks/vendor-1f328e1e.js";import{f as re}from"../../../../chunks/workflow-status-0763b5be.js";import{W as oe,a as ae,b as se,c as le}from"../../../../chunks/_workflows-loading-2852b55d.js";import{E as ne}from"../../../../chunks/empty-state-4fadfd99.js";import{P as ie}from"../../../../chunks/pagination-7620f4aa.js";import"../../../../chunks/route-for-api-b8046903.js";import"../../../../chunks/notifications-7fcc13cf.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/format-date-c17c610d.js";import"../../../../chunks/namespace-b0e4e965.js";import"../../../../chunks/stores-41b3e483.js";import"../../../../chunks/route-for-11851a4f.js";import"../../../../chunks/navigation-093db9e2.js";import"../../../../chunks/singletons-a6a7384f.js";import"../../../../chunks/select-19486317.js";import"../../../../chunks/filter-select-dc9c0d71.js";import"../../../../chunks/append-query-parameters-b8619cc0.js";function fe(l){let e,r,t;const o=l[2].default,n=U(o,l,l[1],null);return{c(){e=M("div"),n&&n.c(),this.h()},l(a){e=D(a,"DIV",{class:!0});var i=G(e);n&&n.l(i),i.forEach($),this.h()},h(){P(e,"class",r=A(`${l[0]}     
        rounded-sm
        text-center 
        inline-block
        px-1
        ml-1
        text-sm
        align-middle`)+" svelte-1agj3i6")},m(a,i){w(a,e,i),n&&n.m(e,null),t=!0},p(a,[i]){n&&n.p&&(!t||i&2)&&V(n,o,a,a[1],t?Q(o,a[1],i,null):z(a[1]),null),(!t||i&1&&r!==(r=A(`${a[0]}     
        rounded-sm
        text-center 
        inline-block
        px-1
        ml-1
        text-sm
        align-middle`)+" svelte-1agj3i6"))&&P(e,"class",r)},i(a){t||(_(n,a),t=!0)},o(a){p(n,a),t=!1},d(a){a&&$(e),n&&n.d(a)}}}function ce(l,e,r){let{$$slots:t={},$$scope:o}=e,{type:n}=e;return l.$$set=a=>{"type"in a&&r(0,n=a.type),"$$scope"in a&&r(1,o=a.$$scope)},[n,o,t]}class me extends I{constructor(e){super();T(this,e,ce,fe,H,{type:0})}}function E(l){l[0]=l[5].workflows}function j(l,e,r){const t=l.slice();return t[7]=e[r],t}function ue(l){let e;return{c(){e=J("Beta")},l(r){e=K(r,"Beta")},m(r,t){w(r,e,t)},d(r){r&&$(e)}}}function _e(l){return{c:h,l:h,m:h,p:h,i:h,o:h,d:h}}function pe(l){E(l);let e,r,t,o;const n=[ge,$e],a=[];function i(s,m){return s[0].length?0:1}return e=i(l),r=a[e]=n[e](l),{c(){r.c(),t=v()},l(s){r.l(s),t=v()},m(s,m){a[e].m(s,m),w(s,t,m),o=!0},p(s,m){E(s);let g=e;e=i(s),e===g?a[e].p(s,m):(L(),p(a[g],1,1,()=>{a[g]=null}),O(),r=a[e],r?r.p(s,m):(r=a[e]=n[e](s),r.c()),_(r,1),r.m(t.parentNode,t))},i(s){o||(_(r),o=!0)},o(s){p(r),o=!1},d(s){a[e].d(s),s&&$(t)}}}function $e(l){let e,r;return e=new ne({props:{title:"No Workflows Found",content:l[2]}}),{c(){d(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){b(e,t,o),r=!0},p:h,i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function ge(l){let e,r;return e=new ie({props:{items:l[0],$$slots:{default:[we,({visibleItems:t})=>({6:t}),({visibleItems:t})=>t?64:0]},$$scope:{ctx:l}}}),{c(){d(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){b(e,t,o),r=!0},p(t,o){const n={};o&1&&(n.items=t[0]),o&1090&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function C(l){let e,r;return e=new le({props:{workflow:l[7],timeFormat:l[1]}}),{c(){d(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){b(e,t,o),r=!0},p(t,o){const n={};o&64&&(n.workflow=t[7]),o&2&&(n.timeFormat=t[1]),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function he(l){let e,r,t=l[6],o=[];for(let a=0;a<t.length;a+=1)o[a]=C(j(l,t,a));const n=a=>p(o[a],1,1,()=>{o[a]=null});return{c(){for(let a=0;a<o.length;a+=1)o[a].c();e=v()},l(a){for(let i=0;i<o.length;i+=1)o[i].l(a);e=v()},m(a,i){for(let s=0;s<o.length;s+=1)o[s].m(a,i);w(a,e,i),r=!0},p(a,i){if(i&66){t=a[6];let s;for(s=0;s<t.length;s+=1){const m=j(a,t,s);o[s]?(o[s].p(m,i),_(o[s],1)):(o[s]=C(m),o[s].c(),_(o[s],1),o[s].m(e.parentNode,e))}for(L(),s=t.length;s<o.length;s+=1)n(s);O()}},i(a){if(!r){for(let i=0;i<t.length;i+=1)_(o[i]);r=!0}},o(a){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)p(o[i]);r=!1},d(a){te(o,a),a&&$(e)}}}function we(l){let e,r;return e=new se({props:{$$slots:{default:[he]},$$scope:{ctx:l}}}),{c(){d(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){b(e,t,o),r=!0},p(t,o){const n={};o&1090&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function de(l){let e,r;return e=new ae({}),{c(){d(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){b(e,t,o),r=!0},p:h,i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function ke(l){let e,r,t,o,n,a,i,s,m,g;t=new me({props:{type:"beta",$$slots:{default:[ue]},$$scope:{ctx:l}}});function R(f){l[4](f)}let W={};l[1]!==void 0&&(W.timeFormat=l[1]),n=new oe({props:W}),X.push(()=>Y(n,"timeFormat",R));let u={ctx:l,current:null,token:null,hasCatch:!1,pending:de,then:pe,catch:_e,value:5,blocks:[,,,]};return q(m=l[0],u),{c(){e=M("h2"),r=J("Workflows "),d(t.$$.fragment),o=B(),d(n.$$.fragment),i=B(),s=v(),u.block.c(),this.h()},l(f){e=D(f,"H2",{class:!0});var c=G(e);r=K(c,"Workflows "),k(t.$$.fragment,c),c.forEach($),o=N(f),k(n.$$.fragment,f),i=N(f),s=v(),u.block.l(f),this.h()},h(){P(e,"class","text-2xl")},m(f,c){w(f,e,c),Z(e,r),b(t,e,null),w(f,o,c),b(n,f,c),w(f,i,c),w(f,s,c),u.block.m(f,u.anchor=c),u.mount=()=>s.parentNode,u.anchor=s,g=!0},p(f,[c]){l=f;const F={};c&1024&&(F.$$scope={dirty:c,ctx:l}),t.$set(F);const S={};!a&&c&2&&(a=!0,S.timeFormat=l[1],x(()=>a=!1)),n.$set(S),u.ctx=l,c&1&&m!==(m=l[0])&&q(m,u)||ee(u,l,c)},i(f){g||(_(t.$$.fragment,f),_(n.$$.fragment,f),_(u.block),g=!0)},o(f){p(t.$$.fragment,f),p(n.$$.fragment,f);for(let c=0;c<3;c+=1){const F=u.blocks[c];p(F)}g=!1},d(f){f&&$(e),y(t),f&&$(o),y(n,f),f&&$(i),f&&$(s),u.block.d(f),u.token=null,u=null}}}const De=async function({params:l,url:e}){const r=e.searchParams.has("query");!e.searchParams.has("time-range")&&!r&&e.searchParams.set("time-range","24 hours");const t=l.namespace,o=e.searchParams.get("workflow-id"),n=e.searchParams.get("workflow-type"),a=e.searchParams.get("time-range"),i=e.searchParams.get("status"),s=e.searchParams.get("query");return{props:{workflows:await re(t,{workflowId:o,workflowType:n,timeRange:a,executionStatus:i,query:s},fetch),isAdvancedSearch:r}}};function be(l,e,r){let{workflows:t}=e,{isAdvancedSearch:o}=e,n="UTC";const a=o?"Please check your syntax and try again.":"If you have filters applied, try adjusting them.";function i(s){n=s,r(1,n)}return l.$$set=s=>{"workflows"in s&&r(0,t=s.workflows),"isAdvancedSearch"in s&&r(3,o=s.isAdvancedSearch)},[t,n,a,o,i]}class Ge extends I{constructor(e){super();T(this,e,be,ke,H,{workflows:0,isAdvancedSearch:3})}}export{Ge as default,De as load};