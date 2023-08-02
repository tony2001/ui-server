const n=["workflowExecutionStartedEventAttributes","workflowExecutionCompletedEventAttributes","workflowExecutionFailedEventAttributes","workflowExecutionTimedOutEventAttributes","workflowTaskStartedEventAttributes","workflowTaskScheduledEventAttributes","workflowTaskCompletedEventAttributes","workflowTaskTimedOutEventAttributes","workflowTaskFailedEventAttributes","activityTaskScheduledEventAttributes","activityTaskCompletedEventAttributes","activityTaskStartedEventAttributes","activityTaskFailedEventAttributes","activityTaskTimedOutEventAttributes","timerStartedEventAttributes","timerFiredEventAttributes","activityTaskCancelRequestedEventAttributes","activityTaskCanceledEventAttributes","timerCanceledEventAttributes","markerRecordedEventAttributes","workflowExecutionSignaledEventAttributes","workflowExecutionTerminatedEventAttributes","workflowExecutionUpdateAcceptedEventAttributes","workflowExecutionUpdateCompletedEventAttributes","workflowExecutionCancelRequestedEventAttributes","workflowExecutionCanceledEventAttributes","requestCancelExternalWorkflowExecutionInitiatedEventAttributes","requestCancelExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionCancelRequestedEventAttributes","workflowExecutionContinuedAsNewEventAttributes","startChildWorkflowExecutionInitiatedEventAttributes","startChildWorkflowExecutionFailedEventAttributes","childWorkflowExecutionStartedEventAttributes","childWorkflowExecutionCompletedEventAttributes","childWorkflowExecutionFailedEventAttributes","childWorkflowExecutionCanceledEventAttributes","childWorkflowExecutionTimedOutEventAttributes","childWorkflowExecutionTerminatedEventAttributes","signalExternalWorkflowExecutionInitiatedEventAttributes","signalExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionSignaledEventAttributes","upsertWorkflowSearchAttributesEventAttributes"],s=["WorkflowTaskCompleted","WorkflowTaskFailed","WorkflowTaskTimedOut"],r=e=>{for(const i of n)if(i in e)return i},a=(e,i)=>e[i],c=e=>{const i=r(e),o=a(e,i);return{key:i,attributes:o}},t=e=>i=>Boolean(i[e]),d=t("workflowExecutionStartedEventAttributes"),v=t("workflowExecutionCompletedEventAttributes"),k=t("workflowExecutionFailedEventAttributes"),w=t("workflowExecutionTimedOutEventAttributes"),A=t("workflowTaskTimedOutEventAttributes"),l=t("workflowTaskFailedEventAttributes"),f=e=>{var i,o;return l(e)&&((o=(i=e.workflowTaskFailedEventAttributes)==null?void 0:i.failure)==null?void 0:o.message)!=="UnhandledCommand"},b=t("activityTaskScheduledEventAttributes"),x=t("activityTaskStartedEventAttributes"),T=t("activityTaskCompletedEventAttributes"),m=t("activityTaskFailedEventAttributes"),C=t("activityTaskTimedOutEventAttributes"),W=t("timerStartedEventAttributes"),y=t("timerFiredEventAttributes"),h=t("activityTaskCancelRequestedEventAttributes"),p=t("activityTaskCanceledEventAttributes"),F=t("timerCanceledEventAttributes"),u=t("markerRecordedEventAttributes"),S=t("workflowExecutionSignaledEventAttributes"),O=t("workflowExecutionTerminatedEventAttributes"),g=t("workflowExecutionCanceledEventAttributes"),R=t("workflowExecutionContinuedAsNewEventAttributes"),q=t("startChildWorkflowExecutionInitiatedEventAttributes"),I=t("childWorkflowExecutionStartedEventAttributes"),U=t("childWorkflowExecutionCompletedEventAttributes"),N=t("childWorkflowExecutionFailedEventAttributes"),B=t("childWorkflowExecutionCanceledEventAttributes"),K=t("childWorkflowExecutionTimedOutEventAttributes"),L=t("childWorkflowExecutionTerminatedEventAttributes"),M=t("signalExternalWorkflowExecutionInitiatedEventAttributes"),j=t("signalExternalWorkflowExecutionFailedEventAttributes"),z=e=>s.includes(e.eventType),D=e=>!(!u(e)||e.markerRecordedEventAttributes.markerName!=="LocalActivity"),E=t("workflowExecutionUpdateCompletedEventAttributes"),G=e=>{var i;return E(e)&&Boolean((i=e.workflowExecutionUpdateCompletedEventAttributes.outcome)==null?void 0:i.failure)};export{S as A,u as B,D as C,q as D,z as E,R as F,v as G,d as H,m as a,k as b,w as c,A as d,f as e,c as f,N as g,K as h,C as i,j,G as k,p as l,F as m,g as n,B as o,O as p,L as q,x as r,h as s,T as t,I as u,U as v,y as w,b as x,W as y,M as z};