import{d as a,r as d,w as t}from"./index-c915c910.js";import{p as n}from"./stores-de421f88.js";import{c as m,d as b}from"./workflow-service-b011eab6.js";import{p as k}from"./route-for-a6a4e2f3.js";import{i as h}from"./version-check-d006b302.js";import{c as f}from"./cluster-cca105a5.js";import{t as y}from"./versions-773860c5.js";const C=300,v=async(o,r,s)=>{r.set(!0);try{await s()}catch(e){console.error(e)}o.set(!1),setTimeout(()=>{r.set(!1)},C)},w=o=>{var r;return(r=o==null?void 0:o.visibilityStore)==null?void 0:r.includes("elasticsearch")},W=a([n],([o])=>{var r,s,e;return(e=(s=(r=o.data)==null?void 0:r.settings)==null?void 0:s.runtimeEnvironment)==null?void 0:e.isCloud});a([y,f],([o,r])=>h(o,"1.18.0")&&w(r));const A=a([f,W],([o,r])=>w(o)??r),E=t(0),V=a([n],([o])=>o.params.namespace),q=a([n],([o])=>o.url.searchParams.get("query")),P=a([n],([o])=>o.url.pathname),T=a([V,q,P,E,A],([o,r,s,e,i])=>({namespace:o,query:r,path:s,refresh:e,supportsAdvancedVisibility:i})),D=o=>{L.set(o)},S=o=>T.subscribe(({namespace:r,query:s,path:e,supportsAdvancedVisibility:i})=>{e==`${k}/namespaces/${r}/workflows`&&v(x,$,async()=>{const{workflows:u,error:l}=await m(r,{query:s});if(o(u),i){const p=await b(r,s);D(p)}l?c.set(l):c.set("")})}),H=t({parameters:{},searchType:"basic"}),$=t(!0),x=t(!0),L=t({count:0,totalCount:0}),c=t(""),I=d([],S),J=t(""),K=o=>{var r;return(r=o==null?void 0:o.runtimeEnvironment)!=null&&r.isCloud||o.disableWriteActions?!1:!o.workflowCancelDisabled},M=o=>o.disableWriteActions?!1:!o.workflowTerminateDisabled;export{I as a,c as b,L as c,J as d,K as e,M as f,x as l,E as r,A as s,$ as u,H as w};
