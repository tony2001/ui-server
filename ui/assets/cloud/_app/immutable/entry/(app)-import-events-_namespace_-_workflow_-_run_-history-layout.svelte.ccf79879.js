import{S as K,b as z,a as B,G as M,m as E,w as J,c as y,C as T,p as I,q as N,x as O,k as c,d as D,D as C,u as g,f as V,L as d,E as H,H as P,I as Q,J as R,j as v,g as h,F as S,K as W}from"../chunks/index.2267fcd4.js";import{d as j}from"../chunks/route-for.ada00d17.js";import{T as X,a as F}from"../chunks/toggle-buttons.8cd69b1c.js";import{E as Y}from"../chunks/event-history-file-import.af439241.js";import{l as Z}from"../chunks/namespaces.d7e9f7cc.js";function x(o){let e;return{c(){e=J("Timeline")},l(s){e=O(s,"Timeline")},m(s,t){V(s,e,t)},d(s){s&&c(e)}}}function ee(o){let e;return{c(){e=J("Compact")},l(s){e=O(s,"Compact")},m(s,t){V(s,e,t)},d(s){s&&c(e)}}}function te(o){let e;return{c(){e=J("JSON")},l(s){e=O(s,"JSON")},m(s,t){V(s,e,t)},d(s){s&&c(e)}}}function se(o){let e,s,t,a,r,i;return e=new F({props:{icon:"feed",href:j(o[0],"feed"),$$slots:{default:[x]},$$scope:{ctx:o}}}),t=new F({props:{icon:"compact",href:j(o[0],"compact"),$$slots:{default:[ee]},$$scope:{ctx:o}}}),r=new F({props:{icon:"json",href:j(o[0],"json"),$$slots:{default:[te]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment),s=y(),T(t.$$.fragment),a=y(),T(r.$$.fragment)},l(n){C(e.$$.fragment,n),s=D(n),C(t.$$.fragment,n),a=D(n),C(r.$$.fragment,n)},m(n,f){H(e,n,f),V(n,s,f),H(t,n,f),V(n,a,f),H(r,n,f),i=!0},p(n,f){const p={};f&1&&(p.href=j(n[0],"feed")),f&4&&(p.$$scope={dirty:f,ctx:n}),e.$set(p);const _={};f&1&&(_.href=j(n[0],"compact")),f&4&&(_.$$scope={dirty:f,ctx:n}),t.$set(_);const m={};f&1&&(m.href=j(n[0],"json")),f&4&&(m.$$scope={dirty:f,ctx:n}),r.$set(m)},i(n){i||(v(e.$$.fragment,n),v(t.$$.fragment,n),v(r.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),h(t.$$.fragment,n),h(r.$$.fragment,n),i=!1},d(n){S(e,n),n&&c(s),S(t,n),n&&c(a),S(r,n)}}}function ne(o){let e,s,t,a,r,i,n,f,p,_,m,q,w;n=new Y({}),m=new X({props:{$$slots:{default:[se]},$$scope:{ctx:o}}});const A=o[1].default,$=M(A,o,o[2],null);return{c(){e=E("section"),s=E("nav"),t=E("h3"),a=J("Import Event History"),r=y(),i=E("div"),T(n.$$.fragment),f=y(),p=E("nav"),_=E("div"),T(m.$$.fragment),q=y(),$&&$.c(),this.h()},l(l){e=I(l,"SECTION",{id:!0});var u=N(e);s=I(u,"NAV",{class:!0,"aria-label":!0});var b=N(s);t=I(b,"H3",{class:!0});var L=N(t);a=O(L,"Import Event History"),L.forEach(c),r=D(b),i=I(b,"DIV",{class:!0});var U=N(i);C(n.$$.fragment,U),U.forEach(c),b.forEach(c),f=D(u),p=I(u,"NAV",{class:!0,"aria-label":!0});var k=N(p);_=I(k,"DIV",{id:!0,class:!0});var G=N(_);C(m.$$.fragment,G),G.forEach(c),k.forEach(c),q=D(u),$&&$.l(u),u.forEach(c),this.h()},h(){g(t,"class","text-lg font-medium"),g(i,"class","flex gap-4"),g(s,"class","flex items-end justify-between gap-4 pb-4"),g(s,"aria-label","import event history"),g(_,"id","event-view-toggle"),g(_,"class","flex gap-4 bg-white"),g(p,"class","my-4 flex items-end justify-end gap-4"),g(p,"aria-label","event history view"),g(e,"id","event-history")},m(l,u){V(l,e,u),d(e,s),d(s,t),d(t,a),d(s,r),d(s,i),H(n,i,null),d(e,f),d(e,p),d(p,_),H(m,_,null),d(e,q),$&&$.m(e,null),w=!0},p(l,[u]){const b={};u&5&&(b.$$scope={dirty:u,ctx:l}),m.$set(b),$&&$.p&&(!w||u&4)&&P($,A,l,l[2],w?R(A,l[2],u,null):Q(l[2]),null)},i(l){w||(v(n.$$.fragment,l),v(m.$$.fragment,l),v($,l),w=!0)},o(l){h(n.$$.fragment,l),h(m.$$.fragment,l),h($,l),w=!1},d(l){l&&c(e),S(n),S(m),$&&$.d(l)}}}function ae(o,e,s){let t;W(o,Z,i=>s(0,t=i));let{$$slots:a={},$$scope:r}=e;return o.$$set=i=>{"$$scope"in i&&s(2,r=i.$$scope)},[t,a,r]}class oe extends K{constructor(e){super(),z(this,e,ae,ne,B,{})}}function re(o){let e;const s=o[0].default,t=M(s,o,o[1],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,r){t&&t.m(a,r),e=!0},p(a,r){t&&t.p&&(!e||r&2)&&P(t,s,a,a[1],e?R(s,a[1],r,null):Q(a[1]),null)},i(a){e||(v(t,a),e=!0)},o(a){h(t,a),e=!1},d(a){t&&t.d(a)}}}function le(o){let e,s;return e=new oe({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){H(e,t,a),s=!0},p(t,[a]){const r={};a&2&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function fe(o,e,s){let{$$slots:t={},$$scope:a}=e;return o.$$set=r=>{"$$scope"in r&&s(1,a=r.$$scope)},[t,a]}class pe extends K{constructor(e){super(),z(this,e,fe,le,B,{})}}export{pe as default};
