import{S as f,b as u,a as l,C as p,D as d,E as g,n as _,j as h,g as $,F as w,K as F,o as N}from"../chunks/index.6779d4e2.js";import{g as s}from"../chunks/navigation.25e9a9ff.js";import{L as b}from"../chunks/loading.178bb8b7.js";import{e as x}from"../chunks/workflow-service.094465fd.js";import{l as y}from"../chunks/namespaces.65099960.js";import{r as S,m as c}from"../chunks/route-for.1280465c.js";function k(r){let e,a;return e=new b({}),{c(){p(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,n){g(e,t,n),a=!0},p:_,i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){w(e,t)}}}function z(r,e,a){let t;F(r,y,o=>a(1,t=o));let{data:n}=e,{defaultNamespace:i}=n;const m=t&&t!=="default"?t:i;return N(async()=>{try{const{authorized:o}=await x(m);o?s(S({namespace:m})):s(c())}catch{s(c())}}),r.$$set=o=>{"data"in o&&a(0,n=o.data)},[n]}class A extends f{constructor(e){super(),u(this,e,z,k,l,{data:0})}}export{A as default};