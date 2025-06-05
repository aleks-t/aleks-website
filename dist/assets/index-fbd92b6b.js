(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},si={},qa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),dc=Symbol.for("react.portal"),fc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),wc=Symbol.for("react.memo"),xc=Symbol.for("react.lazy"),Bl=Symbol.iterator;function kc(e){return e===null||typeof e!="object"?null:(e=Bl&&e[Bl]||e["@@iterator"],typeof e=="function"?e:null)}var ba={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,tu={};function gn(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||ba}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nu(){}nu.prototype=gn.prototype;function Xo(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||ba}var Yo=Xo.prototype=new nu;Yo.constructor=Xo;eu(Yo,gn.prototype);Yo.isPureReactComponent=!0;var Wl=Array.isArray,ru=Object.prototype.hasOwnProperty,Ko={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ru.call(t,r)&&!iu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:or,type:e,key:o,ref:l,props:i,_owner:Ko.current}}function Sc(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Go(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Ec(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hl=/\/+/g;function _i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ec(""+e.key):t.toString(36)}function Nr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case or:case dc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+_i(l,0):r,Wl(i)?(n="",e!=null&&(n=e.replace(Hl,"$&/")+"/"),Nr(i,t,n,"",function(c){return c})):i!=null&&(Go(i)&&(i=Sc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Hl,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Wl(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+_i(o,a);l+=Nr(o,t,n,u,i)}else if(u=kc(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+_i(o,a++),l+=Nr(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function cr(e,t,n){if(e==null)return e;var r=[],i=0;return Nr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Cc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Pr={transition:null},zc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:Ko};function lu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:cr,forEach:function(e,t,n){cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cr(e,function(){t++}),t},toArray:function(e){return cr(e,function(t){return t})||[]},only:function(e){if(!Go(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=gn;L.Fragment=fc;L.Profiler=mc;L.PureComponent=Xo;L.StrictMode=pc;L.Suspense=yc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc;L.act=lu;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ko.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ru.call(t,u)&&!iu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:or,type:e.type,key:i,ref:o,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hc,_context:e},e.Consumer=e};L.createElement=ou;L.createFactory=function(e){var t=ou.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:vc,render:e}};L.isValidElement=Go;L.lazy=function(e){return{$$typeof:xc,_payload:{_status:-1,_result:e},_init:Cc}};L.memo=function(e,t){return{$$typeof:wc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=t}};L.unstable_act=lu;L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.3.1";qa.exports=L;var Y=qa.exports;const _c=cc(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=Y,Pc=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),jc=Object.prototype.hasOwnProperty,Lc=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function au(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)jc.call(t,r)&&!Rc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Pc,type:e,key:o,ref:l,props:i,_owner:Lc.current}}si.Fragment=Tc;si.jsx=au;si.jsxs=au;Ja.exports=si;var S=Ja.exports,qi={},uu={exports:{}},Ee={},su={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,P){var T=k.length;k.push(P);e:for(;0<T;){var U=T-1>>>1,G=k[U];if(0<i(G,P))k[U]=P,k[T]=G,T=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var P=k[0],T=k.pop();if(T!==P){k[0]=T;e:for(var U=0,G=k.length,Vt=G>>>1;U<Vt;){var Qe=2*(U+1)-1,xn=k[Qe],Xe=Qe+1,Bt=k[Xe];if(0>i(xn,T))Xe<G&&0>i(Bt,xn)?(k[U]=Bt,k[Xe]=T,U=Xe):(k[U]=xn,k[Qe]=T,U=Qe);else if(Xe<G&&0>i(Bt,T))k[U]=Bt,k[Xe]=T,U=Xe;else break e}}return P}function i(k,P){var T=k.sortIndex-P.sortIndex;return T!==0?T:k.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],h=1,m=null,p=3,y=!1,w=!1,x=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=k)r(c),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(c)}}function g(k){if(x=!1,f(k),!w)if(n(u)!==null)w=!0,Ct(E);else{var P=n(c);P!==null&&At(g,P.startTime-k)}}function E(k,P){w=!1,x&&(x=!1,d(N),N=-1),y=!0;var T=p;try{for(f(P),m=n(u);m!==null&&(!(m.expirationTime>P)||k&&!te());){var U=m.callback;if(typeof U=="function"){m.callback=null,p=m.priorityLevel;var G=U(m.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?m.callback=G:m===n(u)&&r(u),f(P)}else r(u);m=n(u)}if(m!==null)var Vt=!0;else{var Qe=n(c);Qe!==null&&At(g,Qe.startTime-P),Vt=!1}return Vt}finally{m=null,p=T,y=!1}}var _=!1,z=null,N=-1,F=5,j=-1;function te(){return!(e.unstable_now()-j<F)}function rt(){if(z!==null){var k=e.unstable_now();j=k;var P=!0;try{P=z(!0,k)}finally{P?Ue():(_=!1,z=null)}}else _=!1}var Ue;if(typeof s=="function")Ue=function(){s(rt)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,wn=Ut.port2;Ut.port1.onmessage=rt,Ue=function(){wn.postMessage(null)}}else Ue=function(){O(rt,0)};function Ct(k){z=k,_||(_=!0,Ue())}function At(k,P){N=O(function(){k(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Ct(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(k){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var T=p;p=P;try{return k()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var T=p;p=k;try{return P()}finally{p=T}},e.unstable_scheduleCallback=function(k,P,T){var U=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?U+T:U):T=U,k){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=T+G,k={id:h++,callback:P,priorityLevel:k,startTime:T,expirationTime:G,sortIndex:-1},T>U?(k.sortIndex=T,t(c,k),n(u)===null&&k===n(c)&&(x?(d(N),N=-1):x=!0,At(g,T-U))):(k.sortIndex=G,t(u,k),w||y||(w=!0,Ct(E))),k},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(k){var P=p;return function(){var T=p;p=P;try{return k.apply(this,arguments)}finally{p=T}}}})(cu);su.exports=cu;var Mc=su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=Y,Se=Mc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var du=new Set,Bn={};function Ft(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Bn[e]=t,e=0;e<t.length;e++)du.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bi=Object.prototype.hasOwnProperty,Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ql={},Xl={};function Oc(e){return bi.call(Xl,e)?!0:bi.call(Ql,e)?!1:Dc.test(e)?Xl[e]=!0:(Ql[e]=!0,!1)}function Fc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $c(e,t,n,r){if(t===null||typeof t>"u"||Fc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zo=/[\-:]([a-z])/g;function Jo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zo,Jo);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zo,Jo);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zo,Jo);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function qo(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($c(t,n,i,r)&&(n=null),r||i===null?Oc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),bo=Symbol.for("react.strict_mode"),eo=Symbol.for("react.profiler"),fu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),el=Symbol.for("react.forward_ref"),to=Symbol.for("react.suspense"),no=Symbol.for("react.suspense_list"),tl=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),mu=Symbol.for("react.offscreen"),Yl=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=Yl&&e[Yl]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ni;function Tn(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var Pi=!1;function Ti(e,t){if(!e||Pi)return"";Pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function Uc(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Ht:return"Portal";case eo:return"Profiler";case bo:return"StrictMode";case to:return"Suspense";case no:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pu:return(e.displayName||"Context")+".Consumer";case fu:return(e._context.displayName||"Context")+".Provider";case el:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tl:return t=e.displayName||null,t!==null?t:ro(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return ro(e(t))}catch{}}return null}function Ac(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ro(t);case 8:return t===bo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vc(e){var t=hu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fr(e){e._valueTracker||(e._valueTracker=Vc(e))}function gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function io(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vu(e,t){t=t.checked,t!=null&&qo(e,"checked",t,!1)}function oo(e,t){vu(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lo(e,t.type,n):t.hasOwnProperty("defaultValue")&&lo(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function lo(e,t,n){(t!=="number"||Ur(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(jn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function yu(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pr,xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bc=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Bc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function ku(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function Su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ku(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wc=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function so(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,rn=null,on=null;function ql(e){if(e=ur(e)){if(typeof po!="function")throw Error(v(280));var t=e.stateNode;t&&(t=mi(t),po(e.stateNode,e.type,t))}}function Eu(e){rn?on?on.push(e):on=[e]:rn=e}function Cu(){if(rn){var e=rn,t=on;if(on=rn=null,ql(e),t)for(e=0;e<t.length;e++)ql(t[e])}}function zu(e,t){return e(t)}function _u(){}var ji=!1;function Nu(e,t,n){if(ji)return e(t,n);ji=!0;try{return zu(e,t,n)}finally{ji=!1,(rn!==null||on!==null)&&(_u(),Cu())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var mo=!1;if(qe)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){mo=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{mo=!1}function Hc(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var In=!1,Ar=null,Vr=!1,ho=null,Qc={onError:function(e){In=!0,Ar=e}};function Xc(e,t,n,r,i,o,l,a,u){In=!1,Ar=null,Hc.apply(Qc,arguments)}function Yc(e,t,n,r,i,o,l,a,u){if(Xc.apply(this,arguments),In){if(In){var c=Ar;In=!1,Ar=null}else throw Error(v(198));Vr||(Vr=!0,ho=c)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bl(e){if($t(e)!==e)throw Error(v(188))}function Kc(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return bl(i),e;if(o===r)return bl(i),t;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Tu(e){return e=Kc(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Lu=Se.unstable_scheduleCallback,ea=Se.unstable_cancelCallback,Gc=Se.unstable_shouldYield,Zc=Se.unstable_requestPaint,K=Se.unstable_now,Jc=Se.unstable_getCurrentPriorityLevel,rl=Se.unstable_ImmediatePriority,Ru=Se.unstable_UserBlockingPriority,Br=Se.unstable_NormalPriority,qc=Se.unstable_LowPriority,Mu=Se.unstable_IdlePriority,ci=null,We=null;function bc(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:nd,ed=Math.log,td=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(ed(e)/td|0)|0}var mr=64,hr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Ln(a):(o&=l,o!==0&&(r=Ln(o)))}else l=n&~i,l!==0?r=Ln(l):o!==0&&(r=Ln(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Oe(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=rd(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=mr;return mr<<=1,!(mr&4194240)&&(mr=64),e}function Li(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ou,ol,Fu,$u,Uu,vo=!1,gr=[],dt=null,ft=null,pt=null,Qn=new Map,Xn=new Map,at=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ta(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function En(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ur(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ad(e,t,n,r,i){switch(t){case"focusin":return dt=En(dt,e,t,n,r,i),!0;case"dragenter":return ft=En(ft,e,t,n,r,i),!0;case"mouseover":return pt=En(pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qn.set(o,En(Qn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Xn.set(o,En(Xn.get(o)||null,e,t,n,r,i)),!0}return!1}function Au(e){var t=Nt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Pu(n),t!==null){e.blockedOn=t,Uu(e.priority,function(){Fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fo=r,n.target.dispatchEvent(r),fo=null}else return t=ur(n),t!==null&&ol(t),e.blockedOn=n,!1;t.shift()}return!0}function na(e,t,n){Tr(e)&&n.delete(t)}function ud(){vo=!1,dt!==null&&Tr(dt)&&(dt=null),ft!==null&&Tr(ft)&&(ft=null),pt!==null&&Tr(pt)&&(pt=null),Qn.forEach(na),Xn.forEach(na)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,ud)))}function Yn(e){function t(i){return Cn(i,e)}if(0<gr.length){Cn(gr[0],e);for(var n=1;n<gr.length;n++){var r=gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Cn(dt,e),ft!==null&&Cn(ft,e),pt!==null&&Cn(pt,e),Qn.forEach(t),Xn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)Au(n),n.blockedOn===null&&at.shift()}var ln=nt.ReactCurrentBatchConfig,Hr=!0;function sd(e,t,n,r){var i=D,o=ln.transition;ln.transition=null;try{D=1,ll(e,t,n,r)}finally{D=i,ln.transition=o}}function cd(e,t,n,r){var i=D,o=ln.transition;ln.transition=null;try{D=4,ll(e,t,n,r)}finally{D=i,ln.transition=o}}function ll(e,t,n,r){if(Hr){var i=yo(e,t,n,r);if(i===null)Vi(e,t,r,Qr,n),ta(e,r);else if(ad(i,e,t,n,r))r.stopPropagation();else if(ta(e,r),t&4&&-1<ld.indexOf(e)){for(;i!==null;){var o=ur(i);if(o!==null&&Ou(o),o=yo(e,t,n,r),o===null&&Vi(e,t,r,Qr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vi(e,t,r,null,n)}}var Qr=null;function yo(e,t,n,r){if(Qr=null,e=nl(r),e=Nt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function Vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jc()){case rl:return 1;case Ru:return 4;case Br:case qc:return 16;case Mu:return 536870912;default:return 16}default:return 16}}var st=null,al=null,jr=null;function Bu(){if(jr)return jr;var e,t=al,n=t.length,r,i="value"in st?st.value:st.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return jr=i.slice(e,1<r?1-r:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vr(){return!0}function ra(){return!1}function Ce(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vr:ra,this.isPropagationStopped=ra,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Ce(vn),ar=Q({},vn,{view:0,detail:0}),dd=Ce(ar),Ri,Mi,zn,di=Q({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Ri=e.screenX-zn.screenX,Mi=e.screenY-zn.screenY):Mi=Ri=0,zn=e),Ri)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),ia=Ce(di),fd=Q({},di,{dataTransfer:0}),pd=Ce(fd),md=Q({},ar,{relatedTarget:0}),Ii=Ce(md),hd=Q({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=Ce(hd),vd=Q({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yd=Ce(vd),wd=Q({},vn,{data:0}),oa=Ce(wd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ed(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sd[e])?!!t[e]:!1}function sl(){return Ed}var Cd=Q({},ar,{key:function(e){if(e.key){var t=xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=Ce(Cd),_d=Q({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),la=Ce(_d),Nd=Q({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),Pd=Ce(Nd),Td=Q({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jd=Ce(Td),Ld=Q({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=Ce(Ld),Md=[9,13,27,32],cl=qe&&"CompositionEvent"in window,Dn=null;qe&&"documentMode"in document&&(Dn=document.documentMode);var Id=qe&&"TextEvent"in window&&!Dn,Wu=qe&&(!cl||Dn&&8<Dn&&11>=Dn),aa=String.fromCharCode(32),ua=!1;function Hu(e,t){switch(e){case"keyup":return Md.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Dd(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(ua=!0,aa);case"textInput":return e=t.data,e===aa&&ua?null:e;default:return null}}function Od(e,t){if(Xt)return e==="compositionend"||!cl&&Hu(e,t)?(e=Bu(),jr=al=st=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wu&&t.locale!=="ko"?null:t.data;default:return null}}var Fd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fd[e.type]:t==="textarea"}function Xu(e,t,n,r){Eu(r),t=Xr(t,"onChange"),0<t.length&&(n=new ul("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Kn=null;function $d(e){rs(e,0)}function fi(e){var t=Gt(e);if(gu(t))return e}function Ud(e,t){if(e==="change")return t}var Yu=!1;if(qe){var Di;if(qe){var Oi="oninput"in document;if(!Oi){var ca=document.createElement("div");ca.setAttribute("oninput","return;"),Oi=typeof ca.oninput=="function"}Di=Oi}else Di=!1;Yu=Di&&(!document.documentMode||9<document.documentMode)}function da(){On&&(On.detachEvent("onpropertychange",Ku),Kn=On=null)}function Ku(e){if(e.propertyName==="value"&&fi(Kn)){var t=[];Xu(t,Kn,e,nl(e)),Nu($d,t)}}function Ad(e,t,n){e==="focusin"?(da(),On=t,Kn=n,On.attachEvent("onpropertychange",Ku)):e==="focusout"&&da()}function Vd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(Kn)}function Bd(e,t){if(e==="click")return fi(t)}function Wd(e,t){if(e==="input"||e==="change")return fi(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Hd;function Gn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bi.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pa(e,t){var n=fa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fa(n)}}function Gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zu(){for(var e=window,t=Ur();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qd(e){var t=Zu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gu(n.ownerDocument.documentElement,n)){if(r!==null&&dl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pa(n,o);var l=pa(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=qe&&"documentMode"in document&&11>=document.documentMode,Yt=null,wo=null,Fn=null,xo=!1;function ma(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||Yt==null||Yt!==Ur(r)||(r=Yt,"selectionStart"in r&&dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fn&&Gn(Fn,r)||(Fn=r,r=Xr(wo,"onSelect"),0<r.length&&(t=new ul("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},Fi={},Ju={};qe&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function pi(e){if(Fi[e])return Fi[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ju)return Fi[e]=t[n];return e}var qu=pi("animationend"),bu=pi("animationiteration"),es=pi("animationstart"),ts=pi("transitionend"),ns=new Map,ha="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){ns.set(e,t),Ft(t,[e])}for(var $i=0;$i<ha.length;$i++){var Ui=ha[$i],Yd=Ui.toLowerCase(),Kd=Ui[0].toUpperCase()+Ui.slice(1);kt(Yd,"on"+Kd)}kt(qu,"onAnimationEnd");kt(bu,"onAnimationIteration");kt(es,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(ts,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function ga(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yc(r,t,void 0,e),e.currentTarget=null}function rs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;ga(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;ga(i,a,c),o=u}}}if(Vr)throw e=ho,Vr=!1,ho=null,e}function A(e,t){var n=t[zo];n===void 0&&(n=t[zo]=new Set);var r=e+"__bubble";n.has(r)||(is(t,e,2,!1),n.add(r))}function Ai(e,t,n){var r=0;t&&(r|=4),is(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[wr]){e[wr]=!0,du.forEach(function(n){n!=="selectionchange"&&(Gd.has(n)||Ai(n,!1,e),Ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Ai("selectionchange",!1,t))}}function is(e,t,n,r){switch(Vu(t)){case 1:var i=sd;break;case 4:i=cd;break;default:i=ll}n=i.bind(null,t,n,e),i=void 0,!mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Nt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Nu(function(){var c=o,h=nl(n),m=[];e:{var p=ns.get(e);if(p!==void 0){var y=ul,w=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":y=zd;break;case"focusin":w="focus",y=Ii;break;case"focusout":w="blur",y=Ii;break;case"beforeblur":case"afterblur":y=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Pd;break;case qu:case bu:case es:y=gd;break;case ts:y=jd;break;case"scroll":y=dd;break;case"wheel":y=Rd;break;case"copy":case"cut":case"paste":y=yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=la}var x=(t&4)!==0,O=!x&&e==="scroll",d=x?p!==null?p+"Capture":null:p;x=[];for(var s=c,f;s!==null;){f=s;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Hn(s,d),g!=null&&x.push(Jn(s,g,f)))),O)break;s=s.return}0<x.length&&(p=new y(p,w,null,n,h),m.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==fo&&(w=n.relatedTarget||n.fromElement)&&(Nt(w)||w[be]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?Nt(w):null,w!==null&&(O=$t(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=ia,g="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(x=la,g="onPointerLeave",d="onPointerEnter",s="pointer"),O=y==null?p:Gt(y),f=w==null?p:Gt(w),p=new x(g,s+"leave",y,n,h),p.target=O,p.relatedTarget=f,g=null,Nt(h)===c&&(x=new x(d,s+"enter",w,n,h),x.target=f,x.relatedTarget=O,g=x),O=g,y&&w)t:{for(x=y,d=w,s=0,f=x;f;f=Wt(f))s++;for(f=0,g=d;g;g=Wt(g))f++;for(;0<s-f;)x=Wt(x),s--;for(;0<f-s;)d=Wt(d),f--;for(;s--;){if(x===d||d!==null&&x===d.alternate)break t;x=Wt(x),d=Wt(d)}x=null}else x=null;y!==null&&va(m,p,y,x,!1),w!==null&&O!==null&&va(m,O,w,x,!0)}}e:{if(p=c?Gt(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var E=Ud;else if(sa(p))if(Yu)E=Wd;else{E=Vd;var _=Ad}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Bd);if(E&&(E=E(e,c))){Xu(m,E,n,h);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&lo(p,"number",p.value)}switch(_=c?Gt(c):window,e){case"focusin":(sa(_)||_.contentEditable==="true")&&(Yt=_,wo=c,Fn=null);break;case"focusout":Fn=wo=Yt=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,ma(m,n,h);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":ma(m,n,h)}var z;if(cl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Xt?Hu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Wu&&n.locale!=="ko"&&(Xt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Xt&&(z=Bu()):(st=h,al="value"in st?st.value:st.textContent,Xt=!0)),_=Xr(c,N),0<_.length&&(N=new oa(N,e,null,n,h),m.push({event:N,listeners:_}),z?N.data=z:(z=Qu(n),z!==null&&(N.data=z)))),(z=Id?Dd(e,n):Od(e,n))&&(c=Xr(c,"onBeforeInput"),0<c.length&&(h=new oa("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=z))}rs(m,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Hn(e,n),o!=null&&r.unshift(Jn(e,o,i)),o=Hn(e,t),o!=null&&r.push(Jn(e,o,i))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function va(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Hn(n,o),u!=null&&l.unshift(Jn(n,u,a))):i||(u=Hn(n,o),u!=null&&l.push(Jn(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zd=/\r\n?/g,Jd=/\u0000|\uFFFD/g;function ya(e){return(typeof e=="string"?e:""+e).replace(Zd,`
`).replace(Jd,"")}function xr(e,t,n){if(t=ya(t),ya(e)!==t&&n)throw Error(v(425))}function Yr(){}var ko=null,So=null;function Eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,wa=typeof Promise=="function"?Promise:void 0,bd=typeof queueMicrotask=="function"?queueMicrotask:typeof wa<"u"?function(e){return wa.resolve(null).then(e).catch(ef)}:Co;function ef(e){setTimeout(function(){throw e})}function Bi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Be="__reactFiber$"+yn,qn="__reactProps$"+yn,be="__reactContainer$"+yn,zo="__reactEvents$"+yn,tf="__reactListeners$"+yn,nf="__reactHandles$"+yn;function Nt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[be]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xa(e);e!==null;){if(n=e[Be])return n;e=xa(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Be]||e[be],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function mi(e){return e[qn]||null}var _o=[],Zt=-1;function St(e){return{current:e}}function V(e){0>Zt||(e.current=_o[Zt],_o[Zt]=null,Zt--)}function $(e,t){Zt++,_o[Zt]=e.current,e.current=t}var xt={},se=St(xt),ge=St(!1),Rt=xt;function cn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Kr(){V(ge),V(se)}function ka(e,t,n){if(se.current!==xt)throw Error(v(168));$(se,t),$(ge,n)}function os(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(v(108,Ac(e)||"Unknown",i));return Q({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Rt=se.current,$(se,e),$(ge,ge.current),!0}function Sa(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=os(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,V(ge),V(se),$(se,e)):V(ge),$(ge,n)}var Ke=null,hi=!1,Wi=!1;function ls(e){Ke===null?Ke=[e]:Ke.push(e)}function rf(e){hi=!0,ls(e)}function Et(){if(!Wi&&Ke!==null){Wi=!0;var e=0,t=D;try{var n=Ke;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,hi=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),Lu(rl,Et),i}finally{D=t,Wi=!1}}return null}var Jt=[],qt=0,Zr=null,Jr=0,ze=[],_e=0,Mt=null,Ge=1,Ze="";function zt(e,t){Jt[qt++]=Jr,Jt[qt++]=Zr,Zr=e,Jr=t}function as(e,t,n){ze[_e++]=Ge,ze[_e++]=Ze,ze[_e++]=Mt,Mt=e;var r=Ge;e=Ze;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var o=32-Oe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ge=1<<32-Oe(t)+i|n<<i|r,Ze=o+e}else Ge=1<<o|n<<i|r,Ze=e}function fl(e){e.return!==null&&(zt(e,1),as(e,1,0))}function pl(e){for(;e===Zr;)Zr=Jt[--qt],Jt[qt]=null,Jr=Jt[--qt],Jt[qt]=null;for(;e===Mt;)Mt=ze[--_e],ze[_e]=null,Ze=ze[--_e],ze[_e]=null,Ge=ze[--_e],ze[_e]=null}var ke=null,xe=null,B=!1,De=null;function us(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ea(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,xe=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Ge,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,xe=null,!0):!1;default:return!1}}function No(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Po(e){if(B){var t=xe;if(t){var n=t;if(!Ea(e,t)){if(No(e))throw Error(v(418));t=mt(n.nextSibling);var r=ke;t&&Ea(e,t)?us(r,n):(e.flags=e.flags&-4097|2,B=!1,ke=e)}}else{if(No(e))throw Error(v(418));e.flags=e.flags&-4097|2,B=!1,ke=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function kr(e){if(e!==ke)return!1;if(!B)return Ca(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Eo(e.type,e.memoizedProps)),t&&(t=xe)){if(No(e))throw ss(),Error(v(418));for(;t;)us(e,t),t=mt(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ke?mt(e.stateNode.nextSibling):null;return!0}function ss(){for(var e=xe;e;)e=mt(e.nextSibling)}function dn(){xe=ke=null,B=!1}function ml(e){De===null?De=[e]:De.push(e)}var of=nt.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function za(e){var t=e._init;return t(e._payload)}function cs(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function i(d,s){return d=yt(d,s),d.index=0,d.sibling=null,d}function o(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,f,g){return s===null||s.tag!==6?(s=Zi(f,d.mode,g),s.return=d,s):(s=i(s,f),s.return=d,s)}function u(d,s,f,g){var E=f.type;return E===Qt?h(d,s,f.props.children,g,f.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ot&&za(E)===s.type)?(g=i(s,f.props),g.ref=_n(d,s,f),g.return=d,g):(g=$r(f.type,f.key,f.props,null,d.mode,g),g.ref=_n(d,s,f),g.return=d,g)}function c(d,s,f,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Ji(f,d.mode,g),s.return=d,s):(s=i(s,f.children||[]),s.return=d,s)}function h(d,s,f,g,E){return s===null||s.tag!==7?(s=Lt(f,d.mode,g,E),s.return=d,s):(s=i(s,f),s.return=d,s)}function m(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Zi(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case dr:return f=$r(s.type,s.key,s.props,null,d.mode,f),f.ref=_n(d,null,s),f.return=d,f;case Ht:return s=Ji(s,d.mode,f),s.return=d,s;case ot:var g=s._init;return m(d,g(s._payload),f)}if(jn(s)||kn(s))return s=Lt(s,d.mode,f,null),s.return=d,s;Sr(d,s)}return null}function p(d,s,f,g){var E=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:a(d,s,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case dr:return f.key===E?u(d,s,f,g):null;case Ht:return f.key===E?c(d,s,f,g):null;case ot:return E=f._init,p(d,s,E(f._payload),g)}if(jn(f)||kn(f))return E!==null?null:h(d,s,f,g,null);Sr(d,f)}return null}function y(d,s,f,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(s,d,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dr:return d=d.get(g.key===null?f:g.key)||null,u(s,d,g,E);case Ht:return d=d.get(g.key===null?f:g.key)||null,c(s,d,g,E);case ot:var _=g._init;return y(d,s,f,_(g._payload),E)}if(jn(g)||kn(g))return d=d.get(f)||null,h(s,d,g,E,null);Sr(s,g)}return null}function w(d,s,f,g){for(var E=null,_=null,z=s,N=s=0,F=null;z!==null&&N<f.length;N++){z.index>N?(F=z,z=null):F=z.sibling;var j=p(d,z,f[N],g);if(j===null){z===null&&(z=F);break}e&&z&&j.alternate===null&&t(d,z),s=o(j,s,N),_===null?E=j:_.sibling=j,_=j,z=F}if(N===f.length)return n(d,z),B&&zt(d,N),E;if(z===null){for(;N<f.length;N++)z=m(d,f[N],g),z!==null&&(s=o(z,s,N),_===null?E=z:_.sibling=z,_=z);return B&&zt(d,N),E}for(z=r(d,z);N<f.length;N++)F=y(z,d,N,f[N],g),F!==null&&(e&&F.alternate!==null&&z.delete(F.key===null?N:F.key),s=o(F,s,N),_===null?E=F:_.sibling=F,_=F);return e&&z.forEach(function(te){return t(d,te)}),B&&zt(d,N),E}function x(d,s,f,g){var E=kn(f);if(typeof E!="function")throw Error(v(150));if(f=E.call(f),f==null)throw Error(v(151));for(var _=E=null,z=s,N=s=0,F=null,j=f.next();z!==null&&!j.done;N++,j=f.next()){z.index>N?(F=z,z=null):F=z.sibling;var te=p(d,z,j.value,g);if(te===null){z===null&&(z=F);break}e&&z&&te.alternate===null&&t(d,z),s=o(te,s,N),_===null?E=te:_.sibling=te,_=te,z=F}if(j.done)return n(d,z),B&&zt(d,N),E;if(z===null){for(;!j.done;N++,j=f.next())j=m(d,j.value,g),j!==null&&(s=o(j,s,N),_===null?E=j:_.sibling=j,_=j);return B&&zt(d,N),E}for(z=r(d,z);!j.done;N++,j=f.next())j=y(z,d,N,j.value,g),j!==null&&(e&&j.alternate!==null&&z.delete(j.key===null?N:j.key),s=o(j,s,N),_===null?E=j:_.sibling=j,_=j);return e&&z.forEach(function(rt){return t(d,rt)}),B&&zt(d,N),E}function O(d,s,f,g){if(typeof f=="object"&&f!==null&&f.type===Qt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case dr:e:{for(var E=f.key,_=s;_!==null;){if(_.key===E){if(E=f.type,E===Qt){if(_.tag===7){n(d,_.sibling),s=i(_,f.props.children),s.return=d,d=s;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ot&&za(E)===_.type){n(d,_.sibling),s=i(_,f.props),s.ref=_n(d,_,f),s.return=d,d=s;break e}n(d,_);break}else t(d,_);_=_.sibling}f.type===Qt?(s=Lt(f.props.children,d.mode,g,f.key),s.return=d,d=s):(g=$r(f.type,f.key,f.props,null,d.mode,g),g.ref=_n(d,s,f),g.return=d,d=g)}return l(d);case Ht:e:{for(_=f.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=i(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=Ji(f,d.mode,g),s.return=d,d=s}return l(d);case ot:return _=f._init,O(d,s,_(f._payload),g)}if(jn(f))return w(d,s,f,g);if(kn(f))return x(d,s,f,g);Sr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=i(s,f),s.return=d,d=s):(n(d,s),s=Zi(f,d.mode,g),s.return=d,d=s),l(d)):n(d,s)}return O}var fn=cs(!0),ds=cs(!1),qr=St(null),br=null,bt=null,hl=null;function gl(){hl=bt=br=null}function vl(e){var t=qr.current;V(qr),e._currentValue=t}function To(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){br=e,hl=bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(hl!==e)if(e={context:e,memoizedValue:t,next:null},bt===null){if(br===null)throw Error(v(308));bt=e,br.dependencies={lanes:0,firstContext:e}}else bt=bt.next=e;return t}var Pt=null;function yl(e){Pt===null?Pt=[e]:Pt.push(e)}function fs(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,et(e,n)}return i=r.interleaved,i===null?(t.next=t,yl(r)):(t.next=i.next,i.next=t),r.interleaved=t,et(e,n)}function Rr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}function _a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ei(e,t,n,r){var i=e.updateQueue;lt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,h=c=u=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,x=a;switch(p=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){m=w.call(y,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(y,m,p):w,p==null)break e;m=Q({},m,p);break e;case 2:lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=m):h=h.next=y,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dt|=l,e.lanes=l,e.memoizedState=m}}function Na(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var sr={},He=St(sr),bn=St(sr),er=St(sr);function Tt(e){if(e===sr)throw Error(v(174));return e}function xl(e,t){switch($(er,t),$(bn,e),$(He,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uo(t,e)}V(He),$(He,t)}function pn(){V(He),V(bn),V(er)}function ms(e){Tt(er.current);var t=Tt(He.current),n=uo(t,e.type);t!==n&&($(bn,e),$(He,n))}function kl(e){bn.current===e&&(V(He),V(bn))}var W=St(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function Sl(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var Mr=nt.ReactCurrentDispatcher,Qi=nt.ReactCurrentBatchConfig,It=0,H=null,J=null,b=null,ni=!1,$n=!1,tr=0,lf=0;function le(){throw Error(v(321))}function El(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Cl(e,t,n,r,i,o){if(It=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?cf:df,e=n(r,i),$n){o=0;do{if($n=!1,tr=0,25<=o)throw Error(v(301));o+=1,b=J=null,t.updateQueue=null,Mr.current=ff,e=n(r,i)}while($n)}if(Mr.current=ri,t=J!==null&&J.next!==null,It=0,b=J=H=null,ni=!1,t)throw Error(v(300));return e}function zl(){var e=tr!==0;return tr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?H.memoizedState=b=e:b=b.next=e,b}function je(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=b===null?H.memoizedState:b.next;if(t!==null)b=t,J=e;else{if(e===null)throw Error(v(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},b===null?H.memoizedState=b=e:b=b.next=e}return b}function nr(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=je(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var h=c.lane;if((It&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,H.lanes|=h,Dt|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,$e(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Dt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yi(e){var t=je(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);$e(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hs(){}function gs(e,t){var n=H,r=je(),i=t(),o=!$e(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,_l(ws.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||b!==null&&b.memoizedState.tag&1){if(n.flags|=2048,rr(9,ys.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(v(349));It&30||vs(n,t,i)}return i}function vs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ys(e,t,n,r){t.value=n,t.getSnapshot=r,xs(t)&&ks(e)}function ws(e,t,n){return n(function(){xs(t)&&ks(e)})}function xs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function ks(e){var t=et(e,1);t!==null&&Fe(t,e,1,-1)}function Pa(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=sf.bind(null,H,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ss(){return je().memoizedState}function Ir(e,t,n,r){var i=Ve();H.flags|=e,i.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function gi(e,t,n,r){var i=je();r=r===void 0?null:r;var o=void 0;if(J!==null){var l=J.memoizedState;if(o=l.destroy,r!==null&&El(r,l.deps)){i.memoizedState=rr(t,n,o,r);return}}H.flags|=e,i.memoizedState=rr(1|t,n,o,r)}function Ta(e,t){return Ir(8390656,8,e,t)}function _l(e,t){return gi(2048,8,e,t)}function Es(e,t){return gi(4,2,e,t)}function Cs(e,t){return gi(4,4,e,t)}function zs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){return n=n!=null?n.concat([e]):null,gi(4,4,zs.bind(null,t,e),n)}function Nl(){}function Ns(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ps(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ts(e,t,n){return It&21?($e(n,t)||(n=Iu(),H.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function af(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{D=n,Qi.transition=r}}function js(){return je().memoizedState}function uf(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e))Rs(t,n);else if(n=fs(e,t,n,r),n!==null){var i=de();Fe(n,e,r,i),Ms(n,t,r)}}function sf(e,t,n){var r=vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,l)){var u=t.interleaved;u===null?(i.next=i,yl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=fs(e,t,i,r),n!==null&&(i=de(),Fe(n,e,r,i),Ms(n,t,r))}}function Ls(e){var t=e.alternate;return e===H||t!==null&&t===H}function Rs(e,t){$n=ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}var ri={readContext:Te,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},cf={readContext:Te,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Ta,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,zs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Pa,useDebugValue:Nl,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=af.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Ve();if(B){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),ee===null)throw Error(v(349));It&30||vs(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ta(ws.bind(null,r,o,e),[e]),r.flags|=2048,rr(9,ys.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=ee.identifierPrefix;if(B){var n=Ze,r=Ge;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},df={readContext:Te,useCallback:Ns,useContext:Te,useEffect:_l,useImperativeHandle:_s,useInsertionEffect:Es,useLayoutEffect:Cs,useMemo:Ps,useReducer:Xi,useRef:Ss,useState:function(){return Xi(nr)},useDebugValue:Nl,useDeferredValue:function(e){var t=je();return Ts(t,J.memoizedState,e)},useTransition:function(){var e=Xi(nr)[0],t=je().memoizedState;return[e,t]},useMutableSource:hs,useSyncExternalStore:gs,useId:js,unstable_isNewReconciler:!1},ff={readContext:Te,useCallback:Ns,useContext:Te,useEffect:_l,useImperativeHandle:_s,useInsertionEffect:Es,useLayoutEffect:Cs,useMemo:Ps,useReducer:Yi,useRef:Ss,useState:function(){return Yi(nr)},useDebugValue:Nl,useDeferredValue:function(e){var t=je();return J===null?t.memoizedState=e:Ts(t,J.memoizedState,e)},useTransition:function(){var e=Yi(nr)[0],t=je().memoizedState;return[e,t]},useMutableSource:hs,useSyncExternalStore:gs,useId:js,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vi={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=vt(e),o=Je(r,i);o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,i),t!==null&&(Fe(t,e,i,r),Rr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=vt(e),o=Je(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,i),t!==null&&(Fe(t,e,i,r),Rr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=vt(e),i=Je(n,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(Fe(t,e,r,n),Rr(t,e,r))}};function ja(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(i,o):!0}function Is(e,t,n){var r=!1,i=xt,o=t.contextType;return typeof o=="object"&&o!==null?o=Te(o):(i=ve(t)?Rt:se.current,r=t.contextTypes,o=(r=r!=null)?cn(e,i):xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function La(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function Lo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Te(o):(o=ve(t)?Rt:se.current,i.context=cn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(jo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vi.enqueueReplaceState(i,i.state,null),ei(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=Uc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function Ds(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oi||(oi=!0,Bo=r),Ro(e,t)},n}function Os(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ro(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ro(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ra(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function Ma(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ia(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var mf=nt.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?ds(t,null,n,r):fn(t,e.child,n,r)}function Da(e,t,n,r,i){n=n.render;var o=t.ref;return an(t,i),r=Cl(e,t,n,r,o,i),n=zl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tt(e,t,i)):(B&&n&&fl(t),t.flags|=1,ce(e,t,r,i),t.child)}function Oa(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Dl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Fs(e,t,o,r,i)):(e=$r(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(l,r)&&e.ref===t.ref)return tt(e,t,i)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Fs(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gn(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,tt(e,t,i)}return Mo(e,t,n,r,i)}function $s(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(tn,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(tn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(tn,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(tn,we),we|=r;return ce(e,t,i,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mo(e,t,n,r,i){var o=ve(n)?Rt:se.current;return o=cn(t,o),an(t,i),n=Cl(e,t,n,r,o,i),r=zl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tt(e,t,i)):(B&&r&&fl(t),t.flags|=1,ce(e,t,n,i),t.child)}function Fa(e,t,n,r,i){if(ve(n)){var o=!0;Gr(t)}else o=!1;if(an(t,i),t.stateNode===null)Dr(e,t),Is(t,n,r),Lo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ve(n)?Rt:se.current,c=cn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&La(t,l,r,c),lt=!1;var p=t.memoizedState;l.state=p,ei(t,r,l,i),u=t.memoizedState,a!==r||p!==u||ge.current||lt?(typeof h=="function"&&(jo(t,n,h,r),u=t.memoizedState),(a=lt||ja(t,n,a,r,p,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ps(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Me(t.type,a),l.props=c,m=t.pendingProps,p=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=ve(n)?Rt:se.current,u=cn(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||p!==u)&&La(t,l,r,u),lt=!1,p=t.memoizedState,l.state=p,ei(t,r,l,i);var w=t.memoizedState;a!==m||p!==w||ge.current||lt?(typeof y=="function"&&(jo(t,n,y,r),w=t.memoizedState),(c=lt||ja(t,n,c,r,p,w,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Io(e,t,n,r,o,i)}function Io(e,t,n,r,i,o){Us(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Sa(t,n,!1),tt(e,t,o);r=t.stateNode,mf.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=fn(t,e.child,null,o),t.child=fn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&Sa(t,n,!0),t.child}function As(e){var t=e.stateNode;t.pendingContext?ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ka(e,t.context,!1),xl(e,t.containerInfo)}function $a(e,t,n,r,i){return dn(),ml(i),t.flags|=256,ce(e,t,n,r),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vs(e,t,n){var r=t.pendingProps,i=W.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(W,i&1),e===null)return Po(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=xi(l,r,0,null),e=Lt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Oo(n),t.memoizedState=Do,e):Pl(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return hf(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=yt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=yt(a,o):(o=Lt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Oo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Do,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pl(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&ml(r),fn(t,e.child,null,n),e=Pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(v(422))),Er(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xi({mode:"visible",children:r.children},i,0,null),o=Lt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fn(t,e.child,null,l),t.child.memoizedState=Oo(l),t.memoizedState=Do,o);if(!(t.mode&1))return Er(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(v(419)),r=Ki(o,r,void 0),Er(e,t,l,r)}if(a=(l&e.childLanes)!==0,he||a){if(r=ee,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,et(e,i),Fe(r,e,i,-1))}return Il(),r=Ki(Error(v(421))),Er(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,xe=mt(i.nextSibling),ke=t,B=!0,De=null,e!==null&&(ze[_e++]=Ge,ze[_e++]=Ze,ze[_e++]=Mt,Ge=e.id,Ze=e.overflow,Mt=t),t=Pl(t,r.children),t.flags|=4096,t)}function Ua(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),To(e.return,t,n)}function Gi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ua(e,n,t);else if(e.tag===19)Ua(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ti(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gi(t,!0,n,null,o);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:As(t),dn();break;case 5:ms(t);break;case 1:ve(t.type)&&Gr(t);break;case 4:xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(qr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Vs(e,t,n):($(W,W.current&1),e=tt(e,t,n),e!==null?e.sibling:null);$(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,$s(e,t,n)}return tt(e,t,n)}var Ws,Fo,Hs,Qs;Ws=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fo=function(){};Hs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tt(He.current);var o=null;switch(n){case"input":i=io(e,i),r=io(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=ao(e,i),r=ao(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}so(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&A("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Qs=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vf(e,t,n){var r=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ve(t.type)&&Kr(),ae(t),null;case 3:return r=t.stateNode,pn(),V(ge),V(se),Sl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Qo(De),De=null))),Fo(e,t),ae(t),null;case 5:kl(t);var i=Tt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)Hs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ae(t),null}if(e=Tt(He.current),kr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Be]=t,r[qn]=o,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(i=0;i<Rn.length;i++)A(Rn[i],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Kl(r,o),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},A("invalid",r);break;case"textarea":Zl(r,o),A("invalid",r)}so(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),i=["children",""+a]):Bn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&A("scroll",r)}switch(n){case"input":fr(r),Gl(r,o,!0);break;case"textarea":fr(r),Jl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Be]=t,e[qn]=r,Ws(e,t,!1,!1),t.stateNode=e;e:{switch(l=co(n,r),n){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rn.length;i++)A(Rn[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":Kl(e,r),i=io(e,r),A("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),A("invalid",e);break;case"textarea":Zl(e,r),i=ao(e,r),A("invalid",e);break;default:i=r}so(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Su(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wn(e,u):typeof u=="number"&&Wn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&A("scroll",e):u!=null&&qo(e,o,u,l))}switch(n){case"input":fr(e),Gl(e,r,!1);break;case"textarea":fr(e),Jl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Qs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Tt(er.current),Tt(He.current),kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(o=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ae(t),null;case 13:if(V(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&xe!==null&&t.mode&1&&!(t.flags&128))ss(),dn(),t.flags|=98560,o=!1;else if(o=kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Be]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else De!==null&&(Qo(De),De=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?q===0&&(q=3):Il())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return pn(),Fo(e,t),e===null&&Zn(t.stateNode.containerInfo),ae(t),null;case 10:return vl(t.type._context),ae(t),null;case 17:return ve(t.type)&&Kr(),ae(t),null;case 19:if(V(W),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Nn(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ti(e),l!==null){for(t.flags|=128,Nn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(W,W.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>hn&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ti(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!B)return ae(t),null}else 2*K()-o.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=W.current,$(W,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function yf(e,t){switch(pl(t),t.tag){case 1:return ve(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),V(ge),V(se),Sl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if(V(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(W),null;case 4:return pn(),null;case 10:return vl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Cr=!1,ue=!1,wf=typeof WeakSet=="function"?WeakSet:Set,C=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function $o(e,t,n){try{n()}catch(r){X(e,t,r)}}var Aa=!1;function xf(e,t){if(ko=Hr,e=Zu(),dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++c===i&&(a=l),p===o&&++h===r&&(u=l),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},Hr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,O=w.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Me(t.type,x),O);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){X(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=Aa,Aa=!1,w}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$o(t,n,o)}i=i.next}while(i!==r)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Uo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xs(e){var t=e.alternate;t!==null&&(e.alternate=null,Xs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[qn],delete t[zo],delete t[tf],delete t[nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ys(e){return e.tag===5||e.tag===3||e.tag===4}function Va(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ys(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Ao(e,t,n),e=e.sibling;e!==null;)Ao(e,t,n),e=e.sibling}function Vo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vo(e,t,n),e=e.sibling;e!==null;)Vo(e,t,n),e=e.sibling}var ne=null,Ie=!1;function it(e,t,n){for(n=n.child;n!==null;)Ks(e,t,n),n=n.sibling}function Ks(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ci,n)}catch{}switch(n.tag){case 5:ue||en(n,t);case 6:var r=ne,i=Ie;ne=null,it(e,t,n),ne=r,Ie=i,ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?Bi(e.parentNode,n):e.nodeType===1&&Bi(e,n),Yn(e)):Bi(ne,n.stateNode));break;case 4:r=ne,i=Ie,ne=n.stateNode.containerInfo,Ie=!0,it(e,t,n),ne=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&$o(n,t,l),i=i.next}while(i!==r)}it(e,t,n);break;case 1:if(!ue&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,it(e,t,n),ue=r):it(e,t,n);break;default:it(e,t,n)}}function Ba(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var i=Tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ie=!1;break e;case 3:ne=a.stateNode.containerInfo,Ie=!0;break e;case 4:ne=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(ne===null)throw Error(v(160));Ks(o,l,i),ne=null,Ie=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gs(t,e),t=t.sibling}function Gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ae(e),r&4){try{Un(3,e,e.return),yi(3,e)}catch(x){X(e,e.return,x)}try{Un(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:Re(t,e),Ae(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Re(t,e),Ae(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Wn(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vu(i,o),co(a,l);var c=co(a,o);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?Su(i,m):h==="dangerouslySetInnerHTML"?xu(i,m):h==="children"?Wn(i,m):qo(i,h,m,c)}switch(a){case"input":oo(i,o);break;case"textarea":yu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?nn(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?nn(i,!!o.multiple,o.defaultValue,!0):nn(i,!!o.multiple,o.multiple?[]:"",!1))}i[qn]=o}catch(x){X(e,e.return,x)}}break;case 6:if(Re(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){X(e,e.return,x)}}break;case 3:if(Re(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:Re(t,e),Ae(e);break;case 13:Re(t,e),Ae(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ll=K())),r&4&&Ba(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||h,Re(t,e),ue=c):Re(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(m=C=h;C!==null;){switch(p=C,y=p.child,p.tag){case 0:case 11:case 14:case 15:Un(4,p,p.return);break;case 1:en(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:en(p,p.return);break;case 22:if(p.memoizedState!==null){Ha(m);continue}}y!==null?(y.return=p,C=y):Ha(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ku("display",l))}catch(x){X(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){X(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(t,e),Ae(e),r&4&&Ba(e);break;case 21:break;default:Re(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ys(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wn(i,""),r.flags&=-33);var o=Va(e);Vo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Va(e);Ao(e,a,l);break;default:throw Error(v(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e,t,n){C=e,Zs(e)}function Zs(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Cr;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ue;a=Cr;var c=ue;if(Cr=l,(ue=u)&&!c)for(C=i;C!==null;)l=C,u=l.child,l.tag===22&&l.memoizedState!==null?Qa(i):u!==null?(u.return=l,C=u):Qa(i);for(;o!==null;)C=o,Zs(o),o=o.sibling;C=i,Cr=a,ue=c}Wa(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):Wa(e)}}function Wa(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Na(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Na(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Yn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ue||t.flags&512&&Uo(t)}catch(p){X(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ha(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Qa(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yi(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){X(t,i,u)}}var o=t.return;try{Uo(t)}catch(u){X(t,o,u)}break;case 5:var l=t.return;try{Uo(t)}catch(u){X(t,l,u)}}}catch(u){X(t,t.return,u)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Sf=Math.ceil,ii=nt.ReactCurrentDispatcher,Tl=nt.ReactCurrentOwner,Pe=nt.ReactCurrentBatchConfig,R=0,ee=null,Z=null,re=0,we=0,tn=St(0),q=0,ir=null,Dt=0,wi=0,jl=0,An=null,me=null,Ll=0,hn=1/0,Ye=null,oi=!1,Bo=null,gt=null,zr=!1,ct=null,li=0,Vn=0,Wo=null,Or=-1,Fr=0;function de(){return R&6?K():Or!==-1?Or:Or=K()}function vt(e){return e.mode&1?R&2&&re!==0?re&-re:of.transition!==null?(Fr===0&&(Fr=Iu()),Fr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Vu(e.type)),e):1}function Fe(e,t,n,r){if(50<Vn)throw Vn=0,Wo=null,Error(v(185));lr(e,n,r),(!(R&2)||e!==ee)&&(e===ee&&(!(R&2)&&(wi|=n),q===4&&ut(e,re)),ye(e,r),n===1&&R===0&&!(t.mode&1)&&(hn=K()+500,hi&&Et()))}function ye(e,t){var n=e.callbackNode;id(e,t);var r=Wr(e,e===ee?re:0);if(r===0)n!==null&&ea(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ea(n),t===1)e.tag===0?rf(Xa.bind(null,e)):ls(Xa.bind(null,e)),bd(function(){!(R&6)&&Et()}),n=null;else{switch(Du(r)){case 1:n=rl;break;case 4:n=Ru;break;case 16:n=Br;break;case 536870912:n=Mu;break;default:n=Br}n=ic(n,Js.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Js(e,t){if(Or=-1,Fr=0,R&6)throw Error(v(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=Wr(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ai(e,r);else{t=r;var i=R;R|=2;var o=bs();(ee!==e||re!==t)&&(Ye=null,hn=K()+500,jt(e,t));do try{zf();break}catch(a){qs(e,a)}while(1);gl(),ii.current=o,R=i,Z!==null?t=0:(ee=null,re=0,t=q)}if(t!==0){if(t===2&&(i=go(e),i!==0&&(r=i,t=Ho(e,i))),t===1)throw n=ir,jt(e,0),ut(e,r),ye(e,K()),n;if(t===6)ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ef(i)&&(t=ai(e,r),t===2&&(o=go(e),o!==0&&(r=o,t=Ho(e,o))),t===1))throw n=ir,jt(e,0),ut(e,r),ye(e,K()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:_t(e,me,Ye);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Ll+500-K(),10<t)){if(Wr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Co(_t.bind(null,e,me,Ye),t);break}_t(e,me,Ye);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Oe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sf(r/1960))-r,10<r){e.timeoutHandle=Co(_t.bind(null,e,me,Ye),r);break}_t(e,me,Ye);break;case 5:_t(e,me,Ye);break;default:throw Error(v(329))}}}return ye(e,K()),e.callbackNode===n?Js.bind(null,e):null}function Ho(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=ai(e,t),e!==2&&(t=me,me=n,t!==null&&Qo(t)),e}function Qo(e){me===null?me=e:me.push.apply(me,e)}function Ef(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$e(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~jl,t&=~wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function Xa(e){if(R&6)throw Error(v(327));un();var t=Wr(e,0);if(!(t&1))return ye(e,K()),null;var n=ai(e,t);if(e.tag!==0&&n===2){var r=go(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=ir,jt(e,0),ut(e,t),ye(e,K()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,me,Ye),ye(e,K()),null}function Rl(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(hn=K()+500,hi&&Et())}}function Ot(e){ct!==null&&ct.tag===0&&!(R&6)&&un();var t=R;R|=1;var n=Pe.transition,r=D;try{if(Pe.transition=null,D=1,e)return e()}finally{D=r,Pe.transition=n,R=t,!(R&6)&&Et()}}function Ml(){we=tn.current,V(tn)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:pn(),V(ge),V(se),Sl();break;case 5:kl(r);break;case 4:pn();break;case 13:V(W);break;case 19:V(W);break;case 10:vl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(ee=e,Z=e=yt(e.current,null),re=we=t,q=0,ir=null,jl=wi=Dt=0,me=An=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Pt=null}return e}function qs(e,t){do{var n=Z;try{if(gl(),Mr.current=ri,ni){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ni=!1}if(It=0,b=J=H=null,$n=!1,tr=0,Tl.current=null,n===null||n.return===null){q=1,ir=t,Z=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=re,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Ma(l);if(y!==null){y.flags&=-257,Ia(y,l,a,o,t),y.mode&1&&Ra(o,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(u),t.updateQueue=x}else w.add(u);break e}else{if(!(t&1)){Ra(o,c,t),Il();break e}u=Error(v(426))}}else if(B&&a.mode&1){var O=Ma(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Ia(O,l,a,o,t),ml(mn(u,a));break e}}o=u=mn(u,a),q!==4&&(q=2),An===null?An=[o]:An.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Ds(o,u,t);_a(o,d);break e;case 1:a=u;var s=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(gt===null||!gt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Os(o,a,t);_a(o,g);break e}}o=o.return}while(o!==null)}tc(n)}catch(E){t=E,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function bs(){var e=ii.current;return ii.current=ri,e===null?ri:e}function Il(){(q===0||q===3||q===2)&&(q=4),ee===null||!(Dt&268435455)&&!(wi&268435455)||ut(ee,re)}function ai(e,t){var n=R;R|=2;var r=bs();(ee!==e||re!==t)&&(Ye=null,jt(e,t));do try{Cf();break}catch(i){qs(e,i)}while(1);if(gl(),R=n,ii.current=r,Z!==null)throw Error(v(261));return ee=null,re=0,q}function Cf(){for(;Z!==null;)ec(Z)}function zf(){for(;Z!==null&&!Gc();)ec(Z)}function ec(e){var t=rc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?tc(e):Z=t,Tl.current=null}function tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yf(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=vf(n,t,we),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function _t(e,t,n){var r=D,i=Pe.transition;try{Pe.transition=null,D=1,_f(e,t,n,r)}finally{Pe.transition=i,D=r}return null}function _f(e,t,n,r){do un();while(ct!==null);if(R&6)throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(od(e,o),e===ee&&(Z=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,ic(Br,function(){return un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var l=D;D=1;var a=R;R|=4,Tl.current=null,xf(e,n),Gs(n,e),Qd(So),Hr=!!ko,So=ko=null,e.current=n,kf(n),Zc(),R=a,D=l,Pe.transition=o}else e.current=n;if(zr&&(zr=!1,ct=e,li=i),o=e.pendingLanes,o===0&&(gt=null),bc(n.stateNode),ye(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oi)throw oi=!1,e=Bo,Bo=null,e;return li&1&&e.tag!==0&&un(),o=e.pendingLanes,o&1?e===Wo?Vn++:(Vn=0,Wo=e):Vn=0,Et(),null}function un(){if(ct!==null){var e=Du(li),t=Pe.transition,n=D;try{if(Pe.transition=null,D=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,li=0,R&6)throw Error(v(331));var i=R;for(R|=4,C=e.current;C!==null;){var o=C,l=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(C=c;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Un(8,h,o)}var m=h.child;if(m!==null)m.return=h,C=m;else for(;C!==null;){h=C;var p=h.sibling,y=h.return;if(Xs(h),h===c){C=null;break}if(p!==null){p.return=y,C=p;break}C=y}}}var w=o.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}C=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,C=l;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Un(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,C=d;break e}C=o.return}}var s=e.current;for(C=s;C!==null;){l=C;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,C=f;else e:for(l=s;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yi(9,a)}}catch(E){X(a,a.return,E)}if(a===l){C=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,C=g;break e}C=a.return}}if(R=i,Et(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ci,e)}catch{}r=!0}return r}finally{D=n,Pe.transition=t}}return!1}function Ya(e,t,n){t=mn(n,t),t=Ds(e,t,1),e=ht(e,t,1),t=de(),e!==null&&(lr(e,1,t),ye(e,t))}function X(e,t,n){if(e.tag===3)Ya(e,e,n);else for(;t!==null;){if(t.tag===3){Ya(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=mn(n,e),e=Os(t,e,1),t=ht(t,e,1),e=de(),t!==null&&(lr(t,1,e),ye(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>K()-Ll?jt(e,0):jl|=n),ye(e,t)}function nc(e,t){t===0&&(e.mode&1?(t=hr,hr<<=1,!(hr&130023424)&&(hr=4194304)):t=1);var n=de();e=et(e,t),e!==null&&(lr(e,t,n),ye(e,n))}function Pf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function Tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,gf(e,t,n);he=!!(e.flags&131072)}else he=!1,B&&t.flags&1048576&&as(t,Jr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var i=cn(t,se.current);an(t,n),i=Cl(null,t,r,e,i,n);var o=zl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,Gr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wl(t),i.updater=vi,t.stateNode=i,i._reactInternals=t,Lo(t,r,e,n),t=Io(null,t,r,!0,o,n)):(t.tag=0,B&&o&&fl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lf(r),e=Me(r,e),i){case 0:t=Mo(null,t,r,e,n);break e;case 1:t=Fa(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Oa(null,t,r,Me(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Mo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Fa(e,t,r,i,n);case 3:e:{if(As(t),e===null)throw Error(v(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ps(e,t),ei(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mn(Error(v(423)),t),t=$a(e,t,r,n,i);break e}else if(r!==i){i=mn(Error(v(424)),t),t=$a(e,t,r,n,i);break e}else for(xe=mt(t.stateNode.containerInfo.firstChild),ke=t,B=!0,De=null,n=ds(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=tt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return ms(t),e===null&&Po(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Eo(r,i)?l=null:o!==null&&Eo(r,o)&&(t.flags|=32),Us(e,t),ce(e,t,l,n),t.child;case 6:return e===null&&Po(t),null;case 13:return Vs(e,t,n);case 4:return xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Da(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,$(qr,r._currentValue),r._currentValue=l,o!==null)if($e(o.value,l)){if(o.children===i.children&&!ge.current){t=tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Je(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),To(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(v(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),To(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,an(t,n),i=Te(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),Oa(e,t,r,i,n);case 15:return Fs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Dr(e,t),t.tag=1,ve(r)?(e=!0,Gr(t)):e=!1,an(t,n),Is(t,r,i),Lo(t,r,i,n),Io(null,t,r,!0,e,n);case 19:return Bs(e,t,n);case 22:return $s(e,t,n)}throw Error(v(156,t.tag))};function ic(e,t){return Lu(e,t)}function jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new jf(e,t,n,r)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===el)return 11;if(e===tl)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Dl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Qt:return Lt(n.children,i,o,t);case bo:l=8,i|=8;break;case eo:return e=Ne(12,n,t,i|2),e.elementType=eo,e.lanes=o,e;case to:return e=Ne(13,n,t,i),e.elementType=to,e.lanes=o,e;case no:return e=Ne(19,n,t,i),e.elementType=no,e.lanes=o,e;case mu:return xi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fu:l=10;break e;case pu:l=9;break e;case el:l=11;break e;case tl:l=14;break e;case ot:l=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Ne(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=mu,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Ji(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Li(0),this.expirationTimes=Li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Li(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ol(e,t,n,r,i,o,l,a,u){return e=new Rf(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(o),e}function Mf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oc(e){if(!e)return xt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(ve(n))return os(e,n,t)}return t}function lc(e,t,n,r,i,o,l,a,u){return e=Ol(n,r,!0,e,i,o,l,a,u),e.context=oc(null),n=e.current,r=de(),i=vt(n),o=Je(r,i),o.callback=t??null,ht(n,o,i),e.current.lanes=i,lr(e,i,r),ye(e,r),e}function ki(e,t,n,r){var i=t.current,o=de(),l=vt(i);return n=oc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,l),e!==null&&(Fe(e,i,l,o),Rr(e,i,l)),l}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ka(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fl(e,t){Ka(e,t),(e=e.alternate)&&Ka(e,t)}function If(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}Si.prototype.render=$l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));ki(e,t,null,null)};Si.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){ki(null,e,null,null)}),t[be]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&Au(e)}};function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ga(){}function Df(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ui(l);o.call(c)}}var l=lc(t,r,e,0,null,!1,!1,"",Ga);return e._reactRootContainer=l,e[be]=l.current,Zn(e.nodeType===8?e.parentNode:e),Ot(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ui(u);a.call(c)}}var u=Ol(e,0,!1,null,null,!1,!1,"",Ga);return e._reactRootContainer=u,e[be]=u.current,Zn(e.nodeType===8?e.parentNode:e),Ot(function(){ki(t,u,n,r)}),u}function Ci(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=ui(l);a.call(u)}}ki(t,l,e,i)}else l=Df(n,t,e,i,r);return ui(l)}Ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(il(t,n|1),ye(t,K()),!(R&6)&&(hn=K()+500,Et()))}break;case 13:Ot(function(){var r=et(e,1);if(r!==null){var i=de();Fe(r,e,1,i)}}),Fl(e,1)}};ol=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=de();Fe(t,e,134217728,n)}Fl(e,134217728)}};Fu=function(e){if(e.tag===13){var t=vt(e),n=et(e,t);if(n!==null){var r=de();Fe(n,e,t,r)}Fl(e,t)}};$u=function(){return D};Uu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};po=function(e,t,n){switch(t){case"input":if(oo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=mi(r);if(!i)throw Error(v(90));gu(r),oo(r,i)}}}break;case"textarea":yu(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};zu=Rl;_u=Ot;var Of={usingClientEntryPoint:!1,Events:[ur,Gt,mi,Eu,Cu,Rl]},Pn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||If,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{ci=_r.inject(Ff),We=_r}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Of;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ul(t))throw Error(v(200));return Mf(e,t,null,n)};Ee.createRoot=function(e,t){if(!Ul(e))throw Error(v(299));var n=!1,r="",i=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ol(e,1,!1,null,null,n,!1,r,i),e[be]=t.current,Zn(e.nodeType===8?e.parentNode:e),new $l(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Tu(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Ot(e)};Ee.hydrate=function(e,t,n){if(!Ei(t))throw Error(v(200));return Ci(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Ul(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ac;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=lc(t,null,e,1,n??null,i,!1,o,l),e[be]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Si(t)};Ee.render=function(e,t,n){if(!Ei(t))throw Error(v(200));return Ci(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Ei(e))throw Error(v(40));return e._reactRootContainer?(Ot(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[be]=null})}),!0):!1};Ee.unstable_batchedUpdates=Rl;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ei(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return Ci(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),uu.exports=Ee;var $f=uu.exports,Za=$f;qi.createRoot=Za.createRoot,qi.hydrateRoot=Za.hydrateRoot;function Uf(){const[e,t]=Y.useState(0),[n,r]=Y.useState(!1),[i,o]=Y.useState(!1),[l,a]=Y.useState(!1),[u,c]=Y.useState("Finding Aleks"),[h,m]=Y.useState(!0),[p,y]=Y.useState(""),[w,x]=Y.useState(0),[O,d]=Y.useState(""),[s,f]=Y.useState("🔍"),[g,E]=Y.useState(!1),[_,z]=Y.useState(!1),[N,F]=Y.useState("idle"),[j,te]=Y.useState(""),rt=Y.useRef(0),Ue=Y.useRef(!1),Ut=Y.useRef(null),wn={ZIP_CODE:"94132",REFRESH_INTERVAL:3e5,API_TIMEOUT:5e3,ARTIFICIAL_DELAY:4e3},Ct=()=>{const M=new Date().getHours();return M>=6&&M<12?"🌅":M>=12&&M<17?"☀️":M>=17&&M<20?"🌇":"🌃"},At=()=>{const I=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});d(I),f(Ct())},k=[{year:"1990",description:"Born in Ukraine, moved to America at age 4 — my first lesson in managing transitions with competing stakeholder priorities and tight deadlines."},{year:"2015",description:"Industrial Design Intern at Tech Waves. Learned the fundamentals of product development cycles and stakeholder alignment in consumer product launches."},{year:"2017",description:"Graduated SJSU with B.S. in Industrial Design. Named IDSA '17 Finalist for systematic approach to design challenges and cross-functional collaboration."},{year:"2021",description:"Advanced to leadership at Topology Eyewear, managing creative teams while balancing operational requirements and client expectations in a fast-paced environment."},{year:"2022",description:"Joined Card79 as Project Manager Manager. Started orchestrating complex hardware and digital initiatives, discovering my talent for managing competing priorities and stakeholder expectations."},{year:"2025",description:"Strategic Program Manager at Card79. Currently managing innovation projects for clients ranging from established brands to emerging companies, with a focus on scope clarity, risk mitigation, and delivery excellence."}],P=async()=>{const M=performance.now();try{const I=await fetch(`https://api.zippopotam.us/us/${wn.ZIP_CODE}`);return performance.now()-M<1e3}catch{return!1}},T=async()=>{const M=Math.floor(Math.random()*5e3)+5e3;let I="San Francisco, CA";await P(),await new Promise(oe=>setTimeout(oe,wn.ARTIFICIAL_DELAY));try{const oe=await fetch(`https://api.zippopotam.us/us/${wn.ZIP_CODE}`);if(!oe.ok)throw new Error("Location fetch failed");I=`${(await oe.json()).places[0]["place name"]}, CA`,setTimeout(()=>{m(!1),c(I),a(!0),f(Ct())},M)}catch(oe){console.error("Weather error:",oe),setTimeout(()=>{m(!1),c(I),a(!0),f(Ct())},M)}},U=M=>{if(M&&e<4){const I=e+1;t(I),I===1&&(r(!0),window.innerWidth<=640&&!i&&(o(!0),l||T()))}else if(!M&&e>0){const I=e-1;t(I),I===0&&r(!1)}},G=M=>{const I=Date.now(),oe=1200;if(Ue.current||I-rt.current<oe)return;const Le=M.deltaY>0;if(Ue.current=!0,rt.current=I,Le&&e<4)U(!0);else if(!Le&&e>0)U(!1);else{Ue.current=!1;return}setTimeout(()=>{Ue.current=!1},700),M.preventDefault()},Vt=M=>{var Vl;if(!Ut.current)return;const I=Ut.current.getBoundingClientRect(),oe=(M.clientX-I.left)/I.width*100,Le=Math.max(0,Math.min(100,oe));x(Le);const zi=Math.round(Le/100*(k.length-1)),Al=(Vl=k[zi])==null?void 0:Vl.description;Al&&y(Al)},Qe=M=>{const I=M/(k.length-1)*100;x(I),y(k[M].description)},xn=async M=>{M.preventDefault(),M.stopPropagation(),F("submitting"),te("");const I=M.target,oe=new FormData(I);oe.append("_subject","New contact from portfolio");try{const Le=await fetch("https://formspree.io/f/xdkzklvd",{method:"POST",body:oe,headers:{Accept:"application/json"}});if(Le.ok)F("success"),te("Thanks! Your message has been sent successfully."),I.reset(),setTimeout(()=>{F("idle"),te("")},5e3);else{const zi=await Le.json();throw new Error(zi.error||"Form submission failed")}}catch(Le){console.error("Form submission error:",Le),F("error"),te("Oops! There was a problem sending your message. Please try again."),setTimeout(()=>{F("idle"),te("")},5e3)}},Xe=()=>{e>=0?(z(!0),e>=3?E(!0):E(!1)):(z(!1),E(!1))};Y.useEffect(()=>{o(!0),T(),x(0),y(k[0].description),At();const M=setInterval(At,6e4),I=oe=>G(oe);return window.addEventListener("wheel",I,{passive:!1}),Xe(),()=>{window.removeEventListener("wheel",I),clearInterval(M)}},[e]);const Bt=`main-content ${e>0?`expanded-${e}`:""}`,sc=`expand-button ${e>0?"expanded":""}`;return S.jsxs("div",{className:"min-h-screen bg-black text-white overflow-hidden relative flex flex-col items-center",style:{height:"100vh",maxHeight:"100vh"},children:[S.jsx("style",{children:`
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
      `}),S.jsx("div",{className:"top-gradient"}),S.jsxs("div",{className:Bt,children:[S.jsx("div",{className:"mobile-text",children:S.jsx("p",{children:"Hi, I'm Aleks — I turn ambitious ideas into reality through strategic execution."})}),S.jsxs("div",{className:"desktop-text",children:[S.jsx("span",{children:"Hi"}),S.jsx("span",{children:", "}),S.jsx("span",{children:"I'm "}),S.jsx("span",{className:"name relative",children:"Aleks"}),S.jsx("span",{children:"— "}),S.jsx("span",{children:"I turn ambitious ideas into "}),S.jsx("span",{className:"vision",children:"reality"}),S.jsx("span",{children:" through strategic "}),S.jsx("span",{className:"execution",children:"execution"}),S.jsx("span",{children:"."})]}),S.jsx("div",{className:sc,onClick:()=>U(!0)}),S.jsxs("div",{className:`content-section ${e>=1?"visible":""}`,children:[S.jsx("div",{className:"section-hint",children:"Leadership & Scale"}),S.jsx("p",{children:"I've led cross-functional teams through complex product development cycles, with experience managing initiatives ranging from mid-six to seven figures. My focus is on clear communication, realistic timelines, and building scalable processes that align business needs with technical execution"})]}),S.jsxs("div",{className:`content-section ${e>=2?"visible":""}`,children:[S.jsx("div",{className:"section-hint",children:"Current Work"}),S.jsx("p",{children:"As Card79's Strategic Program Manager, I align industrial design, mechanical, electrical, firmware, UX, and brand teams around a unified roadmap. I own schedules, budgets, and risk plans for products shipping into medical, robotics, and wearable markets, serving founders fresh off seed rounds as well as multinational enterprises launching next‑gen lines."})]}),S.jsxs("div",{className:`content-section ${e>=3?"visible":""}`,style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",margin:"0.8rem auto 1.5rem auto",padding:"1rem 1.5rem"},children:[S.jsxs("div",{className:"text-center mb-4",children:[S.jsx("div",{className:"section-hint",children:"Journey"}),S.jsx("p",{className:"text-white/60 font-light",style:{fontSize:"0.7rem"},children:"Explore the timeline"})]}),S.jsx("div",{ref:Ut,className:"timeline",onMouseMove:Vt,style:{position:"relative",marginBottom:"1rem",padding:"0 1rem"},children:k.map((M,I)=>S.jsx("div",{className:"timeline-item",style:{left:`${I/(k.length-1)*100}%`},onClick:()=>Qe(I),children:S.jsx("span",{className:"year",children:M.year})},M.year))}),S.jsx("div",{style:{minHeight:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 1rem",marginBottom:"1.5rem"},children:S.jsx("p",{className:"timeline-text",children:p})})]}),S.jsxs("div",{className:`contact-form ${e>=4?"visible":""}`,children:[S.jsx("div",{className:"form-title",children:"Get In Touch"}),S.jsxs("form",{onSubmit:xn,children:[S.jsxs("div",{className:"form-group",children:[S.jsx("label",{htmlFor:"name",children:"Name"}),S.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your Name",required:!0})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{htmlFor:"email",children:"Email"}),S.jsx("input",{type:"email",id:"email",name:"email",placeholder:"your.email@example.com",required:!0})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{htmlFor:"message",children:"Message"}),S.jsx("textarea",{id:"message",name:"message",placeholder:"Your message here...",required:!0})]}),j&&S.jsx("div",{className:`form-message ${N}`,children:j}),S.jsx("button",{type:"submit",className:"submit-button",disabled:N==="submitting",children:N==="submitting"?"Sending...":"Send Message"})]})]})]}),S.jsx("div",{className:`weather-container ${h?"loading":"pin-only"}`,children:S.jsxs("div",{className:"weather-content",children:[S.jsx("span",{className:"location-pin",children:"📍"}),S.jsx("span",{className:`location-emoji ${h?"finding-animation":""}`,children:h?"🔍":s}),S.jsx("span",{className:`location-text ${h?"loading":""}`,children:u}),O&&!h&&S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"time-separator"}),S.jsx("span",{className:"time-text",children:O})]})]})}),_&&e<4&&S.jsx("div",{className:`contact-bar ${g?"":"collapsed"}`,children:S.jsxs("div",{className:`contact-content ${g?"":"collapsed"}`,children:[S.jsx("button",{type:"button",className:`email-button ${g?"":"collapsed"}`,onClick:()=>t(4),children:S.jsxs("svg",{className:"button-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),S.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),S.jsx("div",{className:`social-divider ${g?"":"collapsed"}`}),S.jsx("div",{className:`social-links ${g?"":"collapsed"}`,children:S.jsx("a",{href:"https://linkedin.com/in/your-profile",target:"_blank",rel:"noopener noreferrer",className:"social-icon linkedin-icon",title:"LinkedIn",children:S.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"#0077b5",stroke:"none",children:[S.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),S.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),S.jsx("circle",{cx:"4",cy:"4",r:"2"})]})})})]})})]})}qi.createRoot(document.getElementById("root")).render(S.jsx(_c.StrictMode,{children:S.jsx(Uf,{})}));
//# sourceMappingURL=index-fbd92b6b.js.map
