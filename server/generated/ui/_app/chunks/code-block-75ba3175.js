import{S as Y,i as Z,s as $,e as v,k as J,t as R,c as w,a as y,d as _,n as D,g as q,b as O,f as T,K as m,V as x,h as B,r as F,u as E,w as H,x as g,l as K,A as ee,O as M,ad as te,j as U,m as z,o as G,R as L,v as Q,ae as ne}from"./vendor-8450f4eb.js";function W(o){let t,l,e,n,r,h,p=o[4](JSON.stringify(o[2]))+"",c,N,d,f,u,S,C,j,s=o[1]&&X(o);const V=[oe,le],b=[];function A(a,i){return a[0]?0:1}return f=A(o),u=b[f]=V[f](o),{c(){t=v("div"),l=v("div"),e=J(),s&&s.c(),n=J(),r=v("pre"),h=v("code"),c=R(p),N=J(),d=v("button"),u.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var i=y(t);l=w(i,"DIV",{id:!0}),y(l).forEach(_),e=D(i),s&&s.l(i),n=D(i),r=w(i,"PRE",{class:!0});var k=y(r);h=w(k,"CODE",{class:!0});var I=y(h);c=q(I,p),I.forEach(_),k.forEach(_),N=D(i),d=w(i,"BUTTON",{class:!0});var P=y(d);u.l(P),P.forEach(_),i.forEach(_),this.h()},h(){O(l,"id","clipboard"),O(h,"class","language-json"),O(r,"class","p-4"),O(d,"class","absolute top-4 right-4 block"),O(t,"class","relative w-full")},m(a,i){T(a,t,i),m(t,l),m(t,e),s&&s.m(t,null),m(t,n),m(t,r),m(r,h),m(h,c),m(t,N),m(t,d),b[f].m(d,null),S=!0,C||(j=x(d,"click",o[3]),C=!0)},p(a,i){a[1]?s?s.p(a,i):(s=X(a),s.c(),s.m(t,n)):s&&(s.d(1),s=null),(!S||i&4)&&p!==(p=a[4](JSON.stringify(a[2]))+"")&&B(c,p);let k=f;f=A(a),f===k?b[f].p(a,i):(F(),E(b[k],1,1,()=>{b[k]=null}),H(),u=b[f],u?u.p(a,i):(u=b[f]=V[f](a),u.c()),g(u,1),u.m(d,null))},i(a){S||(g(u),S=!0)},o(a){E(u),S=!1},d(a){a&&_(t),s&&s.d(),b[f].d(),C=!1,j()}}}function X(o){let t,l;return{c(){t=v("h3"),l=R(o[1]),this.h()},l(e){t=w(e,"H3",{class:!0});var n=y(t);l=q(n,o[1]),n.forEach(_),this.h()},h(){O(t,"class","text-lg mb-2 w-full")},m(e,n){T(e,t,n),m(t,l)},p(e,n){n&2&&B(l,e[1])},d(e){e&&_(t)}}}function le(o){let t,l;return t=new M({props:{icon:te,color:"white"}}),{c(){U(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){G(t,e,n),l=!0},p:L,i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){Q(t,e)}}}function oe(o){let t,l;return t=new M({props:{icon:ne,color:"white"}}),{c(){U(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){G(t,e,n),l=!0},p:L,i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){Q(t,e)}}}function ae(o){let t,l,e=(o[2]||o[2]===null)&&W(o);return{c(){e&&e.c(),t=K()},l(n){e&&e.l(n),t=K()},m(n,r){e&&e.m(n,r),T(n,t,r),l=!0},p(n,[r]){n[2]||n[2]===null?e?(e.p(n,r),r&4&&g(e,1)):(e=W(n),e.c(),g(e,1),e.m(t.parentNode,t)):e&&(F(),E(e,1,1,()=>{e=null}),H())},i(n){l||(g(e),l=!0)},o(n){E(e),l=!1},d(n){e&&e.d(n),n&&_(t)}}}function re(o,t,l){let{heading:e=""}=t,{content:n}=t,{copied:r=!1}=t;const h=()=>navigator.clipboard.writeText(p(JSON.stringify(n))).then(()=>{l(0,r=!r),setTimeout(()=>l(0,r=!1),2e3)}).catch(c=>console.error(c)),p=c=>{const N=JSON.parse(c);return JSON.stringify(N,void 0,2)};return ee(()=>window.Prism.highlightAll()),o.$$set=c=>{"heading"in c&&l(1,e=c.heading),"content"in c&&l(2,n=c.content),"copied"in c&&l(0,r=c.copied)},[r,e,n,h,p]}class ie extends Y{constructor(t){super();Z(this,t,re,ae,$,{heading:1,content:2,copied:0})}}export{ie as C};
