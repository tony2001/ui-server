import{W as p}from"./index.a36c9cb0.js";import{t as h}from"./time-format.dc246788.js";import{i as E}from"./index.f8c667a1.js";import{c as a}from"./format-camel-case.960a78f9.js";import{h as f,i as m}from"./has.48bed8a5.js";import{B as x}from"./is-event-type.763b5d4b.js";import{f as T}from"./format-date.7c274b02.js";const I={key:"",value:""},S=new Set(["activityId","attempt","binaryChecksum","identity","parentInitiatedEventId","requestId","scheduledEventId","startedEventId","lastHeartbeatTime","scheduledTime","expirationTime"]),H=t=>S.has(t),l=(t,e)=>!(e===null||e===void 0||e===""||e==="0s"||t==="type"),j=t=>!(t===null||t===void 0||t===""||Array.isArray(t)&&!t.length),J=t=>typeof t=="string"?t:(t==null?void 0:t.payloads)??(t==null?void 0:t.indexedFields)??(t==null?void 0:t.points)??t,D=t=>{if(m(t)){if(f(t,"stackTrace")&&t.stackTrace)return t.stackTrace;for(const e in t)if(m(t[e]))return D(t[e])}},R=["baseRunId","continuedExecutionRunId","firstExecutionRunId","newExecutionRunId","newRunId","originalExecutionRunId"],X=t=>{for(const e of R)if(t===e)return!0;return!1},b=["taskQueueName"],Y=t=>{for(const e of b)if(t===e)return!0;return!1},A=["workflowExecutionWorkflowId","workflowExecutionRunId"],Z=(t,e)=>{const r=Boolean((e==null?void 0:e.workflowExecutionWorkflowId)&&(e==null?void 0:e.workflowExecutionRunId));for(const o of A)if(t===o&&r)return!0;return!1},y=(t,e)=>{if(typeof e=="object"){const[r]=Object.keys(e);return{key:t+a(r),value:e[r]}}else return{key:t,value:e.toString()}},L=["failure","input","activityType","parentInitiatedEventId","workflowExecution","workflowType","taskQueue"],O=({attributes:t})=>{for(const[e,r]of Object.entries(t))if(l(e,r))return y(e,r)},Q=t=>{if(f(t,"ActivityType"))return t.ActivityType;if(f(t,"activity_type"))return t.activity_type},d=t=>{var r,o,n,s;const e=O(t);if(x(t)){const i=(s=(n=(o=(r=t.markerRecordedEventAttributes)==null?void 0:r.details)==null?void 0:o.data)==null?void 0:n.payloads)==null?void 0:s[0],c=Q(i);if(c)return y("ActivityType",c)}for(const[i,c]of Object.entries(t.attributes))for(const w of L)if(i===w&&l(i,c))return y(i,c);return e},W=({lastEvent:t})=>d(t),v=t=>t?E(t)?W(t):d(t):I,G=new Set(["header"]),P=new Set(["taskQueue","retryPolicy","parentWorkflowExecution","workflowExecution"]),F=new Set(["maximumAttempts"]),u="Unlimited",K="No Expiration",tt=(t,e)=>t===0?K:e,et=(t,e)=>t?t-e:u,rt=t=>t||u,N=(t,e)=>t==="maximumAttempts"&&!e?u:e,C=(t,e)=>{if(P.has(e)&&typeof t[e]=="object"){for(const[r,o]of Object.entries(t[e]))j(o)&&(F.has(r)?t[`${e}${a(r)}`]=N(r,o):t[`${e}${a(r)}`]=o);delete t[e]}},ot=(t,{compact:e}={compact:!1})=>{const r={};e&&(r.eventTime=T(t.eventTime,p(h)));for(const[o,n]of Object.entries(t.attributes)){const s=l(o,n);!G.has(o)&&s&&(r[o]=n),C(r,o)}return r},k=["summary","parent","activity","taskQueue","schedule","retryPolicy","workflow","searchAttributes"],nt={activity:{label:"Activity"},parent:{label:"Parent"},retryPolicy:{label:"Retry Policy"},schedule:{label:"Schedule"},searchAttributes:{label:"Search Attributes"},summary:{label:"Summary"},taskQueue:{label:"Task Queue"},workflow:{label:"Workflow"}},V=(t,e)=>{var r,o;t.category==="activity"&&((r=e==null?void 0:e.activity)!=null&&r.length)&&(e.summary=[...e.activity,...e.summary],e.activity=[]),t.category==="activity"&&((o=e==null?void 0:e.workflow)!=null&&o.length)&&(e.summary=[...e.summary,...e.workflow],e.workflow=[])},_=t=>{const e=new Set(["summary","searchAttributes"]);for(const[r,o]of Object.entries(t))o.length===1&&!e.has(r)&&(t.summary=[...t.summary,...o],t[r]=[])},st=(t,e)=>{const r={};k.forEach(o=>{o==="summary"?r[o]=Object.keys(e):r[o]=[]});for(const o in e){const n=k.find(s=>o.includes(s));n&&(r[n]=[o,...r[n]],r.summary=r.summary.filter(s=>s!==o))}return V(t,r),_(r),r};export{Z as a,Y as b,H as c,D as d,nt as e,ot as f,J as g,st as h,v as i,tt as j,et as k,rt as l,X as s};
