var r=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var u=(o,n)=>{var t={};for(var f in o)v.call(o,f)&&n.indexOf(f)<0&&(t[f]=o[f]);if(o!=null&&r)for(var f of r(o))n.indexOf(f)<0&&k.call(o,f)&&(t[f]=o[f]);return t};const $=({namespace:o})=>`/namespaces/${o}`,w=o=>`${$(o)}/workflows`,i=f=>{var c=f,{workflowId:o,runId:n}=c,t=u(c,["workflowId","runId"]);return`${w(t)}/${o}/${n}`},e=(o,n)=>n?`${i(o)}/history/${n}`:`${i(o)}/history`,l=(o,n,t,f)=>`${e(o,n)}/${t}-${f}`,s=(o,n,t,f,c)=>`${e(o,n)}/${t}-${c}/events/${f}`,y=o=>`${i(o)}/workers`;function d(o,n){let t;return o==="workflows"&&(t=w(n)),o==="workflow"&&(t=i(n)),o==="workflow.events"&&(t=e(n)),o==="workflow.events.full"&&(t=e(n,"full")),o==="workflow.events.compact"&&(t=e(n,"compact")),o==="workflow.events.json"&&(t=e(n,"json")),o==="workflow.events.full.event"&&(t=l(n,"full","event",n.eventId)),o==="workflow.events.full.pending"&&(t=l(n,"full","pending",n.eventId)),o==="workflow.events.compact.activity"&&(t=l(n,"compact","activity",n.eventId)),o==="workflow.events.compact.activity.event"&&(t=s(n,"compact","activity",n.eventId,n.activityId)),o==="workflow.query"&&(t=i(n)+"/query"),o==="workflow.stack-trace"&&(t=i(n)+"/stack-trace"),o==="workers"&&(t=y(n)),n.query?`${t}?${n.query}`:t}export{d as r};
