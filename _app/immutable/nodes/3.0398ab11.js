import{S as ee,i as te,s as se,k as d,q as k,a as A,l as _,m as v,r as S,h as f,c as I,n as u,b as z,G as o,u as x,H as de,g as D,v as we,d as V,f as ke,_ as Se,y as le,z as re,A as ae,B as ne,e as _e,I as De}from"../chunks/index.c13bc9ac.js";import{p as Pe}from"../chunks/stores.07a08772.js";import{T as ye,b as ve,a as pe}from"../chunks/base64.c321197f.js";function Ae(c){let s,r,e,l,n,t;return{c(){s=d("tr"),r=d("td"),e=k(c[0]),l=A(),n=d("td"),t=k(c[1]),this.h()},l(a){s=_(a,"TR",{});var i=v(s);r=_(i,"TD",{class:!0});var b=v(r);e=S(b,c[0]),b.forEach(f),l=I(i),n=_(i,"TD",{class:!0});var $=v(n);t=S($,c[1]),$.forEach(f),i.forEach(f),this.h()},h(){u(r,"class","rigid svelte-1t4nzw5"),u(n,"class","break svelte-1t4nzw5")},m(a,i){z(a,s,i),o(s,r),o(r,e),o(s,l),o(s,n),o(n,t)},p(a,[i]){i&1&&x(e,a[0]),i&2&&x(t,a[1])},i:de,o:de,d(a){a&&f(s)}}}function Ie(c,s,r){let{c1:e}=s,{c2:l}=s;return c.$$set=n=>{"c1"in n&&r(0,e=n.c1),"c2"in n&&r(1,l=n.c2)},[e,l]}class Ne extends ee{constructor(s){super(),te(this,s,Ie,Ae,se,{c1:0,c2:1})}}function me(c,s,r){const e=c.slice();return e[4]=s[r][0],e[5]=s[r][1],e}function ge(c,s,r){const e=c.slice();return e[8]=s[r],e[10]=r,e}function be(c){let s,r,e=c[8]+"",l;return{c(){s=d("div"),r=d("span"),l=k(e),this.h()},l(n){s=_(n,"DIV",{class:!0});var t=v(s);r=_(t,"SPAN",{class:!0});var a=v(r);l=S(a,e),a.forEach(f),t.forEach(f),this.h()},h(){u(r,"class","svelte-1lpelsi"),u(s,"class","line svelte-1lpelsi")},m(n,t){z(n,s,t),o(s,r),o(r,l)},p(n,t){t&1&&e!==(e=n[8]+"")&&x(l,e)},d(n){n&&f(s)}}}function Ee(c){let s,r,e,l,n;return s=new ye({props:{cols:["",""],$$slots:{default:[Ve]},$$scope:{ctx:c}}}),{c(){le(s.$$.fragment),r=A(),e=d("div"),l=d("span"),this.h()},l(t){re(s.$$.fragment,t),r=I(t),e=_(t,"DIV",{class:!0});var a=v(e);l=_(a,"SPAN",{class:!0}),v(l).forEach(f),a.forEach(f),this.h()},h(){u(l,"class","svelte-1lpelsi"),u(e,"class","line svelte-1lpelsi")},m(t,a){ae(s,t,a),z(t,r,a),z(t,e,a),o(e,l),n=!0},p(t,a){const i={};a&2050&&(i.$$scope={dirty:a,ctx:t}),s.$set(i)},i(t){n||(D(s.$$.fragment,t),n=!0)},o(t){V(s.$$.fragment,t),n=!1},d(t){ne(s,t),t&&f(r),t&&f(e)}}}function $e(c){let s,r;return s=new Ne({props:{c1:c[4],c2:c[5]}}),{c(){le(s.$$.fragment)},l(e){re(s.$$.fragment,e)},m(e,l){ae(s,e,l),r=!0},p(e,l){const n={};l&2&&(n.c1=e[4]),l&2&&(n.c2=e[5]),s.$set(n)},i(e){r||(D(s.$$.fragment,e),r=!0)},o(e){V(s.$$.fragment,e),r=!1},d(e){ne(s,e)}}}function Ve(c){let s,r,e=c[1],l=[];for(let t=0;t<e.length;t+=1)l[t]=$e(me(c,e,t));const n=t=>V(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();s=_e()},l(t){for(let a=0;a<l.length;a+=1)l[a].l(t);s=_e()},m(t,a){for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(t,a);z(t,s,a),r=!0},p(t,a){if(a&2){e=t[1];let i;for(i=0;i<e.length;i+=1){const b=me(t,e,i);l[i]?(l[i].p(b,a),D(l[i],1)):(l[i]=$e(b),l[i].c(),D(l[i],1),l[i].m(s.parentNode,s))}for(we(),i=e.length;i<l.length;i+=1)n(i);ke()}},i(t){if(!r){for(let a=0;a<e.length;a+=1)D(l[a]);r=!0}},o(t){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)V(l[a]);r=!1},d(t){Se(l,t),t&&f(s)}}}function Te(c){let s,r,e,l,n,t,a,i,b,$,U,N,F,J,M,T,B,j,Y,P,K,y,Q,W,X,C,G,L,R=c[0],g=[];for(let h=0;h<R.length;h+=1)g[h]=be(ge(c,R,h));let p=c[1].length>0&&Ee(c);return{c(){s=d("div"),r=d("div"),e=d("span"),l=k("System Error"),n=A(),t=d("div");for(let h=0;h<g.length;h+=1)g[h].c();a=A(),p&&p.c(),i=A(),b=d("div"),$=d("span"),U=k("You can contribute to fixing the error by opening a GitHub "),N=d("a"),F=k("issue"),J=k(" and sharing the window URL."),M=A(),T=d("div"),B=d("span"),j=A(),Y=d("div"),P=d("span"),K=k("You can return to the website by clicking "),y=d("a"),Q=k("here"),W=k("."),X=A(),C=d("div"),G=d("span"),this.h()},l(h){s=_(h,"DIV",{id:!0,class:!0});var w=v(s);r=_(w,"DIV",{id:!0,class:!0});var m=v(r);e=_(m,"SPAN",{class:!0});var H=v(e);l=S(H,"System Error"),H.forEach(f),m.forEach(f),n=I(w),t=_(w,"DIV",{id:!0,class:!0});var E=v(t);for(let Z=0;Z<g.length;Z+=1)g[Z].l(E);a=I(E),p&&p.l(E),i=I(E),b=_(E,"DIV",{class:!0});var ie=v(b);$=_(ie,"SPAN",{class:!0});var q=v($);U=S(q,"You can contribute to fixing the error by opening a GitHub "),N=_(q,"A",{href:!0,class:!0});var ce=v(N);F=S(ce,"issue"),ce.forEach(f),J=S(q," and sharing the window URL."),q.forEach(f),ie.forEach(f),M=I(E),T=_(E,"DIV",{class:!0});var oe=v(T);B=_(oe,"SPAN",{class:!0}),v(B).forEach(f),oe.forEach(f),j=I(E),Y=_(E,"DIV",{class:!0});var fe=v(Y);P=_(fe,"SPAN",{class:!0});var O=v(P);K=S(O,"You can return to the website by clicking "),y=_(O,"A",{"data-sveltekit-reload":!0,href:!0,class:!0});var ue=v(y);Q=S(ue,"here"),ue.forEach(f),W=S(O,"."),O.forEach(f),fe.forEach(f),X=I(E),C=_(E,"DIV",{class:!0});var he=v(C);G=_(he,"SPAN",{class:!0}),v(G).forEach(f),he.forEach(f),E.forEach(f),w.forEach(f),this.h()},h(){u(e,"class","headline svelte-1lpelsi"),u(r,"id","bar"),u(r,"class","bar svelte-1lpelsi"),u(N,"href","https://github.com/ldklenner/ldklenner.github.io/issues/new"),u(N,"class","svelte-1lpelsi"),u($,"class","svelte-1lpelsi"),u(b,"class","line svelte-1lpelsi"),u(B,"class","svelte-1lpelsi"),u(T,"class","line svelte-1lpelsi"),u(y,"data-sveltekit-reload",""),u(y,"href","/"),u(y,"class","svelte-1lpelsi"),u(P,"class","svelte-1lpelsi"),u(Y,"class","line svelte-1lpelsi"),u(G,"class","svelte-1lpelsi"),u(C,"class","line svelte-1lpelsi"),u(t,"id","container"),u(t,"class","container svelte-1lpelsi"),u(s,"id","frame"),u(s,"class","frame svelte-1lpelsi")},m(h,w){z(h,s,w),o(s,r),o(r,e),o(e,l),o(s,n),o(s,t);for(let m=0;m<g.length;m+=1)g[m]&&g[m].m(t,null);o(t,a),p&&p.m(t,null),o(t,i),o(t,b),o(b,$),o($,U),o($,N),o(N,F),o($,J),o(t,M),o(t,T),o(T,B),o(t,j),o(t,Y),o(Y,P),o(P,K),o(P,y),o(y,Q),o(P,W),o(t,X),o(t,C),o(C,G),L=!0},p(h,[w]){if(w&1){R=h[0];let m;for(m=0;m<R.length;m+=1){const H=ge(h,R,m);g[m]?g[m].p(H,w):(g[m]=be(H),g[m].c(),g[m].m(t,a))}for(;m<g.length;m+=1)g[m].d(1);g.length=R.length}h[1].length>0?p?(p.p(h,w),w&2&&D(p,1)):(p=Ee(h),p.c(),D(p,1),p.m(t,i)):p&&(we(),V(p,1,1,()=>{p=null}),ke())},i(h){L||(D(p),L=!0)},o(h){V(p),L=!1},d(h){h&&f(s),Se(g,h),p&&p.d()}}}function Ye(c,s,r){let{eo:e={}}=s,{trace:l=[]}=s,{lines:n=["","A fatal exception has occurred. Your terminal session has been terminated. This screen shows debugging information.",""]}=s,t=[];return"type"in e&&(e.type=="error"?t=[["Error Code:","SYNC"],["Details:",`${e.message}`],["File:",`${e.filename}`],["Line:",`${e.lineno}`],["Column:",`${e.colno}`]]:e.type=="promise"&&(t=[["Error Code:","PROM"],["Details:",`${e.message}`],["Stack:",`${e.stack}`]])),l.length&&t.push(["Trace:",`${l}`]),c.$$set=a=>{"eo"in a&&r(2,e=a.eo),"trace"in a&&r(3,l=a.trace),"lines"in a&&r(0,n=a.lines)},[n,t,e,l]}class Ce extends ee{constructor(s){super(),te(this,s,Ye,Te,se,{eo:2,trace:3,lines:0})}}function Re(c){let s,r;return s=new Ce({props:{eo:c[0],trace:c[1]}}),{c(){le(s.$$.fragment)},l(e){re(s.$$.fragment,e)},m(e,l){ae(s,e,l),r=!0},p(e,[l]){const n={};l&1&&(n.eo=e[0]),l&2&&(n.trace=e[1]),s.$set(n)},i(e){r||(D(s.$$.fragment,e),r=!0)},o(e){V(s.$$.fragment,e),r=!1},d(e){ne(s,e)}}}function ze(c,s,r){let e;De(c,Pe,t=>r(2,e=t));let l={},n=[];if(e.url.searchParams.has("code")){const t=ve(pe(e.url.searchParams.get("code")));l=JSON.parse(t)}return e.url.searchParams.has("trace")&&(n=ve(pe(e.url.searchParams.get("trace")))),[l,n]}class Le extends ee{constructor(s){super(),te(this,s,ze,Re,se,{})}}export{Le as component};
