import{h as O}from"./has-5f7acf44.js";const R=["workflowExecutionStartedEventAttributes","workflowExecutionCompletedEventAttributes","workflowExecutionFailedEventAttributes","workflowExecutionTimedOutEventAttributes","workflowTaskStartedEventAttributes","workflowTaskScheduledEventAttributes","workflowTaskCompletedEventAttributes","workflowTaskTimedOutEventAttributes","workflowTaskFailedEventAttributes","activityTaskScheduledEventAttributes","activityTaskCompletedEventAttributes","activityTaskStartedEventAttributes","activityTaskFailedEventAttributes","activityTaskTimedOutEventAttributes","timerStartedEventAttributes","timerFiredEventAttributes","activityTaskCancelRequestedEventAttributes","activityTaskCanceledEventAttributes","timerCanceledEventAttributes","markerRecordedEventAttributes","workflowExecutionSignaledEventAttributes","workflowExecutionTerminatedEventAttributes","workflowExecutionCancelRequestedEventAttributes","workflowExecutionCanceledEventAttributes","requestCancelExternalWorkflowExecutionInitiatedEventAttributes","requestCancelExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionCancelRequestedEventAttributes","workflowExecutionContinuedAsNewEventAttributes","startChildWorkflowExecutionInitiatedEventAttributes","startChildWorkflowExecutionFailedEventAttributes","childWorkflowExecutionStartedEventAttributes","childWorkflowExecutionCompletedEventAttributes","childWorkflowExecutionFailedEventAttributes","childWorkflowExecutionCanceledEventAttributes","childWorkflowExecutionTimedOutEventAttributes","childWorkflowExecutionTerminatedEventAttributes","signalExternalWorkflowExecutionInitiatedEventAttributes","signalExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionSignaledEventAttributes","upsertWorkflowSearchAttributesEventAttributes"],q=t=>{for(const i of R)if(i in t)return i},L=(t,i)=>t[i],et=t=>{const i=q(t),r=L(t,i);return{key:i,attributes:r}},e=t=>i=>Boolean(i[t]),it=e("workflowExecutionCompletedEventAttributes"),G=e("workflowExecutionFailedEventAttributes"),N=e("workflowExecutionTimedOutEventAttributes"),$=e("workflowTaskTimedOutEventAttributes"),B=e("workflowTaskFailedEventAttributes"),v=e("activityTaskScheduledEventAttributes"),K=e("activityTaskStartedEventAttributes"),M=e("activityTaskCompletedEventAttributes"),A=e("activityTaskFailedEventAttributes"),b=e("activityTaskTimedOutEventAttributes"),w=e("timerStartedEventAttributes"),j=e("timerFiredEventAttributes"),_=e("activityTaskCancelRequestedEventAttributes"),m=e("activityTaskCanceledEventAttributes"),T=e("timerCanceledEventAttributes"),E=e("markerRecordedEventAttributes"),x=e("workflowExecutionSignaledEventAttributes"),z=e("workflowExecutionTerminatedEventAttributes"),D=e("workflowExecutionCanceledEventAttributes"),C=e("startChildWorkflowExecutionInitiatedEventAttributes"),H=e("childWorkflowExecutionStartedEventAttributes"),J=e("childWorkflowExecutionCompletedEventAttributes"),P=e("childWorkflowExecutionFailedEventAttributes"),Q=e("childWorkflowExecutionCanceledEventAttributes"),U=e("childWorkflowExecutionTimedOutEventAttributes"),h=e("childWorkflowExecutionTerminatedEventAttributes"),W=e("signalExternalWorkflowExecutionInitiatedEventAttributes"),V=e("signalExternalWorkflowExecutionFailedEventAttributes"),y=t=>!(!E(t)||t.markerRecordedEventAttributes.markerName!=="LocalActivity"),S=t=>b(t)||A(t)||G(t)||N(t)||$(t)||B(t)||P(t)||U(t)||V(t),rt=t=>f(t)?t.isFailureOrTimedOut:S(t),g=t=>m(t)||T(t)||D(t)||Q(t),nt=t=>f(t)?t.isCanceled:g(t),I=t=>z(t)||h(t),ot=t=>f(t)?t.isTerminated:I(t),p=t=>K(t)?String(t.activityTaskStartedEventAttributes.scheduledEventId):m(t)?String(t.activityTaskCanceledEventAttributes.scheduledEventId):_(t)?String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId):A(t)?String(t.activityTaskFailedEventAttributes.scheduledEventId):b(t)?String(t.activityTaskTimedOutEventAttributes.scheduledEventId):M(t)?String(t.activityTaskCompletedEventAttributes.scheduledEventId):H(t)?String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId):h(t)?String(t.childWorkflowExecutionTerminatedEventAttributes.initiatedEventId):J(t)?String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId):j(t)?String(t.timerFiredEventAttributes.startedEventId):T(t)?String(t.timerCanceledEventAttributes.startedEventId):t.id,X=t=>{var i,r,o,n,d,l,a,c,s;if(t){if(v(t))return(r=(i=t.activityTaskScheduledEventAttributes)==null?void 0:i.activityType)==null?void 0:r.name;if(w(t))return`Timer ${(o=t.timerStartedEventAttributes)==null?void 0:o.timerId} (${(n=t.timerStartedEventAttributes)==null?void 0:n.startToFireTimeout})`;if(W(t))return`Signal: ${(d=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:d.signalName}`;if(x(t))return`Signal received: ${(l=t.workflowExecutionSignaledEventAttributes)==null?void 0:l.signalName}`;if(E(t))return y(t)?"Local Activity":`Marker: ${(a=t.markerRecordedEventAttributes)==null?void 0:a.markerName}`;if(C(t))return`Child Workflow: ${(s=(c=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:c.workflowType)==null?void 0:s.name}`}},k=({events:t})=>{let i=0,r;for(const o of t.values()){const n=Number(o.id);n>=i&&(i=n,r=o)}return r},u=t=>{const i=p(t),r=X(t),{timestamp:o,category:n,classification:d}=t,l=t,a=new Map,c=new Set;return a.set(t.id,t),c.add(t.id),{id:i,name:r,events:a,eventIds:c,initialEvent:l,timestamp:o,category:n,classification:d,get eventTime(){var s;return(s=this.lastEvent)==null?void 0:s.eventTime},get attributes(){var s;return(s=k(this))==null?void 0:s.attributes},get eventList(){return Array.from(this.events,([s,F])=>F)},get lastEvent(){return k(this)},get isFailureOrTimedOut(){return Boolean(this.eventList.find(S))},get isCanceled(){return Boolean(this.eventList.find(g))},get isTerminated(){return Boolean(this.eventList.find(I))}}},Y=t=>{if(v(t)||C(t)||w(t)||W(t)||x(t))return u(t);if(E(t))return y(t),u(t)},Z=(t,i)=>{t&&(t.events.set(i.id,i),t.eventIds.add(i.id),t.timestamp=i.timestamp)},st=t=>{const i={};for(const r of t){const o=p(r),n=Y(r);n?i[n.id]=n:Z(i[o],r)}return Object.values(i)},f=t=>t==null?!1:O(t,"events");export{f as a,y as b,nt as c,ot as d,rt as e,et as f,st as g,it as i};
