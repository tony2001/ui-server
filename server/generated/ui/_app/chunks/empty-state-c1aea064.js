import{S as A,i as B,s as D,e as y,t as S,c as g,a as v,h as q,d as u,b as o,g as P,M as m,j as V,w as H,k as j,x as M,m as k,y as N,q as w,o as z,B as F,C,V as x}from"./index-604742bf.js";import{I as G}from"./index-b2629639.js";function I(c){let t,l;return{c(){t=y("p"),l=S(c[1]),this.h()},l(e){t=g(e,"P",{class:!0});var n=v(t);l=q(n,c[1]),n.forEach(u),this.h()},h(){o(t,"class","text-center")},m(e,n){P(e,t,n),m(t,l)},p(e,n){n&2&&V(l,e[1])},d(e){e&&u(t)}}}function J(c){let t,l,e,n,r,d,p,_,h,f;e=new G({props:{name:"comet",class:"block h-full w-full"}});let a=c[1]&&I(c);return{c(){t=y("div"),l=y("span"),H(e.$$.fragment),n=j(),r=y("h2"),d=S(c[0]),p=j(),a&&a.c(),this.h()},l(s){t=g(s,"DIV",{class:!0,"data-cy":!0});var i=v(t);l=g(i,"SPAN",{class:!0});var E=v(l);M(e.$$.fragment,E),E.forEach(u),n=k(i),r=g(i,"H2",{class:!0});var b=v(r);d=q(b,c[0]),b.forEach(u),p=k(i),a&&a.l(i),i.forEach(u),this.h()},h(){o(l,"class","flex h-16 w-16 items-center justify-center rounded-full bg-gray-200"),o(r,"class","text-xl font-medium"),o(t,"class",_="my-12 flex flex-col items-center justify-start gap-2 "+c[2].class),o(t,"data-cy",h=c[2].dataCy)},m(s,i){P(s,t,i),m(t,l),N(e,l,null),m(t,n),m(t,r),m(r,d),m(t,p),a&&a.m(t,null),f=!0},p(s,[i]){(!f||i&1)&&V(d,s[0]),s[1]?a?a.p(s,i):(a=I(s),a.c(),a.m(t,null)):a&&(a.d(1),a=null),(!f||i&4&&_!==(_="my-12 flex flex-col items-center justify-start gap-2 "+s[2].class))&&o(t,"class",_),(!f||i&4&&h!==(h=s[2].dataCy))&&o(t,"data-cy",h)},i(s){f||(w(e.$$.fragment,s),f=!0)},o(s){z(e.$$.fragment,s),f=!1},d(s){s&&u(t),F(e),a&&a.d()}}}function K(c,t,l){let{title:e}=t,{content:n=""}=t;return c.$$set=r=>{l(2,t=C(C({},t),x(r))),"title"in r&&l(0,e=r.title),"content"in r&&l(1,n=r.content)},t=x(t),[e,n,t]}class Q extends A{constructor(t){super(),B(this,t,K,J,D,{title:0,content:1})}}export{Q as E};