import{a7 as $}from"./index-89809c17.js";import{s as C}from"./settings-82191e74.js";import{s as F}from"./simplify-attributes-055c76f2.js";import{r as d,a as k,b as D,i as q,c as z}from"./route-for-api-14542cb7.js";import{h as K,j as P,k as S,l as Q}from"./format-time-d031c2bc.js";const R=(t=C)=>!$(t).disableWriteActions,N=(t=[])=>t.map(o=>{const n=F(o,!0),e=o.activityId;return{...n,id:e}}),x=t=>{var E,y,T,I,A,W;const o=t.workflowExecutionInfo.type.name,n=t.workflowExecutionInfo.execution.workflowId,e=t.workflowExecutionInfo.execution.runId,r=String(t.workflowExecutionInfo.startTime),s=String(t.workflowExecutionInfo.closeTime),c=t.workflowExecutionInfo.status,a=t.workflowExecutionInfo.status==="Running",m=t.workflowExecutionInfo.historyLength,h=`/workflows/${n}/${e}`,g=(y=(E=t==null?void 0:t.executionConfig)==null?void 0:E.taskQueue)==null?void 0:y.name,f=(T=t==null?void 0:t.workflowExecutionInfo)==null?void 0:T.parentNamespaceId,i=(I=t==null?void 0:t.workflowExecutionInfo)==null?void 0:I.parentExecution,u=t.workflowExecutionInfo.stateTransitionCount,l=(A=t.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,w=N(t.pendingActivities),b=(W=t==null?void 0:t.pendingChildren)!=null?W:[];return{name:o,id:n,runId:e,startTime:r,endTime:s,status:c,historyEvents:m,url:h,taskQueue:g,pendingActivities:w,pendingChildren:b,parentNamespaceId:f,parent:i,stateTransitionCount:u,isRunning:a,defaultWorkflowTaskTimeout:l,get canBeTerminated(){return a&&R()}}},j=t=>(t.executions||[]).map(o=>x({workflowExecutionInfo:o})),p={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},B=["workflowId","workflowType","timeRange","executionStatus","closeTime"],U=t=>!(t===null||t===void 0||t===""||typeof t=="string"&&t==="undefined"),L=t=>{if(typeof t!="string")return!1;for(const o of B)if(o===t)return!0;return!1},O=(t,o,n)=>{const e=p[t];return o==="All"?"":K(o)||P(o)?n?`${e} > "${S(o)}"`:`${e} BETWEEN "${S(o)}" AND "${Q()}"`:`${e}="${o}"`},_=(t,o)=>Object.entries(t).map(([n,e])=>{if(L(n)&&U(e))return O(n,e,o)}).filter(Boolean),V=(t,o=!1)=>_(t,o).join(" and "),G=async(t,o,n=fetch,e=!1)=>{var f;const r=decodeURIComponent(o.query||V(o,e)),s=e?"workflows.archived":"workflows";let c="";const a=i=>{var u,l,w;D(i),((u=i==null?void 0:i.body)==null?void 0:u.message)||(i==null?void 0:i.status)?c=(w=(l=i==null?void 0:i.body)==null?void 0:l.message)!=null?w:`Error fetching workflows: ${i.status}: ${i.statusText}`:c="Error fetching workflows: Server failed to respond"},m=await d(s,{namespace:t}),{executions:h,nextPageToken:g}=(f=await k(m,{params:{query:r},onError:a,handleError:a,request:n}))!=null?f:{executions:[],nextPageToken:""};return{workflows:j({executions:h}),nextPageToken:String(g),error:c}},Z=async(t,o=fetch,n=!1)=>{const e=n?"workflows.archived":"workflows";let r=!0;const s=a=>{(q(a)||z(a))&&(r=!1)},c=await d(e,{namespace:t});return await k(c,{params:{pageSize:"1"},onError:s,handleError:s,request:o}),{authorized:r}},v=async(t,o,n=fetch)=>G(t,o,n,!0);async function tt(t,o=fetch){const n=await d("workflow",t);return k(n,{request:o}).then(x)}async function ot(t,o=fetch){const n=r=>{console.error(r)},e=await d("workflow",t);return k(e,{request:o,onError:n,handleError:n}).then(x)}export{G as a,Z as b,v as c,ot as d,tt as f,V as t};