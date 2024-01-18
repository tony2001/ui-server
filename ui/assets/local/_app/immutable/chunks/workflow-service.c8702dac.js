import{ac as h}from"./index.4e2fcbc7.js";import{t as j}from"./translate.d23a91ae.js";import{a as N,b as U}from"./decode-payload.4a04263a.js";import{c as C}from"./has.183130b0.js";import{w as D}from"./write-actions-are-allowed.171704dd.js";import{s as K}from"./simplify-attributes.f7ade3f8.js";import{l as _,a as L}from"./data-encoder-config.90542705.js";import{B as J}from"./encode-uri.e26747e0.js";import{b as G,p as H,a as d,r as w,c as M,i as X,d as Y}from"./route-for-api.1f793763.js";import{s as E}from"./parse-with-big-int.0036a80a.js";import{j as x}from"./singletons.b375ef42.js";import{p as Z}from"./stores.51463945.js";import{i as oo}from"./version-check.d006b302.js";import{c as $,t as to}from"./versions.e0e2d3a3.js";import{l as no,m as ro,n as F,o as eo}from"./format-time.4f091e0e.js";import{v as io}from"./toaster.cbcc95da.js";const ao=(o=[])=>o.map(t=>{const n=K(t,!0),r=t.activityId;return{...n,id:r}}),co=o=>C(o)||C(o.indexedFields)?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[r,e])=>({...n,[r]:N(e)}),{})},I=o=>{var T,g,p,b,S,W,A;const t=co(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,r=o.workflowExecutionInfo.execution.workflowId,e=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,s=o.workflowExecutionInfo.closeTime,a=o.workflowExecutionInfo.executionTime,u=o.workflowExecutionInfo.status,f=o.workflowExecutionInfo.status==="Running",l=o.workflowExecutionInfo.historyLength,y=o.workflowExecutionInfo.historySizeBytes,c=`/workflows/${r}/${e}`,m=((g=(T=o==null?void 0:o.executionConfig)==null?void 0:T.taskQueue)==null?void 0:g.name)||((p=o==null?void 0:o.workflowExecutionInfo)==null?void 0:p.taskQueue),k=(b=o==null?void 0:o.workflowExecutionInfo)==null?void 0:b.mostRecentWorkerVersionStamp,v=(S=o==null?void 0:o.workflowExecutionInfo)==null?void 0:S.parentNamespaceId,B=(W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.parentExecution,z=o.workflowExecutionInfo.stateTransitionCount,V=(A=o.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,q=ao(o.pendingActivities),Q=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:r,runId:e,startTime:i,endTime:s,executionTime:a,status:u,historyEvents:l,historySizeBytes:y,searchAttributes:t,url:c,taskQueue:m,mostRecentWorkerVersionStamp:k,pendingActivities:q,pendingChildren:Q,parentNamespaceId:v,parent:B,stateTransitionCount:z,isRunning:f,defaultWorkflowTaskTimeout:V,get canBeTerminated(){return f&&D()}}},P=o=>(o.executions||[]).map(t=>I({workflowExecutionInfo:t})),so=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),O=(o,t=J)=>t?so(o):o,fo=(o,t)=>{var n;return((n=o==null?void 0:o.visibilityStore)==null?void 0:n.includes("elasticsearch"))||oo(t,"1.19")},uo=o=>{var t;return(t=o==null?void 0:o.visibilityStore)==null?void 0:t.includes("elasticsearch")},R=x([Z],([o])=>{var t,n,r;return(r=(n=(t=o.data)==null?void 0:t.settings)==null?void 0:n.runtimeEnvironment)==null?void 0:r.isCloud}),lo=x([$,to,R],([o,t,n])=>fo(o,t)||n);x([$,R],([o,t])=>uo(o)||t);const wo={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},mo=["workflowId","workflowType","timeRange","executionStatus","closeTime"],ko=o=>!(o===null||o===void 0||o===""||typeof o=="string"&&o==="undefined"),yo=o=>{if(typeof o!="string")return!1;for(const t of mo)if(t===o)return!0;return!1},ho=(o,t,n)=>{const r=wo[o];return t==="All"?"":no(t)||ro(t)?n||h(lo)?`${r} > "${F(t)}"`:`${r} BETWEEN "${F(t)}" AND "${eo()}"`:`${r}="${t}"`},Eo=(o,t)=>Object.entries(o).map(([n,r])=>{if(yo(n)&&ko(r))return ho(n,r,t)}).filter(Boolean),xo=(o,t=!1)=>Eo(o,t).join(" and "),Io=async(o,t,n=fetch,r=!1)=>{const e=t.query||xo(t,r);let i;try{i=decodeURIComponent(e)}catch{i=e}const s=r?"workflows.archived":"workflows";let a="";const u=c=>{var m,k;M(c),(m=c==null?void 0:c.body)!=null&&m.message||c!=null&&c.status?a=((k=c==null?void 0:c.body)==null?void 0:k.message)??`Error fetching workflows: ${c.status}: ${c.statusText}`:a="Error fetching workflows: Server failed to respond"},f=w(s,{namespace:o}),{executions:l,nextPageToken:y}=await d(f,{params:{query:i},onError:u,handleError:u,request:n})??{executions:[],nextPageToken:""};return{workflows:P({executions:l}),nextPageToken:String(y),error:a}},Vo=async({namespace:o,workflowId:t,url:n},r=fetch)=>{var l;const e="workflows",i=n??G(o),s=H(e,{namespace:o}),a=i+s,{executions:u}=await d(a,{params:{query:`WorkflowId="${t}"`,pageSize:"1"},request:r})??{executions:[]},f=(l=P({executions:u}))==null?void 0:l[0];return{runId:f==null?void 0:f.runId}},qo=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const i=a=>{(X(a)||Y(a))&&(e=!1)},s=w(r,{namespace:o});return await d(s,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:e}},Qo=async(o,t,n=fetch)=>Io(o,t,n,!0);async function jo(o,t=fetch){const n=w("workflow",{namespace:o.namespace,workflowId:o.workflowId});return d(n,{request:t,params:{"execution.runId":o.runId}}).then(I)}async function No({workflow:o,namespace:t,reason:n,identity:r}){const e=w("workflow.terminate",{namespace:t,workflowId:o.id});return await d(e,{options:{method:"POST",body:E({reason:n,...r&&{identity:r}})},notifyOnError:!1,params:{"execution.runId":o.runId}})}async function Uo({namespace:o,workflowId:t,runId:n},r=fetch){const e=w("workflow.cancel",{namespace:o,workflowId:t});return d(e,{request:r,notifyOnError:!1,options:{method:"POST"},params:{"execution.runId":n}})}async function Do({namespace:o,workflowId:t,runId:n,signalName:r,signalInput:e,settings:i,accessToken:s}){var f;const a=w("workflow.signal",{namespace:o,workflowId:t,signalName:r});let u=null;if(e)if((f=i==null?void 0:i.codec)!=null&&f.endpoint){const l=await U({payloads:{payloads:[JSON.parse(e)]},namespace:o,settings:i,accessToken:s,encode:!0});if(h(_)==="error")throw new Error(h(L)||j("common.encode-failed"));u=(l==null?void 0:l.payloads)??null}else u=[{metadata:{encoding:O("json/plain")},data:O(e)}];return d(a,{notifyOnError:!1,options:{method:"POST",body:E({signalName:r,input:{payloads:u},params:{"execution.runId":n}})}})}async function Ko({namespace:o,workflowId:t,runId:n,eventId:r,reason:e,resetReapplyType:i}){const s=w("workflow.reset",{namespace:o,workflowId:t}),a={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,resetReapplyType:i,requestId:io(),reason:e};return d(s,{notifyOnError:!1,options:{method:"POST",body:E(a)},params:{"execution.runId":n}})}async function _o(o,t=fetch){const n=e=>{console.error(e)},r=w("workflow",o);return d(r,{request:t,onError:n,handleError:n}).then(I)}export{lo as a,Io as b,Uo as c,qo as d,Qo as e,jo as f,xo as g,_o as h,R as i,Vo as j,Ko as r,Do as s,No as t};