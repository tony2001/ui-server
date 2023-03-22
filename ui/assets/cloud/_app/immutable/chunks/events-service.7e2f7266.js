import{d as p,w as B}from"./index.deae5bd4.js";import{p as S}from"./stores.0a7d5f37.js";import{e as W}from"./event-view.382b2139.js";import{l as R}from"./route-for.b445e6a2.js";import{r as V}from"./workflow-run.8a407b5f.js";import{a as X}from"./auth-user.3a7bc4db.js";import{S as Y,b as Z,a as U,N as q,m as b,c as z,w as x,p as k,q as y,d as C,x as $,k as h,u as A,Q as N,R as w,f as D,L as E,j as v,z as j,g,h as G,y as ee,U as te,a5 as J,ad as se,O as ne,C as ae,D as re,E as oe,F as le,G as ie,H as ce,I as fe,J as ue}from"./index.a36c9cb0.js";import{I as me}from"./icon.33859671.js";import{p as K}from"./paginated.d1f73ab3.js";import{r as H,a as P}from"./route-for-api.9d345fd7.js";import{t as F}from"./index.b07b66ce.js";import{b as de}from"./has.48bed8a5.js";const _e=p([S],([t])=>t.params.namespace?R(t.params.namespace):""),ve=p([S],([t])=>t.params.workflow?R(t.params.workflow):""),he=p([S],([t])=>t.params.run?R(t.params.run):""),pe=p([S],([t])=>{var e;return(e=t.data)==null?void 0:e.settings}),ge=p([X],([t])=>t==null?void 0:t.accessToken),Ee=p([_e,ve,he,W],([t,e,n,o])=>({namespace:t,workflowId:e,runId:n,sort:o}));p([Ee,pe,ge,V],([t,e,n,o])=>({...t,settings:e,accessToken:n,refresh:V,$refresh:o}));const be={start:[],end:[]},ze=B(be),Ce=B(null);function L(t){let e,n,o;return n=new me({props:{name:t[2]}}),{c(){e=b("div"),ae(n.$$.fragment)},l(s){e=k(s,"DIV",{});var r=y(e);re(n.$$.fragment,r),r.forEach(h)},m(s,r){D(s,e,r),oe(n,e,null),o=!0},p(s,r){const c={};r&4&&(c.name=s[2]),n.$set(c)},i(s){o||(v(n.$$.fragment,s),o=!0)},o(s){g(n.$$.fragment,s),o=!1},d(s){s&&h(e),le(n)}}}function O(t){let e,n;const o=t[8].default,s=ie(o,t,t[7],null);return{c(){e=b("div"),s&&s.c(),this.h()},l(r){e=k(r,"DIV",{class:!0});var c=y(e);s&&s.l(c),c.forEach(h),this.h()},h(){A(e,"class","content svelte-1u0e3fc")},m(r,c){D(r,e,c),s&&s.m(e,null),n=!0},p(r,c){s&&s.p&&(!n||c&128)&&ce(s,o,r,r[7],n?ue(o,r[7],c,null):fe(r[7]),null)},i(r){n||(v(s,r),n=!0)},o(r){g(s,r),n=!1},d(r){r&&h(e),s&&s.d(r)}}}function ke(t){let e,n,o,s,r,c,m,u,i=t[2]&&L(t),l=t[6].default&&O(t),d=[{class:m="alert "+t[0]+" "+t[4]},{role:"alert"},t[5]],_={};for(let a=0;a<d.length;a+=1)_=q(_,d[a]);return{c(){e=b("div"),i&&i.c(),n=z(),o=b("div"),s=b("h5"),r=x(t[1]),c=z(),l&&l.c(),this.h()},l(a){e=k(a,"DIV",{class:!0,role:!0});var f=y(e);i&&i.l(f),n=C(f),o=k(f,"DIV",{class:!0});var I=y(o);s=k(I,"H5",{class:!0});var T=y(s);r=$(T,t[1]),T.forEach(h),c=C(I),l&&l.l(I),I.forEach(h),f.forEach(h),this.h()},h(){A(s,"class","font-semibold leading-6"),A(o,"class","ml-1"),N(e,_),w(e,"bold",t[3]),w(e,"svelte-1u0e3fc",!0)},m(a,f){D(a,e,f),i&&i.m(e,null),E(e,n),E(e,o),E(o,s),E(s,r),E(o,c),l&&l.m(o,null),u=!0},p(a,[f]){a[2]?i?(i.p(a,f),f&4&&v(i,1)):(i=L(a),i.c(),v(i,1),i.m(e,n)):i&&(j(),g(i,1,1,()=>{i=null}),G()),(!u||f&2)&&ee(r,a[1]),a[6].default?l?(l.p(a,f),f&64&&v(l,1)):(l=O(a),l.c(),v(l,1),l.m(o,null)):l&&(j(),g(l,1,1,()=>{l=null}),G()),N(e,_=te(d,[(!u||f&17&&m!==(m="alert "+a[0]+" "+a[4]))&&{class:m},{role:"alert"},f&32&&a[5]])),w(e,"bold",a[3]),w(e,"svelte-1u0e3fc",!0)},i(a){u||(v(i),v(l),u=!0)},o(a){g(i),g(l),u=!1},d(a){a&&h(e),i&&i.d(),l&&l.d()}}}function ye(t,e,n){const o=["intent","title","icon","bold","class"];let s=J(e,o),{$$slots:r={},$$scope:c}=e;const m=se(r);let{intent:u}=e,{title:i}=e,{icon:l=null}=e,{bold:d=!1}=e,{class:_=""}=e;return t.$$set=a=>{e=q(q({},e),ne(a)),n(5,s=J(e,o)),"intent"in a&&n(0,u=a.intent),"title"in a&&n(1,i=a.title),"icon"in a&&n(2,l=a.icon),"bold"in a&&n(3,d=a.bold),"class"in a&&n(4,_=a.class),"$$scope"in a&&n(7,c=a.$$scope)},[u,i,l,d,_,s,m,c,r]}class Ne extends Y{constructor(e){super(),Z(this,e,ye,ke,U,{intent:0,title:1,icon:2,bold:3,class:4})}}const M=t=>!de(t)||t==="descending"?"events.descending":t==="ascending"?"events.ascending":"events.descending",je=async({namespace:t,workflowId:e,runId:n,sort:o,onStart:s,onUpdate:r,onComplete:c})=>{const m=M(o),u=H(m,{namespace:t,workflowId:e,runId:n});return(await K(async l=>P(u,{token:l,request:fetch}),{onStart:s,onUpdate:r,onComplete:c})).history.events},Ge=async({namespace:t,workflowId:e,runId:n,sort:o,settings:s,accessToken:r,onStart:c,onUpdate:m,onComplete:u})=>{const i=M(o),l=H(i,{namespace:t,workflowId:e,runId:n}),d=await K(async a=>P(l,{token:a,request:fetch}),{onStart:c,onUpdate:m,onComplete:u});return await F({response:d.history.events,namespace:t,settings:s,accessToken:r})},Q=async({namespace:t,workflowId:e,runId:n,sort:o})=>{const s=H(`events.${o}`,{namespace:t,workflowId:e,runId:n});try{return(await P(s,{request:fetch,params:{maximumPageSize:"20"}})).history.events}catch{return[]}},Je=async t=>{const{settings:e,namespace:n,accessToken:o}=t,s=await Q({...t,sort:"ascending"}),r=await Q({...t,sort:"descending"}),[c,m]=await Promise.all([F({response:s,namespace:n,settings:e,accessToken:o}),F({response:r,namespace:n,settings:e,accessToken:o})]);return{start:c,end:m}};export{Ne as A,je as a,Ge as b,ze as e,Je as f,be as i,Ce as t};
