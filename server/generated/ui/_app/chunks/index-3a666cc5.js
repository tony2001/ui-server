const I=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),F=["workflowExecutionStartedEventAttributes","workflowExecutionCompletedEventAttributes","workflowExecutionFailedEventAttributes","workflowExecutionTimedOutEventAttributes","workflowTaskStartedEventAttributes","workflowTaskScheduledEventAttributes","workflowTaskCompletedEventAttributes","workflowTaskTimedOutEventAttributes","workflowTaskFailedEventAttributes","activityTaskScheduledEventAttributes","activityTaskCompletedEventAttributes","activityTaskStartedEventAttributes","activityTaskFailedEventAttributes","activityTaskTimedOutEventAttributes","timerStartedEventAttributes","timerFiredEventAttributes","activityTaskCancelRequestedEventAttributes","activityTaskCanceledEventAttributes","timerCanceledEventAttributes","markerRecordedEventAttributes","workflowExecutionSignaledEventAttributes","workflowExecutionTerminatedEventAttributes","workflowExecutionCancelRequestedEventAttributes","workflowExecutionCanceledEventAttributes","requestCancelExternalWorkflowExecutionInitiatedEventAttributes","requestCancelExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionCancelRequestedEventAttributes","workflowExecutionContinuedAsNewEventAttributes","startChildWorkflowExecutionInitiatedEventAttributes","startChildWorkflowExecutionFailedEventAttributes","childWorkflowExecutionStartedEventAttributes","childWorkflowExecutionCompletedEventAttributes","childWorkflowExecutionFailedEventAttributes","childWorkflowExecutionCanceledEventAttributes","childWorkflowExecutionTimedOutEventAttributes","childWorkflowExecutionTerminatedEventAttributes","signalExternalWorkflowExecutionInitiatedEventAttributes","signalExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionSignaledEventAttributes","upsertWorkflowSearchAttributesEventAttributes"],O=t=>{for(const e of F)if(e in t)return e},R=(t,e)=>t[e],_=t=>{const e=O(t),r=R(t,e);return{key:e,attributes:r}},i=t=>e=>Boolean(e[t]),tt=i("workflowExecutionCompletedEventAttributes"),q=i("workflowExecutionFailedEventAttributes"),G=i("workflowExecutionTimedOutEventAttributes"),N=i("workflowTaskTimedOutEventAttributes"),$=i("workflowTaskFailedEventAttributes"),E=i("activityTaskScheduledEventAttributes"),L=i("activityTaskStartedEventAttributes"),B=i("activityTaskCompletedEventAttributes"),T=i("activityTaskFailedEventAttributes"),x=i("activityTaskTimedOutEventAttributes"),f=i("timerStartedEventAttributes"),K=i("timerFiredEventAttributes"),M=i("activityTaskCancelRequestedEventAttributes"),C=i("activityTaskCanceledEventAttributes"),h=i("timerCanceledEventAttributes"),k=i("markerRecordedEventAttributes"),A=i("workflowExecutionSignaledEventAttributes"),j=i("workflowExecutionTerminatedEventAttributes"),P=i("workflowExecutionCanceledEventAttributes"),v=i("startChildWorkflowExecutionInitiatedEventAttributes"),z=i("childWorkflowExecutionStartedEventAttributes"),D=i("childWorkflowExecutionCompletedEventAttributes"),H=i("childWorkflowExecutionFailedEventAttributes"),J=i("childWorkflowExecutionCanceledEventAttributes"),Q=i("childWorkflowExecutionTimedOutEventAttributes"),U=i("childWorkflowExecutionTerminatedEventAttributes"),b=i("signalExternalWorkflowExecutionInitiatedEventAttributes"),V=i("signalExternalWorkflowExecutionFailedEventAttributes"),W=t=>x(t)||T(t)||q(t)||G(t)||N(t)||$(t)||H(t)||Q(t)||V(t),et=t=>w(t)?t.isFailureOrTimedOut:W(t),y=t=>C(t)||h(t)||P(t)||J(t),it=t=>w(t)?t.isCanceled:y(t),S=t=>j(t)||U(t),rt=t=>w(t)?t.isTerminated:S(t),g=t=>{if(E(t)||v(t)||f(t)||b(t)||A(t)||k(t))return t.id;if(L(t))return String(t.activityTaskStartedEventAttributes.scheduledEventId);if(C(t))return String(t.activityTaskCanceledEventAttributes.scheduledEventId);if(M(t))return String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId);if(T(t))return String(t.activityTaskFailedEventAttributes.scheduledEventId);if(x(t))return String(t.activityTaskTimedOutEventAttributes.scheduledEventId);if(B(t))return String(t.activityTaskCompletedEventAttributes.scheduledEventId);if(z(t))return String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId);if(D(t))return String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId);if(K(t))return String(t.timerFiredEventAttributes.startedEventId);if(h(t))return String(t.timerCanceledEventAttributes.startedEventId)},X=t=>{var e,r,o,n,c,l,a,d,s;if(!!t){if(E(t))return(r=(e=t.activityTaskScheduledEventAttributes)==null?void 0:e.activityType)==null?void 0:r.name;if(f(t))return`Timer ${(o=t.timerStartedEventAttributes)==null?void 0:o.timerId} (${(n=t.timerStartedEventAttributes)==null?void 0:n.startToFireTimeout})`;if(b(t))return`Signal: ${(c=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:c.signalName}`;if(A(t))return`Signal received: ${(l=t.workflowExecutionSignaledEventAttributes)==null?void 0:l.signalName}`;if(k(t))return`Marker: ${(a=t.markerRecordedEventAttributes)==null?void 0:a.markerName}`;if(v(t))return`Child Workflow: ${(s=(d=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:d.workflowType)==null?void 0:s.name}`}},m=({events:t})=>{let e=0,r;for(const o of t.values()){const n=Number(o.id);n>=e&&(e=n,r=o)}return r},u=t=>{const e=g(t),r=X(t),{timestamp:o,category:n,classification:c}=t,l=t,a=new Map,d=new Set;return a.set(t.id,t),d.add(t.id),{id:e,name:r,events:a,eventIds:d,initialEvent:l,timestamp:o,category:n,classification:c,get eventTime(){var s;return(s=m(this))==null?void 0:s.eventTime},get attributes(){var s;return(s=m(this))==null?void 0:s.attributes},get eventList(){return Array.from(this.events,([s,p])=>p)},get isFailureOrTimedOut(){return Boolean(this.eventList.find(W))},get isCanceled(){return Boolean(this.eventList.find(y))},get isTerminated(){return Boolean(this.eventList.find(S))}}},Y=t=>{if(E(t)||v(t)||f(t)||b(t)||A(t)||k(t))return u(t)},Z=(t,e)=>{!t||(t.events.set(e.id,e),t.eventIds.add(e.id),t.timestamp=e.timestamp)},nt=t=>{const e={};for(const r of t){const o=g(r),n=Y(r);n?e[n.id]=n:Z(e[o],r)}return Object.values(e)},w=t=>t==null?!1:I(t,"events");export{it as a,rt as b,w as c,m as d,et as e,_ as f,nt as g,tt as i};
