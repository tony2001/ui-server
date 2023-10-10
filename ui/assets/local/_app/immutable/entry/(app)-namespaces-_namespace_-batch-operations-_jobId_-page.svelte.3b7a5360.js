import{S as we,b as De,a as Ee,m as u,w as E,c as b,p,q as m,x as k,k as f,d as g,u as v,f as se,L as r,y as L,n as D,K as Ie,C as X,D as Y,E as Z,j as O,z as st,g as y,h as ot,F as x,M as nt,a5 as it,v as ge,P as xe,ar as ct,e as et,as as ft}from"../chunks/index.6779d4e2.js";import{p as ut}from"../chunks/stores.7ec965ad.js";import{P as pt}from"../chunks/page-title.990af218.js";import{t as V}from"../chunks/translate.3b72a770.js";import{b as Fe,t as mt,r as dt}from"../chunks/format-date.79dd40f6.js";import{B as vt}from"../chunks/badge.d458ea0a.js";import{T as ht}from"../chunks/toggle-switch.0d2aaadb.js";import{T as _t}from"../chunks/tooltip.65a7fa6c.js";import{a as Be,d as $t}from"../chunks/batch-operations.7aed19b3.js";import{C as tt}from"../chunks/card.f7f654dd.js";import{L as bt}from"../chunks/link.8030aa06.js";import{d as at}from"../chunks/route-for.796d1ee3.js";function gt(l){let e,a,t=V("batch","details")+"",n,s,c,o,i=V("batch","operation-type")+"",d,h,S,C=l[0].operationType+"",U,M,_,$,P=V("batch","identity")+"",R,A,j,q=l[0].identity+"",K,z,B,G,me=V("reason")+"",de,J,Q,ee=l[0].reason+"",fe,W,F,te,ae=V("start-time")+"",T,w,oe,le=Fe(l[0].startTime,l[1],{relative:l[2]})+"",ne,he,H,ie,ve=V("close-time")+"",ue,_e,ce,re=Fe(l[0].closeTime,l[1],{relative:l[2]})+"",Pe,Ne,pe,$e,Ue=V("batch","total-operations")+"",ye,Ae,be,ke=Intl.NumberFormat("en-US").format(l[0].totalOperationCount)+"",Ve;return{c(){e=u("div"),a=u("p"),n=E(t),s=b(),c=u("div"),o=u("p"),d=E(i),h=b(),S=u("p"),U=E(C),M=b(),_=u("div"),$=u("p"),R=E(P),A=b(),j=u("p"),K=E(q),z=b(),B=u("div"),G=u("p"),de=E(me),J=b(),Q=u("p"),fe=E(ee),W=b(),F=u("div"),te=u("p"),T=E(ae),w=b(),oe=u("p"),ne=E(le),he=b(),H=u("div"),ie=u("p"),ue=E(ve),_e=b(),ce=u("p"),Pe=E(re),Ne=b(),pe=u("div"),$e=u("p"),ye=E(Ue),Ae=b(),be=u("p"),Ve=E(ke),this.h()},l(N){e=p(N,"DIV",{class:!0});var I=m(e);a=p(I,"P",{});var Me=m(a);n=k(Me,t),Me.forEach(f),s=g(I),c=p(I,"DIV",{class:!0});var Ce=m(c);o=p(Ce,"P",{class:!0});var He=m(o);d=k(He,i),He.forEach(f),h=g(Ce),S=p(Ce,"P",{class:!0});var Le=m(S);U=k(Le,C),Le.forEach(f),Ce.forEach(f),M=g(I),_=p(I,"DIV",{class:!0});var Te=m(_);$=p(Te,"P",{class:!0});var qe=m($);R=k(qe,P),qe.forEach(f),A=g(Te),j=p(Te,"P",{class:!0});var Ke=m(j);K=k(Ke,q),Ke.forEach(f),Te.forEach(f),z=g(I),B=p(I,"DIV",{class:!0});var je=m(B);G=p(je,"P",{class:!0});var ze=m(G);de=k(ze,me),ze.forEach(f),J=g(je),Q=p(je,"P",{class:!0});var Ge=m(Q);fe=k(Ge,ee),Ge.forEach(f),je.forEach(f),W=g(I),F=p(I,"DIV",{class:!0});var Oe=m(F);te=p(Oe,"P",{class:!0});var Je=m(te);T=k(Je,ae),Je.forEach(f),w=g(Oe),oe=p(Oe,"P",{class:!0});var Qe=m(oe);ne=k(Qe,le),Qe.forEach(f),Oe.forEach(f),he=g(I),H=p(I,"DIV",{class:!0});var Se=m(H);ie=p(Se,"P",{class:!0});var We=m(ie);ue=k(We,ve),We.forEach(f),_e=g(Se),ce=p(Se,"P",{class:!0});var Xe=m(ce);Pe=k(Xe,re),Xe.forEach(f),Se.forEach(f),Ne=g(I),pe=p(I,"DIV",{class:!0});var Re=m(pe);$e=p(Re,"P",{class:!0});var Ye=m($e);ye=k(Ye,Ue),Ye.forEach(f),Ae=g(Re),be=p(Re,"P",{class:!0});var Ze=m(be);Ve=k(Ze,ke),Ze.forEach(f),Re.forEach(f),I.forEach(f),this.h()},h(){v(o,"class","batch-operation-key svelte-1vorilm"),v(S,"class","batch-operation-value svelte-1vorilm"),v(c,"class","batch-operation-detail svelte-1vorilm"),v($,"class","batch-operation-key svelte-1vorilm"),v(j,"class","batch-operation-value svelte-1vorilm"),v(_,"class","batch-operation-detail svelte-1vorilm"),v(G,"class","batch-operation-key svelte-1vorilm"),v(Q,"class","batch-operation-value svelte-1vorilm"),v(B,"class","batch-operation-detail svelte-1vorilm"),v(te,"class","batch-operation-key svelte-1vorilm"),v(oe,"class","batch-operation-value svelte-1vorilm"),v(F,"class","batch-operation-detail svelte-1vorilm"),v(ie,"class","batch-operation-key svelte-1vorilm"),v(ce,"class","batch-operation-value svelte-1vorilm"),v(H,"class","batch-operation-detail svelte-1vorilm"),v($e,"class","batch-operation-key svelte-1vorilm"),v(be,"class","batch-operation-value svelte-1vorilm"),v(pe,"class","batch-operation-detail svelte-1vorilm"),v(e,"class","flex flex-col gap-2")},m(N,I){se(N,e,I),r(e,a),r(a,n),r(e,s),r(e,c),r(c,o),r(o,d),r(c,h),r(c,S),r(S,U),r(e,M),r(e,_),r(_,$),r($,R),r(_,A),r(_,j),r(j,K),r(e,z),r(e,B),r(B,G),r(G,de),r(B,J),r(B,Q),r(Q,fe),r(e,W),r(e,F),r(F,te),r(te,T),r(F,w),r(F,oe),r(oe,ne),r(e,he),r(e,H),r(H,ie),r(ie,ue),r(H,_e),r(H,ce),r(ce,Pe),r(e,Ne),r(e,pe),r(pe,$e),r($e,ye),r(pe,Ae),r(pe,be),r(be,Ve)},p(N,[I]){I&1&&C!==(C=N[0].operationType+"")&&L(U,C),I&1&&q!==(q=N[0].identity+"")&&L(K,q),I&1&&ee!==(ee=N[0].reason+"")&&L(fe,ee),I&7&&le!==(le=Fe(N[0].startTime,N[1],{relative:N[2]})+"")&&L(ne,le),I&7&&re!==(re=Fe(N[0].closeTime,N[1],{relative:N[2]})+"")&&L(Pe,re),I&1&&ke!==(ke=Intl.NumberFormat("en-US").format(N[0].totalOperationCount)+"")&&L(Ve,ke)},i:D,o:D,d(N){N&&f(e)}}}function Et(l,e,a){let t,n;Ie(l,mt,c=>a(1,t=c)),Ie(l,dt,c=>a(2,n=c));let{operation:s}=e;return l.$$set=c=>{"operation"in c&&a(0,s=c.operation)},[s,t,n]}class kt extends we{constructor(e){super(),De(this,e,Et,gt,Ee,{operation:0})}}function It(l){let e=l[0].state+"",a;return{c(){a=E(e)},l(t){a=k(t,e)},m(t,n){se(t,a,n)},p(t,n){n&1&&e!==(e=t[0].state+"")&&L(a,e)},d(t){t&&f(a)}}}function lt(l){let e,a;return e=new _t({props:{top:!0,text:V("auto-refresh-tooltip",{interval:"5"}),$$slots:{default:[wt]},$$scope:{ctx:l}}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){Z(e,t,n),a=!0},p(t,n){const s={};n&34&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){a||(O(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function wt(l){let e,a;return e=new ht({props:{id:"batch-operation-auto-refresh",label:V("auto-refresh"),labelPosition:"left",checked:l[1]}}),e.$on("change",l[2]),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){Z(e,t,n),a=!0},p(t,n){const s={};n&2&&(s.checked=t[1]),e.$set(s)},i(t){a||(O(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function Dt(l){let e,a,t,n,s=V("batch","describe-page-title")+"",c,o,i,d,h,S=l[0].jobId+"",C,U,M;i=new vt({props:{type:l[3][l[0].state],$$slots:{default:[It]},$$scope:{ctx:l}}});let _=l[0].state==="Running"&&lt(l);return{c(){e=u("div"),a=u("div"),t=u("div"),n=u("h1"),c=E(s),o=b(),X(i.$$.fragment),d=b(),h=u("h2"),C=E(S),U=b(),_&&_.c(),this.h()},l($){e=p($,"DIV",{class:!0});var P=m(e);a=p(P,"DIV",{class:!0});var R=m(a);t=p(R,"DIV",{class:!0});var A=m(t);n=p(A,"H1",{class:!0});var j=m(n);c=k(j,s),j.forEach(f),o=g(A),Y(i.$$.fragment,A),A.forEach(f),d=g(R),h=p(R,"H2",{class:!0});var q=m(h);C=k(q,S),q.forEach(f),R.forEach(f),U=g(P),_&&_.l(P),P.forEach(f),this.h()},h(){v(n,"class","text-2xl"),v(t,"class","flex flex-row gap-2"),v(h,"class","text-sm"),v(a,"class","flex flex-col gap-2"),v(e,"class","flex items-center justify-between")},m($,P){se($,e,P),r(e,a),r(a,t),r(t,n),r(n,c),r(t,o),Z(i,t,null),r(a,d),r(a,h),r(h,C),r(e,U),_&&_.m(e,null),M=!0},p($,[P]){const R={};P&1&&(R.type=$[3][$[0].state]),P&33&&(R.$$scope={dirty:P,ctx:$}),i.$set(R),(!M||P&1)&&S!==(S=$[0].jobId+"")&&L(C,S),$[0].state==="Running"?_?(_.p($,P),P&1&&O(_,1)):(_=lt($),_.c(),O(_,1),_.m(e,null)):_&&(st(),y(_,1,1,()=>{_=null}),ot())},i($){M||(O(i.$$.fragment,$),O(_),M=!0)},o($){y(i.$$.fragment,$),y(_),M=!1},d($){$&&f(e),x(i),_&&_.d()}}}function Pt(l,e,a){let t;Ie(l,Be,i=>a(1,t=i));let{operation:n}=e;const s=nt(),c=i=>{const{checked:d}=i.target;s("toggleAutoRefresh",{checked:d}),it(Be,t=d,t)},o={Completed:"green",Running:"blue",Failed:"red",Unspecified:"gray"};return l.$$set=i=>{"operation"in i&&a(0,n=i.operation)},[n,t,c,o]}class Vt extends we{constructor(e){super(),De(this,e,Pt,Dt,Ee,{operation:0})}}function Ct(l){let e,a,t=V("batch","results")+"",n,s,c,o,i,d=V("batch","operations-progress",{percent:l[3]})+"",h,S,C,U=Intl.NumberFormat("en-US").format(l[0].completeOperationCount)+"",M,_,$=Intl.NumberFormat("en-US").format(l[0].totalOperationCount)+"",P,R,A,j,q,K,z,B,G=V("batch","operations-succeeded",{count:l[0].completeOperationCount})+"",me,de,J,Q=V("batch","operations-failed",{count:l[0].failureOperationCount})+"",ee,fe,W,F,te,ae;return{c(){e=u("div"),a=u("p"),n=E(t),s=b(),c=u("div"),o=u("div"),i=u("span"),h=E(d),S=b(),C=u("span"),M=E(U),_=E(" / "),P=E($),R=b(),A=u("div"),j=u("div"),q=b(),K=u("div"),z=u("div"),B=u("span"),me=E(G),de=b(),J=u("span"),ee=E(Q),fe=b(),W=u("div"),F=u("div"),te=b(),ae=u("div"),this.h()},l(T){e=p(T,"DIV",{class:!0});var w=m(e);a=p(w,"P",{});var oe=m(a);n=k(oe,t),oe.forEach(f),s=g(w),c=p(w,"DIV",{});var le=m(c);o=p(le,"DIV",{class:!0});var ne=m(o);i=p(ne,"SPAN",{class:!0});var he=m(i);h=k(he,d),he.forEach(f),S=g(ne),C=p(ne,"SPAN",{class:!0});var H=m(C);M=k(H,U),_=k(H," / "),P=k(H,$),H.forEach(f),ne.forEach(f),R=g(le),A=p(le,"DIV",{class:!0});var ie=m(A);j=p(ie,"DIV",{class:!0,style:!0}),m(j).forEach(f),ie.forEach(f),le.forEach(f),q=g(w),K=p(w,"DIV",{});var ve=m(K);z=p(ve,"DIV",{class:!0});var ue=m(z);B=p(ue,"SPAN",{class:!0});var _e=m(B);me=k(_e,G),_e.forEach(f),de=g(ue),J=p(ue,"SPAN",{class:!0});var ce=m(J);ee=k(ce,Q),ce.forEach(f),ue.forEach(f),fe=g(ve),W=p(ve,"DIV",{class:!0});var re=m(W);F=p(re,"DIV",{style:!0,class:!0}),m(F).forEach(f),te=g(re),ae=p(re,"DIV",{style:!0,class:!0}),m(ae).forEach(f),re.forEach(f),ve.forEach(f),w.forEach(f),this.h()},h(){v(i,"class","text-xs font-semibold"),v(C,"class","text-xs font-semibold"),v(o,"class","flex justify-between"),v(j,"class","absolute left-0 flex h-full items-center bg-indigo-600"),ge(j,"width",l[3]+"%"),v(A,"class","relative h-2 w-full overflow-hidden rounded bg-indigo-100"),v(B,"class","text-xs font-semibold text-green-700"),v(J,"class","text-xs font-semibold"),xe(J,"text-red-700",l[2]>0),v(z,"class","flex justify-between"),ge(F,"width",l[1]+"%"),v(F,"class","absolute left-0 flex h-full items-center bg-green-200"),ge(ae,"width",l[2]+"%"),v(ae,"class","absolute right-0 flex h-full items-center justify-end bg-red-200"),v(W,"class","relative h-2 w-full overflow-hidden rounded"),v(e,"class","flex flex-col gap-4")},m(T,w){se(T,e,w),r(e,a),r(a,n),r(e,s),r(e,c),r(c,o),r(o,i),r(i,h),r(o,S),r(o,C),r(C,M),r(C,_),r(C,P),r(c,R),r(c,A),r(A,j),r(e,q),r(e,K),r(K,z),r(z,B),r(B,me),r(z,de),r(z,J),r(J,ee),r(K,fe),r(K,W),r(W,F),r(W,te),r(W,ae)},p(T,[w]){w&8&&d!==(d=V("batch","operations-progress",{percent:T[3]})+"")&&L(h,d),w&1&&U!==(U=Intl.NumberFormat("en-US").format(T[0].completeOperationCount)+"")&&L(M,U),w&1&&$!==($=Intl.NumberFormat("en-US").format(T[0].totalOperationCount)+"")&&L(P,$),w&8&&ge(j,"width",T[3]+"%"),w&1&&G!==(G=V("batch","operations-succeeded",{count:T[0].completeOperationCount})+"")&&L(me,G),w&1&&Q!==(Q=V("batch","operations-failed",{count:T[0].failureOperationCount})+"")&&L(ee,Q),w&4&&xe(J,"text-red-700",T[2]>0),w&2&&ge(F,"width",T[1]+"%"),w&4&&ge(ae,"width",T[2]+"%")},i:D,o:D,d(T){T&&f(e)}}}function Tt(l,e,a){let{operation:t}=e,n,s,c;return l.$$set=o=>{"operation"in o&&a(0,t=o.operation)},l.$$.update=()=>{if(l.$$.dirty&1){const{completeOperationCount:o,failureOperationCount:i,totalOperationCount:d}=t;a(1,n=Math.round(o/d*100)),a(2,s=Math.round(i/d*100)),a(3,c=Math.round((o+i)/d*100))}},[t,n,s,c]}class jt extends we{constructor(e){super(),De(this,e,Tt,Ct,Ee,{operation:0})}}function Ot(l){let e=V("batch","back-link")+"",a;return{c(){a=E(e)},l(t){a=k(t,e)},m(t,n){se(t,a,n)},p:D,d(t){t&&f(a)}}}function St(l){return{c:D,l:D,m:D,p:D,i:D,o:D,d:D}}function Rt(l){let e,a,t,n,s,c;return e=new Vt({props:{operation:l[7]}}),e.$on("toggleAutoRefresh",l[2]),t=new tt({props:{$$slots:{default:[Ft]},$$scope:{ctx:l}}}),s=new tt({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),{c(){X(e.$$.fragment),a=b(),X(t.$$.fragment),n=b(),X(s.$$.fragment)},l(o){Y(e.$$.fragment,o),a=g(o),Y(t.$$.fragment,o),n=g(o),Y(s.$$.fragment,o)},m(o,i){Z(e,o,i),se(o,a,i),Z(t,o,i),se(o,n,i),Z(s,o,i),c=!0},p(o,i){const d={};i&256&&(d.$$scope={dirty:i,ctx:o}),t.$set(d);const h={};i&256&&(h.$$scope={dirty:i,ctx:o}),s.$set(h)},i(o){c||(O(e.$$.fragment,o),O(t.$$.fragment,o),O(s.$$.fragment,o),c=!0)},o(o){y(e.$$.fragment,o),y(t.$$.fragment,o),y(s.$$.fragment,o),c=!1},d(o){x(e,o),o&&f(a),x(t,o),o&&f(n),x(s,o)}}}function Ft(l){let e,a;return e=new kt({props:{operation:l[7]}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){Z(e,t,n),a=!0},p:D,i(t){a||(O(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function Nt(l){let e,a;return e=new jt({props:{operation:l[7]}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){Z(e,t,n),a=!0},p:D,i(t){a||(O(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function yt(l){return{c:D,l:D,m:D,p:D,i:D,o:D,d:D}}function rt(l){let e,a,t={ctx:l,current:null,token:null,hasCatch:!1,pending:yt,then:Rt,catch:St,value:7,blocks:[,,,]};return ct(l[3](),t),{c(){e=et(),t.block.c()},l(n){e=et(),t.block.l(n)},m(n,s){se(n,e,s),t.block.m(n,t.anchor=s),t.mount=()=>e.parentNode,t.anchor=e,a=!0},p(n,s){l=n,ft(t,l,s)},i(n){a||(O(t.block),a=!0)},o(n){for(let s=0;s<3;s+=1){const c=t.blocks[s];y(c)}a=!1},d(n){n&&f(e),t.block.d(n),t.token=null,t=null}}}function At(l){let e,a,t,n,s=l[1],c;t=new bt({props:{href:at({namespace:l[0]}),icon:"chevron-left",$$slots:{default:[Ot]},$$scope:{ctx:l}}});let o=rt(l);return{c(){e=u("div"),a=u("div"),X(t.$$.fragment),n=b(),o.c(),this.h()},l(i){e=p(i,"DIV",{class:!0});var d=m(e);a=p(d,"DIV",{class:!0});var h=m(a);Y(t.$$.fragment,h),h.forEach(f),n=g(d),o.l(d),d.forEach(f),this.h()},h(){v(a,"class","flex flex-row"),v(e,"class","flex flex-col gap-4")},m(i,d){se(i,e,d),r(e,a),Z(t,a,null),r(e,n),o.m(e,null),c=!0},p(i,[d]){const h={};d&1&&(h.href=at({namespace:i[0]})),d&256&&(h.$$scope={dirty:d,ctx:i}),t.$set(h),d&2&&Ee(s,s=i[1])?(st(),y(o,1,1,D),ot(),o=rt(i),o.c(),O(o,1),o.m(e,null)):o.p(i,d)},i(i){c||(O(t.$$.fragment,i),O(o),c=!0)},o(i){y(t.$$.fragment,i),y(o),c=!1},d(i){i&&f(e),x(t),o.d(i)}}}function Bt(l,e,a){let t;Ie(l,Be,h=>a(6,t=h));let{namespace:n}=e,{jobId:s}=e,c=0,o;const i=h=>{h.detail.checked?a(1,c+=1):o&&window.clearTimeout(o)},d=()=>$t({jobId:s,namespace:n}).then(h=>(t&&h.state==="Running"&&(o=window.setTimeout(()=>{a(1,c+=1)},5e3)),h));return l.$$set=h=>{"namespace"in h&&a(0,n=h.namespace),"jobId"in h&&a(4,s=h.jobId)},[n,c,i,d,s]}class Ut extends we{constructor(e){super(),De(this,e,Bt,At,Ee,{namespace:0,jobId:4})}}function Mt(l){let e,a,t,n;return e=new pt({props:{title:V("batch","describe-page-title")+" | "+l[0]}}),t=new Ut({props:{jobId:l[0],namespace:l[1]}}),{c(){X(e.$$.fragment),a=b(),X(t.$$.fragment)},l(s){Y(e.$$.fragment,s),a=g(s),Y(t.$$.fragment,s)},m(s,c){Z(e,s,c),se(s,a,c),Z(t,s,c),n=!0},p(s,[c]){const o={};c&1&&(o.title=V("batch","describe-page-title")+" | "+s[0]),e.$set(o);const i={};c&1&&(i.jobId=s[0]),c&2&&(i.namespace=s[1]),t.$set(i)},i(s){n||(O(e.$$.fragment,s),O(t.$$.fragment,s),n=!0)},o(s){y(e.$$.fragment,s),y(t.$$.fragment,s),n=!1},d(s){x(e,s),s&&f(a),x(t,s)}}}function Ht(l,e,a){let t,n,s;return Ie(l,ut,c=>a(2,s=c)),l.$$.update=()=>{l.$$.dirty&4&&a(1,t=s.params.namespace),l.$$.dirty&4&&a(0,n=s.params.jobId)},[n,t,s]}class ea extends we{constructor(e){super(),De(this,e,Ht,Mt,Ee,{})}}export{ea as default};