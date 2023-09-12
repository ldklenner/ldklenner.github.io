import{j as f}from"./singletons.44d1875a.js";const r={keyLength:256,tagLength:128,saltLength:16,ivLength:12,iterations:25e4};class y extends Error{constructor(t){super(t),this.name=y.name}}function h(e){const t=new TextEncoder;return window.crypto.subtle.importKey("raw",t.encode(e),"PBKDF2",!1,["deriveKey"])}function d(e,t,n,o){return console.assert(t>=25e4),window.crypto.subtle.deriveKey({name:"PBKDF2",salt:n,iterations:t,hash:"SHA-512"},e,{name:"AES-GCM",length:r.keyLength},!1,o)}async function L(e,t){try{const n=window.crypto.getRandomValues(new Uint8Array(r.saltLength)),o=window.crypto.getRandomValues(new Uint8Array(r.ivLength)),a=await h(t),s=await d(a,r.iterations,n,["encrypt"]),i=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:o,tagLength:r.tagLength},s,e),l=new Uint8Array(i),c=new Uint8Array(n.byteLength+o.byteLength+l.byteLength);return c.set(n,0),c.set(o,n.byteLength),c.set(l,n.byteLength+o.byteLength),c}catch{throw new y("Encryption failed!")}}async function b(e,t){try{const n=e.slice(0,r.saltLength),o=e.slice(r.saltLength,r.saltLength+r.ivLength),a=e.slice(r.saltLength+r.ivLength),s=await h(t),i=await d(s,r.iterations,n,["decrypt"]),l=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:o},i,a);return new Uint8Array(l)}catch{throw new y("Encryption failed!")}}function g(e){const t="0123456789abcdef";let n="",o=0;for(let a=0;a<e.length;a++)o=e[a]>>4,n+=t[o],o=e[a]&15,n+=t[o];return n}const u="9HWX2BjoTYs43H7umMRT4uMd9NjgedziSqy8fPVnhL5JFa3DQtorAs8LgaW9WNp5";async function p(e){const t=await window.crypto.subtle.digest("SHA-512",e);return new Uint8Array(t)}async function A(e,t,n=2592e6,o=u){console.assert(t.length>0);const a={go:e,expire:Date.now()+n},s=JSON.stringify(a);console.log(s);const i=new TextEncoder,l=await p(i.encode(t)),c=await L(i.encode(s),o),w=new Blob([c],{type:"octet/stream"});return[g(l),w]}async function k(e,t=u){const n=new TextEncoder,o=await p(n.encode(e)),a=g(o);let s=null;try{s=await fetch(`links/${a}`)}catch{throw new Error("Cannot fetch file!")}if(!s.ok)throw new Error("File does not exist!");const i=await s.blob(),l=new Uint8Array(await i.arrayBuffer());try{const c=await b(l,t);return JSON.parse(new TextDecoder().decode(c))}catch{return null}}const E=f("goto");export{A as c,E as g,k as r};
