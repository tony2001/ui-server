import{n as c}from"./namespaces.060f2e76.js";import{t as p}from"./toaster.70177650.js";import{p as u}from"./paginated.cc1432db.js";import{r as f,a as i}from"./route-for-api.31f752ce.js";const h={namespaces:[]};async function N(n,e=fetch){const{showTemporalSystemNamespace:o,runtimeEnvironment:a}=n;if(a.isCloud){c.set([]);return}try{const s=f("namespaces"),r=await u(async m=>i(s,{request:e,token:m,onError:()=>p.push({variant:"error",message:"Unable to fetch namespaces"})})),t=((r==null?void 0:r.namespaces)??[]).filter(m=>o||m.namespaceInfo.name!=="temporal-system");c.set(t)}catch{c.set([])}}async function d(n,e,o=fetch){var t;const[a]=h.namespaces;if((t=e==null?void 0:e.runtimeEnvironment)!=null&&t.isCloud)return a;const s=f("namespace",{namespace:n});return await i(s,{request:o,onError:()=>p.push({variant:"error",message:"Unable to fetch namespaces"})})??a}export{d as a,N as f};