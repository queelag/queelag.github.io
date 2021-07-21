(self.webpackChunkmangadex_fe=self.webpackChunkmangadex_fe||[]).push([[291],{5998:(t,e,r)=>{"use strict";var n,i,s,a;function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Y:()=>o}),function(t){t.DELETE="DELETE",t.GET="GET",t.POST="POST",t.PUT="PUT"}(n||(n={})),function(t){t.FALSE="FALSE",t.TRUE="TRUE"}(i||(i={})),function(t){t[t.DEBUG=0]="DEBUG",t[t.INFO=1]="INFO",t[t.WARN=2]="WARN",t[t.ERROR=3]="ERROR"}(s||(s={})),function(t){t.CREATE="CREATE",t.UPDATE="UPDATE"}(a||(a={}));class o{constructor(){}static debug(...t){this.isEnabled&&this.level<=s.DEBUG&&console.debug(...this.format(t))}static info(...t){this.isEnabled&&this.level<=s.INFO&&console.info(...this.format(t))}static warn(...t){this.isEnabled&&this.level<=s.WARN&&console.warn(...this.format(t))}static error(...t){this.isEnabled&&this.level<=s.ERROR&&console.error(...this.format(t))}static disable(){this.status=i.FALSE}static enable(){this.status=i.TRUE}static format(t=[]){return[t.filter((t=>["boolean","number","string"].includes(typeof t))).join(" -> "),...t.filter((t=>!["boolean","number","string"].includes(typeof t)))]}static get isDisabled(){return this.status===i.FALSE}static get isEnabled(){return this.status===i.TRUE}}c(o,"level",s.DEBUG),c(o,"status",i.TRUE)},1331:(t,e,r)=>{"use strict";function n(...t){}r.d(e,{Z:()=>n})},8929:(t,e,r)=>{"use strict";function n(t,e=!0){try{return t()}catch(t){return e&&console.error(t),t}}r.d(e,{tc:()=>n})},5696:(t,e,r)=>{"use strict";async function n(t,e=!0){try{return await t()}catch(t){return e&&console.error(t),t}}r.d(e,{u:()=>n})},6886:(t,e,r)=>{"use strict";r.d(e,{j:()=>i});let n=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e};class i{constructor(){}static prefixed(t){return t+"_"+n()}static unique(t=[]){let e;for(;e=n(),t.includes(e););return e}}},6317:(t,e,r)=>{"use strict";r.d(e,{g:()=>c});var n,i,s,a=r(8929);class c{constructor(){}static clone(t){return JSON.parse(JSON.stringify(t))}static get(t,e,r){switch(typeof e){case"number":case"symbol":return t[e];case"string":if(e.includes(".")){let n;return n=(0,a.tc)((()=>e.split(".").reduce(((t,e)=>t[e.replace(/[\[\]]/g,"")]),t))),n instanceof Error?r:n}return t[e]}}static set(t,e,r){switch(typeof e){case"number":case"symbol":t[e]=r;break;case"string":if(e.includes(".")){let n,i;if(n=e.split("."),i=(0,a.tc)((()=>n.reduce(((t,e,r)=>r<n.length-1?t[e]:t),t))),i instanceof Error)return;return void(i[n[n.length-1]]=r)}t[e]=r}}static pick(t,e){let r;return r={},e.forEach((e=>t[e])),r}static pickToArray(t,e){let r;return r=[],Object.entries(t).forEach((t=>e.includes(t[0])&&r.push(t[1]))),r}static omit(t,e){let r;return r={...t},e.forEach((t=>delete r[t])),r}static has(t,e){return this.get(t,e,this.plain)!==this.plain}static hasKeys(t){return Object.keys(t).length>0}static hasValues(t){return Object.values(t).length>0}}s={},(i="plain")in(n=c)?Object.defineProperty(n,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[i]=s},5937:(t,e,r)=>{"use strict";r.d(e,{e:()=>n});class n{constructor(){}static updateKeys(t,e,r,n=(()=>{})){let i;Object.entries(e).forEach((([e,n])=>{r.includes(e)&&this.shouldUpdateKey(t,e,n)&&(t[e]=n,i=!0)})),i&&n()}static shouldUpdateKeys(t,e,r){return r.some((r=>this.shouldUpdateKey(t,r,e[r])))}static shouldUpdateKey(t,e,r){return void 0!==r&&t[e]!==r}}},5758:(t,e,r)=>{"use strict";r.d(e,{bF:()=>n,Q_:()=>i,ck:()=>s,xb:()=>a,ZC:()=>c,mz:()=>o,WG:()=>u,L:()=>E});const n=["opacity"],i=["background","color","destructive","icon","layer","shape","size","spinning","title","variant"],s=["header","layer","footer","title"],a=["color","layer","size","svg","thickness"],c="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",o="image/png",u=["fallback","orientation","ratio","shape","size","source"],E=["background","color","destroyable","icon","layer","onDestroy","text"]},94:(t,e,r)=>{"use strict";var n,i,s,a,c,o,u,E,l,T,A,R,I,d,O;r.d(e,{Wu:()=>n,Il:()=>i,yL:()=>s,nw:()=>o,mh:()=>T,i5:()=>A,bn:()=>I,$u:()=>d}),function(t){t.NONE="NONE",t.OUTLINE="OUTLINE",t.PRIMARY="PRIMARY",t.SECONDARY="SECONDARY",t.TEXT="TEXT"}(n||(n={})),function(t){t.AMBER="amber",t.BLUE="blue",t.CYAN="cyan",t.EMERALD="emerald",t.FUCHSIA="fuchsia",t.GRAY="gray",t.GREEN="green",t.INDIGO="indigo",t.LIME="lime",t.MONO="mono",t.MONO_INVERTED="mono_inverted",t.ORANGE="orange",t.PINK="pink",t.PURPLE="purple",t.RED="red",t.ROSE="rose",t.TEAL="teal",t.VIOLET="violet",t.YELLOW="yellow"}(i||(i={})),function(t){t.ALERT="ALERT",t.AVATAR="AVATAR",t.BADGE="BADGE",t.BOTTOM_SHEET="BOTTOM_SHEET",t.BOTTOM_TABBER="BOTTOM_TABBER",t.BUTTON="BUTTON",t.CARD="CARD",t.CHECKBOX="CHECKBOX",t.COLLAPSE="COLLAPSE",t.COLLAPSE_CHILD="COLLAPSE_CHILD",t.CONTEXT_MENU="CONTEXT_MENU",t.DIALOG="DIALOG",t.DIVIDER="DIVIDER",t.EMPTY="EMPTY",t.FEEDBACK_DIALOG="FEEDBACK_DIALOG",t.FORM="FORM",t.GRID="GRID",t.GRID_ITEM="GRID_ITEM",t.HEADER="HEADER",t.ICON="ICON",t.IMAGE="IMAGE",t.INPUT="INPUT",t.INPUT_FILE="INPUT_FILE",t.LIST="LIST",t.LIST_ITEM="LIST_ITEM",t.NOTIFICATION="NOTIFICATION",t.NOT_FOUND="NOT_FOUND",t.ONBOARDING="ONBOARDING",t.PROGRESS="PROGRESS",t.RESULT="RESULT",t.ROUTER="ROUTER",t.SELECT="SELECT",t.SIDEBAR="SIDEBAR",t.SMART_LIST="SMART_LIST",t.SPINNER="SPINNER",t.SQUIRCLE="SQUIRCLE",t.STATISTIC="STATISTIC",t.SWITCH="SWITCH",t.TAG="TAG",t.TOAST="TOAST",t.TOP_TABBER="TOP_TABBER",t.VIRTUALIZED_LIST="VIRTUALIZED_LIST",t.WIZARD="WIZARD"}(s||(s={})),function(t){t.LEFT="LEFT",t.RIGHT="RIGHT"}(a||(a={})),function(t){t.DOWN="DOWN",t.UP="UP"}(c||(c={})),function(t){t.ERROR="ERROR",t.INFORMATION="INFORMATION",t.SUCCESS="SUCCESS",t.WARNING="WARNING"}(o||(o={})),function(t){t.CHECKBOX="CHECKBOX",t.INPUT="INPUT",t.SELECT="SELECT"}(u||(u={})),function(t){t.MULTIPLE="MULTIPLE",t.SINGLE="SINGLE"}(E||(E={})),function(t){t.BUFFER="BUFFER",t.DATE="DATE",t.EMAIL="EMAIL",t.NUMBER="NUMBER",t.PASSWORD="PASSWORD",t.TEL="TEL",t.TEXT="TEXT",t.URL="URL"}(l||(l={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.TWO=2]="TWO",t[t.THREE=3]="THREE"}(T||(T={})),function(t){t.HORIZONTAL="HORIZONTAL",t.VERTICAL="VERTICAL"}(A||(A={})),function(t){t.MULTIPLE="MULTIPLE",t.SINGLE="SINGLE"}(R||(R={})),function(t){t.CIRCLE="CIRCLE",t.NONE="NONE",t.RECTANGLE="RECTANGLE",t.SQUARE="SQUARE",t.SQUIRCLE="SQUIRCLE"}(I||(I={})),function(t){t.LARGE="LARGE",t.MEDIUM="MEDIUM",t.SMALL="SMALL"}(d||(d={})),function(t){t.DARK="DARK",t.LIGHT="LIGHT",t.SYSTEM="SYSTEM"}(O||(O={}))},8571:(t,e,r)=>{"use strict";r.d(e,{N:()=>i});var n=r(4741);function i(){return(0,n._Y)((()=>({})),{})[1]}},1933:(t,e,r)=>{"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{C:()=>i});class i{}n(i,"icons",new Map),n(i,"images",new Map)},2e3:(t,e,r)=>{"use strict";r.d(e,{m:()=>c});var n=r(6886),i=r(1331),s=r(3348);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class c{constructor(t,e){a(this,"id",void 0),a(this,"name",void 0),a(this,"ref",void 0),this.id=e.id||n.j.prefixed(t),this.name=t,this.ref=e.ref||s.v.ref,this.update=e.update||i.Z}update(){}get element(){return this.ref.current||this.ref||document.createElement("div")}}},3348:(t,e,r)=>{"use strict";r.d(e,{v:()=>a});var n=r(4741);function i(){return n.ZP.createElement("div",{style:{display:"none"}})}var s=r(94);class a{static get colorPickerConfiguration(){return{background:this.colorPickerConfigurationValue,border:this.colorPickerConfigurationValue,divide:this.colorPickerConfigurationValue,feedback:{error:s.Il.RED,information:s.Il.BLUE,success:s.Il.GREEN,warning:s.Il.YELLOW},text:this.colorPickerConfigurationValue}}static get colorPickerConfigurationValue(){return{any:()=>["","","",""],gray:["","","",""],mono:"",monoInverted:""}}static get inputFileItem(){return{data:"",id:"",name:""}}static get ref(){return{current:document.createElement("div")}}static get wizardStep(){return{canGoBack:()=>!0,canGoNext:()=>!0,content:i,description:"",name:"",title:""}}}},7334:(t,e,r)=>{"use strict";r.d(e,{i:()=>E});var n=r(8929),i=r(6886);const s={format:"SVGNode",viewBox:[0,0,200,200],width:200,height:200,curvature:.5,fill:"#4C3EF7",rotate:0};var a,c,o,u=r(94);class E{static findStyle(t,e=0,r=.75){switch(t){case u.bn.CIRCLE:return{borderRadius:9999};case u.bn.NONE:case u.bn.RECTANGLE:case u.bn.SQUARE:return{};case u.bn.SQUIRCLE:let t,a,c;return t=this.squircleCache.get(this.toSquircleCacheKey(e,r)),t?{clipPath:`url(#${t})`}:(a=(0,n.tc)((()=>function(t){const e=function(t,e,r,n,i,s){const a=document.createElementNS("http://www.w3.org/2000/svg","path"),c=t,o=e,u=c/2,E=o/2,l=Math.min(u,E)*(1-i),T=`\n        M 0 ${E}\n        C 0 ${l}, ${l} 0, ${u} 0\n        S ${c} ${l}, ${c} ${E}, ${c-l} ${o}\n          ${u} ${o}, 0 ${o-l}, 0 ${E}\n    `,A=`\n        rotate(\n            ${s},\n            ${t/2},\n            ${e/2}\n        )\n        translate(\n            ${(r-t)/2},\n            ${(n-e)/2}\n        )\n    `;return a.setAttribute("d",T),a.setAttribute("transform",A),a}((t=Object.assign(s,t)).width,t.height,t.viewBox[2],t.viewBox[3],t.curvature,t.rotate),r=function(t,e,r){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox",`0 0 ${t} ${e}`),n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("version","1.1"),n.appendChild(r),n}(t.viewBox[2],t.viewBox[3],e);return r.setAttribute("fill",t.fill),"base64"===t.format?`data:image/svg+xml;base64,${btoa(r.outerHTML)}`:"backgroundImage"===t.format?`url("data:image/svg+xml;utf8,${r.outerHTML.replace(/"/g,"'").replace(/[\r\n%#()<>?[\\\]^`{|}]/g,encodeURIComponent)}")`.replace(/\s+/g," "):r}({format:"SVGNode",viewBox:[0,0,e,e],width:e,height:e,curvature:r,fill:"#000",rotate:0}))),a instanceof Error?{}:(c=i.j.prefixed(u.yL.SQUIRCLE),a.innerHTML=`<clipPath id='${c}'>${a.innerHTML}</clipPath>`,this.squircleCache.set(this.toSquircleCacheKey(e,r),c),this.squirclesContainer.appendChild(a),{clipPath:`url(#${c})`}))}}static toSquircleCacheKey(t,e){return[t,e].join(",")}static get squirclesContainer(){let t;return t=document.querySelector("#"+this.squirclesContainerID)||document.createElement("div"),t.id?t:(t.id=this.squirclesContainerID,t.style.opacity="0",t.style.pointerEvents="none",t.style.position="absolute",document.body.appendChild(t))}static get squirclesContainerID(){return"SQUIRCLES_CONTAINER"}}a=E,c="squircleCache",o=new Map,c in a?Object.defineProperty(a,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[c]=o}}]);