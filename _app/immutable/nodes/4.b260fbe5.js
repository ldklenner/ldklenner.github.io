import{S as g,i as x,s as b,e as f,b as k,H as d,h as l,o as $,k as h,q as E,l as _,m as p,r as I,n as q,G as m}from"../chunks/index.a9e9d04b.js";import{g as u,r as v,d as w}from"../chunks/navigation.d444ed9c.js";function y(o){let e,t,a;return{c(){e=h("div"),t=h("h1"),a=E("Invalid link."),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=p(e);t=_(s,"H1",{});var n=p(t);a=I(n,"Invalid link."),n.forEach(l),s.forEach(l),this.h()},h(){q(e,"class","svelte-1wtpykt")},m(i,s){k(i,e,s),m(e,t),m(t,a)},d(i){i&&l(e)}}}function D(o){let e,t=o[0]&&y();return{c(){t&&t.c(),e=f()},l(a){t&&t.l(a),e=f()},m(a,i){t&&t.m(a,i),k(a,e,i)},p(a,[i]){a[0]?t||(t=y(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:d,o:d,d(a){t&&t.d(a),a&&l(e)}}}function H(o,e,t){let a=!1;async function i(){const s=window.location.hash;if(!s){await u("/");return}const[n,c]=s.substring(1).split("+");try{const r=c?await v(n,c):await v(n);if(r&&r.expire>Date.now()){await u(r.go);return}}catch{}t(0,a=!0)}return $(async()=>{addEventListener("hashchange",async s=>{await i()}),await i()}),[a]}class G extends g{constructor(e){super(),x(this,e,H,D,b,{})}}export{G as component};
