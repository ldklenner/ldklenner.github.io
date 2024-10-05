const o={keyLength:256,tagLength:128,saltLength:16,ivLength:12,iterations:25e4};class y extends Error{constructor(t){super(t),this.name=y.name}}function d(e){const t=new TextEncoder;return window.crypto.subtle.importKey("raw",t.encode(e),"PBKDF2",!1,["deriveKey"])}function h(e,t,n,a){return console.assert(t>=25e4),window.crypto.subtle.deriveKey({name:"PBKDF2",salt:n,iterations:t,hash:"SHA-512"},e,{name:"AES-GCM",length:o.keyLength},!1,a)}async function L(e,t){try{const n=window.crypto.getRandomValues(new Uint8Array(o.saltLength)),a=window.crypto.getRandomValues(new Uint8Array(o.ivLength)),r=await d(t),s=await h(r,o.iterations,n,["encrypt"]),i=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:a,tagLength:o.tagLength},s,e),l=new Uint8Array(i),c=new Uint8Array(n.byteLength+a.byteLength+l.byteLength);return c.set(n,0),c.set(a,n.byteLength),c.set(l,n.byteLength+a.byteLength),c}catch{throw new y("Encryption failed!")}}async function f(e,t){try{const n=e.slice(0,o.saltLength),a=e.slice(o.saltLength,o.saltLength+o.ivLength),r=e.slice(o.saltLength+o.ivLength),s=await d(t),i=await h(s,o.iterations,n,["decrypt"]),l=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:a},i,r);return new Uint8Array(l)}catch{throw new y("Encryption failed!")}}function g(e){const t="0123456789abcdef";let n="",a=0;for(let r=0;r<e.length;r++)a=e[r]>>4,n+=t[a],a=e[r]&15,n+=t[a];return n}const u="9HWX2BjoTYs43H7umMRT4uMd9NjgedziSqy8fPVnhL5JFa3DQtorAs8LgaW9WNp5";async function p(e){const t=await window.crypto.subtle.digest("SHA-512",e);return new Uint8Array(t)}async function b(e,t,n=2592e6,a=u){console.assert(t.length>0);const r={go:e,expire:Date.now()+n},s=JSON.stringify(r);console.dev(s);const i=new TextEncoder,l=await p(i.encode(t)),c=await L(i.encode(s),a),w=new Blob([c],{type:"octet/stream"});return[g(l),w]}async function A(e,t=u){const n=new TextEncoder,a=await p(n.encode(e)),r=g(a);let s=null;try{s=await fetch(`links/${r}`)}catch{throw new Error("Cannot fetch file!")}if(!s.ok)throw new Error("File does not exist!");const i=await s.blob(),l=new Uint8Array(await i.arrayBuffer());try{const c=await f(l,t);return JSON.parse(new TextDecoder().decode(c))}catch{return null}}export{b as c,A as r};
