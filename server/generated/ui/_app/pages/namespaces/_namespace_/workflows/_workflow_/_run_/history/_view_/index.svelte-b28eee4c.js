import{S as c,i as r,s as u}from"../../../../../../../../chunks/vendor-9a5c5afd.js";const m=async function({url:t,params:n,stuff:a}){const{matchingEvents:s,matchingEventGroups:o}=a;let i;n.view==="summary"&&(i=s),n.view==="compact"&&(i=o);const[e]=i;return s.length&&(e==null?void 0:e.id)?(t.pathname=`${t.pathname}/${e.id}`,{status:302,redirect:String(t)}):{}};class d extends c{constructor(n){super();r(this,n,null,null,u,{})}}export{d as default,m as load};