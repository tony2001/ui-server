import{S as Re,b as Te,a as Fe,N as te,m as q,w as X,c as G,p as D,q as T,x as Y,k as L,d as J,u as k,P as c,O as ue,Z as se,f as O,L as E,_ as oe,Q as M,$ as fe,a2 as Ne,y as $,j as N,z as re,g as A,h as ce,R as Pe,r as Ve,T as he,M as Se,K as Ae,U as He,C as ee,D as le,E as ae,F as ne,V as W,n as Ce}from"./index.9b814669.js";import{I as _e}from"./icon.951fea46.js";import{c as je}from"./copy-to-clipboard.26a59ed7.js";import{I as ge}from"./icon-button.dfd8efaa.js";function de(a){let l,e,f;return e=new _e({props:{name:a[5]}}),{c(){l=q("span"),ee(e.$$.fragment),this.h()},l(i){l=D(i,"SPAN",{class:!0});var u=T(l);le(e.$$.fragment,u),u.forEach(L),this.h()},h(){k(l,"class","icon-container svelte-17wusc4")},m(i,u){O(i,l,u),ae(e,l,null),f=!0},p(i,u){const h={};u[0]&32&&(h.name=i[5]),e.$set(h)},i(i){f||(N(e.$$.fragment,i),f=!0)},o(i){A(e.$$.fragment,i),f=!1},d(i){i&&L(l),ne(e)}}}function me(a){let l,e;return{c(){l=q("div"),e=X(a[7]),this.h()},l(f){l=D(f,"DIV",{class:!0});var i=T(l);e=Y(i,a[7]),i.forEach(L),this.h()},h(){k(l,"class","suffix svelte-17wusc4")},m(f,i){O(f,l,i),E(l,e)},p(f,i){i[0]&128&&$(e,f[7])},d(f){f&&L(l)}}}function Ue(a){let l,e,f;return e=new ge({props:{label:a[23],icon:"close"}}),e.$on("click",a[27]),{c(){l=q("div"),ee(e.$$.fragment),this.h()},l(i){l=D(i,"DIV",{class:!0,"data-testid":!0});var u=T(l);le(e.$$.fragment,u),u.forEach(L),this.h()},h(){k(l,"class","clear-icon-container svelte-17wusc4"),k(l,"data-testid","clear-input")},m(i,u){O(i,l,u),ae(e,l,null),f=!0},p(i,u){const h={};u[0]&8388608&&(h.label=i[23]),e.$set(h)},i(i){f||(N(e.$$.fragment,i),f=!0)},o(i){A(e.$$.fragment,i),f=!1},d(i){i&&L(l),ne(e)}}}function ze(a){let l,e,f;return e=new _e({props:{name:"lock"}}),{c(){l=q("div"),ee(e.$$.fragment),this.h()},l(i){l=D(i,"DIV",{class:!0});var u=T(l);le(e.$$.fragment,u),u.forEach(L),this.h()},h(){k(l,"class","flex h-full w-9 items-center justify-center")},m(i,u){O(i,l,u),ae(e,l,null),f=!0},p:Ce,i(i){f||(N(e.$$.fragment,i),f=!0)},o(i){A(e.$$.fragment,i),f=!1},d(i){i&&L(l),ne(e)}}}function Ke(a){let l,e,f;return e=new ge({props:{label:a[22],icon:a[25]?"checkmark":"copy"}}),e.$on("click",a[39]),{c(){l=q("div"),ee(e.$$.fragment),this.h()},l(i){l=D(i,"DIV",{class:!0});var u=T(l);le(e.$$.fragment,u),u.forEach(L),this.h()},h(){k(l,"class","copy-icon-container svelte-17wusc4")},m(i,u){O(i,l,u),ae(e,l,null),f=!0},p(i,u){const h={};u[0]&4194304&&(h.label=i[22]),u[0]&33554432&&(h.icon=i[25]?"checkmark":"copy"),e.$set(h)},i(i){f||(N(e.$$.fragment,i),f=!0)},o(i){A(e.$$.fragment,i),f=!1},d(i){i&&L(l),ne(e)}}}function be(a){let l,e,f=a[1].length+"",i,u,h;return{c(){l=q("span"),e=q("span"),i=X(f),u=X(" / "),h=X(a[15]),this.h()},l(o){l=D(o,"SPAN",{class:!0});var b=T(l);e=D(b,"SPAN",{class:!0});var F=T(e);i=Y(F,f),F.forEach(L),u=Y(b," / "),h=Y(b,a[15]),b.forEach(L),this.h()},h(){k(e,"class","text-blue-700 svelte-17wusc4"),c(e,"warn",a[15]-a[1].length<=5),c(e,"error",a[15]===a[1].length),k(l,"class","count svelte-17wusc4")},m(o,b){O(o,l,b),E(l,e),E(e,i),E(l,u),E(l,h)},p(o,b){b[0]&2&&f!==(f=o[1].length+"")&&$(i,f),b[0]&32770&&c(e,"warn",o[15]-o[1].length<=5),b[0]&32770&&c(e,"error",o[15]===o[1].length),b[0]&32768&&$(h,o[15])},d(o){o&&L(l)}}}function Me(a){let l,e,f,i,u,h,o,b,F,H,_,g,C,P,V,B,j,U,z,r,Q,y,d=a[5]&&de(a),Z=[{class:"m-2 block w-full bg-white focus:outline-none"},{disabled:a[0]},{"data-lpignore":"true"},{maxlength:b=a[15]>0?a[15]:void 0},{placeholder:a[6]},{id:a[2]},{name:a[8]},{spellcheck:a[16]},{required:a[21]},{autocomplete:a[12]},a[30]],K={};for(let t=0;t<Z.length;t+=1)K=te(K,Z[t]);let m=a[7]&&me(a);const w=[Ke,ze,Ue],R=[];function p(t,s){return t[9]?0:t[0]?1:t[10]&&t[1]?2:-1}~(_=p(a))&&(g=R[_]=w[_](a));let v=a[15]&&!a[7]&&!a[0]&&be(a);return{c(){l=q("div"),e=q("label"),f=X(a[3]),i=G(),u=q("div"),d&&d.c(),h=G(),o=q("input"),F=G(),m&&m.c(),H=G(),g&&g.c(),C=G(),v&&v.c(),V=G(),B=q("span"),j=X(a[14]),this.h()},l(t){l=D(t,"DIV",{class:!0});var s=T(l);e=D(s,"LABEL",{for:!0,class:!0});var S=T(e);f=Y(S,a[3]),S.forEach(L),i=J(s),u=D(s,"DIV",{class:!0});var I=T(u);d&&d.l(I),h=J(I),o=D(I,"INPUT",{class:!0,"data-lpignore":!0,maxlength:!0,placeholder:!0,id:!0,name:!0,spellcheck:!0,autocomplete:!0}),F=J(I),m&&m.l(I),H=J(I),g&&g.l(I),C=J(I),v&&v.l(I),I.forEach(L),V=J(s),B=D(s,"SPAN",{class:!0,role:!0});var x=T(B);j=Y(x,a[14]),x.forEach(L),s.forEach(L),this.h()},h(){k(e,"for",a[2]),k(e,"class","svelte-17wusc4"),c(e,"required",a[21]),c(e,"sr-only",a[4]),ue(o,K),c(o,"disabled",a[0]),c(o,"svelte-17wusc4",!0),k(u,"class",P="input-container "+a[11]+" svelte-17wusc4"),c(u,"disabled",a[0]),c(u,"error",a[20]),c(u,"unroundRight",a[17]??a[7]),c(u,"unroundLeft",a[18]),c(u,"noBorder",a[19]),c(u,"invalid",!a[13]),k(B,"class","hint-text inline-block svelte-17wusc4"),k(B,"role",U=a[20]?"alert":null),c(B,"invalid",!a[13]),c(B,"error",a[20]),c(B,"hidden",!a[14]),k(l,"class",z=se(a[24])+" svelte-17wusc4")},m(t,s){O(t,l,s),E(l,e),E(e,f),E(l,i),E(l,u),d&&d.m(u,null),E(u,h),E(u,o),o.autofocus&&o.focus(),oe(o,a[1]),E(u,F),m&&m.m(u,null),E(u,H),~_&&R[_].m(u,null),E(u,C),v&&v.m(u,null),E(l,V),E(l,B),E(B,j),r=!0,Q||(y=[M(o,"input",a[38]),M(o,"click",fe(a[32])),M(o,"input",a[33]),M(o,"keydown",fe(a[34])),M(o,"change",a[35]),M(o,"focus",a[36]),M(o,"blur",a[37]),Ne(a[26].call(null,o))],Q=!0)},p(t,s){(!r||s[0]&8)&&$(f,t[3]),(!r||s[0]&4)&&k(e,"for",t[2]),(!r||s[0]&2097152)&&c(e,"required",t[21]),(!r||s[0]&16)&&c(e,"sr-only",t[4]),t[5]?d?(d.p(t,s),s[0]&32&&N(d,1)):(d=de(t),d.c(),N(d,1),d.m(u,h)):d&&(re(),A(d,1,1,()=>{d=null}),ce()),ue(o,K=Pe(Z,[{class:"m-2 block w-full bg-white focus:outline-none"},(!r||s[0]&1)&&{disabled:t[0]},{"data-lpignore":"true"},(!r||s[0]&32768&&b!==(b=t[15]>0?t[15]:void 0))&&{maxlength:b},(!r||s[0]&64)&&{placeholder:t[6]},(!r||s[0]&4)&&{id:t[2]},(!r||s[0]&256)&&{name:t[8]},(!r||s[0]&65536)&&{spellcheck:t[16]},(!r||s[0]&2097152)&&{required:t[21]},(!r||s[0]&4096)&&{autocomplete:t[12]},s[0]&1073741824&&t[30]])),s[0]&2&&o.value!==t[1]&&oe(o,t[1]),c(o,"disabled",t[0]),c(o,"svelte-17wusc4",!0),t[7]?m?m.p(t,s):(m=me(t),m.c(),m.m(u,H)):m&&(m.d(1),m=null);let S=_;_=p(t),_===S?~_&&R[_].p(t,s):(g&&(re(),A(R[S],1,1,()=>{R[S]=null}),ce()),~_?(g=R[_],g?g.p(t,s):(g=R[_]=w[_](t),g.c()),N(g,1),g.m(u,C)):g=null),t[15]&&!t[7]&&!t[0]?v?v.p(t,s):(v=be(t),v.c(),v.m(u,null)):v&&(v.d(1),v=null),(!r||s[0]&2048&&P!==(P="input-container "+t[11]+" svelte-17wusc4"))&&k(u,"class",P),(!r||s[0]&2049)&&c(u,"disabled",t[0]),(!r||s[0]&1050624)&&c(u,"error",t[20]),(!r||s[0]&133248)&&c(u,"unroundRight",t[17]??t[7]),(!r||s[0]&264192)&&c(u,"unroundLeft",t[18]),(!r||s[0]&526336)&&c(u,"noBorder",t[19]),(!r||s[0]&10240)&&c(u,"invalid",!t[13]),(!r||s[0]&16384)&&$(j,t[14]),(!r||s[0]&1048576&&U!==(U=t[20]?"alert":null))&&k(B,"role",U),(!r||s[0]&8192)&&c(B,"invalid",!t[13]),(!r||s[0]&1048576)&&c(B,"error",t[20]),(!r||s[0]&16384)&&c(B,"hidden",!t[14]),(!r||s[0]&16777216&&z!==(z=se(t[24])+" svelte-17wusc4"))&&k(l,"class",z)},i(t){r||(N(d),N(g),r=!0)},o(t){A(d),A(g),r=!1},d(t){t&&L(l),d&&d.d(),m&&m.d(),~_&&R[_].d(),v&&v.d(),Q=!1,Ve(y)}}}function Oe(a,l,e){const f=["id","value","label","labelHidden","icon","placeholder","suffix","name","copyable","disabled","clearable","theme","autocomplete","valid","hintText","maxLength","spellcheck","unroundRight","unroundLeft","noBorder","autoFocus","error","required","copyButtonLabel","clearButtonLabel","class"];let i=he(l,f),u,{id:h}=l,{value:o}=l,{label:b}=l,{labelHidden:F=!1}=l,{icon:H=null}=l,{placeholder:_=""}=l,{suffix:g=""}=l,{name:C=h}=l,{copyable:P=!1}=l,{disabled:V=!1}=l,{clearable:B=!1}=l,{theme:j="light"}=l,{autocomplete:U="off"}=l,{valid:z=!0}=l,{hintText:r=""}=l,{maxLength:Q=0}=l,{spellcheck:y=null}=l,{unroundRight:d=!1}=l,{unroundLeft:Z=!1}=l,{noBorder:K=!1}=l,{autoFocus:m=!1}=l,{error:w=!1}=l,{required:R=!1}=l,{copyButtonLabel:p=""}=l,{clearButtonLabel:v=""}=l,{class:t=""}=l;function s(n){m&&n&&n.focus()}const S=Se();function I(){e(1,o=""),S("clear",{})}const{copy:x,copied:ie}=je();Ae(a,ie,n=>e(25,u=n));function ve(n){W.call(this,a,n)}function ke(n){W.call(this,a,n)}function Le(n){W.call(this,a,n)}function Be(n){W.call(this,a,n)}function Ee(n){W.call(this,a,n)}function Ie(n){W.call(this,a,n)}function qe(){o=this.value,e(1,o)}const De=n=>x(n,o);return a.$$set=n=>{l=te(te({},l),He(n)),e(30,i=he(l,f)),"id"in n&&e(2,h=n.id),"value"in n&&e(1,o=n.value),"label"in n&&e(3,b=n.label),"labelHidden"in n&&e(4,F=n.labelHidden),"icon"in n&&e(5,H=n.icon),"placeholder"in n&&e(6,_=n.placeholder),"suffix"in n&&e(7,g=n.suffix),"name"in n&&e(8,C=n.name),"copyable"in n&&e(9,P=n.copyable),"disabled"in n&&e(0,V=n.disabled),"clearable"in n&&e(10,B=n.clearable),"theme"in n&&e(11,j=n.theme),"autocomplete"in n&&e(12,U=n.autocomplete),"valid"in n&&e(13,z=n.valid),"hintText"in n&&e(14,r=n.hintText),"maxLength"in n&&e(15,Q=n.maxLength),"spellcheck"in n&&e(16,y=n.spellcheck),"unroundRight"in n&&e(17,d=n.unroundRight),"unroundLeft"in n&&e(18,Z=n.unroundLeft),"noBorder"in n&&e(19,K=n.noBorder),"autoFocus"in n&&e(31,m=n.autoFocus),"error"in n&&e(20,w=n.error),"required"in n&&e(21,R=n.required),"copyButtonLabel"in n&&e(22,p=n.copyButtonLabel),"clearButtonLabel"in n&&e(23,v=n.clearButtonLabel),"class"in n&&e(24,t=n.class)},a.$$.update=()=>{a.$$.dirty[0]&513&&e(0,V=V||P)},[V,o,h,b,F,H,_,g,C,P,B,j,U,z,r,Q,y,d,Z,K,w,R,p,v,t,u,s,I,x,ie,i,m,ve,ke,Le,Be,Ee,Ie,qe,De]}class We extends Re{constructor(l){super(),Te(this,l,Oe,Me,Fe,{id:2,value:1,label:3,labelHidden:4,icon:5,placeholder:6,suffix:7,name:8,copyable:9,disabled:0,clearable:10,theme:11,autocomplete:12,valid:13,hintText:14,maxLength:15,spellcheck:16,unroundRight:17,unroundLeft:18,noBorder:19,autoFocus:31,error:20,required:21,copyButtonLabel:22,clearButtonLabel:23,class:24},null,[-1,-1])}}export{We as I};