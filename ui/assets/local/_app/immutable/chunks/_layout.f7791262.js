import{r as o,a}from"./route-for-api.df64461e.js";import{a as c}from"./search-attributes.c866741f.js";const u=async(e,r=fetch)=>{try{const t=o("search-attributes",{namespace:e}),s=await a(t,{request:r});return{customAttributes:s.customAttributes,systemAttributes:s.systemAttributes}}catch(t){return console.error("Error fetching search attributes for namespace",e,t),{customAttributes:{},systemAttributes:{}}}},i=async({params:e,fetch:r})=>{const t=await u(e.namespace,r);c.set(t)},m=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{m as _,i as l};
