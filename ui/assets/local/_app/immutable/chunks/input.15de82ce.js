import{S as Re,b as Te,a as Fe,N as se,m as q,w as y,c as W,p as D,q as T,x as p,k as B,d as X,u as b,Z as ue,P as h,O as fe,f as Q,L as E,_ as oe,Q as O,$ as re,a2 as Ne,y as ee,j as V,z as ce,g as A,h as he,R as Pe,r as Ve,T as de,M as Se,K as Ae,U as He,C as ae,D as ne,E as te,F as ie,V as Y,n as Ce}from"./index.4e2fcbc7.js";import{I as ve}from"./icon.e8aa24c8.js";import{c as je}from"./copy-to-clipboard.b4700207.js";import{I as ge}from"./icon-button.77f309b1.js";function me(a){let l,e,f;return e=new ve({props:{name:a[5]}}),{c(){l=q("span"),ae(e.$$.fragment),this.h()},l(t){l=D(t,"SPAN",{class:!0});var r=T(l);ne(e.$$.fragment,r),r.forEach(B),this.h()},h(){b(l,"class","icon-container svelte-16kvswd")},m(t,r){Q(t,l,r),te(e,l,null),f=!0},p(t,r){const s={};r[0]&32&&(s.name=t[5]),e.$set(s)},i(t){f||(V(e.$$.fragment,t),f=!0)},o(t){A(e.$$.fragment,t),f=!1},d(t){t&&B(l),ie(e)}}}function Ue(a){let l,e,f;return e=new ge({props:{label:a[23],icon:"close"}}),e.$on("click",a[27]),{c(){l=q("div"),ae(e.$$.fragment),this.h()},l(t){l=D(t,"DIV",{class:!0,"data-testid":!0});var r=T(l);ne(e.$$.fragment,r),r.forEach(B),this.h()},h(){b(l,"class","clear-icon-container svelte-16kvswd"),b(l,"data-testid","clear-input")},m(t,r){Q(t,l,r),te(e,l,null),f=!0},p(t,r){const s={};r[0]&8388608&&(s.label=t[23]),e.$set(s)},i(t){f||(V(e.$$.fragment,t),f=!0)},o(t){A(e.$$.fragment,t),f=!1},d(t){t&&B(l),ie(e)}}}function ze(a){let l,e,f;return e=new ve({props:{name:"lock"}}),{c(){l=q("div"),ae(e.$$.fragment),this.h()},l(t){l=D(t,"DIV",{class:!0});var r=T(l);ne(e.$$.fragment,r),r.forEach(B),this.h()},h(){b(l,"class","flex h-full w-9 items-center justify-center")},m(t,r){Q(t,l,r),te(e,l,null),f=!0},p:Ce,i(t){f||(V(e.$$.fragment,t),f=!0)},o(t){A(e.$$.fragment,t),f=!1},d(t){t&&B(l),ie(e)}}}function Ke(a){let l,e,f;return e=new ge({props:{label:a[22],icon:a[25]?"checkmark":"copy"}}),e.$on("click",a[39]),{c(){l=q("div"),ae(e.$$.fragment),this.h()},l(t){l=D(t,"DIV",{class:!0});var r=T(l);ne(e.$$.fragment,r),r.forEach(B),this.h()},h(){b(l,"class","copy-icon-container svelte-16kvswd")},m(t,r){Q(t,l,r),te(e,l,null),f=!0},p(t,r){const s={};r[0]&4194304&&(s.label=t[22]),r[0]&33554432&&(s.icon=t[25]?"checkmark":"copy"),e.$set(s)},i(t){f||(V(e.$$.fragment,t),f=!0)},o(t){A(e.$$.fragment,t),f=!1},d(t){t&&B(l),ie(e)}}}function be(a){let l,e,f=a[1].length+"",t,r,s;return{c(){l=q("span"),e=q("span"),t=y(f),r=y("/"),s=y(a[15]),this.h()},l(d){l=D(d,"SPAN",{class:!0});var o=T(l);e=D(o,"SPAN",{class:!0});var F=T(e);t=p(F,f),F.forEach(B),r=p(o,"/"),s=p(o,a[15]),o.forEach(B),this.h()},h(){b(e,"class","svelte-16kvswd"),h(e,"ok",a[15]-a[1].length>5),h(e,"warn",a[15]-a[1].length<=5),h(e,"error",a[15]===a[1].length),b(l,"class","count svelte-16kvswd")},m(d,o){Q(d,l,o),E(l,e),E(e,t),E(l,r),E(l,s)},p(d,o){o[0]&2&&f!==(f=d[1].length+"")&&ee(t,f),o[0]&32770&&h(e,"ok",d[15]-d[1].length>5),o[0]&32770&&h(e,"warn",d[15]-d[1].length<=5),o[0]&32770&&h(e,"error",d[15]===d[1].length),o[0]&32768&&ee(s,d[15])},d(d){d&&B(l)}}}function _e(a){let l,e;return{c(){l=q("div"),e=y(a[7]),this.h()},l(f){l=D(f,"DIV",{class:!0});var t=T(l);e=p(t,a[7]),t.forEach(B),this.h()},h(){b(l,"class","suffix svelte-16kvswd")},m(f,t){Q(f,l,t),E(l,e)},p(f,t){t[0]&128&&ee(e,f[7])},d(f){f&&B(l)}}}function Me(a){let l,e,f,t,r,s,d,o,F,Z,_,v,H,S,N,G,k,C,j,U,z,c,J,w,m=a[5]&&me(a),K=[{class:"input"},{disabled:a[0]},{"data-lpignore":"true"},{maxlength:F=a[15]>0?a[15]:void 0},{placeholder:a[6]},{id:a[2]},{name:a[8]},{spellcheck:a[16]},{required:a[21]},{autocomplete:a[12]},a[30]],M={};for(let i=0;i<K.length;i+=1)M=se(M,K[i]);const x=[Ke,ze,Ue],R=[];function $(i,u){return i[9]?0:i[0]?1:i[10]&&i[1]?2:-1}~(_=$(a))&&(v=R[_]=x[_](a));let g=a[15]&&!a[0]&&be(a),L=a[7]&&_e(a);return{c(){l=q("div"),e=q("label"),f=y(a[3]),r=W(),s=q("div"),m&&m.c(),d=W(),o=q("input"),Z=W(),v&&v.c(),H=W(),g&&g.c(),S=W(),L&&L.c(),G=W(),k=q("span"),C=y(a[14]),this.h()},l(i){l=D(i,"DIV",{class:!0});var u=T(l);e=D(u,"LABEL",{class:!0,for:!0});var P=T(e);f=p(P,a[3]),P.forEach(B),r=X(u),s=D(u,"DIV",{class:!0});var I=T(s);m&&m.l(I),d=X(I),o=D(I,"INPUT",{class:!0,"data-lpignore":!0,maxlength:!0,placeholder:!0,id:!0,name:!0,spellcheck:!0,autocomplete:!0}),Z=X(I),v&&v.l(I),H=X(I),g&&g.l(I),S=X(I),L&&L.l(I),I.forEach(B),G=X(u),k=D(u,"SPAN",{class:!0,role:!0});var le=T(k);C=p(le,a[14]),le.forEach(B),u.forEach(B),this.h()},h(){b(e,"class",t=ue(a[11])+" svelte-16kvswd"),b(e,"for",a[2]),h(e,"required",a[21]),h(e,"sr-only",a[4]),fe(o,M),h(o,"disabled",a[0]),h(o,"svelte-16kvswd",!0),b(s,"class",N="input-container "+a[11]+" svelte-16kvswd"),h(s,"disabled",a[0]),h(s,"error",a[20]),h(s,"unroundRight",a[17]??a[7]),h(s,"unroundLeft",a[18]),h(s,"noBorder",a[19]),h(s,"invalid",!a[13]),b(k,"class",j="hint-text inline-block "+a[11]+" svelte-16kvswd"),b(k,"role",U=a[20]?"alert":null),h(k,"invalid",!a[13]),h(k,"error",a[20]),h(k,"hidden",!a[14]),b(l,"class",z="flex flex-col gap-1 "+a[24]+" svelte-16kvswd")},m(i,u){Q(i,l,u),E(l,e),E(e,f),E(l,r),E(l,s),m&&m.m(s,null),E(s,d),E(s,o),o.autofocus&&o.focus(),oe(o,a[1]),E(s,Z),~_&&R[_].m(s,null),E(s,H),g&&g.m(s,null),E(s,S),L&&L.m(s,null),E(l,G),E(l,k),E(k,C),c=!0,J||(w=[O(o,"input",a[38]),O(o,"click",re(a[32])),O(o,"input",a[33]),O(o,"keydown",re(a[34])),O(o,"change",a[35]),O(o,"focus",a[36]),O(o,"blur",a[37]),Ne(a[26].call(null,o))],J=!0)},p(i,u){(!c||u[0]&8)&&ee(f,i[3]),(!c||u[0]&2048&&t!==(t=ue(i[11])+" svelte-16kvswd"))&&b(e,"class",t),(!c||u[0]&4)&&b(e,"for",i[2]),(!c||u[0]&2099200)&&h(e,"required",i[21]),(!c||u[0]&2064)&&h(e,"sr-only",i[4]),i[5]?m?(m.p(i,u),u[0]&32&&V(m,1)):(m=me(i),m.c(),V(m,1),m.m(s,d)):m&&(ce(),A(m,1,1,()=>{m=null}),he()),fe(o,M=Pe(K,[{class:"input"},(!c||u[0]&1)&&{disabled:i[0]},{"data-lpignore":"true"},(!c||u[0]&32768&&F!==(F=i[15]>0?i[15]:void 0))&&{maxlength:F},(!c||u[0]&64)&&{placeholder:i[6]},(!c||u[0]&4)&&{id:i[2]},(!c||u[0]&256)&&{name:i[8]},(!c||u[0]&65536)&&{spellcheck:i[16]},(!c||u[0]&2097152)&&{required:i[21]},(!c||u[0]&4096)&&{autocomplete:i[12]},u[0]&1073741824&&i[30]])),u[0]&2&&o.value!==i[1]&&oe(o,i[1]),h(o,"disabled",i[0]),h(o,"svelte-16kvswd",!0);let P=_;_=$(i),_===P?~_&&R[_].p(i,u):(v&&(ce(),A(R[P],1,1,()=>{R[P]=null}),he()),~_?(v=R[_],v?v.p(i,u):(v=R[_]=x[_](i),v.c()),V(v,1),v.m(s,H)):v=null),i[15]&&!i[0]?g?g.p(i,u):(g=be(i),g.c(),g.m(s,S)):g&&(g.d(1),g=null),i[7]?L?L.p(i,u):(L=_e(i),L.c(),L.m(s,null)):L&&(L.d(1),L=null),(!c||u[0]&2048&&N!==(N="input-container "+i[11]+" svelte-16kvswd"))&&b(s,"class",N),(!c||u[0]&2049)&&h(s,"disabled",i[0]),(!c||u[0]&1050624)&&h(s,"error",i[20]),(!c||u[0]&133248)&&h(s,"unroundRight",i[17]??i[7]),(!c||u[0]&264192)&&h(s,"unroundLeft",i[18]),(!c||u[0]&526336)&&h(s,"noBorder",i[19]),(!c||u[0]&10240)&&h(s,"invalid",!i[13]),(!c||u[0]&16384)&&ee(C,i[14]),(!c||u[0]&2048&&j!==(j="hint-text inline-block "+i[11]+" svelte-16kvswd"))&&b(k,"class",j),(!c||u[0]&1048576&&U!==(U=i[20]?"alert":null))&&b(k,"role",U),(!c||u[0]&10240)&&h(k,"invalid",!i[13]),(!c||u[0]&1050624)&&h(k,"error",i[20]),(!c||u[0]&18432)&&h(k,"hidden",!i[14]),(!c||u[0]&16777216&&z!==(z="flex flex-col gap-1 "+i[24]+" svelte-16kvswd"))&&b(l,"class",z)},i(i){c||(V(m),V(v),c=!0)},o(i){A(m),A(v),c=!1},d(i){i&&B(l),m&&m.d(),~_&&R[_].d(),g&&g.d(),L&&L.d(),J=!1,Ve(w)}}}function Oe(a,l,e){const f=["id","value","label","labelHidden","icon","placeholder","suffix","name","copyable","disabled","clearable","theme","autocomplete","valid","hintText","maxLength","spellcheck","unroundRight","unroundLeft","noBorder","autoFocus","error","required","copyButtonLabel","clearButtonLabel","class"];let t=de(l,f),r,{id:s}=l,{value:d}=l,{label:o}=l,{labelHidden:F=!1}=l,{icon:Z=null}=l,{placeholder:_=""}=l,{suffix:v=""}=l,{name:H=s}=l,{copyable:S=!1}=l,{disabled:N=!1}=l,{clearable:G=!1}=l,{theme:k="light"}=l,{autocomplete:C="off"}=l,{valid:j=!0}=l,{hintText:U=""}=l,{maxLength:z=0}=l,{spellcheck:c=null}=l,{unroundRight:J=!1}=l,{unroundLeft:w=!1}=l,{noBorder:m=!1}=l,{autoFocus:K=!1}=l,{error:M=!1}=l,{required:x=!1}=l,{copyButtonLabel:R=""}=l,{clearButtonLabel:$=""}=l,{class:g=""}=l;function L(n){K&&n&&n.focus()}const i=Se();function u(){e(1,d=""),i("clear",{})}const{copy:P,copied:I}=je();Ae(a,I,n=>e(25,r=n));function le(n){Y.call(this,a,n)}function ke(n){Y.call(this,a,n)}function Le(n){Y.call(this,a,n)}function Be(n){Y.call(this,a,n)}function Ee(n){Y.call(this,a,n)}function Ie(n){Y.call(this,a,n)}function qe(){d=this.value,e(1,d)}const De=n=>P(n,d);return a.$$set=n=>{l=se(se({},l),He(n)),e(30,t=de(l,f)),"id"in n&&e(2,s=n.id),"value"in n&&e(1,d=n.value),"label"in n&&e(3,o=n.label),"labelHidden"in n&&e(4,F=n.labelHidden),"icon"in n&&e(5,Z=n.icon),"placeholder"in n&&e(6,_=n.placeholder),"suffix"in n&&e(7,v=n.suffix),"name"in n&&e(8,H=n.name),"copyable"in n&&e(9,S=n.copyable),"disabled"in n&&e(0,N=n.disabled),"clearable"in n&&e(10,G=n.clearable),"theme"in n&&e(11,k=n.theme),"autocomplete"in n&&e(12,C=n.autocomplete),"valid"in n&&e(13,j=n.valid),"hintText"in n&&e(14,U=n.hintText),"maxLength"in n&&e(15,z=n.maxLength),"spellcheck"in n&&e(16,c=n.spellcheck),"unroundRight"in n&&e(17,J=n.unroundRight),"unroundLeft"in n&&e(18,w=n.unroundLeft),"noBorder"in n&&e(19,m=n.noBorder),"autoFocus"in n&&e(31,K=n.autoFocus),"error"in n&&e(20,M=n.error),"required"in n&&e(21,x=n.required),"copyButtonLabel"in n&&e(22,R=n.copyButtonLabel),"clearButtonLabel"in n&&e(23,$=n.clearButtonLabel),"class"in n&&e(24,g=n.class)},a.$$.update=()=>{a.$$.dirty[0]&513&&e(0,N=N||S)},[N,d,s,o,F,Z,_,v,H,S,G,k,C,j,U,z,c,J,w,m,M,x,R,$,g,r,L,u,P,I,t,K,le,ke,Le,Be,Ee,Ie,qe,De]}class We extends Re{constructor(l){super(),Te(this,l,Oe,Me,Fe,{id:2,value:1,label:3,labelHidden:4,icon:5,placeholder:6,suffix:7,name:8,copyable:9,disabled:0,clearable:10,theme:11,autocomplete:12,valid:13,hintText:14,maxLength:15,spellcheck:16,unroundRight:17,unroundLeft:18,noBorder:19,autoFocus:31,error:20,required:21,copyButtonLabel:22,clearButtonLabel:23,class:24},null,[-1,-1])}}export{We as I};
