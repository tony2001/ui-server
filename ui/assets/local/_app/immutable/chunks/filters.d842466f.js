import{p as u}from"./persist-store.bb6871e4.js";import{d as t,w as s}from"./index.255b7490.js";import{p as i}from"./stores.9fcd75f4.js";import{K as o}from"./index.d29c66be.js";const l=t([i],([r])=>r.url.searchParams.get("query")),n=t([i],([r])=>r.url.searchParams.get("category")),a=t([l,n],([r,e])=>({query:r,category:e})),c=r=>a.subscribe(({query:e})=>{!e&&o(m).length&&r([])}),p=r=>a.subscribe(({query:e})=>{!e&&o(g).length&&r([])}),q=u("workflowDateTimeFilter",void 0,!0),m=s([],c),g=s([],p),f=r=>a.subscribe(({category:e})=>{!e&&o(y)&&r(null)}),y=s(null,f);export{m as a,y as e,q as p,g as w};