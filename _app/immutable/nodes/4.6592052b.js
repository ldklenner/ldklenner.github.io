import{S as g,i as x,s as b,e as f,b as k,H as d,h as r,o as E,k as h,q as $,l as _,m as p,r as D,n as I,G as m}from"../chunks/index.a9e9d04b.js";import{g as u,r as v}from"../chunks/navigation.ed30f48b.js";const q=!1,w=q;function y(o){let e,t,a;return{c(){e=h("div"),t=h("h1"),a=$("Invalid link."),this.h()},l(s){e=_(s,"DIV",{class:!0});var i=p(e);t=_(i,"H1",{});var n=p(t);a=D(n,"Invalid link."),n.forEach(r),i.forEach(r),this.h()},h(){I(e,"class","svelte-1wtpykt")},m(s,i){k(s,e,i),m(e,t),m(t,a)},d(s){s&&r(e)}}}function H(o){let e,t=o[0]&&y();return{c(){t&&t.c(),e=f()},l(a){t&&t.l(a),e=f()},m(a,s){t&&t.m(a,s),k(a,e,s)},p(a,[s]){a[0]?t||(t=y(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:d,o:d,d(a){t&&t.d(a),a&&r(e)}}}function S(o,e,t){let a=!1;async function s(){const i=window.location.hash;if(!i){await u("/");return}const[n,c]=i.substring(1).split("+");try{const l=c?await v(n,c):await v(n);if(l&&l.expire>Date.now()){await u(l.go);return}}catch{}t(0,a=!0)}return E(async()=>{addEventListener("hashchange",async i=>{await s()}),await s()}),[a]}class G extends g{constructor(e){super(),x(this,e,S,H,b,{})}}export{G as component};
