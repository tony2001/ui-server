import{r as ae}from"./index.b1f5b21f.js";import{c as ie}from"./cluster.728f7d8f.js";import{r as oe,a as se}from"./route-for-api.4f0243bf.js";import{f as le}from"./namespaces-service.b8ff4c02.js";import{f as ce}from"./settings-service.00c0d34f.js";import{s as ue,g as ge}from"./auth-user.2a42bf1d.js";import{B as X,e as fe}from"./route-for.29ec43aa.js";import{a as he}from"./atob.d47648c9.js";import{p as de,c as Q}from"./parse-with-big-int.bccd89af.js";/* empty css            */const pe=async(h,f=fetch)=>{if(h.runtimeEnvironment.isCloud)return;const g=oe("cluster");return await se(g,{request:f}).then(c=>(ie.set(c),c))},I="user",me=(h=X)=>{if(!h)return{};const f=document.cookie.split(";");let g=0,c=f.find(v=>v.includes(I+g)),m="";for(;c;){const[v,u]=c.split("=");m+=u,g++,c=f.find(o=>o.includes(I+g))}if(m)try{const v=he(m),u=de(v);return{accessToken:u==null?void 0:u.AccessToken,idToken:u==null?void 0:u.IDToken,name:u==null?void 0:u.Name,picture:u==null?void 0:u.Picture,email:u==null?void 0:u.Email}}catch(v){console.error(v)}return{}},ve=(h=X)=>{if(!h)return;const f=document.cookie.split(";");let g=0,c=f.find(m=>m.includes(I+g));for(;c;){const[m]=c.split("=");document.cookie=`${m}=; max-age=-1; path=/`,g++,c=f.find(v=>v.includes(I+g))}},ye=(h,f)=>!h.auth.enabled||Boolean(f==null?void 0:f.accessToken);var V={},be={get exports(){return V},set exports(h){V=h}};(function(h){var f=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},g=function(c){var m=/\blang(?:uage)?-([\w-]+)\b/i,v=0,u={},o={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof w?new w(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++v}),t.__id},clone:function t(e,a){var n,r;switch(a=a||{},o.util.type(e)){case"Object":if(r=o.util.objId(e),a[r])return a[r];for(var s in n={},a[r]=n,e)e.hasOwnProperty(s)&&(n[s]=t(e[s],a));return n;case"Array":return r=o.util.objId(e),a[r]?a[r]:(n=[],a[r]=n,e.forEach(function(i,l){n[l]=t(i,a)}),n);default:return e}},getLanguage:function(t){for(;t&&!m.test(t.className);)t=t.parentElement;return t?(t.className.match(m)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var n="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;t=t.parentElement}return!!a}},languages:{plain:u,plaintext:u,text:u,txt:u,extend:function(t,e){var a=o.util.clone(o.languages[t]);for(var n in e)a[n]=e[n];return a},insertBefore:function(t,e,a,n){var r=(n=n||o.languages)[t],s={};for(var i in r)if(r.hasOwnProperty(i)){if(i==e)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);a.hasOwnProperty(i)||(s[i]=r[i])}var d=n[t];return n[t]=s,o.languages.DFS(o.languages,function(x,N){N===d&&x!=t&&(this[x]=s)}),s},DFS:function t(e,a,n,r){r=r||{};var s=o.util.objId;for(var i in e)if(e.hasOwnProperty(i)){a.call(e,i,e[i],n||i);var l=e[i],d=o.util.type(l);d!=="Object"||r[s(l)]?d!=="Array"||r[s(l)]||(r[s(l)]=!0,t(l,a,i,r)):(r[s(l)]=!0,t(l,a,null,r))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var n={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),o.hooks.run("before-all-elements-highlight",n);for(var r,s=0;r=n.elements[s++];)o.highlightElement(r,e===!0,n.callback)},highlightElement:function(t,e,a){var n=o.util.getLanguage(t),r=o.languages[n];t.className=t.className.replace(m,"").replace(/\s+/g," ")+" language-"+n;var s=t.parentElement;s&&s.nodeName.toLowerCase()==="pre"&&(s.className=s.className.replace(m,"").replace(/\s+/g," ")+" language-"+n);var i={element:t,language:n,grammar:r,code:t.textContent};function l(x){i.highlightedCode=x,o.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,o.hooks.run("after-highlight",i),o.hooks.run("complete",i),a&&a.call(i.element)}if(o.hooks.run("before-sanity-check",i),(s=i.element.parentElement)&&s.nodeName.toLowerCase()==="pre"&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!i.code)return o.hooks.run("complete",i),void(a&&a.call(i.element));if(o.hooks.run("before-highlight",i),i.grammar)if(e&&c.Worker){const x=o.filename??`${window.location.origin}/src/lib/vendor/prism/prism.cjs`;var d=new Worker(x);d.onerror=function(){l(o.highlight(i.code,i.grammar,i.language))},d.onmessage=function(N){l(N.data)},d.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}))}else l(o.highlight(i.code,i.grammar,i.language));else l(o.util.encode(i.code))},highlight:function(t,e,a){var n={code:t,grammar:e,language:a};return o.hooks.run("before-tokenize",n),n.tokens=o.tokenize(n.code,n.grammar),o.hooks.run("after-tokenize",n),w.stringify(o.util.encode(n.tokens),n.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var n in a)e[n]=a[n];delete e.rest}var r=new Y;return P(r,r.head,t),function s(i,l,d,x,N,y){for(var E in d)if(d.hasOwnProperty(E)&&d[E]){var O=d[E];O=Array.isArray(O)?O:[O];for(var _=0;_<O.length;++_){if(y&&y.cause==E+","+_)return;var b=O[_],H=b.inside,G=!!b.lookbehind,R=!!b.greedy,ee=b.alias;if(R&&!b.pattern.global){var te=b.pattern.toString().match(/[imsuy]*$/)[0];b.pattern=RegExp(b.pattern.source,te+"g")}for(var J=b.pattern||b,p=x.next,k=N;p!==l.tail&&!(y&&k>=y.reach);k+=p.value.length,p=p.next){var C=p.value;if(l.length>i.length)return;if(!(C instanceof w)){var A,T=1;if(R){if(!(A=U(J,k,i,G)))break;var W=A.index,ne=A.index+A[0].length,S=k;for(S+=p.value.length;S<=W;)p=p.next,S+=p.value.length;if(S-=p.value.length,k=S,p.value instanceof w)continue;for(var L=p;L!==l.tail&&(S<ne||typeof L.value=="string");L=L.next)T++,S+=L.value.length;T--,C=i.slice(k,S),A.index-=k}else if(!(A=U(J,0,C,G)))continue;var W=A.index,M=A[0],F=C.slice(0,W),K=C.slice(W+M.length),q=k+C.length;y&&q>y.reach&&(y.reach=q);var z=p.prev;F&&(z=P(l,z,F),k+=F.length),Z(l,z,T);var re=new w(E,H?o.tokenize(M,H):M,ee,M);if(p=P(l,z,re),K&&P(l,p,K),1<T){var $={cause:E+","+_,reach:q};s(i,l,d,p.prev,k,$),y&&$.reach>y.reach&&(y.reach=$.reach)}}}}}}(t,r,e,r.head,0),function(s){for(var i=[],l=s.head.next;l!==s.tail;)i.push(l.value),l=l.next;return i}(r)},hooks:{all:{},add:function(t,e){var a=o.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=o.hooks.all[t];if(a&&a.length)for(var n,r=0;n=a[r++];)n(e)}},Token:w};function w(t,e,a,n){this.type=t,this.content=e,this.alias=a,this.length=0|(n||"").length}function U(t,e,a,n){t.lastIndex=e;var r=t.exec(a);if(r&&n&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function Y(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function P(t,e,a){var n=e.next,r={value:a,prev:e,next:n};return e.next=r,n.prev=r,t.length++,r}function Z(t,e,a){for(var n=e.next,r=0;r<a&&n!==t.tail;r++)n=n.next;(e.next=n).prev=e,t.length-=r}if(c.Prism=o,w.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(d){n+=t(d,a)}),n}var r={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(r.classes,s):r.classes.push(s)),o.hooks.run("wrap",r);var i="";for(var l in r.attributes)i+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+i+">"+r.content+"</"+r.tag+">"},!c.document)return c.addEventListener&&(o.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.code,r=e.immediateClose;c.postMessage(o.highlight(n,o.languages[a],a)),r&&c.close()},!1)),o;var j=o.util.currentScript();function B(){o.manual||o.highlightAll()}if(j&&(o.filename=j.src,j.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var D=document.readyState;D==="loading"||D==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",B):window.requestAnimationFrame?window.requestAnimationFrame(B):window.setTimeout(B,16)}return o}(f);h.exports&&(h.exports=g),typeof Q<"u"&&(Q.Prism=g),g.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},g.languages.webmanifest=g.languages.json})(be);const ke=async function({fetch:h}){const f=await ce(h),g=me();g!=null&&g.accessToken&&(ue(g),ve());const c=ge();if(!ye(f,c))throw ae(302,fe());le(f,h);const m=await pe(f,h);return{user:c,settings:f,cluster:m}},Le=Object.freeze(Object.defineProperty({__proto__:null,load:ke},Symbol.toStringTag,{value:"Module"}));export{Le as _,ke as l};