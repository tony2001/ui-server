import{S as l,i as f,s as _,w as p,x as g,y,q as c,o as u,B as v,L as d,M as $,N as h,O as w}from"../../../../../../../../chunks/vendor-35e673e5.js";import{g as m}from"../../../../../../../../chunks/index-df0df581.js";import{E}from"../../../../../../../../chunks/event-summary-02d931d7.js";import"../../../../../../../../chunks/data-converter-config-1bd2d6d2.js";import"../../../../../../../../chunks/atob-5f9d7101.js";import"../../../../../../../../chunks/format-date-7efcccd1.js";import"../../../../../../../../chunks/stores-668aa160.js";import"../../../../../../../../chunks/navigation-2df0726c.js";import"../../../../../../../../chunks/singletons-a6a7384f.js";import"../../../../../../../../chunks/empty-state-fe87e478.js";import"../../../../../../../../chunks/pagination-2bd25758.js";import"../../../../../../../../chunks/filter-select-309f4e59.js";import"../../../../../../../../chunks/select-2caf8f32.js";import"../../../../../../../../chunks/event-classification-a5ca32d1.js";function G(r){let s;const o=r[2].default,t=d(o,r,r[3],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,n){t&&t.m(e,n),s=!0},p(e,n){t&&t.p&&(!s||n&8)&&$(t,o,e,e[3],s?w(o,e[3],n,null):h(e[3]),null)},i(e){s||(c(t,e),s=!0)},o(e){u(t,e),s=!1},d(e){t&&t.d(e)}}}function q(r){let s,o;return s=new E({props:{items:r[0],category:r[1],$$slots:{default:[G]},$$scope:{ctx:r}}}),{c(){p(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,e){y(s,t,e),o=!0},p(t,[e]){const n={};e&1&&(n.items=t[0]),e&2&&(n.category=t[1]),e&8&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){o||(c(s.$$.fragment,t),o=!0)},o(t){u(s.$$.fragment,t),o=!1},d(t){v(s,t)}}}const D=async function({stuff:r,url:s,params:o}){const t=s.searchParams.get("category"),e=["summary","compact","json"],n=m(r.events,t),i=m(r.eventGroups,t);let a;return o.view==="summary"&&(a=n),o.view==="compact"&&(a=i),e.includes(o.view)?{props:{items:a,category:t},stuff:{matchingEvents:n,matchingEventGroups:i}}:{status:404}};function C(r,s,o){let{$$slots:t={},$$scope:e}=s,{items:n}=s,{category:i}=s;return r.$$set=a=>{"items"in a&&o(0,n=a.items),"category"in a&&o(1,i=a.category),"$$scope"in a&&o(3,e=a.$$scope)},[n,i,t,e]}class F extends l{constructor(s){super();f(this,s,C,q,_,{items:0,category:1})}}export{F as default,D as load};
