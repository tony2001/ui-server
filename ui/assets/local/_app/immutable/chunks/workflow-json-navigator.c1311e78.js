import{S as ge,b as he,a as ve,N as x,m as P,w as M,c as X,p as I,q as y,x as F,k as w,d as j,u as d,v as fe,R as V,Q as de,f as Y,L as c,a8 as G,T as S,y as Q,U as Ee,aq as $,n as ee,r as ke,X as _e,O as ce,A as we,e as me,z as Ne,g as B,h as Pe,j as K,Y as Ie,G as Te,C as te,D as se,E as le,Z as ye,H as Ae,I as De,J as He,F as ae}from"./index.bbf544d0.js";import{C as Oe}from"./code-block.7b32204e.js";import{o as pe}from"./omit.6cf41932.js";import{L as Ve}from"./loading.12f7c42c.js";import{t as Z}from"./translate.4f57831a.js";function Le(e){let s,t,l,p,E,_,m,f,h=(e[0]??"")+"",u,o,r,H,A,D,T,N,O,b,C,R,n,k,a,v,L,U=[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},{min:e[3]},{max:e[4]},{step:H=e[12].step},pe(e[13],"class")],W={};for(let i=0;i<U.length;i+=1)W=x(W,U[i]);return{c(){s=P("div"),t=P("div"),l=P("div"),p=P("span"),E=M(e[3]),_=X(),m=P("div"),f=P("output"),u=M(h),o=X(),r=P("input"),A=X(),D=P("span"),T=M(e[4]),N=X(),O=P("div"),b=P("input"),R=X(),n=P("label"),k=M(e[1]),this.h()},l(i){s=I(i,"DIV",{class:!0});var g=y(s);t=I(g,"DIV",{class:!0});var q=y(t);l=I(q,"DIV",{class:!0});var z=y(l);p=I(z,"SPAN",{class:!0});var ne=y(p);E=F(ne,e[3]),ne.forEach(w),_=j(z),m=I(z,"DIV",{class:!0});var J=y(m);f=I(J,"OUTPUT",{class:!0,style:!0,for:!0});var re=y(f);u=F(re,h),re.forEach(w),o=j(J),r=I(J,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),J.forEach(w),A=j(z),D=I(z,"SPAN",{class:!0});var oe=y(D);T=F(oe,e[4]),oe.forEach(w),z.forEach(w),N=j(q),O=I(q,"DIV",{class:!0});var ue=y(O);b=I(ue,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),ue.forEach(w),R=j(q),n=I(q,"LABEL",{class:!0,for:!0});var ie=y(n);k=F(ie,e[1]),ie.forEach(w),q.forEach(w),g.forEach(w),this.h()},h(){d(p,"class","absolute -bottom-6 left-0 text-xs font-normal"),d(f,"class","absolute -top-6 text-center text-xs font-normal"),fe(f,"left","calc("+e[7]+"% - ("+e[9]+"px))"),d(f,"for","range"),V(f,"hidden",!e[8]),de(r,W),V(r,"svelte-1n71pu8",!0),d(m,"class","relative flex items-center"),d(D,"class","absolute -bottom-6 right-0 text-xs font-normal"),d(l,"class","relative w-auto grow"),d(b,"id",e[5]),d(b,"class","numeric-input svelte-1n71pu8"),d(b,"type","number"),d(b,"inputmode","numeric"),d(b,"min",e[3]),d(b,"max",e[4]),d(b,"step",C=e[12].step),V(b,"invalid",!e[8]),d(O,"class","flex shrink"),d(n,"class","flex shrink text-sm"),d(n,"for",e[5]),V(n,"sr-only",e[2]),d(t,"class","range-input-container svelte-1n71pu8"),d(s,"class",a="w-full px-1 py-4 "+e[12].class+" svelte-1n71pu8")},m(i,g){Y(i,s,g),c(s,t),c(t,l),c(l,p),c(p,E),c(l,_),c(l,m),c(m,f),c(f,u),e[14](f),c(m,o),c(m,r),r.autofocus&&r.focus(),G(r,e[0]),c(l,A),c(l,D),c(D,T),c(t,N),c(t,O),c(O,b),G(b,e[0]),c(t,R),c(t,n),c(n,k),v||(L=[S(window,"resize",e[11]),S(r,"change",e[15]),S(r,"input",e[15]),S(r,"input",e[10]),S(b,"input",e[16]),S(b,"input",e[10])],v=!0)},p(i,[g]){g&8&&Q(E,i[3]),g&1&&h!==(h=(i[0]??"")+"")&&Q(u,h),g&640&&fe(f,"left","calc("+i[7]+"% - ("+i[9]+"px))"),g&256&&V(f,"hidden",!i[8]),de(r,W=Ee(U,[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},g&8&&{min:i[3]},g&16&&{max:i[4]},g&4096&&H!==(H=i[12].step)&&{step:H},g&8192&&pe(i[13],"class")])),g&1&&G(r,i[0]),V(r,"svelte-1n71pu8",!0),g&16&&Q(T,i[4]),g&32&&d(b,"id",i[5]),g&8&&d(b,"min",i[3]),g&16&&d(b,"max",i[4]),g&4096&&C!==(C=i[12].step)&&d(b,"step",C),g&1&&$(b.value)!==i[0]&&G(b,i[0]),g&256&&V(b,"invalid",!i[8]),g&2&&Q(k,i[1]),g&32&&d(n,"for",i[5]),g&4&&V(n,"sr-only",i[2]),g&4096&&a!==(a="w-full px-1 py-4 "+i[12].class+" svelte-1n71pu8")&&d(s,"class",a)},i:ee,o:ee,d(i){i&&w(s),e[14](null),v=!1,ke(L)}}}function Ue(e,s,t){let l,p;const E=["label","labelHidden","min","max","id","value"];let _=_e(s,E),{label:m}=s,{labelHidden:f=!1}=s,{min:h=void 0}=s,{max:u=void 0}=s,{id:o=void 0}=s,{value:r=Math.round((h+u)/2)}=s,H=!0,A;const D=n=>{if(Number.isNaN(n.currentTarget.valueAsNumber)){t(0,r=h);return}t(8,H=n.currentTarget.valueAsNumber>=h&&n.currentTarget.valueAsNumber<=u)},T=({value:n,min:k,max:a})=>(n-k)*100/(a-k),N=({outputElement:n,outputXPos:k})=>{var a;const v=(a=n==null?void 0:n.clientWidth)!==null&&a!==void 0?a:15;return Math.floor(k*v/100)},O=()=>{t(7,l=T({value:r,min:h,max:u})),t(9,p=N({outputElement:A,outputXPos:l}))};function b(n){we[n?"unshift":"push"](()=>{A=n,t(6,A)})}function C(){r=$(this.value),t(0,r)}function R(){r=$(this.value),t(0,r)}return e.$$set=n=>{t(12,s=x(x({},s),ce(n))),t(13,_=_e(s,E)),"label"in n&&t(1,m=n.label),"labelHidden"in n&&t(2,f=n.labelHidden),"min"in n&&t(3,h=n.min),"max"in n&&t(4,u=n.max),"id"in n&&t(5,o=n.id),"value"in n&&t(0,r=n.value)},e.$$.update=()=>{e.$$.dirty&25&&t(7,l=T({value:r,min:h,max:u})),e.$$.dirty&217&&(r?(t(7,l=T({value:r,min:h,max:u})),t(9,p=N({outputElement:A,outputXPos:l}))):(t(7,l=0),t(9,p=0))),e.$$.dirty&192&&t(9,p=N({outputElement:A,outputXPos:l}))},s=ce(s),[r,m,f,h,u,o,A,l,H,p,D,O,s,_,b,C,R]}class Se extends ge{constructor(s){super(),he(this,s,Ue,Le,ve,{label:1,labelHidden:2,min:3,max:4,id:5,value:0})}}const Xe=e=>({}),be=e=>({});function je(e){let s,t,l,p,E,_,m,f,h,u,o,r,H,A,D,T,N,O,b;function C(a){e[5](a)}let R={label:Z("event"),labelHidden:!0,id:"range-input-event-history",min:1,max:e[0].length};e[1]!==void 0&&(R.value=e[1]),l=new Se({props:R}),we.push(()=>Ie(l,"value",C));const n=e[4].decode,k=Te(n,e,e[3],be);return T=new Oe({props:{content:e[0][e[1]-1],"data-testid":"event-history-json"}}),{c(){s=P("div"),t=P("div"),te(l.$$.fragment),E=X(),_=P("div"),m=P("button"),f=P("span"),u=X(),o=P("button"),r=P("span"),A=X(),k&&k.c(),D=X(),te(T.$$.fragment),this.h()},l(a){s=I(a,"DIV",{class:!0});var v=y(s);t=I(v,"DIV",{class:!0});var L=y(t);se(l.$$.fragment,L),E=j(L),_=I(L,"DIV",{class:!0});var U=y(_);m=I(U,"BUTTON",{class:!0,"aria-label":!0});var W=y(m);f=I(W,"SPAN",{class:!0}),y(f).forEach(w),W.forEach(w),u=j(U),o=I(U,"BUTTON",{class:!0,"aria-label":!0});var i=y(o);r=I(i,"SPAN",{class:!0}),y(r).forEach(w),i.forEach(w),U.forEach(w),L.forEach(w),A=j(v),k&&k.l(v),v.forEach(w),D=j(a),se(T.$$.fragment,a),this.h()},h(){d(f,"class","arrow arrow-left svelte-1780ds3"),V(f,"arrow-left-disabled",e[1]===1),d(m,"class","caret svelte-1780ds3"),m.disabled=h=e[1]===1,d(m,"aria-label",Z("previous")),d(r,"class","arrow arrow-right svelte-1780ds3"),V(r,"arrow-right-disabled",e[1]===e[0].length),d(o,"class","caret svelte-1780ds3"),o.disabled=H=e[1]===e[0].length,d(o,"aria-label",Z("next")),d(_,"class","flex items-center justify-center gap-3"),d(t,"class","flex w-full gap-4"),d(s,"class","flex gap-4 max-sm:flex-col")},m(a,v){Y(a,s,v),c(s,t),le(l,t,null),c(t,E),c(t,_),c(_,m),c(m,f),c(_,u),c(_,o),c(o,r),c(s,A),k&&k.m(s,null),Y(a,D,v),le(T,a,v),N=!0,O||(b=[S(m,"click",e[6]),S(o,"click",e[7])],O=!0)},p(a,v){const L={};v&1&&(L.max=a[0].length),!p&&v&2&&(p=!0,L.value=a[1],ye(()=>p=!1)),l.$set(L),(!N||v&2)&&V(f,"arrow-left-disabled",a[1]===1),(!N||v&2&&h!==(h=a[1]===1))&&(m.disabled=h),(!N||v&3)&&V(r,"arrow-right-disabled",a[1]===a[0].length),(!N||v&3&&H!==(H=a[1]===a[0].length))&&(o.disabled=H),k&&k.p&&(!N||v&8)&&Ae(k,n,a,a[3],N?He(n,a[3],v,Xe):De(a[3]),be);const U={};v&3&&(U.content=a[0][a[1]-1]),T.$set(U)},i(a){N||(K(l.$$.fragment,a),K(k,a),K(T.$$.fragment,a),N=!0)},o(a){B(l.$$.fragment,a),B(k,a),B(T.$$.fragment,a),N=!1},d(a){a&&w(s),ae(l),k&&k.d(a),a&&w(D),ae(T,a),O=!1,ke(b)}}}function Ce(e){let s,t;return s=new Ve({}),{c(){te(s.$$.fragment)},l(l){se(s.$$.fragment,l)},m(l,p){le(s,l,p),t=!0},p:ee,i(l){t||(K(s.$$.fragment,l),t=!0)},o(l){B(s.$$.fragment,l),t=!1},d(l){ae(s,l)}}}function Re(e){let s,t,l,p,E,_;const m=[Ce,je],f=[];function h(u,o){return u[0].length?1:0}return s=h(e),t=f[s]=m[s](e),{c(){t.c(),l=me()},l(u){t.l(u),l=me()},m(u,o){f[s].m(u,o),Y(u,l,o),p=!0,E||(_=S(window,"keydown",e[2]),E=!0)},p(u,[o]){let r=s;s=h(u),s===r?f[s].p(u,o):(Ne(),B(f[r],1,1,()=>{f[r]=null}),Pe(),t=f[s],t?t.p(u,o):(t=f[s]=m[s](u),t.c()),K(t,1),t.m(l.parentNode,l))},i(u){p||(K(t),p=!0)},o(u){B(t),p=!1},d(u){f[s].d(u),u&&w(l),E=!1,_()}}}function We(e,s,t){let{$$slots:l={},$$scope:p}=s,{events:E=[]}=s,_=1;function m(o){switch(o.code){case"ArrowRight":case"KeyL":o.preventDefault(),o.stopPropagation(),_<E.length&&t(1,_+=1);break;case"ArrowLeft":case"KeyH":o.preventDefault(),o.stopPropagation(),_>1&&t(1,_-=1);break}}function f(o){_=o,t(1,_)}const h=()=>{t(1,_-=1)},u=()=>{t(1,_+=1)};return e.$$set=o=>{"events"in o&&t(0,E=o.events),"$$scope"in o&&t(3,p=o.$$scope)},[E,_,m,p,l,f,h,u]}class Me extends ge{constructor(s){super(),he(this,s,We,Re,ve,{events:0})}}export{Me as W};
