import{S as C,b as F,a as N,C as $,D as h,E as d,j as c,g as p,F as v,K as _,Z as j,e as g,f as I,z as b,ac as q,h as y,k as P,ad as z}from"../chunks/index.2267fcd4.js";import{p as D}from"../chunks/stores.f26150bd.js";import{i as K}from"../chunks/import-events.ca9f959a.js";import{E as M,a as Z,b as B}from"../chunks/event-empty-row.a031c92d.js";import{P as G}from"../chunks/pagination.91915e42.js";import{b as E,e as H}from"../chunks/event-view.4b3d1f2c.js";function k(i,t,r){const e=i.slice();return e[10]=t[r],e}function w(i){let t,r;return t=new Z({}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,o){d(t,e,o),r=!0},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function A(i,t){let r,e,o;return e=new B({props:{event:t[10],compact:S,expandAll:t[1]==="true",initialItem:t[9],visibleItems:t[8]}}),{key:i,first:null,c(){r=g(),$(e.$$.fragment),this.h()},l(n){r=g(),h(e.$$.fragment,n),this.h()},h(){this.first=r},m(n,f){I(n,r,f),d(e,n,f),o=!0},p(n,f){t=n;const l={};f&256&&(l.event=t[10]),f&2&&(l.expandAll=t[1]==="true"),f&512&&(l.initialItem=t[9]),f&256&&(l.visibleItems=t[8]),e.$set(l)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){p(e.$$.fragment,n),o=!1},d(n){n&&P(r),v(e,n)}}}function J(i){let t=[],r=new Map,e,o,n=i[8];const f=a=>`${a[10].id}-${a[10].timestamp}`;for(let a=0;a<n.length;a+=1){let s=k(i,n,a),u=f(s);r.set(u,t[a]=A(u,s))}let l=null;return n.length||(l=w()),{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=g(),l&&l.c()},l(a){for(let s=0;s<t.length;s+=1)t[s].l(a);e=g(),l&&l.l(a)},m(a,s){for(let u=0;u<t.length;u+=1)t[u].m(a,s);I(a,e,s),l&&l.m(a,s),o=!0},p(a,s){s&770&&(n=a[8],b(),t=q(t,s,f,1,a,n,r,e.parentNode,z,A,e,k),y(),n.length?l&&(b(),p(l,1,1,()=>{l=null}),y()):l||(l=w(),l.c(),c(l,1),l.m(e.parentNode,e)))},i(a){if(!o){for(let s=0;s<n.length;s+=1)c(t[s]);o=!0}},o(a){for(let s=0;s<t.length;s+=1)p(t[s]);o=!1},d(a){for(let s=0;s<t.length;s+=1)t[s].d(a);a&&P(e),l&&l.d(a)}}}function L(i){let t,r;return t=new M({props:{compact:S,$$slots:{default:[J]},$$scope:{ctx:i}}}),t.$on("expandAll",i[2]),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,o){d(t,e,o),r=!0},p(e,o){const n={};o&8962&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function O(i){let t,r;return t=new G({props:{items:i[0],floatId:"event-view-toggle","aria-label":"recent events",$$slots:{default:[L,({visibleItems:e,initialItem:o})=>({8:e,9:o}),({visibleItems:e,initialItem:o})=>(e?256:0)|(o?512:0)]},$$scope:{ctx:i}}}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,o){d(t,e,o),r=!0},p(e,[o]){const n={};o&1&&(n.items=e[0]),o&8962&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}let S=!1;function Q(i,t,r){let e,o,n,f,l,a,s;_(i,E,m=>r(1,f=m)),_(i,K,m=>r(5,l=m)),_(i,H,m=>r(6,a=m)),_(i,D,m=>r(7,s=m));function u(m){j(E,f=m.detail.expanded,f)}return i.$$.update=()=>{i.$$.dirty&128&&r(3,e=s.url.searchParams.get("category")),i.$$.dirty&96&&r(4,o=a==="descending"?[...l].reverse():l),i.$$.dirty&24&&r(0,n=o.filter(m=>e?m.category===e:m))},[n,f,u,e,o,l,a,s]}class Y extends C{constructor(t){super(),F(this,t,Q,O,N,{})}}export{Y as default};
