"use strict";(()=>{var r=(o=document)=>{var l;let e="Last Published:";for(let t of o.childNodes)if(t.nodeType===Node.COMMENT_NODE&&((l=t.textContent)!=null&&l.includes(e))){let n=t.textContent.trim().split(e)[1];if(n)return new Date(n)}};var s=o=>{let e=r();console.log(`Hello world and ${o}!`),console.log(`This site was last published on ${e==null?void 0:e.toLocaleDateString("de-DE",{year:"numeric",month:"long",day:"2-digit"})}.`)};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{console.log("HELLO WROLD!!"),s("Hello Michael")});})();