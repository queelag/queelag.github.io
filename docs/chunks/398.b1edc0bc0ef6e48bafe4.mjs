(self.webpackChunkmangadex_fe=self.webpackChunkmangadex_fe||[]).push([[398],{4398:(t,e,n)=>{"use strict";n.d(e,{g:()=>ge});var r=n(7480),i=n(4741),o=n(7608),a=n(4972),u=n(7461),s=n(6275),l=n(9422),c=n(7468),f=function(t){return function(e){return t(e),null}},d={pan:f((function(t){var e=t.onPan,n=t.onPanStart,r=t.onPanEnd,a=t.onPanSessionStart,u=t.visualElement,f=e||n||r||a,d=(0,i.sO)(null),v=(0,i.qp)(o._).transformPagePoint,p={onSessionStart:a,onStart:n,onMove:e,onEnd:function(t,e){d.current=null,r&&r(t,e)}};(0,i.d4)((function(){null!==d.current&&d.current.updateHandlers(p)})),(0,l.m)(u,"pointerdown",f&&function(t){d.current=new c.H(t,p,{transformPagePoint:v})}),(0,s.z)((function(){return d.current&&d.current.end()}))})),drag:f((function(t){var e=t.dragControls,n=t.visualElement,s=(0,i.qp)(o._).transformPagePoint,l=(0,u.h)((function(){return new a.C({visualElement:n})}));l.setProps((0,r.pi)((0,r.pi)({},t),{transformPagePoint:s})),(0,i.d4)((function(){return e&&e.subscribe(l)}),[l]),(0,i.d4)((function(){return l.mount(n)}),[])}))},v=n(6369),p=n(485),m=n(272),g=n(7898),y=n(8773),h=n(4814),A=n(4645),T=n(3620),P=n(8799),x=n(3276),V=n(7232);function b(t){return"string"==typeof t&&t.startsWith("var(--")}var R=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function E(t,e,n){void 0===n&&(n=1),(0,V.k)(n<=4,'Max CSS variable fallback depth detected in property "'+t+'". This may indicate a circular fallback dependency.');var i=(0,r.CR)(function(t){var e=R.exec(t);if(!e)return[,];var n=(0,r.CR)(e,3);return[n[1],n[2]]}(t),2),o=i[0],a=i[1];if(o){var u=window.getComputedStyle(e).getPropertyValue(o);return u?u.trim():b(a)?E(a,e,n+1):a}}function S(t,e){return t/(e.max-e.min)*100}var C="_$css",L={process:function(t,e,n){var r=n.target;if("string"==typeof t){if(!T.px.test(t))return t;t=parseFloat(t)}return S(t,r.x)+"% "+S(t,r.y)+"%"}},w={borderRadius:(0,r.pi)((0,r.pi)({},L),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomLeftRadius:L,borderBottomRightRadius:L,boxShadow:{process:function(t,e){var n=e.delta,r=e.treeScale,i=t,o=t.includes("var("),a=[];o&&(t=t.replace(R,(function(t){return a.push(t),C})));var u=P.P.parse(t);if(u.length>5)return i;var s=P.P.createTransformer(t),l="number"!=typeof u[0]?1:0,c=n.x.scale*r.x,f=n.y.scale*r.y;u[0+l]/=c,u[1+l]/=f;var d=(0,x.C)(c,f,.5);"number"==typeof u[2+l]&&(u[2+l]/=d),"number"==typeof u[3+l]&&(u[3+l]/=d);var v=s(u);if(o){var p=0;v=v.replace(C,(function(){var t=a[p];return p++,t}))}return v}}},B=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.frameTarget=(0,h.VZ)(),e.currentAnimationTarget=(0,h.VZ)(),e.isAnimating={x:!1,y:!1},e.stopAxisAnimation={x:void 0,y:void 0},e.isAnimatingTree=!1,e.animate=function(t,n,i){void 0===i&&(i={});var o=i.originBox,a=i.targetBox,u=i.visibilityAction,s=i.shouldStackAnimate,l=i.onComplete,c=i.prevParent,f=(0,r._T)(i,["originBox","targetBox","visibilityAction","shouldStackAnimate","onComplete","prevParent"]),d=e.props,p=d.visualElement,y=d.layout;if(!1===s)return e.isAnimatingTree=!1,e.safeToRemove();if(!e.isAnimatingTree||!0===s){s&&(e.isAnimatingTree=!0),n=o||n,t=a||t;var h=!1,A=p.getProjectionParent();if(A){var T=A.prevViewportBox,P=A.getLayoutState().layout;c&&(a&&(P=c.getLayoutState().layout),o&&!(0,m.nf)(c,A)&&c.prevViewportBox&&(T=c.prevViewportBox)),T&&H(c,o,a)&&(h=!0,n=(0,m.Rg)(T,n),t=(0,m.Rg)(P,t))}var x=j(n,t),V=(0,v.U)((function(i){var o,a;if("position"===y){var s=t[i].max-t[i].min;n[i].max=n[i].min+s}if(!p.projection.isTargetLocked)return void 0===u?x?e.animateAxis(i,t[i],n[i],(0,r.pi)((0,r.pi)({},f),{isRelative:h})):(null===(a=(o=e.stopAxisAnimation)[i])||void 0===a||a.call(o),p.setProjectionTargetAxis(i,t[i].min,t[i].max,h)):void p.setVisibility(u===g.c.Show)}));return p.syncRender(),Promise.all(V).then((function(){e.isAnimatingTree=!1,l&&l(),p.notifyLayoutAnimationComplete()}))}},e}return(0,r.ZT)(e,t),e.prototype.componentDidMount=function(){var t=this,e=this.props.visualElement;e.animateMotionValue=p.b8,e.enableLayoutProjection(),this.unsubLayoutReady=e.onLayoutUpdate(this.animate),e.layoutSafeToRemove=function(){return t.safeToRemove()},(0,A.P)(w)},e.prototype.componentWillUnmount=function(){var t=this;this.unsubLayoutReady(),(0,v.U)((function(e){var n,r;return null===(r=(n=t.stopAxisAnimation)[e])||void 0===r?void 0:r.call(n)}))},e.prototype.animateAxis=function(t,e,n,r){var i,o,a=this,u=void 0===r?{}:r,s=u.transition,l=u.isRelative;if(!this.isAnimating[t]||!U(e,this.currentAnimationTarget[t])){null===(o=(i=this.stopAxisAnimation)[t])||void 0===o||o.call(i),this.isAnimating[t]=!0;var c=this.props.visualElement,f=this.frameTarget[t],d=c.getProjectionAnimationProgress()[t];d.clearListeners(),d.set(0),d.set(0);var v=function(){var r=d.get()/1e3;(0,m.BJ)(f,n,e,r),c.setProjectionTargetAxis(t,f.min,f.max,l)};v();var g=d.onChange(v);this.stopAxisAnimation[t]=function(){a.isAnimating[t]=!1,d.stop(),g()},this.currentAnimationTarget[t]=e;var y=s||c.getDefaultTransition()||M;return(0,p.b8)("x"===t?"layoutX":"layoutY",d,1e3,y&&(0,p.ev)(y,"layout")).then(this.stopAxisAnimation[t])}},e.prototype.safeToRemove=function(){var t,e;null===(e=(t=this.props).safeToRemove)||void 0===e||e.call(t)},e.prototype.render=function(){return null},e}(i.wA);function j(t,e){return!(F(t)||F(e)||U(t.x,e.x)&&U(t.y,e.y))}var k={min:0,max:0};function F(t){return U(t.x,k)&&U(t.y,k)}function U(t,e){return t.min===e.min&&t.max===e.max}var M={duration:.45,ease:[.4,0,.1,1]};function H(t,e,n){return t||!t&&!(e||n)}var D=n(896),O=n(3600),Z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r.ZT)(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.syncLayout,n=t.framerSyncLayout,r=t.visualElement;(0,D.Md)(e)&&e.register(r),(0,D.Md)(n)&&n.register(r),r.onUnmount((function(){(0,D.Md)(e)&&e.remove(r),(0,D.Md)(n)&&n.remove(r)}))},e.prototype.getSnapshotBeforeUpdate=function(){var t=this.props,e=t.syncLayout,n=t.visualElement;return(0,D.Md)(e)?e.syncUpdate():((0,O.x7)(n),e.add(n)),null},e.prototype.componentDidUpdate=function(){var t=this.props.syncLayout;(0,D.Md)(t)||t.flush()},e.prototype.render=function(){return null},e}(i.ZP.Component),I={measureLayout:function(t){var e=(0,i.qp)(D.WH),n=(0,i.qp)(D.bg);return i.ZP.createElement(Z,(0,r.pi)({},t,{syncLayout:e,framerSyncLayout:n}))},layoutAnimation:function(t){var e=(0,r.CR)((0,y.oO)(),2)[1];return i.az(B,(0,r.pi)({},t,{safeToRemove:e}))}},_=n(5243),z=n(9743),Y=n(3973);function q(t,e){if(!Array.isArray(e))return!1;var n=e.length;if(n!==t.length)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}var N=n(731),K=n(67),$=n(9680),W=n(7883),J=n(4337),X=function(t){return function(e){return e.test(t)}},G=[J.Rx,T.px,T.aQ,T.RW,T.vw,T.vh,{test:function(t){return"auto"===t},parse:function(t){return t}}],Q=function(t){return G.find(X(t))},tt=(0,r.ev)((0,r.ev)([],(0,r.CR)(G)),[W.$,P.P]),et=n(763);function nt(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,(0,K.B)(n))}function rt(t,e){if(e)return(e[t]||e.default||e).from}function it(t,e,n){var i;void 0===n&&(n={});var o=(0,et.x5)(t,e,n.custom),a=(o||{}).transition,u=void 0===a?t.getDefaultTransition()||{}:a;n.transitionOverride&&(u=n.transitionOverride);var s=o?function(){return ot(t,o,n)}:function(){return Promise.resolve()},l=(null===(i=t.variantChildren)||void 0===i?void 0:i.size)?function(i){void 0===i&&(i=0);var o=u.delayChildren,a=void 0===o?0:o,s=u.staggerChildren,l=u.staggerDirection;return function(t,e,n,i,o,a){void 0===n&&(n=0),void 0===i&&(i=0),void 0===o&&(o=1);var u=[],s=(t.variantChildren.size-1)*i,l=1===o?function(t){return void 0===t&&(t=0),t*i}:function(t){return void 0===t&&(t=0),s-t*i};return Array.from(t.variantChildren).sort(at).forEach((function(t,i){u.push(it(t,e,(0,r.pi)((0,r.pi)({},a),{delay:n+l(i)})).then((function(){return t.notifyAnimationComplete(e)})))})),Promise.all(u)}(t,e,a+i,s,l,n)}:function(){return Promise.resolve()},c=u.when;if(c){var f=(0,r.CR)("beforeChildren"===c?[s,l]:[l,s],2),d=f[0],v=f[1];return d().then(v)}return Promise.all([s(),l(n.delay)])}function ot(t,e,n){var i,o=void 0===n?{}:n,a=o.delay,u=void 0===a?0:a,s=o.transitionOverride,l=o.type,c=t.makeTargetAnimatable(e),f=c.transition,d=void 0===f?t.getDefaultTransition():f,v=c.transitionEnd,m=(0,r._T)(c,["transition","transitionEnd"]);s&&(d=s);var g=[],y=l&&(null===(i=t.animationState)||void 0===i?void 0:i.getState()[l]);for(var h in m){var A=t.getValue(h),T=m[h];if(!(!A||void 0===T||y&&ut(y,h))){var P=(0,p.b8)(h,A,T,(0,r.pi)({delay:u},d));g.push(P)}}return Promise.all(g).then((function(){v&&function(t,e){var n=(0,et.x5)(t,e),i=n?t.makeTargetAnimatable(n,!1):{},o=i.transitionEnd,a=void 0===o?{}:o;i.transition;var u=(0,r._T)(i,["transitionEnd","transition"]);for(var s in u=(0,r.pi)((0,r.pi)({},u),a))nt(t,s,(0,N.Y)(u[s]))}(t,v)}))}function at(t,e){return t.sortNodePosition(e)}function ut(t,e){var n=t.protectedKeys,r=t.needsAnimating,i=n.hasOwnProperty(e)&&!0!==r[e];return r[e]=!1,i}var st=n(6122),lt=[st.r.Animate,st.r.Hover,st.r.Tap,st.r.Drag,st.r.Focus,st.r.Exit],ct=(0,r.ev)([],(0,r.CR)(lt)).reverse(),ft=lt.length;function dt(t){var e,n=function(t){return function(e){return Promise.all(e.map((function(e){var n=e.animation,r=e.options;return function(t,e,n){var r;if(void 0===n&&(n={}),t.notifyAnimationStart(),Array.isArray(e)){var i=e.map((function(e){return it(t,e,n)}));r=Promise.all(i)}else if("string"==typeof e)r=it(t,e,n);else{var o="function"==typeof e?(0,et.x5)(t,e,n.custom):e;r=ot(t,o,n)}return r.then((function(){return t.notifyAnimationComplete(e)}))}(t,n,r)})))}}(t),i=((e={})[st.r.Animate]=vt(!0),e[st.r.Hover]=vt(),e[st.r.Tap]=vt(),e[st.r.Drag]=vt(),e[st.r.Focus]=vt(),e[st.r.Exit]=vt(),e),o={},a=!0,u=function(e,n){var i=(0,et.x5)(t,n);if(i){i.transition;var o=i.transitionEnd,a=(0,r._T)(i,["transition","transitionEnd"]);e=(0,r.pi)((0,r.pi)((0,r.pi)({},e),a),o)}return e};function s(e,s){for(var l,c=t.getProps(),f=t.getVariantContext(!0)||{},d=[],v=new Set,p={},m=1/0,g=function(n){var o=ct[n],g=i[o],y=null!==(l=c[o])&&void 0!==l?l:f[o],h=(0,et.$L)(y),A=o===s?g.isActive:null;!1===A&&(m=n);var T=y===f[o]&&y!==c[o]&&h;if(T&&a&&t.manuallyAnimateOnMount&&(T=!1),g.protectedKeys=(0,r.pi)({},p),!g.isActive&&null===A||!y&&!g.prevProp||(0,_.H)(y)||"boolean"==typeof y)return"continue";var P=function(t,e){return"string"==typeof e?e!==t:!!(0,et.A0)(e)&&!q(e,t)}(g.prevProp,y)||o===s&&g.isActive&&!T&&h||n>m&&h,x=Array.isArray(y)?y:[y],V=x.reduce(u,{});!1===A&&(V={});var b=g.prevResolvedValues,R=void 0===b?{}:b,E=(0,r.pi)((0,r.pi)({},R),V),S=function(t){P=!0,v.delete(t),g.needsAnimating[t]=!0};for(var C in E){var L=V[C],w=R[C];p.hasOwnProperty(C)||(L!==w?(0,Y.C)(L)&&(0,Y.C)(w)?q(L,w)?g.protectedKeys[C]=!0:S(C):void 0!==L?S(C):v.add(C):void 0!==L&&v.has(C)?S(C):g.protectedKeys[C]=!0)}g.prevProp=y,g.prevResolvedValues=V,g.isActive&&(p=(0,r.pi)((0,r.pi)({},p),V)),a&&t.blockInitialAnimation&&(P=!1),P&&!T&&d.push.apply(d,(0,r.ev)([],(0,r.CR)(x.map((function(t){return{animation:t,options:(0,r.pi)({type:o},e)}})))))},y=0;y<ft;y++)g(y);if(o=(0,r.pi)({},p),v.size){var h={};v.forEach((function(e){var n=t.getBaseTarget(e);void 0!==n&&(h[e]=n)})),d.push({animation:h})}var A=Boolean(d.length);return a&&!1===c.initial&&!t.manuallyAnimateOnMount&&(A=!1),a=!1,A?n(d):Promise.resolve()}return{isAnimated:function(t){return void 0!==o[t]},animateChanges:s,setActive:function(e,n,r){var o;return i[e].isActive===n?Promise.resolve():(null===(o=t.variantChildren)||void 0===o||o.forEach((function(t){var r;return null===(r=t.animationState)||void 0===r?void 0:r.setActive(e,n)})),i[e].isActive=n,s(r,e))},setAnimateFunction:function(e){n=e(t)},getState:function(){return i}}}function vt(t){return void 0===t&&(t=!1),{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}var pt={animation:f((function(t){var e=t.visualElement,n=t.animate;e.animationState||(e.animationState=dt(e)),(0,_.H)(n)&&(0,i.d4)((function(){return n.subscribe(e)}),[n])})),exit:f((function(t){var e=t.custom,n=t.visualElement,o=(0,r.CR)((0,y.oO)(),2),a=o[0],u=o[1],s=(0,i.qp)(z.O);(0,i.d4)((function(){var t,r,i=null===(t=n.animationState)||void 0===t?void 0:t.setActive(st.r.Exit,!a,{custom:null!==(r=null==s?void 0:s.custom)&&void 0!==r?r:e});!a&&(null==i||i.then(u))}),[a])}))},mt=n(945),gt=n(8556),yt=n(2386);function ht(t,e,n){return function(r,i){var o;(0,gt.N)(r)&&!(0,yt.gD)()&&(null==n||n(r,i),null===(o=t.animationState)||void 0===o||o.setActive(st.r.Hover,e))}}var At=function(t,e){return!!e&&(t===e||At(t,e.parentElement))},Tt=n(6978),Pt={tap:f((function(t){var e=t.onTap,n=t.onTapStart,r=t.onTapCancel,o=t.whileTap,a=t.visualElement,u=e||n||r||o,c=(0,i.sO)(!1),f=(0,i.sO)(null);function d(){var t;null===(t=f.current)||void 0===t||t.call(f),f.current=null}function v(){var t;return d(),c.current=!1,null===(t=a.animationState)||void 0===t||t.setActive(st.r.Tap,!1),!(0,yt.gD)()}function p(t,n){v()&&(At(a.getInstance(),t.target)?null==e||e(t,n):null==r||r(t,n))}function m(t,e){v()&&(null==r||r(t,e))}(0,l.m)(a,"pointerdown",u?function(t,e){var r;d(),c.current||(c.current=!0,f.current=(0,Tt.z)((0,l.a)(window,"pointerup",p),(0,l.a)(window,"pointercancel",m)),null==n||n(t,e),null===(r=a.animationState)||void 0===r||r.setActive(st.r.Tap,!0))}:void 0),(0,s.z)(d)})),focus:f((function(t){var e=t.whileFocus,n=t.visualElement;(0,mt.p)(n,"focus",e?function(){var t;null===(t=n.animationState)||void 0===t||t.setActive(st.r.Focus,!0)}:void 0),(0,mt.p)(n,"blur",e?function(){var t;null===(t=n.animationState)||void 0===t||t.setActive(st.r.Focus,!1)}:void 0)})),hover:f((function(t){var e=t.onHoverStart,n=t.onHoverEnd,r=t.whileHover,i=t.visualElement;(0,l.m)(i,"pointerenter",e||r?ht(i,!0,e):void 0),(0,l.m)(i,"pointerleave",n||r?ht(i,!1,n):void 0)}))},xt=n(7212),Vt=n(3101),bt=n(3058),Rt=n(2701);function Et(){return{isHydrated:!1,layout:(0,h.VZ)(),layoutCorrected:(0,h.VZ)(),treeScale:{x:1,y:1},delta:(0,h.pY)(),deltaFinal:(0,h.pY)(),deltaTransform:""}}var St=Et();function Ct(t,e,n){var r=t.x,i=t.y,o="translate3d("+r.translate/e.x+"px, "+i.translate/e.y+"px, 0) ";if(n){var a=n.rotate,u=n.rotateX,s=n.rotateY;a&&(o+="rotate("+a+") "),u&&(o+="rotateX("+u+") "),s&&(o+="rotateY("+s+") ")}return o+="scale("+r.scale+", "+i.scale+")",n||o!==wt?o:""}function Lt(t){var e=t.deltaFinal;return 100*e.x.origin+"% "+100*e.y.origin+"% 0"}var wt=Ct(St.delta,St.treeScale,{x:1,y:1}),Bt=n(3768),jt=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","SetAxisTarget","Unmount"],kt=n(7323),Ft=n(3744),Ut=function(){function t(){this.children=[],this.isDirty=!1}return t.prototype.add=function(t){(0,kt.y)(this.children,t),this.isDirty=!0},t.prototype.remove=function(t){(0,kt.c)(this.children,t),this.isDirty=!0},t.prototype.forEach=function(t){this.isDirty&&this.children.sort(Ft._),this.isDirty=!1,this.children.forEach(t)},t}(),Mt=n(7679),Ht=function(t){var e=t.treeType,n=void 0===e?"":e,i=t.build,o=t.getBaseTarget,a=t.makeTargetAnimatable,u=t.measureViewportBox,s=t.render,l=t.readValueFromInstance,c=t.resetTransform,f=t.restoreTransform,d=t.removeValueFromRenderState,p=t.sortNodePosition,y=t.scrapeMotionValuesFromProps;return function(t,e){var A=t.parent,T=t.props,P=t.presenceId,x=t.blockInitialAnimation,V=t.visualState;void 0===e&&(e={});var b,R,E,S,C,L,w=V.latestValues,B=V.renderState,j=function(){var t=jt.map((function(){return new Bt.L})),e={},n={clearAllListeners:function(){return t.forEach((function(t){return t.clear()}))},updatePropListeners:function(t){return jt.forEach((function(r){var i;null===(i=e[r])||void 0===i||i.call(e);var o="on"+r,a=t[o];a&&(e[r]=n[o](a))}))}};return t.forEach((function(t,e){n["on"+jt[e]]=function(e){return t.add(e)},n["notify"+jt[e]]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.notify.apply(t,(0,r.ev)([],(0,r.CR)(e)))}})),n}(),k={isEnabled:!1,isHydrated:!1,isTargetLocked:!1,target:(0,h.VZ)(),targetFinal:(0,h.VZ)()},F=k,U=w,M=Et(),H=!1,D=new Map,O=new Map,Z={},I=(0,r.pi)({},w);function _(){b&&(G.isProjectionReady()&&((0,Vt.PU)(F.targetFinal,F.target,U),(0,bt.Ji)(M.deltaFinal,M.layoutCorrected,F.targetFinal,w)),z(),s(b,B))}function z(){var t=w;if(S&&S.isActive()){var n=S.getCrossfadeState(G);n&&(t=n)}i(G,B,t,F,M,e,T)}function Y(){j.notifyUpdate(w)}function q(){G.layoutTree.forEach(Ot)}var N=y(T);for(var $ in N){var W=N[$];void 0!==w[$]&&(0,Rt.i)(W)&&W.set(w[$],!1)}var J=(0,et.O6)(T),X=(0,et.e8)(T),G=(0,r.pi)((0,r.pi)({treeType:n,current:null,depth:A?A.depth+1:0,parent:A,children:new Set,path:A?(0,r.ev)((0,r.ev)([],(0,r.CR)(A.path)),[A]):[],layoutTree:A?A.layoutTree:new Ut,presenceId:P,projection:k,variantChildren:X?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(null==A?void 0:A.isMounted()),blockInitialAnimation:x,isMounted:function(){return Boolean(b)},mount:function(t){b=G.current=t,G.pointTo(G),X&&A&&!J&&(L=null==A?void 0:A.addVariantChild(G)),null==A||A.children.add(G)},unmount:function(){xt.qY.update(Y),xt.qY.render(_),xt.qY.preRender(G.updateLayoutProjection),O.forEach((function(t){return t()})),G.stopLayoutAnimation(),G.layoutTree.remove(G),null==L||L(),null==A||A.children.delete(G),null==E||E(),j.clearAllListeners()},addVariantChild:function(t){var e,n=G.getClosestVariantNode();if(n)return null===(e=n.variantChildren)||void 0===e||e.add(t),function(){return n.variantChildren.delete(t)}},sortNodePosition:function(t){return p&&n===t.treeType?p(G.getInstance(),t.getInstance()):0},getClosestVariantNode:function(){return X?G:null==A?void 0:A.getClosestVariantNode()},scheduleUpdateLayoutProjection:A?A.scheduleUpdateLayoutProjection:function(){return xt.ZP.preRender(G.updateTreeLayoutProjection,!1,!0)},getLayoutId:function(){return T.layoutId},getInstance:function(){return b},getStaticValue:function(t){return w[t]},setStaticValue:function(t,e){return w[t]=e},getLatestValues:function(){return w},setVisibility:function(t){G.isVisible!==t&&(G.isVisible=t,G.scheduleRender())},makeTargetAnimatable:function(t,e){return void 0===e&&(e=!0),a(G,t,T,e)},addValue:function(t,e){G.hasValue(t)&&G.removeValue(t),D.set(t,e),w[t]=e.get(),function(t,e){var n=e.onChange((function(e){w[t]=e,T.onUpdate&&xt.ZP.update(Y,!1,!0)})),r=e.onRenderRequest(G.scheduleRender);O.set(t,(function(){n(),r()}))}(t,e)},removeValue:function(t){var e;D.delete(t),null===(e=O.get(t))||void 0===e||e(),O.delete(t),delete w[t],d(t,B)},hasValue:function(t){return D.has(t)},getValue:function(t,e){var n=D.get(t);return void 0===n&&void 0!==e&&(n=(0,K.B)(e),G.addValue(t,n)),n},forEachValue:function(t){return D.forEach(t)},readValue:function(t){var n;return null!==(n=w[t])&&void 0!==n?n:l(b,t,e)},setBaseTarget:function(t,e){I[t]=e},getBaseTarget:function(t){if(o){var e=o(T,t);if(void 0!==e&&!(0,Rt.i)(e))return e}return I[t]}},j),{build:function(){return z(),B},scheduleRender:function(){xt.ZP.render(_,!1,!0)},syncRender:_,setProps:function(t){T=t,j.updatePropListeners(t),Z=function(t,e,n){var r;for(var i in e){var o=e[i],a=n[i];if((0,Rt.i)(o))t.addValue(i,o);else if((0,Rt.i)(a))t.addValue(i,(0,K.B)(o));else if(a!==o)if(t.hasValue(i)){var u=t.getValue(i);!u.hasAnimated&&u.set(o)}else t.addValue(i,(0,K.B)(null!==(r=t.getStaticValue(i))&&void 0!==r?r:o))}for(var i in n)void 0===e[i]&&t.removeValue(i);return e}(G,y(T),Z)},getProps:function(){return T},getVariant:function(t){var e;return null===(e=T.variants)||void 0===e?void 0:e[t]},getDefaultTransition:function(){return T.transition},getVariantContext:function(t){if(void 0===t&&(t=!1),t)return null==A?void 0:A.getVariantContext();if(!J){var e=(null==A?void 0:A.getVariantContext())||{};return void 0!==T.initial&&(e.initial=T.initial),e}for(var n={},r=0;r<_t;r++){var i=It[r],o=T[i];((0,et.$L)(o)||!1===o)&&(n[i]=o)}return n},enableLayoutProjection:function(){k.isEnabled=!0,G.layoutTree.add(G)},lockProjectionTarget:function(){k.isTargetLocked=!0},unlockProjectionTarget:function(){G.stopLayoutAnimation(),k.isTargetLocked=!1},getLayoutState:function(){return M},setCrossfader:function(t){S=t},isProjectionReady:function(){return k.isEnabled&&k.isHydrated&&M.isHydrated},startLayoutAnimation:function(t,e,n){void 0===n&&(n=!1);var r=G.getProjectionAnimationProgress()[t],i=n?k.relativeTarget[t]:k.target[t],o=i.min,a=i.max-o;return r.clearListeners(),r.set(o),r.set(o),r.onChange((function(e){G.setProjectionTargetAxis(t,e,e+a,n)})),G.animateMotionValue(t,r,0,e)},stopLayoutAnimation:function(){(0,v.U)((function(t){return G.getProjectionAnimationProgress()[t].stop()}))},measureViewportBox:function(t){void 0===t&&(t=!0);var n=u(b,e);return t||(0,Vt.mg)(n,w),n},getProjectionAnimationProgress:function(){return C||(C={x:(0,K.B)(0),y:(0,K.B)(0)}),C},setProjectionTargetAxis:function(t,e,n,r){var i;void 0===r&&(r=!1),r?(k.relativeTarget||(k.relativeTarget=(0,h.VZ)()),i=k.relativeTarget[t]):(k.relativeTarget=void 0,i=k.target[t]),k.isHydrated=!0,i.min=e,i.max=n,H=!0,j.notifySetAxisTarget()},rebaseProjectionTarget:function(t,e){void 0===e&&(e=M.layout);var n=G.getProjectionAnimationProgress(),r=n.x,i=n.y,o=!(k.relativeTarget||k.isTargetLocked||r.isAnimating()||i.isAnimating());(t||o)&&(0,v.U)((function(t){var n=e[t],r=n.min,i=n.max;G.setProjectionTargetAxis(t,r,i)}))},notifyLayoutReady:function(t){!function(t){var e=t.getProjectionParent();if(e){var n=(0,m.Rg)(e.getLayoutState().layout,t.getLayoutState().layout);(0,v.U)((function(e){t.setProjectionTargetAxis(e,n[e].min,n[e].max,!0)}))}else t.rebaseProjectionTarget()}(G),G.notifyLayoutUpdate(M.layout,G.prevViewportBox||M.layout,t)},resetTransform:function(){return c(G,b,T)},restoreTransform:function(){return f(b,B)},updateLayoutProjection:function(){if(G.isProjectionReady()){var t=M.delta,e=M.treeScale,n=e.x,r=e.y,i=M.deltaTransform;!function(t,e,n,r){var i=t.delta,o=t.layout,a=t.layoutCorrected,u=t.treeScale,s=e.target;(0,Vt.c6)(a,o),(0,Vt.YY)(a,u,n),(0,bt.Ji)(i,a,s,r)}(M,F,G.path,w),H&&G.notifyViewportBoxUpdate(F.target,t),H=!1;var o=Ct(t,e);o===i&&n===e.x&&r===e.y||G.scheduleRender(),M.deltaTransform=o}},updateTreeLayoutProjection:function(){G.layoutTree.forEach(Dt),xt.ZP.preRender(q,!1,!0)},getProjectionParent:function(){if(void 0===R){for(var t=!1,e=G.path.length-1;e>=0;e--){var n=G.path[e];if(n.projection.isEnabled){t=n;break}}R=t}return R},resolveRelativeTargetBox:function(){var t=G.getProjectionParent();if(k.relativeTarget&&t&&((0,bt.tf)(k,t.projection),(0,Mt.V)(t))){var e=k.target;(0,Vt.PU)(e,e,t.getLatestValues())}},shouldResetTransform:function(){return Boolean(T._layoutResetTransform)},pointTo:function(t){F=t.projection,U=t.getLatestValues(),null==E||E(),E=(0,Tt.z)(t.onSetAxisTarget(G.scheduleUpdateLayoutProjection),t.onLayoutAnimationComplete((function(){var t;G.isPresent?G.presence=g.z.Present:null===(t=G.layoutSafeToRemove)||void 0===t||t.call(G)})))},isPresent:!0,presence:g.z.Entering});return G}};function Dt(t){t.resolveRelativeTargetBox()}function Ot(t){t.updateLayoutProjection()}var Zt,It=(0,r.ev)(["initial"],(0,r.CR)(lt)),_t=It.length,zt=n(8021),Yt=n(3680),qt=n(5564),Nt=n(3396),Kt=new Set(["width","height","top","left","right","bottom","x","y"]),$t=function(t){return Kt.has(t)},Wt=function(t,e){t.set(e,!1),t.set(e)},Jt=function(t){return t===J.Rx||t===T.px};!function(t){t.width="width",t.height="height",t.left="left",t.right="right",t.top="top",t.bottom="bottom"}(Zt||(Zt={}));var Xt=function(t,e){return parseFloat(t.split(", ")[e])},Gt=function(t,e){return function(n,r){var i=r.transform;if("none"===i||!i)return 0;var o=i.match(/^matrix3d\((.+)\)$/);if(o)return Xt(o[1],e);var a=i.match(/^matrix\((.+)\)$/);return a?Xt(a[1],t):0}},Qt=new Set(["x","y","z"]),te=Nt.Gl.filter((function(t){return!Qt.has(t)})),ee={width:function(t){var e=t.x;return e.max-e.min},height:function(t){var e=t.y;return e.max-e.min},top:function(t,e){var n=e.top;return parseFloat(n)},left:function(t,e){var n=e.left;return parseFloat(n)},bottom:function(t,e){var n=t.y,r=e.top;return parseFloat(r)+(n.max-n.min)},right:function(t,e){var n=t.x,r=e.left;return parseFloat(r)+(n.max-n.min)},x:Gt(4,13),y:Gt(5,14)};function ne(t,e,n,i){return function(t){return Object.keys(t).some($t)}(e)?function(t,e,n,i){void 0===n&&(n={}),void 0===i&&(i={}),e=(0,r.pi)({},e),i=(0,r.pi)({},i);var o=Object.keys(e).filter($t),a=[],u=!1,s=[];if(o.forEach((function(r){var o=t.getValue(r);if(t.hasValue(r)){var l,c=n[r],f=e[r],d=Q(c);if((0,Y.C)(f))for(var v=f.length,p=null===f[0]?1:0;p<v;p++)l?(0,V.k)(Q(f[p])===l,"All keyframes must be of the same type"):(l=Q(f[p]),(0,V.k)(l===d||Jt(d)&&Jt(l),"Keyframes must be of the same dimension as the current value"));else l=Q(f);if(d!==l)if(Jt(d)&&Jt(l)){var m=o.get();"string"==typeof m&&o.set(parseFloat(m)),"string"==typeof f?e[r]=parseFloat(f):Array.isArray(f)&&l===T.px&&(e[r]=f.map(parseFloat))}else(null==d?void 0:d.transform)&&(null==l?void 0:l.transform)&&(0===c||0===f)?0===c?o.set(l.transform(c)):e[r]=d.transform(f):(u||(a=function(t){var e=[];return te.forEach((function(n){var r=t.getValue(n);void 0!==r&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),e.length&&t.syncRender(),e}(t),u=!0),s.push(r),i[r]=void 0!==i[r]?i[r]:e[r],Wt(o,f))}})),s.length){var l=function(t,e,n){var r=e.measureViewportBox(),i=e.getInstance(),o=getComputedStyle(i),a=o.display,u={top:o.top,left:o.left,bottom:o.bottom,right:o.right,transform:o.transform};"none"===a&&e.setStaticValue("display",t.display||"block"),e.syncRender();var s=e.measureViewportBox();return n.forEach((function(n){var i=e.getValue(n);Wt(i,ee[n](r,u)),t[n]=ee[n](s,o)})),t}(e,t,s);return a.length&&a.forEach((function(e){var n=(0,r.CR)(e,2),i=n[0],o=n[1];t.getValue(i).set(o)})),t.syncRender(),{target:l,transitionEnd:i}}return{target:e,transitionEnd:i}}(t,e,n,i):{target:e,transitionEnd:i}}var re=n(3859),ie=n(1843),oe=n(4878),ae={treeType:"dom",readValueFromInstance:function(t,e){if((0,Nt._c)(e)){var n=(0,oe.A)(e);return n&&n.default||0}var r,i=(r=t,window.getComputedStyle(r));return((0,qt.o)(e)?i.getPropertyValue(e):i[e])||0},sortNodePosition:function(t,e){return 2&t.compareDocumentPosition(e)?1:-1},getBaseTarget:function(t,e){var n;return null===(n=t.style)||void 0===n?void 0:n[e]},measureViewportBox:function(t,e){var n=e.transformPagePoint;return(0,zt.A)(t,n)},resetTransform:function(t,e,n){var r=n.transformTemplate;e.style.transform=r?r({},""):"none",t.scheduleRender()},restoreTransform:function(t,e){t.style.transform=e.style.transform},removeValueFromRenderState:function(t,e){var n=e.vars,r=e.style;delete n[t],delete r[t]},makeTargetAnimatable:function(t,e,n,i){var o=n.transformValues;void 0===i&&(i=!0);var a=e.transition,u=e.transitionEnd,s=(0,r._T)(e,["transition","transitionEnd"]),l=function(t,e,n){var r,i,o={};for(var a in t)o[a]=null!==(r=rt(a,e))&&void 0!==r?r:null===(i=n.getValue(a))||void 0===i?void 0:i.get();return o}(s,a||{},t);if(o&&(u&&(u=o(u)),s&&(s=o(s)),l&&(l=o(l))),i){!function(t,e,n){var r,i,o,a,u,s=Object.keys(e).filter((function(e){return!t.hasValue(e)})),l=s.length;if(l)for(var c=0;c<l;c++){var f=s[c],d=e[f],v=null;Array.isArray(d)&&(v=d[0]),null===v&&(v=null!==(i=null!==(r=n[f])&&void 0!==r?r:t.readValue(f))&&void 0!==i?i:e[f]),null!=v&&("string"==typeof v&&/^\-?\d*\.?\d+$/.test(v)?v=parseFloat(v):(u=v,!tt.find(X(u))&&P.P.test(d)&&(v=(0,$.T)(f,d))),t.addValue(f,(0,K.B)(v)),null!==(o=(a=n)[f])&&void 0!==o||(a[f]=v),t.setBaseTarget(f,v))}}(t,s,l);var c=function(t,e,n,i){var o=function(t,e,n){var i,o=(0,r._T)(e,[]),a=t.getInstance();if(!(a instanceof HTMLElement))return{target:o,transitionEnd:n};for(var u in n&&(n=(0,r.pi)({},n)),t.forEachValue((function(t){var e=t.get();if(b(e)){var n=E(e,a);n&&t.set(n)}})),o){var s=o[u];if(b(s)){var l=E(s,a);l&&(o[u]=l,n&&(null!==(i=n[u])&&void 0!==i||(n[u]=s)))}}return{target:o,transitionEnd:n}}(t,e,i);return ne(t,e=o.target,n,i=o.transitionEnd)}(t,s,l,u);u=c.transitionEnd,s=c.target}return(0,r.pi)({transition:a,transitionEnd:u},s)},scrapeMotionValuesFromProps:re.U,build:function(t,e,n,r,i,o,a){void 0!==t.isVisible&&(e.style.visibility=t.isVisible?"visible":"hidden");var u=r.isEnabled&&i.isHydrated;(0,Yt.r)(e,n,r,i,o,a.transformTemplate,u?Ct:void 0,u?Lt:void 0)},render:ie.N},ue=Ht(ae),se=n(7046),le=n(9064),ce=n(972),fe=n(1228),de=n(5834),ve=Ht((0,r.pi)((0,r.pi)({},ae),{getBaseTarget:function(t,e){return t[e]},readValueFromInstance:function(t,e){var n;return(0,Nt._c)(e)?(null===(n=(0,oe.A)(e))||void 0===n?void 0:n.default)||0:(e=fe.s.has(e)?e:(0,ce.D)(e),t.getAttribute(e))},scrapeMotionValuesFromProps:se.U,build:function(t,e,n,r,i,o,a){var u=r.isEnabled&&i.isHydrated;(0,le.i)(e,n,r,i,o,a.transformTemplate,u?Ct:void 0,u?Lt:void 0)},render:de.K})),pe=n(27),me=(0,r.pi)((0,r.pi)({renderer:function(t,e){return(0,pe.q)(t)?ve(e,{enableHardwareAcceleration:!1}):ue(e,{enableHardwareAcceleration:!0})}},pt),Pt),ge=(0,r.pi)((0,r.pi)((0,r.pi)({},me),d),I)}}]);