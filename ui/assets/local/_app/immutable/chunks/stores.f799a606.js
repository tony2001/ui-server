import"./index.e1c99c2b.js";import{s as t}from"./singletons.e6b5f794.js";const r=()=>{const s=t;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},u={subscribe(s){return r().page.subscribe(s)}},c={subscribe(s){const e=r().updated;return c.check=e.check,e.subscribe(s)},check:()=>{throw new Error("Cannot check updated store before subscribing")}};export{u as p,c as u};