import{S as F,i as H,s as I,w as g,x as d,y as k,q as m,o as _,B as w,T as J,e as b,t as L,k as B,c as x,a as y,h as O,d as h,m as C,b as P,g as N,L as $,p as W,J as j,n as E}from"../../../../../chunks/vendor-1f328e1e.js";import{g as z,W as A,a as D}from"../../../../../chunks/workers-row-87494845.js";import{E as G}from"../../../../../chunks/empty-state-4fadfd99.js";import"../../../../../chunks/route-for-api-b8046903.js";import"../../../../../chunks/notifications-7fcc13cf.js";import"../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../chunks/format-date-c17c610d.js";function v(i,e,l){const t=i.slice();return t[1]=e[l],t}function q(i){let e,l;return e=new G({props:{title:"No Workers Found"}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p:J,i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function K(i){let e,l,t;return e=new D({props:{poller:i[1]}}),{c(){g(e.$$.fragment),l=B()},l(r){d(e.$$.fragment,r),l=C(r)},m(r,u){k(e,r,u),N(r,l,u),t=!0},p(r,u){const f={};u&1&&(f.poller=r[1]),e.$set(f)},i(r){t||(m(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){w(e,r),r&&h(l)}}}function S(i){let e,l;return e=new A({props:{$$slots:{default:[K]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const u={};r&17&&(u.$$scope={dirty:r,ctx:t}),e.$set(u)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function M(i){let e,l,t,r,u,f=i[0].pollers,o=[];for(let n=0;n<f.length;n+=1)o[n]=S(v(i,f,n));const T=n=>_(o[n],1,1,()=>{o[n]=null});let c=null;return f.length||(c=q()),{c(){e=b("section"),l=b("h1"),t=L("Workers"),r=B();for(let n=0;n<o.length;n+=1)o[n].c();c&&c.c(),this.h()},l(n){e=x(n,"SECTION",{});var a=y(e);l=x(a,"H1",{class:!0});var s=y(l);t=O(s,"Workers"),s.forEach(h),r=C(a);for(let p=0;p<o.length;p+=1)o[p].l(a);c&&c.l(a),a.forEach(h),this.h()},h(){P(l,"class","text-4xl mb-4")},m(n,a){N(n,e,a),$(e,l),$(l,t),$(e,r);for(let s=0;s<o.length;s+=1)o[s].m(e,null);c&&c.m(e,null),u=!0},p(n,[a]){if(a&1){f=n[0].pollers;let s;for(s=0;s<f.length;s+=1){const p=v(n,f,s);o[s]?(o[s].p(p,a),m(o[s],1)):(o[s]=S(p),o[s].c(),m(o[s],1),o[s].m(e,null))}for(E(),s=f.length;s<o.length;s+=1)T(s);W(),!f.length&&c?c.p(n,a):f.length?c&&(E(),_(c,1,1,()=>{c=null}),W()):(c=q(),c.c(),m(c,1),c.m(e,null))}},i(n){if(!u){for(let a=0;a<f.length;a+=1)m(o[a]);u=!0}},o(n){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)_(o[a]);u=!1},d(n){n&&h(e),j(o,n),c&&c.d()}}}const te=async function({fetch:i,params:e}){const{namespace:l,queue:t}=e;return await z({queue:t,namespace:l},i).then(r=>({props:{pollers:r}}))};function Q(i,e,l){let{pollers:t}=e;return i.$$set=r=>{"pollers"in r&&l(0,t=r.pollers)},[t]}class re extends F{constructor(e){super();H(this,e,Q,M,I,{pollers:0})}}export{re as default,te as load};
