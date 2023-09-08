import{S as T,b as v,a as b,e as g,f as E,z as q,g as f,n as P,h as C,j as h,k as m,N as y,U as k,m as A,C as I,p as N,q as O,D,u as p,E as F,F as j}from"./index.efded970.js";import{C as x}from"./code-block.7c32f851.js";import{s as r}from"./parse-with-big-int.bccd89af.js";import{r as u,a as i}from"./route-for-api.a5d35403.js";import{v as d}from"./toaster.fd2b66a2.js";function S(a){let t,n,c,o;return n=new x({props:{copyable:!0,inline:a[2],testId:"schedule-calendar",language:"json",content:JSON.stringify(a[0]||a[1],null,2)}}),{c(){t=A("div"),I(n.$$.fragment),this.h()},l(e){t=N(e,"DIV",{class:!0});var s=O(t);D(n.$$.fragment,s),s.forEach(m),this.h()},h(){p(t,"class",c="flex flex-col "+a[3].class)},m(e,s){E(e,t,s),F(n,t,null),o=!0},p(e,s){const l={};s&4&&(l.inline=e[2]),s&3&&(l.content=JSON.stringify(e[0]||e[1],null,2)),n.$set(l),(!o||s&8&&c!==(c="flex flex-col "+e[3].class))&&p(t,"class",c)},i(e){o||(h(n.$$.fragment,e),o=!0)},o(e){f(n.$$.fragment,e),o=!1},d(e){e&&m(t),j(n)}}}function H(a){let t=[a[0],a[1]],n,c,o=S(a);return{c(){o.c(),n=g()},l(e){o.l(e),n=g()},m(e,s){o.m(e,s),E(e,n,s),c=!0},p(e,[s]){s&3&&b(t,t=[e[0],e[1]])?(q(),f(o,1,1,P),C(),o=S(e),o.c(),h(o,1),o.m(n.parentNode,n)):o.p(e,s)},i(e){c||(h(o),c=!0)},o(e){f(o),c=!1},d(e){e&&m(n),o.d(e)}}}function J(a,t,n){let{calendar:c=void 0}=t,{interval:o=void 0}=t,{inline:e=!1}=t;return a.$$set=s=>{n(3,t=y(y({},t),k(s))),"calendar"in s&&n(0,c=s.calendar),"interval"in s&&n(1,o=s.interval),"inline"in s&&n(2,e=s.inline)},t=k(t),[c,o,e,t]}class W extends T{constructor(t){super(),v(this,t,J,H,b,{calendar:0,interval:1,inline:2})}}const w=async(a,t=fetch)=>{let n="";const c=l=>{var _;return n=((_=l==null?void 0:l.body)==null?void 0:_.message)??`Error fetching schedules: ${l.status}: ${l.statusText}`},o=u("schedules",{namespace:a}),{schedules:e,nextPageToken:s}=await i(o,{params:{},onError:c,request:t})??{schedules:[],nextPageToken:""};return{schedules:e,nextPageToken:String(s),error:n}};async function G(a,t=fetch){const n=u("schedule",a);return i(n,{request:t})}async function K(a,t=fetch){const n=u("schedule.delete",a);return i(n,{request:t,options:{method:"DELETE"}})}async function M({namespace:a,body:t}){let n="";const c=s=>{var l;return n=((l=s==null?void 0:s.body)==null?void 0:l.message)??`Error creating schedule: ${s.status}: ${s.statusText}`},o=u("schedules",{namespace:a}),{conflictToken:e}=await i(o,{options:{method:"POST",body:r({request_id:d(),...t})},onError:c});return{conflictToken:e,error:n}}async function Q({namespace:a,scheduleId:t,body:n}){let c="";const o=s=>{var l;return c=((l=s==null?void 0:s.body)==null?void 0:l.message)??`Error editing schedule: ${s.status}: ${s.statusText}`},e=u("schedule",{namespace:a,scheduleId:t});return await i(e,{options:{method:"POST",body:r({request_id:d(),...n})},onError:o}),{error:c}}async function R({namespace:a,scheduleId:t,reason:n}){const c={patch:{pause:n}},o=u("schedule",{namespace:a,scheduleId:t});return await i(o,{options:{method:"PATCH",body:r({...c,request_id:d()})},onError:e=>console.error(e)})}async function X({namespace:a,scheduleId:t,reason:n}){const c={patch:{unpause:n}},o=u("schedule",{namespace:a,scheduleId:t});return await i(o,{options:{method:"PATCH",body:r({...c,request_id:d()})}})}export{W as S,G as a,M as c,K as d,Q as e,w as f,R as p,X as u};
