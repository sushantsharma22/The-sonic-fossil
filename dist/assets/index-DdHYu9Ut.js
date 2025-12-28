var jy=Object.defineProperty;var Yy=(n,e,t)=>e in n?jy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var sn=(n,e,t)=>Yy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function qy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yg={exports:{}},sc={},qg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Ky=Symbol.for("react.fragment"),Zy=Symbol.for("react.strict_mode"),Qy=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),eS=Symbol.for("react.context"),tS=Symbol.for("react.forward_ref"),nS=Symbol.for("react.suspense"),iS=Symbol.for("react.memo"),rS=Symbol.for("react.lazy"),Bp=Symbol.iterator;function sS(n){return n===null||typeof n!="object"?null:(n=Bp&&n[Bp]||n["@@iterator"],typeof n=="function"?n:null)}var $g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kg=Object.assign,Zg={};function Ho(n,e,t){this.props=n,this.context=e,this.refs=Zg,this.updater=t||$g}Ho.prototype.isReactComponent={};Ho.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ho.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Qg(){}Qg.prototype=Ho.prototype;function ph(n,e,t){this.props=n,this.context=e,this.refs=Zg,this.updater=t||$g}var mh=ph.prototype=new Qg;mh.constructor=ph;Kg(mh,Ho.prototype);mh.isPureReactComponent=!0;var Hp=Array.isArray,Jg=Object.prototype.hasOwnProperty,_h={current:null},e0={key:!0,ref:!0,__self:!0,__source:!0};function t0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jg.call(e,i)&&!e0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:nl,type:n,key:s,ref:o,props:r,_owner:_h.current}}function oS(n,e){return{$$typeof:nl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function gh(n){return typeof n=="object"&&n!==null&&n.$$typeof===nl}function aS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Vp=/\/+/g;function Ic(n,e){return typeof n=="object"&&n!==null&&n.key!=null?aS(""+n.key):e.toString(36)}function ru(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case nl:case $y:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ic(o,0):i,Hp(r)?(t="",n!=null&&(t=n.replace(Vp,"$&/")+"/"),ru(r,e,t,"",function(u){return u})):r!=null&&(gh(r)&&(r=oS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Vp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Hp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ic(s,a);o+=ru(s,e,t,l,r)}else if(l=sS(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ic(s,a++),o+=ru(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(n,e,t){if(n==null)return n;var i=[],r=0;return ru(n,i,"","",function(s){return e.call(t,s,r++)}),i}function lS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var hn={current:null},su={transition:null},uS={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:su,ReactCurrentOwner:_h};function n0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:dl,forEach:function(n,e,t){dl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return dl(n,function(){e++}),e},toArray:function(n){return dl(n,function(e){return e})||[]},only:function(n){if(!gh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=Ho;Xe.Fragment=Ky;Xe.Profiler=Qy;Xe.PureComponent=ph;Xe.StrictMode=Zy;Xe.Suspense=nS;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;Xe.act=n0;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Kg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_h.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Jg.call(e,l)&&!e0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:nl,type:n.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(n){return n={$$typeof:eS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Jy,_context:n},n.Consumer=n};Xe.createElement=t0;Xe.createFactory=function(n){var e=t0.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:tS,render:n}};Xe.isValidElement=gh;Xe.lazy=function(n){return{$$typeof:rS,_payload:{_status:-1,_result:n},_init:lS}};Xe.memo=function(n,e){return{$$typeof:iS,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=su.transition;su.transition={};try{n()}finally{su.transition=e}};Xe.unstable_act=n0;Xe.useCallback=function(n,e){return hn.current.useCallback(n,e)};Xe.useContext=function(n){return hn.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return hn.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return hn.current.useEffect(n,e)};Xe.useId=function(){return hn.current.useId()};Xe.useImperativeHandle=function(n,e,t){return hn.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return hn.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return hn.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return hn.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return hn.current.useReducer(n,e,t)};Xe.useRef=function(n){return hn.current.useRef(n)};Xe.useState=function(n){return hn.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return hn.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return hn.current.useTransition()};Xe.version="18.3.1";qg.exports=Xe;var et=qg.exports;const cS=qy(et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=et,dS=Symbol.for("react.element"),hS=Symbol.for("react.fragment"),pS=Object.prototype.hasOwnProperty,mS=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_S={key:!0,ref:!0,__self:!0,__source:!0};function i0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)pS.call(e,i)&&!_S.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:dS,type:n,key:s,ref:o,props:r,_owner:mS.current}}sc.Fragment=hS;sc.jsx=i0;sc.jsxs=i0;Yg.exports=sc;var Ge=Yg.exports,r0={exports:{}},Wn={},s0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,F){var G=U.length;U.push(F);e:for(;0<G;){var $=G-1>>>1,J=U[$];if(0<r(J,F))U[$]=F,U[G]=J,G=$;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var F=U[0],G=U.pop();if(G!==F){U[0]=G;e:for(var $=0,J=U.length,j=J>>>1;$<j;){var Z=2*($+1)-1,ae=U[Z],_e=Z+1,ge=U[_e];if(0>r(ae,G))_e<J&&0>r(ge,ae)?(U[$]=ge,U[_e]=G,$=_e):(U[$]=ae,U[Z]=G,$=Z);else if(_e<J&&0>r(ge,G))U[$]=ge,U[_e]=G,$=_e;else break e}}return F}function r(U,F){var G=U.sortIndex-F.sortIndex;return G!==0?G:U.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var F=t(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=U)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(u)}}function y(U){if(g=!1,_(U),!x)if(t(l)!==null)x=!0,z(M);else{var F=t(u);F!==null&&q(y,F.startTime-U)}}function M(U,F){x=!1,g&&(g=!1,f(b),b=-1),p=!0;var G=h;try{for(_(F),d=t(l);d!==null&&(!(d.expirationTime>F)||U&&!I());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var J=$(d.expirationTime<=F);F=n.unstable_now(),typeof J=="function"?d.callback=J:d===t(l)&&i(l),_(F)}else i(l);d=t(l)}if(d!==null)var j=!0;else{var Z=t(u);Z!==null&&q(y,Z.startTime-F),j=!1}return j}finally{d=null,h=G,p=!1}}var T=!1,E=null,b=-1,S=5,w=-1;function I(){return!(n.unstable_now()-w<S)}function H(){if(E!==null){var U=n.unstable_now();w=U;var F=!0;try{F=E(!0,U)}finally{F?K():(T=!1,E=null)}}else T=!1}var K;if(typeof v=="function")K=function(){v(H)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,O=D.port2;D.port1.onmessage=H,K=function(){O.postMessage(null)}}else K=function(){m(H,0)};function z(U){E=U,T||(T=!0,K())}function q(U,F){b=m(function(){U(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,z(M))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var G=h;h=F;try{return U()}finally{h=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,F){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=h;h=U;try{return F()}finally{h=G}},n.unstable_scheduleCallback=function(U,F,G){var $=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?$+G:$):G=$,U){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=G+J,U={id:c++,callback:F,priorityLevel:U,startTime:G,expirationTime:J,sortIndex:-1},G>$?(U.sortIndex=G,e(u,U),t(l)===null&&U===t(u)&&(g?(f(b),b=-1):g=!0,q(y,G-$))):(U.sortIndex=J,e(l,U),x||p||(x=!0,z(M))),U},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(U){var F=h;return function(){var G=h;h=F;try{return U.apply(this,arguments)}finally{h=G}}}})(o0);s0.exports=o0;var gS=s0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vS=et,Hn=gS;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a0=new Set,Pa={};function Es(n,e){To(n,e),To(n+"Capture",e)}function To(n,e){for(Pa[n]=e,n=0;n<e.length;n++)a0.add(e[n])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qf=Object.prototype.hasOwnProperty,xS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Wp={};function yS(n){return qf.call(Wp,n)?!0:qf.call(Gp,n)?!1:xS.test(n)?Wp[n]=!0:(Gp[n]=!0,!1)}function SS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function MS(n,e,t,i){if(e===null||typeof e>"u"||SS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Yt[n]=new pn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Yt[e]=new pn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Yt[n]=new pn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Yt[n]=new pn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Yt[n]=new pn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Yt[n]=new pn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Yt[n]=new pn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Yt[n]=new pn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Yt[n]=new pn(n,5,!1,n.toLowerCase(),null,!1,!1)});var vh=/[\-:]([a-z])/g;function xh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(vh,xh);Yt[e]=new pn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(vh,xh);Yt[e]=new pn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(vh,xh);Yt[e]=new pn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Yt[n]=new pn(n,1,!1,n.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Yt[n]=new pn(n,1,!1,n.toLowerCase(),null,!0,!0)});function yh(n,e,t,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(MS(e,t,r,i)&&(t=null),i||r===null?yS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var er=vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),Zf=Symbol.for("react.suspense_list"),Eh=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),c0=Symbol.for("react.offscreen"),Xp=Symbol.iterator;function Yo(n){return n===null||typeof n!="object"?null:(n=Xp&&n[Xp]||n["@@iterator"],typeof n=="function"?n:null)}var vt=Object.assign,Oc;function ca(n){if(Oc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+n}var Fc=!1;function kc(n,e){if(!n||Fc)return"";Fc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ca(n):""}function ES(n){switch(n.tag){case 5:return ca(n.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return n=kc(n.type,!1),n;case 11:return n=kc(n.type.render,!1),n;case 1:return n=kc(n.type,!0),n;default:return""}}function Qf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Zs:return"Fragment";case Ks:return"Portal";case $f:return"Profiler";case Sh:return"StrictMode";case Kf:return"Suspense";case Zf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case u0:return(n.displayName||"Context")+".Consumer";case l0:return(n._context.displayName||"Context")+".Provider";case Mh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Eh:return e=n.displayName||null,e!==null?e:Qf(n.type)||"Memo";case ar:e=n._payload,n=n._init;try{return Qf(n(e))}catch{}}return null}function TS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qf(e);case 8:return e===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function f0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wS(n){var e=f0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function pl(n){n._valueTracker||(n._valueTracker=wS(n))}function d0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=f0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Su(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Jf(n,e){var t=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function jp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Dr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function h0(n,e){e=e.checked,e!=null&&yh(n,"checked",e,!1)}function ed(n,e){h0(n,e);var t=Dr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?td(n,e.type,t):e.hasOwnProperty("defaultValue")&&td(n,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Yp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function td(n,e,t){(e!=="number"||Su(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var fa=Array.isArray;function ho(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Dr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function nd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(fa(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Dr(t)}}function p0(n,e){var t=Dr(e.value),i=Dr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function $p(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function m0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?m0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ml,_0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function La(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AS=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(n){AS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),_a[e]=_a[n]})});function g0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||_a.hasOwnProperty(n)&&_a[n]?(""+e).trim():e+"px"}function v0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=g0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var CS=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(n,e){if(e){if(CS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function sd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function Th(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ad=null,po=null,mo=null;function Kp(n){if(n=sl(n)){if(typeof ad!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=cc(e),ad(n.stateNode,n.type,e))}}function x0(n){po?mo?mo.push(n):mo=[n]:po=n}function y0(){if(po){var n=po,e=mo;if(mo=po=null,Kp(n),e)for(n=0;n<e.length;n++)Kp(e[n])}}function S0(n,e){return n(e)}function M0(){}var zc=!1;function E0(n,e,t){if(zc)return n(e,t);zc=!0;try{return S0(n,e,t)}finally{zc=!1,(po!==null||mo!==null)&&(M0(),y0())}}function Da(n,e){var t=n.stateNode;if(t===null)return null;var i=cc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var ld=!1;if(Yi)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){ld=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{ld=!1}function RS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ga=!1,Mu=null,Eu=!1,ud=null,bS={onError:function(n){ga=!0,Mu=n}};function PS(n,e,t,i,r,s,o,a,l){ga=!1,Mu=null,RS.apply(bS,arguments)}function LS(n,e,t,i,r,s,o,a,l){if(PS.apply(this,arguments),ga){if(ga){var u=Mu;ga=!1,Mu=null}else throw Error(ne(198));Eu||(Eu=!0,ud=u)}}function Ts(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function T0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Zp(n){if(Ts(n)!==n)throw Error(ne(188))}function DS(n){var e=n.alternate;if(!e){if(e=Ts(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Zp(r),n;if(s===i)return Zp(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function w0(n){return n=DS(n),n!==null?A0(n):null}function A0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=A0(n);if(e!==null)return e;n=n.sibling}return null}var C0=Hn.unstable_scheduleCallback,Qp=Hn.unstable_cancelCallback,US=Hn.unstable_shouldYield,NS=Hn.unstable_requestPaint,Ct=Hn.unstable_now,IS=Hn.unstable_getCurrentPriorityLevel,wh=Hn.unstable_ImmediatePriority,R0=Hn.unstable_UserBlockingPriority,Tu=Hn.unstable_NormalPriority,OS=Hn.unstable_LowPriority,b0=Hn.unstable_IdlePriority,oc=null,bi=null;function FS(n){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(oc,n,void 0,(n.current.flags&128)===128)}catch{}}var gi=Math.clz32?Math.clz32:BS,kS=Math.log,zS=Math.LN2;function BS(n){return n>>>=0,n===0?32:31-(kS(n)/zS|0)|0}var _l=64,gl=4194304;function da(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=da(a):(s&=o,s!==0&&(i=da(s)))}else o=t&~r,o!==0?i=da(o):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-gi(e),r=1<<t,i|=n[t],e&=~r;return i}function HS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-gi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=HS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function cd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function P0(){var n=_l;return _l<<=1,!(_l&4194240)&&(_l=64),n}function Bc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function il(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-gi(e),n[e]=t}function GS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-gi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ah(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-gi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var tt=0;function L0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var D0,Ch,U0,N0,I0,fd=!1,vl=[],xr=null,yr=null,Sr=null,Ua=new Map,Na=new Map,cr=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jp(n,e){switch(n){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function $o(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sl(e),e!==null&&Ch(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function XS(n,e,t,i,r){switch(e){case"focusin":return xr=$o(xr,n,e,t,i,r),!0;case"dragenter":return yr=$o(yr,n,e,t,i,r),!0;case"mouseover":return Sr=$o(Sr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ua.set(s,$o(Ua.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,$o(Na.get(s)||null,n,e,t,i,r)),!0}return!1}function O0(n){var e=is(n.target);if(e!==null){var t=Ts(e);if(t!==null){if(e=t.tag,e===13){if(e=T0(t),e!==null){n.blockedOn=e,I0(n.priority,function(){U0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ou(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=dd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);od=i,t.target.dispatchEvent(i),od=null}else return e=sl(t),e!==null&&Ch(e),n.blockedOn=t,!1;e.shift()}return!0}function em(n,e,t){ou(n)&&t.delete(e)}function jS(){fd=!1,xr!==null&&ou(xr)&&(xr=null),yr!==null&&ou(yr)&&(yr=null),Sr!==null&&ou(Sr)&&(Sr=null),Ua.forEach(em),Na.forEach(em)}function Ko(n,e){n.blockedOn===e&&(n.blockedOn=null,fd||(fd=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,jS)))}function Ia(n){function e(r){return Ko(r,n)}if(0<vl.length){Ko(vl[0],n);for(var t=1;t<vl.length;t++){var i=vl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(xr!==null&&Ko(xr,n),yr!==null&&Ko(yr,n),Sr!==null&&Ko(Sr,n),Ua.forEach(e),Na.forEach(e),t=0;t<cr.length;t++)i=cr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cr.length&&(t=cr[0],t.blockedOn===null);)O0(t),t.blockedOn===null&&cr.shift()}var _o=er.ReactCurrentBatchConfig,Au=!0;function YS(n,e,t,i){var r=tt,s=_o.transition;_o.transition=null;try{tt=1,Rh(n,e,t,i)}finally{tt=r,_o.transition=s}}function qS(n,e,t,i){var r=tt,s=_o.transition;_o.transition=null;try{tt=4,Rh(n,e,t,i)}finally{tt=r,_o.transition=s}}function Rh(n,e,t,i){if(Au){var r=dd(n,e,t,i);if(r===null)Kc(n,e,i,Cu,t),Jp(n,i);else if(XS(r,n,e,t,i))i.stopPropagation();else if(Jp(n,i),e&4&&-1<WS.indexOf(n)){for(;r!==null;){var s=sl(r);if(s!==null&&D0(s),s=dd(n,e,t,i),s===null&&Kc(n,e,i,Cu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kc(n,e,i,null,t)}}var Cu=null;function dd(n,e,t,i){if(Cu=null,n=Th(i),n=is(n),n!==null)if(e=Ts(n),e===null)n=null;else if(t=e.tag,t===13){if(n=T0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Cu=n,null}function F0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IS()){case wh:return 1;case R0:return 4;case Tu:case OS:return 16;case b0:return 536870912;default:return 16}default:return 16}}var dr=null,bh=null,au=null;function k0(){if(au)return au;var n,e=bh,t=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return au=r.slice(n,1<i?1-i:void 0)}function lu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xl(){return!0}function tm(){return!1}function Xn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:tm,this.isPropagationStopped=tm,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=Xn(Vo),rl=vt({},Vo,{view:0,detail:0}),$S=Xn(rl),Hc,Vc,Zo,ac=vt({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zo&&(Zo&&n.type==="mousemove"?(Hc=n.screenX-Zo.screenX,Vc=n.screenY-Zo.screenY):Vc=Hc=0,Zo=n),Hc)},movementY:function(n){return"movementY"in n?n.movementY:Vc}}),nm=Xn(ac),KS=vt({},ac,{dataTransfer:0}),ZS=Xn(KS),QS=vt({},rl,{relatedTarget:0}),Gc=Xn(QS),JS=vt({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),eM=Xn(JS),tM=vt({},Vo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),nM=Xn(tM),iM=vt({},Vo,{data:0}),im=Xn(iM),rM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=oM[n])?!!e[n]:!1}function Lh(){return aM}var lM=vt({},rl,{key:function(n){if(n.key){var e=rM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=lu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lh,charCode:function(n){return n.type==="keypress"?lu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?lu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),uM=Xn(lM),cM=vt({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Xn(cM),fM=vt({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lh}),dM=Xn(fM),hM=vt({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),pM=Xn(hM),mM=vt({},ac,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_M=Xn(mM),gM=[9,13,27,32],Dh=Yi&&"CompositionEvent"in window,va=null;Yi&&"documentMode"in document&&(va=document.documentMode);var vM=Yi&&"TextEvent"in window&&!va,z0=Yi&&(!Dh||va&&8<va&&11>=va),sm=" ",om=!1;function B0(n,e){switch(n){case"keyup":return gM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qs=!1;function xM(n,e){switch(n){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return n=e.data,n===sm&&om?null:n;default:return null}}function yM(n,e){if(Qs)return n==="compositionend"||!Dh&&B0(n,e)?(n=k0(),au=bh=dr=null,Qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z0&&e.locale!=="ko"?null:e.data;default:return null}}var SM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!SM[n.type]:e==="textarea"}function V0(n,e,t,i){x0(i),e=Ru(e,"onChange"),0<e.length&&(t=new Ph("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var xa=null,Oa=null;function MM(n){J0(n,0)}function lc(n){var e=to(n);if(d0(e))return n}function EM(n,e){if(n==="change")return e}var G0=!1;if(Yi){var Wc;if(Yi){var Xc="oninput"in document;if(!Xc){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Xc=typeof lm.oninput=="function"}Wc=Xc}else Wc=!1;G0=Wc&&(!document.documentMode||9<document.documentMode)}function um(){xa&&(xa.detachEvent("onpropertychange",W0),Oa=xa=null)}function W0(n){if(n.propertyName==="value"&&lc(Oa)){var e=[];V0(e,Oa,n,Th(n)),E0(MM,e)}}function TM(n,e,t){n==="focusin"?(um(),xa=e,Oa=t,xa.attachEvent("onpropertychange",W0)):n==="focusout"&&um()}function wM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lc(Oa)}function AM(n,e){if(n==="click")return lc(e)}function CM(n,e){if(n==="input"||n==="change")return lc(e)}function RM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var xi=typeof Object.is=="function"?Object.is:RM;function Fa(n,e){if(xi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!qf.call(e,r)||!xi(n[r],e[r]))return!1}return!0}function cm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fm(n,e){var t=cm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=cm(t)}}function X0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?X0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function j0(){for(var n=window,e=Su();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Su(n.document)}return e}function Uh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function bM(n){var e=j0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&X0(t.ownerDocument.documentElement,t)){if(i!==null&&Uh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=fm(t,s);var o=fm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var PM=Yi&&"documentMode"in document&&11>=document.documentMode,Js=null,hd=null,ya=null,pd=!1;function dm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pd||Js==null||Js!==Su(i)||(i=Js,"selectionStart"in i&&Uh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ya&&Fa(ya,i)||(ya=i,i=Ru(hd,"onSelect"),0<i.length&&(e=new Ph("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Js)))}function yl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var eo={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},jc={},Y0={};Yi&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function uc(n){if(jc[n])return jc[n];if(!eo[n])return n;var e=eo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Y0)return jc[n]=e[t];return n}var q0=uc("animationend"),$0=uc("animationiteration"),K0=uc("animationstart"),Z0=uc("transitionend"),Q0=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,e){Q0.set(n,e),Es(e,[n])}for(var Yc=0;Yc<hm.length;Yc++){var qc=hm[Yc],LM=qc.toLowerCase(),DM=qc[0].toUpperCase()+qc.slice(1);zr(LM,"on"+DM)}zr(q0,"onAnimationEnd");zr($0,"onAnimationIteration");zr(K0,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Z0,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function pm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,LS(i,e,void 0,n),n.currentTarget=null}function J0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,u),s=l}}}if(Eu)throw n=ud,Eu=!1,ud=null,n}function at(n,e){var t=e[xd];t===void 0&&(t=e[xd]=new Set);var i=n+"__bubble";t.has(i)||(ev(e,n,2,!1),t.add(i))}function $c(n,e,t){var i=0;e&&(i|=4),ev(t,n,i,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function ka(n){if(!n[Sl]){n[Sl]=!0,a0.forEach(function(t){t!=="selectionchange"&&(UM.has(t)||$c(t,!1,n),$c(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,$c("selectionchange",!1,e))}}function ev(n,e,t,i){switch(F0(e)){case 1:var r=YS;break;case 4:r=qS;break;default:r=Rh}t=r.bind(null,e,t,n),r=void 0,!ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Kc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}E0(function(){var u=s,c=Th(t),d=[];e:{var h=Q0.get(n);if(h!==void 0){var p=Ph,x=n;switch(n){case"keypress":if(lu(t)===0)break e;case"keydown":case"keyup":p=uM;break;case"focusin":x="focus",p=Gc;break;case"focusout":x="blur",p=Gc;break;case"beforeblur":case"afterblur":p=Gc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ZS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dM;break;case q0:case $0:case K0:p=eM;break;case Z0:p=pM;break;case"scroll":p=$S;break;case"wheel":p=_M;break;case"copy":case"cut":case"paste":p=nM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rm}var g=(e&4)!==0,m=!g&&n==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=Da(v,f),y!=null&&g.push(za(v,y,_)))),m)break;v=v.return}0<g.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==od&&(x=t.relatedTarget||t.fromElement)&&(is(x)||x[qi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?is(x):null,x!==null&&(m=Ts(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(g=nm,y="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=rm,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:to(p),_=x==null?h:to(x),h=new g(y,v+"leave",p,t,c),h.target=m,h.relatedTarget=_,y=null,is(c)===u&&(g=new g(f,v+"enter",x,t,c),g.target=_,g.relatedTarget=m,y=g),m=y,p&&x)t:{for(g=p,f=x,v=0,_=g;_;_=bs(_))v++;for(_=0,y=f;y;y=bs(y))_++;for(;0<v-_;)g=bs(g),v--;for(;0<_-v;)f=bs(f),_--;for(;v--;){if(g===f||f!==null&&g===f.alternate)break t;g=bs(g),f=bs(f)}g=null}else g=null;p!==null&&mm(d,h,p,g,!1),x!==null&&m!==null&&mm(d,m,x,g,!0)}}e:{if(h=u?to(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var M=EM;else if(am(h))if(G0)M=CM;else{M=wM;var T=TM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=AM);if(M&&(M=M(n,u))){V0(d,M,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&td(h,"number",h.value)}switch(T=u?to(u):window,n){case"focusin":(am(T)||T.contentEditable==="true")&&(Js=T,hd=u,ya=null);break;case"focusout":ya=hd=Js=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,dm(d,t,c);break;case"selectionchange":if(PM)break;case"keydown":case"keyup":dm(d,t,c)}var E;if(Dh)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Qs?B0(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(z0&&t.locale!=="ko"&&(Qs||b!=="onCompositionStart"?b==="onCompositionEnd"&&Qs&&(E=k0()):(dr=c,bh="value"in dr?dr.value:dr.textContent,Qs=!0)),T=Ru(u,b),0<T.length&&(b=new im(b,n,null,t,c),d.push({event:b,listeners:T}),E?b.data=E:(E=H0(t),E!==null&&(b.data=E)))),(E=vM?xM(n,t):yM(n,t))&&(u=Ru(u,"onBeforeInput"),0<u.length&&(c=new im("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=E))}J0(d,e)})}function za(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ru(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Da(n,t),s!=null&&i.unshift(za(n,s,r)),s=Da(n,e),s!=null&&i.push(za(n,s,r))),n=n.return}return i}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Da(t,s),l!=null&&o.unshift(za(t,l,a))):r||(l=Da(t,s),l!=null&&o.push(za(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var NM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function _m(n){return(typeof n=="string"?n:""+n).replace(NM,`
`).replace(IM,"")}function Ml(n,e,t){if(e=_m(e),_m(n)!==e&&t)throw Error(ne(425))}function bu(){}var md=null,_d=null;function gd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,OM=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,FM=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(n){return gm.resolve(null).then(n).catch(kM)}:vd;function kM(n){setTimeout(function(){throw n})}function Zc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ia(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ia(e)}function Mr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function vm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Go=Math.random().toString(36).slice(2),wi="__reactFiber$"+Go,Ba="__reactProps$"+Go,qi="__reactContainer$"+Go,xd="__reactEvents$"+Go,zM="__reactListeners$"+Go,BM="__reactHandles$"+Go;function is(n){var e=n[wi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qi]||t[wi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=vm(n);n!==null;){if(t=n[wi])return t;n=vm(n)}return e}n=t,t=n.parentNode}return null}function sl(n){return n=n[wi]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function to(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function cc(n){return n[Ba]||null}var yd=[],no=-1;function Br(n){return{current:n}}function ut(n){0>no||(n.current=yd[no],yd[no]=null,no--)}function st(n,e){no++,yd[no]=n.current,n.current=e}var Ur={},rn=Br(Ur),vn=Br(!1),_s=Ur;function wo(n,e){var t=n.type.contextTypes;if(!t)return Ur;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function xn(n){return n=n.childContextTypes,n!=null}function Pu(){ut(vn),ut(rn)}function xm(n,e,t){if(rn.current!==Ur)throw Error(ne(168));st(rn,e),st(vn,t)}function tv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,TS(n)||"Unknown",r));return vt({},t,i)}function Lu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,_s=rn.current,st(rn,n),st(vn,vn.current),!0}function ym(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=tv(n,e,_s),i.__reactInternalMemoizedMergedChildContext=n,ut(vn),ut(rn),st(rn,n)):ut(vn),st(vn,t)}var Hi=null,fc=!1,Qc=!1;function nv(n){Hi===null?Hi=[n]:Hi.push(n)}function HM(n){fc=!0,nv(n)}function Hr(){if(!Qc&&Hi!==null){Qc=!0;var n=0,e=tt;try{var t=Hi;for(tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hi=null,fc=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(n+1)),C0(wh,Hr),r}finally{tt=e,Qc=!1}}return null}var io=[],ro=0,Du=null,Uu=0,$n=[],Kn=0,gs=null,Gi=1,Wi="";function Zr(n,e){io[ro++]=Uu,io[ro++]=Du,Du=n,Uu=e}function iv(n,e,t){$n[Kn++]=Gi,$n[Kn++]=Wi,$n[Kn++]=gs,gs=n;var i=Gi;n=Wi;var r=32-gi(i)-1;i&=~(1<<r),t+=1;var s=32-gi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-gi(e)+r|t<<r|i,Wi=s+n}else Gi=1<<s|t<<r|i,Wi=n}function Nh(n){n.return!==null&&(Zr(n,1),iv(n,1,0))}function Ih(n){for(;n===Du;)Du=io[--ro],io[ro]=null,Uu=io[--ro],io[ro]=null;for(;n===gs;)gs=$n[--Kn],$n[Kn]=null,Wi=$n[--Kn],$n[Kn]=null,Gi=$n[--Kn],$n[Kn]=null}var Fn=null,Nn=null,ct=!1,hi=null;function rv(n,e){var t=ei(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Sm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Fn=n,Nn=Mr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Fn=n,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=gs!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ei(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Fn=n,Nn=null,!0):!1;default:return!1}}function Sd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Md(n){if(ct){var e=Nn;if(e){var t=e;if(!Sm(n,e)){if(Sd(n))throw Error(ne(418));e=Mr(t.nextSibling);var i=Fn;e&&Sm(n,e)?rv(i,t):(n.flags=n.flags&-4097|2,ct=!1,Fn=n)}}else{if(Sd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,ct=!1,Fn=n}}}function Mm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function El(n){if(n!==Fn)return!1;if(!ct)return Mm(n),ct=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!gd(n.type,n.memoizedProps)),e&&(e=Nn)){if(Sd(n))throw sv(),Error(ne(418));for(;e;)rv(n,e),e=Mr(e.nextSibling)}if(Mm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Nn=Mr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Nn=null}}else Nn=Fn?Mr(n.stateNode.nextSibling):null;return!0}function sv(){for(var n=Nn;n;)n=Mr(n.nextSibling)}function Ao(){Nn=Fn=null,ct=!1}function Oh(n){hi===null?hi=[n]:hi.push(n)}var VM=er.ReactCurrentBatchConfig;function Qo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Tl(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Em(n){var e=n._init;return e(n._payload)}function ov(n){function e(f,v){if(n){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Ar(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,n?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,_,y){return v===null||v.tag!==6?(v=of(_,f.mode,y),v.return=f,v):(v=r(v,_),v.return=f,v)}function l(f,v,_,y){var M=_.type;return M===Zs?c(f,v,_.props.children,y,_.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ar&&Em(M)===v.type)?(y=r(v,_.props),y.ref=Qo(f,v,_),y.return=f,y):(y=mu(_.type,_.key,_.props,null,f.mode,y),y.ref=Qo(f,v,_),y.return=f,y)}function u(f,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=af(_,f.mode,y),v.return=f,v):(v=r(v,_.children||[]),v.return=f,v)}function c(f,v,_,y,M){return v===null||v.tag!==7?(v=ls(_,f.mode,y,M),v.return=f,v):(v=r(v,_),v.return=f,v)}function d(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=of(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:return _=mu(v.type,v.key,v.props,null,f.mode,_),_.ref=Qo(f,null,v),_.return=f,_;case Ks:return v=af(v,f.mode,_),v.return=f,v;case ar:var y=v._init;return d(f,y(v._payload),_)}if(fa(v)||Yo(v))return v=ls(v,f.mode,_,null),v.return=f,v;Tl(f,v)}return null}function h(f,v,_,y){var M=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:a(f,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case hl:return _.key===M?l(f,v,_,y):null;case Ks:return _.key===M?u(f,v,_,y):null;case ar:return M=_._init,h(f,v,M(_._payload),y)}if(fa(_)||Yo(_))return M!==null?null:c(f,v,_,y,null);Tl(f,_)}return null}function p(f,v,_,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(v,f,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hl:return f=f.get(y.key===null?_:y.key)||null,l(v,f,y,M);case Ks:return f=f.get(y.key===null?_:y.key)||null,u(v,f,y,M);case ar:var T=y._init;return p(f,v,_,T(y._payload),M)}if(fa(y)||Yo(y))return f=f.get(_)||null,c(v,f,y,M,null);Tl(v,y)}return null}function x(f,v,_,y){for(var M=null,T=null,E=v,b=v=0,S=null;E!==null&&b<_.length;b++){E.index>b?(S=E,E=null):S=E.sibling;var w=h(f,E,_[b],y);if(w===null){E===null&&(E=S);break}n&&E&&w.alternate===null&&e(f,E),v=s(w,v,b),T===null?M=w:T.sibling=w,T=w,E=S}if(b===_.length)return t(f,E),ct&&Zr(f,b),M;if(E===null){for(;b<_.length;b++)E=d(f,_[b],y),E!==null&&(v=s(E,v,b),T===null?M=E:T.sibling=E,T=E);return ct&&Zr(f,b),M}for(E=i(f,E);b<_.length;b++)S=p(E,f,b,_[b],y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?b:S.key),v=s(S,v,b),T===null?M=S:T.sibling=S,T=S);return n&&E.forEach(function(I){return e(f,I)}),ct&&Zr(f,b),M}function g(f,v,_,y){var M=Yo(_);if(typeof M!="function")throw Error(ne(150));if(_=M.call(_),_==null)throw Error(ne(151));for(var T=M=null,E=v,b=v=0,S=null,w=_.next();E!==null&&!w.done;b++,w=_.next()){E.index>b?(S=E,E=null):S=E.sibling;var I=h(f,E,w.value,y);if(I===null){E===null&&(E=S);break}n&&E&&I.alternate===null&&e(f,E),v=s(I,v,b),T===null?M=I:T.sibling=I,T=I,E=S}if(w.done)return t(f,E),ct&&Zr(f,b),M;if(E===null){for(;!w.done;b++,w=_.next())w=d(f,w.value,y),w!==null&&(v=s(w,v,b),T===null?M=w:T.sibling=w,T=w);return ct&&Zr(f,b),M}for(E=i(f,E);!w.done;b++,w=_.next())w=p(E,f,b,w.value,y),w!==null&&(n&&w.alternate!==null&&E.delete(w.key===null?b:w.key),v=s(w,v,b),T===null?M=w:T.sibling=w,T=w);return n&&E.forEach(function(H){return e(f,H)}),ct&&Zr(f,b),M}function m(f,v,_,y){if(typeof _=="object"&&_!==null&&_.type===Zs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case hl:e:{for(var M=_.key,T=v;T!==null;){if(T.key===M){if(M=_.type,M===Zs){if(T.tag===7){t(f,T.sibling),v=r(T,_.props.children),v.return=f,f=v;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ar&&Em(M)===T.type){t(f,T.sibling),v=r(T,_.props),v.ref=Qo(f,T,_),v.return=f,f=v;break e}t(f,T);break}else e(f,T);T=T.sibling}_.type===Zs?(v=ls(_.props.children,f.mode,y,_.key),v.return=f,f=v):(y=mu(_.type,_.key,_.props,null,f.mode,y),y.ref=Qo(f,v,_),y.return=f,f=y)}return o(f);case Ks:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(f,v.sibling),v=r(v,_.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=af(_,f.mode,y),v.return=f,f=v}return o(f);case ar:return T=_._init,m(f,v,T(_._payload),y)}if(fa(_))return x(f,v,_,y);if(Yo(_))return g(f,v,_,y);Tl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,_),v.return=f,f=v):(t(f,v),v=of(_,f.mode,y),v.return=f,f=v),o(f)):t(f,v)}return m}var Co=ov(!0),av=ov(!1),Nu=Br(null),Iu=null,so=null,Fh=null;function kh(){Fh=so=Iu=null}function zh(n){var e=Nu.current;ut(Nu),n._currentValue=e}function Ed(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function go(n,e){Iu=n,Fh=so=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(gn=!0),n.firstContext=null)}function si(n){var e=n._currentValue;if(Fh!==n)if(n={context:n,memoizedValue:e,next:null},so===null){if(Iu===null)throw Error(ne(308));so=n,Iu.dependencies={lanes:0,firstContext:n}}else so=so.next=n;return e}var rs=null;function Bh(n){rs===null?rs=[n]:rs.push(n)}function lv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Bh(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var lr=!1;function Hh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,Bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function uu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ah(n,t)}}function Tm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ou(n,e,t,i){var r=n.updateQueue;lr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,g=a;switch(h=e,p=t,g.tag){case 1:if(x=g.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=vt({},d,h);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xs|=o,n.lanes=o,n.memoizedState=d}}function wm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ol={},Pi=Br(ol),Ha=Br(ol),Va=Br(ol);function ss(n){if(n===ol)throw Error(ne(174));return n}function Vh(n,e){switch(st(Va,e),st(Ha,n),st(Pi,ol),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:id(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=id(e,n)}ut(Pi),st(Pi,e)}function Ro(){ut(Pi),ut(Ha),ut(Va)}function cv(n){ss(Va.current);var e=ss(Pi.current),t=id(e,n.type);e!==t&&(st(Ha,n),st(Pi,t))}function Gh(n){Ha.current===n&&(ut(Pi),ut(Ha))}var pt=Br(0);function Fu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function Wh(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var cu=er.ReactCurrentDispatcher,ef=er.ReactCurrentBatchConfig,vs=0,gt=null,Dt=null,kt=null,ku=!1,Sa=!1,Ga=0,GM=0;function $t(){throw Error(ne(321))}function Xh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!xi(n[t],e[t]))return!1;return!0}function jh(n,e,t,i,r,s){if(vs=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cu.current=n===null||n.memoizedState===null?YM:qM,n=t(i,r),Sa){s=0;do{if(Sa=!1,Ga=0,25<=s)throw Error(ne(301));s+=1,kt=Dt=null,e.updateQueue=null,cu.current=$M,n=t(i,r)}while(Sa)}if(cu.current=zu,e=Dt!==null&&Dt.next!==null,vs=0,kt=Dt=gt=null,ku=!1,e)throw Error(ne(300));return n}function Yh(){var n=Ga!==0;return Ga=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?gt.memoizedState=kt=n:kt=kt.next=n,kt}function oi(){if(Dt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=Dt.next;var e=kt===null?gt.memoizedState:kt.next;if(e!==null)kt=e,Dt=n;else{if(n===null)throw Error(ne(310));Dt=n,n={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},kt===null?gt.memoizedState=kt=n:kt=kt.next=n}return kt}function Wa(n,e){return typeof e=="function"?e(n):e}function tf(n){var e=oi(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Dt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,gt.lanes|=c,xs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,xi(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,gt.lanes|=s,xs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function nf(n){var e=oi(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);xi(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function fv(){}function dv(n,e){var t=gt,i=oi(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,qh(mv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(t.flags|=2048,Xa(9,pv.bind(null,t,i,r,e),void 0,null),Bt===null)throw Error(ne(349));vs&30||hv(t,e,r)}return r}function hv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function pv(n,e,t,i){e.value=t,e.getSnapshot=i,_v(e)&&gv(n)}function mv(n,e,t){return t(function(){_v(e)&&gv(n)})}function _v(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!xi(n,t)}catch{return!0}}function gv(n){var e=$i(n,1);e!==null&&vi(e,n,1,-1)}function Am(n){var e=Mi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},e.queue=n,n=n.dispatch=jM.bind(null,gt,n),[e.memoizedState,n]}function Xa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function vv(){return oi().memoizedState}function fu(n,e,t,i){var r=Mi();gt.flags|=n,r.memoizedState=Xa(1|e,t,void 0,i===void 0?null:i)}function dc(n,e,t,i){var r=oi();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&Xh(i,o.deps)){r.memoizedState=Xa(e,t,s,i);return}}gt.flags|=n,r.memoizedState=Xa(1|e,t,s,i)}function Cm(n,e){return fu(8390656,8,n,e)}function qh(n,e){return dc(2048,8,n,e)}function xv(n,e){return dc(4,2,n,e)}function yv(n,e){return dc(4,4,n,e)}function Sv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Mv(n,e,t){return t=t!=null?t.concat([n]):null,dc(4,4,Sv.bind(null,e,n),t)}function $h(){}function Ev(n,e){var t=oi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Xh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Tv(n,e){var t=oi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Xh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function wv(n,e,t){return vs&21?(xi(t,e)||(t=P0(),gt.lanes|=t,xs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=t)}function WM(n,e){var t=tt;tt=t!==0&&4>t?t:4,n(!0);var i=ef.transition;ef.transition={};try{n(!1),e()}finally{tt=t,ef.transition=i}}function Av(){return oi().memoizedState}function XM(n,e,t){var i=wr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Cv(n))Rv(e,t);else if(t=lv(n,e,t,i),t!==null){var r=fn();vi(t,n,i,r),bv(t,e,i)}}function jM(n,e,t){var i=wr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cv(n))Rv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,xi(a,o)){var l=e.interleaved;l===null?(r.next=r,Bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=lv(n,e,r,i),t!==null&&(r=fn(),vi(t,n,i,r),bv(t,e,i))}}function Cv(n){var e=n.alternate;return n===gt||e!==null&&e===gt}function Rv(n,e){Sa=ku=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function bv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ah(n,t)}}var zu={readContext:si,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},YM={readContext:si,useCallback:function(n,e){return Mi().memoizedState=[n,e===void 0?null:e],n},useContext:si,useEffect:Cm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,fu(4194308,4,Sv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return fu(4194308,4,n,e)},useInsertionEffect:function(n,e){return fu(4,2,n,e)},useMemo:function(n,e){var t=Mi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Mi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=XM.bind(null,gt,n),[i.memoizedState,n]},useRef:function(n){var e=Mi();return n={current:n},e.memoizedState=n},useState:Am,useDebugValue:$h,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=Am(!1),e=n[0];return n=WM.bind(null,n[1]),Mi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=gt,r=Mi();if(ct){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Bt===null)throw Error(ne(349));vs&30||hv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Cm(mv.bind(null,i,s,n),[n]),i.flags|=2048,Xa(9,pv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Mi(),e=Bt.identifierPrefix;if(ct){var t=Wi,i=Gi;t=(i&~(1<<32-gi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ga++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=GM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},qM={readContext:si,useCallback:Ev,useContext:si,useEffect:qh,useImperativeHandle:Mv,useInsertionEffect:xv,useLayoutEffect:yv,useMemo:Tv,useReducer:tf,useRef:vv,useState:function(){return tf(Wa)},useDebugValue:$h,useDeferredValue:function(n){var e=oi();return wv(e,Dt.memoizedState,n)},useTransition:function(){var n=tf(Wa)[0],e=oi().memoizedState;return[n,e]},useMutableSource:fv,useSyncExternalStore:dv,useId:Av,unstable_isNewReconciler:!1},$M={readContext:si,useCallback:Ev,useContext:si,useEffect:qh,useImperativeHandle:Mv,useInsertionEffect:xv,useLayoutEffect:yv,useMemo:Tv,useReducer:nf,useRef:vv,useState:function(){return nf(Wa)},useDebugValue:$h,useDeferredValue:function(n){var e=oi();return Dt===null?e.memoizedState=n:wv(e,Dt.memoizedState,n)},useTransition:function(){var n=nf(Wa)[0],e=oi().memoizedState;return[n,e]},useMutableSource:fv,useSyncExternalStore:dv,useId:Av,unstable_isNewReconciler:!1};function fi(n,e){if(n&&n.defaultProps){e=vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Td(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var hc={isMounted:function(n){return(n=n._reactInternals)?Ts(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=fn(),r=wr(n),s=ji(i,r);s.payload=e,t!=null&&(s.callback=t),e=Er(n,s,r),e!==null&&(vi(e,n,r,i),uu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=fn(),r=wr(n),s=ji(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Er(n,s,r),e!==null&&(vi(e,n,r,i),uu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=fn(),i=wr(n),r=ji(t,i);r.tag=2,e!=null&&(r.callback=e),e=Er(n,r,i),e!==null&&(vi(e,n,i,t),uu(e,n,i))}};function Rm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(t,i)||!Fa(r,s):!0}function Pv(n,e,t){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=si(s):(r=xn(e)?_s:rn.current,i=e.contextTypes,s=(i=i!=null)?wo(n,r):Ur),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function bm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&hc.enqueueReplaceState(e,e.state,null)}function wd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Hh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=si(s):(s=xn(e)?_s:rn.current,r.context=wo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),Ou(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function bo(n,e){try{var t="",i=e;do t+=ES(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function rf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ad(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var KM=typeof WeakMap=="function"?WeakMap:Map;function Lv(n,e,t){t=ji(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Hu||(Hu=!0,Od=i),Ad(n,e)},t}function Dv(n,e,t){t=ji(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ad(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ad(n,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Pm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new KM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=cE.bind(null,n,e,t),e.then(n,n))}function Lm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Dm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ji(-1,1),e.tag=2,Er(t,e,1))),t.lanes|=1),n)}var ZM=er.ReactCurrentOwner,gn=!1;function an(n,e,t,i){e.child=n===null?av(e,null,t,i):Co(e,n.child,t,i)}function Um(n,e,t,i,r){t=t.render;var s=e.ref;return go(e,r),i=jh(n,e,t,i,s,r),t=Yh(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(ct&&t&&Nh(e),e.flags|=1,an(n,e,i,r),e.child)}function Nm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ip(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Uv(n,e,s,i,r)):(n=mu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Fa,t(o,i)&&n.ref===e.ref)return Ki(n,e,r)}return e.flags|=1,n=Ar(s,i),n.ref=e.ref,n.return=e,e.child=n}function Uv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Fa(s,i)&&n.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(gn=!0);else return e.lanes=n.lanes,Ki(n,e,r)}return Cd(n,e,t,i,r)}function Nv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ao,Ln),Ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,st(ao,Ln),Ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,st(ao,Ln),Ln|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,st(ao,Ln),Ln|=i;return an(n,e,r,t),e.child}function Iv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cd(n,e,t,i,r){var s=xn(t)?_s:rn.current;return s=wo(e,s),go(e,r),t=jh(n,e,t,i,s,r),i=Yh(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(ct&&i&&Nh(e),e.flags|=1,an(n,e,t,r),e.child)}function Im(n,e,t,i,r){if(xn(t)){var s=!0;Lu(e)}else s=!1;if(go(e,r),e.stateNode===null)du(n,e),Pv(e,t,i),wd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=si(u):(u=xn(t)?_s:rn.current,u=wo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&bm(e,o,i,u),lr=!1;var h=e.memoizedState;o.state=h,Ou(e,i,o,r),l=e.memoizedState,a!==i||h!==l||vn.current||lr?(typeof c=="function"&&(Td(e,t,c,i),l=e.memoizedState),(a=lr||Rm(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,uv(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:fi(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=si(l):(l=xn(t)?_s:rn.current,l=wo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&bm(e,o,i,l),lr=!1,h=e.memoizedState,o.state=h,Ou(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||vn.current||lr?(typeof p=="function"&&(Td(e,t,p,i),x=e.memoizedState),(u=lr||Rm(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Rd(n,e,t,i,s,r)}function Rd(n,e,t,i,r,s){Iv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ym(e,t,!1),Ki(n,e,s);i=e.stateNode,ZM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Co(e,n.child,null,s),e.child=Co(e,null,a,s)):an(n,e,a,s),e.memoizedState=i.state,r&&ym(e,t,!0),e.child}function Ov(n){var e=n.stateNode;e.pendingContext?xm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(n,e.context,!1),Vh(n,e.containerInfo)}function Om(n,e,t,i,r){return Ao(),Oh(r),e.flags|=256,an(n,e,t,i),e.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Pd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fv(n,e,t){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),st(pt,r&1),n===null)return Md(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,i,0,null),n=ls(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Pd(t),e.memoizedState=bd,n):Kh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return QM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=ls(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Pd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=bd,i}return s=n.child,n=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Kh(n,e){return e=_c({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function wl(n,e,t,i){return i!==null&&Oh(i),Co(e,n.child,null,t),n=Kh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function QM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=rf(Error(ne(422))),wl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Co(e,n.child,null,o),e.child.memoizedState=Pd(o),e.memoizedState=bd,s);if(!(e.mode&1))return wl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=rf(s,i,void 0),wl(n,e,o,i)}if(a=(o&n.childLanes)!==0,gn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),vi(i,n,r,-1))}return np(),i=rf(Error(ne(421))),wl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=fE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Nn=Mr(r.nextSibling),Fn=e,ct=!0,hi=null,n!==null&&($n[Kn++]=Gi,$n[Kn++]=Wi,$n[Kn++]=gs,Gi=n.id,Wi=n.overflow,gs=e),e=Kh(e,i.children),e.flags|=4096,e)}function Fm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ed(n.return,e,t)}function sf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function kv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(n,e,i.children,t),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fm(n,t,e);else if(n.tag===19)Fm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Fu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),sf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Fu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}sf(e,!0,t,null,s);break;case"together":sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function du(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),xs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Ar(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ar(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function JM(n,e,t){switch(e.tag){case 3:Ov(e),Ao();break;case 5:cv(e);break;case 1:xn(e.type)&&Lu(e);break;case 4:Vh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Nu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):t&e.child.childLanes?Fv(n,e,t):(st(pt,pt.current&1),n=Ki(n,e,t),n!==null?n.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return kv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Nv(n,e,t)}return Ki(n,e,t)}var zv,Ld,Bv,Hv;zv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ld=function(){};Bv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ss(Pi.current);var s=null;switch(t){case"input":r=Jf(n,r),i=Jf(n,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=nd(n,r),i=nd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=bu)}rd(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Jo(n,e){if(!ct)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function eE(n,e,t){var i=e.pendingProps;switch(Ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return xn(e.type)&&Pu(),Kt(e),null;case 3:return i=e.stateNode,Ro(),ut(vn),ut(rn),Wh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(El(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hi!==null&&(zd(hi),hi=null))),Ld(n,e),Kt(e),null;case 5:Gh(e);var r=ss(Va.current);if(t=e.type,n!==null&&e.stateNode!=null)Bv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Kt(e),null}if(n=ss(Pi.current),El(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[Ba]=s,n=(e.mode&1)!==0,t){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)at(ha[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":jp(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":qp(i,s),at("invalid",i)}rd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,a,n),r=["children",""+a]):Pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(t){case"input":pl(i),Yp(i,s,!0);break;case"textarea":pl(i),$p(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=bu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=m0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[wi]=e,n[Ba]=i,zv(n,e,!1,!1),e.stateNode=n;e:{switch(o=sd(t,i),t){case"dialog":at("cancel",n),at("close",n),r=i;break;case"iframe":case"object":case"embed":at("load",n),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)at(ha[r],n);r=i;break;case"source":at("error",n),r=i;break;case"img":case"image":case"link":at("error",n),at("load",n),r=i;break;case"details":at("toggle",n),r=i;break;case"input":jp(n,i),r=Jf(n,i),at("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),at("invalid",n);break;case"textarea":qp(n,i),r=nd(n,i),at("invalid",n);break;default:r=i}rd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?v0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&La(n,l):typeof l=="number"&&La(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",n):l!=null&&yh(n,s,l,o))}switch(t){case"input":pl(n),Yp(n,i,!1);break;case"textarea":pl(n),$p(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Dr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ho(n,!!i.multiple,s,!1):i.defaultValue!=null&&ho(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=bu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(n&&e.stateNode!=null)Hv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ss(Va.current),ss(Pi.current),El(e)){if(i=e.stateNode,t=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==t)&&(n=Fn,n!==null))switch(n.tag){case 3:Ml(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ml(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return Kt(e),null;case 13:if(ut(pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ct&&Nn!==null&&e.mode&1&&!(e.flags&128))sv(),Ao(),e.flags|=98560,s=!1;else if(s=El(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[wi]=e}else Ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else hi!==null&&(zd(hi),hi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||pt.current&1?Ut===0&&(Ut=3):np())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Ro(),Ld(n,e),n===null&&ka(e.stateNode.containerInfo),Kt(e),null;case 10:return zh(e.type._context),Kt(e),null;case 17:return xn(e.type)&&Pu(),Kt(e),null;case 19:if(ut(pt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Jo(s,!1);else{if(Ut!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Fu(n),o!==null){for(e.flags|=128,Jo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return st(pt,pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ct()>Po&&(e.flags|=128,i=!0,Jo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Fu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Kt(e),null}else 2*Ct()-s.renderingStartTime>Po&&t!==1073741824&&(e.flags|=128,i=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,t=pt.current,st(pt,i?t&1|2:t&1),e):(Kt(e),null);case 22:case 23:return tp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function tE(n,e){switch(Ih(e),e.tag){case 1:return xn(e.type)&&Pu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ro(),ut(vn),ut(rn),Wh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Gh(e),null;case 13:if(ut(pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ao()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ut(pt),null;case 4:return Ro(),null;case 10:return zh(e.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var Al=!1,Jt=!1,nE=typeof WeakSet=="function"?WeakSet:Set,he=null;function oo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){St(n,e,i)}else t.current=null}function Dd(n,e,t){try{t()}catch(i){St(n,e,i)}}var km=!1;function iE(n,e){if(md=Au,n=j0(),Uh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(_d={focusedElem:n,selectionRange:t},Au=!1,he=e;he!==null;)if(e=he,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,he=n;else for(;he!==null;){e=he;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:fi(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){St(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}return x=km,km=!1,x}function Ma(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dd(e,t,s)}r=r.next}while(r!==i)}}function pc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ud(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Vv(n){var e=n.alternate;e!==null&&(n.alternate=null,Vv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[wi],delete e[Ba],delete e[xd],delete e[zM],delete e[BM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Gv(n){return n.tag===5||n.tag===3||n.tag===4}function zm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Gv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=bu));else if(i!==4&&(n=n.child,n!==null))for(Nd(n,e,t),n=n.sibling;n!==null;)Nd(n,e,t),n=n.sibling}function Id(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Id(n,e,t),n=n.sibling;n!==null;)Id(n,e,t),n=n.sibling}var Gt=null,di=!1;function tr(n,e,t){for(t=t.child;t!==null;)Wv(n,e,t),t=t.sibling}function Wv(n,e,t){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(oc,t)}catch{}switch(t.tag){case 5:Jt||oo(t,e);case 6:var i=Gt,r=di;Gt=null,tr(n,e,t),Gt=i,di=r,Gt!==null&&(di?(n=Gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Gt.removeChild(t.stateNode));break;case 18:Gt!==null&&(di?(n=Gt,t=t.stateNode,n.nodeType===8?Zc(n.parentNode,t):n.nodeType===1&&Zc(n,t),Ia(n)):Zc(Gt,t.stateNode));break;case 4:i=Gt,r=di,Gt=t.stateNode.containerInfo,di=!0,tr(n,e,t),Gt=i,di=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dd(t,e,o),r=r.next}while(r!==i)}tr(n,e,t);break;case 1:if(!Jt&&(oo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){St(t,e,a)}tr(n,e,t);break;case 21:tr(n,e,t);break;case 22:t.mode&1?(Jt=(i=Jt)||t.memoizedState!==null,tr(n,e,t),Jt=i):tr(n,e,t);break;default:tr(n,e,t)}}function Bm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new nE),e.forEach(function(i){var r=dE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ai(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,di=!1;break e;case 3:Gt=a.stateNode.containerInfo,di=!0;break e;case 4:Gt=a.stateNode.containerInfo,di=!0;break e}a=a.return}if(Gt===null)throw Error(ne(160));Wv(s,o,r),Gt=null,di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xv(e,n),e=e.sibling}function Xv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(e,n),Si(n),i&4){try{Ma(3,n,n.return),pc(3,n)}catch(g){St(n,n.return,g)}try{Ma(5,n,n.return)}catch(g){St(n,n.return,g)}}break;case 1:ai(e,n),Si(n),i&512&&t!==null&&oo(t,t.return);break;case 5:if(ai(e,n),Si(n),i&512&&t!==null&&oo(t,t.return),n.flags&32){var r=n.stateNode;try{La(r,"")}catch(g){St(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&h0(r,s),sd(a,o);var u=sd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?v0(r,d):c==="dangerouslySetInnerHTML"?_0(r,d):c==="children"?La(r,d):yh(r,c,d,u)}switch(a){case"input":ed(r,s);break;case"textarea":p0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ho(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ho(r,!!s.multiple,s.defaultValue,!0):ho(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ba]=s}catch(g){St(n,n.return,g)}}break;case 6:if(ai(e,n),Si(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){St(n,n.return,g)}}break;case 3:if(ai(e,n),Si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ia(e.containerInfo)}catch(g){St(n,n.return,g)}break;case 4:ai(e,n),Si(n);break;case 13:ai(e,n),Si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jh=Ct())),i&4&&Bm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Jt=(u=Jt)||c,ai(e,n),Jt=u):ai(e,n),Si(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(he=n,c=n.child;c!==null;){for(d=he=c;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ma(4,h,h.return);break;case 1:oo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){St(i,t,g)}}break;case 5:oo(h,h.return);break;case 22:if(h.memoizedState!==null){Vm(d);continue}}p!==null?(p.return=h,he=p):Vm(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=g0("display",o))}catch(g){St(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){St(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ai(e,n),Si(n),i&4&&Bm(n);break;case 21:break;default:ai(e,n),Si(n)}}function Si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Gv(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(La(r,""),i.flags&=-33);var s=zm(n);Id(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zm(n);Nd(n,a,o);break;default:throw Error(ne(161))}}catch(l){St(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function rE(n,e,t){he=n,jv(n)}function jv(n,e,t){for(var i=(n.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Al;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Al;var u=Jt;if(Al=o,(Jt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Gm(r):l!==null?(l.return=o,he=l):Gm(r);for(;s!==null;)he=s,jv(s),s=s.sibling;he=r,Al=a,Jt=u}Hm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Hm(n)}}function Hm(n){for(;he!==null;){var e=he;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:fi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}wm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Jt||e.flags&512&&Ud(e)}catch(h){St(e,e.return,h)}}if(e===n){he=null;break}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function Vm(n){for(;he!==null;){var e=he;if(e===n){he=null;break}var t=e.sibling;if(t!==null){t.return=e.return,he=t;break}he=e.return}}function Gm(n){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{pc(4,e)}catch(l){St(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Ud(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Ud(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===n){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var sE=Math.ceil,Bu=er.ReactCurrentDispatcher,Zh=er.ReactCurrentOwner,ri=er.ReactCurrentBatchConfig,Ze=0,Bt=null,Lt=null,Xt=0,Ln=0,ao=Br(0),Ut=0,ja=null,xs=0,mc=0,Qh=0,Ea=null,_n=null,Jh=0,Po=1/0,zi=null,Hu=!1,Od=null,Tr=null,Cl=!1,hr=null,Vu=0,Ta=0,Fd=null,hu=-1,pu=0;function fn(){return Ze&6?Ct():hu!==-1?hu:hu=Ct()}function wr(n){return n.mode&1?Ze&2&&Xt!==0?Xt&-Xt:VM.transition!==null?(pu===0&&(pu=P0()),pu):(n=tt,n!==0||(n=window.event,n=n===void 0?16:F0(n.type)),n):1}function vi(n,e,t,i){if(50<Ta)throw Ta=0,Fd=null,Error(ne(185));il(n,t,i),(!(Ze&2)||n!==Bt)&&(n===Bt&&(!(Ze&2)&&(mc|=t),Ut===4&&fr(n,Xt)),yn(n,i),t===1&&Ze===0&&!(e.mode&1)&&(Po=Ct()+500,fc&&Hr()))}function yn(n,e){var t=n.callbackNode;VS(n,e);var i=wu(n,n===Bt?Xt:0);if(i===0)t!==null&&Qp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Qp(t),e===1)n.tag===0?HM(Wm.bind(null,n)):nv(Wm.bind(null,n)),FM(function(){!(Ze&6)&&Hr()}),t=null;else{switch(L0(i)){case 1:t=wh;break;case 4:t=R0;break;case 16:t=Tu;break;case 536870912:t=b0;break;default:t=Tu}t=ex(t,Yv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Yv(n,e){if(hu=-1,pu=0,Ze&6)throw Error(ne(327));var t=n.callbackNode;if(vo()&&n.callbackNode!==t)return null;var i=wu(n,n===Bt?Xt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Gu(n,i);else{e=i;var r=Ze;Ze|=2;var s=$v();(Bt!==n||Xt!==e)&&(zi=null,Po=Ct()+500,as(n,e));do try{lE();break}catch(a){qv(n,a)}while(!0);kh(),Bu.current=s,Ze=r,Lt!==null?e=0:(Bt=null,Xt=0,e=Ut)}if(e!==0){if(e===2&&(r=cd(n),r!==0&&(i=r,e=kd(n,r))),e===1)throw t=ja,as(n,0),fr(n,i),yn(n,Ct()),t;if(e===6)fr(n,i);else{if(r=n.current.alternate,!(i&30)&&!oE(r)&&(e=Gu(n,i),e===2&&(s=cd(n),s!==0&&(i=s,e=kd(n,s))),e===1))throw t=ja,as(n,0),fr(n,i),yn(n,Ct()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Qr(n,_n,zi);break;case 3:if(fr(n,i),(i&130023424)===i&&(e=Jh+500-Ct(),10<e)){if(wu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){fn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=vd(Qr.bind(null,n,_n,zi),e);break}Qr(n,_n,zi);break;case 4:if(fr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-gi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sE(i/1960))-i,10<i){n.timeoutHandle=vd(Qr.bind(null,n,_n,zi),i);break}Qr(n,_n,zi);break;case 5:Qr(n,_n,zi);break;default:throw Error(ne(329))}}}return yn(n,Ct()),n.callbackNode===t?Yv.bind(null,n):null}function kd(n,e){var t=Ea;return n.current.memoizedState.isDehydrated&&(as(n,e).flags|=256),n=Gu(n,e),n!==2&&(e=_n,_n=t,e!==null&&zd(e)),n}function zd(n){_n===null?_n=n:_n.push.apply(_n,n)}function oE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(n,e){for(e&=~Qh,e&=~mc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-gi(e),i=1<<t;n[t]=-1,e&=~i}}function Wm(n){if(Ze&6)throw Error(ne(327));vo();var e=wu(n,0);if(!(e&1))return yn(n,Ct()),null;var t=Gu(n,e);if(n.tag!==0&&t===2){var i=cd(n);i!==0&&(e=i,t=kd(n,i))}if(t===1)throw t=ja,as(n,0),fr(n,e),yn(n,Ct()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qr(n,_n,zi),yn(n,Ct()),null}function ep(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(Po=Ct()+500,fc&&Hr())}}function ys(n){hr!==null&&hr.tag===0&&!(Ze&6)&&vo();var e=Ze;Ze|=1;var t=ri.transition,i=tt;try{if(ri.transition=null,tt=1,n)return n()}finally{tt=i,ri.transition=t,Ze=e,!(Ze&6)&&Hr()}}function tp(){Ln=ao.current,ut(ao)}function as(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,OM(t)),Lt!==null)for(t=Lt.return;t!==null;){var i=t;switch(Ih(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pu();break;case 3:Ro(),ut(vn),ut(rn),Wh();break;case 5:Gh(i);break;case 4:Ro();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:zh(i.type._context);break;case 22:case 23:tp()}t=t.return}if(Bt=n,Lt=n=Ar(n.current,null),Xt=Ln=e,Ut=0,ja=null,Qh=mc=xs=0,_n=Ea=null,rs!==null){for(e=0;e<rs.length;e++)if(t=rs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}rs=null}return n}function qv(n,e){do{var t=Lt;try{if(kh(),cu.current=zu,ku){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ku=!1}if(vs=0,kt=Dt=gt=null,Sa=!1,Ga=0,Zh.current=null,t===null||t.return===null){Ut=1,ja=e,Lt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Lm(o);if(p!==null){p.flags&=-257,Dm(p,o,a,s,e),p.mode&1&&Pm(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){Pm(s,u,e),np();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var m=Lm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Dm(m,o,a,s,e),Oh(bo(l,a));break e}}s=l=bo(l,a),Ut!==4&&(Ut=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Lv(s,l,e);Tm(s,f);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Tr===null||!Tr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Dv(s,a,e);Tm(s,y);break e}}s=s.return}while(s!==null)}Zv(t)}catch(M){e=M,Lt===t&&t!==null&&(Lt=t=t.return);continue}break}while(!0)}function $v(){var n=Bu.current;return Bu.current=zu,n===null?zu:n}function np(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Bt===null||!(xs&268435455)&&!(mc&268435455)||fr(Bt,Xt)}function Gu(n,e){var t=Ze;Ze|=2;var i=$v();(Bt!==n||Xt!==e)&&(zi=null,as(n,e));do try{aE();break}catch(r){qv(n,r)}while(!0);if(kh(),Ze=t,Bu.current=i,Lt!==null)throw Error(ne(261));return Bt=null,Xt=0,Ut}function aE(){for(;Lt!==null;)Kv(Lt)}function lE(){for(;Lt!==null&&!US();)Kv(Lt)}function Kv(n){var e=Jv(n.alternate,n,Ln);n.memoizedProps=n.pendingProps,e===null?Zv(n):Lt=e,Zh.current=null}function Zv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=tE(t,e),t!==null){t.flags&=32767,Lt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ut=6,Lt=null;return}}else if(t=eE(t,e,Ln),t!==null){Lt=t;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=n}while(e!==null);Ut===0&&(Ut=5)}function Qr(n,e,t){var i=tt,r=ri.transition;try{ri.transition=null,tt=1,uE(n,e,t,i)}finally{ri.transition=r,tt=i}return null}function uE(n,e,t,i){do vo();while(hr!==null);if(Ze&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(GS(n,s),n===Bt&&(Lt=Bt=null,Xt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Cl||(Cl=!0,ex(Tu,function(){return vo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ri.transition,ri.transition=null;var o=tt;tt=1;var a=Ze;Ze|=4,Zh.current=null,iE(n,t),Xv(t,n),bM(_d),Au=!!md,_d=md=null,n.current=t,rE(t),NS(),Ze=a,tt=o,ri.transition=s}else n.current=t;if(Cl&&(Cl=!1,hr=n,Vu=r),s=n.pendingLanes,s===0&&(Tr=null),FS(t.stateNode),yn(n,Ct()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hu)throw Hu=!1,n=Od,Od=null,n;return Vu&1&&n.tag!==0&&vo(),s=n.pendingLanes,s&1?n===Fd?Ta++:(Ta=0,Fd=n):Ta=0,Hr(),null}function vo(){if(hr!==null){var n=L0(Vu),e=ri.transition,t=tt;try{if(ri.transition=null,tt=16>n?16:n,hr===null)var i=!1;else{if(n=hr,hr=null,Vu=0,Ze&6)throw Error(ne(331));var r=Ze;for(Ze|=4,he=n.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:Ma(8,c,s)}var d=c.child;if(d!==null)d.return=c,he=d;else for(;he!==null;){c=he;var h=c.sibling,p=c.return;if(Vv(c),c===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var v=n.current;for(he=v;he!==null;){o=he;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,he=_;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pc(9,a)}}catch(M){St(a,a.return,M)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(Ze=r,Hr(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(oc,n)}catch{}i=!0}return i}finally{tt=t,ri.transition=e}}return!1}function Xm(n,e,t){e=bo(t,e),e=Lv(n,e,1),n=Er(n,e,1),e=fn(),n!==null&&(il(n,1,e),yn(n,e))}function St(n,e,t){if(n.tag===3)Xm(n,n,t);else for(;e!==null;){if(e.tag===3){Xm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){n=bo(t,n),n=Dv(e,n,1),e=Er(e,n,1),n=fn(),e!==null&&(il(e,1,n),yn(e,n));break}}e=e.return}}function cE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=fn(),n.pingedLanes|=n.suspendedLanes&t,Bt===n&&(Xt&t)===t&&(Ut===4||Ut===3&&(Xt&130023424)===Xt&&500>Ct()-Jh?as(n,0):Qh|=t),yn(n,e)}function Qv(n,e){e===0&&(n.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var t=fn();n=$i(n,e),n!==null&&(il(n,e,t),yn(n,t))}function fE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Qv(n,t)}function dE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Qv(n,t)}var Jv;Jv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return gn=!1,JM(n,e,t);gn=!!(n.flags&131072)}else gn=!1,ct&&e.flags&1048576&&iv(e,Uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;du(n,e),n=e.pendingProps;var r=wo(e,rn.current);go(e,t),r=jh(null,e,i,n,r,t);var s=Yh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,Lu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hh(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,wd(e,i,n,t),e=Rd(null,e,i,!0,s,t)):(e.tag=0,ct&&s&&Nh(e),an(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(du(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pE(i),n=fi(i,n),r){case 0:e=Cd(null,e,i,n,t);break e;case 1:e=Im(null,e,i,n,t);break e;case 11:e=Um(null,e,i,n,t);break e;case 14:e=Nm(null,e,i,fi(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Cd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Im(n,e,i,r,t);case 3:e:{if(Ov(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,uv(n,e),Ou(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bo(Error(ne(423)),e),e=Om(n,e,i,t,r);break e}else if(i!==r){r=bo(Error(ne(424)),e),e=Om(n,e,i,t,r);break e}else for(Nn=Mr(e.stateNode.containerInfo.firstChild),Fn=e,ct=!0,hi=null,t=av(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ao(),i===r){e=Ki(n,e,t);break e}an(n,e,i,t)}e=e.child}return e;case 5:return cv(e),n===null&&Md(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,gd(i,r)?o=null:s!==null&&gd(i,s)&&(e.flags|=32),Iv(n,e),an(n,e,o,t),e.child;case 6:return n===null&&Md(e),null;case 13:return Fv(n,e,t);case 4:return Vh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Co(e,null,i,t):an(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Um(n,e,i,r,t);case 7:return an(n,e,e.pendingProps,t),e.child;case 8:return an(n,e,e.pendingProps.children,t),e.child;case 12:return an(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Nu,i._currentValue),i._currentValue=o,s!==null)if(xi(s.value,o)){if(s.children===r.children&&!vn.current){e=Ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ed(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ed(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,go(e,t),r=si(r),i=i(r),e.flags|=1,an(n,e,i,t),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),Nm(n,e,i,r,t);case 15:return Uv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),du(n,e),e.tag=1,xn(i)?(n=!0,Lu(e)):n=!1,go(e,t),Pv(e,i,r),wd(e,i,r,t),Rd(null,e,i,!0,n,t);case 19:return kv(n,e,t);case 22:return Nv(n,e,t)}throw Error(ne(156,e.tag))};function ex(n,e){return C0(n,e)}function hE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,e,t,i){return new hE(n,e,t,i)}function ip(n){return n=n.prototype,!(!n||!n.isReactComponent)}function pE(n){if(typeof n=="function")return ip(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Mh)return 11;if(n===Eh)return 14}return 2}function Ar(n,e){var t=n.alternate;return t===null?(t=ei(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function mu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ip(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Zs:return ls(t.children,r,s,e);case Sh:o=8,r|=8;break;case $f:return n=ei(12,t,e,r|2),n.elementType=$f,n.lanes=s,n;case Kf:return n=ei(13,t,e,r),n.elementType=Kf,n.lanes=s,n;case Zf:return n=ei(19,t,e,r),n.elementType=Zf,n.lanes=s,n;case c0:return _c(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case l0:o=10;break e;case u0:o=9;break e;case Mh:o=11;break e;case Eh:o=14;break e;case ar:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=ei(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ls(n,e,t,i){return n=ei(7,n,i,e),n.lanes=t,n}function _c(n,e,t,i){return n=ei(22,n,i,e),n.elementType=c0,n.lanes=t,n.stateNode={isHidden:!1},n}function of(n,e,t){return n=ei(6,n,null,e),n.lanes=t,n}function af(n,e,t){return e=ei(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function mE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rp(n,e,t,i,r,s,o,a,l){return n=new mE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(s),n}function _E(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function tx(n){if(!n)return Ur;n=n._reactInternals;e:{if(Ts(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(xn(t))return tv(n,t,e)}return e}function nx(n,e,t,i,r,s,o,a,l){return n=rp(t,i,!0,n,r,s,o,a,l),n.context=tx(null),t=n.current,i=fn(),r=wr(t),s=ji(i,r),s.callback=e??null,Er(t,s,r),n.current.lanes=r,il(n,r,i),yn(n,i),n}function gc(n,e,t,i){var r=e.current,s=fn(),o=wr(r);return t=tx(t),e.context===null?e.context=t:e.pendingContext=t,e=ji(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Er(r,e,o),n!==null&&(vi(n,r,o,s),uu(n,r,o)),o}function Wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function sp(n,e){jm(n,e),(n=n.alternate)&&jm(n,e)}function gE(){return null}var ix=typeof reportError=="function"?reportError:function(n){console.error(n)};function op(n){this._internalRoot=n}vc.prototype.render=op.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));gc(n,e,null,null)};vc.prototype.unmount=op.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ys(function(){gc(null,n,null,null)}),e[qi]=null}};function vc(n){this._internalRoot=n}vc.prototype.unstable_scheduleHydration=function(n){if(n){var e=N0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cr.length&&e!==0&&e<cr[t].priority;t++);cr.splice(t,0,n),t===0&&O0(n)}};function ap(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function vE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Wu(o);s.call(u)}}var o=nx(e,i,n,0,null,!1,!1,"",Ym);return n._reactRootContainer=o,n[qi]=o.current,ka(n.nodeType===8?n.parentNode:n),ys(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Wu(l);a.call(u)}}var l=rp(n,0,!1,null,null,!1,!1,"",Ym);return n._reactRootContainer=l,n[qi]=l.current,ka(n.nodeType===8?n.parentNode:n),ys(function(){gc(e,l,t,i)}),l}function yc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Wu(o);a.call(l)}}gc(e,o,n,r)}else o=vE(t,e,n,r,i);return Wu(o)}D0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=da(e.pendingLanes);t!==0&&(Ah(e,t|1),yn(e,Ct()),!(Ze&6)&&(Po=Ct()+500,Hr()))}break;case 13:ys(function(){var i=$i(n,1);if(i!==null){var r=fn();vi(i,n,1,r)}}),sp(n,1)}};Ch=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=fn();vi(e,n,134217728,t)}sp(n,134217728)}};U0=function(n){if(n.tag===13){var e=wr(n),t=$i(n,e);if(t!==null){var i=fn();vi(t,n,e,i)}sp(n,e)}};N0=function(){return tt};I0=function(n,e){var t=tt;try{return tt=n,e()}finally{tt=t}};ad=function(n,e,t){switch(e){case"input":if(ed(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=cc(i);if(!r)throw Error(ne(90));d0(i),ed(i,r)}}}break;case"textarea":p0(n,t);break;case"select":e=t.value,e!=null&&ho(n,!!t.multiple,e,!1)}};S0=ep;M0=ys;var xE={usingClientEntryPoint:!1,Events:[sl,to,cc,x0,y0,ep]},ea={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yE={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=w0(n),n===null?null:n.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||gE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{oc=Rl.inject(yE),bi=Rl}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE;Wn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error(ne(200));return _E(n,e,null,t)};Wn.createRoot=function(n,e){if(!ap(n))throw Error(ne(299));var t=!1,i="",r=ix;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rp(n,1,!1,null,null,t,!1,i,r),n[qi]=e.current,ka(n.nodeType===8?n.parentNode:n),new op(e)};Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=w0(e),n=n===null?null:n.stateNode,n};Wn.flushSync=function(n){return ys(n)};Wn.hydrate=function(n,e,t){if(!xc(e))throw Error(ne(200));return yc(null,n,e,!0,t)};Wn.hydrateRoot=function(n,e,t){if(!ap(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ix;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=nx(e,null,n,1,t??null,r,!1,s,o),n[qi]=e.current,ka(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new vc(e)};Wn.render=function(n,e,t){if(!xc(e))throw Error(ne(200));return yc(null,n,e,!1,t)};Wn.unmountComponentAtNode=function(n){if(!xc(n))throw Error(ne(40));return n._reactRootContainer?(ys(function(){yc(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1};Wn.unstable_batchedUpdates=ep;Wn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!xc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return yc(n,e,t,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(n){console.error(n)}}rx(),r0.exports=Wn;var SE=r0.exports,sx,qm=SE;sx=qm.createRoot,qm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="160",Ps={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ME=0,$m=1,EE=2,ox=1,TE=2,ki=3,Nr=0,Sn=1,Ai=2,Cr=0,xo=1,Xu=2,Km=3,Zm=4,wE=5,ts=100,AE=101,CE=102,Qm=103,Jm=104,RE=200,bE=201,PE=202,LE=203,Bd=204,Hd=205,DE=206,UE=207,NE=208,IE=209,OE=210,FE=211,kE=212,zE=213,BE=214,HE=0,VE=1,GE=2,ju=3,WE=4,XE=5,jE=6,YE=7,ax=0,qE=1,$E=2,Rr=0,KE=1,ZE=2,QE=3,lx=4,JE=5,eT=6,ux=300,Lo=301,Do=302,Vd=303,Gd=304,Sc=306,Wd=1e3,mi=1001,Xd=1002,ln=1003,e_=1004,lf=1005,Zn=1006,tT=1007,Ya=1008,br=1009,nT=1010,iT=1011,up=1012,cx=1013,pr=1014,mr=1015,qa=1016,fx=1017,dx=1018,us=1020,rT=1021,_i=1023,sT=1024,oT=1025,cs=1026,Uo=1027,aT=1028,hx=1029,lT=1030,px=1031,mx=1033,uf=33776,cf=33777,ff=33778,df=33779,t_=35840,n_=35841,i_=35842,r_=35843,_x=36196,s_=37492,o_=37496,a_=37808,l_=37809,u_=37810,c_=37811,f_=37812,d_=37813,h_=37814,p_=37815,m_=37816,__=37817,g_=37818,v_=37819,x_=37820,y_=37821,hf=36492,S_=36494,M_=36495,uT=36283,E_=36284,T_=36285,w_=36286,gx=3e3,fs=3001,cT=3200,fT=3201,dT=0,hT=1,Jn="",zt="srgb",Zi="srgb-linear",cp="display-p3",Mc="display-p3-linear",Yu="linear",lt="srgb",qu="rec709",$u="p3",Ds=7680,A_=519,pT=512,mT=513,_T=514,vx=515,gT=516,vT=517,xT=518,yT=519,C_=35044,R_="300 es",jd=1035,Xi=2e3,Ku=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=Math.PI/180,Yd=180/Math.PI;function al(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function ST(n,e){return(n%e+e)%e}function pf(n,e,t){return(1-t)*n+t*e}function b_(n){return(n&n-1)===0&&n!==0}function qd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ta(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const MT={DEG2RAD:_u};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],x=i[8],g=r[0],m=r[3],f=r[6],v=r[1],_=r[4],y=r[7],M=r[2],T=r[5],E=r[8];return s[0]=o*g+a*v+l*M,s[3]=o*m+a*_+l*T,s[6]=o*f+a*y+l*E,s[1]=u*g+c*v+d*M,s[4]=u*m+c*_+d*T,s[7]=u*f+c*y+d*E,s[2]=h*g+p*v+x*M,s[5]=h*m+p*_+x*T,s[8]=h*f+p*y+x*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mf.makeScale(e,t)),this}rotate(e){return this.premultiply(mf.makeRotation(-e)),this}translate(e,t){return this.premultiply(mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mf=new We;function xx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ET(){const n=Zu("canvas");return n.style.display="block",n}const P_={};function wa(n){n in P_||(P_[n]=!0,console.warn(n))}const L_=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),D_=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bl={[Zi]:{transfer:Yu,primaries:qu,toReference:n=>n,fromReference:n=>n},[zt]:{transfer:lt,primaries:qu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Mc]:{transfer:Yu,primaries:$u,toReference:n=>n.applyMatrix3(D_),fromReference:n=>n.applyMatrix3(L_)},[cp]:{transfer:lt,primaries:$u,toReference:n=>n.convertSRGBToLinear().applyMatrix3(D_),fromReference:n=>n.applyMatrix3(L_).convertLinearToSRGB()}},TT=new Set([Zi,Mc]),nt={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!TT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=bl[e].toReference,r=bl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return bl[n].primaries},getTransfer:function(n){return n===Jn?Yu:bl[n].transfer}};function yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _f(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Us;class yx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Zu("canvas")),Us.width=e.width,Us.height=e.height;const i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yo(t[i]/255)*255):t[i]=yo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wT=0;class Sx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=al(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gf(r[o].image)):s.push(gf(r[o]))}else s=gf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function gf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AT=0;class kn extends ws{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,i=mi,r=mi,s=Zn,o=Ya,a=_i,l=br,u=kn.DEFAULT_ANISOTROPY,c=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=al(),this.name="",this.source=new Sx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===fs?zt:Jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?fs:gx}set encoding(e){wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?zt:Jn}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=ux;kn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,y=(p+1)/2,M=(f+1)/2,T=(c+h)/4,E=(d+g)/4,b=(x+m)/4;return _>y&&_>M?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=E/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=b/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=E/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-g)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CT extends ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fs?zt:Jn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends CT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mx extends kn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class RT extends kn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==h||u!==p||c!==x){let m=1-a;const f=l*h+u*p+c*x+d*g,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const M=Math.sqrt(_),T=Math.atan2(M,f*v);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,d=d*m+g*y,m===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*p-u*h,e[t+1]=l*x+c*h+u*d-a*p,e[t+2]=u*x+c*p+a*h-l*d,e[t+3]=c*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"YXZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"ZXY":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"ZYX":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"YZX":this._x=h*c*d+u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d-h*p*x;break;case"XZY":this._x=h*c*d-u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(U_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(U_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vf.copy(this).projectOnVector(e),this.sub(vf)}reflect(e){return this.sub(vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vf=new N,U_=new Ms;class As{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Ll.subVectors(this.max,na),Ns.subVectors(e.a,na),Is.subVectors(e.b,na),Os.subVectors(e.c,na),nr.subVectors(Is,Ns),ir.subVectors(Os,Is),Xr.subVectors(Ns,Os);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Xr.z,Xr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Xr.z,0,-Xr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Xr.y,Xr.x,0];return!xf(t,Ns,Is,Os,Ll)||(t=[1,0,0,0,1,0,0,0,1],!xf(t,Ns,Is,Os,Ll))?!1:(Dl.crossVectors(nr,ir),t=[Dl.x,Dl.y,Dl.z],xf(t,Ns,Is,Os,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new N,new N,new N,new N,new N,new N,new N,new N],li=new N,Pl=new As,Ns=new N,Is=new N,Os=new N,nr=new N,ir=new N,Xr=new N,na=new N,Ll=new N,Dl=new N,jr=new N;function xf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){jr.fromArray(n,s);const a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),u=t.dot(jr),c=i.dot(jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const bT=new As,ia=new N,yf=new N;class Cs{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(yf)),this.expandByPoint(ia.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new N,Sf=new N,Ul=new N,rr=new N,Mf=new N,Nl=new N,Ef=new N;class Ec{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sf.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Sf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ul),a=rr.dot(this.direction),l=-rr.dot(Ul),u=rr.lengthSq(),c=Math.abs(1-o*o);let d,h,p,x;if(c>0)if(d=o*l-a,h=o*a-l,x=s*c,d>=0)if(h>=-x)if(h<=x){const g=1/c;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sf).addScaledVector(Ul,h),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){Mf.subVectors(t,e),Nl.subVectors(i,e),Ef.crossVectors(Mf,Nl);let o=this.direction.dot(Ef),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(Nl.crossVectors(rr,Nl));if(l<0)return null;const u=a*this.direction.dot(Mf.cross(rr));if(u<0||l+u>o)return null;const c=-a*rr.dot(Ef);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fs.setFromMatrixColumn(e,0).length(),s=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,x=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+x*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,x=u*c,g=u*d;t[0]=h+g*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,x=u*c,g=u*d;t[0]=h-g*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,x=a*c,g=a*d;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+g,t[1]=l*d,t[5]=g*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=g-h*d,t[8]=x*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+x,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+g,t[5]=o*c,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*c,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PT,e,LT)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),sr.crossVectors(i,bn),sr.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),sr.crossVectors(i,bn)),sr.normalize(),Il.crossVectors(bn,sr),r[0]=sr.x,r[4]=Il.x,r[8]=bn.x,r[1]=sr.y,r[5]=Il.y,r[9]=bn.y,r[2]=sr.z,r[6]=Il.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],M=i[15],T=r[0],E=r[4],b=r[8],S=r[12],w=r[1],I=r[5],H=r[9],K=r[13],D=r[2],O=r[6],z=r[10],q=r[14],U=r[3],F=r[7],G=r[11],$=r[15];return s[0]=o*T+a*w+l*D+u*U,s[4]=o*E+a*I+l*O+u*F,s[8]=o*b+a*H+l*z+u*G,s[12]=o*S+a*K+l*q+u*$,s[1]=c*T+d*w+h*D+p*U,s[5]=c*E+d*I+h*O+p*F,s[9]=c*b+d*H+h*z+p*G,s[13]=c*S+d*K+h*q+p*$,s[2]=x*T+g*w+m*D+f*U,s[6]=x*E+g*I+m*O+f*F,s[10]=x*b+g*H+m*z+f*G,s[14]=x*S+g*K+m*q+f*$,s[3]=v*T+_*w+y*D+M*U,s[7]=v*E+_*I+y*O+M*F,s[11]=v*b+_*H+y*z+M*G,s[15]=v*S+_*K+y*q+M*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],v=d*m*u-g*h*u+g*l*p-a*m*p-d*l*f+a*h*f,_=x*h*u-c*m*u-x*l*p+o*m*p+c*l*f-o*h*f,y=c*g*u-x*d*u+x*a*p-o*g*p-c*a*f+o*d*f,M=x*d*l-c*g*l-x*a*h+o*g*h+c*a*m-o*d*m,T=t*v+i*_+r*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*f-i*h*f)*E,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*f+i*l*f)*E,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*E,e[4]=_*E,e[5]=(c*m*s-x*h*s+x*r*p-t*m*p-c*r*f+t*h*f)*E,e[6]=(x*l*s-o*m*s-x*r*u+t*m*u+o*r*f-t*l*f)*E,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(x*d*s-c*g*s-x*i*p+t*g*p+c*i*f-t*d*f)*E,e[10]=(o*g*s-x*a*s+x*i*u-t*g*u-o*i*f+t*a*f)*E,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*E,e[12]=M*E,e[13]=(c*g*r-x*d*r+x*i*h-t*g*h-c*i*m+t*d*m)*E,e[14]=(x*a*r-o*g*r-x*i*l+t*g*l+o*i*m-t*a*m)*E,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,x=s*d,g=o*c,m=o*d,f=a*d,v=l*u,_=l*c,y=l*d,M=i.x,T=i.y,E=i.z;return r[0]=(1-(g+f))*M,r[1]=(p+y)*M,r[2]=(x-_)*M,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(h+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(x+_)*E,r[9]=(m-v)*E,r[10]=(1-(h+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fs.set(r[0],r[1],r[2]).length();const o=Fs.set(r[4],r[5],r[6]).length(),a=Fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ui.copy(this);const u=1/s,c=1/o,d=1/a;return ui.elements[0]*=u,ui.elements[1]*=u,ui.elements[2]*=u,ui.elements[4]*=c,ui.elements[5]*=c,ui.elements[6]*=c,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,t.setFromRotationMatrix(ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===Xi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ku)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xi){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,g;if(a===Xi)x=(o+s)*d,g=-2*d;else if(a===Ku)x=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fs=new N,ui=new Et,PT=new N(0,0,0),LT=new N(1,1,1),sr=new N,Il=new N,bn=new N,N_=new Et,I_=new Ms;class Tc{constructor(e=0,t=0,i=0,r=Tc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return I_.setFromEuler(this),this.setFromQuaternion(I_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tc.DEFAULT_ORDER="XYZ";class Ex{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DT=0;const O_=new N,ks=new Ms,Ii=new Et,Ol=new N,ra=new N,UT=new N,NT=new Ms,F_=new N(1,0,0),k_=new N(0,1,0),z_=new N(0,0,1),IT={type:"added"},OT={type:"removed"};class dn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new N,t=new Tc,i=new Ms,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new We}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(k_,e)}rotateZ(e){return this.rotateOnAxis(z_,e)}translateOnAxis(e,t){return O_.copy(e).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(k_,e)}translateZ(e){return this.translateOnAxis(z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ol.copy(e):Ol.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ra,Ol,this.up):Ii.lookAt(Ol,ra,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),ks.setFromRotationMatrix(Ii),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(OT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,UT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,NT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new N(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new N,Oi=new N,Tf=new N,Fi=new N,zs=new N,Bs=new N,B_=new N,wf=new N,Af=new N,Cf=new N;let Fl=!1;class pi{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ci.subVectors(e,t),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ci.subVectors(r,t),Oi.subVectors(i,t),Tf.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(Oi),l=ci.dot(Tf),u=Oi.dot(Oi),c=Oi.dot(Tf),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Fl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(e,t,i,r){return ci.subVectors(i,t),Oi.subVectors(e,t),ci.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ci.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Fl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fl=!0),pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;zs.subVectors(r,i),Bs.subVectors(s,i),wf.subVectors(e,i);const l=zs.dot(wf),u=Bs.dot(wf);if(l<=0&&u<=0)return t.copy(i);Af.subVectors(e,r);const c=zs.dot(Af),d=Bs.dot(Af);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(zs,o);Cf.subVectors(e,s);const p=zs.dot(Cf),x=Bs.dot(Cf);if(x>=0&&p<=x)return t.copy(s);const g=p*u-l*x;if(g<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Bs,a);const m=c*x-p*d;if(m<=0&&d-c>=0&&p-x>=0)return B_.subVectors(s,r),a=(d-c)/(d-c+(p-x)),t.copy(r).addScaledVector(B_,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(zs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Rf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=ST(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Rf(o,s,e+1/3),this.g=Rf(o,s,e),this.b=Rf(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=Tx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=_f(e.r),this.g=_f(e.g),this.b=_f(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return nt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(un(Qt.r*255,0,255))*65536+Math.round(un(Qt.g*255,0,255))*256+Math.round(un(Qt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=zt){nt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(kl);const i=pf(or.h,kl.h,t),r=pf(or.s,kl.s,t),s=pf(or.l,kl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new $e;$e.NAMES=Tx;let FT=0;class Wo extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=al(),this.name="",this.type="Material",this.blending=xo,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Hd,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ju,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Hd&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ju&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wc extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,zl=new Ie;class zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=C_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==C_&&(e.usage=this.usage),e}}class wx extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ax extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kT=0;const Yn=new Et,bf=new dn,Hs=new N,Pn=new As,sa=new As,Ft=new N;class Cn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?Ax:wx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Pn.min,sa.min),Pn.expandByPoint(Ft),Ft.addVectors(Pn.max,sa.max),Pn.expandByPoint(Ft)):(Pn.expandByPoint(sa.min),Pn.expandByPoint(sa.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ft.fromBufferAttribute(a,u),l&&(Hs.fromBufferAttribute(e,u),Ft.add(Hs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new N,c[w]=new N;const d=new N,h=new N,p=new N,x=new Ie,g=new Ie,m=new Ie,f=new N,v=new N;function _(w,I,H){d.fromArray(r,w*3),h.fromArray(r,I*3),p.fromArray(r,H*3),x.fromArray(o,w*2),g.fromArray(o,I*2),m.fromArray(o,H*2),h.sub(d),p.sub(d),g.sub(x),m.sub(x);const K=1/(g.x*m.y-m.x*g.y);isFinite(K)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(K),v.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(K),u[w].add(f),u[I].add(f),u[H].add(f),c[w].add(v),c[I].add(v),c[H].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,I=y.length;w<I;++w){const H=y[w],K=H.start,D=H.count;for(let O=K,z=K+D;O<z;O+=3)_(i[O+0],i[O+1],i[O+2])}const M=new N,T=new N,E=new N,b=new N;function S(w){E.fromArray(s,w*3),b.copy(E);const I=u[w];M.copy(I),M.sub(E.multiplyScalar(E.dot(I))).normalize(),T.crossVectors(b,I);const K=T.dot(c[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=K}for(let w=0,I=y.length;w<I;++w){const H=y[w],K=H.start,D=H.count;for(let O=K,z=K+D;O<z;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,d=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let f=0;f<c;f++)h[x++]=u[p++]}return new zn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new Et,Yr=new Ec,Bl=new Cs,V_=new N,Vs=new N,Gs=new N,Ws=new N,Pf=new N,Hl=new N,Vl=new Ie,Gl=new Ie,Wl=new Ie,G_=new N,W_=new N,X_=new N,Xl=new N,jl=new N;class ti extends dn{constructor(e=new Cn,t=new wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Pf.fromBufferAttribute(d,e),o?Hl.addScaledVector(Pf,c):Hl.addScaledVector(Pf.sub(t),c))}t.add(Hl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(Bl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Bl,V_)===null||Yr.origin.distanceToSquared(V_)>(e.far-e.near)**2))&&(H_.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(H_),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,M=_;y<M;y+=3){const T=a.getX(y),E=a.getX(y+1),b=a.getX(y+2);r=Yl(this,f,e,i,u,c,d,T,E,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Yl(this,o,e,i,u,c,d,v,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,M=_;y<M;y+=3){const T=y,E=y+1,b=y+2;r=Yl(this,f,e,i,u,c,d,T,E,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const v=m,_=m+1,y=m+2;r=Yl(this,o,e,i,u,c,d,v,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function zT(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Nr,a),l===null)return null;jl.copy(a),jl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(jl);return u<t.near||u>t.far?null:{distance:u,point:jl.clone(),object:n}}function Yl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Vs),n.getVertexPosition(l,Gs),n.getVertexPosition(u,Ws);const c=zT(n,e,t,i,Vs,Gs,Ws,Xl);if(c){r&&(Vl.fromBufferAttribute(r,a),Gl.fromBufferAttribute(r,l),Wl.fromBufferAttribute(r,u),c.uv=pi.getInterpolation(Xl,Vs,Gs,Ws,Vl,Gl,Wl,new Ie)),s&&(Vl.fromBufferAttribute(s,a),Gl.fromBufferAttribute(s,l),Wl.fromBufferAttribute(s,u),c.uv1=pi.getInterpolation(Xl,Vs,Gs,Ws,Vl,Gl,Wl,new Ie),c.uv2=c.uv1),o&&(G_.fromBufferAttribute(o,a),W_.fromBufferAttribute(o,l),X_.fromBufferAttribute(o,u),c.normal=pi.getInterpolation(Xl,Vs,Gs,Ws,G_,W_,X_,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new N,materialIndex:0};pi.getNormal(Vs,Gs,Ws,d.normal),c.face=d}return c}class ll extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(u,3)),this.setAttribute("normal",new tn(c,3)),this.setAttribute("uv",new tn(d,2));function x(g,m,f,v,_,y,M,T,E,b,S){const w=y/E,I=M/b,H=y/2,K=M/2,D=T/2,O=E+1,z=b+1;let q=0,U=0;const F=new N;for(let G=0;G<z;G++){const $=G*I-K;for(let J=0;J<O;J++){const j=J*w-H;F[g]=j*v,F[m]=$*_,F[f]=D,u.push(F.x,F.y,F.z),F[g]=0,F[m]=0,F[f]=T>0?1:-1,c.push(F.x,F.y,F.z),d.push(J/E),d.push(1-G/b),q+=1}}for(let G=0;G<b;G++)for(let $=0;$<E;$++){const J=h+$+O*G,j=h+$+O*(G+1),Z=h+($+1)+O*(G+1),ae=h+($+1)+O*G;l.push(J,j,ae),l.push(j,Z,ae),U+=6}a.addGroup(p,U,S),p+=U,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function No(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=No(n[t]);for(const r in i)e[r]=i[r]}return e}function BT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cx(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const HT={clone:No,merge:on};var VT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VT,this.fragmentShader=GT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=BT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rx extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qn extends Rx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_u*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,js=1;class WT extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Xs,js,e,t);r.layers=this.layers,this.add(r);const s=new Qn(Xs,js,e,t);s.layers=this.layers,this.add(s);const o=new Qn(Xs,js,e,t);o.layers=this.layers,this.add(o);const a=new Qn(Xs,js,e,t);a.layers=this.layers,this.add(a);const l=new Qn(Xs,js,e,t);l.layers=this.layers,this.add(l);const u=new Qn(Xs,js,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class bx extends kn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Lo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XT extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?zt:Jn),this.texture=new bx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ll(5,5,5),s=new Ir({name:"CubemapFromEquirect",uniforms:No(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Cr});s.uniforms.tEquirect.value=t;const o=new ti(r,s),a=t.minFilter;return t.minFilter===Ya&&(t.minFilter=Zn),new WT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Lf=new N,jT=new N,YT=new We;class ur{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Lf.subVectors(i,t).cross(jT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||YT.getNormalMatrix(e),r=this.coplanarPoint(Lf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Cs,ql=new N;class Px{constructor(e=new ur,t=new ur,i=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],f=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+x,y+v).normalize(),i[3].setComponents(l-o,h-c,m-x,y-v).normalize(),i[4].setComponents(l-a,h-d,m-g,y-_).normalize(),t===Xi)i[5].setComponents(l+a,h+d,m+g,y+_).normalize();else if(t===Ku)i[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ql.x=r.normal.x>0?e.max.x:e.min.x,ql.y=r.normal.y>0?e.max.y:e.min.y,ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,d,h),u.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,x=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&x.length===0&&n.bufferSubData(d,0,h),x.length!==0){for(let g=0,m=x.length;g<m;g++){const f=x[g];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class fp extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<c;f++){const v=f*h-o;for(let _=0;_<u;_++){const y=_*d-s;x.push(y,-v,0),g.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const _=v+u*f,y=v+u*(f+1),M=v+1+u*(f+1),T=v+1+u*f;p.push(_,y,T),p.push(y,M,T)}this.setIndex(p),this.setAttribute("position",new tn(x,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.width,e.height,e.widthSegments,e.heightSegments)}}var $T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,v1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",A1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,k1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ew=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ew=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$w=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_A=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:$T,alphahash_pars_fragment:KT,alphamap_fragment:ZT,alphamap_pars_fragment:QT,alphatest_fragment:JT,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:r1,begin_vertex:s1,beginnormal_vertex:o1,bsdfs:a1,iridescence_fragment:l1,bumpmap_pars_fragment:u1,clipping_planes_fragment:c1,clipping_planes_pars_fragment:f1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:h1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:_1,color_vertex:g1,common:v1,cube_uv_reflection_fragment:x1,defaultnormal_vertex:y1,displacementmap_pars_vertex:S1,displacementmap_vertex:M1,emissivemap_fragment:E1,emissivemap_pars_fragment:T1,colorspace_fragment:w1,colorspace_pars_fragment:A1,envmap_fragment:C1,envmap_common_pars_fragment:R1,envmap_pars_fragment:b1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:V1,envmap_vertex:L1,fog_vertex:D1,fog_pars_vertex:U1,fog_fragment:N1,fog_pars_fragment:I1,gradientmap_pars_fragment:O1,lightmap_fragment:F1,lightmap_pars_fragment:k1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:B1,lights_pars_begin:H1,lights_toon_fragment:G1,lights_toon_pars_fragment:W1,lights_phong_fragment:X1,lights_phong_pars_fragment:j1,lights_physical_fragment:Y1,lights_physical_pars_fragment:q1,lights_fragment_begin:$1,lights_fragment_maps:K1,lights_fragment_end:Z1,logdepthbuf_fragment:Q1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:ew,logdepthbuf_vertex:tw,map_fragment:nw,map_pars_fragment:iw,map_particle_fragment:rw,map_particle_pars_fragment:sw,metalnessmap_fragment:ow,metalnessmap_pars_fragment:aw,morphcolor_vertex:lw,morphnormal_vertex:uw,morphtarget_pars_vertex:cw,morphtarget_vertex:fw,normal_fragment_begin:dw,normal_fragment_maps:hw,normal_pars_fragment:pw,normal_pars_vertex:mw,normal_vertex:_w,normalmap_pars_fragment:gw,clearcoat_normal_fragment_begin:vw,clearcoat_normal_fragment_maps:xw,clearcoat_pars_fragment:yw,iridescence_pars_fragment:Sw,opaque_fragment:Mw,packing:Ew,premultiplied_alpha_fragment:Tw,project_vertex:ww,dithering_fragment:Aw,dithering_pars_fragment:Cw,roughnessmap_fragment:Rw,roughnessmap_pars_fragment:bw,shadowmap_pars_fragment:Pw,shadowmap_pars_vertex:Lw,shadowmap_vertex:Dw,shadowmask_pars_fragment:Uw,skinbase_vertex:Nw,skinning_pars_vertex:Iw,skinning_vertex:Ow,skinnormal_vertex:Fw,specularmap_fragment:kw,specularmap_pars_fragment:zw,tonemapping_fragment:Bw,tonemapping_pars_fragment:Hw,transmission_fragment:Vw,transmission_pars_fragment:Gw,uv_pars_fragment:Ww,uv_pars_vertex:Xw,uv_vertex:jw,worldpos_vertex:Yw,background_vert:qw,background_frag:$w,backgroundCube_vert:Kw,backgroundCube_frag:Zw,cube_vert:Qw,cube_frag:Jw,depth_vert:eA,depth_frag:tA,distanceRGBA_vert:nA,distanceRGBA_frag:iA,equirect_vert:rA,equirect_frag:sA,linedashed_vert:oA,linedashed_frag:aA,meshbasic_vert:lA,meshbasic_frag:uA,meshlambert_vert:cA,meshlambert_frag:fA,meshmatcap_vert:dA,meshmatcap_frag:hA,meshnormal_vert:pA,meshnormal_frag:mA,meshphong_vert:_A,meshphong_frag:gA,meshphysical_vert:vA,meshphysical_frag:xA,meshtoon_vert:yA,meshtoon_frag:SA,points_vert:MA,points_frag:EA,shadow_vert:TA,shadow_frag:wA,sprite_vert:AA,sprite_frag:CA},le={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ti={basic:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:on([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:on([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:on([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:on([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:on([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:on([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:on([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:on([le.lights,le.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ti.physical={uniforms:on([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const $l={r:0,b:0,g:0};function RA(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function x(m,f){let v=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Sc)?(c===void 0&&(c=new ti(new ll(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:No(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,(d!==_||h!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new ti(new fp(2,2),new Ir({name:"BackgroundMaterial",uniforms:No(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB($l,Cx(n)),i.buffers.color.setClear($l.r,$l.g,$l.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function bA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(D,O,z,q,U){let F=!1;if(o){const G=g(q,z,O);u!==G&&(u=G,p(u.object)),F=f(D,q,z,U),F&&v(D,q,z,U)}else{const G=O.wireframe===!0;(u.geometry!==q.id||u.program!==z.id||u.wireframe!==G)&&(u.geometry=q.id,u.program=z.id,u.wireframe=G,F=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,b(D,O,z,q),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function x(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,O,z){const q=z.wireframe===!0;let U=a[D.id];U===void 0&&(U={},a[D.id]=U);let F=U[O.id];F===void 0&&(F={},U[O.id]=F);let G=F[q];return G===void 0&&(G=m(h()),F[q]=G),G}function m(D){const O=[],z=[],q=[];for(let U=0;U<r;U++)O[U]=0,z[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:q,object:D,attributes:{},index:null}}function f(D,O,z,q){const U=u.attributes,F=O.attributes;let G=0;const $=z.getAttributes();for(const J in $)if($[J].location>=0){const Z=U[J];let ae=F[J];if(ae===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;G++}return u.attributesNum!==G||u.index!==q}function v(D,O,z,q){const U={},F=O.attributes;let G=0;const $=z.getAttributes();for(const J in $)if($[J].location>=0){let Z=F[J];Z===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),U[J]=ae,G++}u.attributes=U,u.attributesNum=G,u.index=q}function _(){const D=u.newAttributes;for(let O=0,z=D.length;O<z;O++)D[O]=0}function y(D){M(D,0)}function M(D,O){const z=u.newAttributes,q=u.enabledAttributes,U=u.attributeDivisors;z[D]=1,q[D]===0&&(n.enableVertexAttribArray(D),q[D]=1),U[D]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),U[D]=O)}function T(){const D=u.newAttributes,O=u.enabledAttributes;for(let z=0,q=O.length;z<q;z++)O[z]!==D[z]&&(n.disableVertexAttribArray(z),O[z]=0)}function E(D,O,z,q,U,F,G){G===!0?n.vertexAttribIPointer(D,O,z,U,F):n.vertexAttribPointer(D,O,z,q,U,F)}function b(D,O,z,q){if(i.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const U=q.attributes,F=z.getAttributes(),G=O.defaultAttributeValues;for(const $ in F){const J=F[$];if(J.location>=0){let j=U[$];if(j===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const Z=j.normalized,ae=j.itemSize,_e=t.get(j);if(_e===void 0)continue;const ge=_e.buffer,De=_e.type,Ue=_e.bytesPerElement,Ae=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||j.gpuType===cx);if(j.isInterleavedBufferAttribute){const je=j.data,V=je.stride,Vt=j.offset;if(je.isInstancedInterleavedBuffer){for(let Ee=0;Ee<J.locationSize;Ee++)M(J.location+Ee,je.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Ee=0;Ee<J.locationSize;Ee++)y(J.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ee=0;Ee<J.locationSize;Ee++)E(J.location+Ee,ae/J.locationSize,De,Z,V*Ue,(Vt+ae/J.locationSize*Ee)*Ue,Ae)}else{if(j.isInstancedBufferAttribute){for(let je=0;je<J.locationSize;je++)M(J.location+je,j.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let je=0;je<J.locationSize;je++)y(J.location+je);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let je=0;je<J.locationSize;je++)E(J.location+je,ae/J.locationSize,De,Z,ae*Ue,ae/J.locationSize*je*Ue,Ae)}}else if(G!==void 0){const Z=G[$];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(J.location,Z);break;case 3:n.vertexAttrib3fv(J.location,Z);break;case 4:n.vertexAttrib4fv(J.location,Z);break;default:n.vertexAttrib1fv(J.location,Z)}}}}T()}function S(){H();for(const D in a){const O=a[D];for(const z in O){const q=O[z];for(const U in q)x(q[U].object),delete q[U];delete O[z]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const z in O){const q=O[z];for(const U in q)x(q[U].object),delete q[U];delete O[z]}delete a[D.id]}function I(D){for(const O in a){const z=a[O];if(z[D.id]===void 0)continue;const q=z[D.id];for(const U in q)x(q[U].object),delete q[U];delete z[D.id]}}function H(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:K,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function PA(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,x;if(r)p=n,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,c,d,h),t.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(c[x],d[x]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let x=0;for(let g=0;g<h;g++)x+=d[g];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function LA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),M=_&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function DA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ur,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,_=v*4;let y=f.clippingState||null;l.value=y,y=c(x,h,_,p);for(let M=0;M!==_;++M)y[M]=t[M];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==g;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function UA(n){let e=new WeakMap;function t(o,a){return a===Vd?o.mapping=Lo:a===Gd&&(o.mapping=Do),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vd||a===Gd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new XT(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class NA extends Rx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lo=4,j_=[.125,.215,.35,.446,.526,.582],ns=20,Df=new NA,Y_=new $e;let Uf=null,Nf=0,If=0;const Jr=(1+Math.sqrt(5))/2,Ys=1/Jr,q_=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Jr,Ys),new N(0,Jr,-Ys),new N(Ys,0,Jr),new N(-Ys,0,Jr),new N(Jr,Ys,0),new N(-Jr,Ys,0)];class $_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Nf,If),e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:qa,format:_i,colorSpace:Zi,depthBuffer:!1},r=K_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IA(s)),this._blurMaterial=OA(s,e,t)}return r}_compileMaterial(e){const t=new ti(this._lodPlanes[0],e);this._renderer.compile(t,Df)}_sceneToCubeUV(e,t,i,r){const a=new Qn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Y_),c.toneMapping=Rr,c.autoClear=!1;const p=new wc({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),x=new ti(new ll,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Y_),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const _=this._cubeSize;Kl(r,v*_,f>2?_:0,_,_),c.setRenderTarget(r),g&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lo||e.mapping===Do;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Kl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Df)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=q_[(r-1)%q_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ti(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ns-1),g=s/x,m=isFinite(s)?1+Math.floor(c*g):ns;m>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const f=[];let v=0;for(let E=0;E<ns;++E){const b=E/g,S=Math.exp(-b*b/2);f.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<f.length;E++)f[E]=f[E]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const y=this._sizeLods[r],M=3*y*(r>_-lo?r-_+lo:0),T=4*(this._cubeSize-y);Kl(t,M,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Df)}}function IA(n){const e=[],t=[],i=[];let r=n;const s=n-lo+1+j_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-lo?l=j_[o-n+lo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,x=6,g=3,m=2,f=1,v=new Float32Array(g*x*p),_=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,b=T>2?0:-1,S=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];v.set(S,g*x*T),_.set(h,m*x*T);const w=[T,T,T,T,T,T];y.set(w,f*x*T)}const M=new Cn;M.setAttribute("position",new zn(v,g)),M.setAttribute("uv",new zn(_,m)),M.setAttribute("faceIndex",new zn(y,f)),e.push(M),r>lo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function K_(n,e,t){const i=new Ss(n,e,t);return i.texture.mapping=Sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function OA(n,e,t){const i=new Float32Array(ns),r=new N(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Z_(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Q_(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function dp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Vd||l===Gd,c=l===Lo||l===Do;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new $_(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new $_(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zA(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const g=h.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const g=p[x];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let _=0,y=v.length;_<y;_+=3){const M=v[_+0],T=v[_+1],E=v[_+2];h.push(M,T,T,E,E,M)}}else if(x!==void 0){const v=x.array;g=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const M=_+0,T=_+1,E=_+2;h.push(M,T,T,E,E,M)}}else return;const m=new(xx(h)?Ax:wx)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function BA(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,x){n.drawElements(s,x,a,p*l),t.update(x,s,1)}function d(p,x,g){if(g===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,p*l,g),t.update(x,s,g)}function h(p,x,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,g);let f=0;for(let v=0;v<g;v++)f+=x[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function HA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function VA(n,e){return n[0]-e[0]}function GA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function WA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Wt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=p!==void 0?p.length:0;let g=s.get(c);if(g===void 0||g.count!==x){let D=function(){H.dispose(),s.delete(c),c.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let b=0;v===!0&&(b=1),_===!0&&(b=2),y===!0&&(b=3);let S=c.attributes.position.count*b,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*w*4*x),H=new Mx(I,S,w,x);H.type=mr,H.needsUpdate=!0;const K=b*4;for(let O=0;O<x;O++){const z=M[O],q=T[O],U=E[O],F=S*w*4*O;for(let G=0;G<z.count;G++){const $=G*K;v===!0&&(o.fromBufferAttribute(z,G),I[F+$+0]=o.x,I[F+$+1]=o.y,I[F+$+2]=o.z,I[F+$+3]=0),_===!0&&(o.fromBufferAttribute(q,G),I[F+$+4]=o.x,I[F+$+5]=o.y,I[F+$+6]=o.z,I[F+$+7]=0),y===!0&&(o.fromBufferAttribute(U,G),I[F+$+8]=o.x,I[F+$+9]=o.y,I[F+$+10]=o.z,I[F+$+11]=U.itemSize===4?o.w:1)}}g={count:x,texture:H,size:new Ie(S,w)},s.set(c,g),c.addEventListener("dispose",D)}let m=0;for(let v=0;v<h.length;v++)m+=h[v];const f=c.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",f),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const p=h===void 0?0:h.length;let x=i[c.id];if(x===void 0||x.length!==p){x=[];for(let _=0;_<p;_++)x[_]=[_,0];i[c.id]=x}for(let _=0;_<p;_++){const y=x[_];y[0]=_,y[1]=h[_]}x.sort(GA);for(let _=0;_<8;_++)_<p&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(VA);const g=c.morphAttributes.position,m=c.morphAttributes.normal;let f=0;for(let _=0;_<8;_++){const y=a[_],M=y[0],T=y[1];M!==Number.MAX_SAFE_INTEGER&&T?(g&&c.getAttribute("morphTarget"+_)!==g[M]&&c.setAttribute("morphTarget"+_,g[M]),m&&c.getAttribute("morphNormal"+_)!==m[M]&&c.setAttribute("morphNormal"+_,m[M]),r[_]=T,f+=T):(g&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),m&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),r[_]=0)}const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function XA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Dx extends kn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:cs,c!==cs&&c!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===cs&&(i=pr),i===void 0&&c===Uo&&(i=us),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ux=new kn,Nx=new Dx(1,1);Nx.compareFunction=vx;const Ix=new Mx,Ox=new RT,Fx=new bx,J_=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function Xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=J_[r];if(s===void 0&&(s=new Float32Array(r),J_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ac(n,e){let t=eg[e];t===void 0&&(t=new Int32Array(e),eg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function KA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;ig.set(i),n.uniformMatrix2fv(this.addr,!1,ig),It(t,i)}}function ZA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;ng.set(i),n.uniformMatrix3fv(this.addr,!1,ng),It(t,i)}}function QA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;tg.set(i),n.uniformMatrix4fv(this.addr,!1,tg),It(t,i)}}function JA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function tC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function nC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function iC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function sC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function oC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function aC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Nx:Ux;t.setTexture2D(e||s,r)}function lC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ox,r)}function uC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fx,r)}function cC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ix,r)}function fC(n){switch(n){case 5126:return jA;case 35664:return YA;case 35665:return qA;case 35666:return $A;case 35674:return KA;case 35675:return ZA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return eC;case 35668:case 35672:return tC;case 35669:case 35673:return nC;case 5125:return iC;case 36294:return rC;case 36295:return sC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return uC;case 36289:case 36303:case 36311:case 36292:return cC}}function dC(n,e){n.uniform1fv(this.addr,e)}function hC(n,e){const t=Xo(e,this.size,2);n.uniform2fv(this.addr,t)}function pC(n,e){const t=Xo(e,this.size,3);n.uniform3fv(this.addr,t)}function mC(n,e){const t=Xo(e,this.size,4);n.uniform4fv(this.addr,t)}function _C(n,e){const t=Xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gC(n,e){const t=Xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vC(n,e){const t=Xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xC(n,e){n.uniform1iv(this.addr,e)}function yC(n,e){n.uniform2iv(this.addr,e)}function SC(n,e){n.uniform3iv(this.addr,e)}function MC(n,e){n.uniform4iv(this.addr,e)}function EC(n,e){n.uniform1uiv(this.addr,e)}function TC(n,e){n.uniform2uiv(this.addr,e)}function wC(n,e){n.uniform3uiv(this.addr,e)}function AC(n,e){n.uniform4uiv(this.addr,e)}function CC(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ux,s[o])}function RC(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ox,s[o])}function bC(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fx,s[o])}function PC(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ix,s[o])}function LC(n){switch(n){case 5126:return dC;case 35664:return hC;case 35665:return pC;case 35666:return mC;case 35674:return _C;case 35675:return gC;case 35676:return vC;case 5124:case 35670:return xC;case 35667:case 35671:return yC;case 35668:case 35672:return SC;case 35669:case 35673:return MC;case 5125:return EC;case 36294:return TC;case 36295:return wC;case 36296:return AC;case 35678:case 36198:case 36298:case 36306:case 35682:return CC;case 35679:case 36299:case 36307:return RC;case 35680:case 36300:case 36308:case 36293:return bC;case 36289:case 36303:case 36311:case 36292:return PC}}class DC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fC(t.type)}}class UC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LC(t.type)}}class NC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Of=/(\w+)(\])?(\[|\.)?/g;function rg(n,e){n.seq.push(e),n.map[e.id]=e}function IC(n,e,t){const i=n.name,r=i.length;for(Of.lastIndex=0;;){const s=Of.exec(i),o=Of.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){rg(t,u===void 0?new DC(a,n,e):new UC(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new NC(a),rg(t,d)),t=d}}}class gu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);IC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function sg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OC=37297;let FC=0;function kC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function zC(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===$u&&t===qu?i="LinearDisplayP3ToLinearSRGB":e===qu&&t===$u&&(i="LinearSRGBToLinearDisplayP3"),n){case Zi:case Mc:return[i,"LinearTransferOETF"];case zt:case cp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function og(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kC(n.getShaderSource(e),o)}else return r}function BC(n,e){const t=zC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HC(n,e){let t;switch(e){case KE:t="Linear";break;case ZE:t="Reinhard";break;case QE:t="OptimizedCineon";break;case lx:t="ACESFilmic";break;case eT:t="AgX";break;case JE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function VC(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(uo).join(`
`)}function GC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(uo).join(`
`)}function WC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function uo(n){return n!==""}function ag(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jC=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(n){return n.replace(jC,qC)}const YC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qC(n,e){let t=ze[e];if(t===void 0){const i=YC.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $d(t)}const $C=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(n){return n.replace($C,KC)}function KC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===TE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function QC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lo:case Do:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function eR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ax:e="ENVMAP_BLENDING_MULTIPLY";break;case qE:e="ENVMAP_BLENDING_MIX";break;case $E:e="ENVMAP_BLENDING_ADD";break}return e}function tR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZC(t),u=QC(t),c=JC(t),d=eR(t),h=tR(t),p=t.isWebGL2?"":VC(t),x=GC(t),g=WC(s),m=r.createProgram();let f,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),v.length>0&&(v+=`
`)):(f=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),v=[p,cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?ze.tonemapping_pars_fragment:"",t.toneMapping!==Rr?HC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,BC("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),o=$d(o),o=ag(o,t),o=lg(o,t),a=$d(a),a=ag(a,t),a=lg(a,t),o=ug(o),a=ug(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=_+f+o,M=_+v+a,T=sg(r,r.VERTEX_SHADER,y),E=sg(r,r.FRAGMENT_SHADER,M);r.attachShader(m,T),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function b(H){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(T).trim(),O=r.getShaderInfoLog(E).trim();let z=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,E);else{const U=og(r,T,"vertex"),F=og(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+U+`
`+F)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(D===""||O==="")&&(q=!1);q&&(H.diagnostics={runnable:z,programLog:K,vertexShader:{log:D,prefix:f},fragmentShader:{log:O,prefix:v}})}r.deleteShader(T),r.deleteShader(E),S=new gu(r,m),w=XC(r,m)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,OC)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FC++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}let iR=0;class rR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sR(e),t.set(e,i)),i}}class sR{constructor(e){this.id=iR++,this.code=e,this.usedTimes=0}}function oR(n,e,t,i,r,s,o){const a=new Ex,l=new rR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,w,I,H,K){const D=H.fog,O=K.geometry,z=S.isMeshStandardMaterial?H.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),U=q&&q.mapping===Sc?q.image.height:null,F=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$=G!==void 0?G.length:0;let J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let j,Z,ae,_e;if(F){const Tt=Ti[F];j=Tt.vertexShader,Z=Tt.fragmentShader}else j=S.vertexShader,Z=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const ge=n.getRenderTarget(),De=K.isInstancedMesh===!0,Ue=K.isBatchedMesh===!0,Ae=!!S.map,je=!!S.matcap,V=!!q,Vt=!!S.aoMap,Ee=!!S.lightMap,be=!!S.bumpMap,ve=!!S.normalMap,ot=!!S.displacementMap,Oe=!!S.emissiveMap,R=!!S.metalnessMap,A=!!S.roughnessMap,B=S.anisotropy>0,ie=S.clearcoat>0,ee=S.iridescence>0,re=S.sheen>0,xe=S.transmission>0,ce=B&&!!S.anisotropyMap,me=ie&&!!S.clearcoatMap,we=ie&&!!S.clearcoatNormalMap,Fe=ie&&!!S.clearcoatRoughnessMap,Q=ee&&!!S.iridescenceMap,Je=ee&&!!S.iridescenceThicknessMap,Be=re&&!!S.sheenColorMap,Pe=re&&!!S.sheenRoughnessMap,Me=!!S.specularMap,fe=!!S.specularColorMap,P=!!S.specularIntensityMap,se=xe&&!!S.transmissionMap,ye=xe&&!!S.thicknessMap,pe=!!S.gradientMap,te=!!S.alphaMap,L=S.alphaTest>0,oe=!!S.alphaHash,ue=!!S.extensions,Ce=!!O.attributes.uv1,Te=!!O.attributes.uv2,Ye=!!O.attributes.uv3;let qe=Rr;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(qe=n.toneMapping),{isWebGL2:c,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:Z,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ue,instancing:De,instancingColor:De&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Zi,map:Ae,matcap:je,envMap:V,envMapMode:V&&q.mapping,envMapCubeUVHeight:U,aoMap:Vt,lightMap:Ee,bumpMap:be,normalMap:ve,displacementMap:h&&ot,emissiveMap:Oe,normalMapObjectSpace:ve&&S.normalMapType===hT,normalMapTangentSpace:ve&&S.normalMapType===dT,metalnessMap:R,roughnessMap:A,anisotropy:B,anisotropyMap:ce,clearcoat:ie,clearcoatMap:me,clearcoatNormalMap:we,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Je,sheen:re,sheenColorMap:Be,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:fe,specularIntensityMap:P,transmission:xe,transmissionMap:se,thicknessMap:ye,gradientMap:pe,opaque:S.transparent===!1&&S.blending===xo,alphaMap:te,alphaTest:L,alphaHash:oe,combine:S.combine,mapUv:Ae&&g(S.map.channel),aoMapUv:Vt&&g(S.aoMap.channel),lightMapUv:Ee&&g(S.lightMap.channel),bumpMapUv:be&&g(S.bumpMap.channel),normalMapUv:ve&&g(S.normalMap.channel),displacementMapUv:ot&&g(S.displacementMap.channel),emissiveMapUv:Oe&&g(S.emissiveMap.channel),metalnessMapUv:R&&g(S.metalnessMap.channel),roughnessMapUv:A&&g(S.roughnessMap.channel),anisotropyMapUv:ce&&g(S.anisotropyMap.channel),clearcoatMapUv:me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(S.sheenRoughnessMap.channel),specularMapUv:Me&&g(S.specularMap.channel),specularColorMapUv:fe&&g(S.specularColorMap.channel),specularIntensityMapUv:P&&g(S.specularIntensityMap.channel),transmissionMapUv:se&&g(S.transmissionMap.channel),thicknessMapUv:ye&&g(S.thicknessMap.channel),alphaMapUv:te&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ve||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Te,vertexUv3s:Ye,pointsUvs:K.isPoints===!0&&!!O.attributes.uv&&(Ae||te),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ai,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)w.push(I),w.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(w,S),_(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const w=x[S.type];let I;if(w){const H=Ti[w];I=HT.clone(H.uniforms)}else I=S.uniforms;return I}function M(S,w){let I;for(let H=0,K=u.length;H<K;H++){const D=u[H];if(D.cacheKey===w){I=D,++I.usedTimes;break}}return I===void 0&&(I=new nR(n,w,S,s),u.push(I)),I}function T(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:b}}function aR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function lR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,x,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,x,g,m){const f=o(d,h,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,x,g,m){const f=o(d,h,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||lR),i.length>1&&i.sort(h||fg),r.length>1&&r.sort(h||fg)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function uR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new dg,n.set(i,[o])):r>=s.length?(o=new dg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new $e};break;case"SpotLight":t={position:new N,direction:new N,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function fR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dR=0;function hR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pR(n,e){const t=new cR,i=fR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new N);const s=new N,o=new Et,a=new Et;function l(c,d){let h=0,p=0,x=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let g=0,m=0,f=0,v=0,_=0,y=0,M=0,T=0,E=0,b=0,S=0;c.sort(hR);const w=d===!0?Math.PI:1;for(let H=0,K=c.length;H<K;H++){const D=c[H],O=D.color,z=D.intensity,q=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*z*w,p+=O.g*z*w,x+=O.b*z*w;else if(D.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(D.sh.coefficients[F],z);S++}else if(D.isDirectionalLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const G=D.shadow,$=i.get(D);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,r.directionalShadow[g]=$,r.directionalShadowMap[g]=U,r.directionalShadowMatrix[g]=D.shadow.matrix,y++}r.directional[g]=F,g++}else if(D.isSpotLight){const F=t.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(O).multiplyScalar(z*w),F.distance=q,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,r.spot[f]=F;const G=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,G.updateMatrices(D),D.castShadow&&b++),r.spotLightMatrix[f]=G.matrix,D.castShadow){const $=i.get(D);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=U,T++}f++}else if(D.isRectAreaLight){const F=t.get(D);F.color.copy(O).multiplyScalar(z),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=F,v++}else if(D.isPointLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*w),F.distance=D.distance,F.decay=D.decay,D.castShadow){const G=D.shadow,$=i.get(D);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=D.shadow.matrix,M++}r.point[m]=F,m++}else if(D.isHemisphereLight){const F=t.get(D);F.skyColor.copy(D.color).multiplyScalar(z*w),F.groundColor.copy(D.groundColor).multiplyScalar(z*w),r.hemi[_]=F,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==g||I.pointLength!==m||I.spotLength!==f||I.rectAreaLength!==v||I.hemiLength!==_||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==T||I.numSpotMaps!==E||I.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+E-b,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=S,I.directionalLength=g,I.pointLength=m,I.spotLength=f,I.rectAreaLength=v,I.hemiLength=_,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=T,I.numSpotMaps=E,I.numLightProbes=S,r.version=dR++)}function u(c,d){let h=0,p=0,x=0,g=0,m=0;const f=d.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const y=c[v];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),h++}else if(y.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function hg(n,e){const t=new pR(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function mR(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new hg(n,e),t.set(s,[l])):o>=a.length?(l=new hg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class _R extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gR extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yR(n,e,t){let i=new Px;const r=new Ie,s=new Ie,o=new Wt,a=new _R({depthPacking:fT}),l=new gR,u={},c=t.maxTextureSize,d={[Nr]:Sn,[Sn]:Nr,[Ai]:Ai},h=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:vR,fragmentShader:xR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Cn;x.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ti(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ox;let f=this.type;this.render=function(T,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Cr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=f!==ki&&this.type===ki,D=f===ki&&this.type!==ki;for(let O=0,z=T.length;O<z;O++){const q=T[O],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const F=U.getFrameExtents();if(r.multiply(F),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,U.mapSize.y=s.y)),U.map===null||K===!0||D===!0){const $=this.type!==ki?{minFilter:ln,magFilter:ln}:{};U.map!==null&&U.map.dispose(),U.map=new Ss(r.x,r.y,$),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const G=U.getViewportCount();for(let $=0;$<G;$++){const J=U.getViewport($);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),H.viewport(o),U.updateMatrices(q,$),i=U.getFrustum(),y(E,b,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===ki&&v(U,b),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,w,I)};function v(T,E){const b=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ss(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,b,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,b,p,g,null)}function _(T,E,b,S){let w=null;const I=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)w=I;else if(w=b.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=w.uuid,K=E.uuid;let D=u[H];D===void 0&&(D={},u[H]=D);let O=D[K];O===void 0&&(O=w.clone(),D[K]=O,E.addEventListener("dispose",M)),w=O}if(w.visible=E.visible,w.wireframe=E.wireframe,S===ki?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:d[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,b.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=n.properties.get(w);H.light=b}return w}function y(T,E,b,S,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===ki)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const K=e.update(T),D=T.material;if(Array.isArray(D)){const O=K.groups;for(let z=0,q=O.length;z<q;z++){const U=O[z],F=D[U.materialIndex];if(F&&F.visible){const G=_(T,F,S,w);T.onBeforeShadow(n,T,E,b,K,G,U),n.renderBufferDirect(b,null,K,G,T,U),T.onAfterShadow(n,T,E,b,K,G,U)}}}else if(D.visible){const O=_(T,D,S,w);T.onBeforeShadow(n,T,E,b,K,O,null),n.renderBufferDirect(b,null,K,O,T,null),T.onAfterShadow(n,T,E,b,K,O,null)}}const H=T.children;for(let K=0,D=H.length;K<D;K++)y(H[K],E,b,S,w)}function M(T){T.target.removeEventListener("dispose",M);for(const b in u){const S=u[b],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function SR(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const oe=new Wt;let ue=null;const Ce=new Wt(0,0,0,0);return{setMask:function(Te){ue!==Te&&!L&&(n.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){L=Te},setClear:function(Te,Ye,qe,xt,Tt){Tt===!0&&(Te*=xt,Ye*=xt,qe*=xt),oe.set(Te,Ye,qe,xt),Ce.equals(oe)===!1&&(n.clearColor(Te,Ye,qe,xt),Ce.copy(oe))},reset:function(){L=!1,ue=null,Ce.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,ue=null,Ce=null;return{setTest:function(Te){Te?Ue(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Te){oe!==Te&&!L&&(n.depthMask(Te),oe=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case HE:n.depthFunc(n.NEVER);break;case VE:n.depthFunc(n.ALWAYS);break;case GE:n.depthFunc(n.LESS);break;case ju:n.depthFunc(n.LEQUAL);break;case WE:n.depthFunc(n.EQUAL);break;case XE:n.depthFunc(n.GEQUAL);break;case jE:n.depthFunc(n.GREATER);break;case YE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Te}},setLocked:function(Te){L=Te},setClear:function(Te){Ce!==Te&&(n.clearDepth(Te),Ce=Te)},reset:function(){L=!1,oe=null,ue=null,Ce=null}}}function o(){let L=!1,oe=null,ue=null,Ce=null,Te=null,Ye=null,qe=null,xt=null,Tt=null;return{setTest:function(Qe){L||(Qe?Ue(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!L&&(n.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,Rt,yi){(ue!==Qe||Ce!==Rt||Te!==yi)&&(n.stencilFunc(Qe,Rt,yi),ue=Qe,Ce=Rt,Te=yi)},setOp:function(Qe,Rt,yi){(Ye!==Qe||qe!==Rt||xt!==yi)&&(n.stencilOp(Qe,Rt,yi),Ye=Qe,qe=Rt,xt=yi)},setLocked:function(Qe){L=Qe},setClear:function(Qe){Tt!==Qe&&(n.clearStencil(Qe),Tt=Qe)},reset:function(){L=!1,oe=null,ue=null,Ce=null,Te=null,Ye=null,qe=null,xt=null,Tt=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,g=[],m=null,f=!1,v=null,_=null,y=null,M=null,T=null,E=null,b=null,S=new $e(0,0,0),w=0,I=!1,H=null,K=null,D=null,O=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=F>=2);let $=null,J={};const j=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ae=new Wt().fromArray(j),_e=new Wt().fromArray(Z);function ge(L,oe,ue,Ce){const Te=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(L,Ye),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ue;qe++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(oe+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Ye}const De={};De[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(ju),Oe(!1),R($m),Ue(n.CULL_FACE),ve(Cr);function Ue(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function je(L,oe){return p[L]!==oe?(n.bindFramebuffer(L,oe),p[L]=oe,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=oe),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function V(L,oe){let ue=g,Ce=!1;if(L)if(ue=x.get(oe),ue===void 0&&(ue=[],x.set(oe,ue)),L.isWebGLMultipleRenderTargets){const Te=L.texture;if(ue.length!==Te.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,qe=Te.length;Ye<qe;Ye++)ue[Ye]=n.COLOR_ATTACHMENT0+Ye;ue.length=Te.length,Ce=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,Ce=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Vt(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Ee={[ts]:n.FUNC_ADD,[AE]:n.FUNC_SUBTRACT,[CE]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Qm]=n.MIN,Ee[Jm]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[Qm]=L.MIN_EXT,Ee[Jm]=L.MAX_EXT)}const be={[RE]:n.ZERO,[bE]:n.ONE,[PE]:n.SRC_COLOR,[Bd]:n.SRC_ALPHA,[OE]:n.SRC_ALPHA_SATURATE,[NE]:n.DST_COLOR,[DE]:n.DST_ALPHA,[LE]:n.ONE_MINUS_SRC_COLOR,[Hd]:n.ONE_MINUS_SRC_ALPHA,[IE]:n.ONE_MINUS_DST_COLOR,[UE]:n.ONE_MINUS_DST_ALPHA,[FE]:n.CONSTANT_COLOR,[kE]:n.ONE_MINUS_CONSTANT_COLOR,[zE]:n.CONSTANT_ALPHA,[BE]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(L,oe,ue,Ce,Te,Ye,qe,xt,Tt,Qe){if(L===Cr){f===!0&&(Ae(n.BLEND),f=!1);return}if(f===!1&&(Ue(n.BLEND),f=!0),L!==wE){if(L!==v||Qe!==I){if((_!==ts||T!==ts)&&(n.blendEquation(n.FUNC_ADD),_=ts,T=ts),Qe)switch(L){case xo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xu:n.blendFunc(n.ONE,n.ONE);break;case Km:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Km:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,M=null,E=null,b=null,S.set(0,0,0),w=0,v=L,I=Qe}return}Te=Te||oe,Ye=Ye||ue,qe=qe||Ce,(oe!==_||Te!==T)&&(n.blendEquationSeparate(Ee[oe],Ee[Te]),_=oe,T=Te),(ue!==y||Ce!==M||Ye!==E||qe!==b)&&(n.blendFuncSeparate(be[ue],be[Ce],be[Ye],be[qe]),y=ue,M=Ce,E=Ye,b=qe),(xt.equals(S)===!1||Tt!==w)&&(n.blendColor(xt.r,xt.g,xt.b,Tt),S.copy(xt),w=Tt),v=L,I=!1}function ot(L,oe){L.side===Ai?Ae(n.CULL_FACE):Ue(n.CULL_FACE);let ue=L.side===Sn;oe&&(ue=!ue),Oe(ue),L.blending===xo&&L.transparent===!1?ve(Cr):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ce=L.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){H!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),H=L)}function R(L){L!==ME?(Ue(n.CULL_FACE),L!==K&&(L===$m?n.cullFace(n.BACK):L===EE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),K=L}function A(L){L!==D&&(U&&n.lineWidth(L),D=L)}function B(L,oe,ue){L?(Ue(n.POLYGON_OFFSET_FILL),(O!==oe||z!==ue)&&(n.polygonOffset(oe,ue),O=oe,z=ue)):Ae(n.POLYGON_OFFSET_FILL)}function ie(L){L?Ue(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function ee(L){L===void 0&&(L=n.TEXTURE0+q-1),$!==L&&(n.activeTexture(L),$=L)}function re(L,oe,ue){ue===void 0&&($===null?ue=n.TEXTURE0+q-1:ue=$);let Ce=J[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},J[ue]=Ce),(Ce.type!==L||Ce.texture!==oe)&&($!==ue&&(n.activeTexture(ue),$=ue),n.bindTexture(L,oe||De[L]),Ce.type=L,Ce.texture=oe)}function xe(){const L=J[$];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){ae.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function se(L){_e.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function ye(L,oe){let ue=d.get(oe);ue===void 0&&(ue=new WeakMap,d.set(oe,ue));let Ce=ue.get(L);Ce===void 0&&(Ce=n.getUniformBlockIndex(oe,L.name),ue.set(L,Ce))}function pe(L,oe){const Ce=d.get(oe).get(L);c.get(oe)!==Ce&&(n.uniformBlockBinding(oe,Ce,L.__bindingPointIndex),c.set(oe,Ce))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,J={},p={},x=new WeakMap,g=[],m=null,f=!1,v=null,_=null,y=null,M=null,T=null,E=null,b=null,S=new $e(0,0,0),w=0,I=!1,H=null,K=null,D=null,O=null,z=null,ae.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ue,disable:Ae,bindFramebuffer:je,drawBuffers:V,useProgram:Vt,setBlending:ve,setMaterial:ot,setFlipSided:Oe,setCullFace:R,setLineWidth:A,setPolygonOffset:B,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:xe,compressedTexImage2D:ce,compressedTexImage3D:me,texImage2D:Me,texImage3D:fe,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:Be,texStorage3D:Pe,texSubImage2D:we,texSubImage3D:Fe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Je,scissor:P,viewport:se,reset:te}}function MR(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,A){return p?new OffscreenCanvas(R,A):Zu("canvas")}function g(R,A,B,ie){let ee=1;if((R.width>ie||R.height>ie)&&(ee=ie/Math.max(R.width,R.height)),ee<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=A?qd:Math.floor,xe=re(ee*R.width),ce=re(ee*R.height);d===void 0&&(d=x(xe,ce));const me=B?x(xe,ce):d;return me.width=xe,me.height=ce,me.getContext("2d").drawImage(R,0,0,xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+ce+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return b_(R.width)&&b_(R.height)}function f(R){return a?!1:R.wrapS!==mi||R.wrapT!==mi||R.minFilter!==ln&&R.minFilter!==Zn}function v(R,A){return R.generateMipmaps&&A&&R.minFilter!==ln&&R.minFilter!==Zn}function _(R){n.generateMipmap(R)}function y(R,A,B,ie,ee=!1){if(a===!1)return A;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=A;if(A===n.RED&&(B===n.FLOAT&&(re=n.R32F),B===n.HALF_FLOAT&&(re=n.R16F),B===n.UNSIGNED_BYTE&&(re=n.R8)),A===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(re=n.R8UI),B===n.UNSIGNED_SHORT&&(re=n.R16UI),B===n.UNSIGNED_INT&&(re=n.R32UI),B===n.BYTE&&(re=n.R8I),B===n.SHORT&&(re=n.R16I),B===n.INT&&(re=n.R32I)),A===n.RG&&(B===n.FLOAT&&(re=n.RG32F),B===n.HALF_FLOAT&&(re=n.RG16F),B===n.UNSIGNED_BYTE&&(re=n.RG8)),A===n.RGBA){const xe=ee?Yu:nt.getTransfer(ie);B===n.FLOAT&&(re=n.RGBA32F),B===n.HALF_FLOAT&&(re=n.RGBA16F),B===n.UNSIGNED_BYTE&&(re=xe===lt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(R,A,B){return v(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Zn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){return R===ln||R===e_||R===lf?n.NEAREST:n.LINEAR}function E(R){const A=R.target;A.removeEventListener("dispose",E),S(A),A.isVideoTexture&&c.delete(A)}function b(R){const A=R.target;A.removeEventListener("dispose",b),I(A)}function S(R){const A=i.get(R);if(A.__webglInit===void 0)return;const B=R.source,ie=h.get(B);if(ie){const ee=ie[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(R),Object.keys(ie).length===0&&h.delete(B)}i.remove(R)}function w(R){const A=i.get(R);n.deleteTexture(A.__webglTexture);const B=R.source,ie=h.get(B);delete ie[A.__cacheKey],o.memory.textures--}function I(R){const A=R.texture,B=i.get(R),ie=i.get(A);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let re=0;re<B.__webglFramebuffer[ee].length;re++)n.deleteFramebuffer(B.__webglFramebuffer[ee][re]);else n.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)n.deleteFramebuffer(B.__webglFramebuffer[ee]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,re=A.length;ee<re;ee++){const xe=i.get(A[ee]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(A[ee])}i.remove(A),i.remove(R)}let H=0;function K(){H=0}function D(){const R=H;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),H+=1,R}function O(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function z(R,A){const B=i.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(B,R,A);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+A)}function q(R,A){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ae(B,R,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+A)}function U(R,A){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ae(B,R,A);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+A)}function F(R,A){const B=i.get(R);if(R.version>0&&B.__version!==R.version){_e(B,R,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+A)}const G={[Wd]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[Xd]:n.MIRRORED_REPEAT},$={[ln]:n.NEAREST,[e_]:n.NEAREST_MIPMAP_NEAREST,[lf]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[tT]:n.LINEAR_MIPMAP_NEAREST,[Ya]:n.LINEAR_MIPMAP_LINEAR},J={[pT]:n.NEVER,[yT]:n.ALWAYS,[mT]:n.LESS,[vx]:n.LEQUAL,[_T]:n.EQUAL,[xT]:n.GEQUAL,[gT]:n.GREATER,[vT]:n.NOTEQUAL};function j(R,A,B){if(B?(n.texParameteri(R,n.TEXTURE_WRAP_S,G[A.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,G[A.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,G[A.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,$[A.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,$[A.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==mi||A.wrapT!==mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==ln&&A.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===ln||A.minFilter!==lf&&A.minFilter!==Ya||A.type===mr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===qa&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Z(R,A){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",E));const ie=A.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const re=O(A);if(re!==R.__cacheKey){ee[re]===void 0&&(ee[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[re].usedTimes++;const xe=ee[R.__cacheKey];xe!==void 0&&(ee[R.__cacheKey].usedTimes--,xe.usedTimes===0&&w(A)),R.__cacheKey=re,R.__webglTexture=ee[re].texture}return B}function ae(R,A,B){let ie=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=n.TEXTURE_3D);const ee=Z(R,A),re=A.source;t.bindTexture(ie,R.__webglTexture,n.TEXTURE0+B);const xe=i.get(re);if(re.version!==xe.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const ce=nt.getPrimaries(nt.workingColorSpace),me=A.colorSpace===Jn?null:nt.getPrimaries(A.colorSpace),we=A.colorSpace===Jn||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Fe=f(A)&&m(A.image)===!1;let Q=g(A.image,Fe,!1,r.maxTextureSize);Q=Oe(A,Q);const Je=m(Q)||a,Be=s.convert(A.format,A.colorSpace);let Pe=s.convert(A.type),Me=y(A.internalFormat,Be,Pe,A.colorSpace,A.isVideoTexture);j(ie,A,Je);let fe;const P=A.mipmaps,se=a&&A.isVideoTexture!==!0&&Me!==_x,ye=xe.__version===void 0||ee===!0,pe=M(A,Q,Je);if(A.isDepthTexture)Me=n.DEPTH_COMPONENT,a?A.type===mr?Me=n.DEPTH_COMPONENT32F:A.type===pr?Me=n.DEPTH_COMPONENT24:A.type===us?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:A.type===mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===cs&&Me===n.DEPTH_COMPONENT&&A.type!==up&&A.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=pr,Pe=s.convert(A.type)),A.format===Uo&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,A.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=us,Pe=s.convert(A.type))),ye&&(se?t.texStorage2D(n.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Me,Q.width,Q.height,0,Be,Pe,null));else if(A.isDataTexture)if(P.length>0&&Je){se&&ye&&t.texStorage2D(n.TEXTURE_2D,pe,Me,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)fe=P[te],se?t.texSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,Be,Pe,fe.data):t.texImage2D(n.TEXTURE_2D,te,Me,fe.width,fe.height,0,Be,Pe,fe.data);A.generateMipmaps=!1}else se?(ye&&t.texStorage2D(n.TEXTURE_2D,pe,Me,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Be,Pe,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Me,Q.width,Q.height,0,Be,Pe,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,P[0].width,P[0].height,Q.depth);for(let te=0,L=P.length;te<L;te++)fe=P[te],A.format!==_i?Be!==null?se?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,Q.depth,Be,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Me,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,Q.depth,Be,Pe,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Me,fe.width,fe.height,Q.depth,0,Be,Pe,fe.data)}else{se&&ye&&t.texStorage2D(n.TEXTURE_2D,pe,Me,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)fe=P[te],A.format!==_i?Be!==null?se?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,Be,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,Be,Pe,fe.data):t.texImage2D(n.TEXTURE_2D,te,Me,fe.width,fe.height,0,Be,Pe,fe.data)}else if(A.isDataArrayTexture)se?(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Be,Pe,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,Be,Pe,Q.data);else if(A.isData3DTexture)se?(ye&&t.texStorage3D(n.TEXTURE_3D,pe,Me,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Be,Pe,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,Be,Pe,Q.data);else if(A.isFramebufferTexture){if(ye)if(se)t.texStorage2D(n.TEXTURE_2D,pe,Me,Q.width,Q.height);else{let te=Q.width,L=Q.height;for(let oe=0;oe<pe;oe++)t.texImage2D(n.TEXTURE_2D,oe,Me,te,L,0,Be,Pe,null),te>>=1,L>>=1}}else if(P.length>0&&Je){se&&ye&&t.texStorage2D(n.TEXTURE_2D,pe,Me,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)fe=P[te],se?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Be,Pe,fe):t.texImage2D(n.TEXTURE_2D,te,Me,Be,Pe,fe);A.generateMipmaps=!1}else se?(ye&&t.texStorage2D(n.TEXTURE_2D,pe,Me,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,Pe,Q)):t.texImage2D(n.TEXTURE_2D,0,Me,Be,Pe,Q);v(A,Je)&&_(ie),xe.__version=re.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function _e(R,A,B){if(A.image.length!==6)return;const ie=Z(R,A),ee=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){t.activeTexture(n.TEXTURE0+B);const xe=nt.getPrimaries(nt.workingColorSpace),ce=A.colorSpace===Jn?null:nt.getPrimaries(A.colorSpace),me=A.colorSpace===Jn||xe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const we=A.isCompressedTexture||A.image[0].isCompressedTexture,Fe=A.image[0]&&A.image[0].isDataTexture,Q=[];for(let te=0;te<6;te++)!we&&!Fe?Q[te]=g(A.image[te],!1,!0,r.maxCubemapSize):Q[te]=Fe?A.image[te].image:A.image[te],Q[te]=Oe(A,Q[te]);const Je=Q[0],Be=m(Je)||a,Pe=s.convert(A.format,A.colorSpace),Me=s.convert(A.type),fe=y(A.internalFormat,Pe,Me,A.colorSpace),P=a&&A.isVideoTexture!==!0,se=re.__version===void 0||ie===!0;let ye=M(A,Je,Be);j(n.TEXTURE_CUBE_MAP,A,Be);let pe;if(we){P&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,fe,Je.width,Je.height);for(let te=0;te<6;te++){pe=Q[te].mipmaps;for(let L=0;L<pe.length;L++){const oe=pe[L];A.format!==_i?Pe!==null?P?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,oe.width,oe.height,Pe,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,oe.width,oe.height,Pe,Me,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,fe,oe.width,oe.height,0,Pe,Me,oe.data)}}}else{pe=A.mipmaps,P&&se&&(pe.length>0&&ye++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,fe,Q[0].width,Q[0].height));for(let te=0;te<6;te++)if(Fe){P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Q[te].width,Q[te].height,Pe,Me,Q[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,fe,Q[te].width,Q[te].height,0,Pe,Me,Q[te].data);for(let L=0;L<pe.length;L++){const ue=pe[L].image[te].image;P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,ue.width,ue.height,Pe,Me,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,fe,ue.width,ue.height,0,Pe,Me,ue.data)}}else{P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,Me,Q[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,fe,Pe,Me,Q[te]);for(let L=0;L<pe.length;L++){const oe=pe[L];P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,Pe,Me,oe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,fe,Pe,Me,oe.image[te])}}}v(A,Be)&&_(n.TEXTURE_CUBE_MAP),re.__version=ee.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ge(R,A,B,ie,ee,re){const xe=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),me=y(B.internalFormat,xe,ce,B.colorSpace);if(!i.get(A).__hasExternalTextures){const Fe=Math.max(1,A.width>>re),Q=Math.max(1,A.height>>re);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,me,Fe,Q,A.depth,0,xe,ce,null):t.texImage2D(ee,re,me,Fe,Q,0,xe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ve(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ee,i.get(B).__webglTexture,0,be(A)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ee,i.get(B).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(R,A,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ie=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||ve(A)){const ee=A.depthTexture;ee&&ee.isDepthTexture&&(ee.type===mr?ie=n.DEPTH_COMPONENT32F:ee.type===pr&&(ie=n.DEPTH_COMPONENT24));const re=be(A);ve(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ie,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ie,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ie=be(A);B&&ve(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,A.width,A.height):ve(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],xe=s.convert(re.format,re.colorSpace),ce=s.convert(re.type),me=y(re.internalFormat,xe,ce,re.colorSpace),we=be(A);B&&ve(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,me,A.width,A.height):ve(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,me,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,me,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const ie=i.get(A.depthTexture).__webglTexture,ee=be(A);if(A.depthTexture.format===cs)ve(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(A.depthTexture.format===Uo)ve(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const A=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ue(A.__webglFramebuffer,R)}else if(B){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=n.createRenderbuffer(),De(A.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),De(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(R,A,B){const ie=i.get(R);A!==void 0&&ge(ie.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ae(R)}function V(R){const A=R.texture,B=i.get(R),ie=i.get(A);R.addEventListener("dispose",b),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=A.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,xe=m(R)||a;if(ee){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let me=0;me<A.mipmaps.length;me++)B.__webglFramebuffer[ce][me]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){const ce=R.texture;for(let me=0,we=ce.length;me<we;me++){const Fe=i.get(ce[me]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ve(R)===!1){const ce=re?A:[A];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const we=ce[me];B.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const Fe=s.convert(we.format,we.colorSpace),Q=s.convert(we.type),Je=y(we.internalFormat,Fe,Q,we.colorSpace,R.isXRRenderTarget===!0),Be=be(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Je,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,B.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),De(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),j(n.TEXTURE_CUBE_MAP,A,xe);for(let ce=0;ce<6;ce++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ge(B.__webglFramebuffer[ce][me],R,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ge(B.__webglFramebuffer[ce],R,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(A,xe)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ce=R.texture;for(let me=0,we=ce.length;me<we;me++){const Fe=ce[me],Q=i.get(Fe);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),j(n.TEXTURE_2D,Fe,xe),ge(B.__webglFramebuffer,R,Fe,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),v(Fe,xe)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ie.__webglTexture),j(ce,A,xe),a&&A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ge(B.__webglFramebuffer[me],R,A,n.COLOR_ATTACHMENT0,ce,me);else ge(B.__webglFramebuffer,R,A,n.COLOR_ATTACHMENT0,ce,0);v(A,xe)&&_(ce),t.unbindTexture()}R.depthBuffer&&Ae(R)}function Vt(R){const A=m(R)||a,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ee=B.length;ie<ee;ie++){const re=B[ie];if(v(re,A)){const xe=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(re).__webglTexture;t.bindTexture(xe,ce),_(xe),t.unbindTexture()}}}function Ee(R){if(a&&R.samples>0&&ve(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,ie=R.height;let ee=n.COLOR_BUFFER_BIT;const re=[],xe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(R),me=R.isWebGLMultipleRenderTargets===!0;if(me)for(let we=0;we<A.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let we=0;we<A.length;we++){re.push(n.COLOR_ATTACHMENT0+we),R.depthBuffer&&re.push(xe);const Fe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Fe===!1&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[we]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),me){const Q=i.get(A[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,B,ie,0,0,B,ie,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<A.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ce.__webglColorRenderbuffer[we]);const Fe=i.get(A[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function be(R){return Math.min(r.maxSamples,R.samples)}function ve(R){const A=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ot(R){const A=o.render.frame;c.get(R)!==A&&(c.set(R,A),R.update())}function Oe(R,A){const B=R.colorSpace,ie=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===jd||B!==Zi&&B!==Jn&&(nt.getTransfer(B)===lt?a===!1?e.has("EXT_sRGB")===!0&&ie===_i?(R.format=jd,R.minFilter=Zn,R.generateMipmaps=!1):A=yx.sRGBToLinear(A):(ie!==_i||ee!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=je,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ve}function ER(n,e,t){const i=t.isWebGL2;function r(s,o=Jn){let a;const l=nt.getTransfer(o);if(s===br)return n.UNSIGNED_BYTE;if(s===fx)return n.UNSIGNED_SHORT_4_4_4_4;if(s===dx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===nT)return n.BYTE;if(s===iT)return n.SHORT;if(s===up)return n.UNSIGNED_SHORT;if(s===cx)return n.INT;if(s===pr)return n.UNSIGNED_INT;if(s===mr)return n.FLOAT;if(s===qa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rT)return n.ALPHA;if(s===_i)return n.RGBA;if(s===sT)return n.LUMINANCE;if(s===oT)return n.LUMINANCE_ALPHA;if(s===cs)return n.DEPTH_COMPONENT;if(s===Uo)return n.DEPTH_STENCIL;if(s===jd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===aT)return n.RED;if(s===hx)return n.RED_INTEGER;if(s===lT)return n.RG;if(s===px)return n.RG_INTEGER;if(s===mx)return n.RGBA_INTEGER;if(s===uf||s===cf||s===ff||s===df)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ff)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===df)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ff)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===df)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===t_||s===n_||s===i_||s===r_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===t_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===n_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===i_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===r_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_x)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===s_||s===o_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===s_)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===o_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===a_||s===l_||s===u_||s===c_||s===f_||s===d_||s===h_||s===p_||s===m_||s===__||s===g_||s===v_||s===x_||s===y_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===a_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===l_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===u_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===c_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===f_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===d_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===h_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===p_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===m_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===__)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===g_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===v_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===x_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===y_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hf||s===S_||s===M_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===hf)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===S_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===M_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===uT||s===E_||s===T_||s===w_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===hf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===E_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===T_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===w_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===us?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class TR extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zl extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wR={type:"move"};class Ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class AR extends ws{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,x=null;const g=t.getContextAttributes();let m=null,f=null;const v=[],_=[],y=new Ie;let M=null;const T=new Qn;T.layers.enable(1),T.viewport=new Wt;const E=new Qn;E.layers.enable(2),E.viewport=new Wt;const b=[T,E],S=new TR;S.layers.enable(1),S.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=v[j];return Z===void 0&&(Z=new Ff,v[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=v[j];return Z===void 0&&(Z=new Ff,v[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=v[j];return Z===void 0&&(Z=new Ff,v[j]=Z),Z.getHandSpace()};function H(j){const Z=_.indexOf(j.inputSource);if(Z===-1)return;const ae=v[Z];ae!==void 0&&(ae.update(j.inputSource,j.frame,u||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",D);for(let j=0;j<v.length;j++){const Z=_[j];Z!==null&&(_[j]=null,v[j].disconnect(Z))}w=null,I=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ss(p.framebufferWidth,p.framebufferHeight,{format:_i,type:br,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ae=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?Uo:cs,ae=g.stencil?us:pr);const ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Ss(h.textureWidth,h.textureHeight,{format:_i,type:br,depthTexture:new Dx(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(j){for(let Z=0;Z<j.removed.length;Z++){const ae=j.removed[Z],_e=_.indexOf(ae);_e>=0&&(_[_e]=null,v[_e].disconnect(ae))}for(let Z=0;Z<j.added.length;Z++){const ae=j.added[Z];let _e=_.indexOf(ae);if(_e===-1){for(let De=0;De<v.length;De++)if(De>=_.length){_.push(ae),_e=De;break}else if(_[De]===null){_[De]=ae,_e=De;break}if(_e===-1)break}const ge=v[_e];ge&&ge.connect(ae)}}const O=new N,z=new N;function q(j,Z,ae){O.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(ae.matrixWorld);const _e=O.distanceTo(z),ge=Z.projectionMatrix.elements,De=ae.projectionMatrix.elements,Ue=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),je=(ge[9]+1)/ge[5],V=(ge[9]-1)/ge[5],Vt=(ge[8]-1)/ge[0],Ee=(De[8]+1)/De[0],be=Ue*Vt,ve=Ue*Ee,ot=_e/(-Vt+Ee),Oe=ot*-Vt;Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Oe),j.translateZ(ot),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=Ue+ot,A=Ae+ot,B=be-Oe,ie=ve+(_e-Oe),ee=je*Ae/A*R,re=V*Ae/A*R;j.projectionMatrix.makePerspective(B,ie,ee,re,R,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function U(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=E.near=T.near=j.near,S.far=E.far=T.far=j.far,(w!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,I=S.far);const Z=j.parent,ae=S.cameras;U(S,Z);for(let _e=0;_e<ae.length;_e++)U(ae[_e],Z);ae.length===2?q(S,T,E):S.projectionMatrix.copy(T.projectionMatrix),F(j,S,Z)};function F(j,Z,ae){ae===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Yd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let G=null;function $(j,Z){if(c=Z.getViewerPose(u||o),x=Z,c!==null){const ae=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let _e=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let ge=0;ge<ae.length;ge++){const De=ae[ge];let Ue=null;if(p!==null)Ue=p.getViewport(De);else{const je=d.getViewSubImage(h,De);Ue=je.viewport,ge===0&&(e.setRenderTargetTextures(f,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(f))}let Ae=b[ge];Ae===void 0&&(Ae=new Qn,Ae.layers.enable(ge),Ae.viewport=new Wt,b[ge]=Ae),Ae.matrix.fromArray(De.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(De.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ge===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(Ae)}}for(let ae=0;ae<v.length;ae++){const _e=_[ae],ge=v[ae];_e!==null&&ge!==void 0&&ge.update(_e,Z,u||o)}G&&G(j,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const J=new Lx;J.setAnimationLoop($),this.setAnimationLoop=function(j){G=j},this.dispose=function(){}}}function CR(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Cx(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Sn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RR(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function u(v,_){let y=r[v.id];y===void 0&&(x(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const M=_.program;i.updateUBOMapping(v,M);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function c(v){const _=d();v.__bindingPointIndex=_;const y=n.createBuffer(),M=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],y=v.uniforms,M=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,E=y.length;T<E;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,w=b.length;S<w;S++){const I=b[S];if(p(I,T,S,M)===!0){const H=I.__offset,K=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let O=0;O<K.length;O++){const z=K[O],q=g(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,H+D,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,y,M){const T=v.value,E=_+"_"+y;if(M[E]===void 0)return typeof T=="number"||typeof T=="boolean"?M[E]=T:M[E]=T.clone(),!0;{const b=M[E];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return M[E]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function x(v){const _=v.uniforms;let y=0;const M=16;for(let E=0,b=_.length;E<b;E++){const S=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,I=S.length;w<I;w++){const H=S[w],K=Array.isArray(H.value)?H.value:[H.value];for(let D=0,O=K.length;D<O;D++){const z=K[D],q=g(z),U=y%M;U!==0&&M-U<q.boundary&&(y+=M-U),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=q.storage}}}const T=y%M;return T>0&&(y+=M-T),v.__size=y,v.__cache={},this}function g(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class Kd{constructor(e={}){const{canvas:t=ET(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Rr,this.toneMappingExposure=1;const _=this;let y=!1,M=0,T=0,E=null,b=-1,S=null;const w=new Wt,I=new Wt;let H=null;const K=new $e(0);let D=0,O=t.width,z=t.height,q=1,U=null,F=null;const G=new Wt(0,0,O,z),$=new Wt(0,0,O,z);let J=!1;const j=new Px;let Z=!1,ae=!1,_e=null;const ge=new Et,De=new Ie,Ue=new N,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return E===null?q:1}let V=i;function Vt(C,k){for(let X=0;X<C.length;X++){const Y=C[X],W=t.getContext(Y,k);if(W!==null)return W}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lp}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),V=Vt(k,C),V===null)throw Vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,be,ve,ot,Oe,R,A,B,ie,ee,re,xe,ce,me,we,Fe,Q,Je,Be,Pe,Me,fe,P,se;function ye(){Ee=new kA(V),be=new LA(V,Ee,e),Ee.init(be),fe=new ER(V,Ee,be),ve=new SR(V,Ee,be),ot=new HA(V),Oe=new aR,R=new MR(V,Ee,ve,Oe,be,fe,ot),A=new UA(_),B=new FA(_),ie=new qT(V,be),P=new bA(V,Ee,ie,be),ee=new zA(V,ie,ot,P),re=new XA(V,ee,ie,ot),Be=new WA(V,be,R),Fe=new DA(Oe),xe=new oR(_,A,B,Ee,be,P,Fe),ce=new CR(_,Oe),me=new uR,we=new mR(Ee,be),Je=new RA(_,A,B,ve,re,h,l),Q=new yR(_,re,be),se=new RR(V,ot,be,ve),Pe=new PA(V,Ee,ot,be),Me=new BA(V,Ee,ot,be),ot.programs=xe.programs,_.capabilities=be,_.extensions=Ee,_.properties=Oe,_.renderLists=me,_.shadowMap=Q,_.state=ve,_.info=ot}ye();const pe=new AR(_,V);this.xr=pe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(O,z,!1))},this.getSize=function(C){return C.set(O,z)},this.setSize=function(C,k,X=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,z=k,t.width=Math.floor(C*q),t.height=Math.floor(k*q),X===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(O*q,z*q).floor()},this.setDrawingBufferSize=function(C,k,X){O=C,z=k,q=X,t.width=Math.floor(C*X),t.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,k,X,Y){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,k,X,Y),ve.viewport(w.copy(G).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,k,X,Y){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,k,X,Y),ve.scissor(I.copy($).multiplyScalar(q).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){ve.setScissorTest(J=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,k=!0,X=!0){let Y=0;if(C){let W=!1;if(E!==null){const de=E.texture.format;W=de===mx||de===px||de===hx}if(W){const de=E.texture.type,Se=de===br||de===pr||de===up||de===us||de===fx||de===dx,Re=Je.getClearColor(),Le=Je.getClearAlpha(),He=Re.r,Ne=Re.g,ke=Re.b;Se?(p[0]=He,p[1]=Ne,p[2]=ke,p[3]=Le,V.clearBufferuiv(V.COLOR,0,p)):(x[0]=He,x[1]=Ne,x[2]=ke,x[3]=Le,V.clearBufferiv(V.COLOR,0,x))}else Y|=V.COLOR_BUFFER_BIT}k&&(Y|=V.DEPTH_BUFFER_BIT),X&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),we.dispose(),Oe.dispose(),A.dispose(),B.dispose(),re.dispose(),P.dispose(),se.dispose(),xe.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Tt),pe.removeEventListener("sessionend",Qe),_e&&(_e.dispose(),_e=null),Rt.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=ot.autoReset,k=Q.enabled,X=Q.autoUpdate,Y=Q.needsUpdate,W=Q.type;ye(),ot.autoReset=C,Q.enabled=k,Q.autoUpdate=X,Q.needsUpdate=Y,Q.type=W}function oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const k=C.target;k.removeEventListener("dispose",ue),Ce(k)}function Ce(C){Te(C),Oe.remove(C)}function Te(C){const k=Oe.get(C).programs;k!==void 0&&(k.forEach(function(X){xe.releaseProgram(X)}),C.isShaderMaterial&&xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,Y,W,de){k===null&&(k=Ae);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Re=Vy(C,k,X,Y,W);ve.setMaterial(Y,Se);let Le=X.index,He=1;if(Y.wireframe===!0){if(Le=ee.getWireframeAttribute(X),Le===void 0)return;He=2}const Ne=X.drawRange,ke=X.attributes.position;let wt=Ne.start*He,Rn=(Ne.start+Ne.count)*He;de!==null&&(wt=Math.max(wt,de.start*He),Rn=Math.min(Rn,(de.start+de.count)*He)),Le!==null?(wt=Math.max(wt,0),Rn=Math.min(Rn,Le.count)):ke!=null&&(wt=Math.max(wt,0),Rn=Math.min(Rn,ke.count));const Ot=Rn-wt;if(Ot<0||Ot===1/0)return;P.setup(W,Y,Re,X,Le);let Di,dt=Pe;if(Le!==null&&(Di=ie.get(Le),dt=Me,dt.setIndex(Di)),W.isMesh)Y.wireframe===!0?(ve.setLineWidth(Y.wireframeLinewidth*je()),dt.setMode(V.LINES)):dt.setMode(V.TRIANGLES);else if(W.isLine){let Ve=Y.linewidth;Ve===void 0&&(Ve=1),ve.setLineWidth(Ve*je()),W.isLineSegments?dt.setMode(V.LINES):W.isLineLoop?dt.setMode(V.LINE_LOOP):dt.setMode(V.LINE_STRIP)}else W.isPoints?dt.setMode(V.POINTS):W.isSprite&&dt.setMode(V.TRIANGLES);if(W.isBatchedMesh)dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)dt.renderInstances(wt,Ot,W.count);else if(X.isInstancedBufferGeometry){const Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Lc=Math.min(X.instanceCount,Ve);dt.renderInstances(wt,Ot,Lc)}else dt.render(wt,Ot)};function Ye(C,k,X){C.transparent===!0&&C.side===Ai&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,fl(C,k,X),C.side=Nr,C.needsUpdate=!0,fl(C,k,X),C.side=Ai):fl(C,k,X)}this.compile=function(C,k,X=null){X===null&&(X=C),m=we.get(X),m.init(),v.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==X&&C.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(_._useLegacyLights);const Y=new Set;return C.traverse(function(W){const de=W.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Re=de[Se];Ye(Re,X,W),Y.add(Re)}else Ye(de,X,W),Y.add(de)}),v.pop(),m=null,Y},this.compileAsync=function(C,k,X=null){const Y=this.compile(C,k,X);return new Promise(W=>{function de(){if(Y.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){W(C);return}setTimeout(de,10)}Ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qe=null;function xt(C){qe&&qe(C)}function Tt(){Rt.stop()}function Qe(){Rt.start()}const Rt=new Lx;Rt.setAnimationLoop(xt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(C){qe=C,pe.setAnimationLoop(C),C===null?Rt.stop():Rt.start()},pe.addEventListener("sessionstart",Tt),pe.addEventListener("sessionend",Qe),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(k),k=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,k,E),m=we.get(C,v.length),m.init(),v.push(m),ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(ge),ae=this.localClippingEnabled,Z=Fe.init(this.clippingPlanes,ae),g=me.get(C,f.length),g.init(),f.push(g),yi(C,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(U,F),this.info.render.frame++,Z===!0&&Fe.beginShadows();const X=m.state.shadowsArray;if(Q.render(X,C,k),Z===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(g,C),m.setupLights(_._useLegacyLights),k.isArrayCamera){const Y=k.cameras;for(let W=0,de=Y.length;W<de;W++){const Se=Y[W];Np(g,C,Se,Se.viewport)}}else Np(g,C,k);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(_,C,k),P.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function yi(C,k,X,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){Y&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const Se=re.update(C),Re=C.material;Re.visible&&g.push(C,Se,Re,X,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const Se=re.update(C),Re=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ue.copy(Se.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(Re)){const Le=Se.groups;for(let He=0,Ne=Le.length;He<Ne;He++){const ke=Le[He],wt=Re[ke.materialIndex];wt&&wt.visible&&g.push(C,Se,wt,X,Ue.z,ke)}}else Re.visible&&g.push(C,Se,Re,X,Ue.z,null)}}const de=C.children;for(let Se=0,Re=de.length;Se<Re;Se++)yi(de[Se],k,X,Y)}function Np(C,k,X,Y){const W=C.opaque,de=C.transmissive,Se=C.transparent;m.setupLightsView(X),Z===!0&&Fe.setGlobalState(_.clippingPlanes,X),de.length>0&&Hy(W,de,k,X),Y&&ve.viewport(w.copy(Y)),W.length>0&&cl(W,k,X),de.length>0&&cl(de,k,X),Se.length>0&&cl(Se,k,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Hy(C,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const de=be.isWebGL2;_e===null&&(_e=new Ss(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?qa:br,minFilter:Ya,samples:de?4:0})),_.getDrawingBufferSize(De),de?_e.setSize(De.x,De.y):_e.setSize(qd(De.x),qd(De.y));const Se=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(K),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Re=_.toneMapping;_.toneMapping=Rr,cl(C,X,Y),R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e);let Le=!1;for(let He=0,Ne=k.length;He<Ne;He++){const ke=k[He],wt=ke.object,Rn=ke.geometry,Ot=ke.material,Di=ke.group;if(Ot.side===Ai&&wt.layers.test(Y.layers)){const dt=Ot.side;Ot.side=Sn,Ot.needsUpdate=!0,Ip(wt,X,Y,Rn,Ot,Di),Ot.side=dt,Ot.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e)),_.setRenderTarget(Se),_.setClearColor(K,D),_.toneMapping=Re}function cl(C,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let W=0,de=C.length;W<de;W++){const Se=C[W],Re=Se.object,Le=Se.geometry,He=Y===null?Se.material:Y,Ne=Se.group;Re.layers.test(X.layers)&&Ip(Re,k,X,Le,He,Ne)}}function Ip(C,k,X,Y,W,de){C.onBeforeRender(_,k,X,Y,W,de),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(_,k,X,Y,C,de),W.transparent===!0&&W.side===Ai&&W.forceSinglePass===!1?(W.side=Sn,W.needsUpdate=!0,_.renderBufferDirect(X,k,Y,W,C,de),W.side=Nr,W.needsUpdate=!0,_.renderBufferDirect(X,k,Y,W,C,de),W.side=Ai):_.renderBufferDirect(X,k,Y,W,C,de),C.onAfterRender(_,k,X,Y,W,de)}function fl(C,k,X){k.isScene!==!0&&(k=Ae);const Y=Oe.get(C),W=m.state.lights,de=m.state.shadowsArray,Se=W.state.version,Re=xe.getParameters(C,W.state,de,k,X),Le=xe.getProgramCacheKey(Re);let He=Y.programs;Y.environment=C.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(C.isMeshStandardMaterial?B:A).get(C.envMap||Y.environment),He===void 0&&(C.addEventListener("dispose",ue),He=new Map,Y.programs=He);let Ne=He.get(Le);if(Ne!==void 0){if(Y.currentProgram===Ne&&Y.lightsStateVersion===Se)return Fp(C,Re),Ne}else Re.uniforms=xe.getUniforms(C),C.onBuild(X,Re,_),C.onBeforeCompile(Re,_),Ne=xe.acquireProgram(Re,Le),He.set(Le,Ne),Y.uniforms=Re.uniforms;const ke=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=Fe.uniform),Fp(C,Re),Y.needsLights=Wy(C),Y.lightsStateVersion=Se,Y.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Ne,Y.uniformsList=null,Ne}function Op(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=gu.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Fp(C,k){const X=Oe.get(C);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Vy(C,k,X,Y,W){k.isScene!==!0&&(k=Ae),R.resetTextureUnits();const de=k.fog,Se=Y.isMeshStandardMaterial?k.environment:null,Re=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zi,Le=(Y.isMeshStandardMaterial?B:A).get(Y.envMap||Se),He=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ne=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!X.morphAttributes.position,wt=!!X.morphAttributes.normal,Rn=!!X.morphAttributes.color;let Ot=Rr;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ot=_.toneMapping);const Di=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=Di!==void 0?Di.length:0,Ve=Oe.get(Y),Lc=m.state.lights;if(Z===!0&&(ae===!0||C!==S)){const jn=C===S&&Y.id===b;Fe.setState(Y,C,jn)}let yt=!1;Y.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Lc.state.version||Ve.outputColorSpace!==Re||W.isBatchedMesh&&Ve.batching===!1||!W.isBatchedMesh&&Ve.batching===!0||W.isInstancedMesh&&Ve.instancing===!1||!W.isInstancedMesh&&Ve.instancing===!0||W.isSkinnedMesh&&Ve.skinning===!1||!W.isSkinnedMesh&&Ve.skinning===!0||W.isInstancedMesh&&Ve.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ve.instancingColor===!1&&W.instanceColor!==null||Ve.envMap!==Le||Y.fog===!0&&Ve.fog!==de||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Fe.numPlanes||Ve.numIntersection!==Fe.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ne||Ve.morphTargets!==ke||Ve.morphNormals!==wt||Ve.morphColors!==Rn||Ve.toneMapping!==Ot||be.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(yt=!0):(yt=!0,Ve.__version=Y.version);let Gr=Ve.currentProgram;yt===!0&&(Gr=fl(Y,k,W));let kp=!1,jo=!1,Dc=!1;const qt=Gr.getUniforms(),Wr=Ve.uniforms;if(ve.useProgram(Gr.program)&&(kp=!0,jo=!0,Dc=!0),Y.id!==b&&(b=Y.id,jo=!0),kp||S!==C){qt.setValue(V,"projectionMatrix",C.projectionMatrix),qt.setValue(V,"viewMatrix",C.matrixWorldInverse);const jn=qt.map.cameraPosition;jn!==void 0&&jn.setValue(V,Ue.setFromMatrixPosition(C.matrixWorld)),be.logarithmicDepthBuffer&&qt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&qt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,jo=!0,Dc=!0)}if(W.isSkinnedMesh){qt.setOptional(V,W,"bindMatrix"),qt.setOptional(V,W,"bindMatrixInverse");const jn=W.skeleton;jn&&(be.floatVertexTextures?(jn.boneTexture===null&&jn.computeBoneTexture(),qt.setValue(V,"boneTexture",jn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(qt.setOptional(V,W,"batchingTexture"),qt.setValue(V,"batchingTexture",W._matricesTexture,R));const Uc=X.morphAttributes;if((Uc.position!==void 0||Uc.normal!==void 0||Uc.color!==void 0&&be.isWebGL2===!0)&&Be.update(W,X,Gr),(jo||Ve.receiveShadow!==W.receiveShadow)&&(Ve.receiveShadow=W.receiveShadow,qt.setValue(V,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Wr.envMap.value=Le,Wr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),jo&&(qt.setValue(V,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&Gy(Wr,Dc),de&&Y.fog===!0&&ce.refreshFogUniforms(Wr,de),ce.refreshMaterialUniforms(Wr,Y,q,z,_e),gu.upload(V,Op(Ve),Wr,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(gu.upload(V,Op(Ve),Wr,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&qt.setValue(V,"center",W.center),qt.setValue(V,"modelViewMatrix",W.modelViewMatrix),qt.setValue(V,"normalMatrix",W.normalMatrix),qt.setValue(V,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const jn=Y.uniformsGroups;for(let Nc=0,Xy=jn.length;Nc<Xy;Nc++)if(be.isWebGL2){const zp=jn[Nc];se.update(zp,Gr),se.bind(zp,Gr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gr}function Gy(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Wy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,k,X){Oe.get(C.texture).__webglTexture=k,Oe.get(C.depthTexture).__webglTexture=X;const Y=Oe.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const X=Oe.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){E=C,M=k,T=X;let Y=!0,W=null,de=!1,Se=!1;if(C){const Le=Oe.get(C);Le.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):Le.__webglFramebuffer===void 0?R.setupRenderTarget(C):Le.__hasExternalTextures&&R.rebindTextures(C,Oe.get(C.texture).__webglTexture,Oe.get(C.depthTexture).__webglTexture);const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Se=!0);const Ne=Oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?W=Ne[k][X]:W=Ne[k],de=!0):be.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?W=Oe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[X]:W=Ne,w.copy(C.viewport),I.copy(C.scissor),H=C.scissorTest}else w.copy(G).multiplyScalar(q).floor(),I.copy($).multiplyScalar(q).floor(),H=J;if(ve.bindFramebuffer(V.FRAMEBUFFER,W)&&be.drawBuffers&&Y&&ve.drawBuffers(C,W),ve.viewport(w),ve.scissor(I),ve.setScissorTest(H),de){const Le=Oe.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,X)}else if(Se){const Le=Oe.get(C.texture),He=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Le.__webglTexture,X||0,He)}b=-1},this.readRenderTargetPixels=function(C,k,X,Y,W,de,Se){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){ve.bindFramebuffer(V.FRAMEBUFFER,Re);try{const Le=C.texture,He=Le.format,Ne=Le.type;if(He!==_i&&fe.convert(He)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ne===qa&&(Ee.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==br&&fe.convert(Ne)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===mr&&(be.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&X>=0&&X<=C.height-W&&V.readPixels(k,X,Y,W,fe.convert(He),fe.convert(Ne),de)}finally{const Le=E!==null?Oe.get(E).__webglFramebuffer:null;ve.bindFramebuffer(V.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(C,k,X=0){const Y=Math.pow(2,-X),W=Math.floor(k.image.width*Y),de=Math.floor(k.image.height*Y);R.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,C.x,C.y,W,de),ve.unbindTexture()},this.copyTextureToTexture=function(C,k,X,Y=0){const W=k.image.width,de=k.image.height,Se=fe.convert(X.format),Re=fe.convert(X.type);R.setTexture2D(X,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,W,de,Se,Re,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Se,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,Se,Re,k.image),Y===0&&X.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X,Y,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=C.max.x-C.min.x+1,Se=C.max.y-C.min.y+1,Re=C.max.z-C.min.z+1,Le=fe.convert(Y.format),He=fe.convert(Y.type);let Ne;if(Y.isData3DTexture)R.setTexture3D(Y,0),Ne=V.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Ne=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const ke=V.getParameter(V.UNPACK_ROW_LENGTH),wt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Rn=V.getParameter(V.UNPACK_SKIP_PIXELS),Ot=V.getParameter(V.UNPACK_SKIP_ROWS),Di=V.getParameter(V.UNPACK_SKIP_IMAGES),dt=X.isCompressedTexture?X.mipmaps[W]:X.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,dt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,dt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(Ne,W,k.x,k.y,k.z,de,Se,Re,Le,He,dt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ne,W,k.x,k.y,k.z,de,Se,Re,Le,dt.data)):V.texSubImage3D(Ne,W,k.x,k.y,k.z,de,Se,Re,Le,He,dt),V.pixelStorei(V.UNPACK_ROW_LENGTH,ke),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,wt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Rn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ot),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Di),W===0&&Y.generateMipmaps&&V.generateMipmap(Ne),ve.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){M=0,T=0,E=null,ve.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cp?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Mc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?fs:gx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?zt:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bR extends Kd{}bR.prototype.isWebGL1Renderer=!0;class hp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new hp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pp extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Aa extends zn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qs=new Et,pg=new Et,Ql=[],mg=new As,PR=new Et,oa=new ti,aa=new Cs;class kx extends ti{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,PR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new As),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),mg.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(mg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),aa.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qs),pg.multiplyMatrices(i,qs),oa.matrixWorld=pg,oa.raycast(e,Ql);for(let o=0,a=Ql.length;o<a;o++){const l=Ql[o];l.instanceId=s,l.object=this,t.push(l)}Ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zx extends Wo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _g=new N,gg=new N,vg=new Et,kf=new Ec,Jl=new Cs;class LR extends dn{constructor(e=new Cn,t=new zx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)_g.fromBufferAttribute(t,r-1),gg.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=_g.distanceTo(gg);e.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=s,e.ray.intersectsSphere(Jl)===!1)return;vg.copy(r).invert(),kf.copy(e.ray).applyMatrix4(vg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new N,c=new N,d=new N,h=new N,p=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const f=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let _=f,y=v-1;_<y;_+=p){const M=x.getX(_),T=x.getX(_+1);if(u.fromBufferAttribute(m,M),c.fromBufferAttribute(m,T),kf.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=f,y=v-1;_<y;_+=p){if(u.fromBufferAttribute(m,_),c.fromBufferAttribute(m,_+1),kf.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const xg=new N,yg=new N;class DR extends LR{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)xg.fromBufferAttribute(t,r),yg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xg.distanceTo(yg);e.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bx extends Wo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sg=new Et,Zd=new Ec,eu=new Cs,tu=new N;class UR extends dn{constructor(e=new Cn,t=new Bx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eu.copy(i.boundingSphere),eu.applyMatrix4(r),eu.radius+=s,e.ray.intersectsSphere(eu)===!1)return;Sg.copy(r).invert(),Zd.copy(e.ray).applyMatrix4(Sg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p;x<g;x++){const m=u.getX(x);tu.fromBufferAttribute(d,m),Mg(tu,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,g=p;x<g;x++)tu.fromBufferAttribute(d,x),Mg(tu,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mg(n,e,t,i,r,s,o){const a=Zd.distanceSqToPoint(n);if(a<t){const l=new N;Zd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class mp extends Cn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(s.slice(),3)),this.setAttribute("uv",new tn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new N,y=new N,M=new N;for(let T=0;T<t.length;T+=3)p(t[T+0],_),p(t[T+1],y),p(t[T+2],M),l(_,y,M,v)}function l(v,_,y,M){const T=M+1,E=[];for(let b=0;b<=T;b++){E[b]=[];const S=v.clone().lerp(y,b/T),w=_.clone().lerp(y,b/T),I=T-b;for(let H=0;H<=I;H++)H===0&&b===T?E[b][H]=S:E[b][H]=S.clone().lerp(w,H/I)}for(let b=0;b<T;b++)for(let S=0;S<2*(T-b)-1;S++){const w=Math.floor(S/2);S%2===0?(h(E[b][w+1]),h(E[b+1][w]),h(E[b][w])):(h(E[b][w+1]),h(E[b+1][w+1]),h(E[b+1][w]))}}function u(v){const _=new N;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(v),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function c(){const v=new N;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const y=m(v)/2/Math.PI+.5,M=f(v)/Math.PI+.5;o.push(y,1-M)}x(),d()}function d(){for(let v=0;v<o.length;v+=6){const _=o[v+0],y=o[v+2],M=o[v+4],T=Math.max(_,y,M),E=Math.min(_,y,M);T>.9&&E<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function p(v,_){const y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function x(){const v=new N,_=new N,y=new N,M=new N,T=new Ie,E=new Ie,b=new Ie;for(let S=0,w=0;S<s.length;S+=9,w+=6){v.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),T.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),b.set(o[w+4],o[w+5]),M.copy(v).add(_).add(y).divideScalar(3);const I=m(M);g(T,w+0,v,I),g(E,w+2,_,I),g(b,w+4,y,I)}}function g(v,_,y,M){M<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.vertices,e.indices,e.radius,e.details)}}class Cc extends mp{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cc(e.radius,e.detail)}}class NR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eg(){return(typeof performance>"u"?Date:performance).now()}class Tg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class IR extends DR{constructor(e=10,t=10,i=4473924,r=8947848){i=new $e(i),r=new $e(r);const s=t/2,o=e/t,a=e/2,l=[],u=[];for(let h=0,p=0,x=-a;h<=t;h++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const g=h===s?i:r;g.toArray(u,p),p+=3,g.toArray(u,p),p+=3,g.toArray(u,p),p+=3,g.toArray(u,p),p+=3}const c=new Cn;c.setAttribute("position",new tn(l,3)),c.setAttribute("color",new tn(u,3));const d=new zx({vertexColors:!0,toneMapped:!1});super(c,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);const wg={type:"change"},zf={type:"start"},Ag={type:"end"},nu=new Ec,Cg=new ur,OR=Math.cos(70*MT.DEG2RAD);class FR extends ws{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",we),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",we),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(wg),i.update(),s=r.NONE},this.update=function(){const P=new N,se=new Ms().setFromUnitVectors(e.up,new N(0,1,0)),ye=se.clone().invert(),pe=new N,te=new Ms,L=new N,oe=2*Math.PI;return function(Ce=null){const Te=i.object.position;P.copy(Te).sub(i.target),P.applyQuaternion(se),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&H(w(Ce)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ye=i.minAzimuthAngle,qe=i.maxAzimuthAngle;isFinite(Ye)&&isFinite(qe)&&(Ye<-Math.PI?Ye+=oe:Ye>Math.PI&&(Ye-=oe),qe<-Math.PI?qe+=oe:qe>Math.PI&&(qe-=oe),Ye<=qe?a.theta=Math.max(Ye,Math.min(qe,a.theta)):a.theta=a.theta>(Ye+qe)/2?Math.max(Ye,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=G(a.radius):a.radius=G(a.radius*u),P.setFromSpherical(a),P.applyQuaternion(ye),Te.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let xt=!1;if(i.zoomToCursor&&T){let Tt=null;if(i.object.isPerspectiveCamera){const Qe=P.length();Tt=G(Qe*u);const Rt=Qe-Tt;i.object.position.addScaledVector(y,Rt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new N(M.x,M.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),xt=!0;const Rt=new N(M.x,M.y,0);Rt.unproject(i.object),i.object.position.sub(Rt).add(Qe),i.object.updateMatrixWorld(),Tt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Tt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Tt).add(i.object.position):(nu.origin.copy(i.object.position),nu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(nu.direction))<OR?e.lookAt(i.target):(Cg.setFromNormalAndCoplanarPoint(i.object.up,i.target),nu.intersectPlane(Cg,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),xt=!0);return u=1,T=!1,xt||pe.distanceToSquared(i.object.position)>o||8*(1-te.dot(i.object.quaternion))>o||L.distanceToSquared(i.target)>0?(i.dispatchEvent(wg),pe.copy(i.object.position),te.copy(i.object.quaternion),L.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Je),i.domElement.removeEventListener("pointerdown",R),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",we),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Tg,l=new Tg;let u=1;const c=new N,d=new Ie,h=new Ie,p=new Ie,x=new Ie,g=new Ie,m=new Ie,f=new Ie,v=new Ie,_=new Ie,y=new N,M=new Ie;let T=!1;const E=[],b={};let S=!1;function w(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function I(P){const se=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*se)}function H(P){l.theta-=P}function K(P){l.phi-=P}const D=function(){const P=new N;return function(ye,pe){P.setFromMatrixColumn(pe,0),P.multiplyScalar(-ye),c.add(P)}}(),O=function(){const P=new N;return function(ye,pe){i.screenSpacePanning===!0?P.setFromMatrixColumn(pe,1):(P.setFromMatrixColumn(pe,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(ye),c.add(P)}}(),z=function(){const P=new N;return function(ye,pe){const te=i.domElement;if(i.object.isPerspectiveCamera){const L=i.object.position;P.copy(L).sub(i.target);let oe=P.length();oe*=Math.tan(i.object.fov/2*Math.PI/180),D(2*ye*oe/te.clientHeight,i.object.matrix),O(2*pe*oe/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(ye*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),O(pe*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(P,se){if(!i.zoomToCursor)return;T=!0;const ye=i.domElement.getBoundingClientRect(),pe=P-ye.left,te=se-ye.top,L=ye.width,oe=ye.height;M.x=pe/L*2-1,M.y=-(te/oe)*2+1,y.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function G(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function $(P){d.set(P.clientX,P.clientY)}function J(P){F(P.clientX,P.clientX),f.set(P.clientX,P.clientY)}function j(P){x.set(P.clientX,P.clientY)}function Z(P){h.set(P.clientX,P.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const se=i.domElement;H(2*Math.PI*p.x/se.clientHeight),K(2*Math.PI*p.y/se.clientHeight),d.copy(h),i.update()}function ae(P){v.set(P.clientX,P.clientY),_.subVectors(v,f),_.y>0?q(I(_.y)):_.y<0&&U(I(_.y)),f.copy(v),i.update()}function _e(P){g.set(P.clientX,P.clientY),m.subVectors(g,x).multiplyScalar(i.panSpeed),z(m.x,m.y),x.copy(g),i.update()}function ge(P){F(P.clientX,P.clientY),P.deltaY<0?U(I(P.deltaY)):P.deltaY>0&&q(I(P.deltaY)),i.update()}function De(P){let se=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),se=!0;break}se&&(P.preventDefault(),i.update())}function Ue(P){if(E.length===1)d.set(P.pageX,P.pageY);else{const se=fe(P),ye=.5*(P.pageX+se.x),pe=.5*(P.pageY+se.y);d.set(ye,pe)}}function Ae(P){if(E.length===1)x.set(P.pageX,P.pageY);else{const se=fe(P),ye=.5*(P.pageX+se.x),pe=.5*(P.pageY+se.y);x.set(ye,pe)}}function je(P){const se=fe(P),ye=P.pageX-se.x,pe=P.pageY-se.y,te=Math.sqrt(ye*ye+pe*pe);f.set(0,te)}function V(P){i.enableZoom&&je(P),i.enablePan&&Ae(P)}function Vt(P){i.enableZoom&&je(P),i.enableRotate&&Ue(P)}function Ee(P){if(E.length==1)h.set(P.pageX,P.pageY);else{const ye=fe(P),pe=.5*(P.pageX+ye.x),te=.5*(P.pageY+ye.y);h.set(pe,te)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const se=i.domElement;H(2*Math.PI*p.x/se.clientHeight),K(2*Math.PI*p.y/se.clientHeight),d.copy(h)}function be(P){if(E.length===1)g.set(P.pageX,P.pageY);else{const se=fe(P),ye=.5*(P.pageX+se.x),pe=.5*(P.pageY+se.y);g.set(ye,pe)}m.subVectors(g,x).multiplyScalar(i.panSpeed),z(m.x,m.y),x.copy(g)}function ve(P){const se=fe(P),ye=P.pageX-se.x,pe=P.pageY-se.y,te=Math.sqrt(ye*ye+pe*pe);v.set(0,te),_.set(0,Math.pow(v.y/f.y,i.zoomSpeed)),q(_.y),f.copy(v);const L=(P.pageX+se.x)*.5,oe=(P.pageY+se.y)*.5;F(L,oe)}function ot(P){i.enableZoom&&ve(P),i.enablePan&&be(P)}function Oe(P){i.enableZoom&&ve(P),i.enableRotate&&Ee(P)}function R(P){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",B)),Be(P),P.pointerType==="touch"?Fe(P):ie(P))}function A(P){i.enabled!==!1&&(P.pointerType==="touch"?Q(P):ee(P))}function B(P){Pe(P),E.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(Ag),s=r.NONE}function ie(P){let se;switch(P.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Ps.DOLLY:if(i.enableZoom===!1)return;J(P),s=r.DOLLY;break;case Ps.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;j(P),s=r.PAN}else{if(i.enableRotate===!1)return;$(P),s=r.ROTATE}break;case Ps.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;$(P),s=r.ROTATE}else{if(i.enablePan===!1)return;j(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(zf)}function ee(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(P);break;case r.DOLLY:if(i.enableZoom===!1)return;ae(P);break;case r.PAN:if(i.enablePan===!1)return;_e(P);break}}function re(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(zf),ge(xe(P)),i.dispatchEvent(Ag))}function xe(P){const se=P.deltaMode,ye={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(se){case 1:ye.deltaY*=16;break;case 2:ye.deltaY*=100;break}return P.ctrlKey&&!S&&(ye.deltaY*=10),ye}function ce(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",me,{passive:!0,capture:!0}))}function we(P){i.enabled===!1||i.enablePan===!1||De(P)}function Fe(P){switch(Me(P),E.length){case 1:switch(i.touches.ONE){case Ls.ROTATE:if(i.enableRotate===!1)return;Ue(P),s=r.TOUCH_ROTATE;break;case Ls.PAN:if(i.enablePan===!1)return;Ae(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(P),s=r.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Vt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(zf)}function Q(P){switch(Me(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ee(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ot(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Oe(P),i.update();break;default:s=r.NONE}}function Je(P){i.enabled!==!1&&P.preventDefault()}function Be(P){E.push(P.pointerId)}function Pe(P){delete b[P.pointerId];for(let se=0;se<E.length;se++)if(E[se]==P.pointerId){E.splice(se,1);return}}function Me(P){let se=b[P.pointerId];se===void 0&&(se=new Ie,b[P.pointerId]=se),se.set(P.pageX,P.pageY)}function fe(P){const se=P.pointerId===E[0]?E[1]:E[0];return b[se]}i.domElement.addEventListener("contextmenu",Je),i.domElement.addEventListener("pointerdown",R),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}function Bi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Hx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},_p,jt,ft,ni=1e8,rt=1/ni,Qd=Math.PI*2,kR=Qd/4,zR=0,Vx=Math.sqrt,BR=Math.cos,HR=Math.sin,Ht=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Qi=function(e){return typeof e=="number"},gp=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},Mn=function(e){return e!==!1},vp=function(){return typeof window<"u"},iu=function(e){return Mt(e)||Ht(e)},Gx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,VR=/random\([^)]+\)/g,GR=/,\s*/g,Rg=/(?:-?\.?\d|\.)+/gi,Wx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,co=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xx=/[+-]=-?[.\d]+/,WR=/[^,'"\[\]\s]+/gi,XR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Ei,Jd,xp,Vn={},Qu={},jx,Yx=function(e){return(Qu=Oo(e,Vn))&&An},yp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$a=function(e,t){return!t&&console.warn(e)},qx=function(e,t){return e&&(Vn[e]=t)&&Qu&&(Qu[e]=t)||Vn},Ka=function(){return 0},jR={suppressEvents:!0,isStart:!0,kill:!1},vu={suppressEvents:!0,kill:!1},YR={suppressEvents:!0},Sp={},Pr=[],eh={},$x,Dn={},Hf={},bg=30,xu=[],Mp="",Ep=function(e){var t=e[0],i,r;if(Li(t)||Mt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=xu.length;r--&&!xu[r].targetTest(t););i=xu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new xy(e[r],i)))||e.splice(r,1);return e},ds=function(e){return e._gsap||Ep(ii(e))[0]._gsap},Kx=function(e,t,i){return(i=e[t])&&Mt(i)?e[t]():gp(i)&&e.getAttribute&&e.getAttribute(t)||i},En=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},So=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},qR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ju=function(){var e=Pr.length,t=Pr.slice(0),i,r;for(eh={},Pr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Tp=function(e){return!!(e._initted||e._startAt||e.add)},Zx=function(e,t,i,r){Pr.length&&!jt&&Ju(),e.render(t,i,!!(jt&&t<0&&Tp(e))),Pr.length&&!jt&&Ju()},Qx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(WR).length<2?t:Ht(e)?e.trim():e},Jx=function(e){return e},Gn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$R=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Oo=function(e,t){for(var i in t)e[i]=t[i];return e},Pg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Li(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ec=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ca=function(e){var t=e.parent||mt,i=e.keyframes?$R(nn(e.keyframes)):Gn;if(Mn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},KR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},ey=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Rc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ZR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},th=function(e,t,i,r){return e._startAt&&(jt?e._startAt.revert(vu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},QR=function n(e){return!e||e._ts&&n(e.parent)},Lg=function(e){return e._repeat?Fo(e._tTime,e=e.duration()+e._rDelay)*e:0},Fo=function(e,t){var i=Math.floor(e=ht(e/t));return e&&i===e?i-1:i},tc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bc=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},Pc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bc(e),i._dirty||hs(i,e)),e},ty=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=tc(e.rawTime(),t),(!t._dur||ul(0,t.totalDuration(),i)-t._tTime>rt)&&t.render(i,!0)),hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-rt}},Ci=function(e,t,i,r){return t.parent&&Or(t),t._start=ht((Qi(i)?i:i||e!==mt?qn(e,i,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ey(e,t,"_first","_last",e._sort?"_start":0),nh(t)||(e._recent=t),r||ty(e,t),e._ts<0&&Pc(e,e._tTime),e},ny=function(e,t){return(Vn.ScrollTrigger||yp("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},iy=function(e,t,i,r,s){if(Ap(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$x!==Un.frame)return Pr.push(e),e._lazy=[s,r],1},JR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},nh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},eb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&JR(e)&&!(!e._initted&&nh(e))||(e._ts<0||e._dp._ts<0)&&!nh(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=ul(0,e._tDur,t),c=Fo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Fo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||jt||r||e._zTime===rt||!t&&e._zTime){if(!e._initted&&iy(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?rt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&th(e,t,i,!0),e._onUpdate&&!i&&In(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Or(e,1),!i&&!jt&&(In(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ko=function(e,t,i,r){var s=e._repeat,o=ht(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ht(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Pc(e,e._tTime=e._tDur*a),e.parent&&bc(e),i||hs(e.parent,e),e},Dg=function(e){return e instanceof cn?hs(e):ko(e,e._dur)},nb={_start:0,endTime:Ka,totalDuration:Ka},qn=function n(e,t,i){var r=e.labels,s=e._recent||nb,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,u;return Ht(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(nn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ra=function(e,t,i){var r=Qi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;o.immediateRender=Mn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Pt(t[0],o,t[s+1])},Vr=function(e,t){return e||e===0?t(e):t},ul=function(e,t,i){return i<e?e:i>t?t:i},en=function(e,t){return!Ht(e)||!(t=XR.exec(e))?"":t[1]},ib=function(e,t,i){return Vr(i,function(r){return ul(e,t,r)})},ih=[].slice,ry=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Ei},rb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ht(r)&&!t||ry(r,1)?(s=i).push.apply(s,ii(r)):i.push(r)})||i},ii=function(e,t,i){return ft&&!t&&ft.selector?ft.selector(e):Ht(e)&&!i&&(Jd||!zo())?ih.call((t||xp).querySelectorAll(e),0):nn(e)?rb(e,i):ry(e)?ih.call(e,0):e?[e]:[]},rh=function(e){return e=ii(e)[0]||$a("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ii(t,i.querySelectorAll?i:i===e?$a("Invalid scope")||xp.createElement("div"):e)}},sy=function(e){return e.sort(function(){return .5-Math.random()})},oy=function(e){if(Mt(e))return e;var t=Li(e)?e:{each:e},i=ps(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Ht(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,x){var g=(x||t).length,m=o[g],f,v,_,y,M,T,E,b,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ni])[1],!S){for(E=-ni;E<(E=x[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],f=l?Math.min(S,g)*c-.5:r%S,v=S===ni?0:l?g*d/S-.5:r/S|0,E=0,b=ni,T=0;T<g;T++)_=T%S-f,y=v-(T/S|0),m[T]=M=u?Math.abs(u==="y"?y:_):Vx(_*_+y*y),M>E&&(E=M),M<b&&(b=M);r==="random"&&sy(m),m.max=E-b,m.min=b,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=en(t.amount||t.each)||0,i=i&&g<0?_y(i):i}return g=(m[h]-m.min)/m.max||0,ht(m.b+(i?i(g):g)*m.v)+m.u}},sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ht(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Qi(i)?0:en(i))}},ay=function(e,t){var i=nn(e),r,s;return!i&&Li(e)&&(r=i=e.radius||ni,e.values?(e=ii(e.values),(s=!Qi(e[0]))&&(r*=r)):e=sh(e.increment)),Vr(t,i?Mt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ni,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Qi(o)?c:c+en(o)}:sh(e))},ly=function(e,t,i,r){return Vr(nn(e)?!t:i===!0?!!(i=0):!r,function(){return nn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},sb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ob=function(e,t){return function(i){return e(parseFloat(i))+(t||en(i))}},ab=function(e,t,i){return cy(e,t,0,1,i)},uy=function(e,t,i){return Vr(i,function(r){return e[~~t(r)]})},lb=function n(e,t,i){var r=t-e;return nn(e)?uy(e,n(0,e.length),t):Vr(i,function(s){return(r+(s-e)%r)%r+e})},ub=function n(e,t,i){var r=t-e,s=r*2;return nn(e)?uy(e,n(0,e.length-1),t):Vr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Za=function(e){return e.replace(VR,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(GR);return ly(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},cy=function(e,t,i,r,s){var o=t-e,a=r-i;return Vr(s,function(l){return i+((l-e)/o*a||0)})},cb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Ht(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var g=Math.min(h,~~x);return c[g](x-g)},i=t}else r||(e=Oo(nn(e)?[]:{},e));if(!c){for(l in t)wp.call(a,e,l,"get",t[l]);s=function(x){return bp(x,a)||(o?e.p:e)}}}return Vr(i,s)},Ug=function(e,t,i){var r=e.labels,s=ni,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},In=function(e,t,i){var r=e.vars,s=r[t],o=ft,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Pr.length&&Ju(),a&&(ft=a),c=l?s.apply(u,l):s.call(u),ft=o,c},pa=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jt),e.progress()<1&&In(e,"onInterrupt"),e},fo,fy=[],dy=function(e){if(e)if(e=!e.name&&e.default||e,vp()||e.headless){var t=e.name,i=Mt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ka,render:bp,add:wp,kill:Ab,modifier:wb,rawVars:0},o={targetTest:0,get:0,getSetter:Rp,aliases:{},register:0};if(zo(),e!==r){if(Dn[t])return;Gn(r,Gn(ec(e,s),o)),Oo(r.prototype,Oo(s,ec(e,o))),Dn[r.prop=t]=r,e.targetTest&&(xu.push(r),Sp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qx(t,r),e.register&&e.register(An,r,Tn)}else fy.push(e)},it=255,ma={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},Vf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*it+.5|0},hy=function(e,t,i){var r=e?Qi(e)?[e>>16,e>>8&it,e&it]:0:ma.black,s,o,a,l,u,c,d,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])r=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(Rg),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Vf(l+1/3,s,o),r[1]=Vf(l,s,o),r[2]=Vf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Wx),i&&r.length<4&&(r[3]=1),r}else r=e.match(Rg)||ma.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},py=function(e){var t=[],i=[],r=-1;return e.split(Lr).forEach(function(s){var o=s.match(co)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Ng=function(e,t,i){var r="",s=(e+r).match(Lr),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=hy(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=py(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Lr,"1").split(co),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Lr),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Lr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),fb=/hsl[a]?\(/,my=function(e){var t=e.join(" "),i;if(Lr.lastIndex=0,Lr.test(t))return i=fb.test(t),e[1]=Ng(e[1],i),e[0]=Ng(e[0],i,py(e[1])),!0},Qa,Un=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,x=function g(m){var f=n()-r,v=m===!0,_,y,M,T;if((f>e||f<0)&&(i+=f-t),r+=f,M=r-i,_=M-o,(_>0||v)&&(T=++d.frame,h=M-d.time*1e3,d.time=M=M/1e3,o+=_+(_>=s?4:s-_),y=1),v||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](M,h,T,m)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){jx&&(!Jd&&vp()&&(Ei=Jd=window,xp=Ei.document||{},Vn.gsap=An,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(An.version),Yx(Qu||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),fy.forEach(dy)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Qa=1,x(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Qa=0,u=Ka},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,v){var _=f?function(y,M,T,E){m(y,M,T,E),d.remove(_)}:m;return d.remove(m),a[v?"unshift":"push"](_),zo(),_},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),zo=function(){return!Qa&&Un.wake()},Ke={},db=/^[\d.\-M][\d.\-,\s]/,hb=/["']/g,pb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(hb,"").trim():+u,r=l.substr(a+1).trim();return t},mb=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},_b=function(e){var t=(e+"").split("("),i=Ke[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[pb(t[1])]:mb(e).split(",").map(Qx)):Ke._CE&&db.test(e)?Ke._CE("",e):i},_y=function(e){return function(t){return 1-e(1-t)}},gy=function n(e,t){for(var i=e._first,r;i;)i instanceof cn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ps=function(e,t){return e&&(Mt(e)?e:Ke[e]||_b(e))||t},Rs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return En(e,function(a){Ke[a]=Vn[a]=s,Ke[o=a.toLowerCase()]=i;for(var l in s)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=s[l]}),s},vy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Qd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*HR((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:vy(a);return s=Qd/s,l.config=function(u,c){return n(e,u,c)},l},Wf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:vy(i);return r.config=function(s){return n(e,s)},r};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Rs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;Rs("Elastic",Gf("in"),Gf("out"),Gf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Rs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Rs("Circ",function(n){return-(Vx(1-n*n)-1)});Rs("Sine",function(n){return n===1?1:-BR(n*kR)+1});Rs("Back",Wf("in"),Wf("out"),Wf());Ke.SteppedEase=Ke.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-rt;return function(a){return((r*ul(0,o,a)|0)+s)*i}}};Io.ease=Ke["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Mp+=n+","+n+"Params,"});var xy=function(e,t){this.id=zR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kx,this.set=t?t.getSetter:Rp},Ja=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ko(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),Qa||Un.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ko(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(zo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Pc(this,i),!s._dp||s.parent||ty(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Zx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Lg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Lg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Fo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?tc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-rt?0:this._rts,this.totalTime(ul(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),bc(this),ZR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ci(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Mn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=YR);var r=jt;return jt=i,Tp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),jt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Dg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Dg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(qn(this,i),Mn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Mn(r)),this._dur||(this._zTime=-rt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-rt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Mt(i)?i:Jx,l=function(){var c=r.then;r.then=null,s&&s(),Mt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){pa(this)},n}();Gn(Ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var cn=function(n){Hx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Mn(i.sortChildren),mt&&Ci(i.parent||mt,Bi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&ny(Bi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ra(0,arguments,this),this},t.from=function(r,s,o){return Ra(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ra(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(r,s,qn(this,o),1),this},t.call=function(r,s,o){return Ci(this,Pt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Pt(r,o,qn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ca(o).immediateRender=Mn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Ca(a).immediateRender=Mn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:ht(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,g,m,f,v,_,y,M,T,E;if(this!==mt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,_=this._ts,f=!_,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=ht(c%m),c===l?(g=this._repeat,h=u):(M=ht(c/m),g=~~M,g&&g===M&&(h=u,g--),h>u&&(h=u)),M=Fo(this._tTime,m),!a&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),T&&g&1&&(h=u-h,E=1),g!==M&&!this._lock){var b=T&&M&1,S=b===(T&&g&1);if(g<M&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(E?0:ht(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,M=g),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;gy(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=tb(this,ht(a),ht(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!M&&(In(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){v=0,x&&(c+=this._zTime=-rt);break}}p=x}else{p=this._last;for(var w=r<0?r:h;p;){if(x=p._prev,(p._act||w<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,o||jt&&Tp(p)),h!==this._time||!this._ts&&!f){v=0,x&&(c+=this._zTime=w?-rt:rt);break}}p=x}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-rt)._zTime=h>=a?1:-1,this._ts))return this._start=y,bc(this),this.render(r,s,o);this._onUpdate&&!s&&In(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Or(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(In(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Qi(s)||(s=qn(this,s,r)),!(r instanceof Ja)){if(nn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ht(r))return this.addLabel(r,s);if(Mt(r))r=Pt.delayedCall(0,r);else return this}return this!==r?Ci(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Pt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ht(r)?this.removeLabel(r):Mt(r)?this.killTweensOf(r):(r.parent===this&&Rc(this,r),r===this._recent&&(this._recent=this._last),hs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(Un.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=qn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Pt.delayedCall(0,s||Ka,o);return a.data="isPause",this._hasPause=1,Ci(this,a,qn(this,r))},t.removePause=function(r){var s=this._first;for(r=qn(this,r);s;)s._start===r&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)_r!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ii(r),l=this._first,u=Qi(s),c;l;)l instanceof Pt?qR(l._targets,a)&&(u?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=qn(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,x=Pt.to(o,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||rt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&ko(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,d||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Gn({startAt:{time:qn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ug(this,qn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ug(this,qn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=ht(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return hs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),hs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ni,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ci(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ht(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ko(o,o===mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(mt._ts&&(Zx(mt,tc(r,mt)),$x=Un.frame),Un.frame>=bg){bg+=Bn.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&Bn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},e}(Ja);Gn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var gb=function(e,t,i,r,s,o,a){var l=new Tn(this._pt,e,t,0,1,wy,null,s),u=0,c=0,d,h,p,x,g,m,f,v;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Za(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(Bf)||[];d=Bf.exec(r);)x=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:x.charAt(1)==="="?So(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=Bf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Xx.test(r)||f)&&(l.e=0),this._pt=l,l},wp=function(e,t,i,r,s,o,a,l,u,c){Mt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:Mt(d)?u?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Mt(d)?u?Mb:Ey:Cp,x;if(Ht(r)&&(~r.indexOf("random(")&&(r=Za(r)),r.charAt(1)==="="&&(x=So(h,r)+(en(h)||0),(x||x===0)&&(r=x))),!c||h!==r||oh)return!isNaN(h*r)&&r!==""?(x=new Tn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?Tb:Ty,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&yp(t,r),gb.call(this,e,t,h,r,p,l||Bn.stringFilter,u))},vb=function(e,t,i,r,s){if(Mt(e)&&(e=ba(e,s,t,i,r)),!Li(e)||e.style&&e.nodeType||nn(e)||Gx(e))return Ht(e)?ba(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ba(e[a],s,t,i,r);return o},yy=function(e,t,i,r,s,o){var a,l,u,c;if(Dn[e]&&(a=new Dn[e]).init(s,a.rawVars?t[e]:vb(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Tn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==fo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},_r,oh,Ap=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,x=e._dur,g=e._startAt,m=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:m,_=e._overwrite==="auto"&&!_p,y=e.timeline,M,T,E,b,S,w,I,H,K,D,O,z,q;if(y&&(!h||!s)&&(s="none"),e._ease=ps(s,Io.ease),e._yEase=d?_y(ps(d===!0?s:d,Io.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(H=m[0]?ds(m[0]).harness:0,z=H&&r[H.prop],M=ec(r,Sp),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&x?vu:jR),g._lazy=0),o){if(Or(e._startAt=Pt.set(m,Gn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Mn(l),startAt:null,delay:0,onUpdate:u&&function(){return In(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt||!a&&!p)&&e._startAt.revert(vu),a&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&x&&!g){if(t&&(a=!1),E=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Mn(l),immediateRender:a,stagger:0,parent:f},M),z&&(E[H.prop]=z),Or(e._startAt=Pt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt?e._startAt.revert(vu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&Mn(l)||l&&!x,T=0;T<m.length;T++){if(S=m[T],I=S._gsap||Ep(m)[T]._gsap,e._ptLookup[T]=D={},eh[I.id]&&Pr.length&&Ju(),O=v===m?T:v.indexOf(S),H&&(K=new H).init(S,z||M,e,O,v)!==!1&&(e._pt=b=new Tn(e._pt,S,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(U){D[U]=b}),K.priority&&(w=1)),!H||z)for(E in M)Dn[E]&&(K=yy(E,M,e,O,S,v))?K.priority&&(w=1):D[E]=b=wp.call(e,S,E,"get",M[E],O,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),_&&e._pt&&(_r=e,mt.killTweensOf(S,D,e.globalTime(t)),q=!e.parent,_r=0),e._pt&&l&&(eh[I.id]=1)}w&&Ay(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&y.render(ni,!0,!0)},xb=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return oh=1,e.vars[t]="+=0",Ap(e,a),oh=0,l?$a(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=At(i)+en(d.e)),d.b&&(d.b=c.s+en(d.b))},yb=function(e,t){var i=e[0]?ds(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Oo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Sb=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(nn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ba=function(e,t,i,r,s){return Mt(e)?e.call(t,i,r,s):Ht(e)&&~e.indexOf("random(")?Za(e):e},Sy=Mp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",My={};En(Sy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return My[n]=1});var Pt=function(n){Hx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ca(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,v=r.parent||mt,_=(nn(i)||Gx(i)?Qi(i[0]):"length"in r)?[i]:ii(i),y,M,T,E,b,S,w,I;if(a._targets=_.length?Ep(_):$a("GSAP target "+i+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||iu(u)||iu(c)){if(r=a.vars,y=a.timeline=new cn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:_}),y.kill(),y.parent=y._dp=Bi(a),y._start=0,h||iu(u)||iu(c)){if(E=_.length,w=h&&oy(h),Li(h))for(b in h)~Sy.indexOf(b)&&(I||(I={}),I[b]=h[b]);for(M=0;M<E;M++)T=ec(r,My),T.stagger=0,f&&(T.yoyoEase=f),I&&Oo(T,I),S=_[M],T.duration=+ba(u,Bi(a),M,S,_),T.delay=(+ba(c,Bi(a),M,S,_)||0)-a._delay,!h&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(S,T,w?w(M,S,_):0),y._ease=Ke.none;y.duration()?u=c=0:a.timeline=0}else if(x){Ca(Gn(y.vars.defaults,{ease:"none"})),y._ease=ps(x.ease||r.ease||"none");var H=0,K,D,O;if(nn(x))x.forEach(function(z){return y.to(_,z,">")}),y.duration();else{T={};for(b in x)b==="ease"||b==="easeEach"||Sb(b,x[b],T,x.easeEach);for(b in T)for(K=T[b].sort(function(z,q){return z.t-q.t}),H=0,M=0;M<K.length;M++)D=K[M],O={ease:D.e,duration:(D.t-(M?K[M-1].t:0))/100*u},O[b]=D.v,y.to(_,O,H),H+=O.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!_p&&(_r=Bi(a),mt.killTweensOf(_),_r=0),Ci(v,Bi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===ht(v._time)&&Mn(d)&&QR(Bi(a))&&v.data!=="nested")&&(a._tTime=-rt,a.render(Math.max(0,-c)||0)),m&&ny(Bi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-rt&&!c?l:r<rt?0:r,h,p,x,g,m,f,v,_,y;if(!u)eb(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,_=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=ht(d%g),d===l?(x=this._repeat,h=u):(m=ht(d/g),x=~~m,x&&x===m?(h=u,x--):h>u&&(h=u)),f=this._yoyo&&x&1,f&&(y=this._yEase,h=u-h),m=Fo(this._tTime,g),h===a&&!o&&this._initted&&x===m)return this._tTime=d,this;x!==m&&(_&&this._yEase&&gy(_,f),this.vars.repeatRefresh&&!f&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(ht(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(iy(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/u),this._from&&(this.ratio=v=1-v),!a&&d&&!s&&!m&&(In(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;_&&_.render(r<0?r:_._dur*_._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&th(this,r,s,o),In(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&In(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&th(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Or(this,1),!s&&!(c&&!a)&&(d||a||f)&&(In(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Qa||Un.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ap(this,u),c=this._ease(u/this._dur),xb(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Pc(this,0),this.parent||ey(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!jt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_r&&_r.vars.overwrite!==!0)._first||pa(this),this.parent&&o!==this.timeline.totalDuration()&&ko(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ii(r):a,u=this._ptLookup,c=this._pt,d,h,p,x,g,m,f;if((!s||s==="all")&&KR(a,l))return s==="all"&&(this._pt=0),pa(this);for(d=this._op=this._op||[],s!=="all"&&(Ht(s)&&(g={},En(s,function(v){return g[v]=1}),s=g),s=yb(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,x=h,p={}):(p=d[f]=d[f]||{},x=s);for(g in x)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Rc(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&pa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ra(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ra(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return mt.killTweensOf(r,s,o)},e}(Ja);Gn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(n){Pt[n]=function(){var e=new cn,t=ih.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Cp=function(e,t,i){return e[t]=i},Ey=function(e,t,i){return e[t](i)},Mb=function(e,t,i,r){return e[t](r.fp,i)},Eb=function(e,t,i){return e.setAttribute(t,i)},Rp=function(e,t){return Mt(e[t])?Ey:gp(e[t])&&e.setAttribute?Eb:Cp},Ty=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Tb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},bp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},wb=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Ab=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Rc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Cb=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Ay=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Tn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Ty,this.d=l||this,this.set=u||Cp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Cb,this.m=i,this.mt=s,this.tween=r},n}();En(Mp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Sp[n]=1});Vn.TweenMax=Vn.TweenLite=Pt;Vn.TimelineLite=Vn.TimelineMax=cn;mt=new cn({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=my;var ms=[],yu={},Rb=[],Ig=0,bb=0,Xf=function(e){return(yu[e]||Rb).map(function(t){return t()})},ah=function(){var e=Date.now(),t=[];e-Ig>2&&(Xf("matchMediaInit"),ms.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Ei.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Xf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Ig=e,Xf("matchMedia"))},Cy=function(){function n(t,i){this.selector=i&&rh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=bb++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Mt(i)&&(s=r,r=i,i=Mt);var o=this,a=function(){var u=ft,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=rh(s)),ft=o,d=r.apply(o,arguments),Mt(d)&&o._r.push(d),ft=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Mt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ft;ft=null,i(this),ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Pt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof cn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Pt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ms.length;o--;)ms[o].id===this.id&&ms.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Pb=function(){function n(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Li(i)||(i={matches:i});var o=new Cy(0,s||this.scope),a=o.conditions={},l,u,c;ft&&!o.selector&&(o.selector=ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Ei.matchMedia(i[u]),l&&(ms.indexOf(o)<0&&ms.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(ah):l.addEventListener("change",ah)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),nc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return dy(r)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ht(e)&&(e=ii(e)[0]);var s=ds(e||{}).get,o=i?Jx:Qx;return i==="native"&&(i=""),e&&(t?o((Dn[t]&&Dn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Dn[a]&&Dn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ii(e),e.length>1){var r=e.map(function(c){return An.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Dn[t],a=ds(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;fo._pt=0,d.init(e,i?c+i:c,fo,0,[e]),d.render(1,d),fo._pt&&bp(1,fo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=An.to(e,Gn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,Io.ease)),Pg(Io,e||{})},config:function(e){return Pg(Bn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Vn[a]&&$a(t+" effect requires "+a+" plugin.")}),Hf[t]=function(a,l,u){return i(ii(a),Gn(l||{},s),u)},o&&(cn.prototype[t]=function(a,l,u){return this.add(Hf[t](a,Li(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ke[e]=ps(t)},parseEase:function(e,t){return arguments.length?ps(e,t):Ke},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new cn(e),r,s;for(i.smoothChildTiming=Mn(e.smoothChildTiming),mt.remove(i),i._dp=0,i._time=i._tTime=mt._time,r=mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Pt&&r.vars.onComplete===r._targets[0]))&&Ci(i,r,r._start-r._delay),r=s;return Ci(mt,i,0),i},context:function(e,t){return e?new Cy(e,t):ft},matchMedia:function(e){return new Pb(e)},matchMediaRefresh:function(){return ms.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ah()},addEventListener:function(e,t){var i=yu[e]||(yu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=yu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:lb,wrapYoyo:ub,distribute:oy,random:ly,snap:ay,normalize:ab,getUnit:en,clamp:ib,splitColor:hy,toArray:ii,selector:rh,mapRange:cy,pipe:sb,unitize:ob,interpolate:cb,shuffle:sy},install:Yx,effects:Hf,ticker:Un,updateRoot:cn.updateRoot,plugins:Dn,globalTimeline:mt,core:{PropTween:Tn,globals:qx,Tween:Pt,Timeline:cn,Animation:Ja,getCache:ds,_removeLinkedListItem:Rc,reverting:function(){return jt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return _p=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return nc[n]=Pt[n]});Un.add(cn.updateRoot);fo=nc.to({},{duration:0});var Lb=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Db=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Lb(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},jf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ht(s)&&(l={},En(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Db(a,s)}}}},An=nc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)jt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},jf("roundProps",sh),jf("modifiers"),jf("snap",ay))||nc;Pt.version=cn.version=An.version="3.14.2";jx=1;vp()&&zo();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Og,gr,Mo,Pp,os,Fg,Lp,Ub=function(){return typeof window<"u"},Ji={},es=180/Math.PI,Eo=Math.PI/180,$s=Math.atan2,kg=1e8,Dp=/([A-Z])/g,Nb=/(left|right|width|margin|padding|x)/i,Ib=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ob=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ry=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},by=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Bb=function(e,t,i){return e.style[t]=i},Hb=function(e,t,i){return e.style.setProperty(t,i)},Vb=function(e,t,i){return e._gsap[t]=i},Gb=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Wb=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Xb=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},_t="transform",wn=_t+"Origin",jb=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Vi(r,a)}):this.tfm[e]=o.x?o[e]:Vi(r,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return Ri.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(_t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},Py=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Yb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Dp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Lp(),(!s||!s.isStart)&&!i[_t]&&(Py(i),r.zOrigin&&i[wn]&&(i[wn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ly=function(e,t){var i={target:e,props:[],revert:Yb,save:jb};return e._gsap||An.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Dy,uh=function(e,t){var i=gr.createElementNS?gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gr.createElement(e);return i&&i.style?i:gr.createElement(e)},On=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Dp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Bo(t)||t,1)||""},zg="O,Moz,ms,Ms,Webkit".split(","),Bo=function(e,t,i){var r=t||os,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(zg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?zg[o]:"")+e},ch=function(){Ub()&&window.document&&(Og=window,gr=Og.document,Mo=gr.documentElement,os=uh("div")||{style:{}},uh("div"),_t=Bo(_t),wn=_t+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dy=!!Bo("perspective"),Lp=An.core.reverting,Pp=1)},Bg=function(e){var t=e.ownerSVGElement,i=uh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Mo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Mo.removeChild(i),s},Hg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Uy=function(e){var t,i;try{t=e.getBBox()}catch{t=Bg(e),i=1}return t&&(t.width||t.height)||i||(t=Bg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Hg(e,["x","cx","x1"])||0,y:+Hg(e,["y","cy","y1"])||0,width:0,height:0}:t},Ny=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Uy(e))},Fr=function(e,t){if(t){var i=e.style,r;t in Ji&&t!==wn&&(t=_t),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Dp,"-$1").toLowerCase())):i.removeAttribute(t)}},vr=function(e,t,i,r,s,o){var a=new Tn(e._pt,t,i,0,1,o?by:Ry);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Vg={deg:1,rad:1,turn:1},qb={grid:1,flex:1},kr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=os.style,l=Nb.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",x,g,m,f;if(r===o||!s||Vg[r]||Vg[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&Ny(e),(p||o==="%")&&(Ji[t]||~t.indexOf("adius")))return x=f?e.getBBox()[l?"width":"height"]:e[c],At(p?s/x*d:s/100*x);if(a[l?"width":"height"]=d+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===gr||!g.appendChild)&&(g=gr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Un.time&&!m.uncache)return At(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,x=e[c],v?e.style[t]=v:Fr(e,t)}else(p||o==="%")&&!qb[On(g,"display")]&&(a.position=On(e,"position")),g===e&&(a.position="static"),g.appendChild(os),x=os[c],g.removeChild(os),a.position="absolute";return l&&p&&(m=ds(g),m.time=Un.time,m.width=g[c]),At(h?x*s/d:x&&s?d/x*s:0)},Vi=function(e,t,i,r){var s;return Pp||ch(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=tl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rc(On(e,wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ic[t]&&ic[t](e,t,i)||On(e,t)||Kx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?kr(e,t,s,i)+i:s},$b=function(e,t,i,r){if(!i||i==="none"){var s=Bo(t,e,1),o=s&&On(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=On(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,wy),l=0,u=0,c,d,h,p,x,g,m,f,v,_,y,M;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=On(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=On(e,t)||r,g?e.style[t]=g:Fr(e,t)),c=[i,r],my(c),i=c[0],r=c[1],h=i.match(co)||[],M=r.match(co)||[],M.length){for(;d=co.exec(r);)m=d[0],v=r.substring(l,d.index),x?x=(x+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(x=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=So(p,m)+y),f=parseFloat(m),_=m.substr((f+"").length),l=co.lastIndex-_.length,_||(_=_||Bn.units[t]||y,l===r.length&&(r+=_,a.e+=_)),y!==_&&(p=kr(e,t,g,_)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:f-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?by:Ry;return Xx.test(r)&&(a.e=0),this._pt=a,a},Gg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Gg[i]||i,t[1]=Gg[r]||r,t.join(" ")},Zb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Ji[a]&&(l=1,a=a==="transformOrigin"?wn:_t),Fr(i,a);l&&(Fr(i,_t),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",tl(i,1),o.uncache=1,Py(r)))}},ic={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,i,0,0,Zb);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},el=[1,0,0,1,0,0],Iy={},Oy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wg=function(e){var t=On(e,_t);return Oy(t)?el:t.substr(7).match(Wx).map(At)},Up=function(e,t){var i=e._gsap||ds(e),r=e.style,s=Wg(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!e.offsetParent&&e!==Mo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Mo.appendChild(e)),s=Wg(e),l?r.display=l:Fr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Up(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],g=l[2],m=l[3],f=l[4],v=l[5],_=t.split(" "),y=parseFloat(_[0])||0,M=parseFloat(_[1])||0,T,E,b,S;i?l!==el&&(E=p*m-x*g)&&(b=y*(m/E)+M*(-g/E)+(g*v-m*f)/E,S=y*(-x/E)+M*(p/E)-(p*v-x*f)/E,y=b,M=S):(T=Uy(e),y=T.x+(~_[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(_[1]||_[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(f=y-u,v=M-c,a.xOffset=d+(f*p+v*g)-f,a.yOffset=h+(f*x+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[wn]="0px 0px",o&&(vr(o,a,"xOrigin",u,y),vr(o,a,"yOrigin",c,M),vr(o,a,"xOffset",d,a.xOffset),vr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},tl=function(e,t){var i=e._gsap||new xy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=On(e,wn)||"0",c,d,h,p,x,g,m,f,v,_,y,M,T,E,b,S,w,I,H,K,D,O,z,q,U,F,G,$,J,j,Z,ae;return c=d=h=g=m=f=v=_=y=0,p=x=1,i.svg=!!(e.getCTM&&Ny(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),E=Up(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),fh(e,q||u,!!q||i.originIsAbsolute,i.smooth!==!1,E)),M=i.xOrigin||0,T=i.yOrigin||0,E!==el&&(I=E[0],H=E[1],K=E[2],D=E[3],c=O=E[4],d=z=E[5],E.length===6?(p=Math.sqrt(I*I+H*H),x=Math.sqrt(D*D+K*K),g=I||H?$s(H,I)*es:0,v=K||D?$s(K,D)*es+g:0,v&&(x*=Math.abs(Math.cos(v*Eo))),i.svg&&(c-=M-(M*I+T*K),d-=T-(M*H+T*D))):(ae=E[6],j=E[7],G=E[8],$=E[9],J=E[10],Z=E[11],c=E[12],d=E[13],h=E[14],b=$s(ae,J),m=b*es,b&&(S=Math.cos(-b),w=Math.sin(-b),q=O*S+G*w,U=z*S+$*w,F=ae*S+J*w,G=O*-w+G*S,$=z*-w+$*S,J=ae*-w+J*S,Z=j*-w+Z*S,O=q,z=U,ae=F),b=$s(-K,J),f=b*es,b&&(S=Math.cos(-b),w=Math.sin(-b),q=I*S-G*w,U=H*S-$*w,F=K*S-J*w,Z=D*w+Z*S,I=q,H=U,K=F),b=$s(H,I),g=b*es,b&&(S=Math.cos(b),w=Math.sin(b),q=I*S+H*w,U=O*S+z*w,H=H*S-I*w,z=z*S-O*w,I=q,O=U),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=At(Math.sqrt(I*I+H*H+K*K)),x=At(Math.sqrt(z*z+ae*ae)),b=$s(O,z),v=Math.abs(b)>2e-4?b*es:0,y=Z?1/(Z<0?-Z:Z):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Oy(On(e,_t)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=At(p),i.scaleY=At(x),i.rotation=At(g)+a,i.rotationX=At(m)+a,i.rotationY=At(f)+a,i.skewX=v+a,i.skewY=_+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[wn]=rc(u)),i.xOffset=i.yOffset=0,i.force3D=Bn.force3D,i.renderTransform=i.svg?Jb:Dy?Fy:Qb,i.uncache=0,i},rc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yf=function(e,t,i){var r=en(t);return At(parseFloat(t)+parseFloat(kr(e,"x",i+"px",r)))+r},Qb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fy(e,t)},$r="0deg",la="0px",Kr=") ",Fy=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,v=i.target,_=i.zOrigin,y="",M=f==="auto"&&e&&e!==1||f===!0;if(_&&(d!==$r||c!==$r)){var T=parseFloat(c)*Eo,E=Math.sin(T),b=Math.cos(T),S;T=parseFloat(d)*Eo,S=Math.cos(T),o=Yf(v,o,E*S*-_),a=Yf(v,a,-Math.sin(T)*-_),l=Yf(v,l,b*S*-_+_)}m!==la&&(y+="perspective("+m+Kr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||o!==la||a!==la||l!==la)&&(y+=l!==la||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Kr),u!==$r&&(y+="rotate("+u+Kr),c!==$r&&(y+="rotateY("+c+Kr),d!==$r&&(y+="rotateX("+d+Kr),(h!==$r||p!==$r)&&(y+="skew("+h+", "+p+Kr),(x!==1||g!==1)&&(y+="scale("+x+", "+g+Kr),v.style[_t]=y||"translate(0, 0)"},Jb=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,v=i.forceCSS,_=parseFloat(o),y=parseFloat(a),M,T,E,b,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Eo,u*=Eo,M=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(c*=Eo,S=Math.tan(u-c),S=Math.sqrt(1+S*S),E*=S,b*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),M*=S,T*=S)),M=At(M),T=At(T),E=At(E),b=At(b)):(M=d,b=h,T=E=0),(_&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(_=kr(p,"x",o,"px"),y=kr(p,"y",a,"px")),(x||g||m||f)&&(_=At(_+x-(x*M+g*E)+m),y=At(y+g-(x*T+g*b)+f)),(r||s)&&(S=p.getBBox(),_=At(_+r/100*S.width),y=At(y+s/100*S.height)),S="matrix("+M+","+T+","+E+","+b+","+_+","+y+")",p.setAttribute("transform",S),v&&(p.style[_t]=S)},eP=function(e,t,i,r,s){var o=360,a=Ht(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?es:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*kg)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*kg)%o-~~(u/o)*o)),e._pt=h=new Tn(e._pt,t,i,r,u,Ob),h.e=c,h.u="deg",e._props.push(i),h},Xg=function(e,t){for(var i in t)e[i]=t[i];return e},tP=function(e,t,i){var r=Xg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[_t]=t,a=tl(i,1),Fr(i,_t),i.setAttribute("transform",u)):(u=getComputedStyle(i)[_t],o[_t]=t,a=tl(i,1),o[_t]=u);for(l in Ji)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=en(u),x=en(c),d=p!==x?kr(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new Tn(e._pt,a,l,d,h-d,lh),e._pt.u=x||0,e._props.push(l));Xg(a,r)};En("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ic[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(x){return Vi(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,g){return p[x]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,d)}});var ky={name:"css",register:ch,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,x,g,m,f,v,_,y,M,T,E,b,S;Pp||ch(),this.styles=this.styles||Ly(e),b=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Dn[g]&&yy(g,t,i,r,e,s)))){if(p=typeof c,x=ic[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Za(c)),x)x(this,e,g,c,i)&&(E=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Lr.lastIndex=0,Lr.test(u)||(m=en(u),f=en(c),f?m!==f&&(u=kr(e,g,u,f)+f):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),b.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Ht(u)&&~u.indexOf("random(")&&(u=Za(u)),en(u+"")||u==="auto"||(u+=Bn.units[g]||en(Vi(e,g))||""),(u+"").charAt(1)==="="&&(u=Vi(e,g))):u=Vi(e,g),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in Ri&&(g==="autoAlpha"&&(h===1&&Vi(e,"visibility")==="hidden"&&d&&(h=0),b.push("visibility",0,a.visibility),vr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),_=g in Ji,_){if(this.styles.save(g),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=On(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var w=e.style.perspective;e.style.perspective=c,c=On(e,"perspective"),w?e.style.perspective=w:Fr(e,"perspective")}d=parseFloat(c)}if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||tl(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Tn(this._pt,a,_t,0,1,M.renderTransform,M,0,-1),y.dep=1),g==="scale")this._pt=new Tn(this._pt,M,"scaleY",M.scaleY,(v?So(M.scaleY,v+d):d)-M.scaleY||0,lh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(wn,0,a[wn]),c=Kb(c),M.svg?fh(e,c,0,T,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==M.zOrigin&&vr(this,M,"zOrigin",M.zOrigin,f),vr(this,a,g,rc(u),rc(c)));continue}else if(g==="svgOrigin"){fh(e,c,1,T,0,this);continue}else if(g in Iy){eP(this,M,g,h,v?So(h,v+c):c);continue}else if(g==="smoothOrigin"){vr(this,M,"smooth",M.smooth,c);continue}else if(g==="force3D"){M[g]=c;continue}else if(g==="transform"){tP(this,c,e);continue}}else g in a||(g=Bo(g)||g);if(_||(d||d===0)&&(h||h===0)&&!Ib.test(c)&&g in a)m=(u+"").substr((h+"").length),d||(d=0),f=en(c)||(g in Bn.units?Bn.units[g]:m),m!==f&&(h=kr(e,g,u,f)),this._pt=new Tn(this._pt,_?M:a,g,h,(v?So(h,v+d):d)-h,!_&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?zb:lh),this._pt.u=f||0,_&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=kb):m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=Fb);else if(g in a)$b.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){yp(g,c);continue}_||(g in a?b.push(g,0,a[g]):typeof e[g]=="function"?b.push(g,2,e[g]()):b.push(g,1,u||e[g])),o.push(g)}}E&&Ay(this)},render:function(e,t){if(t.tween._time||!Lp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Vi,aliases:Ri,getSetter:function(e,t,i){var r=Ri[t];return r&&r.indexOf(",")<0&&(t=r),t in Ji&&t!==wn&&(e._gsap.x||Vi(e,"x"))?i&&Fg===i?t==="scale"?Gb:Vb:(Fg=i||{})&&(t==="scale"?Wb:Xb):e.style&&!gp(e.style[t])?Bb:~t.indexOf("-")?Hb:Rp(e,t)},core:{_removeProperty:Fr,_getMatrix:Up}};An.utils.checkPrefix=Bo;An.core.getStyleSaver=Ly;(function(n,e,t,i){var r=En(n+","+e+","+t,function(s){Ji[s]=1});En(e,function(s){Bn.units[s]="deg",Iy[s]=1}),Ri[r[13]]=n+","+e,En(i,function(s){var o=s.split(":");Ri[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Bn.units[n]="px"});An.registerPlugin(ky);var dh=An.registerPlugin(ky)||An;dh.core.Tween;const ua=5e4,nP=.015,iP=`
  attribute vec3 instancePosition;
  attribute float instanceIntensity;
  attribute float instanceAge;
  
  varying float vIntensity;
  varying float vAge;
  varying vec3 vWorldPosition;
  
  void main() {
    vIntensity = instanceIntensity;
    vAge = instanceAge;
    
    vec3 pos = position * ${nP.toFixed(4)} + instancePosition;
    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vWorldPosition = worldPos.xyz;
    
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`,rP=`
  uniform vec3 uColor;
  uniform float uTime;
  uniform vec3 uCameraPosition;
  
  varying float vIntensity;
  varying float vAge;
  varying vec3 vWorldPosition;
  
  void main() {
    // Distance-based glow
    float dist = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.0, dist);
    
    // Pulsing based on time and intensity
    float pulse = 0.7 + 0.3 * sin(uTime * 2.0 + vIntensity * 10.0);
    
    // Age-based fade (newer points are brighter)
    float ageFade = exp(-vAge * 0.5);
    
    // Distance fog
    float cameraDist = length(vWorldPosition - uCameraPosition);
    float fog = exp(-cameraDist * 0.05);
    
    // Electric cyan with intensity variation
    vec3 color = uColor * (0.5 + vIntensity * 0.5) * pulse;
    
    // Add bloom halo
    float halo = smoothstep(0.5, 0.2, dist) * 0.3;
    color += uColor * halo;
    
    gl_FragColor = vec4(color, alpha * ageFade * fog * (0.6 + vIntensity * 0.4));
  }
`;function sP({onSceneReady:n,onCameraRef:e}){const t=et.useRef(null),i=et.useRef(null),r=et.useRef(null),s=et.useRef(null),o=et.useRef(null),a=et.useRef(null),l=et.useRef(0),u=et.useRef(new NR),c=et.useRef(new Float32Array(ua*3)),d=et.useRef(new Float32Array(ua)),h=et.useRef(new Float32Array(ua)),p=et.useRef(0);et.useEffect(()=>{if(!t.current)return;const m=t.current,f=m.clientWidth,v=m.clientHeight,_=new pp;_.background=new $e("#050505"),_.fog=new hp("#050505",.015),i.current=_;const y=new Qn(60,f/v,.1,1e3);y.position.set(0,2,8),r.current=y,e?.(y);let M;try{M=new Kd({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{M=new Kd({antialias:!1})}M.setSize(f,v),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setClearColor("#050505",1),M.outputColorSpace=zt,M.toneMapping=lx,M.toneMappingExposure=1.2,m.appendChild(M.domElement),s.current=M;const T=new FR(y,M.domElement);T.enableDamping=!0,T.dampingFactor=.05,T.maxDistance=50,T.minDistance=2,T.autoRotate=!0,T.autoRotateSpeed=.3,a.current=T;const E=new Cc(1,2),b=new Ir({vertexShader:iP,fragmentShader:rP,uniforms:{uColor:{value:new $e("#00ffff")},uTime:{value:0},uCameraPosition:{value:y.position}},transparent:!0,blending:Xu,depthWrite:!1,side:Ai}),S=new kx(E,b,ua);S.count=0,S.frustumCulled=!1;const w=new Aa(c.current,3),I=new Aa(d.current,1),H=new Aa(h.current,1);E.setAttribute("instancePosition",w),E.setAttribute("instanceIntensity",I),E.setAttribute("instanceAge",H),_.add(S),o.current=S,oP(_);const K=new IR(20,40,"#111111","#0a0a0a");K.position.y=-2,_.add(K),n?.(_);const D=()=>{l.current=requestAnimationFrame(D);const z=u.current.getElapsedTime();if(o.current){const U=o.current.material;U.uniforms.uTime.value=z,U.uniforms.uCameraPosition.value.copy(y.position)}const q=u.current.getDelta();for(let U=0;U<p.current;U++)h.current[U]+=q*.1;if(o.current){const U=o.current.geometry.getAttribute("instanceAge");U.needsUpdate=!0}T.update(),M.render(_,y)};D();const O=()=>{if(!t.current||!s.current||!r.current)return;const z=t.current.clientWidth,q=t.current.clientHeight;r.current.aspect=z/q,r.current.updateProjectionMatrix(),s.current.setSize(z,q)};return window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O),cancelAnimationFrame(l.current),T.dispose(),E.dispose(),b.dispose(),M.dispose(),M.forceContextLoss(),m.contains(M.domElement)&&m.removeChild(M.domElement),c.current.fill(0),d.current.fill(0),h.current.fill(0)}},[n,e]);const x=et.useCallback((m,f)=>{if(!o.current)return;const v=o.current,_=v.geometry,y=Math.min(f,ua);for(let b=0;b<y*3;b++)c.current[b]=m[b]||0;for(let b=0;b<y;b++){const S=c.current[b*3],w=c.current[b*3+1],I=c.current[b*3+2],H=Math.sqrt(S*S+w*w+I*I);d.current[b]=Math.max(.2,1-H*.1),b>=p.current&&(h.current[b]=0)}const M=_.getAttribute("instancePosition"),T=_.getAttribute("instanceIntensity"),E=_.getAttribute("instanceAge");M.needsUpdate=!0,T.needsUpdate=!0,E.needsUpdate=!0,v.count=y,p.current=y},[]),g=et.useCallback(m=>{if(!r.current||!a.current)return;const f=r.current,v=a.current,_=new N().subVectors(f.position,v.target).normalize(),y=m.clone().add(_.multiplyScalar(5));dh.to(f.position,{x:y.x,y:y.y,z:y.z,duration:2,ease:"power2.inOut"}),dh.to(v.target,{x:m.x,y:m.y,z:m.z,duration:2,ease:"power2.inOut"})},[]);return et.useEffect(()=>(window.__nebulaUpdatePoints=x,window.__nebulaFlyToCluster=g,window.__nebulaGetScene=()=>i.current,()=>{delete window.__nebulaUpdatePoints,delete window.__nebulaFlyToCluster,delete window.__nebulaGetScene}),[x,g]),Ge.jsx("div",{ref:t,className:"absolute inset-0",style:{background:"#050505"}})}function oP(n){const t=new Float32Array(6e3),i=new Float32Array(2e3*3);for(let l=0;l<2e3;l++)t[l*3]=(Math.random()-.5)*40,t[l*3+1]=(Math.random()-.5)*40,t[l*3+2]=(Math.random()-.5)*40,i[l*3]=0,i[l*3+1]=.3+Math.random()*.2,i[l*3+2]=.4+Math.random()*.2;const r=new Cn;r.setAttribute("position",new zn(t,3)),r.setAttribute("color",new zn(i,3));const s=new Bx({size:.02,vertexColors:!0,transparent:!0,opacity:.3,blending:Xu,depthWrite:!1}),o=new UR(r,s);n.add(o);const a=()=>{o.rotation.y+=2e-4,o.rotation.x+=1e-4,requestAnimationFrame(a)};a()}class aP{constructor(e){sn(this,"sab");sn(this,"writeIndex");sn(this,"readIndex");sn(this,"buffer");sn(this,"capacity");const i=e*4;this.sab=new SharedArrayBuffer(8+i),this.writeIndex=new Int32Array(this.sab,0,1),this.readIndex=new Int32Array(this.sab,4,1),this.buffer=new Float32Array(this.sab,8,e),this.capacity=e}write(e){let t=Atomics.load(this.writeIndex,0);for(let i=0;i<e.length;i++)this.buffer[t]=e[i],t=(t+1)%this.capacity;Atomics.store(this.writeIndex,0,t),Atomics.notify(this.writeIndex,0)}}class lP{constructor(e={}){sn(this,"ctx");sn(this,"processor");sn(this,"stream");sn(this,"waveformCanvas");sn(this,"waveformCtx");sn(this,"worker");sn(this,"ring");sn(this,"onConfidence");sn(this,"isInitialized",!1);this.onConfidence=e.onConfidence,this.ring=new aP(1e6)}async init(){if(this.isInitialized)return;if(typeof SharedArrayBuffer>"u")throw new Error("SharedArrayBuffer not available. Ensure COOP/COEP headers are set.");this.ctx=new(window.AudioContext||window.webkitAudioContext)({sampleRate:48e3,latencyHint:"interactive"}),this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1});const e=this.ctx.createMediaStreamSource(this.stream);this.processor=this.ctx.createScriptProcessor(4096,1,1),this.processor.onaudioprocess=t=>{const i=t.inputBuffer.getChannelData(0);this.ring.write(i),this.drawWaveform(i)},e.connect(this.processor),this.processor.connect(this.ctx.destination),this.worker=new Worker(new URL("/assets/ManifoldWorker-Plgrrb0u.js",import.meta.url),{type:"module"}),this.worker.onmessage=t=>{const i=t.data;i.type==="confidence"&&this.onConfidence&&this.onConfidence(i.value)},this.worker.postMessage({type:"init",sab:this.ring.sab,sampleRate:this.ctx.sampleRate}),this.isInitialized=!0}setWaveformCanvas(e){this.waveformCanvas=e??void 0,this.waveformCtx=this.waveformCanvas?this.waveformCanvas.getContext("2d"):null}drawWaveform(e){if(!this.waveformCtx||!this.waveformCanvas)return;const t=this.waveformCtx,i=this.waveformCanvas.width=this.waveformCanvas.clientWidth*2,r=this.waveformCanvas.height=this.waveformCanvas.clientHeight*2;t.clearRect(0,0,i,r),t.strokeStyle="rgba(0, 255, 255, 0.6)",t.lineWidth=1.5,t.lineCap="round",t.lineJoin="round",t.shadowColor="rgba(0, 255, 255, 0.8)",t.shadowBlur=8,t.beginPath();const s=Math.max(1,Math.floor(e.length/i));for(let o=0;o<i;o++){const a=o*s,u=(.5-(e[Math.min(a,e.length-1)]||0)*.4)*r;o===0?t.moveTo(o,u):t.lineTo(o,u)}t.stroke(),t.shadowBlur=0}dispose(){try{this.processor?.disconnect(),this.stream?.getTracks().forEach(e=>e.stop()),this.ctx?.close(),this.worker?.postMessage({type:"dispose"}),this.worker?.terminate(),this.waveformCtx=null,this.isInitialized=!1}catch(e){console.warn("Dispose error:",e)}}}class zy{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,r=[];let s=0;e.traverse(function(f){if(f.isMesh){const v=f.geometry,_=v.index,y=v.getAttribute("position");s+=_!==null?_.count/3:y.count/3,r.push({object3d:f,geometry:v})}});let o,a=80;if(i===!0){const f=s*2+s*3*4*4+80+4,v=new ArrayBuffer(f);o=new DataView(v),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new N,u=new N,c=new N,d=new N,h=new N,p=new N;for(let f=0,v=r.length;f<v;f++){const _=r[f].object3d,y=r[f].geometry,M=y.index,T=y.getAttribute("position");if(M!==null)for(let E=0;E<M.count;E+=3){const b=M.getX(E+0),S=M.getX(E+1),w=M.getX(E+2);x(b,S,w,T,_)}else for(let E=0;E<T.count;E+=3){const b=E+0,S=E+1,w=E+2;x(b,S,w,T,_)}}return i===!1&&(o+=`endsolid exported
`),o;function x(f,v,_,y,M){l.fromBufferAttribute(y,f),u.fromBufferAttribute(y,v),c.fromBufferAttribute(y,_),M.isSkinnedMesh===!0&&(M.applyBoneTransform(f,l),M.applyBoneTransform(v,u),M.applyBoneTransform(_,c)),l.applyMatrix4(M.matrixWorld),u.applyMatrix4(M.matrixWorld),c.applyMatrix4(M.matrixWorld),g(l,u,c),m(l),m(u),m(c),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function g(f,v,_){d.subVectors(_,v),h.subVectors(f,v),d.cross(h).normalize(),p.copy(d).normalize(),i===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):(o+="	facet normal "+p.x+" "+p.y+" "+p.z+`
`,o+=`		outer loop
`)}function m(f){i===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):o+="			vertex "+f.x+" "+f.y+" "+f.z+`
`}}}const By={filename:"sonic_fossil",scale:10,sphereRadius:.1,sphereDetail:1,binary:!0};function uP(n,e,t={}){const i={...By,...t},r=new pp,s=new Cc(i.sphereRadius,i.sphereDetail),o=new wc,a=new Cn,l=[],u=[],c=s.getAttribute("position").array,d=s.index?.array||[],h=c.length/3;for(let m=0;m<e;m++){const f=n[m*3]*i.scale,v=n[m*3+1]*i.scale,_=n[m*3+2]*i.scale;for(let M=0;M<c.length;M+=3)l.push(c[M]*i.scale+f,c[M+1]*i.scale+v,c[M+2]*i.scale+_);const y=m*h;for(let M=0;M<d.length;M++)u.push(d[M]+y)}a.setAttribute("position",new tn(l,3)),a.setIndex(u),a.computeVertexNormals();const p=new ti(a,o);r.add(p);const x=new zy;let g;i.binary?(g=x.parse(r,{binary:!0}),hh(new Blob([new Uint8Array(g.buffer)],{type:"application/octet-stream"}),`${i.filename}.stl`)):(g=x.parse(r,{binary:!1}),hh(new Blob([g],{type:"text/plain"}),`${i.filename}.stl`)),a.dispose(),s.dispose(),o.dispose()}function cP(n,e,t={}){const i={...By,...t},r=[];for(let d=0;d<e;d++)r.push(new N(n[d*3]*i.scale,n[d*3+1]*i.scale,n[d*3+2]*i.scale));const s=fP(r),o=new wc,a=new ti(s,o),l=new pp;l.add(a);const c=new zy().parse(l,{binary:!0});hh(new Blob([new Uint8Array(c.buffer)],{type:"application/octet-stream"}),`${i.filename}_hull.stl`),s.dispose(),o.dispose()}function fP(n){const e=new Cn,t=[],i=new N;n.forEach(s=>i.add(s)),i.divideScalar(n.length);const r=[...n].sort((s,o)=>s.distanceTo(i)-o.distanceTo(i));for(let s=0;s<r.length-2;s++){const o=r[s],a=r[s+1],l=r[s+2];t.push(o.x,o.y,o.z,a.x,a.y,a.z,l.x,l.y,l.z)}return e.setAttribute("position",new tn(t,3)),e.computeVertexNormals(),e}function hh(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}function dP(){const n=window.__nebulaGetScene?.();if(!n)return null;let e=null,t=0;return n.traverse(i=>{if(i instanceof kx&&i.count>0){const r=i.geometry.getAttribute("instancePosition");r&&(e=r.array,t=i.count)}}),e?{positions:e,count:t}:null}function jg(n="stl"){const e=dP();if(!e){console.warn("No point cloud data available for export");return}const i=`sonic_fossil_${new Date().toISOString().slice(0,10)}`;n==="hull"?cP(e.positions,e.count,{filename:i}):uP(e.positions,e.count,{filename:i})}function hP(){const[n,e]=et.useState("idle"),[t,i]=et.useState(0),[r,s]=et.useState(0),[o,a]=et.useState("Initializing..."),[l,u]=et.useState(!1),c=et.useRef(null),d=et.useRef(null),h=et.useMemo(()=>new lP({onConfidence:i}),[]);et.useEffect(()=>{const g=f=>{const{type:v,count:_,message:y,position:M}=f.data;if(v==="positions"&&_!==void 0){s(_);const T=window.__nebulaUpdatePoints;if(T&&f.data.sab){const E=new Float32Array(f.data.sab);T(E,_)}}if(v==="status"&&(a(y),y==="AI ready"&&e("listening")),v==="newCluster"&&M){const T=window.__nebulaFlyToCluster;T&&T(new N(M.x,M.y,M.z))}v==="error"&&(e("error"),a(y))},m=h.worker;if(m)return m.addEventListener("message",g),()=>m.removeEventListener("message",g)},[h]);const p=et.useCallback(async()=>{if(!l){e("initializing"),a("Requesting microphone access...");try{await h.init(),h.setWaveformCanvas(c.current),u(!0),e("listening")}catch(g){console.error("Failed to initialize:",g),e("error"),a("Microphone access denied")}}},[h,l]);et.useEffect(()=>()=>{h.dispose()},[h]);const x=et.useCallback(g=>{d.current=g},[]);return Ge.jsxs("div",{className:"relative w-full h-screen bg-deep overflow-hidden",children:[Ge.jsx(sP,{onCameraRef:x}),Ge.jsxs("header",{className:"absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10",children:[Ge.jsxs("div",{children:[Ge.jsx("h1",{className:"text-xl font-light tracking-wide text-white/90",children:"Sonic Latent Manifold"}),Ge.jsx("p",{className:"text-xs text-white/40 mt-1 tracking-widest uppercase",children:"Bioacoustic Explorer"})]}),Ge.jsxs("div",{className:"text-right",children:[Ge.jsx("div",{className:"text-xs text-white/40 uppercase tracking-wider",children:o}),r>0&&Ge.jsxs("div",{className:"text-xs text-cyan/60 mt-1",children:[r.toLocaleString()," vectors"]})]})]}),!l&&Ge.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:Ge.jsxs("button",{onClick:p,disabled:n==="initializing",className:`group relative px-8 py-4 rounded-2xl glass border border-cyan/20 
                       hover:border-cyan/40 transition-all duration-500
                       disabled:opacity-50 disabled:cursor-not-allowed`,children:[Ge.jsx("div",{className:"absolute inset-0 rounded-2xl bg-cyan/5 group-hover:bg-cyan/10 transition-colors"}),Ge.jsx("span",{className:"relative text-cyan/90 font-light tracking-wide",children:n==="initializing"?"Initializing...":"Begin Listening"})]})}),Ge.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-10",children:[Ge.jsx("div",{className:"px-6 pb-2",children:Ge.jsx("canvas",{ref:c,className:"w-full h-16 rounded-lg",style:{background:"rgba(0,0,0,0.3)",backdropFilter:"blur(10px)"}})}),Ge.jsx("div",{className:"glass border-t border-white/5",children:Ge.jsxs("div",{className:"px-6 py-4 flex items-center justify-between",children:[Ge.jsx("div",{className:"flex items-center gap-4",children:Ge.jsxs("div",{className:"flex flex-col",children:[Ge.jsx("span",{className:"text-[10px] text-white/40 uppercase tracking-widest mb-1",children:"AI Confidence"}),Ge.jsxs("div",{className:"flex items-center gap-3",children:[Ge.jsx("div",{className:"w-32 h-1.5 bg-white/5 rounded-full overflow-hidden",children:Ge.jsx("div",{className:"h-full bg-gradient-to-r from-cyan/50 to-cyan transition-all duration-300 ease-out",style:{width:`${t*100}%`}})}),Ge.jsxs("span",{className:"text-cyan/80 text-sm font-light tabular-nums w-12",children:[(t*100).toFixed(0),"%"]})]})]})}),Ge.jsxs("div",{className:"flex items-center gap-2",children:[Ge.jsx("div",{className:`w-2 h-2 rounded-full transition-colors ${n==="listening"?"bg-cyan animate-pulse":n==="error"?"bg-red-500":"bg-white/20"}`}),Ge.jsx("span",{className:"text-xs text-white/50 capitalize",children:n})]}),Ge.jsxs("div",{className:"flex items-center gap-3",children:[Ge.jsx("button",{onClick:()=>jg("stl"),disabled:r<10,className:`px-4 py-2 text-xs font-light tracking-wide
                           text-cyan/80 border border-cyan/30 rounded-lg
                           hover:bg-cyan/10 hover:border-cyan/50 
                           transition-all duration-300
                           disabled:opacity-30 disabled:cursor-not-allowed`,children:"Export STL"}),Ge.jsx("button",{onClick:()=>jg("hull"),disabled:r<10,className:`px-4 py-2 text-xs font-light tracking-wide
                           text-white/60 border border-white/20 rounded-lg
                           hover:bg-white/5 hover:border-white/30 
                           transition-all duration-300
                           disabled:opacity-30 disabled:cursor-not-allowed`,children:"Export Hull"})]})]})})]}),Ge.jsx("div",{className:"absolute top-6 right-6 w-24 h-24 pointer-events-none opacity-20",children:Ge.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full",children:[Ge.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"currentColor",strokeWidth:"0.5",className:"text-cyan"}),Ge.jsx("circle",{cx:"50",cy:"50",r:"30",fill:"none",stroke:"currentColor",strokeWidth:"0.3",className:"text-cyan"})]})})]})}const pP=document.getElementById("root"),mP=sx(pP);mP.render(Ge.jsx(cS.StrictMode,{children:Ge.jsx(hP,{})}));
