import{S as x,i as $,s as ee,e as E,k as H,c as N,a as O,d as u,m as P,b as p,U as y,g as T,L as g,W as te,t as G,h as L,j as M,n as R,o as S,p as W,q as k,l as B,v as le,P as j,aD as ne,w as z,x as K,y as Q,T as X,B as Y,aE as ae,aF as re,aG as oe}from"./vendor-1f328e1e.js";function V(r){let t,l,e,n,s,_,m,v,d,f,a,b,J,q,c=r[1]&&A(r);function Z(o,i){return o[5]?ie:se}let C=Z(r)(r);const D=[fe,ce],h=[];function F(o,i){return o[0]?0:1}return f=F(r),a=h[f]=D[f](r),{c(){t=E("div"),l=E("div"),e=H(),c&&c.c(),n=H(),s=E("pre"),_=E("code"),C.c(),v=H(),d=E("button"),a.c(),this.h()},l(o){t=N(o,"DIV",{class:!0});var i=O(t);l=N(i,"DIV",{id:!0}),O(l).forEach(u),e=P(i),c&&c.l(i),n=P(i),s=N(i,"PRE",{class:!0});var w=O(s);_=N(w,"CODE",{class:!0});var I=O(_);C.l(I),I.forEach(u),w.forEach(u),v=P(i),d=N(i,"BUTTON",{class:!0});var U=O(d);a.l(U),U.forEach(u),i.forEach(u),this.h()},h(){p(l,"id","clipboard"),p(_,"class",m="language-"+r[4]+" svelte-bwxkrs"),p(s,"class","p-4"),y(s,"rounded-2xl",r[3]),y(s,"h-full",r[3]),p(d,"class","absolute top-4 right-4 block"),p(t,"class","relative w-full svelte-bwxkrs"),y(t,"framed",r[3])},m(o,i){T(o,t,i),g(t,l),g(t,e),c&&c.m(t,null),g(t,n),g(t,s),g(s,_),C.m(_,null),g(t,v),g(t,d),h[f].m(d,null),b=!0,J||(q=te(d,"click",r[6]),J=!0)},p(o,i){o[1]?c?c.p(o,i):(c=A(o),c.c(),c.m(t,n)):c&&(c.d(1),c=null),C.p(o,i),(!b||i&16&&m!==(m="language-"+o[4]+" svelte-bwxkrs"))&&p(_,"class",m),i&8&&y(s,"rounded-2xl",o[3]),i&8&&y(s,"h-full",o[3]);let w=f;f=F(o),f===w?h[f].p(o,i):(R(),S(h[w],1,1,()=>{h[w]=null}),W(),a=h[f],a?a.p(o,i):(a=h[f]=D[f](o),a.c()),k(a,1),a.m(d,null)),i&8&&y(t,"framed",o[3])},i(o){b||(k(a),b=!0)},o(o){S(a),b=!1},d(o){o&&u(t),c&&c.d(),C.d(),h[f].d(),J=!1,q()}}}function A(r){let t,l;return{c(){t=E("h3"),l=G(r[1]),this.h()},l(e){t=N(e,"H3",{class:!0});var n=O(t);l=L(n,r[1]),n.forEach(u),this.h()},h(){p(t,"class","text-lg mb-2 w-full")},m(e,n){T(e,t,n),g(t,l)},p(e,n){n&2&&M(l,e[1])},d(e){e&&u(t)}}}function se(r){let t,l;return{c(){t=new re,l=B(),this.h()},l(e){t=oe(e),l=B(),this.h()},h(){t.a=l},m(e,n){t.m(r[2],e,n),T(e,l,n)},p(e,n){n&4&&t.p(e[2])},d(e){e&&u(l),e&&t.d()}}}function ie(r){let t=r[7](r[2])+"",l;return{c(){l=G(t)},l(e){l=L(e,t)},m(e,n){T(e,l,n)},p(e,n){n&4&&t!==(t=e[7](e[2])+"")&&M(l,t)},d(e){e&&u(l)}}}function ce(r){let t,l;return t=new j({props:{icon:ne,color:"white"}}),{c(){z(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,n){Q(t,e,n),l=!0},p:X,i(e){l||(k(t.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),l=!1},d(e){Y(t,e)}}}function fe(r){let t,l;return t=new j({props:{icon:ae,color:"white"}}),{c(){z(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,n){Q(t,e,n),l=!0},p:X,i(e){l||(k(t.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),l=!1},d(e){Y(t,e)}}}function ue(r){let t,l,e=(r[2]||r[2]===null)&&V(r);return{c(){e&&e.c(),t=B()},l(n){e&&e.l(n),t=B()},m(n,s){e&&e.m(n,s),T(n,t,s),l=!0},p(n,[s]){n[2]||n[2]===null?e?(e.p(n,s),s&4&&k(e,1)):(e=V(n),e.c(),k(e,1),e.m(t.parentNode,t)):e&&(R(),S(e,1,1,()=>{e=null}),W())},i(n){l||(k(e),l=!0)},o(n){S(e),l=!1},d(n){e&&e.d(n),n&&u(t)}}}function _e(r,t,l){let{heading:e=""}=t,{content:n}=t,{copied:s=!1}=t,{framed:_=!1}=t,{language:m="json"}=t;const v=m==="json",d=()=>navigator.clipboard.writeText(v?f(JSON.stringify(n)):n).then(()=>{l(0,s=!s),setTimeout(()=>l(0,s=!1),2e3)}).catch(a=>console.error(a)),f=a=>{if(!a)return;const b=typeof a=="string"?JSON.parse(a):a;return JSON.stringify(b,void 0,2)};return le(()=>{window.Prism.highlightAll()}),r.$$set=a=>{"heading"in a&&l(1,e=a.heading),"content"in a&&l(2,n=a.content),"copied"in a&&l(0,s=a.copied),"framed"in a&&l(3,_=a.framed),"language"in a&&l(4,m=a.language)},[s,e,n,_,m,v,d,f]}class he extends x{constructor(t){super();$(this,t,_e,ue,ee,{heading:1,content:2,copied:0,framed:3,language:4})}}export{he as C};
