import{S as u,i as c,s as f,w as g,x as _,y,q as l,o as E,B as v,O as s}from"../../../../../chunks/index-e3f4fa3b.js";import{p as d}from"../../../../../chunks/stores-1c428733.js";import{i as h,a as S}from"../../../../../chunks/import-events-244c4001.js";import{E as b}from"../../../../../chunks/event-summary-a7600dac.js";import"../../../../../chunks/index-d28ebc24.js";import"../../../../../chunks/pagination-56beac33.js";import"../../../../../chunks/index.es-159da191.js";import"../../../../../chunks/time-format-f43bcf6a.js";import"../../../../../chunks/navigation-3f1ea447.js";import"../../../../../chunks/singletons-d1fb5791.js";import"../../../../../chunks/select-77c892ca.js";import"../../../../../chunks/persist-store-789d3dc3.js";import"../../../../../chunks/index-625f6756.js";import"../../../../../chunks/get-event-categorization-b2bce139.js";import"../../../../../chunks/index-a8ee0a5c.js";import"../../../../../chunks/format-date-5178fba5.js";import"../../../../../chunks/format-camel-case-c8f5e0aa.js";import"../../../../../chunks/route-for-8819f00e.js";import"../../../../../chunks/code-block-5bf99af8.js";import"../../../../../chunks/link-bb016710.js";import"../../../../../chunks/copyable-4b8cf855.js";import"../../../../../chunks/empty-state-4b21eaea.js";function q(o){let r,e;return r=new b({props:{items:o[0],groups:o[1]}}),{c(){g(r.$$.fragment)},l(t){_(r.$$.fragment,t)},m(t,p){y(r,t,p),e=!0},p(t,[p]){const i={};p&1&&(i.items=t[0]),p&2&&(i.groups=t[1]),r.$set(i)},i(t){e||(l(r.$$.fragment,t),e=!0)},o(t){E(r.$$.fragment,t),e=!1},d(t){v(r,t)}}}function w(o,r,e){let t,p,i,n,a;return s(o,h,m=>e(3,i=m)),s(o,d,m=>e(4,n=m)),s(o,S,m=>e(1,a=m)),o.$$.update=()=>{o.$$.dirty&16&&e(2,t=n.url.searchParams.get("category")),o.$$.dirty&12&&e(0,p=i.filter(m=>t?m.category===t:m))},[p,a,t,i,n]}class T extends u{constructor(r){super(),c(this,r,w,q,f,{})}}export{T as default};