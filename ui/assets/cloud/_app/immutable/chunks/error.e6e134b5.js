import{S as O,b as z,a as A,m as S,w as g,c as y,C as D,p as x,q as T,x as $,k as p,d as N,D as U,u as _,f as P,L as o,E as F,y as B,j as H,g as I,F as K,K as G,M as J}from"./index.2267fcd4.js";import{b as Q}from"./navigation.7a34442d.js";import{p as R}from"./stores.05da7a7a.js";import{i as V}from"./is-network-error.cb50de70.js";import{L as M}from"./link.2a1f80cb.js";function W(a){let e;return{c(){e=g("Try a refresh")},l(t){e=$(t,"Try a refresh")},m(t,l){P(t,e,l)},d(t){t&&p(e)}}}function X(a){let e;return{c(){e=g("jump on our Slack Channel")},l(t){e=$(t,"jump on our Slack Channel")},m(t,l){P(t,e,l)},d(t){t&&p(e)}}}function Y(a){let e,t,l,h,n,d,E,u,b,c,i,f,L,m,j,v;return f=new M({props:{href:a[1],target:"_self",class:"underline underline-offset-2",$$slots:{default:[W]},$$scope:{ctx:a}}}),f.$on("click",a[5]),m=new M({props:{href:"https://temporal.io/slack",$$slots:{default:[X]},$$scope:{ctx:a}}}),{c(){e=S("section"),t=S("h1"),l=g(a[0]),h=y(),n=S("p"),d=g("Uh oh. There's an error."),E=y(),u=S("p"),b=g(a[2]),c=y(),i=S("p"),D(f.$$.fragment),L=g(`
    or
    `),D(m.$$.fragment),j=g("."),this.h()},l(s){e=x(s,"SECTION",{"aria-roledescription":!0,class:!0,role:!0});var r=T(e);t=x(r,"H1",{class:!0});var k=T(t);l=$(k,a[0]),k.forEach(p),h=N(r),n=x(r,"P",{class:!0});var w=T(n);d=$(w,"Uh oh. There's an error."),w.forEach(p),E=N(r),u=x(r,"P",{class:!0});var q=T(u);b=$(q,a[2]),q.forEach(p),c=N(r),i=x(r,"P",{class:!0});var C=T(i);U(f.$$.fragment,C),L=$(C,`
    or
    `),U(m.$$.fragment,C),j=$(C,"."),C.forEach(p),r.forEach(p),this.h()},h(){_(t,"class","text-[12rem] font-semibold "),_(n,"class","-mt-6 mb-5 text-lg"),_(u,"class","my-4 w-auto text-2xl font-extrabold text-red-700"),_(i,"class","text-lg"),_(e,"aria-roledescription","error"),_(e,"class","mt-32 text-center align-middle"),_(e,"role","alert")},m(s,r){P(s,e,r),o(e,t),o(t,l),o(e,h),o(e,n),o(n,d),o(e,E),o(e,u),o(u,b),o(e,c),o(e,i),F(f,i,null),o(i,L),F(m,i,null),o(i,j),v=!0},p(s,[r]){(!v||r&1)&&B(l,s[0]);const k={};r&2&&(k.href=s[1]),r&128&&(k.$$scope={dirty:r,ctx:s}),f.$set(k);const w={};r&128&&(w.$$scope={dirty:r,ctx:s}),m.$set(w)},i(s){v||(H(f.$$.fragment,s),H(m.$$.fragment,s),v=!0)},o(s){I(f.$$.fragment,s),I(m.$$.fragment,s),v=!1},d(s){s&&p(e),K(f),K(m)}}}function Z(a,e,t){let l,h;G(a,R,c=>t(4,h=c));let{error:n=null}=e,{status:d=500}=e,E=(n==null?void 0:n.message)||"";V(n)&&(d=n.statusCode);const u=J();Q(()=>{u("clearError",{})});const b=()=>{window.location.reload()};return a.$$set=c=>{"error"in c&&t(3,n=c.error),"status"in c&&t(0,d=c.status)},a.$$.update=()=>{a.$$.dirty&16&&t(1,l=h.url.toString())},[d,l,E,n,h,b]}class ne extends O{constructor(e){super(),z(this,e,Z,Y,A,{error:3,status:0})}}export{ne as E};
