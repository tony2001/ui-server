import{n as p}from"./notifications-3f5807c6.js";import{n as m}from"./namespaces-2a133f8a.js";import{p as u}from"./paginated-95bc016c.js";import{r as i,a as f}from"./route-for-api-a26fa800.js";const h={namespaces:[]};async function E(r,a=fetch){var t;if(r.runtimeEnvironment.isCloud){m.set([]);return}try{const e=await i("namespaces"),n=await u(async c=>f(e,{request:a,token:c,onError:()=>p.add("error","Unable to fetch namespaces")})),{showTemporalSystemNamespace:o}=r,s=((t=n==null?void 0:n.namespaces)!=null?t:[]).filter(c=>o||c.namespaceInfo.name!=="temporal-system");m.set(s)}catch{m.set([])}}async function N(r,a,t=fetch){var s;const[e]=h.namespaces;if((s=a==null?void 0:a.runtimeEnvironment)!=null&&s.isCloud)return e;const n=await i("namespace",{namespace:r}),o=await f(n,{request:t,onError:()=>p.add("error","Unable to fetch namespaces")});return o!=null?o:e}export{N as a,E as f};