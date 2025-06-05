(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qa={exports:{}},pi={},ba={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),gc=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Cc=Symbol.for("react.memo"),zc=Symbol.for("react.lazy"),Vl=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Vl&&e[Vl]||e["@@iterator"],typeof e=="function"?e:null)}var eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tu=Object.assign,nu={};function yn(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=yn.prototype;function Go(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}var Zo=Go.prototype=new ru;Zo.constructor=Go;tu(Zo,yn.prototype);Zo.isPureReactComponent=!0;var Wl=Array.isArray,iu=Object.prototype.hasOwnProperty,Jo={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)iu.call(t,r)&&!ou.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:sr,type:e,key:o,ref:l,props:i,_owner:Jo.current}}function Nc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qo(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Pc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ql=/\/+/g;function Ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pc(""+e.key):t.toString(36)}function jr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case sr:case gc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ti(l,0):r,Wl(i)?(n="",e!=null&&(n=e.replace(Ql,"$&/")+"/"),jr(i,t,n,"",function(c){return c})):i!=null&&(qo(i)&&(i=Nc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ql,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Wl(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Ti(o,a);l+=jr(o,t,n,u,i)}else if(u=_c(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Ti(o,a++),l+=jr(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mr(e,t,n){if(e==null)return e;var r=[],i=0;return jr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Tc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Rr={transition:null},Lc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Rr,ReactCurrentOwner:Jo};function au(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!qo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=yn;R.Fragment=vc;R.Profiler=wc;R.PureComponent=Go;R.StrictMode=yc;R.Suspense=Ec;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lc;R.act=au;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Jo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)iu.call(t,u)&&!ou.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:sr,type:e.type,key:i,ref:o,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xc,_context:e},e.Consumer=e};R.createElement=lu;R.createFactory=function(e){var t=lu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Sc,render:e}};R.isValidElement=qo;R.lazy=function(e){return{$$typeof:zc,_payload:{_status:-1,_result:e},_init:Tc}};R.memo=function(e,t){return{$$typeof:Cc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Rr.transition;Rr.transition={};try{e()}finally{Rr.transition=t}};R.unstable_act=au;R.useCallback=function(e,t){return fe.current.useCallback(e,t)};R.useContext=function(e){return fe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};R.useEffect=function(e,t){return fe.current.useEffect(e,t)};R.useId=function(){return fe.current.useId()};R.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return fe.current.useMemo(e,t)};R.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};R.useRef=function(e){return fe.current.useRef(e)};R.useState=function(e){return fe.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return fe.current.useTransition()};R.version="18.3.1";ba.exports=R;var V=ba.exports;const jc=hc(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=V,Dc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),Ic=Object.prototype.hasOwnProperty,Mc=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fc={key:!0,ref:!0,__self:!0,__source:!0};function uu(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ic.call(t,r)&&!Fc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Dc,type:e,key:o,ref:l,props:i,_owner:Mc.current}}pi.Fragment=Oc;pi.jsx=uu;pi.jsxs=uu;qa.exports=pi;var k=qa.exports,to={},su={exports:{}},ze={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var P=E.length;E.push(T);e:for(;0<P;){var B=P-1>>>1,K=E[B];if(0<i(K,T))E[B]=T,E[P]=K,P=B;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],P=E.pop();if(P!==T){E[0]=P;e:for(var B=0,K=E.length,He=K>>>1;B<He;){var Xe=2*(B+1)-1,kn=E[Xe],Ke=Xe+1,Vt=E[Ke];if(0>i(kn,P))Ke<K&&0>i(Vt,kn)?(E[B]=Vt,E[Ke]=P,B=Ke):(E[B]=kn,E[Xe]=P,B=Xe);else if(Ke<K&&0>i(Vt,P))E[B]=Vt,E[Ke]=P,B=Ke;else break e}}return T}function i(E,T){var P=E.sortIndex-T.sortIndex;return P!==0?P:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],h=1,m=null,p=3,y=!1,w=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=E)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function g(E){if(x=!1,f(E),!w)if(n(u)!==null)w=!0,zt(S);else{var T=n(c);T!==null&&_t(g,T.startTime-E)}}function S(E,T){w=!1,x&&(x=!1,d(N),N=-1),y=!0;var P=p;try{for(f(T),m=n(u);m!==null&&(!(m.expirationTime>T)||E&&!ne());){var B=m.callback;if(typeof B=="function"){m.callback=null,p=m.priorityLevel;var K=B(m.expirationTime<=T);T=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(u)&&r(u),f(T)}else r(u);m=n(u)}if(m!==null)var He=!0;else{var Xe=n(c);Xe!==null&&_t(g,Xe.startTime-T),He=!1}return He}finally{m=null,p=P,y=!1}}var _=!1,z=null,N=-1,F=5,L=-1;function ne(){return!(e.unstable_now()-L<F)}function Ae(){if(z!==null){var E=e.unstable_now();L=E;var T=!0;try{T=z(!0,E)}finally{T?me():(_=!1,z=null)}}else _=!1}var me;if(typeof s=="function")me=function(){s(Ae)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,Bt=Ht.port2;Ht.port1.onmessage=Ae,me=function(){Bt.postMessage(null)}}else me=function(){M(Ae,0)};function zt(E){z=E,_||(_=!0,me())}function _t(E,T){N=M(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,zt(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var P=p;p=T;try{return E()}finally{p=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=p;p=E;try{return T()}finally{p=P}},e.unstable_scheduleCallback=function(E,T,P){var B=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?B+P:B):P=B,E){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,E={id:h++,callback:T,priorityLevel:E,startTime:P,expirationTime:K,sortIndex:-1},P>B?(E.sortIndex=P,t(c,E),n(u)===null&&E===n(c)&&(x?(d(N),N=-1):x=!0,_t(g,P-B))):(E.sortIndex=K,t(u,E),w||y||(w=!0,zt(S))),E},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(E){var T=p;return function(){var P=p;p=T;try{return E.apply(this,arguments)}finally{p=P}}}})(du);cu.exports=du;var Uc=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=V,Ce=Uc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fu=new Set,Yn={};function $t(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)fu.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),no=Object.prototype.hasOwnProperty,Ac=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yl={},Xl={};function Hc(e){return no.call(Xl,e)?!0:no.call(Yl,e)?!1:Ac.test(e)?Xl[e]=!0:(Yl[e]=!0,!1)}function Bc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vc(e,t,n,r){if(t===null||typeof t>"u"||Bc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bo=/[\-:]([a-z])/g;function el(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bo,el);oe[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bo,el);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bo,el);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function tl(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vc(t,n,i,r)&&(n=null),r||i===null?Hc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),nl=Symbol.for("react.strict_mode"),ro=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),mu=Symbol.for("react.context"),rl=Symbol.for("react.forward_ref"),io=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),il=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),Kl=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=Kl&&e[Kl]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Li;function Dn(e){if(Li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||""}return`
`+Li+e}var ji=!1;function Ri(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Wc(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Ri(e.type,!1),e;case 11:return e=Ri(e.type.render,!1),e;case 1:return e=Ri(e.type,!0),e;default:return""}}function lo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Yt:return"Portal";case ro:return"Profiler";case nl:return"StrictMode";case io:return"Suspense";case oo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mu:return(e.displayName||"Context")+".Consumer";case pu:return(e._context.displayName||"Context")+".Provider";case rl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case il:return t=e.displayName||null,t!==null?t:lo(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return lo(e(t))}catch{}}return null}function Qc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lo(t);case 8:return t===nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yc(e){var t=gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Yc(e))}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ao(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yu(e,t){t=t.checked,t!=null&&tl(e,"checked",t,!1)}function uo(e,t){yu(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?so(e,t.type,n):t.hasOwnProperty("defaultValue")&&so(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function so(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function co(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(On(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function wu(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ql(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xc=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Xc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Su(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function Eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Su(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kc=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function po(e,t){if(t){if(Kc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function mo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ho=null;function ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var go=null,ln=null,an=null;function bl(e){if(e=fr(e)){if(typeof go!="function")throw Error(v(280));var t=e.stateNode;t&&(t=yi(t),go(e.stateNode,e.type,t))}}function Cu(e){ln?an?an.push(e):an=[e]:ln=e}function zu(){if(ln){var e=ln,t=an;if(an=ln=null,bl(e),t)for(e=0;e<t.length;e++)bl(t[e])}}function _u(e,t){return e(t)}function Nu(){}var Di=!1;function Pu(e,t,n){if(Di)return e(t,n);Di=!0;try{return _u(e,t,n)}finally{Di=!1,(ln!==null||an!==null)&&(Nu(),zu())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=yi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var vo=!1;if(et)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){vo=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{vo=!1}function Gc(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Un=!1,Wr=null,Qr=!1,yo=null,Zc={onError:function(e){Un=!0,Wr=e}};function Jc(e,t,n,r,i,o,l,a,u){Un=!1,Wr=null,Gc.apply(Zc,arguments)}function qc(e,t,n,r,i,o,l,a,u){if(Jc.apply(this,arguments),Un){if(Un){var c=Wr;Un=!1,Wr=null}else throw Error(v(198));Qr||(Qr=!0,yo=c)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ea(e){if(At(e)!==e)throw Error(v(188))}function bc(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ea(i),e;if(o===r)return ea(i),t;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Lu(e){return e=bc(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Ru=Ce.unstable_scheduleCallback,ta=Ce.unstable_cancelCallback,ed=Ce.unstable_shouldYield,td=Ce.unstable_requestPaint,G=Ce.unstable_now,nd=Ce.unstable_getCurrentPriorityLevel,ll=Ce.unstable_ImmediatePriority,Du=Ce.unstable_UserBlockingPriority,Yr=Ce.unstable_NormalPriority,rd=Ce.unstable_LowPriority,Ou=Ce.unstable_IdlePriority,mi=null,Qe=null;function id(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:ad,od=Math.log,ld=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(od(e)/ld|0)|0}var yr=64,wr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=In(a):(o&=l,o!==0&&(r=In(o)))}else l=n&~i,l!==0?r=In(l):o!==0&&(r=In(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function ud(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Fe(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=ud(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Oi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function Mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,ul,Uu,$u,Au,xo=!1,xr=[],ft=null,pt=null,mt=null,Gn=new Map,Zn=new Map,ut=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function na(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function Nn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fr(t),t!==null&&ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fd(e,t,n,r,i){switch(t){case"focusin":return ft=Nn(ft,e,t,n,r,i),!0;case"dragenter":return pt=Nn(pt,e,t,n,r,i),!0;case"mouseover":return mt=Nn(mt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Gn.set(o,Nn(Gn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zn.set(o,Nn(Zn.get(o)||null,e,t,n,r,i)),!0}return!1}function Hu(e){var t=Tt(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=Tu(n),t!==null){e.blockedOn=t,Au(e.priority,function(){Uu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ko(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ho=r,n.target.dispatchEvent(r),ho=null}else return t=fr(n),t!==null&&ul(t),e.blockedOn=n,!1;t.shift()}return!0}function ra(e,t,n){Dr(e)&&n.delete(t)}function pd(){xo=!1,ft!==null&&Dr(ft)&&(ft=null),pt!==null&&Dr(pt)&&(pt=null),mt!==null&&Dr(mt)&&(mt=null),Gn.forEach(ra),Zn.forEach(ra)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,xo||(xo=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,pd)))}function Jn(e){function t(i){return Pn(i,e)}if(0<xr.length){Pn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Pn(ft,e),pt!==null&&Pn(pt,e),mt!==null&&Pn(mt,e),Gn.forEach(t),Zn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Hu(n),n.blockedOn===null&&ut.shift()}var un=it.ReactCurrentBatchConfig,Kr=!0;function md(e,t,n,r){var i=I,o=un.transition;un.transition=null;try{I=1,sl(e,t,n,r)}finally{I=i,un.transition=o}}function hd(e,t,n,r){var i=I,o=un.transition;un.transition=null;try{I=4,sl(e,t,n,r)}finally{I=i,un.transition=o}}function sl(e,t,n,r){if(Kr){var i=ko(e,t,n,r);if(i===null)Wi(e,t,r,Gr,n),na(e,r);else if(fd(i,e,t,n,r))r.stopPropagation();else if(na(e,r),t&4&&-1<dd.indexOf(e)){for(;i!==null;){var o=fr(i);if(o!==null&&Fu(o),o=ko(e,t,n,r),o===null&&Wi(e,t,r,Gr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wi(e,t,r,null,n)}}var Gr=null;function ko(e,t,n,r){if(Gr=null,e=ol(r),e=Tt(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case ll:return 1;case Du:return 4;case Yr:case rd:return 16;case Ou:return 536870912;default:return 16}default:return 16}}var ct=null,cl=null,Or=null;function Vu(){if(Or)return Or;var e,t=cl,n=t.length,r,i="value"in ct?ct.value:ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Or=i.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function ia(){return!1}function _e(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?kr:ia,this.isPropagationStopped=ia,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=_e(wn),dr=Y({},wn,{view:0,detail:0}),gd=_e(dr),Ii,Mi,Tn,hi=Y({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(Ii=e.screenX-Tn.screenX,Mi=e.screenY-Tn.screenY):Mi=Ii=0,Tn=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),oa=_e(hi),vd=Y({},hi,{dataTransfer:0}),yd=_e(vd),wd=Y({},dr,{relatedTarget:0}),Fi=_e(wd),xd=Y({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=_e(xd),Sd=Y({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ed=_e(Sd),Cd=Y({},wn,{data:0}),la=_e(Cd),zd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function fl(){return Pd}var Td=Y({},dr,{key:function(e){if(e.key){var t=zd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fl,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=_e(Td),jd=Y({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aa=_e(jd),Rd=Y({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fl}),Dd=_e(Rd),Od=Y({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Id=_e(Od),Md=Y({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fd=_e(Md),Ud=[9,13,27,32],pl=et&&"CompositionEvent"in window,$n=null;et&&"documentMode"in document&&($n=document.documentMode);var $d=et&&"TextEvent"in window&&!$n,Wu=et&&(!pl||$n&&8<$n&&11>=$n),ua=String.fromCharCode(32),sa=!1;function Qu(e,t){switch(e){case"keyup":return Ud.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function Ad(e,t){switch(e){case"compositionend":return Yu(t);case"keypress":return t.which!==32?null:(sa=!0,ua);case"textInput":return e=t.data,e===ua&&sa?null:e;default:return null}}function Hd(e,t){if(Kt)return e==="compositionend"||!pl&&Qu(e,t)?(e=Vu(),Or=cl=ct=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wu&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function Xu(e,t,n,r){Cu(r),t=Zr(t,"onChange"),0<t.length&&(n=new dl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,qn=null;function Vd(e){is(e,0)}function gi(e){var t=Jt(e);if(vu(t))return e}function Wd(e,t){if(e==="change")return t}var Ku=!1;if(et){var Ui;if(et){var $i="oninput"in document;if(!$i){var da=document.createElement("div");da.setAttribute("oninput","return;"),$i=typeof da.oninput=="function"}Ui=$i}else Ui=!1;Ku=Ui&&(!document.documentMode||9<document.documentMode)}function fa(){An&&(An.detachEvent("onpropertychange",Gu),qn=An=null)}function Gu(e){if(e.propertyName==="value"&&gi(qn)){var t=[];Xu(t,qn,e,ol(e)),Pu(Vd,t)}}function Qd(e,t,n){e==="focusin"?(fa(),An=t,qn=n,An.attachEvent("onpropertychange",Gu)):e==="focusout"&&fa()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(qn)}function Xd(e,t){if(e==="click")return gi(t)}function Kd(e,t){if(e==="input"||e==="change")return gi(t)}function Gd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Gd;function bn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!no.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ma(e,t){var n=pa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pa(n)}}function Zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zd(e){var t=Ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zu(n.ownerDocument.documentElement,n)){if(r!==null&&ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ma(n,o);var l=ma(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=et&&"documentMode"in document&&11>=document.documentMode,Gt=null,So=null,Hn=null,Eo=!1;function ha(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||Gt==null||Gt!==Vr(r)||(r=Gt,"selectionStart"in r&&ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&bn(Hn,r)||(Hn=r,r=Zr(So,"onSelect"),0<r.length&&(t=new dl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Ai={},qu={};et&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function vi(e){if(Ai[e])return Ai[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qu)return Ai[e]=t[n];return e}var bu=vi("animationend"),es=vi("animationiteration"),ts=vi("animationstart"),ns=vi("transitionend"),rs=new Map,ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){rs.set(e,t),$t(t,[e])}for(var Hi=0;Hi<ga.length;Hi++){var Bi=ga[Hi],qd=Bi.toLowerCase(),bd=Bi[0].toUpperCase()+Bi.slice(1);St(qd,"on"+bd)}St(bu,"onAnimationEnd");St(es,"onAnimationIteration");St(ts,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(ns,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qc(r,t,void 0,e),e.currentTarget=null}function is(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;va(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;va(i,a,c),o=u}}}if(Qr)throw e=yo,Qr=!1,yo=null,e}function $(e,t){var n=t[Po];n===void 0&&(n=t[Po]=new Set);var r=e+"__bubble";n.has(r)||(os(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),os(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Er]){e[Er]=!0,fu.forEach(function(n){n!=="selectionchange"&&(ef.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,Vi("selectionchange",!1,t))}}function os(e,t,n,r){switch(Bu(t)){case 1:var i=md;break;case 4:i=hd;break;default:i=sl}n=i.bind(null,t,n,e),i=void 0,!vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Tt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Pu(function(){var c=o,h=ol(n),m=[];e:{var p=rs.get(e);if(p!==void 0){var y=dl,w=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":y=Ld;break;case"focusin":w="focus",y=Fi;break;case"focusout":w="blur",y=Fi;break;case"beforeblur":case"afterblur":y=Fi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Dd;break;case bu:case es:case ts:y=kd;break;case ns:y=Id;break;case"scroll":y=gd;break;case"wheel":y=Fd;break;case"copy":case"cut":case"paste":y=Ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=aa}var x=(t&4)!==0,M=!x&&e==="scroll",d=x?p!==null?p+"Capture":null:p;x=[];for(var s=c,f;s!==null;){f=s;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Kn(s,d),g!=null&&x.push(tr(s,g,f)))),M)break;s=s.return}0<x.length&&(p=new y(p,w,null,n,h),m.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==ho&&(w=n.relatedTarget||n.fromElement)&&(Tt(w)||w[tt]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?Tt(w):null,w!==null&&(M=At(w),w!==M||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=oa,g="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(x=aa,g="onPointerLeave",d="onPointerEnter",s="pointer"),M=y==null?p:Jt(y),f=w==null?p:Jt(w),p=new x(g,s+"leave",y,n,h),p.target=M,p.relatedTarget=f,g=null,Tt(h)===c&&(x=new x(d,s+"enter",w,n,h),x.target=f,x.relatedTarget=M,g=x),M=g,y&&w)t:{for(x=y,d=w,s=0,f=x;f;f=Qt(f))s++;for(f=0,g=d;g;g=Qt(g))f++;for(;0<s-f;)x=Qt(x),s--;for(;0<f-s;)d=Qt(d),f--;for(;s--;){if(x===d||d!==null&&x===d.alternate)break t;x=Qt(x),d=Qt(d)}x=null}else x=null;y!==null&&ya(m,p,y,x,!1),w!==null&&M!==null&&ya(m,M,w,x,!0)}}e:{if(p=c?Jt(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Wd;else if(ca(p))if(Ku)S=Kd;else{S=Yd;var _=Qd}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Xd);if(S&&(S=S(e,c))){Xu(m,S,n,h);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&so(p,"number",p.value)}switch(_=c?Jt(c):window,e){case"focusin":(ca(_)||_.contentEditable==="true")&&(Gt=_,So=c,Hn=null);break;case"focusout":Hn=So=Gt=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,ha(m,n,h);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":ha(m,n,h)}var z;if(pl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Kt?Qu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Wu&&n.locale!=="ko"&&(Kt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Kt&&(z=Vu()):(ct=h,cl="value"in ct?ct.value:ct.textContent,Kt=!0)),_=Zr(c,N),0<_.length&&(N=new la(N,e,null,n,h),m.push({event:N,listeners:_}),z?N.data=z:(z=Yu(n),z!==null&&(N.data=z)))),(z=$d?Ad(e,n):Hd(e,n))&&(c=Zr(c,"onBeforeInput"),0<c.length&&(h=new la("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=z))}is(m,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Kn(e,n),o!=null&&r.unshift(tr(e,o,i)),o=Kn(e,t),o!=null&&r.push(tr(e,o,i))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ya(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Kn(n,o),u!=null&&l.unshift(tr(n,u,a))):i||(u=Kn(n,o),u!=null&&l.push(tr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var tf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function wa(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(nf,"")}function Cr(e,t,n){if(t=wa(t),wa(e)!==t&&n)throw Error(v(425))}function Jr(){}var Co=null,zo=null;function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var No=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,xa=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof xa<"u"?function(e){return xa.resolve(null).then(e).catch(lf)}:No;function lf(e){setTimeout(function(){throw e})}function Qi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),We="__reactFiber$"+xn,nr="__reactProps$"+xn,tt="__reactContainer$"+xn,Po="__reactEvents$"+xn,af="__reactListeners$"+xn,uf="__reactHandles$"+xn;function Tt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ka(e);e!==null;){if(n=e[We])return n;e=ka(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[We]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function yi(e){return e[nr]||null}var To=[],qt=-1;function Et(e){return{current:e}}function A(e){0>qt||(e.current=To[qt],To[qt]=null,qt--)}function U(e,t){qt++,To[qt]=e.current,e.current=t}var kt={},se=Et(kt),ye=Et(!1),Ot=kt;function fn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function qr(){A(ye),A(se)}function Sa(e,t,n){if(se.current!==kt)throw Error(v(168));U(se,t),U(ye,n)}function ls(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(v(108,Qc(e)||"Unknown",i));return Y({},n,r)}function br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Ot=se.current,U(se,e),U(ye,ye.current),!0}function Ea(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=ls(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,A(ye),A(se),U(se,e)):A(ye),U(ye,n)}var Ze=null,wi=!1,Yi=!1;function as(e){Ze===null?Ze=[e]:Ze.push(e)}function sf(e){wi=!0,as(e)}function Ct(){if(!Yi&&Ze!==null){Yi=!0;var e=0,t=I;try{var n=Ze;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,wi=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),Ru(ll,Ct),i}finally{I=t,Yi=!1}}return null}var bt=[],en=0,ei=null,ti=0,Ne=[],Pe=0,It=null,Je=1,qe="";function Nt(e,t){bt[en++]=ti,bt[en++]=ei,ei=e,ti=t}function us(e,t,n){Ne[Pe++]=Je,Ne[Pe++]=qe,Ne[Pe++]=It,It=e;var r=Je;e=qe;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var o=32-Fe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Je=1<<32-Fe(t)+i|n<<i|r,qe=o+e}else Je=1<<o|n<<i|r,qe=e}function hl(e){e.return!==null&&(Nt(e,1),us(e,1,0))}function gl(e){for(;e===ei;)ei=bt[--en],bt[en]=null,ti=bt[--en],bt[en]=null;for(;e===It;)It=Ne[--Pe],Ne[Pe]=null,qe=Ne[--Pe],Ne[Pe]=null,Je=Ne[--Pe],Ne[Pe]=null}var Ee=null,Se=null,H=!1,Me=null;function ss(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ca(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Se=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Se=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(H){var t=Se;if(t){var n=t;if(!Ca(e,t)){if(Lo(e))throw Error(v(418));t=ht(n.nextSibling);var r=Ee;t&&Ca(e,t)?ss(r,n):(e.flags=e.flags&-4097|2,H=!1,Ee=e)}}else{if(Lo(e))throw Error(v(418));e.flags=e.flags&-4097|2,H=!1,Ee=e}}}function za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function zr(e){if(e!==Ee)return!1;if(!H)return za(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_o(e.type,e.memoizedProps)),t&&(t=Se)){if(Lo(e))throw cs(),Error(v(418));for(;t;)ss(e,t),t=ht(t.nextSibling)}if(za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ee?ht(e.stateNode.nextSibling):null;return!0}function cs(){for(var e=Se;e;)e=ht(e.nextSibling)}function pn(){Se=Ee=null,H=!1}function vl(e){Me===null?Me=[e]:Me.push(e)}var cf=it.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _a(e){var t=e._init;return t(e._payload)}function ds(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function i(d,s){return d=wt(d,s),d.index=0,d.sibling=null,d}function o(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,f,g){return s===null||s.tag!==6?(s=bi(f,d.mode,g),s.return=d,s):(s=i(s,f),s.return=d,s)}function u(d,s,f,g){var S=f.type;return S===Xt?h(d,s,f.props.children,g,f.key):s!==null&&(s.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lt&&_a(S)===s.type)?(g=i(s,f.props),g.ref=Ln(d,s,f),g.return=d,g):(g=Br(f.type,f.key,f.props,null,d.mode,g),g.ref=Ln(d,s,f),g.return=d,g)}function c(d,s,f,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=eo(f,d.mode,g),s.return=d,s):(s=i(s,f.children||[]),s.return=d,s)}function h(d,s,f,g,S){return s===null||s.tag!==7?(s=Dt(f,d.mode,g,S),s.return=d,s):(s=i(s,f),s.return=d,s)}function m(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=bi(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case hr:return f=Br(s.type,s.key,s.props,null,d.mode,f),f.ref=Ln(d,null,s),f.return=d,f;case Yt:return s=eo(s,d.mode,f),s.return=d,s;case lt:var g=s._init;return m(d,g(s._payload),f)}if(On(s)||zn(s))return s=Dt(s,d.mode,f,null),s.return=d,s;_r(d,s)}return null}function p(d,s,f,g){var S=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,s,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case hr:return f.key===S?u(d,s,f,g):null;case Yt:return f.key===S?c(d,s,f,g):null;case lt:return S=f._init,p(d,s,S(f._payload),g)}if(On(f)||zn(f))return S!==null?null:h(d,s,f,g,null);_r(d,f)}return null}function y(d,s,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(s,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hr:return d=d.get(g.key===null?f:g.key)||null,u(s,d,g,S);case Yt:return d=d.get(g.key===null?f:g.key)||null,c(s,d,g,S);case lt:var _=g._init;return y(d,s,f,_(g._payload),S)}if(On(g)||zn(g))return d=d.get(f)||null,h(s,d,g,S,null);_r(s,g)}return null}function w(d,s,f,g){for(var S=null,_=null,z=s,N=s=0,F=null;z!==null&&N<f.length;N++){z.index>N?(F=z,z=null):F=z.sibling;var L=p(d,z,f[N],g);if(L===null){z===null&&(z=F);break}e&&z&&L.alternate===null&&t(d,z),s=o(L,s,N),_===null?S=L:_.sibling=L,_=L,z=F}if(N===f.length)return n(d,z),H&&Nt(d,N),S;if(z===null){for(;N<f.length;N++)z=m(d,f[N],g),z!==null&&(s=o(z,s,N),_===null?S=z:_.sibling=z,_=z);return H&&Nt(d,N),S}for(z=r(d,z);N<f.length;N++)F=y(z,d,N,f[N],g),F!==null&&(e&&F.alternate!==null&&z.delete(F.key===null?N:F.key),s=o(F,s,N),_===null?S=F:_.sibling=F,_=F);return e&&z.forEach(function(ne){return t(d,ne)}),H&&Nt(d,N),S}function x(d,s,f,g){var S=zn(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var _=S=null,z=s,N=s=0,F=null,L=f.next();z!==null&&!L.done;N++,L=f.next()){z.index>N?(F=z,z=null):F=z.sibling;var ne=p(d,z,L.value,g);if(ne===null){z===null&&(z=F);break}e&&z&&ne.alternate===null&&t(d,z),s=o(ne,s,N),_===null?S=ne:_.sibling=ne,_=ne,z=F}if(L.done)return n(d,z),H&&Nt(d,N),S;if(z===null){for(;!L.done;N++,L=f.next())L=m(d,L.value,g),L!==null&&(s=o(L,s,N),_===null?S=L:_.sibling=L,_=L);return H&&Nt(d,N),S}for(z=r(d,z);!L.done;N++,L=f.next())L=y(z,d,N,L.value,g),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?N:L.key),s=o(L,s,N),_===null?S=L:_.sibling=L,_=L);return e&&z.forEach(function(Ae){return t(d,Ae)}),H&&Nt(d,N),S}function M(d,s,f,g){if(typeof f=="object"&&f!==null&&f.type===Xt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case hr:e:{for(var S=f.key,_=s;_!==null;){if(_.key===S){if(S=f.type,S===Xt){if(_.tag===7){n(d,_.sibling),s=i(_,f.props.children),s.return=d,d=s;break e}}else if(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lt&&_a(S)===_.type){n(d,_.sibling),s=i(_,f.props),s.ref=Ln(d,_,f),s.return=d,d=s;break e}n(d,_);break}else t(d,_);_=_.sibling}f.type===Xt?(s=Dt(f.props.children,d.mode,g,f.key),s.return=d,d=s):(g=Br(f.type,f.key,f.props,null,d.mode,g),g.ref=Ln(d,s,f),g.return=d,d=g)}return l(d);case Yt:e:{for(_=f.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=i(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=eo(f,d.mode,g),s.return=d,d=s}return l(d);case lt:return _=f._init,M(d,s,_(f._payload),g)}if(On(f))return w(d,s,f,g);if(zn(f))return x(d,s,f,g);_r(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=i(s,f),s.return=d,d=s):(n(d,s),s=bi(f,d.mode,g),s.return=d,d=s),l(d)):n(d,s)}return M}var mn=ds(!0),fs=ds(!1),ni=Et(null),ri=null,tn=null,yl=null;function wl(){yl=tn=ri=null}function xl(e){var t=ni.current;A(ni),e._currentValue=t}function Ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){ri=e,yl=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(ri===null)throw Error(v(308));tn=e,ri.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Lt=null;function kl(e){Lt===null?Lt=[e]:Lt.push(e)}function ps(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kl(t)):(n.next=i.next,i.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nt(e,n)}return i=r.interleaved,i===null?(t.next=t,kl(r)):(t.next=i.next,i.next=t),r.interleaved=t,nt(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,al(e,n)}}function Na(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var i=e.updateQueue;at=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,h=c=u=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,x=a;switch(p=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){m=w.call(y,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(y,m,p):w,p==null)break e;m=Y({},m,p);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=m):h=h.next=y,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ft|=l,e.lanes=l,e.memoizedState=m}}function Pa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var pr={},Ye=Et(pr),rr=Et(pr),ir=Et(pr);function jt(e){if(e===pr)throw Error(v(174));return e}function El(e,t){switch(U(ir,t),U(rr,e),U(Ye,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fo(t,e)}A(Ye),U(Ye,t)}function hn(){A(Ye),A(rr),A(ir)}function hs(e){jt(ir.current);var t=jt(Ye.current),n=fo(t,e.type);t!==n&&(U(rr,e),U(Ye,n))}function Cl(e){rr.current===e&&(A(Ye),A(rr))}var W=Et(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xi=[];function zl(){for(var e=0;e<Xi.length;e++)Xi[e]._workInProgressVersionPrimary=null;Xi.length=0}var Fr=it.ReactCurrentDispatcher,Ki=it.ReactCurrentBatchConfig,Mt=0,Q=null,J=null,ee=null,li=!1,Bn=!1,or=0,df=0;function le(){throw Error(v(321))}function _l(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Nl(e,t,n,r,i,o){if(Mt=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?hf:gf,e=n(r,i),Bn){o=0;do{if(Bn=!1,or=0,25<=o)throw Error(v(301));o+=1,ee=J=null,t.updateQueue=null,Fr.current=vf,e=n(r,i)}while(Bn)}if(Fr.current=ai,t=J!==null&&J.next!==null,Mt=0,ee=J=Q=null,li=!1,t)throw Error(v(300));return e}function Pl(){var e=or!==0;return or=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?Q.memoizedState=ee=e:ee=ee.next=e,ee}function Re(){if(J===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?Q.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(v(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?Q.memoizedState=ee=e:ee=ee.next=e}return ee}function lr(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=Re(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var h=c.lane;if((Mt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,Q.lanes|=h,Ft|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,$e(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,Ft|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zi(e){var t=Re(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);$e(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gs(){}function vs(e,t){var n=Q,r=Re(),i=t(),o=!$e(r.memoizedState,i);if(o&&(r.memoizedState=i,ve=!0),r=r.queue,Tl(xs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ar(9,ws.bind(null,n,r,i,t),void 0,null),te===null)throw Error(v(349));Mt&30||ys(n,t,i)}return i}function ys(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ws(e,t,n,r){t.value=n,t.getSnapshot=r,ks(t)&&Ss(e)}function xs(e,t,n){return n(function(){ks(t)&&Ss(e)})}function ks(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function Ss(e){var t=nt(e,1);t!==null&&Ue(t,e,1,-1)}function Ta(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=mf.bind(null,Q,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Es(){return Re().memoizedState}function Ur(e,t,n,r){var i=Ve();Q.flags|=e,i.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var i=Re();r=r===void 0?null:r;var o=void 0;if(J!==null){var l=J.memoizedState;if(o=l.destroy,r!==null&&_l(r,l.deps)){i.memoizedState=ar(t,n,o,r);return}}Q.flags|=e,i.memoizedState=ar(1|t,n,o,r)}function La(e,t){return Ur(8390656,8,e,t)}function Tl(e,t){return xi(2048,8,e,t)}function Cs(e,t){return xi(4,2,e,t)}function zs(e,t){return xi(4,4,e,t)}function _s(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ns(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,_s.bind(null,t,e),n)}function Ll(){}function Ps(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ts(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ls(e,t,n){return Mt&21?($e(n,t)||(n=Iu(),Q.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function ff(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ki.transition;Ki.transition={};try{e(!1),t()}finally{I=n,Ki.transition=r}}function js(){return Re().memoizedState}function pf(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e))Ds(t,n);else if(n=ps(e,t,n,r),n!==null){var i=de();Ue(n,e,r,i),Os(n,t,r)}}function mf(e,t,n){var r=yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))Ds(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,l)){var u=t.interleaved;u===null?(i.next=i,kl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ps(e,t,i,r),n!==null&&(i=de(),Ue(n,e,r,i),Os(n,t,r))}}function Rs(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Ds(e,t){Bn=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Os(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,al(e,n)}}var ai={readContext:je,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},hf={readContext:je,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pf.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Ta,useDebugValue:Ll,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Ta(!1),t=e[0];return e=ff.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Ve();if(H){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),te===null)throw Error(v(349));Mt&30||ys(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,La(xs.bind(null,r,o,e),[e]),r.flags|=2048,ar(9,ws.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=te.identifierPrefix;if(H){var n=qe,r=Je;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=df++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gf={readContext:je,useCallback:Ps,useContext:je,useEffect:Tl,useImperativeHandle:Ns,useInsertionEffect:Cs,useLayoutEffect:zs,useMemo:Ts,useReducer:Gi,useRef:Es,useState:function(){return Gi(lr)},useDebugValue:Ll,useDeferredValue:function(e){var t=Re();return Ls(t,J.memoizedState,e)},useTransition:function(){var e=Gi(lr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:gs,useSyncExternalStore:vs,useId:js,unstable_isNewReconciler:!1},vf={readContext:je,useCallback:Ps,useContext:je,useEffect:Tl,useImperativeHandle:Ns,useInsertionEffect:Cs,useLayoutEffect:zs,useMemo:Ts,useReducer:Zi,useRef:Es,useState:function(){return Zi(lr)},useDebugValue:Ll,useDeferredValue:function(e){var t=Re();return J===null?t.memoizedState=e:Ls(t,J.memoizedState,e)},useTransition:function(){var e=Zi(lr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:gs,useSyncExternalStore:vs,useId:js,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Do(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ki={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=yt(e),o=be(r,i);o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,i),t!==null&&(Ue(t,e,i,r),Mr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=yt(e),o=be(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,i),t!==null&&(Ue(t,e,i,r),Mr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=yt(e),i=be(n,r);i.tag=2,t!=null&&(i.callback=t),t=gt(e,i,r),t!==null&&(Ue(t,e,r,n),Mr(t,e,r))}};function ja(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(i,o):!0}function Is(e,t,n){var r=!1,i=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=je(o):(i=we(t)?Ot:se.current,r=t.contextTypes,o=(r=r!=null)?fn(e,i):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ra(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ki.enqueueReplaceState(t,t.state,null)}function Oo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Sl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=je(o):(o=we(t)?Ot:se.current,i.context=fn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Do(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ki.enqueueReplaceState(i,i.state,null),ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=Wc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ji(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Io(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yf=typeof WeakMap=="function"?WeakMap:Map;function Ms(e,t,n){n=be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){si||(si=!0,Qo=r),Io(e,t)},n}function Fs(e,t,n){n=be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Io(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Io(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Da(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rf.bind(null,e,t,n),t.then(e,e))}function Oa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ia(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=be(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var wf=it.ReactCurrentOwner,ve=!1;function ce(e,t,n,r){t.child=e===null?fs(t,null,n,r):mn(t,e.child,n,r)}function Ma(e,t,n,r,i){n=n.render;var o=t.ref;return sn(t,i),r=Nl(e,t,n,r,o,i),n=Pl(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(H&&n&&hl(t),t.flags|=1,ce(e,t,r,i),t.child)}function Fa(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ul(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Us(e,t,o,r,i)):(e=Br(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(l,r)&&e.ref===t.ref)return rt(e,t,i)}return t.flags|=1,e=wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(bn(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,rt(e,t,i)}return Mo(e,t,n,r,i)}function $s(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(rn,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(rn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(rn,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(rn,ke),ke|=r;return ce(e,t,i,n),t.child}function As(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mo(e,t,n,r,i){var o=we(n)?Ot:se.current;return o=fn(t,o),sn(t,i),n=Nl(e,t,n,r,o,i),r=Pl(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(H&&r&&hl(t),t.flags|=1,ce(e,t,n,i),t.child)}function Ua(e,t,n,r,i){if(we(n)){var o=!0;br(t)}else o=!1;if(sn(t,i),t.stateNode===null)$r(e,t),Is(t,n,r),Oo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=je(c):(c=we(n)?Ot:se.current,c=fn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ra(t,l,r,c),at=!1;var p=t.memoizedState;l.state=p,ii(t,r,l,i),u=t.memoizedState,a!==r||p!==u||ye.current||at?(typeof h=="function"&&(Do(t,n,h,r),u=t.memoizedState),(a=at||ja(t,n,a,r,p,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ms(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Oe(t.type,a),l.props=c,m=t.pendingProps,p=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=je(u):(u=we(n)?Ot:se.current,u=fn(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||p!==u)&&Ra(t,l,r,u),at=!1,p=t.memoizedState,l.state=p,ii(t,r,l,i);var w=t.memoizedState;a!==m||p!==w||ye.current||at?(typeof y=="function"&&(Do(t,n,y,r),w=t.memoizedState),(c=at||ja(t,n,c,r,p,w,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Fo(e,t,n,r,o,i)}function Fo(e,t,n,r,i,o){As(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ea(t,n,!1),rt(e,t,o);r=t.stateNode,wf.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=mn(t,e.child,null,o),t.child=mn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&Ea(t,n,!0),t.child}function Hs(e){var t=e.stateNode;t.pendingContext?Sa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sa(e,t.context,!1),El(e,t.containerInfo)}function $a(e,t,n,r,i){return pn(),vl(i),t.flags|=256,ce(e,t,n,r),t.child}var Uo={dehydrated:null,treeContext:null,retryLane:0};function $o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bs(e,t,n){var r=t.pendingProps,i=W.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(W,i&1),e===null)return jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ci(l,r,0,null),e=Dt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$o(n),t.memoizedState=Uo,e):jl(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xf(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=wt(a,o):(o=Dt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?$o(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Uo,r}return o=e.child,e=o.sibling,r=wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jl(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&vl(r),mn(t,e.child,null,n),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ji(Error(v(422))),Nr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ci({mode:"visible",children:r.children},i,0,null),o=Dt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mn(t,e.child,null,l),t.child.memoizedState=$o(l),t.memoizedState=Uo,o);if(!(t.mode&1))return Nr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(v(419)),r=Ji(o,r,void 0),Nr(e,t,l,r)}if(a=(l&e.childLanes)!==0,ve||a){if(r=te,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nt(e,i),Ue(r,e,i,-1))}return Fl(),r=Ji(Error(v(421))),Nr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Df.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=ht(i.nextSibling),Ee=t,H=!0,Me=null,e!==null&&(Ne[Pe++]=Je,Ne[Pe++]=qe,Ne[Pe++]=It,Je=e.id,qe=e.overflow,It=t),t=jl(t,r.children),t.flags|=4096,t)}function Aa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ro(e.return,t,n)}function qi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Aa(e,n,t);else if(e.tag===19)Aa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qi(t,!0,n,null,o);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kf(e,t,n){switch(t.tag){case 3:Hs(t),pn();break;case 5:hs(t);break;case 1:we(t.type)&&br(t);break;case 4:El(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(ni,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Bs(e,t,n):(U(W,W.current&1),e=rt(e,t,n),e!==null?e.sibling:null);U(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,$s(e,t,n)}return rt(e,t,n)}var Ws,Ao,Qs,Ys;Ws=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ao=function(){};Qs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jt(Ye.current);var o=null;switch(n){case"input":i=ao(e,i),r=ao(e,r),o=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":i=co(e,i),r=co(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}po(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&$("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ys=function(e,t,n,r){n!==r&&(t.flags|=4)};function jn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sf(e,t,n){var r=t.pendingProps;switch(gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return we(t.type)&&qr(),ae(t),null;case 3:return r=t.stateNode,hn(),A(ye),A(se),zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Ko(Me),Me=null))),Ao(e,t),ae(t),null;case 5:Cl(t);var i=jt(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Qs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ae(t),null}if(e=jt(Ye.current),zr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[nr]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<Mn.length;i++)$(Mn[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Gl(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Jl(r,o),$("invalid",r)}po(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),i=["children",""+a]):Yn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&$("scroll",r)}switch(n){case"input":gr(r),Zl(r,o,!0);break;case"textarea":gr(r),ql(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[We]=t,e[nr]=r,Ws(e,t,!1,!1),t.stateNode=e;e:{switch(l=mo(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mn.length;i++)$(Mn[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Gl(e,r),i=ao(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),$("invalid",e);break;case"textarea":Jl(e,r),i=co(e,r),$("invalid",e);break;default:i=r}po(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Eu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ku(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xn(e,u):typeof u=="number"&&Xn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Yn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&$("scroll",e):u!=null&&tl(e,o,u,l))}switch(n){case"input":gr(e),Zl(e,r,!1);break;case"textarea":gr(e),ql(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?on(e,!!r.multiple,o,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Ys(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=jt(ir.current),jt(Ye.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ae(t),null;case 13:if(A(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Se!==null&&t.mode&1&&!(t.flags&128))cs(),pn(),t.flags|=98560,o=!1;else if(o=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[We]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else Me!==null&&(Ko(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?q===0&&(q=3):Fl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return hn(),Ao(e,t),e===null&&er(t.stateNode.containerInfo),ae(t),null;case 10:return xl(t.type._context),ae(t),null;case 17:return we(t.type)&&qr(),ae(t),null;case 19:if(A(W),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)jn(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=oi(e),l!==null){for(t.flags|=128,jn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(W,W.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>vn&&(t.flags|=128,r=!0,jn(o,!1),t.lanes=4194304)}else{if(!r)if(e=oi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!H)return ae(t),null}else 2*G()-o.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,jn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=W.current,U(W,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function Ef(e,t){switch(gl(t),t.tag){case 1:return we(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),A(ye),A(se),zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if(A(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(W),null;case 4:return hn(),null;case 10:return xl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Pr=!1,ue=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,C=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){X(e,t,r)}}var Ha=!1;function zf(e,t){if(Co=Kr,e=Ju(),ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++c===i&&(a=l),p===o&&++h===r&&(u=l),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:e,selectionRange:n},Kr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,M=w.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Oe(t.type,x),M);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){X(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=Ha,Ha=!1,w}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ho(t,n,o)}i=i.next}while(i!==r)}}function Si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xs(e){var t=e.alternate;t!==null&&(e.alternate=null,Xs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[nr],delete t[Po],delete t[af],delete t[uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ks(e){return e.tag===5||e.tag===3||e.tag===4}function Ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ks(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Vo(e,t,n),e=e.sibling;e!==null;)Vo(e,t,n),e=e.sibling}function Wo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wo(e,t,n),e=e.sibling;e!==null;)Wo(e,t,n),e=e.sibling}var re=null,Ie=!1;function ot(e,t,n){for(n=n.child;n!==null;)Gs(e,t,n),n=n.sibling}function Gs(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:ue||nn(n,t);case 6:var r=re,i=Ie;re=null,ot(e,t,n),re=r,Ie=i,re!==null&&(Ie?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Ie?(e=re,n=n.stateNode,e.nodeType===8?Qi(e.parentNode,n):e.nodeType===1&&Qi(e,n),Jn(e)):Qi(re,n.stateNode));break;case 4:r=re,i=Ie,re=n.stateNode.containerInfo,Ie=!0,ot(e,t,n),re=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ho(n,t,l),i=i.next}while(i!==r)}ot(e,t,n);break;case 1:if(!ue&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,ot(e,t,n),ue=r):ot(e,t,n);break;default:ot(e,t,n)}}function Va(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cf),t.forEach(function(r){var i=Of.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Ie=!1;break e;case 3:re=a.stateNode.containerInfo,Ie=!0;break e;case 4:re=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(re===null)throw Error(v(160));Gs(o,l,i),re=null,Ie=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zs(t,e),t=t.sibling}function Zs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Be(e),r&4){try{Vn(3,e,e.return),Si(3,e)}catch(x){X(e,e.return,x)}try{Vn(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:De(t,e),Be(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(De(t,e),Be(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var i=e.stateNode;try{Xn(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&yu(i,o),mo(a,l);var c=mo(a,o);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?Eu(i,m):h==="dangerouslySetInnerHTML"?ku(i,m):h==="children"?Xn(i,m):tl(i,h,m,c)}switch(a){case"input":uo(i,o);break;case"textarea":wu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?on(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?on(i,!!o.multiple,o.defaultValue,!0):on(i,!!o.multiple,o.multiple?[]:"",!1))}i[nr]=o}catch(x){X(e,e.return,x)}}break;case 6:if(De(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){X(e,e.return,x)}}break;case 3:if(De(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:De(t,e),Be(e);break;case 13:De(t,e),Be(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ol=G())),r&4&&Va(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||h,De(t,e),ue=c):De(t,e),Be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(m=C=h;C!==null;){switch(p=C,y=p.child,p.tag){case 0:case 11:case 14:case 15:Vn(4,p,p.return);break;case 1:nn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:nn(p,p.return);break;case 22:if(p.memoizedState!==null){Qa(m);continue}}y!==null?(y.return=p,C=y):Qa(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Su("display",l))}catch(x){X(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){X(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),Be(e),r&4&&Va(e);break;case 21:break;default:De(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ks(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xn(i,""),r.flags&=-33);var o=Ba(e);Wo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ba(e);Vo(e,a,l);break;default:throw Error(v(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e,t,n){C=e,Js(e)}function Js(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Pr;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ue;a=Pr;var c=ue;if(Pr=l,(ue=u)&&!c)for(C=i;C!==null;)l=C,u=l.child,l.tag===22&&l.memoizedState!==null?Ya(i):u!==null?(u.return=l,C=u):Ya(i);for(;o!==null;)C=o,Js(o),o=o.sibling;C=i,Pr=a,ue=c}Wa(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):Wa(e)}}function Wa(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Pa(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pa(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Jn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ue||t.flags&512&&Bo(t)}catch(p){X(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Qa(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Ya(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Si(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){X(t,i,u)}}var o=t.return;try{Bo(t)}catch(u){X(t,o,u)}break;case 5:var l=t.return;try{Bo(t)}catch(u){X(t,l,u)}}}catch(u){X(t,t.return,u)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Nf=Math.ceil,ui=it.ReactCurrentDispatcher,Rl=it.ReactCurrentOwner,Le=it.ReactCurrentBatchConfig,O=0,te=null,Z=null,ie=0,ke=0,rn=Et(0),q=0,ur=null,Ft=0,Ei=0,Dl=0,Wn=null,ge=null,Ol=0,vn=1/0,Ge=null,si=!1,Qo=null,vt=null,Tr=!1,dt=null,ci=0,Qn=0,Yo=null,Ar=-1,Hr=0;function de(){return O&6?G():Ar!==-1?Ar:Ar=G()}function yt(e){return e.mode&1?O&2&&ie!==0?ie&-ie:cf.transition!==null?(Hr===0&&(Hr=Iu()),Hr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Bu(e.type)),e):1}function Ue(e,t,n,r){if(50<Qn)throw Qn=0,Yo=null,Error(v(185));cr(e,n,r),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(Ei|=n),q===4&&st(e,ie)),xe(e,r),n===1&&O===0&&!(t.mode&1)&&(vn=G()+500,wi&&Ct()))}function xe(e,t){var n=e.callbackNode;sd(e,t);var r=Xr(e,e===te?ie:0);if(r===0)n!==null&&ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ta(n),t===1)e.tag===0?sf(Xa.bind(null,e)):as(Xa.bind(null,e)),of(function(){!(O&6)&&Ct()}),n=null;else{switch(Mu(r)){case 1:n=ll;break;case 4:n=Du;break;case 16:n=Yr;break;case 536870912:n=Ou;break;default:n=Yr}n=oc(n,qs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qs(e,t){if(Ar=-1,Hr=0,O&6)throw Error(v(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Xr(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var i=O;O|=2;var o=ec();(te!==e||ie!==t)&&(Ge=null,vn=G()+500,Rt(e,t));do try{Lf();break}catch(a){bs(e,a)}while(1);wl(),ui.current=o,O=i,Z!==null?t=0:(te=null,ie=0,t=q)}if(t!==0){if(t===2&&(i=wo(e),i!==0&&(r=i,t=Xo(e,i))),t===1)throw n=ur,Rt(e,0),st(e,r),xe(e,G()),n;if(t===6)st(e,r);else{if(i=e.current.alternate,!(r&30)&&!Pf(i)&&(t=di(e,r),t===2&&(o=wo(e),o!==0&&(r=o,t=Xo(e,o))),t===1))throw n=ur,Rt(e,0),st(e,r),xe(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:Pt(e,ge,Ge);break;case 3:if(st(e,r),(r&130023424)===r&&(t=Ol+500-G(),10<t)){if(Xr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=No(Pt.bind(null,e,ge,Ge),t);break}Pt(e,ge,Ge);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Fe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nf(r/1960))-r,10<r){e.timeoutHandle=No(Pt.bind(null,e,ge,Ge),r);break}Pt(e,ge,Ge);break;case 5:Pt(e,ge,Ge);break;default:throw Error(v(329))}}}return xe(e,G()),e.callbackNode===n?qs.bind(null,e):null}function Xo(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=di(e,t),e!==2&&(t=ge,ge=n,t!==null&&Ko(t)),e}function Ko(e){ge===null?ge=e:ge.push.apply(ge,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$e(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~Dl,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Xa(e){if(O&6)throw Error(v(327));cn();var t=Xr(e,0);if(!(t&1))return xe(e,G()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=wo(e);r!==0&&(t=r,n=Xo(e,r))}if(n===1)throw n=ur,Rt(e,0),st(e,t),xe(e,G()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,ge,Ge),xe(e,G()),null}function Il(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(vn=G()+500,wi&&Ct())}}function Ut(e){dt!==null&&dt.tag===0&&!(O&6)&&cn();var t=O;O|=1;var n=Le.transition,r=I;try{if(Le.transition=null,I=1,e)return e()}finally{I=r,Le.transition=n,O=t,!(O&6)&&Ct()}}function Ml(){ke=rn.current,A(rn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rf(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(gl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:hn(),A(ye),A(se),zl();break;case 5:Cl(r);break;case 4:hn();break;case 13:A(W);break;case 19:A(W);break;case 10:xl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(te=e,Z=e=wt(e.current,null),ie=ke=t,q=0,ur=null,Dl=Ei=Ft=0,ge=Wn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Lt=null}return e}function bs(e,t){do{var n=Z;try{if(wl(),Fr.current=ai,li){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(Mt=0,ee=J=Q=null,Bn=!1,or=0,Rl.current=null,n===null||n.return===null){q=1,ur=t,Z=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=ie,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Oa(l);if(y!==null){y.flags&=-257,Ia(y,l,a,o,t),y.mode&1&&Da(o,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(u),t.updateQueue=x}else w.add(u);break e}else{if(!(t&1)){Da(o,c,t),Fl();break e}u=Error(v(426))}}else if(H&&a.mode&1){var M=Oa(l);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Ia(M,l,a,o,t),vl(gn(u,a));break e}}o=u=gn(u,a),q!==4&&(q=2),Wn===null?Wn=[o]:Wn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Ms(o,u,t);Na(o,d);break e;case 1:a=u;var s=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(vt===null||!vt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Fs(o,a,t);Na(o,g);break e}}o=o.return}while(o!==null)}nc(n)}catch(S){t=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function ec(){var e=ui.current;return ui.current=ai,e===null?ai:e}function Fl(){(q===0||q===3||q===2)&&(q=4),te===null||!(Ft&268435455)&&!(Ei&268435455)||st(te,ie)}function di(e,t){var n=O;O|=2;var r=ec();(te!==e||ie!==t)&&(Ge=null,Rt(e,t));do try{Tf();break}catch(i){bs(e,i)}while(1);if(wl(),O=n,ui.current=r,Z!==null)throw Error(v(261));return te=null,ie=0,q}function Tf(){for(;Z!==null;)tc(Z)}function Lf(){for(;Z!==null&&!ed();)tc(Z)}function tc(e){var t=ic(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?nc(e):Z=t,Rl.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ef(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=Sf(n,t,ke),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function Pt(e,t,n){var r=I,i=Le.transition;try{Le.transition=null,I=1,jf(e,t,n,r)}finally{Le.transition=i,I=r}return null}function jf(e,t,n,r){do cn();while(dt!==null);if(O&6)throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cd(e,o),e===te&&(Z=te=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,oc(Yr,function(){return cn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var l=I;I=1;var a=O;O|=4,Rl.current=null,zf(e,n),Zs(n,e),Zd(zo),Kr=!!Co,zo=Co=null,e.current=n,_f(n),td(),O=a,I=l,Le.transition=o}else e.current=n;if(Tr&&(Tr=!1,dt=e,ci=i),o=e.pendingLanes,o===0&&(vt=null),id(n.stateNode),xe(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,e=Qo,Qo=null,e;return ci&1&&e.tag!==0&&cn(),o=e.pendingLanes,o&1?e===Yo?Qn++:(Qn=0,Yo=e):Qn=0,Ct(),null}function cn(){if(dt!==null){var e=Mu(ci),t=Le.transition,n=I;try{if(Le.transition=null,I=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,ci=0,O&6)throw Error(v(331));var i=O;for(O|=4,C=e.current;C!==null;){var o=C,l=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(C=c;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Vn(8,h,o)}var m=h.child;if(m!==null)m.return=h,C=m;else for(;C!==null;){h=C;var p=h.sibling,y=h.return;if(Xs(h),h===c){C=null;break}if(p!==null){p.return=y,C=p;break}C=y}}}var w=o.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}C=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,C=l;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,C=d;break e}C=o.return}}var s=e.current;for(C=s;C!==null;){l=C;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,C=f;else e:for(l=s;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Si(9,a)}}catch(S){X(a,a.return,S)}if(a===l){C=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,C=g;break e}C=a.return}}if(O=i,Ct(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(mi,e)}catch{}r=!0}return r}finally{I=n,Le.transition=t}}return!1}function Ka(e,t,n){t=gn(n,t),t=Ms(e,t,1),e=gt(e,t,1),t=de(),e!==null&&(cr(e,1,t),xe(e,t))}function X(e,t,n){if(e.tag===3)Ka(e,e,n);else for(;t!==null;){if(t.tag===3){Ka(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=gn(n,e),e=Fs(t,e,1),t=gt(t,e,1),e=de(),t!==null&&(cr(t,1,e),xe(t,e));break}}t=t.return}}function Rf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(ie&n)===n&&(q===4||q===3&&(ie&130023424)===ie&&500>G()-Ol?Rt(e,0):Dl|=n),xe(e,t)}function rc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=de();e=nt(e,t),e!==null&&(cr(e,t,n),xe(e,n))}function Df(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rc(e,n)}function Of(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),rc(e,n)}var ic;ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,kf(e,t,n);ve=!!(e.flags&131072)}else ve=!1,H&&t.flags&1048576&&us(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var i=fn(t,se.current);sn(t,n),i=Nl(null,t,r,e,i,n);var o=Pl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,br(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sl(t),i.updater=ki,t.stateNode=i,i._reactInternals=t,Oo(t,r,e,n),t=Fo(null,t,r,!0,o,n)):(t.tag=0,H&&o&&hl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mf(r),e=Oe(r,e),i){case 0:t=Mo(null,t,r,e,n);break e;case 1:t=Ua(null,t,r,e,n);break e;case 11:t=Ma(null,t,r,e,n);break e;case 14:t=Fa(null,t,r,Oe(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Mo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Ua(e,t,r,i,n);case 3:e:{if(Hs(t),e===null)throw Error(v(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ms(e,t),ii(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=gn(Error(v(423)),t),t=$a(e,t,r,n,i);break e}else if(r!==i){i=gn(Error(v(424)),t),t=$a(e,t,r,n,i);break e}else for(Se=ht(t.stateNode.containerInfo.firstChild),Ee=t,H=!0,Me=null,n=fs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===i){t=rt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return hs(t),e===null&&jo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,_o(r,i)?l=null:o!==null&&_o(r,o)&&(t.flags|=32),As(e,t),ce(e,t,l,n),t.child;case 6:return e===null&&jo(t),null;case 13:return Bs(e,t,n);case 4:return El(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Ma(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,U(ni,r._currentValue),r._currentValue=l,o!==null)if($e(o.value,l)){if(o.children===i.children&&!ye.current){t=rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=be(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ro(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(v(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ro(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sn(t,n),i=je(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Oe(r,t.pendingProps),i=Oe(r.type,i),Fa(e,t,r,i,n);case 15:return Us(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),$r(e,t),t.tag=1,we(r)?(e=!0,br(t)):e=!1,sn(t,n),Is(t,r,i),Oo(t,r,i,n),Fo(null,t,r,!0,e,n);case 19:return Vs(e,t,n);case 22:return $s(e,t,n)}throw Error(v(156,t.tag))};function oc(e,t){return Ru(e,t)}function If(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new If(e,t,n,r)}function Ul(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mf(e){if(typeof e=="function")return Ul(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rl)return 11;if(e===il)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ul(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xt:return Dt(n.children,i,o,t);case nl:l=8,i|=8;break;case ro:return e=Te(12,n,t,i|2),e.elementType=ro,e.lanes=o,e;case io:return e=Te(13,n,t,i),e.elementType=io,e.lanes=o,e;case oo:return e=Te(19,n,t,i),e.elementType=oo,e.lanes=o,e;case hu:return Ci(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pu:l=10;break e;case mu:l=9;break e;case rl:l=11;break e;case il:l=14;break e;case lt:l=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Te(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=Te(22,e,r,t),e.elementType=hu,e.lanes=n,e.stateNode={isHidden:!1},e}function bi(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function eo(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ff(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $l(e,t,n,r,i,o,l,a,u){return e=new Ff(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sl(o),e}function Uf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lc(e){if(!e)return kt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(we(n))return ls(e,n,t)}return t}function ac(e,t,n,r,i,o,l,a,u){return e=$l(n,r,!0,e,i,o,l,a,u),e.context=lc(null),n=e.current,r=de(),i=yt(n),o=be(r,i),o.callback=t??null,gt(n,o,i),e.current.lanes=i,cr(e,i,r),xe(e,r),e}function zi(e,t,n,r){var i=t.current,o=de(),l=yt(i);return n=lc(n),t.context===null?t.context=n:t.pendingContext=n,t=be(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(i,t,l),e!==null&&(Ue(e,i,l,o),Mr(e,i,l)),l}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){Ga(e,t),(e=e.alternate)&&Ga(e,t)}function $f(){return null}var uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}_i.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));zi(e,t,null,null)};_i.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){zi(null,e,null,null)}),t[tt]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&Hu(e)}};function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Za(){}function Af(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=fi(l);o.call(c)}}var l=ac(t,r,e,0,null,!1,!1,"",Za);return e._reactRootContainer=l,e[tt]=l.current,er(e.nodeType===8?e.parentNode:e),Ut(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fi(u);a.call(c)}}var u=$l(e,0,!1,null,null,!1,!1,"",Za);return e._reactRootContainer=u,e[tt]=u.current,er(e.nodeType===8?e.parentNode:e),Ut(function(){zi(t,u,n,r)}),u}function Pi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=fi(l);a.call(u)}}zi(t,l,e,i)}else l=Af(n,t,e,i,r);return fi(l)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(al(t,n|1),xe(t,G()),!(O&6)&&(vn=G()+500,Ct()))}break;case 13:Ut(function(){var r=nt(e,1);if(r!==null){var i=de();Ue(r,e,1,i)}}),Al(e,1)}};ul=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=de();Ue(t,e,134217728,n)}Al(e,134217728)}};Uu=function(e){if(e.tag===13){var t=yt(e),n=nt(e,t);if(n!==null){var r=de();Ue(n,e,t,r)}Al(e,t)}};$u=function(){return I};Au=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};go=function(e,t,n){switch(t){case"input":if(uo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yi(r);if(!i)throw Error(v(90));vu(r),uo(r,i)}}}break;case"textarea":wu(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};_u=Il;Nu=Ut;var Hf={usingClientEntryPoint:!1,Events:[fr,Jt,yi,Cu,zu,Il]},Rn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bf={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lu(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||$f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{mi=Lr.inject(Bf),Qe=Lr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bl(t))throw Error(v(200));return Uf(e,t,null,n)};ze.createRoot=function(e,t){if(!Bl(e))throw Error(v(299));var n=!1,r="",i=uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$l(e,1,!1,null,null,n,!1,r,i),e[tt]=t.current,er(e.nodeType===8?e.parentNode:e),new Hl(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Lu(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Ut(e)};ze.hydrate=function(e,t,n){if(!Ni(t))throw Error(v(200));return Pi(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Bl(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=uc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ac(t,null,e,1,n??null,i,!1,o,l),e[tt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _i(t)};ze.render=function(e,t,n){if(!Ni(t))throw Error(v(200));return Pi(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ni(e))throw Error(v(40));return e._reactRootContainer?(Ut(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};ze.unstable_batchedUpdates=Il;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ni(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return Pi(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),su.exports=ze;var Vf=su.exports,Ja=Vf;to.createRoot=Ja.createRoot,to.hydrateRoot=Ja.hydrateRoot;function Wf(){const[e,t]=V.useState(0),[n,r]=V.useState(!1),[i,o]=V.useState(!1),[l,a]=V.useState(!1),[u,c]=V.useState("Finding Aleks"),[h,m]=V.useState(!0),[p,y]=V.useState(""),[w,x]=V.useState(0),[M,d]=V.useState(""),[s,f]=V.useState("🔍"),[g,S]=V.useState(!1),[_,z]=V.useState(!1),[N,F]=V.useState("idle"),[L,ne]=V.useState(""),Ae=V.useRef(0),me=V.useRef(!1),Ht=V.useRef(null),Bt=V.useRef(0),zt=V.useRef(0),_t={ZIP_CODE:"94132",REFRESH_INTERVAL:3e5,API_TIMEOUT:5e3,ARTIFICIAL_DELAY:4e3},E=()=>{const j=new Date().getHours();return j>=6&&j<12?"🌅":j>=12&&j<17?"☀️":j>=17&&j<20?"🌇":"🌃"},T=()=>{const D=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});d(D),f(E())},P=[{year:"1990",description:"Born in Ukraine, moved to America at age 4 — my first lesson in managing transitions with competing stakeholder priorities and tight deadlines."},{year:"2015",description:"Industrial Design Intern at Tech Waves. Learned the fundamentals of product development cycles and stakeholder alignment in consumer product launches."},{year:"2017",description:"Graduated SJSU with B.S. in Industrial Design. Named IDSA '17 Finalist for systematic approach to design challenges and cross-functional collaboration."},{year:"2021",description:"Advanced to leadership at Topology Eyewear, managing creative teams while balancing operational requirements and client expectations in a fast-paced environment."},{year:"2022",description:"Joined Card79 as Project Manager Manager. Started orchestrating complex hardware and digital initiatives, discovering my talent for managing competing priorities and stakeholder expectations."},{year:"2025",description:"Strategic Program Manager at Card79. Currently managing innovation projects for clients ranging from established brands to emerging companies, with a focus on scope clarity, risk mitigation, and delivery excellence."}],B=async()=>{const j=performance.now();try{const D=await fetch(`https://api.zippopotam.us/us/${_t.ZIP_CODE}`);return performance.now()-j<1e3}catch{return!1}},K=async()=>{const j=Math.floor(Math.random()*5e3)+5e3;let D="San Francisco, CA";await B(),await new Promise(b=>setTimeout(b,_t.ARTIFICIAL_DELAY));try{const b=await fetch(`https://api.zippopotam.us/us/${_t.ZIP_CODE}`);if(!b.ok)throw new Error("Location fetch failed");D=`${(await b.json()).places[0]["place name"]}, CA`,setTimeout(()=>{m(!1),c(D),a(!0),f(E())},j)}catch(b){console.error("Weather error:",b),setTimeout(()=>{m(!1),c(D),a(!0),f(E())},j)}},He=j=>{if(j&&e<4){const D=e+1;t(D),D===1&&(r(!0),window.innerWidth<=640&&!i&&(o(!0),l||K()))}else if(!j&&e>0){const D=e-1;t(D),D===0&&r(!1)}},Xe=j=>{const D=Date.now(),b=1200;if(me.current||D-Ae.current<b)return;const he=j.deltaY>0;if(me.current=!0,Ae.current=D,he&&e<4)He(!0);else if(!he&&e>0)He(!1);else{me.current=!1;return}setTimeout(()=>{me.current=!1},700),j.preventDefault()},kn=j=>{console.log("🔥 TOUCH START:",{y:j.touches[0].clientY,timestamp:Date.now(),expansionLevel:e}),Bt.current=j.touches[0].clientY,zt.current=Date.now()},Ke=j=>{const D=Date.now(),b=600;if(console.log("🔥 TOUCH END:",{y:j.changedTouches[0].clientY,startY:Bt.current,duration:D-zt.current,expansionLevel:e}),me.current||D-Ae.current<b){console.log("❌ TOUCH BLOCKED: animating or too soon");return}const he=j.changedTouches[0].clientY,Wt=D-zt.current,Sn=Math.abs(he-Bt.current),En=Bt.current-he;if(console.log("📊 TOUCH ANALYSIS:",{touchDuration:Wt,touchDistance:Sn,deltaY:En,expansionLevel:e,thresholds:{maxDuration:1500,minDistance:20}}),Wt>1500||Sn<20){console.log("❌ TOUCH REJECTED: duration or distance");return}const Cn=En>0;if(console.log("✅ TOUCH ACCEPTED:",{isSwipeUp:Cn,currentLevel:e,willExpand:Cn&&e<4,willCollapse:!Cn&&e>0}),me.current=!0,Ae.current=D,Cn&&e<4)console.log("⬆️ EXPANDING to level:",e+1),He(!0);else if(!Cn&&e>0)console.log("⬇️ COLLAPSING to level:",e-1),He(!1);else{console.log("🚫 NO ACTION: already at limit"),me.current=!1;return}setTimeout(()=>{me.current=!1},700)},Vt=j=>{var En;if(!Ht.current)return;const D=Ht.current.getBoundingClientRect(),b=(j.clientX-D.left)/D.width*100,he=Math.max(0,Math.min(100,b));x(he);const Wt=Math.round(he/100*(P.length-1)),Sn=(En=P[Wt])==null?void 0:En.description;Sn&&y(Sn)},cc=j=>{const D=j/(P.length-1)*100;x(D),y(P[j].description)},dc=async j=>{j.preventDefault(),j.stopPropagation(),F("submitting"),ne("");const D=j.target,b=new FormData(D);b.append("_subject","New contact from portfolio");try{const he=await fetch("https://formspree.io/f/xdkzklvd",{method:"POST",body:b,headers:{Accept:"application/json"}});if(he.ok)F("success"),ne("Thanks! Your message has been sent successfully."),D.reset(),setTimeout(()=>{F("idle"),ne("")},5e3);else{const Wt=await he.json();throw new Error(Wt.error||"Form submission failed")}}catch(he){console.error("Form submission error:",he),F("error"),ne("Oops! There was a problem sending your message. Please try again."),setTimeout(()=>{F("idle"),ne("")},5e3)}},fc=()=>{e>=0?(z(!0),e>=3?S(!0):S(!1)):(z(!1),S(!1))};V.useEffect(()=>{o(!0),K(),x(0),y(P[0].description),T();const j=setInterval(T,6e4),D=b=>Xe(b);return document.body.addEventListener("wheel",D,{passive:!1}),fc(),()=>{document.body.removeEventListener("wheel",D),clearInterval(j)}},[e]);const pc=`main-content ${e>0?`expanded-${e}`:""}`,mc=`expand-button ${e>0?"expanded":""}`;return k.jsxs("div",{className:"min-h-screen bg-black text-white overflow-hidden relative flex flex-col items-center",style:{height:"100vh",maxHeight:"100vh"},onTouchStart:kn,onTouchEnd:Ke,children:[k.jsx("style",{children:`
        :root {
          --base-unit: calc(1.5vh + 1.5vw);
          --font-base: calc(var(--base-unit) * 0.7);
          --spacing-unit: calc(var(--base-unit) * 0.5);
          --font-size: clamp(1rem, var(--font-base), 2rem);
          --icon-size: calc(var(--font-size) * 1.5);
          --emoji-size: calc(var(--font-size) * 1.2);
          --bottom-spacing: calc(var(--spacing-unit) * 2);
          --safe-area-bottom: max(1.5rem, env(safe-area-inset-bottom));
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          background: #000000;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          height: 100vh;
          overflow: hidden;
          touch-action: pan-y;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
          overscroll-behavior: none;
          position: fixed;
          width: 100%;
        }

        .top-gradient {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%);
          pointer-events: none;
          z-index: 50;
        }

        .main-content {
          position: relative;
          width: 100vw;
          text-align: center;
          transition: transform 1.8s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
          margin-top: 42vh;
          padding: 0;
          padding-bottom: 3vh;
          max-height: 100vh;
          overflow: visible;
          box-sizing: border-box;
        }

        .main-content.expanded-1 {
          transform: translateY(-15vh);
        }

        .main-content.expanded-2 {
          transform: translateY(-25vh);
        }

        .main-content.expanded-3 {
          transform: translateY(-35vh);
        }

        .main-content.expanded-4 {
          transform: translateY(-80vh);
        }

        .desktop-text {
          display: block;
          font-size: clamp(0.8rem, 3vw, 1.2rem);
          color: rgba(255, 255, 255, 0.85);
          padding: 0 2.5vw;
          max-width: 95vw;
          margin: 0 auto;
          word-wrap: break-word;
          hyphens: auto;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.25;
          box-sizing: border-box;
        }

        .mobile-text {
          display: none;
          font-size: clamp(0.9rem, 3.5vw, 1.2rem);
          color: rgba(255, 255, 255, 0.85);
          margin: 1rem 2.5vw;
          max-width: 95vw;
          word-wrap: break-word;
          hyphens: auto;
          font-weight: 400;
          line-height: 1.25;
          box-sizing: border-box;
        }

        .name {
          position: relative;
          display: inline-block;
        }

        .name:hover {
          padding-right: 1.5em;
        }

        .name::after {
          content: "👋";
          position: absolute;
          right: 0.2em;
          top: 0;
          transform: translateX(0);
          opacity: 0;
          transition: opacity 0.8s ease;
          font-size: 1.2em;
          pointer-events: none;
        }

        .name:hover::after {
          opacity: 1;
          animation: wave 2s ease-in-out;
          transition: opacity 0.4s ease;
        }

        @keyframes wave {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          15% { transform: translateX(0) rotate(25deg); }
          30% { transform: translateX(0) rotate(-15deg); }
          45% { transform: translateX(0) rotate(20deg); }
          60% { transform: translateX(0) rotate(-10deg); }
          75% { transform: translateX(0) rotate(15deg); }
        }

        .role:hover {
          padding-right: 4.2em;
        }

        .role::after {
          content: "@Card79";
          position: absolute;
          right: 0;
          opacity: 0;
          transition: all 0.3s ease;
          transform: translateX(100%);
          font-size: 0.95em;
        }

        .name:hover::after {
          opacity: 0.5;
        }

        .vision {
          position: relative;
          z-index: 2;
          transition: all 0.5s ease;
        }

        .execution {
          position: relative;
          color: rgba(255, 255, 255, 0.85);
          transition: color 0.5s ease;
        }

        .execution::before {
          content: "execution";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f72585, #b5179e, #7209b7, #3a0ca3, #4361ee, #4cc9f0, #667eea, #764ba2);
          background-size: 400% 100%;
          background-position: -100% 50%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          pointer-events: none;
          opacity: 0;
          transition: background-position 1.5s ease, opacity 0.5s ease;
        }

        .execution:hover {
          color: transparent;
        }

        .execution:hover::before {
          opacity: 1;
          background-position: 100% 50%;
        }

        .expand-button {
          position: relative;
          width: 28px;
          height: 28px;
          margin: 1.5rem auto;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.6;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .expand-button:hover {
          opacity: 0.9;
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.1);
        }

        .expand-button::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-right: 2px solid rgba(255, 255, 255, 0.8);
          border-bottom: 2px solid rgba(255, 255, 255, 0.8);
          transform: translate(-50%, -50%) rotate(45deg);
          transition: all 0.3s ease;
          top: 48%;
          left: 48%;
        }

        .expand-button.expanded::before {
          transform: translate(-50%, -50%) rotate(-135deg);
          top: 52%;
          left: 48%;
        }

        .expand-button.expanded {
          opacity: 0.4;
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.02);
        }

        .content-section {
          opacity: 0;
          visibility: hidden;
          width: 92vw;
          max-width: 92vw;
          margin: 0.8rem auto;
          padding: 0.5rem 0.7rem;
          color: rgba(255, 255, 255, 0.75);
          transition: opacity 1s ease, visibility 1s ease, transform 1s ease;
          min-height: auto;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          box-sizing: border-box;
          font-size: 0.7rem;
          line-height: 1.4;
          text-align: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          backdrop-filter: blur(20px);
          transform: translateY(20px);
        }

        @media (min-width: 640px) {
          .content-section {
            max-width: 28rem;
            width: 80%;
            padding: 0.7rem 0.9rem;
            font-size: 0.75rem;
            line-height: 1.4;
            margin: 1.2rem auto;
          }

          .timeline-text {
            font-size: 0.75rem;
            line-height: 1.4;
          }

          .section-hint {
            font-size: 0.85rem;
          }
        }

        @media (min-width: 1024px) {
          .content-section {
            max-width: 32rem;
            width: 75%;
            padding: 0.9rem 1.1rem;
            font-size: 0.8rem;
            line-height: 1.45;
            margin: 1.5rem auto;
          }

          .timeline-text {
            font-size: 0.8rem;
            line-height: 1.45;
          }

          .section-hint {
            font-size: 0.9rem;
          }
        }

        .content-section.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .content-section p {
          margin: 0;
          text-align: center;
        }

        .timeline-text {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
          margin: 0;
          font-size: 0.7rem;
          line-height: 1.4;
          text-align: center;
          color: rgba(255, 255, 255, 0.85);
        }

        .metric {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }

        .highlight {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
        }

        .section-hint {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.8rem;
          text-align: center;
          font-weight: 500;
        }

        .timeline {
          position: relative;
          width: 100%;
          height: 80px;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 1;
        }

        .timeline::after {
          content: '';
          position: absolute;
          top: 50px;
          left: ${w}%;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
          transition: left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          pointer-events: none;
          z-index: 2;
        }

        .timeline-item {
          position: absolute;
          top: 15px;
          transform: translateX(-50%);
          opacity: 1;
          cursor: pointer;
          width: 50px;
          text-align: center;
          padding: 6px 0;
          z-index: 3;
        }

        .timeline-item .year {
          font-size: 0.85em;
          color: rgba(255, 255, 255, 0.7);
          display: block;
          white-space: nowrap;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .timeline-item:hover .year {
          opacity: 1;
          transform: translateY(-2px);
        }

        .weather-container {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1.5rem;
          padding: 0.5rem 0.8rem;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          cursor: pointer;
          z-index: 200;
          width: auto;
          height: auto;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          visibility: visible;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 2.5rem;
          min-height: 2.5rem;
        }

        @media (max-width: 768px), (max-width: 820px) and (orientation: portrait) {
          .weather-container,
          .weather-container.loading,
          .weather-container.pin-only,
          .weather-container:hover,
          .weather-container.pin-only:hover {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            position: absolute !important;
            top: -9999px !important;
          }

          .contact-form {
            width: 95vw;
            max-width: none;
            margin: 1rem auto 0 auto;
            padding: 1.2rem;
          }

          .contact-form .form-title {
            font-size: 0.85rem;
            margin-bottom: 1.2rem;
          }

          .contact-form input,
          .contact-form textarea {
            font-size: 0.85rem;
          }

          .contact-form textarea {
            min-height: 80px;
          }
        }

        .weather-container.pin-only .location-text {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          overflow: visible !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          transform: translateX(0) !important;
          font-weight: 500 !important;
          font-size: 0.9rem !important;
          white-space: nowrap !important;
        }

        @media (max-width: 768px) {
          .weather-container.pin-only .location-text {
            font-size: 1rem !important;
          }
        }

        .weather-container.loading {
          width: auto;
          padding: 0.5rem 0.8rem;
        }

        .weather-container.pin-only {
          width: auto;
          height: auto;
          padding: 0.6rem 1.2rem;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .weather-container.pin-only .weather-content {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.5rem !important;
        }

        .weather-container.pin-only .weather-content .location-pin {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          height: auto !important;
          overflow: visible !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 1rem !important;
          line-height: 1 !important;
          z-index: 1000 !important;
          position: relative !important;
          margin: 0 !important;
          flex-shrink: 0 !important;
        }

        .weather-container:hover {
          background: rgba(20, 20, 20, 0.9);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: auto;
          max-width: 350px;
          padding: 0.6rem 1rem;
        }

        .weather-container:hover .time-separator {
          display: block !important;
          opacity: 1 !important;
          transform: scale(1) !important;
          visibility: visible !important;
          width: 3px !important;
          height: 3px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          margin: 0 0.2rem !important;
        }

        .weather-container:hover .time-text {
          display: block !important;
          opacity: 1 !important;
          transform: translateX(0) !important;
          visibility: visible !important;
          font-size: 0.65rem !important;
          color: rgba(255, 255, 255, 0.7) !important;
          width: auto !important;
          overflow: visible !important;
        }

        .weather-content {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .location-pin {
          font-size: 1rem;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }

        .weather-container.loading .location-pin {
          display: none;
        }

        .weather-container.pin-only .location-pin {
          display: block !important;
          opacity: 1 !important;
          width: auto !important;
          overflow: visible !important;
          color: red !important;
          font-size: 1.5rem !important;
        }

        .weather-container:hover .location-pin {
          display: block !important;
          opacity: 1 !important;
          width: auto !important;
          overflow: visible !important;
        }

        .location-emoji {
          font-size: 0.9rem;
          margin-left: 0;
          animation: none;
          flex-shrink: 0;
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          width: 0;
          overflow: hidden;
        }

        .weather-container.loading .location-emoji {
          opacity: 1;
          transform: scale(1);
          width: auto;
          overflow: visible;
        }

        .weather-container.pin-only .location-emoji {
          display: none !important;
          opacity: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
        }

        .weather-container:hover .location-emoji {
          display: none !important;
          opacity: 0 !important;
          width: 0 !important;
          margin-left: 0 !important;
          overflow: hidden !important;
        }

        .location-text {
          font-weight: 500;
          opacity: 1;
          transform: translateX(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          width: auto;
          overflow: visible;
          margin-left: 0.2rem;
        }

        .weather-container.loading .location-text {
          opacity: 1;
          transform: translateX(0);
          width: auto;
          overflow: visible;
          margin-left: 0.2rem;
        }

        .location-text.loading {
          position: relative;
        }

        .location-text.loading::after {
          content: '';
          display: inline-block;
          width: 20px;
          text-align: left;
          animation: loadingDots 2s linear infinite;
        }

        .weather-container.pin-only .location-text {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          overflow: visible !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          transform: translateX(0) !important;
          font-weight: 500 !important;
          font-size: 0.8rem !important;
          white-space: nowrap !important;
        }

        .weather-container:hover .location-text {
          opacity: 1 !important;
          transform: translateX(0) !important;
          width: auto !important;
          margin-left: 0.2rem !important;
          overflow: visible !important;
        }

        @keyframes loadingDots {
          0% { content: '.'; }
          33% { content: '..'; }
          66% { content: '...'; }
          100% { content: ''; }
        }

        .time-separator {
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 0.2rem;
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .weather-container:hover .time-separator {
          display: block !important;
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        .time-text {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.7);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .weather-container:hover .time-text {
          display: block !important;
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        .contact-bar {
          position: fixed;
          bottom: var(--safe-area-bottom);
          left: 50%;
          transform: translateX(-50%) translateY(100%);
          width: auto;
          max-width: 20rem;
          min-width: 3rem;
          height: 3rem;
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1.5rem;
          backdrop-filter: blur(12px);
          z-index: 100;
          opacity: 0;
          visibility: hidden;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-bar:not(.collapsed) {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .contact-bar.collapsed {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
          visibility: visible;
          padding: 0.2rem;
          width: 3rem;
          height: 2.8rem;
          min-width: 3rem;
        }

        .email-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .email-button:hover::before {
          left: 100%;
        }

        .email-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .email-button:hover .button-icon {
          transform: translateX(2px);
        }

        .contact-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          transition: gap 3s cubic-bezier(0.23, 1, 0.32, 1);
          white-space: nowrap;
          opacity: 1;
        }

        .contact-content.collapsed {
          gap: 0;
          opacity: 1;
        }

        .email-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.65rem;
          border-radius: 1.5rem;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.85rem;
          transition: all 3s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          width: 2.6rem;
          height: 2.4rem;
          cursor: pointer;
        }

        .email-button.collapsed {
          padding: 0.65rem;
          width: 2.6rem;
          height: 2.4rem;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          border-radius: 1.3rem;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
        }

        .social-divider {
          width: 1px;
          height: 1.8rem;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 1;
          transform: scaleX(1);
          margin: 0 0.4rem;
        }

        .social-divider.collapsed {
          opacity: 0;
          transform: scaleX(0);
          width: 0;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 0.8rem;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 1;
          transform: scale(1);
          width: auto;
          max-width: 60px;
          overflow: hidden;
        }

        .social-links.collapsed {
          opacity: 0;
          transform: scale(0.9);
          width: 0;
          max-width: 0;
          gap: 0;
          margin: 0;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.85rem;
          white-space: nowrap;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          width: 2.6rem;
          height: 2.4rem;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 1.5rem;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }

        .social-icon:hover::before {
          width: 100%;
          height: 100%;
        }

        .social-icon:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 1);
        }

        .linkedin-icon {
          color: #0077b5;
        }

        .linkedin-icon:hover {
          color: #0077b5;
          border-color: rgba(0, 119, 181, 0.3);
          background: rgba(0, 119, 181, 0.1);
        }

        @media (max-width: 640px) {
          .contact-bar {
            bottom: 1.5rem;
            padding: 0.6rem 1.2rem;
          }

          .contact-bar.collapsed {
            padding: 0.4rem;
            width: 3.6rem;
            height: 2.8rem;
            min-width: 3.6rem;
          }

          .email-button {
            padding: 0.55rem 1.1rem;
            font-size: 0.8rem;
            border-radius: 1.5rem;
          }

          .email-button.collapsed {
            padding: 0.35rem 0.5rem;
            width: 2.8rem;
            height: 2rem;
            border-radius: 1.5rem;
          }

          .social-icon {
            padding: 0.55rem 1.1rem;
            font-size: 0.8rem;
            border-radius: 1.5rem;
          }

          .social-divider {
            height: 1.6rem;
          }
        }

        .social-container {
          display: none;
        }

        .location-emoji.finding-animation {
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.8; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1);
          }
        }

        .weather-container.pin-only .weather-content {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .weather-container.pin-only .weather-content .location-pin {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          height: auto !important;
          overflow: visible !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 1rem !important;
          line-height: 1 !important;
          z-index: 1000 !important;
          position: relative !important;
        }

        .weather-container.pin-only .location-emoji {
          display: none !important;
          opacity: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
        }

        .weather-container.pin-only .time-separator {
          display: block !important;
          opacity: 0 !important;
          visibility: hidden !important;
          width: 0 !important;
          margin: 0 !important;
          transform: scaleX(0);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .weather-container.pin-only .time-text {
          display: block !important;
          opacity: 0 !important;
          visibility: hidden !important;
          max-width: 0 !important;
          overflow: hidden !important;
          white-space: nowrap;
          transform: translateX(-20px);
          transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .weather-container.pin-only:hover .time-separator {
          opacity: 1 !important;
          visibility: visible !important;
          width: 3px !important;
          height: 3px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          margin: 0 0.4rem !important;
          transform: scaleX(1) !important;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
        }

        .weather-container.pin-only:hover .time-text {
          opacity: 1 !important;
          visibility: visible !important;
          max-width: 100px !important;
          overflow: visible !important;
          font-size: 0.75rem !important;
          color: rgba(255, 255, 255, 0.8) !important;
          transform: translateX(0) !important;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.4s;
        }

        .weather-container.pin-only:hover .location-text {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          width: auto !important;
          overflow: visible !important;
          margin-left: 0.5rem !important;
        }

        .contact-form {
          opacity: 0;
          visibility: hidden;
          width: 92vw;
          max-width: 32rem;
          margin: 1.5rem auto 3rem auto;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          backdrop-filter: blur(20px);
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
          transform: translateY(30px);
          box-sizing: border-box;
        }

        .contact-form.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .contact-form .form-title {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 500;
        }

        .contact-form .form-group {
          margin-bottom: 1.2rem;
        }

        .contact-form label {
          display: block;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.5rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.8rem;
          font-family: inherit;
          transition: all 0.3s ease;
          box-sizing: border-box;
          resize: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .contact-form textarea {
          min-height: 100px;
          max-height: 150px;
        }

        .contact-form .submit-button {
          width: 100%;
          padding: 0.9rem 1.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-family: inherit;
        }

        .contact-form .submit-button:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .contact-form .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .contact-form .submit-button:disabled:hover {
          transform: none;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-color: rgba(255, 255, 255, 0.2);
        }

        .form-message {
          padding: 0.8rem 1rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          font-size: 0.8rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .form-message.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: rgba(34, 197, 94, 0.9);
        }

        .form-message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: rgba(239, 68, 68, 0.9);
        }

        @media (min-width: 640px) {
          .contact-form {
            padding: 2rem;
            max-width: 28rem;
            width: 80%;
          }

          .contact-form .form-title {
            font-size: 1rem;
          }

          .contact-form label {
            font-size: 0.8rem;
          }

          .contact-form input,
          .contact-form textarea {
            font-size: 0.85rem;
            padding: 0.9rem 1.2rem;
          }

          .contact-form .submit-button {
            font-size: 0.85rem;
            padding: 1rem 1.8rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-form {
            max-width: 32rem;
            width: 75%;
          }
        }
      `}),k.jsx("div",{className:"top-gradient"}),k.jsxs("div",{className:pc,children:[k.jsx("div",{className:"mobile-text",children:k.jsx("p",{children:"Hi, I'm Aleks — I turn ambitious ideas into reality through strategic execution."})}),k.jsxs("div",{className:"desktop-text",children:[k.jsx("span",{children:"Hi"}),k.jsx("span",{children:", "}),k.jsx("span",{children:"I'm "}),k.jsx("span",{className:"name relative",children:"Aleks"}),k.jsx("span",{children:"— "}),k.jsx("span",{children:"I turn ambitious ideas into "}),k.jsx("span",{className:"vision",children:"reality"}),k.jsx("span",{children:" through strategic "}),k.jsx("span",{className:"execution",children:"execution"}),k.jsx("span",{children:"."})]}),k.jsx("div",{className:mc,onClick:()=>He(!0)}),k.jsxs("div",{className:`content-section ${e>=1?"visible":""}`,children:[k.jsx("div",{className:"section-hint",children:"Leadership & Scale"}),k.jsx("p",{children:"I've led cross-functional teams through complex product development cycles, with experience managing initiatives ranging from mid-six to seven figures. My focus is on clear communication, realistic timelines, and building scalable processes that align business needs with technical execution"})]}),k.jsxs("div",{className:`content-section ${e>=2?"visible":""}`,children:[k.jsx("div",{className:"section-hint",children:"Current Work"}),k.jsx("p",{children:"As Card79's Strategic Program Manager, I align industrial design, mechanical, electrical, firmware, UX, and brand teams around a unified roadmap. I own schedules, budgets, and risk plans for products shipping into medical, robotics, and wearable markets, serving founders fresh off seed rounds as well as multinational enterprises launching next‑gen lines."})]}),k.jsxs("div",{className:`content-section ${e>=3?"visible":""}`,style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",margin:"0.8rem auto 1.5rem auto",padding:"1rem 1.5rem"},children:[k.jsxs("div",{className:"text-center mb-4",children:[k.jsx("div",{className:"section-hint",children:"Journey"}),k.jsx("p",{className:"text-white/60 font-light",style:{fontSize:"0.7rem"},children:"Explore the timeline"})]}),k.jsx("div",{ref:Ht,className:"timeline",onMouseMove:Vt,style:{position:"relative",marginBottom:"1rem",padding:"0 1rem"},children:P.map((j,D)=>k.jsx("div",{className:"timeline-item",style:{left:`${D/(P.length-1)*100}%`},onClick:()=>cc(D),children:k.jsx("span",{className:"year",children:j.year})},j.year))}),k.jsx("div",{style:{minHeight:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 1rem",marginBottom:"1.5rem"},children:k.jsx("p",{className:"timeline-text",children:p})})]}),k.jsxs("div",{className:`contact-form ${e>=4?"visible":""}`,children:[k.jsx("div",{className:"form-title",children:"Get In Touch"}),k.jsxs("form",{onSubmit:dc,children:[k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"name",children:"Name"}),k.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your Name",required:!0})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"email",children:"Email"}),k.jsx("input",{type:"email",id:"email",name:"email",placeholder:"your.email@example.com",required:!0})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"message",children:"Message"}),k.jsx("textarea",{id:"message",name:"message",placeholder:"Your message here...",required:!0})]}),L&&k.jsx("div",{className:`form-message ${N}`,children:L}),k.jsx("button",{type:"submit",className:"submit-button",disabled:N==="submitting",children:N==="submitting"?"Sending...":"Send Message"})]})]})]}),k.jsx("div",{className:`weather-container ${h?"loading":"pin-only"}`,children:k.jsxs("div",{className:"weather-content",children:[k.jsx("span",{className:"location-pin",children:"📍"}),k.jsx("span",{className:`location-emoji ${h?"finding-animation":""}`,children:h?"🔍":s}),k.jsx("span",{className:`location-text ${h?"loading":""}`,children:u}),M&&!h&&k.jsxs(k.Fragment,{children:[k.jsx("span",{className:"time-separator"}),k.jsx("span",{className:"time-text",children:M})]})]})}),_&&e<4&&k.jsx("div",{className:`contact-bar ${g?"":"collapsed"}`,children:k.jsxs("div",{className:`contact-content ${g?"":"collapsed"}`,children:[k.jsx("button",{type:"button",className:`email-button ${g?"":"collapsed"}`,onClick:()=>t(4),children:k.jsxs("svg",{className:"button-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),k.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),k.jsx("div",{className:`social-divider ${g?"":"collapsed"}`}),k.jsx("div",{className:`social-links ${g?"":"collapsed"}`,children:k.jsx("a",{href:"https://linkedin.com/in/your-profile",target:"_blank",rel:"noopener noreferrer",className:"social-icon linkedin-icon",title:"LinkedIn",children:k.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"#0077b5",stroke:"none",children:[k.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),k.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),k.jsx("circle",{cx:"4",cy:"4",r:"2"})]})})})]})})]})}to.createRoot(document.getElementById("root")).render(k.jsx(jc.StrictMode,{children:k.jsx(Wf,{})}));
//# sourceMappingURL=index-16513207.js.map
