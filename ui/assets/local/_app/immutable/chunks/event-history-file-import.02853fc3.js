import{S as $,b as C,a as k,m as w,c as F,C as I,p as N,d as T,D as U,u as g,f as y,E as x,T as A,j as B,g as j,k as b,F as G,K as h,w as H,x as J}from"./index.2267fcd4.js";import{d as O}from"./route-for.12bf8c69.js";import{g as q}from"./navigation.7053249d.js";import{B as D}from"./button.63f1a09f.js";import{t as K}from"./index.5e78a870.js";import{t as S}from"./toaster.dc374825.js";import{i as L,a as P}from"./import-events.ca9f959a.js";import{p as R}from"./parse-with-big-int.0036a80a.js";import{g as W}from"./index.f8c667a1.js";import{p as z}from"./stores.f26150bd.js";import{a as M}from"./auth-user.095658ea.js";import{l as Q}from"./namespaces.d7e9f7cc.js";function V(r){let o;return{c(){o=H("Import")},l(e){o=J(e,"Import")},m(e,s){y(e,o,s)},d(e){e&&b(o)}}}function X(r){let o,e,s,p,c,a;return s=new D({props:{icon:"file-upload",disabled:!r[0],$$slots:{default:[V]},$$scope:{ctx:r}}}),s.$on("click",r[2]),{c(){o=w("input"),e=F(),I(s.$$.fragment),this.h()},l(t){o=N(t,"INPUT",{class:!0,type:!0,accept:!0}),e=T(t),U(s.$$.fragment,t),this.h()},h(){g(o,"class","import-input block rounded-md border border-gray-200 p-2"),g(o,"type","file"),g(o,"accept",".json")},m(t,i){y(t,o,i),y(t,e,i),x(s,t,i),p=!0,c||(a=A(o,"change",r[1]),c=!0)},p(t,[i]){const f={};i&1&&(f.disabled=!t[0]),i&128&&(f.$$scope={dirty:i,ctx:t}),s.$set(f)},i(t){p||(B(s.$$.fragment,t),p=!0)},o(t){j(s.$$.fragment,t),p=!1},d(t){t&&b(o),t&&b(e),G(s,t),c=!1,a()}}}function Y(r,o,e){let s,p,c;h(r,Q,n=>e(4,s=n)),h(r,M,n=>e(5,p=n)),h(r,z,n=>e(6,c=n));let a,t=!1;return[t,async n=>{var l;const m=n.target,d=(l=m==null?void 0:m.files)===null||l===void 0?void 0:l[0],u=new FileReader;d&&(u.readAsText(d),u.onload=()=>{var _,v;try{const E=(v=(_=u==null?void 0:u.result)===null||_===void 0?void 0:_.toString())!==null&&v!==void 0?v:"";a=R(E),e(0,t=!0)}catch{S.push({variant:"error",message:"Could not parse JSON"}),e(0,t=!1)}})},async()=>{const{settings:n}=c.data;try{const l=await K({response:Array.isArray(a)?a:a==null?void 0:a.events,namespace:s,settings:n,accessToken:p.accessToken}),m=W(l);L.set(l),P.set(m),e(0,t=!1);const d=O(s,"feed");q(d)}catch(l){console.error(l),S.push({variant:"error",message:"Could not create event history from JSON"})}}]}class mt extends ${constructor(o){super(),C(this,o,Y,X,k,{})}}export{mt as E};
