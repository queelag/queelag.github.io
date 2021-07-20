(self.webpackChunkmangadex_fe=self.webpackChunkmangadex_fe||[]).push([[651],{1264:(t,e,r)=>{"use strict";var i,s,n,a;r.d(e,{Y:()=>o}),function(t){t.DELETE="DELETE",t.GET="GET",t.POST="POST",t.PUT="PUT"}(i||(i={})),function(t){t.FALSE="FALSE",t.TRUE="TRUE"}(s||(s={})),function(t){t[t.DEBUG=0]="DEBUG",t[t.INFO=1]="INFO",t[t.WARN=2]="WARN",t[t.ERROR=3]="ERROR"}(n||(n={})),function(t){t.CREATE="CREATE",t.UPDATE="UPDATE"}(a||(a={}));class o{static level=n.DEBUG;static status=s.TRUE;constructor(){}static debug(...t){this.isEnabled&&this.level<=n.DEBUG&&console.debug(...this.format(t))}static info(...t){this.isEnabled&&this.level<=n.INFO&&console.info(...this.format(t))}static warn(...t){this.isEnabled&&this.level<=n.WARN&&console.warn(...this.format(t))}static error(...t){this.isEnabled&&this.level<=n.ERROR&&console.error(...this.format(t))}static disable(){this.status=s.FALSE}static enable(){this.status=s.TRUE}static format(t=[]){return[t.filter((t=>["boolean","number","string"].includes(typeof t))).join(" -> "),...t.filter((t=>!["boolean","number","string"].includes(typeof t)))]}static get isDisabled(){return this.status===s.FALSE}static get isEnabled(){return this.status===s.TRUE}}},7016:(t,e,r)=>{"use strict";function i(...t){}r.d(e,{Z:()=>i})},3519:(t,e,r)=>{"use strict";function i(t,e=!0){try{return t()}catch(t){return e&&console.error(t),t}}r.d(e,{tc:()=>i})},729:(t,e,r)=>{"use strict";async function i(t,e=!0){try{return await t()}catch(t){return e&&console.error(t),t}}r.d(e,{u:()=>i})},6201:(t,e,r)=>{"use strict";r.d(e,{j:()=>s});let i=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let i=63&r[t];e+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-"}return e};class s{constructor(){}static prefixed(t){return t+"_"+i()}static unique(t=[]){let e;for(;e=i(),t.includes(e););return e}}},3231:(t,e,r)=>{"use strict";r.d(e,{g:()=>s});var i=r(3519);class s{static plain={};constructor(){}static clone(t){return JSON.parse(JSON.stringify(t))}static get(t,e,r){switch(typeof e){case"number":case"symbol":return t[e];case"string":if(e.includes(".")){let s;return s=(0,i.tc)((()=>e.split(".").reduce(((t,e)=>t[e.replace(/[\[\]]/g,"")]),t))),s instanceof Error?r:s}return t[e]}}static set(t,e,r){switch(typeof e){case"number":case"symbol":t[e]=r;break;case"string":if(e.includes(".")){let s,n;if(s=e.split("."),n=(0,i.tc)((()=>s.reduce(((t,e,r)=>r<s.length-1?t[e]:t),t))),n instanceof Error)return;return void(n[s[s.length-1]]=r)}t[e]=r}}static pick(t,e){let r;return r={},e.forEach((e=>t[e])),r}static pickToArray(t,e){let r;return r=[],Object.entries(t).forEach((t=>e.includes(t[0])&&r.push(t[1]))),r}static omit(t,e){let r;return r={...t},e.forEach((t=>delete r[t])),r}static has(t,e){return this.get(t,e,this.plain)!==this.plain}static hasKeys(t){return Object.keys(t).length>0}static hasValues(t){return Object.values(t).length>0}}},8310:(t,e,r)=>{"use strict";r.d(e,{e:()=>i});class i{constructor(){}static updateKeys(t,e,r,i=(()=>{})){let s;Object.entries(e).forEach((([e,i])=>{r.includes(e)&&this.shouldUpdateKey(t,e,i)&&(t[e]=i,s=!0)})),s&&i()}static shouldUpdateKeys(t,e,r){return r.some((r=>this.shouldUpdateKey(t,r,e[r])))}static shouldUpdateKey(t,e,r){return void 0!==r&&t[e]!==r}}},4302:(t,e,r)=>{"use strict";r.d(e,{bF:()=>i,Q_:()=>s,ck:()=>n,xb:()=>a,ZC:()=>o,mz:()=>c,WG:()=>l,L:()=>u});const i=["opacity"],s=["background","color","icon","layer","shape","size","spinning","title","type"],n=["header","layer","footer","title"],a=["color","fill","layer","size","stroke","svg","thickness"],o="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",c="image/png",l=["fallback","orientation","ratio","shape","size","source"],u=["background","color","destroyable","icon","layer","text"]},5874:(t,e,r)=>{"use strict";var i,s,n,a,o,c,l,u,E,h,d,f,T,p,A;r.d(e,{Wu:()=>i,Il:()=>s,yL:()=>n,nw:()=>c,mh:()=>h,i5:()=>d,bn:()=>T,$u:()=>p}),function(t){t.NONE="NONE",t.OUTLINE="OUTLINE",t.PRIMARY="PRIMARY",t.SECONDARY="SECONDARY",t.TEXT="TEXT"}(i||(i={})),function(t){t.AMBER="amber",t.BLUE="blue",t.CYAN="cyan",t.EMERALD="emerald",t.FUCHSIA="fuchsia",t.GRAY="gray",t.GREEN="green",t.INDIGO="indigo",t.LIME="lime",t.MONO="mono",t.MONO_INVERTED="mono_inverted",t.ORANGE="orange",t.PINK="pink",t.PURPLE="purple",t.RED="red",t.ROSE="rose",t.TEAL="teal",t.VIOLET="violet",t.YELLOW="yellow"}(s||(s={})),function(t){t.ALERT="ALERT",t.AVATAR="AVATAR",t.BADGE="BADGE",t.BOTTOM_SHEET="BOTTOM_SHEET",t.BOTTOM_TABBER="BOTTOM_TABBER",t.BUTTON="BUTTON",t.CARD="CARD",t.CHECKBOX="CHECKBOX",t.COLLAPSE="COLLAPSE",t.COLLAPSE_CHILD="COLLAPSE_CHILD",t.CONTEXT_MENU="CONTEXT_MENU",t.DIALOG="DIALOG",t.DIVIDER="DIVIDER",t.EMPTY="EMPTY",t.FEEDBACK_DIALOG="FEEDBACK_DIALOG",t.FORM="FORM",t.GRID="GRID",t.GRID_ITEM="GRID_ITEM",t.HEADER="HEADER",t.ICON="ICON",t.IMAGE="IMAGE",t.INPUT="INPUT",t.INPUT_FILE="INPUT_FILE",t.LIST="LIST",t.LIST_ITEM="LIST_ITEM",t.NOTIFICATION="NOTIFICATION",t.NOT_FOUND="NOT_FOUND",t.ONBOARDING="ONBOARDING",t.PROGRESS="PROGRESS",t.RESULT="RESULT",t.ROUTER="ROUTER",t.SELECT="SELECT",t.SIDEBAR="SIDEBAR",t.SMART_LIST="SMART_LIST",t.SPINNER="SPINNER",t.SQUIRCLE="SQUIRCLE",t.STATISTIC="STATISTIC",t.SWITCH="SWITCH",t.TAG="TAG",t.TOAST="TOAST",t.TOP_TABBER="TOP_TABBER",t.VIRTUALIZED_LIST="VIRTUALIZED_LIST",t.WIZARD="WIZARD"}(n||(n={})),function(t){t.LEFT="LEFT",t.RIGHT="RIGHT"}(a||(a={})),function(t){t.DOWN="DOWN",t.UP="UP"}(o||(o={})),function(t){t.ERROR="ERROR",t.INFORMATION="INFORMATION",t.SUCCESS="SUCCESS",t.WARNING="WARNING"}(c||(c={})),function(t){t.CHECKBOX="CHECKBOX",t.INPUT="INPUT",t.SELECT="SELECT"}(l||(l={})),function(t){t.MULTIPLE="MULTIPLE",t.SINGLE="SINGLE"}(u||(u={})),function(t){t.BUFFER="BUFFER",t.DATE="DATE",t.EMAIL="EMAIL",t.NUMBER="NUMBER",t.PASSWORD="PASSWORD",t.TEL="TEL",t.TEXT="TEXT",t.URL="URL"}(E||(E={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.TWO=2]="TWO",t[t.THREE=3]="THREE"}(h||(h={})),function(t){t.HORIZONTAL="HORIZONTAL",t.VERTICAL="VERTICAL"}(d||(d={})),function(t){t.MULTIPLE="MULTIPLE",t.SINGLE="SINGLE"}(f||(f={})),function(t){t.CIRCLE="CIRCLE",t.NONE="NONE",t.RECTANGLE="RECTANGLE",t.SQUARE="SQUARE",t.SQUIRCLE="SQUIRCLE"}(T||(T={})),function(t){t.LARGE="LARGE",t.MEDIUM="MEDIUM",t.SMALL="SMALL"}(p||(p={})),function(t){t.DARK="DARK",t.LIGHT="LIGHT",t.SYSTEM="SYSTEM"}(A||(A={}))},3747:(t,e,r)=>{"use strict";r.d(e,{N:()=>s});var i=r(5776);function s(){return(0,i._Y)((()=>({})),{})[1]}},6818:(t,e,r)=>{"use strict";r.d(e,{C:()=>i});class i{static icons=new Map;static images=new Map}},5718:(t,e,r)=>{"use strict";r.d(e,{m:()=>a});var i=r(6201),s=r(7016),n=r(2951);class a{id;name;ref;constructor(t,e){this.id=e.id||i.j.prefixed(t),this.name=t,this.ref=e.ref||n.v.ref,this.update=e.update||s.Z}update(){}get element(){return this.ref.current||this.ref||document.createElement("div")}}},2951:(t,e,r)=>{"use strict";r.d(e,{v:()=>a});var i=r(5776);function s(){return i.ZP.createElement("div",{style:{display:"none"}})}var n=r(5874);class a{static get colorPickerConfiguration(){return{background:this.colorPickerConfigurationValue,border:this.colorPickerConfigurationValue,divide:this.colorPickerConfigurationValue,feedback:{error:n.Il.RED,information:n.Il.BLUE,success:n.Il.GREEN,warning:n.Il.YELLOW},text:this.colorPickerConfigurationValue}}static get colorPickerConfigurationValue(){return{any:()=>["","","",""],gray:["","","",""],mono:"",monoInverted:""}}static get inputFileItem(){return{data:"",id:"",name:""}}static get ref(){return{current:document.createElement("div")}}static get wizardStep(){return{canGoBack:()=>!0,canGoNext:()=>!0,content:s,description:"",name:"",title:""}}}},7020:(t,e,r)=>{"use strict";r.d(e,{i:()=>o});var i=r(3519),s=r(6201);const n={format:"SVGNode",viewBox:[0,0,200,200],width:200,height:200,curvature:.5,fill:"#4C3EF7",rotate:0};var a=r(5874);class o{static squircleCache=new Map;static findStyle(t,e=0,r=.75){switch(t){case a.bn.CIRCLE:return{borderRadius:9999};case a.bn.NONE:case a.bn.RECTANGLE:case a.bn.SQUARE:return{};case a.bn.SQUIRCLE:let t,o,c;return t=this.squircleCache.get(this.toSquircleCacheKey(e,r)),t?{clipPath:`url(#${t})`}:(o=(0,i.tc)((()=>function(t){const e=function(t,e,r,i,s,n){const a=document.createElementNS("http://www.w3.org/2000/svg","path"),o=t,c=e,l=o/2,u=c/2,E=Math.min(l,u)*(1-s),h=`\n        M 0 ${u}\n        C 0 ${E}, ${E} 0, ${l} 0\n        S ${o} ${E}, ${o} ${u}, ${o-E} ${c}\n          ${l} ${c}, 0 ${c-E}, 0 ${u}\n    `,d=`\n        rotate(\n            ${n},\n            ${t/2},\n            ${e/2}\n        )\n        translate(\n            ${(r-t)/2},\n            ${(i-e)/2}\n        )\n    `;return a.setAttribute("d",h),a.setAttribute("transform",d),a}((t=Object.assign(n,t)).width,t.height,t.viewBox[2],t.viewBox[3],t.curvature,t.rotate),r=function(t,e,r){const i=document.createElementNS("http://www.w3.org/2000/svg","svg");return i.setAttribute("viewBox",`0 0 ${t} ${e}`),i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.setAttribute("version","1.1"),i.appendChild(r),i}(t.viewBox[2],t.viewBox[3],e);return r.setAttribute("fill",t.fill),"base64"===t.format?`data:image/svg+xml;base64,${btoa(r.outerHTML)}`:"backgroundImage"===t.format?`url("data:image/svg+xml;utf8,${r.outerHTML.replace(/"/g,"'").replace(/[\r\n%#()<>?[\\\]^`{|}]/g,encodeURIComponent)}")`.replace(/\s+/g," "):r}({format:"SVGNode",viewBox:[0,0,e,e],width:e,height:e,curvature:r,fill:"#000",rotate:0}))),o instanceof Error?{}:(c=s.j.prefixed(a.yL.SQUIRCLE),o.innerHTML=`<clipPath id='${c}'>${o.innerHTML}</clipPath>`,this.squircleCache.set(this.toSquircleCacheKey(e,r),c),this.squirclesContainer.appendChild(o),{clipPath:`url(#${c})`}))}}static toSquircleCacheKey(t,e){return[t,e].join(",")}static get squirclesContainer(){let t;return t=document.querySelector("#"+this.squirclesContainerID)||document.createElement("div"),t.id?t:(t.id=this.squirclesContainerID,t.style.opacity="0",t.style.pointerEvents="none",t.style.position="absolute",document.body.appendChild(t))}static get squirclesContainerID(){return"SQUIRCLES_CONTAINER"}}},9911:(t,e)=>{"use strict";function r(t,e,r){var i;if(void 0===r&&(r={}),!e.codes){e.codes={};for(var s=0;s<e.chars.length;++s)e.codes[e.chars[s]]=s}if(!r.loose&&t.length*e.bits&7)throw new SyntaxError("Invalid padding");for(var n=t.length;"="===t[n-1];)if(--n,!(r.loose||(t.length-n)*e.bits&7))throw new SyntaxError("Invalid padding");for(var a=new(null!=(i=r.out)?i:Uint8Array)(n*e.bits/8|0),o=0,c=0,l=0,u=0;u<n;++u){var E=e.codes[t[u]];if(void 0===E)throw new SyntaxError("Invalid character "+t[u]);c=c<<e.bits|E,(o+=e.bits)>=8&&(o-=8,a[l++]=255&c>>o)}if(o>=e.bits||255&c<<8-o)throw new SyntaxError("Unexpected end of data");return a}function i(t,e,r){void 0===r&&(r={});for(var i=r.pad,s=void 0===i||i,n=(1<<e.bits)-1,a="",o=0,c=0,l=0;l<t.length;++l)for(c=c<<8|255&t[l],o+=8;o>e.bits;)o-=e.bits,a+=e.chars[n&c>>o];if(o&&(a+=e.chars[n&c<<e.bits-o]),s)for(;a.length*e.bits&7;)a+="=";return a}var s={chars:"0123456789ABCDEF",bits:4},n={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bits:5},a={chars:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bits:5},o={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},c={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bits:6},l={parse:function(t,e){return r(t.toUpperCase(),s,e)},stringify:function(t,e){return i(t,s,e)}},u={parse:function(t,e){return void 0===e&&(e={}),r(e.loose?t.toUpperCase().replace(/0/g,"O").replace(/1/g,"L").replace(/8/g,"B"):t,n,e)},stringify:function(t,e){return i(t,n,e)}},E={parse:function(t,e){return r(t,a,e)},stringify:function(t,e){return i(t,a,e)}},h={parse:function(t,e){return r(t,o,e)},stringify:function(t,e){return i(t,o,e)}},d={parse:function(t,e){return r(t,c,e)},stringify:function(t,e){return i(t,c,e)}},f={parse:r,stringify:i};e.YU=l,e.pJ=u,e.eV=E,e.US=h,e.tH=d,e.Y2=f},4651:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>C});var i=r(8310),s=r(3231),n=r(5776),a=r(4302),o=r(3747),c=r(1264);class l{constructor(){}static absolute(t){return t<0?-1*t:t}static distance(t,e){return t>e?t-e:e-t}static limit(t,e=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return t>=e&&t<=r?t:t>=e&&t>r?r:t<e&&t<=r?e:0}static parseFloat(t,e=0){return this.isParseable(t)?parseFloat(t):e}static pickLowest(...t){return(t.length>1?t:t[0]).reduce(((t,e)=>e<t?e:t),Number.MAX_SAFE_INTEGER)}static isMultipleOf(t,e,r=0){return this.toFixed(t/e,r)%1==0}static isParseable(t){return!isNaN(parseFloat(t))}static toFixed(t,e){return this.parseFloat(t.toFixed(e))}}var u=r(729),E=r(3519),h=r(5874),d=r(9911);d.YU,d.pJ,d.eV;const f=d.US;d.tH,d.Y2;var T=r(6818),p=r(5718);class A extends p.m{shape;constructor(t,e){super(t,e),this.shape=e.shape||h.bn.NONE}get isShapeCircle(){return this.shape===h.bn.CIRCLE}get isShapeNone(){return this.shape===h.bn.NONE}get isShapeRectangle(){return this.shape===h.bn.RECTANGLE}get isShapeSquare(){return this.shape===h.bn.SQUARE}get isShapeSquircle(){return this.shape===h.bn.SQUIRCLE}}var g=r(7020);class R extends A{base64;error;orientation;ratio;_source=this.toBase64URI(a.ZC,a.mz);type;constructor(t){super(h.yL.IMAGE,t),this.base64=a.ZC,this.error=!1,this.orientation=t.orientation||h.i5.HORIZONTAL,this.ratio=t.ratio||0,this.type=a.mz,this.source=t.source}onError=t=>{this.error=!0,c.Y.error(this.id,"onError","The error has been set to true.",t),this.update()};getStyle(t){return{...t.style,...g.i.findStyle(this.shape,"number"==typeof t.size?t.size:0),height:t.height||t.size||this.height||void 0,width:t.width||t.size||this.width||void 0}}toBase64URI(t,e){return"data:"+e+";base64,"+t}get elementHeight(){return l.parseFloat(getComputedStyle(this.element).height)}get elementWidth(){return l.parseFloat(getComputedStyle(this.element).width)}get source(){return this._source}get hasError(){return!0===this.error}get hasNoError(){return!1===this.error}get height(){return this.ratio>0?this.elementWidth*this.ratio:0}get width(){return this.ratio>0?this.elementHeight*this.ratio:0}set source(t){(async()=>{switch(!0){case/^(https?:\/\/|\/)/.test(t):let e,r,i,s,n;if(e=T.C.images.get(t),e)return this.source=e;if(r=await(0,u.u)((()=>window.fetch(t))),r instanceof Error)return this.onError();if(i=await(0,u.u)((()=>r.arrayBuffer())),i instanceof Error)return this.onError();if(s=(0,E.tc)((()=>class{static decode(t){return f.parse(t)}static encode(t){return f.stringify(t instanceof Uint8Array?t:new Uint8Array(t))}}.encode(i))),s instanceof Error)return this.onError();if(n=r.headers.get("content-type"),!n)return function(t){(0,E.tc)((()=>t()))}((()=>c.Y.error(this.id,"setSource","Failed to find the content-type header",r.headers)));this.base64=s,this._source=this.toBase64URI(s,n),this.type=n,T.C.images.set(t,this._source);break;case t.includes("base64"):default:this._source=t}this.update()})()}}const I=["id","shape","source"];function m(t){const e=(0,o.N)(),r=(0,n.Ye)((()=>new R({...t,update:e})),[]);return(0,n.d4)((()=>{i.e.updateKeys(r,t,I,e)}),s.g.pickToArray(t,I)),n.ZP.createElement(n.ZP.Fragment,null,r.hasNoError&&n.ZP.createElement(n.HY,null,r.source.length>0&&n.ZP.createElement("img",{...s.g.omit(t,a.WG),id:r.id,onError:e=>{r.onError(e),t.onError&&t.onError(e)},onLoad:e=>{r.update(),t.onLoad&&t.onLoad(e)},src:r.source,style:r.getStyle(t)}),r.source.length<=0&&n.ZP.createElement("div",{...s.g.omit(t,a.WG),id:r.id,style:r.getStyle(t)})),r.hasError&&n.ZP.createElement(n.HY,null,"string"==typeof t.fallback&&n.ZP.createElement("img",{...s.g.omit(t,a.WG),id:r.id,src:t.fallback,style:r.getStyle(t)}),"function"==typeof t.fallback&&n.ZP.createElement(t.fallback,{...s.g.omit(t,a.WG),id:r.id,style:r.getStyle(t)}),void 0===t.fallback&&n.ZP.createElement("div",{...s.g.omit(t,a.WG),id:r.id,style:r.getStyle(t)})))}var S=r(6595);function N(t){const e=t.delay||.05;return n.ZP.createElement("span",{...s.g.omit(t,["delay"])},t.children.split("").map(((t,r)=>n.ZP.createElement(S.m.span,{animate:{opacity:1},initial:{opacity:0},key:r,transition:{delay:r*e}},t))))}var L=r(9735);function C(){return n.ZP.createElement("div",{className:"h-full flex flex-col justify-between space-y-8"},n.ZP.createElement("div",{className:"flex flex-col space-y-8"},n.ZP.createElement("div",{className:"flex items-center gap-4"},n.ZP.createElement(S.m.div,{animate:{opacity:1,rotate:0,scale:1},initial:{opacity:0,rotate:-90,scale:.5}},n.ZP.createElement(m,{alt:"logo",className:"bg-lime-800",shape:h.bn.SQUIRCLE,size:48,source:r(2236)})),n.ZP.createElement(N,{className:"text-2xl text-white"},"Queelag")),n.ZP.createElement("div",null,n.ZP.createElement(S.m.span,{animate:{opacity:1},className:"text-gray-400",initial:{opacity:0}},"This is a personal organization where bleeding edge tools are developed daily for typescript.",n.ZP.createElement("br",null),n.ZP.createElement("br",null),"All of these libraries follow a strict style of coding that makes it easier and faster to write safe code.",n.ZP.createElement("br",null),n.ZP.createElement("br",null),"Typescript is not used loosely but it's strictly enforced to make everything more predictable."))),n.ZP.createElement("div",{className:"hidden sm:flex justify-end"},n.ZP.createElement(L.I,null)))}},2236:(t,e,r)=>{"use strict";t.exports=r.p+"assets/logo.a879737de19d99f3fa94.jpg"}}]);