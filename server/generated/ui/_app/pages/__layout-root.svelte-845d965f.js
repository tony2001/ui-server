var pe=Object.defineProperty,_e=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var W=(o,e,n)=>e in o?pe(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,x=(o,e)=>{for(var n in e||(e={}))ve.call(e,n)&&W(o,n,e[n]);if(Q)for(var n of Q(e))ge.call(e,n)&&W(o,n,e[n]);return o},ee=(o,e)=>_e(o,he(e));import{X as be,S,i as F,s as H,e as k,t as ne,k as z,c as B,a as M,h as te,d as h,m as K,b as d,Y as re,g as U,M as g,T as we,j as ye,l as E,E as oe,N as Z,C as ie,V as se,w as $,x as C,y as j,Z as P,q as b,o as w,B as A,_ as R,$ as X,n as ke,p as Be,a0 as Ve,I as Ie,J as Ee,K as Ne,L as Te}from"../chunks/index-604742bf.js";import{g as $e}from"../chunks/get-namespace-d07a8a35.js";import{n as Ce}from"../chunks/notifications-cfed8e58.js";import{r as ce,a as ue}from"../chunks/route-for-api-65f6e9e6.js";import{c as je,i as fe}from"../chunks/version-check-9d9f9783.js";import{f as Ae,N as Ue,E as Le}from"../chunks/error-boundary-4d6b148c.js";import{f as Me}from"../chunks/settings-service-f179944f.js";/* empty css                    */import Oe from"./_header.svelte-0e24dd3d.js";import{p as me}from"../chunks/stores-810822a9.js";import{p as qe}from"../chunks/persist-store-e5ba5089.js";import"../chunks/index-c9e619a8.js";import"../chunks/is-network-error-ac7c8caf.js";import"../chunks/route-for-93451b94.js";import"../chunks/is-function-b969a126.js";import"../chunks/index-69aa65a3.js";import"../chunks/error-a039bd7e.js";import"../chunks/navigation-6709cf39.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/link-74db22ab.js";import"../chunks/settings-0aa2906c.js";import"../chunks/index-b2629639.js";import"../chunks/nav-open-3c3c705a.js";import"../chunks/_nav-row-1d028f41.js";import"../chunks/tooltip-a7a70fc2.js";import"../chunks/copyable-25a1e104.js";import"../chunks/copy-to-clipboard-8832075c.js";import"../chunks/data-encoder-status-1cc2e10d.js";import"../chunks/data-converter-config-8cf2e48e.js";import"../chunks/is-http-3668e20a.js";import"../chunks/modal-9718c13c.js";import"../chunks/button-dba736f2.js";import"../chunks/badge-cd9e2482.js";import"../chunks/namespaces-8e051ffd.js";const De=(o,e)=>!o.auth.enabled||Boolean(e==null?void 0:e.email),ze=async(o=fetch)=>{const e=await o("https://api.github.com/repos/temporalio/ui-server/releases"),n=await e.json();if(!e.ok)return;let t;if(n.length>0){const{tag_name:r}=n[0];t=r.replace("v","")}return t},ae={namespaces:[]};async function Ke(o,e=fetch){if(o.runtimeEnvironment.isCloud)return ae;const n=await ce(ue("namespaces"),{request:e,onError:()=>Ce.add("error","Unable to fetch namespaces")});return n!=null?n:ae}const Se=async(o,e=fetch)=>{if(!o.runtimeEnvironment.isCloud)return await ce(ue("cluster"),{request:e}).then(n=>(je.set(n),n))};var J=(o=>(o[o.TemporalVersion=1]="TemporalVersion",o[o.UIVersion=2]="UIVersion",o))(J||{});const Y=qe("closedBanners",null),Fe=o=>{var n;let e=(n=be(Y))!=null?n:[];e=[...e,o],e=e.slice(e.length-10,e.length),Y.set(e)};function le(o){let e,n,t,r,s,i,l,a,c,f;return{c(){e=k("section"),n=k("a"),t=ne(o[2]),r=z(),s=k("button"),i=ne("\u2715"),this.h()},l(u){e=B(u,"SECTION",{class:!0,"data-cy":!0});var m=M(e);n=B(m,"A",{href:!0,target:!0});var y=M(n);t=te(y,o[2]),y.forEach(h),r=K(m),s=B(m,"BUTTON",{class:!0,"data-cy":!0});var v=M(s);i=te(v,"\u2715"),v.forEach(h),m.forEach(h),this.h()},h(){d(n,"href",o[3]),d(n,"target","_blank"),d(s,"class","text-black-600 absolute top-0 right-0 mr-5"),d(s,"data-cy","close-banner"),d(e,"class",l=re(`relative block text-center leading-10 ${o[1]}`)+" svelte-1xgik0j"),d(e,"data-cy",a=o[5].dataCy)},m(u,m){U(u,e,m),g(e,n),g(n,t),g(e,r),g(e,s),g(s,i),c||(f=we(s,"click",o[8]),c=!0)},p(u,m){m&4&&ye(t,u[2]),m&8&&d(n,"href",u[3]),m&2&&l!==(l=re(`relative block text-center leading-10 ${u[1]}`)+" svelte-1xgik0j")&&d(e,"class",l),m&32&&a!==(a=u[5].dataCy)&&d(e,"data-cy",a)},d(u){u&&h(e),c=!1,f()}}}function He(o){let e,n=o[4]&&le(o);return{c(){n&&n.c(),e=E()},l(t){n&&n.l(t),e=E()},m(t,r){n&&n.m(t,r),U(t,e,r)},p(t,[r]){t[4]?n?n.p(t,r):(n=le(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:oe,o:oe,d(t){n&&n.d(t),t&&h(e)}}}function Je(o,e,n){let t,r;Z(o,Y,u=>n(7,r=u));let{key:s}=e,{severity:i}=e,{message:l}=e,{link:a}=e,{shownBanner:c}=e;const f=()=>Fe(s);return o.$$set=u=>{n(5,e=ie(ie({},e),se(u))),"key"in u&&n(0,s=u.key),"severity"in u&&n(1,i=u.severity),"message"in u&&n(2,l=u.message),"link"in u&&n(3,a=u.link),"shownBanner"in u&&n(6,c=u.shownBanner)},o.$$.update=()=>{o.$$.dirty&129&&n(4,t=!(r!=null?r:[]).includes(s)),o.$$.dirty&80&&(t||n(6,c++,c))},e=se(e),[s,i,l,a,t,e,c,r,f]}class de extends S{constructor(e){super(),F(this,e,Je,He,H,{key:0,severity:1,message:2,link:3,shownBanner:6})}}function Pe(o){let e,n,t;function r(i){o[6](i)}let s={key:o[2],severity:o[1],message:o[5],link:o[3],dataCy:"temporal-version-banner"};return o[0]!==void 0&&(s.shownBanner=o[0]),e=new de({props:s}),R.push(()=>X(e,"shownBanner",r)),{c(){$(e.$$.fragment)},l(i){C(e.$$.fragment,i)},m(i,l){j(e,i,l),t=!0},p(i,l){const a={};!n&&l&1&&(n=!0,a.shownBanner=i[0],P(()=>n=!1)),e.$set(a)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){w(e.$$.fragment,i),t=!1},d(i){A(e,i)}}}function Re(o){let e,n,t=o[4]&&Pe(o);return{c(){t&&t.c(),e=E()},l(r){t&&t.l(r),e=E()},m(r,s){t&&t.m(r,s),U(r,e,s),n=!0},p(r,[s]){r[4]&&t.p(r,s)},i(r){n||(b(t),n=!0)},o(r){w(t),n=!1},d(r){t&&t.d(r),r&&h(e)}}}function Xe(o,e,n){let t;Z(o,me,_=>n(12,t=_));var r,s,i,l,a;let{shownBanner:c}=e;const{cluster:f}=t.stuff,u={High:"high",Medium:"medium",Low:"low"},{recommended:m,current:y}=(r=f==null?void 0:f.versionInfo)!==null&&r!==void 0?r:{},v=(i=(s=f==null?void 0:f.versionInfo)===null||s===void 0?void 0:s.alerts)===null||i===void 0?void 0:i[0],V=v?u[v.severity]:u.Low,q=`server-v${y==null?void 0:y.version}`,T=`https://github.com/temporalio/temporal/releases/tag/v${(a=(l=f==null?void 0:f.versionInfo)===null||l===void 0?void 0:l.recommended)===null||a===void 0?void 0:a.version}`,I=fe(m==null?void 0:m.version,y==null?void 0:y.version),O=V===u.Low?`\u{1F4E5} Temporal v${m==null?void 0:m.version} is available`:`\u{1F4E5} ${v==null?void 0:v.message}`;function p(_){c=_,n(0,c)}return o.$$set=_=>{"shownBanner"in _&&n(0,c=_.shownBanner)},[c,V,q,T,I,O,p]}class Ye extends S{constructor(e){super(),F(this,e,Xe,Re,H,{shownBanner:0})}}function Ze(o){let e,n,t;function r(i){o[6](i)}let s={key:o[1],severity:Qe,message:o[2],link:o[4],dataCy:"ui-version-banner"};return o[0]!==void 0&&(s.shownBanner=o[0]),e=new de({props:s}),R.push(()=>X(e,"shownBanner",r)),{c(){$(e.$$.fragment)},l(i){C(e.$$.fragment,i)},m(i,l){j(e,i,l),t=!0},p(i,l){const a={};!n&&l&1&&(n=!0,a.shownBanner=i[0],P(()=>n=!1)),e.$set(a)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){w(e.$$.fragment,i),t=!1},d(i){A(e,i)}}}function Ge(o){let e,n,t=o[3]&&Ze(o);return{c(){t&&t.c(),e=E()},l(r){t&&t.l(r),e=E()},m(r,s){t&&t.m(r,s),U(r,e,s),n=!0},p(r,[s]){r[3]&&t.p(r,s)},i(r){n||(b(t),n=!0)},o(r){w(t),n=!1},d(r){t&&t.d(r),r&&h(e)}}}const Qe="low";function We(o,e,n){let{shownBanner:t}=e,{uiVersionInfo:r}=e;const s=`ui-v${r==null?void 0:r.current}`,i=`\u{1F4E5} Temporal UI v${r==null?void 0:r.recommended} is available`,l=fe(r==null?void 0:r.recommended,r==null?void 0:r.current),a=`https://github.com/temporalio/ui-server/releases/tag/v${r==null?void 0:r.recommended}`;function c(f){t=f,n(0,t)}return o.$$set=f=>{"shownBanner"in f&&n(0,t=f.shownBanner),"uiVersionInfo"in f&&n(5,r=f.uiVersionInfo)},[t,s,i,l,a,r,c]}class xe extends S{constructor(e){super(),F(this,e,We,Ge,H,{shownBanner:0,uiVersionInfo:5})}}function en(o){let e,n,t,r;const s=[tn,nn],i=[];function l(a,c){return a[1]===J.TemporalVersion?0:a[1]===J.UIVersion?1:-1}return~(e=l(o))&&(n=i[e]=s[e](o)),{c(){n&&n.c(),t=E()},l(a){n&&n.l(a),t=E()},m(a,c){~e&&i[e].m(a,c),U(a,t,c),r=!0},p(a,c){let f=e;e=l(a),e===f?~e&&i[e].p(a,c):(n&&(ke(),w(i[f],1,1,()=>{i[f]=null}),Be()),~e?(n=i[e],n?n.p(a,c):(n=i[e]=s[e](a),n.c()),b(n,1),n.m(t.parentNode,t)):n=null)},i(a){r||(b(n),r=!0)},o(a){w(n),r=!1},d(a){~e&&i[e].d(a),a&&h(t)}}}function nn(o){let e,n,t;function r(i){o[4](i)}let s={uiVersionInfo:o[0]};return o[1]!==void 0&&(s.shownBanner=o[1]),e=new xe({props:s}),R.push(()=>X(e,"shownBanner",r)),{c(){$(e.$$.fragment)},l(i){C(e.$$.fragment,i)},m(i,l){j(e,i,l),t=!0},p(i,l){const a={};l&1&&(a.uiVersionInfo=i[0]),!n&&l&2&&(n=!0,a.shownBanner=i[1],P(()=>n=!1)),e.$set(a)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){w(e.$$.fragment,i),t=!1},d(i){A(e,i)}}}function tn(o){let e,n,t;function r(i){o[3](i)}let s={};return o[1]!==void 0&&(s.shownBanner=o[1]),e=new Ye({props:s}),R.push(()=>X(e,"shownBanner",r)),{c(){$(e.$$.fragment)},l(i){C(e.$$.fragment,i)},m(i,l){j(e,i,l),t=!0},p(i,l){const a={};!n&&l&2&&(n=!0,a.shownBanner=i[1],P(()=>n=!1)),e.$set(a)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){w(e.$$.fragment,i),t=!1},d(i){A(e,i)}}}function rn(o){let e,n,t=o[2]&&en(o);return{c(){t&&t.c(),e=E()},l(r){t&&t.l(r),e=E()},m(r,s){t&&t.m(r,s),U(r,e,s),n=!0},p(r,[s]){r[2]&&t.p(r,s)},i(r){n||(b(t),n=!0)},o(r){w(t),n=!1},d(r){t&&t.d(r),r&&h(e)}}}function on(o,e,n){let t;Z(o,me,c=>n(5,t=c));let{uiVersionInfo:r}=e,s=J.TemporalVersion;const i=t.stuff.settings.notifyOnNewVersion;function l(c){s=c,n(1,s)}function a(c){s=c,n(1,s)}return o.$$set=c=>{"uiVersionInfo"in c&&n(0,r=c.uiVersionInfo)},[r,s,i,l,a]}class sn extends S{constructor(e){super(),F(this,e,on,rn,H,{uiVersionInfo:0})}}function an(o){let e;const n=o[2].default,t=Ie(n,o,o[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&8)&&Ee(t,n,r,r[3],e?Te(n,r[3],s,null):Ne(r[3]),null)},i(r){e||(b(t,r),e=!0)},o(r){w(t,r),e=!1},d(r){t&&t.d(r)}}}function ln(o){let e,n,t,r,s,i,l,a,c,f,u,m,y,v,V,q,T,I,O;return c=new Ue({}),m=new Oe({props:{user:o[0]}}),V=new sn({props:{uiVersionInfo:o[1]}}),I=new Le({props:{onError:cn,$$slots:{default:[an]},$$scope:{ctx:o}}}),{c(){e=k("link"),n=k("link"),t=k("meta"),r=k("meta"),s=k("meta"),i=k("meta"),l=z(),a=k("div"),$(c.$$.fragment),f=z(),u=k("div"),$(m.$$.fragment),y=z(),v=k("section"),$(V.$$.fragment),q=z(),T=k("div"),$(I.$$.fragment),this.h()},l(p){const _=Ve('[data-svelte="svelte-15ltrtv"]',document.head);e=B(_,"LINK",{rel:!0,href:!0}),n=B(_,"LINK",{rel:!0,href:!0}),t=B(_,"META",{property:!0,content:!0}),r=B(_,"META",{property:!0,content:!0}),s=B(_,"META",{property:!0,content:!0}),i=B(_,"META",{property:!0,content:!0}),_.forEach(h),l=K(p),a=B(p,"DIV",{class:!0});var N=M(a);C(c.$$.fragment,N),f=K(N),u=B(N,"DIV",{class:!0});var D=M(u);C(m.$$.fragment,D),D.forEach(h),y=K(N),v=B(N,"SECTION",{id:!0,class:!0});var L=M(v);C(V.$$.fragment,L),q=K(L),T=B(L,"DIV",{class:!0});var G=M(T);C(I.$$.fragment,G),G.forEach(h),L.forEach(h),N.forEach(h),this.h()},h(){document.title="Temporal",d(e,"rel","manifest"),d(e,"href","/site.webmanifest"),d(n,"rel","apple-touch-icon"),d(n,"href","/apple-touch-icon.png"),d(t,"property","og:title"),d(t,"content","Temporal"),d(r,"property","og:type"),d(r,"content","website"),d(s,"property","og:url"),d(s,"content","https://temporal.io"),d(i,"property","og:image"),d(i,"content","/banner.png"),d(u,"class","sticky top-0 z-20 h-screen w-auto"),d(T,"class","z-10 flex h-full flex-col gap-4 px-10 pb-10 pt-8"),d(v,"id","content"),d(v,"class","h-screen w-max flex-auto overflow-auto"),d(a,"class","flex h-screen w-screen flex-row")},m(p,_){g(document.head,e),g(document.head,n),g(document.head,t),g(document.head,r),g(document.head,s),g(document.head,i),U(p,l,_),U(p,a,_),j(c,a,null),g(a,f),g(a,u),j(m,u,null),g(a,y),g(a,v),j(V,v,null),g(v,q),g(v,T),j(I,T,null),O=!0},p(p,[_]){const N={};_&1&&(N.user=p[0]),m.$set(N);const D={};_&2&&(D.uiVersionInfo=p[1]),V.$set(D);const L={};_&8&&(L.$$scope={dirty:_,ctx:p}),I.$set(L)},i(p){O||(b(c.$$.fragment,p),b(m.$$.fragment,p),b(V.$$.fragment,p),b(I.$$.fragment,p),O=!0)},o(p){w(c.$$.fragment,p),w(m.$$.fragment,p),w(V.$$.fragment,p),w(I.$$.fragment,p),O=!1},d(p){h(e),h(n),h(t),h(r),h(s),h(i),p&&h(l),p&&h(a),A(c),A(m),A(V),A(I)}}}const Rn=async function({fetch:o}){const e=await Me(o),n=await Ae(o);if(!De(e,n))return{status:302,redirect:"/login"};const t=await Ke(e,o),r=$e({namespaces:t==null?void 0:t.namespaces,settings:e}),s=await Se(e,o),i={current:e.version,recommended:e.notifyOnNewVersion?await ze(o):void 0};return{props:{user:n,uiVersionInfo:i},stuff:{namespaces:t==null?void 0:t.namespaces,settings:ee(x({},e),{defaultNamespace:r}),cluster:s}}},cn=()=>{};function un(o,e,n){let{$$slots:t={},$$scope:r}=e,{user:s}=e,{uiVersionInfo:i}=e;return o.$$set=l=>{"user"in l&&n(0,s=l.user),"uiVersionInfo"in l&&n(1,i=l.uiVersionInfo),"$$scope"in l&&n(3,r=l.$$scope)},[s,i,t,r]}class Xn extends S{constructor(e){super(),F(this,e,un,ln,H,{user:0,uiVersionInfo:1})}}export{Xn as default,Rn as load};