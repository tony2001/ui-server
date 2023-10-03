import{h as R}from"./has.f5323580.js";import{i as I,a as y,b as U,c as j,d as B,e as M,f as $,g as D,h as z,j as K,k as W,l as O,m as _,n as H,o as J,p as F,q as P,r as Q,s as V,t as X,u as Y,v as Z,w as tt,x as p,y as T,z as w,A,B as b,C as x,D as h,E as l}from"./is-event-type.4dbe973b.js";import{j as it}from"./format-time.8258873a.js";const v=t=>I(t)||y(t)||U(t)||j(t)||B(t)||M(t)||$(t)||D(t)||z(t)||K(t),dt=t=>S(t)?t.isFailureOrTimedOut:v(t),G=t=>W(t)||O(t)||_(t)||H(t),ct=t=>S(t)?t.isCanceled:G(t),L=t=>J(t)||F(t),lt=t=>S(t)?t.isTerminated:L(t),N=t=>P(t)?String(t.activityTaskStartedEventAttributes.scheduledEventId):W(t)?String(t.activityTaskCanceledEventAttributes.scheduledEventId):Q(t)?String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId):y(t)?String(t.activityTaskFailedEventAttributes.scheduledEventId):I(t)?String(t.activityTaskTimedOutEventAttributes.scheduledEventId):V(t)?String(t.activityTaskCompletedEventAttributes.scheduledEventId):X(t)?String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId):F(t)?String(t.childWorkflowExecutionTerminatedEventAttributes.initiatedEventId):Y(t)?String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId):Z(t)?String(t.timerFiredEventAttributes.startedEventId):O(t)?String(t.timerCanceledEventAttributes.startedEventId):tt(t)?String(t.workflowExecutionUpdateCompletedEventAttributes.acceptedEventId):t.id,k=t=>{var i,r,e,s,n,E,f,m,o,d,c,a;if(!t)return"";if(p(t))return(r=(i=t.activityTaskScheduledEventAttributes)==null?void 0:i.activityType)==null?void 0:r.name;if(T(t))return`${(e=t.timerStartedEventAttributes)==null?void 0:e.timerId} (${it((s=t.timerStartedEventAttributes)==null?void 0:s.startToFireTimeout)})`;if(w(t))return(n=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:n.signalName;if(A(t))return(E=t.workflowExecutionSignaledEventAttributes)==null?void 0:E.signalName;if(b(t))return x(t)?"Local Activity":(f=t.markerRecordedEventAttributes)==null?void 0:f.markerName;if(h(t))return(o=(m=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:m.workflowType)==null?void 0:o.name;if(l(t))return(a=(c=(d=t.workflowExecutionUpdateAcceptedEventAttributes)==null?void 0:d.acceptedRequest)==null?void 0:c.input)==null?void 0:a.name},g=t=>{if(!t||p(t))return"";if(T(t))return"Timer";if(w(t))return"Signal";if(A(t))return"Signal received";if(b(t))return x(t)?"Local Activity":"Marker";if(h(t))return"Child Workflow";if(l(t))return""},rt=t=>t?g(t)?`${g(t)}: ${k(t)}`:k(t):"",C=({events:t})=>{let i=0,r;for(const e of t.values()){const s=Number(e.id);s>=i&&(i=s,r=e)}return r},et=(t,i)=>i!=null&&i.length&&l(t)?i.find(r=>{var e;return r.id===((e=t.workflowExecutionUpdateAcceptedEventAttributes)==null?void 0:e.acceptedRequestSequencingEventId.toString())}):t,u=(t,i)=>{const r=N(t),e=k(t),s=g(t),n=rt(t),{timestamp:E,category:f,classification:m}=t,o=et(t,i),d=new Map,c=new Set;return o&&l(t)?(d.set(o.id,o),d.set(t.id,t),c.add(o.id),c.add(t.id)):(d.set(t.id,t),c.add(t.id)),{id:r,name:e,label:s,displayName:n,events:d,eventIds:c,initialEvent:o,timestamp:E,category:f,classification:m,get eventTime(){var a;return(a=this.lastEvent)==null?void 0:a.eventTime},get attributes(){var a;return(a=C(this))==null?void 0:a.attributes},get eventList(){return Array.from(this.events,([a,q])=>q)},get lastEvent(){return C(this)},get isFailureOrTimedOut(){return Boolean(this.eventList.find(v))},get isCanceled(){return Boolean(this.eventList.find(G))},get isTerminated(){return Boolean(this.eventList.find(L))}}},st=(t,i)=>{if(p(t)||h(t)||T(t)||w(t)||A(t))return u(t);if(b(t))return x(t),u(t);if(l(t))return u(t,i)},at=(t,i)=>{t&&(t.events.set(i.id,i),t.eventIds.add(i.id),t.timestamp=i.timestamp)},Et=(t,i="ascending")=>{const r={};for(const e of t){const s=N(e),n=st(e,t);n?r[n.id]=n:at(r[s],e)}return i==="descending"?Object.values(r).reverse():Object.values(r)},S=t=>t==null?!1:R(t,"events");export{ct as a,lt as b,dt as e,Et as g,S as i};
