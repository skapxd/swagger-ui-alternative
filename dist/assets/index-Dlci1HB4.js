(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,F=P.ShadowRoot&&(P.ShadyCSS===void 0||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),re=new WeakMap;let fe=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(F&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&re.set(t,e))}return e}toString(){return this.cssText}};const ye=i=>new fe(typeof i=="string"?i:i+"",void 0,X),C=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((o,r,n)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new fe(t,i,X)},ke=(i,e)=>{if(F)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),r=P.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=t.cssText,i.appendChild(o)}},oe=F?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return ye(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ae,defineProperty:ze,getOwnPropertyDescriptor:_e,getOwnPropertyNames:$e,getOwnPropertySymbols:Me,getPrototypeOf:je}=Object,u=globalThis,ie=u.trustedTypes,Ee=ie?ie.emptyScript:"",V=u.reactiveElementPolyfillSupport,M=(i,e)=>i,Z={toAttribute(i,e){switch(e){case Boolean:i=i?Ee:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},q=(i,e)=>!Ae(i,e),ne={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),u.litPropertyMetadata??(u.litPropertyMetadata=new WeakMap);class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);r!==void 0&&ze(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:n}=_e(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){const d=r==null?void 0:r.call(this);n.call(this,a),this.requestUpdate(e,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const t=this.properties,o=[...$e(t),...Me(t)];for(const r of o)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,r]of t)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const r=this._$Eu(t,o);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)t.unshift(oe(r))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){var n;const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){const a=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Z).toAttribute(t,o.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var n;const o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=o.getPropertyOptions(r),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Z;this._$Em=r,this[r]=d.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??q)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,a]of r)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[M("elementProperties")]=new Map,k[M("finalized")]=new Map,V==null||V({ReactiveElement:k}),(u.reactiveElementVersions??(u.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,T=j.trustedTypes,ae=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,ue="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,we="?"+f,Se=`<${we}>`,v=document,E=()=>v.createComment(""),S=i=>i===null||typeof i!="object"&&typeof i!="function",K=Array.isArray,Ie=i=>K(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",B=`[ 	
\f\r]`,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,de=/>/g,w=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),se=/'/g,me=/"/g,xe=/^(?:script|style|textarea|title)$/i,Re=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),U=Re(1),y=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),pe=new WeakMap,x=v.createTreeWalker(v,129);function ve(i,e){if(!K(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(e):e}const Ce=(i,e)=>{const t=i.length-1,o=[];let r,n=e===2?"<svg>":e===3?"<math>":"",a=$;for(let d=0;d<t;d++){const l=i[d];let p,c,s=-1,h=0;for(;h<l.length&&(a.lastIndex=h,c=a.exec(l),c!==null);)h=a.lastIndex,a===$?c[1]==="!--"?a=le:c[1]!==void 0?a=de:c[2]!==void 0?(xe.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=w):c[3]!==void 0&&(a=w):a===w?c[0]===">"?(a=r??$,s=-1):c[1]===void 0?s=-2:(s=a.lastIndex-c[2].length,p=c[1],a=c[3]===void 0?w:c[3]==='"'?me:se):a===me||a===se?a=w:a===le||a===de?a=$:(a=w,r=void 0);const b=a===w&&i[d+1].startsWith("/>")?" ":"";n+=a===$?l+Se:s>=0?(o.push(p),l.slice(0,s)+ue+l.slice(s)+f+b):l+f+(s===-2?d:b)}return[ve(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class I{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,a=0;const d=e.length-1,l=this.parts,[p,c]=Ce(e,t);if(this.el=I.createElement(p,o),x.currentNode=this.el.content,t===2||t===3){const s=this.el.content.firstChild;s.replaceWith(...s.childNodes)}for(;(r=x.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(const s of r.getAttributeNames())if(s.endsWith(ue)){const h=c[a++],b=r.getAttribute(s).split(f),O=/([.?@])?(.*)/.exec(h);l.push({type:1,index:n,name:O[2],strings:b,ctor:O[1]==="."?Ne:O[1]==="?"?De:O[1]==="@"?He:L}),r.removeAttribute(s)}else s.startsWith(f)&&(l.push({type:6,index:n}),r.removeAttribute(s));if(xe.test(r.tagName)){const s=r.textContent.split(f),h=s.length-1;if(h>0){r.textContent=T?T.emptyScript:"";for(let b=0;b<h;b++)r.append(s[b],E()),x.nextNode(),l.push({type:2,index:++n});r.append(s[h],E())}}}else if(r.nodeType===8)if(r.data===we)l.push({type:2,index:n});else{let s=-1;for(;(s=r.data.indexOf(f,s+1))!==-1;)l.push({type:7,index:n}),s+=f.length-1}n++}}static createElement(e,t){const o=v.createElement("template");return o.innerHTML=e,o}}function A(i,e,t=i,o){var a,d;if(e===y)return e;let r=o!==void 0?(a=t._$Co)==null?void 0:a[o]:t._$Cl;const n=S(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((d=r==null?void 0:r._$AO)==null||d.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=r:t._$Cl=r),r!==void 0&&(e=A(i,r._$AS(i,e.values),r,o)),e}class Ue{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=((e==null?void 0:e.creationScope)??v).importNode(t,!0);x.currentNode=r;let n=x.nextNode(),a=0,d=0,l=o[0];for(;l!==void 0;){if(a===l.index){let p;l.type===2?p=new N(n,n.nextSibling,this,e):l.type===1?p=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(p=new Ge(n,this,e)),this._$AV.push(p),l=o[++d]}a!==(l==null?void 0:l.index)&&(n=x.nextNode(),a++)}return x.currentNode=v,r}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class N{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),S(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ie(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=I.createElement(ve(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const a=new Ue(r,this),d=a.u(this.options);a.p(t),this.T(d),this._$AH=a}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new I(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const n of e)r===t.length?t.push(o=new N(this.O(E()),this.O(E()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}_$AI(e,t=this,o,r){const n=this.strings;let a=!1;if(n===void 0)e=A(this,e,t,0),a=!S(e)||e!==this._$AH&&e!==y,a&&(this._$AH=e);else{const d=e;let l,p;for(e=n[0],l=0;l<n.length-1;l++)p=A(this,d[o+l],t,l),p===y&&(p=this._$AH[l]),a||(a=!S(p)||p!==this._$AH[l]),p===m?e=m:e!==m&&(e+=(p??"")+n[l+1]),this._$AH[l]=p}a&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ne extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class De extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class He extends L{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??m)===y)return;const o=this._$AH,r=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==m&&(o===m||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ge{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const Q=j.litHtmlPolyfillSupport;Q==null||Q(I,N),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.2.1");const Oe=(i,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let r=o._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;o._$litPart$=r=new N(e.insertBefore(E(),n),n,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return y}};var be;g._$litElement$=!0,g.finalized=!0,(be=globalThis.litElementHydrateSupport)==null||be.call(globalThis,{LitElement:g});const W=globalThis.litElementPolyfillSupport;W==null||W({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:q},Ze=(i=Pe,e,t)=>{const{kind:o,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,i),o==="accessor"){const{name:a}=t;return{set(d){const l=e.get.call(this);e.set.call(this,d),this.requestUpdate(a,l,i)},init(d){return d!==void 0&&this.P(a,void 0,i),d}}}if(o==="setter"){const{name:a}=t;return function(d){const l=this[a];e.call(this,d),this.requestUpdate(a,l,i)}}throw Error("Unsupported decorator location: "+o)};function _(i){return(e,t)=>typeof t=="object"?Ze(i,e,t):((o,r,n)=>{const a=r.hasOwnProperty(n);return r.constructor.createProperty(n,a?{...o,wrapped:!0}:o),a?Object.getOwnPropertyDescriptor(r,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=(i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(i,e){return(t,o,r)=>{const n=a=>{var d;return((d=a.renderRoot)==null?void 0:d.querySelector(i))??null};return Te(t,o,{get(){return n(this)}})}}const H=C`
  * {
    color: #3b4151;
    /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
    font-family: sans-serif;
  }

  * html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.15;
  }

  * body {
    margin: 0;
  }

  * article,
  * aside,
  * footer,
  * header,
  * nav,
  * section {
    display: block;
  }

  * h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  * figcaption,
  * figure,
  * main {
    display: block;
  }

  * figure {
    margin: 1em 40px;
  }

  * hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  * pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  * a {
    -webkit-text-decoration-skip: objects;
    background-color: transparent;
  }

  * abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  * b,
  * strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  * code,
  * kbd,
  * samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  * dfn {
    font-style: italic;
  }

  * mark {
    background-color: #ff0;
    color: #000;
  }

  * small {
    font-size: 80%;
  }

  * sub,
  * sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  * sub {
    bottom: -0.25em;
  }

  * sup {
    top: -0.5em;
  }

  * audio,
  * video {
    display: inline-block;
  }

  * audio:not([controls]) {
    display: none;
    height: 0;
  }

  * img {
    border-style: none;
  }

  * svg:not(:root) {
    overflow: hidden;
  }

  * button,
  * input,
  * optgroup,
  * select,
  * textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  * button,
  * input {
    overflow: visible;
  }

  * button,
  * select {
    text-transform: none;
  }

  * [type="reset"],
  * [type="submit"],
  * button,
  * html [type="button"] {
    -webkit-appearance: button;
  }

  * [type="button"]::-moz-focus-inner,
  * [type="reset"]::-moz-focus-inner,
  * [type="submit"]::-moz-focus-inner,
  * button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  * [type="button"]:-moz-focusring,
  * [type="reset"]:-moz-focusring,
  * [type="submit"]:-moz-focusring,
  * button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  * fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  * legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  * progress {
    display: inline-block;
    vertical-align: baseline;
  }

  * textarea {
    overflow: auto;
  }

  * [type="checkbox"],
  * [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  * [type="number"]::-webkit-inner-spin-button,
  * [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  * [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  * [type="search"]::-webkit-search-cancel-button,
  * [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  * ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  * details,
  * menu {
    display: block;
  }

  * summary {
    display: list-item;
  }

  * canvas {
    display: inline-block;
  }

  * [hidden],
  * template {
    display: none;
  }

  * .debug * {
    outline: 1px solid gold;
  }

  * .debug-white * {
    outline: 1px solid #fff;
  }

  * .debug-black * {
    outline: 1px solid #000;
  }

  * .debug-grid {
    background: transparent
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDOTY4N0U2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDOTY4N0Q2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3NjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3NzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsBS+GMAAAAjSURBVHjaYvz//z8DLsD4gcGXiYEAGBIKGBne//fFpwAgwAB98AaF2pjlUQAAAABJRU5ErkJggg==)
      repeat 0 0;
  }

  * .debug-grid-16 {
    background: transparent
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYyRjhERDU2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYyRjhERDQ2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QTY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3QjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvCS01IAAABMSURBVHjaYmR4/5+BFPBfAMFm/MBgx8RAGWCn1AAmSg34Q6kBDKMGMDCwICeMIemF/5QawEipAWwUhwEjMDvbAWlWkvVBwu8vQIABAEwBCph8U6c0AAAAAElFTkSuQmCC)
      repeat 0 0;
  }

  * .debug-grid-8-solid {
    background: #fff
      url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAAAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxMjI0OTczNjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxMjI0OTc0NjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjEyMjQ5NzE2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjEyMjQ5NzI2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAbGhopHSlBJiZBQi8vL0JHPz4+P0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHAR0pKTQmND8oKD9HPzU/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAAIAAgDASIAAhEBAxEB/8QAWQABAQAAAAAAAAAAAAAAAAAAAAYBAQEAAAAAAAAAAAAAAAAAAAIEEAEBAAMBAAAAAAAAAAAAAAABADECA0ERAAEDBQAAAAAAAAAAAAAAAAARITFBUWESIv/aAAwDAQACEQMRAD8AoOnTV1QTD7JJshP3vSM3P//Z)
      repeat 0 0;
  }

  * .debug-grid-16-solid {
    background: #fff
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzY3MkJEN0U2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzY3MkJEN0Y2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3RDY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pve6J3kAAAAzSURBVHjaYvz//z8D0UDsMwMjSRoYP5Gq4SPNbRjVMEQ1fCRDg+in/6+J1AJUxsgAEGAA31BAJMS0GYEAAAAASUVORK5CYII=)
      repeat 0 0;
  }

  * .border-box,
  * a,
  * article,
  * body,
  * code,
  * dd,
  * div,
  * dl,
  * dt,
  * fieldset,
  * footer,
  * form,
  * h1,
  * h2,
  * h3,
  * h4,
  * h5,
  * h6,
  * header,
  * html,
  * input[type="email"],
  * input[type="number"],
  * input[type="password"],
  * input[type="tel"],
  * input[type="text"],
  * input[type="url"],
  * legend,
  * li,
  * main,
  * ol,
  * p,
  * pre,
  * section,
  * table,
  * td,
  * textarea,
  * th,
  * tr,
  * ul {
    box-sizing: border-box;
  }

  * .aspect-ratio {
    height: 0;
    position: relative;
  }

  * .aspect-ratio--16x9 {
    padding-bottom: 56.25%;
  }

  * .aspect-ratio--9x16 {
    padding-bottom: 177.77%;
  }

  * .aspect-ratio--4x3 {
    padding-bottom: 75%;
  }

  * .aspect-ratio--3x4 {
    padding-bottom: 133.33%;
  }

  * .aspect-ratio--6x4 {
    padding-bottom: 66.6%;
  }

  * .aspect-ratio--4x6 {
    padding-bottom: 150%;
  }

  * .aspect-ratio--8x5 {
    padding-bottom: 62.5%;
  }

  * .aspect-ratio--5x8 {
    padding-bottom: 160%;
  }

  * .aspect-ratio--7x5 {
    padding-bottom: 71.42%;
  }

  * .aspect-ratio--5x7 {
    padding-bottom: 140%;
  }

  * .aspect-ratio--1x1 {
    padding-bottom: 100%;
  }

  * .aspect-ratio--object {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  @media screen and (min-width: 30em) {
    * .aspect-ratio-ns {
      height: 0;
      position: relative;
    }

    * .aspect-ratio--16x9-ns {
      padding-bottom: 56.25%;
    }

    * .aspect-ratio--9x16-ns {
      padding-bottom: 177.77%;
    }

    * .aspect-ratio--4x3-ns {
      padding-bottom: 75%;
    }

    * .aspect-ratio--3x4-ns {
      padding-bottom: 133.33%;
    }

    * .aspect-ratio--6x4-ns {
      padding-bottom: 66.6%;
    }

    * .aspect-ratio--4x6-ns {
      padding-bottom: 150%;
    }

    * .aspect-ratio--8x5-ns {
      padding-bottom: 62.5%;
    }

    * .aspect-ratio--5x8-ns {
      padding-bottom: 160%;
    }

    * .aspect-ratio--7x5-ns {
      padding-bottom: 71.42%;
    }

    * .aspect-ratio--5x7-ns {
      padding-bottom: 140%;
    }

    * .aspect-ratio--1x1-ns {
      padding-bottom: 100%;
    }

    * .aspect-ratio--object-ns {
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 100;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .aspect-ratio-m {
      height: 0;
      position: relative;
    }

    * .aspect-ratio--16x9-m {
      padding-bottom: 56.25%;
    }

    * .aspect-ratio--9x16-m {
      padding-bottom: 177.77%;
    }

    * .aspect-ratio--4x3-m {
      padding-bottom: 75%;
    }

    * .aspect-ratio--3x4-m {
      padding-bottom: 133.33%;
    }

    * .aspect-ratio--6x4-m {
      padding-bottom: 66.6%;
    }

    * .aspect-ratio--4x6-m {
      padding-bottom: 150%;
    }

    * .aspect-ratio--8x5-m {
      padding-bottom: 62.5%;
    }

    * .aspect-ratio--5x8-m {
      padding-bottom: 160%;
    }

    * .aspect-ratio--7x5-m {
      padding-bottom: 71.42%;
    }

    * .aspect-ratio--5x7-m {
      padding-bottom: 140%;
    }

    * .aspect-ratio--1x1-m {
      padding-bottom: 100%;
    }

    * .aspect-ratio--object-m {
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 100;
    }
  }

  @media screen and (min-width: 60em) {
    * .aspect-ratio-l {
      height: 0;
      position: relative;
    }

    * .aspect-ratio--16x9-l {
      padding-bottom: 56.25%;
    }

    * .aspect-ratio--9x16-l {
      padding-bottom: 177.77%;
    }

    * .aspect-ratio--4x3-l {
      padding-bottom: 75%;
    }

    * .aspect-ratio--3x4-l {
      padding-bottom: 133.33%;
    }

    * .aspect-ratio--6x4-l {
      padding-bottom: 66.6%;
    }

    * .aspect-ratio--4x6-l {
      padding-bottom: 150%;
    }

    * .aspect-ratio--8x5-l {
      padding-bottom: 62.5%;
    }

    * .aspect-ratio--5x8-l {
      padding-bottom: 160%;
    }

    * .aspect-ratio--7x5-l {
      padding-bottom: 71.42%;
    }

    * .aspect-ratio--5x7-l {
      padding-bottom: 140%;
    }

    * .aspect-ratio--1x1-l {
      padding-bottom: 100%;
    }

    * .aspect-ratio--object-l {
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 100;
    }
  }

  * img {
    max-width: 100%;
  }

  * .cover {
    background-size: cover !important;
  }

  * .contain {
    background-size: contain !important;
  }

  @media screen and (min-width: 30em) {
    * .cover-ns {
      background-size: cover !important;
    }

    * .contain-ns {
      background-size: contain !important;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .cover-m {
      background-size: cover !important;
    }

    * .contain-m {
      background-size: contain !important;
    }
  }

  @media screen and (min-width: 60em) {
    * .cover-l {
      background-size: cover !important;
    }

    * .contain-l {
      background-size: contain !important;
    }
  }

  * .bg-center {
    background-position: 50%;
    background-repeat: no-repeat;
  }

  * .bg-top {
    background-position: top;
    background-repeat: no-repeat;
  }

  * .bg-right {
    background-position: 100%;
    background-repeat: no-repeat;
  }

  * .bg-bottom {
    background-position: bottom;
    background-repeat: no-repeat;
  }

  * .bg-left {
    background-position: 0;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 30em) {
    * .bg-center-ns {
      background-position: 50%;
      background-repeat: no-repeat;
    }

    * .bg-top-ns {
      background-position: top;
      background-repeat: no-repeat;
    }

    * .bg-right-ns {
      background-position: 100%;
      background-repeat: no-repeat;
    }

    * .bg-bottom-ns {
      background-position: bottom;
      background-repeat: no-repeat;
    }

    * .bg-left-ns {
      background-position: 0;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .bg-center-m {
      background-position: 50%;
      background-repeat: no-repeat;
    }

    * .bg-top-m {
      background-position: top;
      background-repeat: no-repeat;
    }

    * .bg-right-m {
      background-position: 100%;
      background-repeat: no-repeat;
    }

    * .bg-bottom-m {
      background-position: bottom;
      background-repeat: no-repeat;
    }

    * .bg-left-m {
      background-position: 0;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 60em) {
    * .bg-center-l {
      background-position: 50%;
      background-repeat: no-repeat;
    }

    * .bg-top-l {
      background-position: top;
      background-repeat: no-repeat;
    }

    * .bg-right-l {
      background-position: 100%;
      background-repeat: no-repeat;
    }

    * .bg-bottom-l {
      background-position: bottom;
      background-repeat: no-repeat;
    }

    * .bg-left-l {
      background-position: 0;
      background-repeat: no-repeat;
    }
  }

  * .outline {
    outline: 1px solid;
  }

  * .outline-transparent {
    outline: 1px solid transparent;
  }

  * .outline-0 {
    outline: 0;
  }

  @media screen and (min-width: 30em) {
    * .outline-ns {
      outline: 1px solid;
    }

    * .outline-transparent-ns {
      outline: 1px solid transparent;
    }

    * .outline-0-ns {
      outline: 0;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .outline-m {
      outline: 1px solid;
    }

    * .outline-transparent-m {
      outline: 1px solid transparent;
    }

    * .outline-0-m {
      outline: 0;
    }
  }

  @media screen and (min-width: 60em) {
    * .outline-l {
      outline: 1px solid;
    }

    * .outline-transparent-l {
      outline: 1px solid transparent;
    }

    * .outline-0-l {
      outline: 0;
    }
  }

  * .ba {
    border-style: solid;
    border-width: 1px;
  }

  * .bt {
    border-top-style: solid;
    border-top-width: 1px;
  }

  * .br {
    border-right-style: solid;
    border-right-width: 1px;
  }

  * .bb {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  * .bl {
    border-left-style: solid;
    border-left-width: 1px;
  }

  * .bn {
    border-style: none;
    border-width: 0;
  }

  @media screen and (min-width: 30em) {
    * .ba-ns {
      border-style: solid;
      border-width: 1px;
    }

    * .bt-ns {
      border-top-style: solid;
      border-top-width: 1px;
    }

    * .br-ns {
      border-right-style: solid;
      border-right-width: 1px;
    }

    * .bb-ns {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    * .bl-ns {
      border-left-style: solid;
      border-left-width: 1px;
    }

    * .bn-ns {
      border-style: none;
      border-width: 0;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .ba-m {
      border-style: solid;
      border-width: 1px;
    }

    * .bt-m {
      border-top-style: solid;
      border-top-width: 1px;
    }

    * .br-m {
      border-right-style: solid;
      border-right-width: 1px;
    }

    * .bb-m {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    * .bl-m {
      border-left-style: solid;
      border-left-width: 1px;
    }

    * .bn-m {
      border-style: none;
      border-width: 0;
    }
  }

  @media screen and (min-width: 60em) {
    * .ba-l {
      border-style: solid;
      border-width: 1px;
    }

    * .bt-l {
      border-top-style: solid;
      border-top-width: 1px;
    }

    * .br-l {
      border-right-style: solid;
      border-right-width: 1px;
    }

    * .bb-l {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    * .bl-l {
      border-left-style: solid;
      border-left-width: 1px;
    }

    * .bn-l {
      border-style: none;
      border-width: 0;
    }
  }

  * .b--black {
    border-color: #000;
  }

  * .b--near-black {
    border-color: #111;
  }

  * .b--dark-gray {
    border-color: #333;
  }

  * .b--mid-gray {
    border-color: #555;
  }

  * .b--gray {
    border-color: #777;
  }

  * .b--silver {
    border-color: #999;
  }

  * .b--light-silver {
    border-color: #aaa;
  }

  * .b--moon-gray {
    border-color: #ccc;
  }

  * .b--light-gray {
    border-color: #eee;
  }

  * .b--near-white {
    border-color: #f4f4f4;
  }

  * .b--white {
    border-color: #fff;
  }

  * .b--white-90 {
    border-color: hsla(0, 0%, 100%, 0.9);
  }

  * .b--white-80 {
    border-color: hsla(0, 0%, 100%, 0.8);
  }

  * .b--white-70 {
    border-color: hsla(0, 0%, 100%, 0.7);
  }

  * .b--white-60 {
    border-color: hsla(0, 0%, 100%, 0.6);
  }

  * .b--white-50 {
    border-color: hsla(0, 0%, 100%, 0.5);
  }

  * .b--white-40 {
    border-color: hsla(0, 0%, 100%, 0.4);
  }

  * .b--white-30 {
    border-color: hsla(0, 0%, 100%, 0.3);
  }

  * .b--white-20 {
    border-color: hsla(0, 0%, 100%, 0.2);
  }

  * .b--white-10 {
    border-color: hsla(0, 0%, 100%, 0.1);
  }

  * .b--white-05 {
    border-color: hsla(0, 0%, 100%, 0.05);
  }

  * .b--white-025 {
    border-color: hsla(0, 0%, 100%, 0.03);
  }

  * .b--white-0125 {
    border-color: hsla(0, 0%, 100%, 0.01);
  }

  * .b--black-90 {
    border-color: rgba(0, 0, 0, 0.9);
  }

  * .b--black-80 {
    border-color: rgba(0, 0, 0, 0.8);
  }

  * .b--black-70 {
    border-color: rgba(0, 0, 0, 0.7);
  }

  * .b--black-60 {
    border-color: rgba(0, 0, 0, 0.6);
  }

  * .b--black-50 {
    border-color: rgba(0, 0, 0, 0.5);
  }

  * .b--black-40 {
    border-color: rgba(0, 0, 0, 0.4);
  }

  * .b--black-30 {
    border-color: rgba(0, 0, 0, 0.3);
  }

  * .b--black-20 {
    border-color: rgba(0, 0, 0, 0.2);
  }

  * .b--black-10 {
    border-color: rgba(0, 0, 0, 0.1);
  }

  * .b--black-05 {
    border-color: rgba(0, 0, 0, 0.05);
  }

  * .b--black-025 {
    border-color: rgba(0, 0, 0, 0.03);
  }

  * .b--black-0125 {
    border-color: rgba(0, 0, 0, 0.01);
  }

  * .b--dark-red {
    border-color: #e7040f;
  }

  * .b--red {
    border-color: #ff4136;
  }

  * .b--light-red {
    border-color: #ff725c;
  }

  * .b--orange {
    border-color: #ff6300;
  }

  * .b--gold {
    border-color: #ffb700;
  }

  * .b--yellow {
    border-color: gold;
  }

  * .b--light-yellow {
    border-color: #fbf1a9;
  }

  * .b--purple {
    border-color: #5e2ca5;
  }

  * .b--light-purple {
    border-color: #a463f2;
  }

  * .b--dark-pink {
    border-color: #d5008f;
  }

  * .b--hot-pink {
    border-color: #ff41b4;
  }

  * .b--pink {
    border-color: #ff80cc;
  }

  * .b--light-pink {
    border-color: #ffa3d7;
  }

  * .b--dark-green {
    border-color: #137752;
  }

  * .b--green {
    border-color: #19a974;
  }

  * .b--light-green {
    border-color: #9eebcf;
  }

  * .b--navy {
    border-color: #001b44;
  }

  * .b--dark-blue {
    border-color: #00449e;
  }

  * .b--blue {
    border-color: #357edd;
  }

  * .b--light-blue {
    border-color: #96ccff;
  }

  * .b--lightest-blue {
    border-color: #cdecff;
  }

  * .b--washed-blue {
    border-color: #f6fffe;
  }

  * .b--washed-green {
    border-color: #e8fdf5;
  }

  * .b--washed-yellow {
    border-color: #fffceb;
  }

  * .b--washed-red {
    border-color: #ffdfdf;
  }

  * .b--transparent {
    border-color: transparent;
  }

  * .b--inherit {
    border-color: inherit;
  }

  * .br0 {
    border-radius: 0;
  }

  * .br1 {
    border-radius: 0.125rem;
  }

  * .br2 {
    border-radius: 0.25rem;
  }

  * .br3 {
    border-radius: 0.5rem;
  }

  * .br4 {
    border-radius: 1rem;
  }

  * .br-100 {
    border-radius: 100%;
  }

  * .br-pill {
    border-radius: 9999px;
  }

  * .br--bottom {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  * .br--top {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  * .br--right {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  * .br--left {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  @media screen and (min-width: 30em) {
    * .br0-ns {
      border-radius: 0;
    }

    * .br1-ns {
      border-radius: 0.125rem;
    }

    * .br2-ns {
      border-radius: 0.25rem;
    }

    * .br3-ns {
      border-radius: 0.5rem;
    }

    * .br4-ns {
      border-radius: 1rem;
    }

    * .br-100-ns {
      border-radius: 100%;
    }

    * .br-pill-ns {
      border-radius: 9999px;
    }

    * .br--bottom-ns {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    * .br--top-ns {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    * .br--right-ns {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    * .br--left-ns {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .br0-m {
      border-radius: 0;
    }

    * .br1-m {
      border-radius: 0.125rem;
    }

    * .br2-m {
      border-radius: 0.25rem;
    }

    * .br3-m {
      border-radius: 0.5rem;
    }

    * .br4-m {
      border-radius: 1rem;
    }

    * .br-100-m {
      border-radius: 100%;
    }

    * .br-pill-m {
      border-radius: 9999px;
    }

    * .br--bottom-m {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    * .br--top-m {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    * .br--right-m {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    * .br--left-m {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }

  @media screen and (min-width: 60em) {
    * .br0-l {
      border-radius: 0;
    }

    * .br1-l {
      border-radius: 0.125rem;
    }

    * .br2-l {
      border-radius: 0.25rem;
    }

    * .br3-l {
      border-radius: 0.5rem;
    }

    * .br4-l {
      border-radius: 1rem;
    }

    * .br-100-l {
      border-radius: 100%;
    }

    * .br-pill-l {
      border-radius: 9999px;
    }

    * .br--bottom-l {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    * .br--top-l {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    * .br--right-l {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    * .br--left-l {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }

  * .b--dotted {
    border-style: dotted;
  }

  * .b--dashed {
    border-style: dashed;
  }

  * .b--solid {
    border-style: solid;
  }

  * .b--none {
    border-style: none;
  }

  @media screen and (min-width: 30em) {
    * .b--dotted-ns {
      border-style: dotted;
    }

    * .b--dashed-ns {
      border-style: dashed;
    }

    * .b--solid-ns {
      border-style: solid;
    }

    * .b--none-ns {
      border-style: none;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .b--dotted-m {
      border-style: dotted;
    }

    * .b--dashed-m {
      border-style: dashed;
    }

    * .b--solid-m {
      border-style: solid;
    }

    * .b--none-m {
      border-style: none;
    }
  }

  @media screen and (min-width: 60em) {
    * .b--dotted-l {
      border-style: dotted;
    }

    * .b--dashed-l {
      border-style: dashed;
    }

    * .b--solid-l {
      border-style: solid;
    }

    * .b--none-l {
      border-style: none;
    }
  }

  * .bw0 {
    border-width: 0;
  }

  * .bw1 {
    border-width: 0.125rem;
  }

  * .bw2 {
    border-width: 0.25rem;
  }

  * .bw3 {
    border-width: 0.5rem;
  }

  * .bw4 {
    border-width: 1rem;
  }

  * .bw5 {
    border-width: 2rem;
  }

  * .bt-0 {
    border-top-width: 0;
  }

  * .br-0 {
    border-right-width: 0;
  }

  * .bb-0 {
    border-bottom-width: 0;
  }

  * .bl-0 {
    border-left-width: 0;
  }

  @media screen and (min-width: 30em) {
    * .bw0-ns {
      border-width: 0;
    }

    * .bw1-ns {
      border-width: 0.125rem;
    }

    * .bw2-ns {
      border-width: 0.25rem;
    }

    * .bw3-ns {
      border-width: 0.5rem;
    }

    * .bw4-ns {
      border-width: 1rem;
    }

    * .bw5-ns {
      border-width: 2rem;
    }

    * .bt-0-ns {
      border-top-width: 0;
    }

    * .br-0-ns {
      border-right-width: 0;
    }

    * .bb-0-ns {
      border-bottom-width: 0;
    }

    * .bl-0-ns {
      border-left-width: 0;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .bw0-m {
      border-width: 0;
    }

    * .bw1-m {
      border-width: 0.125rem;
    }

    * .bw2-m {
      border-width: 0.25rem;
    }

    * .bw3-m {
      border-width: 0.5rem;
    }

    * .bw4-m {
      border-width: 1rem;
    }

    * .bw5-m {
      border-width: 2rem;
    }

    * .bt-0-m {
      border-top-width: 0;
    }

    * .br-0-m {
      border-right-width: 0;
    }

    * .bb-0-m {
      border-bottom-width: 0;
    }

    * .bl-0-m {
      border-left-width: 0;
    }
  }

  @media screen and (min-width: 60em) {
    * .bw0-l {
      border-width: 0;
    }

    * .bw1-l {
      border-width: 0.125rem;
    }

    * .bw2-l {
      border-width: 0.25rem;
    }

    * .bw3-l {
      border-width: 0.5rem;
    }

    * .bw4-l {
      border-width: 1rem;
    }

    * .bw5-l {
      border-width: 2rem;
    }

    * .bt-0-l {
      border-top-width: 0;
    }

    * .br-0-l {
      border-right-width: 0;
    }

    * .bb-0-l {
      border-bottom-width: 0;
    }

    * .bl-0-l {
      border-left-width: 0;
    }
  }

  * .shadow-1 {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }

  * .shadow-2 {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }

  * .shadow-3 {
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  * .shadow-4 {
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  }

  * .shadow-5 {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 30em) {
    * .shadow-1-ns {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-2-ns {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-3-ns {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-4-ns {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }

    * .shadow-5-ns {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .shadow-1-m {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-2-m {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-3-m {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-4-m {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }

    * .shadow-5-m {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (min-width: 60em) {
    * .shadow-1-l {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-2-l {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-3-l {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }

    * .shadow-4-l {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }

    * .shadow-5-l {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }

  * .pre {
    overflow-x: auto;
    overflow-y: hidden;
    overflow: scroll;
  }

  * .top-0 {
    top: 0;
  }

  * .right-0 {
    right: 0;
  }

  * .bottom-0 {
    bottom: 0;
  }

  * .left-0 {
    left: 0;
  }

  * .top-1 {
    top: 1rem;
  }

  * .right-1 {
    right: 1rem;
  }

  * .bottom-1 {
    bottom: 1rem;
  }

  * .left-1 {
    left: 1rem;
  }

  * .top-2 {
    top: 2rem;
  }

  * .right-2 {
    right: 2rem;
  }

  * .bottom-2 {
    bottom: 2rem;
  }

  * .left-2 {
    left: 2rem;
  }

  * .top--1 {
    top: -1rem;
  }

  * .right--1 {
    right: -1rem;
  }

  * .bottom--1 {
    bottom: -1rem;
  }

  * .left--1 {
    left: -1rem;
  }

  * .top--2 {
    top: -2rem;
  }

  * .right--2 {
    right: -2rem;
  }

  * .bottom--2 {
    bottom: -2rem;
  }

  * .left--2 {
    left: -2rem;
  }

  * .absolute--fill {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  @media screen and (min-width: 30em) {
    * .top-0-ns {
      top: 0;
    }

    * .left-0-ns {
      left: 0;
    }

    * .right-0-ns {
      right: 0;
    }

    * .bottom-0-ns {
      bottom: 0;
    }

    * .top-1-ns {
      top: 1rem;
    }

    * .left-1-ns {
      left: 1rem;
    }

    * .right-1-ns {
      right: 1rem;
    }

    * .bottom-1-ns {
      bottom: 1rem;
    }

    * .top-2-ns {
      top: 2rem;
    }

    * .left-2-ns {
      left: 2rem;
    }

    * .right-2-ns {
      right: 2rem;
    }

    * .bottom-2-ns {
      bottom: 2rem;
    }

    * .top--1-ns {
      top: -1rem;
    }

    * .right--1-ns {
      right: -1rem;
    }

    * .bottom--1-ns {
      bottom: -1rem;
    }

    * .left--1-ns {
      left: -1rem;
    }

    * .top--2-ns {
      top: -2rem;
    }

    * .right--2-ns {
      right: -2rem;
    }

    * .bottom--2-ns {
      bottom: -2rem;
    }

    * .left--2-ns {
      left: -2rem;
    }

    * .absolute--fill-ns {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .top-0-m {
      top: 0;
    }

    * .left-0-m {
      left: 0;
    }

    * .right-0-m {
      right: 0;
    }

    * .bottom-0-m {
      bottom: 0;
    }

    * .top-1-m {
      top: 1rem;
    }

    * .left-1-m {
      left: 1rem;
    }

    * .right-1-m {
      right: 1rem;
    }

    * .bottom-1-m {
      bottom: 1rem;
    }

    * .top-2-m {
      top: 2rem;
    }

    * .left-2-m {
      left: 2rem;
    }

    * .right-2-m {
      right: 2rem;
    }

    * .bottom-2-m {
      bottom: 2rem;
    }

    * .top--1-m {
      top: -1rem;
    }

    * .right--1-m {
      right: -1rem;
    }

    * .bottom--1-m {
      bottom: -1rem;
    }

    * .left--1-m {
      left: -1rem;
    }

    * .top--2-m {
      top: -2rem;
    }

    * .right--2-m {
      right: -2rem;
    }

    * .bottom--2-m {
      bottom: -2rem;
    }

    * .left--2-m {
      left: -2rem;
    }

    * .absolute--fill-m {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }

  @media screen and (min-width: 60em) {
    * .top-0-l {
      top: 0;
    }

    * .left-0-l {
      left: 0;
    }

    * .right-0-l {
      right: 0;
    }

    * .bottom-0-l {
      bottom: 0;
    }

    * .top-1-l {
      top: 1rem;
    }

    * .left-1-l {
      left: 1rem;
    }

    * .right-1-l {
      right: 1rem;
    }

    * .bottom-1-l {
      bottom: 1rem;
    }

    * .top-2-l {
      top: 2rem;
    }

    * .left-2-l {
      left: 2rem;
    }

    * .right-2-l {
      right: 2rem;
    }

    * .bottom-2-l {
      bottom: 2rem;
    }

    * .top--1-l {
      top: -1rem;
    }

    * .right--1-l {
      right: -1rem;
    }

    * .bottom--1-l {
      bottom: -1rem;
    }

    * .left--1-l {
      left: -1rem;
    }

    * .top--2-l {
      top: -2rem;
    }

    * .right--2-l {
      right: -2rem;
    }

    * .bottom--2-l {
      bottom: -2rem;
    }

    * .left--2-l {
      left: -2rem;
    }

    * .absolute--fill-l {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }

  * .cf:after,
  * .cf:before {
    content: " ";
    display: table;
  }

  * .cf:after {
    clear: both;
  }

  * .cf {
    *zoom: 1;
  }

  * .cl {
    clear: left;
  }

  * .cr {
    clear: right;
  }

  * .cb {
    clear: both;
  }

  * .cn {
    clear: none;
  }

  @media screen and (min-width: 30em) {
    * .cl-ns {
      clear: left;
    }

    * .cr-ns {
      clear: right;
    }

    * .cb-ns {
      clear: both;
    }

    * .cn-ns {
      clear: none;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .cl-m {
      clear: left;
    }

    * .cr-m {
      clear: right;
    }

    * .cb-m {
      clear: both;
    }

    * .cn-m {
      clear: none;
    }
  }

  @media screen and (min-width: 60em) {
    * .cl-l {
      clear: left;
    }

    * .cr-l {
      clear: right;
    }

    * .cb-l {
      clear: both;
    }

    * .cn-l {
      clear: none;
    }
  }

  * .flex {
    display: flex;
  }

  * .inline-flex {
    display: inline-flex;
  }

  * .flex-auto {
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
  }

  * .flex-none {
    flex: none;
  }

  * .flex-column {
    flex-direction: column;
  }

  * .flex-row {
    flex-direction: row;
  }

  * .flex-wrap {
    flex-wrap: wrap;
  }

  * .flex-nowrap {
    flex-wrap: nowrap;
  }

  * .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  * .flex-column-reverse {
    flex-direction: column-reverse;
  }

  * .flex-row-reverse {
    flex-direction: row-reverse;
  }

  * .items-start {
    align-items: flex-start;
  }

  * .items-end {
    align-items: flex-end;
  }

  * .items-center {
    align-items: center;
  }

  * .items-baseline {
    align-items: baseline;
  }

  * .items-stretch {
    align-items: stretch;
  }

  * .self-start {
    align-self: flex-start;
  }

  * .self-end {
    align-self: flex-end;
  }

  * .self-center {
    align-self: center;
  }

  * .self-baseline {
    align-self: baseline;
  }

  * .self-stretch {
    align-self: stretch;
  }

  * .justify-start {
    justify-content: flex-start;
  }

  * .justify-end {
    justify-content: flex-end;
  }

  * .justify-center {
    justify-content: center;
  }

  * .justify-between {
    justify-content: space-between;
  }

  * .justify-around {
    justify-content: space-around;
  }

  * .content-start {
    align-content: flex-start;
  }

  * .content-end {
    align-content: flex-end;
  }

  * .content-center {
    align-content: center;
  }

  * .content-between {
    align-content: space-between;
  }

  * .content-around {
    align-content: space-around;
  }

  * .content-stretch {
    align-content: stretch;
  }

  * .order-0 {
    order: 0;
  }

  * .order-1 {
    order: 1;
  }

  * .order-2 {
    order: 2;
  }

  * .order-3 {
    order: 3;
  }

  * .order-4 {
    order: 4;
  }

  * .order-5 {
    order: 5;
  }

  * .order-6 {
    order: 6;
  }

  * .order-7 {
    order: 7;
  }

  * .order-8 {
    order: 8;
  }

  * .order-last {
    order: 99999;
  }

  * .flex-grow-0 {
    flex-grow: 0;
  }

  * .flex-grow-1 {
    flex-grow: 1;
  }

  * .flex-shrink-0 {
    flex-shrink: 0;
  }

  * .flex-shrink-1 {
    flex-shrink: 1;
  }

  @media screen and (min-width: 30em) {
    * .flex-ns {
      display: flex;
    }

    * .inline-flex-ns {
      display: inline-flex;
    }

    * .flex-auto-ns {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
    }

    * .flex-none-ns {
      flex: none;
    }

    * .flex-column-ns {
      flex-direction: column;
    }

    * .flex-row-ns {
      flex-direction: row;
    }

    * .flex-wrap-ns {
      flex-wrap: wrap;
    }

    * .flex-nowrap-ns {
      flex-wrap: nowrap;
    }

    * .flex-wrap-reverse-ns {
      flex-wrap: wrap-reverse;
    }

    * .flex-column-reverse-ns {
      flex-direction: column-reverse;
    }

    * .flex-row-reverse-ns {
      flex-direction: row-reverse;
    }

    * .items-start-ns {
      align-items: flex-start;
    }

    * .items-end-ns {
      align-items: flex-end;
    }

    * .items-center-ns {
      align-items: center;
    }

    * .items-baseline-ns {
      align-items: baseline;
    }

    * .items-stretch-ns {
      align-items: stretch;
    }

    * .self-start-ns {
      align-self: flex-start;
    }

    * .self-end-ns {
      align-self: flex-end;
    }

    * .self-center-ns {
      align-self: center;
    }

    * .self-baseline-ns {
      align-self: baseline;
    }

    * .self-stretch-ns {
      align-self: stretch;
    }

    * .justify-start-ns {
      justify-content: flex-start;
    }

    * .justify-end-ns {
      justify-content: flex-end;
    }

    * .justify-center-ns {
      justify-content: center;
    }

    * .justify-between-ns {
      justify-content: space-between;
    }

    * .justify-around-ns {
      justify-content: space-around;
    }

    * .content-start-ns {
      align-content: flex-start;
    }

    * .content-end-ns {
      align-content: flex-end;
    }

    * .content-center-ns {
      align-content: center;
    }

    * .content-between-ns {
      align-content: space-between;
    }

    * .content-around-ns {
      align-content: space-around;
    }

    * .content-stretch-ns {
      align-content: stretch;
    }

    * .order-0-ns {
      order: 0;
    }

    * .order-1-ns {
      order: 1;
    }

    * .order-2-ns {
      order: 2;
    }

    * .order-3-ns {
      order: 3;
    }

    * .order-4-ns {
      order: 4;
    }

    * .order-5-ns {
      order: 5;
    }

    * .order-6-ns {
      order: 6;
    }

    * .order-7-ns {
      order: 7;
    }

    * .order-8-ns {
      order: 8;
    }

    * .order-last-ns {
      order: 99999;
    }

    * .flex-grow-0-ns {
      flex-grow: 0;
    }

    * .flex-grow-1-ns {
      flex-grow: 1;
    }

    * .flex-shrink-0-ns {
      flex-shrink: 0;
    }

    * .flex-shrink-1-ns {
      flex-shrink: 1;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .flex-m {
      display: flex;
    }

    * .inline-flex-m {
      display: inline-flex;
    }

    * .flex-auto-m {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
    }

    * .flex-none-m {
      flex: none;
    }

    * .flex-column-m {
      flex-direction: column;
    }

    * .flex-row-m {
      flex-direction: row;
    }

    * .flex-wrap-m {
      flex-wrap: wrap;
    }

    * .flex-nowrap-m {
      flex-wrap: nowrap;
    }

    * .flex-wrap-reverse-m {
      flex-wrap: wrap-reverse;
    }

    * .flex-column-reverse-m {
      flex-direction: column-reverse;
    }

    * .flex-row-reverse-m {
      flex-direction: row-reverse;
    }

    * .items-start-m {
      align-items: flex-start;
    }

    * .items-end-m {
      align-items: flex-end;
    }

    * .items-center-m {
      align-items: center;
    }

    * .items-baseline-m {
      align-items: baseline;
    }

    * .items-stretch-m {
      align-items: stretch;
    }

    * .self-start-m {
      align-self: flex-start;
    }

    * .self-end-m {
      align-self: flex-end;
    }

    * .self-center-m {
      align-self: center;
    }

    * .self-baseline-m {
      align-self: baseline;
    }

    * .self-stretch-m {
      align-self: stretch;
    }

    * .justify-start-m {
      justify-content: flex-start;
    }

    * .justify-end-m {
      justify-content: flex-end;
    }

    * .justify-center-m {
      justify-content: center;
    }

    * .justify-between-m {
      justify-content: space-between;
    }

    * .justify-around-m {
      justify-content: space-around;
    }

    * .content-start-m {
      align-content: flex-start;
    }

    * .content-end-m {
      align-content: flex-end;
    }

    * .content-center-m {
      align-content: center;
    }

    * .content-between-m {
      align-content: space-between;
    }

    * .content-around-m {
      align-content: space-around;
    }

    * .content-stretch-m {
      align-content: stretch;
    }

    * .order-0-m {
      order: 0;
    }

    * .order-1-m {
      order: 1;
    }

    * .order-2-m {
      order: 2;
    }

    * .order-3-m {
      order: 3;
    }

    * .order-4-m {
      order: 4;
    }

    * .order-5-m {
      order: 5;
    }

    * .order-6-m {
      order: 6;
    }

    * .order-7-m {
      order: 7;
    }

    * .order-8-m {
      order: 8;
    }

    * .order-last-m {
      order: 99999;
    }

    * .flex-grow-0-m {
      flex-grow: 0;
    }

    * .flex-grow-1-m {
      flex-grow: 1;
    }

    * .flex-shrink-0-m {
      flex-shrink: 0;
    }

    * .flex-shrink-1-m {
      flex-shrink: 1;
    }
  }

  @media screen and (min-width: 60em) {
    * .flex-l {
      display: flex;
    }

    * .inline-flex-l {
      display: inline-flex;
    }

    * .flex-auto-l {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
    }

    * .flex-none-l {
      flex: none;
    }

    * .flex-column-l {
      flex-direction: column;
    }

    * .flex-row-l {
      flex-direction: row;
    }

    * .flex-wrap-l {
      flex-wrap: wrap;
    }

    * .flex-nowrap-l {
      flex-wrap: nowrap;
    }

    * .flex-wrap-reverse-l {
      flex-wrap: wrap-reverse;
    }

    * .flex-column-reverse-l {
      flex-direction: column-reverse;
    }

    * .flex-row-reverse-l {
      flex-direction: row-reverse;
    }

    * .items-start-l {
      align-items: flex-start;
    }

    * .items-end-l {
      align-items: flex-end;
    }

    * .items-center-l {
      align-items: center;
    }

    * .items-baseline-l {
      align-items: baseline;
    }

    * .items-stretch-l {
      align-items: stretch;
    }

    * .self-start-l {
      align-self: flex-start;
    }

    * .self-end-l {
      align-self: flex-end;
    }

    * .self-center-l {
      align-self: center;
    }

    * .self-baseline-l {
      align-self: baseline;
    }

    * .self-stretch-l {
      align-self: stretch;
    }

    * .justify-start-l {
      justify-content: flex-start;
    }

    * .justify-end-l {
      justify-content: flex-end;
    }

    * .justify-center-l {
      justify-content: center;
    }

    * .justify-between-l {
      justify-content: space-between;
    }

    * .justify-around-l {
      justify-content: space-around;
    }

    * .content-start-l {
      align-content: flex-start;
    }

    * .content-end-l {
      align-content: flex-end;
    }

    * .content-center-l {
      align-content: center;
    }

    * .content-between-l {
      align-content: space-between;
    }

    * .content-around-l {
      align-content: space-around;
    }

    * .content-stretch-l {
      align-content: stretch;
    }

    * .order-0-l {
      order: 0;
    }

    * .order-1-l {
      order: 1;
    }

    * .order-2-l {
      order: 2;
    }

    * .order-3-l {
      order: 3;
    }

    * .order-4-l {
      order: 4;
    }

    * .order-5-l {
      order: 5;
    }

    * .order-6-l {
      order: 6;
    }

    * .order-7-l {
      order: 7;
    }

    * .order-8-l {
      order: 8;
    }

    * .order-last-l {
      order: 99999;
    }

    * .flex-grow-0-l {
      flex-grow: 0;
    }

    * .flex-grow-1-l {
      flex-grow: 1;
    }

    * .flex-shrink-0-l {
      flex-shrink: 0;
    }

    * .flex-shrink-1-l {
      flex-shrink: 1;
    }
  }

  * .dn {
    display: none;
  }

  * .di {
    display: inline;
  }

  * .db {
    display: block;
  }

  * .dib {
    display: inline-block;
  }

  * .dit {
    display: inline-table;
  }

  * .dt {
    display: table;
  }

  * .dtc {
    display: table-cell;
  }

  * .dt-row {
    display: table-row;
  }

  * .dt-row-group {
    display: table-row-group;
  }

  * .dt-column {
    display: table-column;
  }

  * .dt-column-group {
    display: table-column-group;
  }

  * .dt--fixed {
    table-layout: fixed;
    width: 100%;
  }

  @media screen and (min-width: 30em) {
    * .dn-ns {
      display: none;
    }

    * .di-ns {
      display: inline;
    }

    * .db-ns {
      display: block;
    }

    * .dib-ns {
      display: inline-block;
    }

    * .dit-ns {
      display: inline-table;
    }

    * .dt-ns {
      display: table;
    }

    * .dtc-ns {
      display: table-cell;
    }

    * .dt-row-ns {
      display: table-row;
    }

    * .dt-row-group-ns {
      display: table-row-group;
    }

    * .dt-column-ns {
      display: table-column;
    }

    * .dt-column-group-ns {
      display: table-column-group;
    }

    * .dt--fixed-ns {
      table-layout: fixed;
      width: 100%;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .dn-m {
      display: none;
    }

    * .di-m {
      display: inline;
    }

    * .db-m {
      display: block;
    }

    * .dib-m {
      display: inline-block;
    }

    * .dit-m {
      display: inline-table;
    }

    * .dt-m {
      display: table;
    }

    * .dtc-m {
      display: table-cell;
    }

    * .dt-row-m {
      display: table-row;
    }

    * .dt-row-group-m {
      display: table-row-group;
    }

    * .dt-column-m {
      display: table-column;
    }

    * .dt-column-group-m {
      display: table-column-group;
    }

    * .dt--fixed-m {
      table-layout: fixed;
      width: 100%;
    }
  }

  @media screen and (min-width: 60em) {
    * .dn-l {
      display: none;
    }

    * .di-l {
      display: inline;
    }

    * .db-l {
      display: block;
    }

    * .dib-l {
      display: inline-block;
    }

    * .dit-l {
      display: inline-table;
    }

    * .dt-l {
      display: table;
    }

    * .dtc-l {
      display: table-cell;
    }

    * .dt-row-l {
      display: table-row;
    }

    * .dt-row-group-l {
      display: table-row-group;
    }

    * .dt-column-l {
      display: table-column;
    }

    * .dt-column-group-l {
      display: table-column-group;
    }

    * .dt--fixed-l {
      table-layout: fixed;
      width: 100%;
    }
  }

  * .fl {
    _display: inline;
    float: left;
  }

  * .fr {
    _display: inline;
    float: right;
  }

  * .fn {
    float: none;
  }

  @media screen and (min-width: 30em) {
    * .fl-ns {
      _display: inline;
      float: left;
    }

    * .fr-ns {
      _display: inline;
      float: right;
    }

    * .fn-ns {
      float: none;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .fl-m {
      _display: inline;
      float: left;
    }

    * .fr-m {
      _display: inline;
      float: right;
    }

    * .fn-m {
      float: none;
    }
  }

  @media screen and (min-width: 60em) {
    * .fl-l {
      _display: inline;
      float: left;
    }

    * .fr-l {
      _display: inline;
      float: right;
    }

    * .fn-l {
      float: none;
    }
  }

  * .sans-serif {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica, helvetica neue, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
  }

  * .serif {
    font-family: georgia, serif;
  }

  * .system-sans-serif {
    font-family: sans-serif;
  }

  * .system-serif {
    font-family: serif;
  }

  * .code,
  * code {
    font-family: Consolas, monaco, monospace;
  }

  * .courier {
    font-family: Courier Next, courier, monospace;
  }

  * .helvetica {
    font-family: helvetica neue, helvetica, sans-serif;
  }

  * .avenir {
    font-family: avenir next, avenir, sans-serif;
  }

  * .athelas {
    font-family: athelas, georgia, serif;
  }

  * .georgia {
    font-family: georgia, serif;
  }

  * .times {
    font-family: times, serif;
  }

  * .bodoni {
    font-family: Bodoni MT, serif;
  }

  * .calisto {
    font-family: Calisto MT, serif;
  }

  * .garamond {
    font-family: garamond, serif;
  }

  * .baskerville {
    font-family: baskerville, serif;
  }

  * .i {
    font-style: italic;
  }

  * .fs-normal {
    font-style: normal;
  }

  @media screen and (min-width: 30em) {
    * .i-ns {
      font-style: italic;
    }

    * .fs-normal-ns {
      font-style: normal;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .i-m {
      font-style: italic;
    }

    * .fs-normal-m {
      font-style: normal;
    }
  }

  @media screen and (min-width: 60em) {
    * .i-l {
      font-style: italic;
    }

    * .fs-normal-l {
      font-style: normal;
    }
  }

  * .normal {
    font-weight: 400;
  }

  * .b {
    font-weight: 700;
  }

  * .fw1 {
    font-weight: 100;
  }

  * .fw2 {
    font-weight: 200;
  }

  * .fw3 {
    font-weight: 300;
  }

  * .fw4 {
    font-weight: 400;
  }

  * .fw5 {
    font-weight: 500;
  }

  * .fw6 {
    font-weight: 600;
  }

  * .fw7 {
    font-weight: 700;
  }

  * .fw8 {
    font-weight: 800;
  }

  * .fw9 {
    font-weight: 900;
  }

  @media screen and (min-width: 30em) {
    * .normal-ns {
      font-weight: 400;
    }

    * .b-ns {
      font-weight: 700;
    }

    * .fw1-ns {
      font-weight: 100;
    }

    * .fw2-ns {
      font-weight: 200;
    }

    * .fw3-ns {
      font-weight: 300;
    }

    * .fw4-ns {
      font-weight: 400;
    }

    * .fw5-ns {
      font-weight: 500;
    }

    * .fw6-ns {
      font-weight: 600;
    }

    * .fw7-ns {
      font-weight: 700;
    }

    * .fw8-ns {
      font-weight: 800;
    }

    * .fw9-ns {
      font-weight: 900;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .normal-m {
      font-weight: 400;
    }

    * .b-m {
      font-weight: 700;
    }

    * .fw1-m {
      font-weight: 100;
    }

    * .fw2-m {
      font-weight: 200;
    }

    * .fw3-m {
      font-weight: 300;
    }

    * .fw4-m {
      font-weight: 400;
    }

    * .fw5-m {
      font-weight: 500;
    }

    * .fw6-m {
      font-weight: 600;
    }

    * .fw7-m {
      font-weight: 700;
    }

    * .fw8-m {
      font-weight: 800;
    }

    * .fw9-m {
      font-weight: 900;
    }
  }

  @media screen and (min-width: 60em) {
    * .normal-l {
      font-weight: 400;
    }

    * .b-l {
      font-weight: 700;
    }

    * .fw1-l {
      font-weight: 100;
    }

    * .fw2-l {
      font-weight: 200;
    }

    * .fw3-l {
      font-weight: 300;
    }

    * .fw4-l {
      font-weight: 400;
    }

    * .fw5-l {
      font-weight: 500;
    }

    * .fw6-l {
      font-weight: 600;
    }

    * .fw7-l {
      font-weight: 700;
    }

    * .fw8-l {
      font-weight: 800;
    }

    * .fw9-l {
      font-weight: 900;
    }
  }

  * .input-reset {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  * .button-reset::-moz-focus-inner,
  * .input-reset::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  * .h1 {
    height: 1rem;
  }

  * .h2 {
    height: 2rem;
  }

  * .h3 {
    height: 4rem;
  }

  * .h4 {
    height: 8rem;
  }

  * .h5 {
    height: 16rem;
  }

  * .h-25 {
    height: 25%;
  }

  * .h-50 {
    height: 50%;
  }

  * .h-75 {
    height: 75%;
  }

  * .h-100 {
    height: 100%;
  }

  * .min-h-100 {
    min-height: 100%;
  }

  * .vh-25 {
    height: 25vh;
  }

  * .vh-50 {
    height: 50vh;
  }

  * .vh-75 {
    height: 75vh;
  }

  * .vh-100 {
    height: 100vh;
  }

  * .min-vh-100 {
    min-height: 100vh;
  }

  * .h-auto {
    height: auto;
  }

  * .h-inherit {
    height: inherit;
  }

  @media screen and (min-width: 30em) {
    * .h1-ns {
      height: 1rem;
    }

    * .h2-ns {
      height: 2rem;
    }

    * .h3-ns {
      height: 4rem;
    }

    * .h4-ns {
      height: 8rem;
    }

    * .h5-ns {
      height: 16rem;
    }

    * .h-25-ns {
      height: 25%;
    }

    * .h-50-ns {
      height: 50%;
    }

    * .h-75-ns {
      height: 75%;
    }

    * .h-100-ns {
      height: 100%;
    }

    * .min-h-100-ns {
      min-height: 100%;
    }

    * .vh-25-ns {
      height: 25vh;
    }

    * .vh-50-ns {
      height: 50vh;
    }

    * .vh-75-ns {
      height: 75vh;
    }

    * .vh-100-ns {
      height: 100vh;
    }

    * .min-vh-100-ns {
      min-height: 100vh;
    }

    * .h-auto-ns {
      height: auto;
    }

    * .h-inherit-ns {
      height: inherit;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .h1-m {
      height: 1rem;
    }

    * .h2-m {
      height: 2rem;
    }

    * .h3-m {
      height: 4rem;
    }

    * .h4-m {
      height: 8rem;
    }

    * .h5-m {
      height: 16rem;
    }

    * .h-25-m {
      height: 25%;
    }

    * .h-50-m {
      height: 50%;
    }

    * .h-75-m {
      height: 75%;
    }

    * .h-100-m {
      height: 100%;
    }

    * .min-h-100-m {
      min-height: 100%;
    }

    * .vh-25-m {
      height: 25vh;
    }

    * .vh-50-m {
      height: 50vh;
    }

    * .vh-75-m {
      height: 75vh;
    }

    * .vh-100-m {
      height: 100vh;
    }

    * .min-vh-100-m {
      min-height: 100vh;
    }

    * .h-auto-m {
      height: auto;
    }

    * .h-inherit-m {
      height: inherit;
    }
  }

  @media screen and (min-width: 60em) {
    * .h1-l {
      height: 1rem;
    }

    * .h2-l {
      height: 2rem;
    }

    * .h3-l {
      height: 4rem;
    }

    * .h4-l {
      height: 8rem;
    }

    * .h5-l {
      height: 16rem;
    }

    * .h-25-l {
      height: 25%;
    }

    * .h-50-l {
      height: 50%;
    }

    * .h-75-l {
      height: 75%;
    }

    * .h-100-l {
      height: 100%;
    }

    * .min-h-100-l {
      min-height: 100%;
    }

    * .vh-25-l {
      height: 25vh;
    }

    * .vh-50-l {
      height: 50vh;
    }

    * .vh-75-l {
      height: 75vh;
    }

    * .vh-100-l {
      height: 100vh;
    }

    * .min-vh-100-l {
      min-height: 100vh;
    }

    * .h-auto-l {
      height: auto;
    }

    * .h-inherit-l {
      height: inherit;
    }
  }

  * .tracked {
    letter-spacing: 0.1em;
  }

  * .tracked-tight {
    letter-spacing: -0.05em;
  }

  * .tracked-mega {
    letter-spacing: 0.25em;
  }

  @media screen and (min-width: 30em) {
    * .tracked-ns {
      letter-spacing: 0.1em;
    }

    * .tracked-tight-ns {
      letter-spacing: -0.05em;
    }

    * .tracked-mega-ns {
      letter-spacing: 0.25em;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .tracked-m {
      letter-spacing: 0.1em;
    }

    * .tracked-tight-m {
      letter-spacing: -0.05em;
    }

    * .tracked-mega-m {
      letter-spacing: 0.25em;
    }
  }

  @media screen and (min-width: 60em) {
    * .tracked-l {
      letter-spacing: 0.1em;
    }

    * .tracked-tight-l {
      letter-spacing: -0.05em;
    }

    * .tracked-mega-l {
      letter-spacing: 0.25em;
    }
  }

  * .lh-solid {
    line-height: 1;
  }

  * .lh-title {
    line-height: 1.25;
  }

  * .lh-copy {
    line-height: 1.5;
  }

  @media screen and (min-width: 30em) {
    * .lh-solid-ns {
      line-height: 1;
    }

    * .lh-title-ns {
      line-height: 1.25;
    }

    * .lh-copy-ns {
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .lh-solid-m {
      line-height: 1;
    }

    * .lh-title-m {
      line-height: 1.25;
    }

    * .lh-copy-m {
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 60em) {
    * .lh-solid-l {
      line-height: 1;
    }

    * .lh-title-l {
      line-height: 1.25;
    }

    * .lh-copy-l {
      line-height: 1.5;
    }
  }

  * .link {
    text-decoration: none;
  }

  * .link,
  * .link:active,
  * .link:focus,
  * .link:hover,
  * .link:link,
  * .link:visited {
    transition: color 0.15s ease-in;
  }

  * .link:focus {
    outline: 1px dotted currentColor;
  }

  * .list {
    list-style-type: none;
  }

  * .mw-100 {
    max-width: 100%;
  }

  * .mw1 {
    max-width: 1rem;
  }

  * .mw2 {
    max-width: 2rem;
  }

  * .mw3 {
    max-width: 4rem;
  }

  * .mw4 {
    max-width: 8rem;
  }

  * .mw5 {
    max-width: 16rem;
  }

  * .mw6 {
    max-width: 32rem;
  }

  * .mw7 {
    max-width: 48rem;
  }

  * .mw8 {
    max-width: 64rem;
  }

  * .mw9 {
    max-width: 96rem;
  }

  * .mw-none {
    max-width: none;
  }

  @media screen and (min-width: 30em) {
    * .mw-100-ns {
      max-width: 100%;
    }

    * .mw1-ns {
      max-width: 1rem;
    }

    * .mw2-ns {
      max-width: 2rem;
    }

    * .mw3-ns {
      max-width: 4rem;
    }

    * .mw4-ns {
      max-width: 8rem;
    }

    * .mw5-ns {
      max-width: 16rem;
    }

    * .mw6-ns {
      max-width: 32rem;
    }

    * .mw7-ns {
      max-width: 48rem;
    }

    * .mw8-ns {
      max-width: 64rem;
    }

    * .mw9-ns {
      max-width: 96rem;
    }

    * .mw-none-ns {
      max-width: none;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .mw-100-m {
      max-width: 100%;
    }

    * .mw1-m {
      max-width: 1rem;
    }

    * .mw2-m {
      max-width: 2rem;
    }

    * .mw3-m {
      max-width: 4rem;
    }

    * .mw4-m {
      max-width: 8rem;
    }

    * .mw5-m {
      max-width: 16rem;
    }

    * .mw6-m {
      max-width: 32rem;
    }

    * .mw7-m {
      max-width: 48rem;
    }

    * .mw8-m {
      max-width: 64rem;
    }

    * .mw9-m {
      max-width: 96rem;
    }

    * .mw-none-m {
      max-width: none;
    }
  }

  @media screen and (min-width: 60em) {
    * .mw-100-l {
      max-width: 100%;
    }

    * .mw1-l {
      max-width: 1rem;
    }

    * .mw2-l {
      max-width: 2rem;
    }

    * .mw3-l {
      max-width: 4rem;
    }

    * .mw4-l {
      max-width: 8rem;
    }

    * .mw5-l {
      max-width: 16rem;
    }

    * .mw6-l {
      max-width: 32rem;
    }

    * .mw7-l {
      max-width: 48rem;
    }

    * .mw8-l {
      max-width: 64rem;
    }

    * .mw9-l {
      max-width: 96rem;
    }

    * .mw-none-l {
      max-width: none;
    }
  }

  * .w1 {
    width: 1rem;
  }

  * .w2 {
    width: 2rem;
  }

  * .w3 {
    width: 4rem;
  }

  * .w4 {
    width: 8rem;
  }

  * .w5 {
    width: 16rem;
  }

  * .w-10 {
    width: 10%;
  }

  * .w-20 {
    width: 20%;
  }

  * .w-25 {
    width: 25%;
  }

  * .w-30 {
    width: 30%;
  }

  * .w-33 {
    width: 33%;
  }

  * .w-34 {
    width: 34%;
  }

  * .w-40 {
    width: 40%;
  }

  * .w-50 {
    width: 50%;
  }

  * .w-60 {
    width: 60%;
  }

  * .w-70 {
    width: 70%;
  }

  * .w-75 {
    width: 75%;
  }

  * .w-80 {
    width: 80%;
  }

  * .w-90 {
    width: 90%;
  }

  * .w-100 {
    width: 100%;
  }

  * .w-third {
    width: 33.3333333333%;
  }

  * .w-two-thirds {
    width: 66.6666666667%;
  }

  * .w-auto {
    width: auto;
  }

  @media screen and (min-width: 30em) {
    * .w1-ns {
      width: 1rem;
    }

    * .w2-ns {
      width: 2rem;
    }

    * .w3-ns {
      width: 4rem;
    }

    * .w4-ns {
      width: 8rem;
    }

    * .w5-ns {
      width: 16rem;
    }

    * .w-10-ns {
      width: 10%;
    }

    * .w-20-ns {
      width: 20%;
    }

    * .w-25-ns {
      width: 25%;
    }

    * .w-30-ns {
      width: 30%;
    }

    * .w-33-ns {
      width: 33%;
    }

    * .w-34-ns {
      width: 34%;
    }

    * .w-40-ns {
      width: 40%;
    }

    * .w-50-ns {
      width: 50%;
    }

    * .w-60-ns {
      width: 60%;
    }

    * .w-70-ns {
      width: 70%;
    }

    * .w-75-ns {
      width: 75%;
    }

    * .w-80-ns {
      width: 80%;
    }

    * .w-90-ns {
      width: 90%;
    }

    * .w-100-ns {
      width: 100%;
    }

    * .w-third-ns {
      width: 33.3333333333%;
    }

    * .w-two-thirds-ns {
      width: 66.6666666667%;
    }

    * .w-auto-ns {
      width: auto;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .w1-m {
      width: 1rem;
    }

    * .w2-m {
      width: 2rem;
    }

    * .w3-m {
      width: 4rem;
    }

    * .w4-m {
      width: 8rem;
    }

    * .w5-m {
      width: 16rem;
    }

    * .w-10-m {
      width: 10%;
    }

    * .w-20-m {
      width: 20%;
    }

    * .w-25-m {
      width: 25%;
    }

    * .w-30-m {
      width: 30%;
    }

    * .w-33-m {
      width: 33%;
    }

    * .w-34-m {
      width: 34%;
    }

    * .w-40-m {
      width: 40%;
    }

    * .w-50-m {
      width: 50%;
    }

    * .w-60-m {
      width: 60%;
    }

    * .w-70-m {
      width: 70%;
    }

    * .w-75-m {
      width: 75%;
    }

    * .w-80-m {
      width: 80%;
    }

    * .w-90-m {
      width: 90%;
    }

    * .w-100-m {
      width: 100%;
    }

    * .w-third-m {
      width: 33.3333333333%;
    }

    * .w-two-thirds-m {
      width: 66.6666666667%;
    }

    * .w-auto-m {
      width: auto;
    }
  }

  @media screen and (min-width: 60em) {
    * .w1-l {
      width: 1rem;
    }

    * .w2-l {
      width: 2rem;
    }

    * .w3-l {
      width: 4rem;
    }

    * .w4-l {
      width: 8rem;
    }

    * .w5-l {
      width: 16rem;
    }

    * .w-10-l {
      width: 10%;
    }

    * .w-20-l {
      width: 20%;
    }

    * .w-25-l {
      width: 25%;
    }

    * .w-30-l {
      width: 30%;
    }

    * .w-33-l {
      width: 33%;
    }

    * .w-34-l {
      width: 34%;
    }

    * .w-40-l {
      width: 40%;
    }

    * .w-50-l {
      width: 50%;
    }

    * .w-60-l {
      width: 60%;
    }

    * .w-70-l {
      width: 70%;
    }

    * .w-75-l {
      width: 75%;
    }

    * .w-80-l {
      width: 80%;
    }

    * .w-90-l {
      width: 90%;
    }

    * .w-100-l {
      width: 100%;
    }

    * .w-third-l {
      width: 33.3333333333%;
    }

    * .w-two-thirds-l {
      width: 66.6666666667%;
    }

    * .w-auto-l {
      width: auto;
    }
  }

  * .overflow-visible {
    overflow: visible;
  }

  * .overflow-hidden {
    overflow: hidden;
  }

  * .overflow-scroll {
    overflow: scroll;
  }

  * .overflow-auto {
    overflow: auto;
  }

  * .overflow-x-visible {
    overflow-x: visible;
  }

  * .overflow-x-hidden {
    overflow-x: hidden;
  }

  * .overflow-x-scroll {
    overflow-x: scroll;
  }

  * .overflow-x-auto {
    overflow-x: auto;
  }

  * .overflow-y-visible {
    overflow-y: visible;
  }

  * .overflow-y-hidden {
    overflow-y: hidden;
  }

  * .overflow-y-scroll {
    overflow-y: scroll;
  }

  * .overflow-y-auto {
    overflow-y: auto;
  }

  @media screen and (min-width: 30em) {
    * .overflow-visible-ns {
      overflow: visible;
    }

    * .overflow-hidden-ns {
      overflow: hidden;
    }

    * .overflow-scroll-ns {
      overflow: scroll;
    }

    * .overflow-auto-ns {
      overflow: auto;
    }

    * .overflow-x-visible-ns {
      overflow-x: visible;
    }

    * .overflow-x-hidden-ns {
      overflow-x: hidden;
    }

    * .overflow-x-scroll-ns {
      overflow-x: scroll;
    }

    * .overflow-x-auto-ns {
      overflow-x: auto;
    }

    * .overflow-y-visible-ns {
      overflow-y: visible;
    }

    * .overflow-y-hidden-ns {
      overflow-y: hidden;
    }

    * .overflow-y-scroll-ns {
      overflow-y: scroll;
    }

    * .overflow-y-auto-ns {
      overflow-y: auto;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .overflow-visible-m {
      overflow: visible;
    }

    * .overflow-hidden-m {
      overflow: hidden;
    }

    * .overflow-scroll-m {
      overflow: scroll;
    }

    * .overflow-auto-m {
      overflow: auto;
    }

    * .overflow-x-visible-m {
      overflow-x: visible;
    }

    * .overflow-x-hidden-m {
      overflow-x: hidden;
    }

    * .overflow-x-scroll-m {
      overflow-x: scroll;
    }

    * .overflow-x-auto-m {
      overflow-x: auto;
    }

    * .overflow-y-visible-m {
      overflow-y: visible;
    }

    * .overflow-y-hidden-m {
      overflow-y: hidden;
    }

    * .overflow-y-scroll-m {
      overflow-y: scroll;
    }

    * .overflow-y-auto-m {
      overflow-y: auto;
    }
  }

  @media screen and (min-width: 60em) {
    * .overflow-visible-l {
      overflow: visible;
    }

    * .overflow-hidden-l {
      overflow: hidden;
    }

    * .overflow-scroll-l {
      overflow: scroll;
    }

    * .overflow-auto-l {
      overflow: auto;
    }

    * .overflow-x-visible-l {
      overflow-x: visible;
    }

    * .overflow-x-hidden-l {
      overflow-x: hidden;
    }

    * .overflow-x-scroll-l {
      overflow-x: scroll;
    }

    * .overflow-x-auto-l {
      overflow-x: auto;
    }

    * .overflow-y-visible-l {
      overflow-y: visible;
    }

    * .overflow-y-hidden-l {
      overflow-y: hidden;
    }

    * .overflow-y-scroll-l {
      overflow-y: scroll;
    }

    * .overflow-y-auto-l {
      overflow-y: auto;
    }
  }

  * .static {
    position: static;
  }

  * .relative {
    position: relative;
  }

  * .absolute {
    position: absolute;
  }

  * .fixed {
    position: fixed;
  }

  @media screen and (min-width: 30em) {
    * .static-ns {
      position: static;
    }

    * .relative-ns {
      position: relative;
    }

    * .absolute-ns {
      position: absolute;
    }

    * .fixed-ns {
      position: fixed;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .static-m {
      position: static;
    }

    * .relative-m {
      position: relative;
    }

    * .absolute-m {
      position: absolute;
    }

    * .fixed-m {
      position: fixed;
    }
  }

  @media screen and (min-width: 60em) {
    * .static-l {
      position: static;
    }

    * .relative-l {
      position: relative;
    }

    * .absolute-l {
      position: absolute;
    }

    * .fixed-l {
      position: fixed;
    }
  }

  * .o-100 {
    opacity: 1;
  }

  * .o-90 {
    opacity: 0.9;
  }

  * .o-80 {
    opacity: 0.8;
  }

  * .o-70 {
    opacity: 0.7;
  }

  * .o-60 {
    opacity: 0.6;
  }

  * .o-50 {
    opacity: 0.5;
  }

  * .o-40 {
    opacity: 0.4;
  }

  * .o-30 {
    opacity: 0.3;
  }

  * .o-20 {
    opacity: 0.2;
  }

  * .o-10 {
    opacity: 0.1;
  }

  * .o-05 {
    opacity: 0.05;
  }

  * .o-025 {
    opacity: 0.025;
  }

  * .o-0 {
    opacity: 0;
  }

  * .rotate-45 {
    transform: rotate(45deg);
  }

  * .rotate-90 {
    transform: rotate(90deg);
  }

  * .rotate-135 {
    transform: rotate(135deg);
  }

  * .rotate-180 {
    transform: rotate(180deg);
  }

  * .rotate-225 {
    transform: rotate(225deg);
  }

  * .rotate-270 {
    transform: rotate(270deg);
  }

  * .rotate-315 {
    transform: rotate(315deg);
  }

  @media screen and (min-width: 30em) {
    * .rotate-45-ns {
      transform: rotate(45deg);
    }

    * .rotate-90-ns {
      transform: rotate(90deg);
    }

    * .rotate-135-ns {
      transform: rotate(135deg);
    }

    * .rotate-180-ns {
      transform: rotate(180deg);
    }

    * .rotate-225-ns {
      transform: rotate(225deg);
    }

    * .rotate-270-ns {
      transform: rotate(270deg);
    }

    * .rotate-315-ns {
      transform: rotate(315deg);
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .rotate-45-m {
      transform: rotate(45deg);
    }

    * .rotate-90-m {
      transform: rotate(90deg);
    }

    * .rotate-135-m {
      transform: rotate(135deg);
    }

    * .rotate-180-m {
      transform: rotate(180deg);
    }

    * .rotate-225-m {
      transform: rotate(225deg);
    }

    * .rotate-270-m {
      transform: rotate(270deg);
    }

    * .rotate-315-m {
      transform: rotate(315deg);
    }
  }

  @media screen and (min-width: 60em) {
    * .rotate-45-l {
      transform: rotate(45deg);
    }

    * .rotate-90-l {
      transform: rotate(90deg);
    }

    * .rotate-135-l {
      transform: rotate(135deg);
    }

    * .rotate-180-l {
      transform: rotate(180deg);
    }

    * .rotate-225-l {
      transform: rotate(225deg);
    }

    * .rotate-270-l {
      transform: rotate(270deg);
    }

    * .rotate-315-l {
      transform: rotate(315deg);
    }
  }

  * .black-90 {
    color: rgba(0, 0, 0, 0.9);
  }

  * .black-80 {
    color: rgba(0, 0, 0, 0.8);
  }

  * .black-70 {
    color: rgba(0, 0, 0, 0.7);
  }

  * .black-60 {
    color: rgba(0, 0, 0, 0.6);
  }

  * .black-50 {
    color: rgba(0, 0, 0, 0.5);
  }

  * .black-40 {
    color: rgba(0, 0, 0, 0.4);
  }

  * .black-30 {
    color: rgba(0, 0, 0, 0.3);
  }

  * .black-20 {
    color: rgba(0, 0, 0, 0.2);
  }

  * .black-10 {
    color: rgba(0, 0, 0, 0.1);
  }

  * .black-05 {
    color: rgba(0, 0, 0, 0.05);
  }

  * .white-90 {
    color: hsla(0, 0%, 100%, 0.9);
  }

  * .white-80 {
    color: hsla(0, 0%, 100%, 0.8);
  }

  * .white-70 {
    color: hsla(0, 0%, 100%, 0.7);
  }

  * .white-60 {
    color: hsla(0, 0%, 100%, 0.6);
  }

  * .white-50 {
    color: hsla(0, 0%, 100%, 0.5);
  }

  * .white-40 {
    color: hsla(0, 0%, 100%, 0.4);
  }

  * .white-30 {
    color: hsla(0, 0%, 100%, 0.3);
  }

  * .white-20 {
    color: hsla(0, 0%, 100%, 0.2);
  }

  * .white-10 {
    color: hsla(0, 0%, 100%, 0.1);
  }

  * .black {
    color: #000;
  }

  * .near-black {
    color: #111;
  }

  * .dark-gray {
    color: #333;
  }

  * .mid-gray {
    color: #555;
  }

  * .gray {
    color: #777;
  }

  * .silver {
    color: #999;
  }

  * .light-silver {
    color: #aaa;
  }

  * .moon-gray {
    color: #ccc;
  }

  * .light-gray {
    color: #eee;
  }

  * .near-white {
    color: #f4f4f4;
  }

  * .white {
    color: #fff;
  }

  * .dark-red {
    color: #e7040f;
  }

  * .red {
    color: #ff4136;
  }

  * .light-red {
    color: #ff725c;
  }

  * .orange {
    color: #ff6300;
  }

  * .gold {
    color: #ffb700;
  }

  * .yellow {
    color: gold;
  }

  * .light-yellow {
    color: #fbf1a9;
  }

  * .purple {
    color: #5e2ca5;
  }

  * .light-purple {
    color: #a463f2;
  }

  * .dark-pink {
    color: #d5008f;
  }

  * .hot-pink {
    color: #ff41b4;
  }

  * .pink {
    color: #ff80cc;
  }

  * .light-pink {
    color: #ffa3d7;
  }

  * .dark-green {
    color: #137752;
  }

  * .green {
    color: #19a974;
  }

  * .light-green {
    color: #9eebcf;
  }

  * .navy {
    color: #001b44;
  }

  * .dark-blue {
    color: #00449e;
  }

  * .blue {
    color: #357edd;
  }

  * .light-blue {
    color: #96ccff;
  }

  * .lightest-blue {
    color: #cdecff;
  }

  * .washed-blue {
    color: #f6fffe;
  }

  * .washed-green {
    color: #e8fdf5;
  }

  * .washed-yellow {
    color: #fffceb;
  }

  * .washed-red {
    color: #ffdfdf;
  }

  * .color-inherit {
    color: inherit;
  }

  * .bg-black-90 {
    background-color: rgba(0, 0, 0, 0.9);
  }

  * .bg-black-80 {
    background-color: rgba(0, 0, 0, 0.8);
  }

  * .bg-black-70 {
    background-color: rgba(0, 0, 0, 0.7);
  }

  * .bg-black-60 {
    background-color: rgba(0, 0, 0, 0.6);
  }

  * .bg-black-50 {
    background-color: rgba(0, 0, 0, 0.5);
  }

  * .bg-black-40 {
    background-color: rgba(0, 0, 0, 0.4);
  }

  * .bg-black-30 {
    background-color: rgba(0, 0, 0, 0.3);
  }

  * .bg-black-20 {
    background-color: rgba(0, 0, 0, 0.2);
  }

  * .bg-black-10 {
    background-color: rgba(0, 0, 0, 0.1);
  }

  * .bg-black-05 {
    background-color: rgba(0, 0, 0, 0.05);
  }

  * .bg-white-90 {
    background-color: hsla(0, 0%, 100%, 0.9);
  }

  * .bg-white-80 {
    background-color: hsla(0, 0%, 100%, 0.8);
  }

  * .bg-white-70 {
    background-color: hsla(0, 0%, 100%, 0.7);
  }

  * .bg-white-60 {
    background-color: hsla(0, 0%, 100%, 0.6);
  }

  * .bg-white-50 {
    background-color: hsla(0, 0%, 100%, 0.5);
  }

  * .bg-white-40 {
    background-color: hsla(0, 0%, 100%, 0.4);
  }

  * .bg-white-30 {
    background-color: hsla(0, 0%, 100%, 0.3);
  }

  * .bg-white-20 {
    background-color: hsla(0, 0%, 100%, 0.2);
  }

  * .bg-white-10 {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  * .bg-black {
    background-color: #000;
  }

  * .bg-near-black {
    background-color: #111;
  }

  * .bg-dark-gray {
    background-color: #333;
  }

  * .bg-mid-gray {
    background-color: #555;
  }

  * .bg-gray {
    background-color: #777;
  }

  * .bg-silver {
    background-color: #999;
  }

  * .bg-light-silver {
    background-color: #aaa;
  }

  * .bg-moon-gray {
    background-color: #ccc;
  }

  * .bg-light-gray {
    background-color: #eee;
  }

  * .bg-near-white {
    background-color: #f4f4f4;
  }

  * .bg-white {
    background-color: #fff;
  }

  * .bg-transparent {
    background-color: transparent;
  }

  * .bg-dark-red {
    background-color: #e7040f;
  }

  * .bg-red {
    background-color: #ff4136;
  }

  * .bg-light-red {
    background-color: #ff725c;
  }

  * .bg-orange {
    background-color: #ff6300;
  }

  * .bg-gold {
    background-color: #ffb700;
  }

  * .bg-yellow {
    background-color: gold;
  }

  * .bg-light-yellow {
    background-color: #fbf1a9;
  }

  * .bg-purple {
    background-color: #5e2ca5;
  }

  * .bg-light-purple {
    background-color: #a463f2;
  }

  * .bg-dark-pink {
    background-color: #d5008f;
  }

  * .bg-hot-pink {
    background-color: #ff41b4;
  }

  * .bg-pink {
    background-color: #ff80cc;
  }

  * .bg-light-pink {
    background-color: #ffa3d7;
  }

  * .bg-dark-green {
    background-color: #137752;
  }

  * .bg-green {
    background-color: #19a974;
  }

  * .bg-light-green {
    background-color: #9eebcf;
  }

  * .bg-navy {
    background-color: #001b44;
  }

  * .bg-dark-blue {
    background-color: #00449e;
  }

  * .bg-blue {
    background-color: #357edd;
  }

  * .bg-light-blue {
    background-color: #96ccff;
  }

  * .bg-lightest-blue {
    background-color: #cdecff;
  }

  * .bg-washed-blue {
    background-color: #f6fffe;
  }

  * .bg-washed-green {
    background-color: #e8fdf5;
  }

  * .bg-washed-yellow {
    background-color: #fffceb;
  }

  * .bg-washed-red {
    background-color: #ffdfdf;
  }

  * .bg-inherit {
    background-color: inherit;
  }

  * .hover-black:focus,
  * .hover-black:hover {
    color: #000;
  }

  * .hover-near-black:focus,
  * .hover-near-black:hover {
    color: #111;
  }

  * .hover-dark-gray:focus,
  * .hover-dark-gray:hover {
    color: #333;
  }

  * .hover-mid-gray:focus,
  * .hover-mid-gray:hover {
    color: #555;
  }

  * .hover-gray:focus,
  * .hover-gray:hover {
    color: #777;
  }

  * .hover-silver:focus,
  * .hover-silver:hover {
    color: #999;
  }

  * .hover-light-silver:focus,
  * .hover-light-silver:hover {
    color: #aaa;
  }

  * .hover-moon-gray:focus,
  * .hover-moon-gray:hover {
    color: #ccc;
  }

  * .hover-light-gray:focus,
  * .hover-light-gray:hover {
    color: #eee;
  }

  * .hover-near-white:focus,
  * .hover-near-white:hover {
    color: #f4f4f4;
  }

  * .hover-white:focus,
  * .hover-white:hover {
    color: #fff;
  }

  * .hover-black-90:focus,
  * .hover-black-90:hover {
    color: rgba(0, 0, 0, 0.9);
  }

  * .hover-black-80:focus,
  * .hover-black-80:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  * .hover-black-70:focus,
  * .hover-black-70:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  * .hover-black-60:focus,
  * .hover-black-60:hover {
    color: rgba(0, 0, 0, 0.6);
  }

  * .hover-black-50:focus,
  * .hover-black-50:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  * .hover-black-40:focus,
  * .hover-black-40:hover {
    color: rgba(0, 0, 0, 0.4);
  }

  * .hover-black-30:focus,
  * .hover-black-30:hover {
    color: rgba(0, 0, 0, 0.3);
  }

  * .hover-black-20:focus,
  * .hover-black-20:hover {
    color: rgba(0, 0, 0, 0.2);
  }

  * .hover-black-10:focus,
  * .hover-black-10:hover {
    color: rgba(0, 0, 0, 0.1);
  }

  * .hover-white-90:focus,
  * .hover-white-90:hover {
    color: hsla(0, 0%, 100%, 0.9);
  }

  * .hover-white-80:focus,
  * .hover-white-80:hover {
    color: hsla(0, 0%, 100%, 0.8);
  }

  * .hover-white-70:focus,
  * .hover-white-70:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }

  * .hover-white-60:focus,
  * .hover-white-60:hover {
    color: hsla(0, 0%, 100%, 0.6);
  }

  * .hover-white-50:focus,
  * .hover-white-50:hover {
    color: hsla(0, 0%, 100%, 0.5);
  }

  * .hover-white-40:focus,
  * .hover-white-40:hover {
    color: hsla(0, 0%, 100%, 0.4);
  }

  * .hover-white-30:focus,
  * .hover-white-30:hover {
    color: hsla(0, 0%, 100%, 0.3);
  }

  * .hover-white-20:focus,
  * .hover-white-20:hover {
    color: hsla(0, 0%, 100%, 0.2);
  }

  * .hover-white-10:focus,
  * .hover-white-10:hover {
    color: hsla(0, 0%, 100%, 0.1);
  }

  * .hover-inherit:focus,
  * .hover-inherit:hover {
    color: inherit;
  }

  * .hover-bg-black:focus,
  * .hover-bg-black:hover {
    background-color: #000;
  }

  * .hover-bg-near-black:focus,
  * .hover-bg-near-black:hover {
    background-color: #111;
  }

  * .hover-bg-dark-gray:focus,
  * .hover-bg-dark-gray:hover {
    background-color: #333;
  }

  * .hover-bg-mid-gray:focus,
  * .hover-bg-mid-gray:hover {
    background-color: #555;
  }

  * .hover-bg-gray:focus,
  * .hover-bg-gray:hover {
    background-color: #777;
  }

  * .hover-bg-silver:focus,
  * .hover-bg-silver:hover {
    background-color: #999;
  }

  * .hover-bg-light-silver:focus,
  * .hover-bg-light-silver:hover {
    background-color: #aaa;
  }

  * .hover-bg-moon-gray:focus,
  * .hover-bg-moon-gray:hover {
    background-color: #ccc;
  }

  * .hover-bg-light-gray:focus,
  * .hover-bg-light-gray:hover {
    background-color: #eee;
  }

  * .hover-bg-near-white:focus,
  * .hover-bg-near-white:hover {
    background-color: #f4f4f4;
  }

  * .hover-bg-white:focus,
  * .hover-bg-white:hover {
    background-color: #fff;
  }

  * .hover-bg-transparent:focus,
  * .hover-bg-transparent:hover {
    background-color: transparent;
  }

  * .hover-bg-black-90:focus,
  * .hover-bg-black-90:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  * .hover-bg-black-80:focus,
  * .hover-bg-black-80:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  * .hover-bg-black-70:focus,
  * .hover-bg-black-70:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  * .hover-bg-black-60:focus,
  * .hover-bg-black-60:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  * .hover-bg-black-50:focus,
  * .hover-bg-black-50:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  * .hover-bg-black-40:focus,
  * .hover-bg-black-40:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  * .hover-bg-black-30:focus,
  * .hover-bg-black-30:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  * .hover-bg-black-20:focus,
  * .hover-bg-black-20:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  * .hover-bg-black-10:focus,
  * .hover-bg-black-10:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  * .hover-bg-white-90:focus,
  * .hover-bg-white-90:hover {
    background-color: hsla(0, 0%, 100%, 0.9);
  }

  * .hover-bg-white-80:focus,
  * .hover-bg-white-80:hover {
    background-color: hsla(0, 0%, 100%, 0.8);
  }

  * .hover-bg-white-70:focus,
  * .hover-bg-white-70:hover {
    background-color: hsla(0, 0%, 100%, 0.7);
  }

  * .hover-bg-white-60:focus,
  * .hover-bg-white-60:hover {
    background-color: hsla(0, 0%, 100%, 0.6);
  }

  * .hover-bg-white-50:focus,
  * .hover-bg-white-50:hover {
    background-color: hsla(0, 0%, 100%, 0.5);
  }

  * .hover-bg-white-40:focus,
  * .hover-bg-white-40:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
  }

  * .hover-bg-white-30:focus,
  * .hover-bg-white-30:hover {
    background-color: hsla(0, 0%, 100%, 0.3);
  }

  * .hover-bg-white-20:focus,
  * .hover-bg-white-20:hover {
    background-color: hsla(0, 0%, 100%, 0.2);
  }

  * .hover-bg-white-10:focus,
  * .hover-bg-white-10:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  * .hover-dark-red:focus,
  * .hover-dark-red:hover {
    color: #e7040f;
  }

  * .hover-red:focus,
  * .hover-red:hover {
    color: #ff4136;
  }

  * .hover-light-red:focus,
  * .hover-light-red:hover {
    color: #ff725c;
  }

  * .hover-orange:focus,
  * .hover-orange:hover {
    color: #ff6300;
  }

  * .hover-gold:focus,
  * .hover-gold:hover {
    color: #ffb700;
  }

  * .hover-yellow:focus,
  * .hover-yellow:hover {
    color: gold;
  }

  * .hover-light-yellow:focus,
  * .hover-light-yellow:hover {
    color: #fbf1a9;
  }

  * .hover-purple:focus,
  * .hover-purple:hover {
    color: #5e2ca5;
  }

  * .hover-light-purple:focus,
  * .hover-light-purple:hover {
    color: #a463f2;
  }

  * .hover-dark-pink:focus,
  * .hover-dark-pink:hover {
    color: #d5008f;
  }

  * .hover-hot-pink:focus,
  * .hover-hot-pink:hover {
    color: #ff41b4;
  }

  * .hover-pink:focus,
  * .hover-pink:hover {
    color: #ff80cc;
  }

  * .hover-light-pink:focus,
  * .hover-light-pink:hover {
    color: #ffa3d7;
  }

  * .hover-dark-green:focus,
  * .hover-dark-green:hover {
    color: #137752;
  }

  * .hover-green:focus,
  * .hover-green:hover {
    color: #19a974;
  }

  * .hover-light-green:focus,
  * .hover-light-green:hover {
    color: #9eebcf;
  }

  * .hover-navy:focus,
  * .hover-navy:hover {
    color: #001b44;
  }

  * .hover-dark-blue:focus,
  * .hover-dark-blue:hover {
    color: #00449e;
  }

  * .hover-blue:focus,
  * .hover-blue:hover {
    color: #357edd;
  }

  * .hover-light-blue:focus,
  * .hover-light-blue:hover {
    color: #96ccff;
  }

  * .hover-lightest-blue:focus,
  * .hover-lightest-blue:hover {
    color: #cdecff;
  }

  * .hover-washed-blue:focus,
  * .hover-washed-blue:hover {
    color: #f6fffe;
  }

  * .hover-washed-green:focus,
  * .hover-washed-green:hover {
    color: #e8fdf5;
  }

  * .hover-washed-yellow:focus,
  * .hover-washed-yellow:hover {
    color: #fffceb;
  }

  * .hover-washed-red:focus,
  * .hover-washed-red:hover {
    color: #ffdfdf;
  }

  * .hover-bg-dark-red:focus,
  * .hover-bg-dark-red:hover {
    background-color: #e7040f;
  }

  * .hover-bg-red:focus,
  * .hover-bg-red:hover {
    background-color: #ff4136;
  }

  * .hover-bg-light-red:focus,
  * .hover-bg-light-red:hover {
    background-color: #ff725c;
  }

  * .hover-bg-orange:focus,
  * .hover-bg-orange:hover {
    background-color: #ff6300;
  }

  * .hover-bg-gold:focus,
  * .hover-bg-gold:hover {
    background-color: #ffb700;
  }

  * .hover-bg-yellow:focus,
  * .hover-bg-yellow:hover {
    background-color: gold;
  }

  * .hover-bg-light-yellow:focus,
  * .hover-bg-light-yellow:hover {
    background-color: #fbf1a9;
  }

  * .hover-bg-purple:focus,
  * .hover-bg-purple:hover {
    background-color: #5e2ca5;
  }

  * .hover-bg-light-purple:focus,
  * .hover-bg-light-purple:hover {
    background-color: #a463f2;
  }

  * .hover-bg-dark-pink:focus,
  * .hover-bg-dark-pink:hover {
    background-color: #d5008f;
  }

  * .hover-bg-hot-pink:focus,
  * .hover-bg-hot-pink:hover {
    background-color: #ff41b4;
  }

  * .hover-bg-pink:focus,
  * .hover-bg-pink:hover {
    background-color: #ff80cc;
  }

  * .hover-bg-light-pink:focus,
  * .hover-bg-light-pink:hover {
    background-color: #ffa3d7;
  }

  * .hover-bg-dark-green:focus,
  * .hover-bg-dark-green:hover {
    background-color: #137752;
  }

  * .hover-bg-green:focus,
  * .hover-bg-green:hover {
    background-color: #19a974;
  }

  * .hover-bg-light-green:focus,
  * .hover-bg-light-green:hover {
    background-color: #9eebcf;
  }

  * .hover-bg-navy:focus,
  * .hover-bg-navy:hover {
    background-color: #001b44;
  }

  * .hover-bg-dark-blue:focus,
  * .hover-bg-dark-blue:hover {
    background-color: #00449e;
  }

  * .hover-bg-blue:focus,
  * .hover-bg-blue:hover {
    background-color: #357edd;
  }

  * .hover-bg-light-blue:focus,
  * .hover-bg-light-blue:hover {
    background-color: #96ccff;
  }

  * .hover-bg-lightest-blue:focus,
  * .hover-bg-lightest-blue:hover {
    background-color: #cdecff;
  }

  * .hover-bg-washed-blue:focus,
  * .hover-bg-washed-blue:hover {
    background-color: #f6fffe;
  }

  * .hover-bg-washed-green:focus,
  * .hover-bg-washed-green:hover {
    background-color: #e8fdf5;
  }

  * .hover-bg-washed-yellow:focus,
  * .hover-bg-washed-yellow:hover {
    background-color: #fffceb;
  }

  * .hover-bg-washed-red:focus,
  * .hover-bg-washed-red:hover {
    background-color: #ffdfdf;
  }

  * .hover-bg-inherit:focus,
  * .hover-bg-inherit:hover {
    background-color: inherit;
  }

  * .pa0 {
    padding: 0;
  }

  * .pa1 {
    padding: 0.25rem;
  }

  * .pa2 {
    padding: 0.5rem;
  }

  * .pa3 {
    padding: 1rem;
  }

  * .pa4 {
    padding: 2rem;
  }

  * .pa5 {
    padding: 4rem;
  }

  * .pa6 {
    padding: 8rem;
  }

  * .pa7 {
    padding: 16rem;
  }

  * .pl0 {
    padding-left: 0;
  }

  * .pl1 {
    padding-left: 0.25rem;
  }

  * .pl2 {
    padding-left: 0.5rem;
  }

  * .pl3 {
    padding-left: 1rem;
  }

  * .pl4 {
    padding-left: 2rem;
  }

  * .pl5 {
    padding-left: 4rem;
  }

  * .pl6 {
    padding-left: 8rem;
  }

  * .pl7 {
    padding-left: 16rem;
  }

  * .pr0 {
    padding-right: 0;
  }

  * .pr1 {
    padding-right: 0.25rem;
  }

  * .pr2 {
    padding-right: 0.5rem;
  }

  * .pr3 {
    padding-right: 1rem;
  }

  * .pr4 {
    padding-right: 2rem;
  }

  * .pr5 {
    padding-right: 4rem;
  }

  * .pr6 {
    padding-right: 8rem;
  }

  * .pr7 {
    padding-right: 16rem;
  }

  * .pb0 {
    padding-bottom: 0;
  }

  * .pb1 {
    padding-bottom: 0.25rem;
  }

  * .pb2 {
    padding-bottom: 0.5rem;
  }

  * .pb3 {
    padding-bottom: 1rem;
  }

  * .pb4 {
    padding-bottom: 2rem;
  }

  * .pb5 {
    padding-bottom: 4rem;
  }

  * .pb6 {
    padding-bottom: 8rem;
  }

  * .pb7 {
    padding-bottom: 16rem;
  }

  * .pt0 {
    padding-top: 0;
  }

  * .pt1 {
    padding-top: 0.25rem;
  }

  * .pt2 {
    padding-top: 0.5rem;
  }

  * .pt3 {
    padding-top: 1rem;
  }

  * .pt4 {
    padding-top: 2rem;
  }

  * .pt5 {
    padding-top: 4rem;
  }

  * .pt6 {
    padding-top: 8rem;
  }

  * .pt7 {
    padding-top: 16rem;
  }

  * .pv0 {
    padding-bottom: 0;
    padding-top: 0;
  }

  * .pv1 {
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
  }

  * .pv2 {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  * .pv3 {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  * .pv4 {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  * .pv5 {
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  * .pv6 {
    padding-bottom: 8rem;
    padding-top: 8rem;
  }

  * .pv7 {
    padding-bottom: 16rem;
    padding-top: 16rem;
  }

  * .ph0 {
    padding-left: 0;
    padding-right: 0;
  }

  * .ph1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  * .ph2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  * .ph3 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  * .ph4 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  * .ph5 {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  * .ph6 {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  * .ph7 {
    padding-left: 16rem;
    padding-right: 16rem;
  }

  * .ma0 {
    margin: 0;
  }

  * .ma1 {
    margin: 0.25rem;
  }

  * .ma2 {
    margin: 0.5rem;
  }

  * .ma3 {
    margin: 1rem;
  }

  * .ma4 {
    margin: 2rem;
  }

  * .ma5 {
    margin: 4rem;
  }

  * .ma6 {
    margin: 8rem;
  }

  * .ma7 {
    margin: 16rem;
  }

  * .ml0 {
    margin-left: 0;
  }

  * .ml1 {
    margin-left: 0.25rem;
  }

  * .ml2 {
    margin-left: 0.5rem;
  }

  * .ml3 {
    margin-left: 1rem;
  }

  * .ml4 {
    margin-left: 2rem;
  }

  * .ml5 {
    margin-left: 4rem;
  }

  * .ml6 {
    margin-left: 8rem;
  }

  * .ml7 {
    margin-left: 16rem;
  }

  * .mr0 {
    margin-right: 0;
  }

  * .mr1 {
    margin-right: 0.25rem;
  }

  * .mr2 {
    margin-right: 0.5rem;
  }

  * .mr3 {
    margin-right: 1rem;
  }

  * .mr4 {
    margin-right: 2rem;
  }

  * .mr5 {
    margin-right: 4rem;
  }

  * .mr6 {
    margin-right: 8rem;
  }

  * .mr7 {
    margin-right: 16rem;
  }

  * .mb0 {
    margin-bottom: 0;
  }

  * .mb1 {
    margin-bottom: 0.25rem;
  }

  * .mb2 {
    margin-bottom: 0.5rem;
  }

  * .mb3 {
    margin-bottom: 1rem;
  }

  * .mb4 {
    margin-bottom: 2rem;
  }

  * .mb5 {
    margin-bottom: 4rem;
  }

  * .mb6 {
    margin-bottom: 8rem;
  }

  * .mb7 {
    margin-bottom: 16rem;
  }

  * .mt0 {
    margin-top: 0;
  }

  * .mt1 {
    margin-top: 0.25rem;
  }

  * .mt2 {
    margin-top: 0.5rem;
  }

  * .mt3 {
    margin-top: 1rem;
  }

  * .mt4 {
    margin-top: 2rem;
  }

  * .mt5 {
    margin-top: 4rem;
  }

  * .mt6 {
    margin-top: 8rem;
  }

  * .mt7 {
    margin-top: 16rem;
  }

  * .mv0 {
    margin-bottom: 0;
    margin-top: 0;
  }

  * .mv1 {
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }

  * .mv2 {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  * .mv3 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  * .mv4 {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  * .mv5 {
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

  * .mv6 {
    margin-bottom: 8rem;
    margin-top: 8rem;
  }

  * .mv7 {
    margin-bottom: 16rem;
    margin-top: 16rem;
  }

  * .mh0 {
    margin-left: 0;
    margin-right: 0;
  }

  * .mh1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  * .mh2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  * .mh3 {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  * .mh4 {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  * .mh5 {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  * .mh6 {
    margin-left: 8rem;
    margin-right: 8rem;
  }

  * .mh7 {
    margin-left: 16rem;
    margin-right: 16rem;
  }

  @media screen and (min-width: 30em) {
    * .pa0-ns {
      padding: 0;
    }

    * .pa1-ns {
      padding: 0.25rem;
    }

    * .pa2-ns {
      padding: 0.5rem;
    }

    * .pa3-ns {
      padding: 1rem;
    }

    * .pa4-ns {
      padding: 2rem;
    }

    * .pa5-ns {
      padding: 4rem;
    }

    * .pa6-ns {
      padding: 8rem;
    }

    * .pa7-ns {
      padding: 16rem;
    }

    * .pl0-ns {
      padding-left: 0;
    }

    * .pl1-ns {
      padding-left: 0.25rem;
    }

    * .pl2-ns {
      padding-left: 0.5rem;
    }

    * .pl3-ns {
      padding-left: 1rem;
    }

    * .pl4-ns {
      padding-left: 2rem;
    }

    * .pl5-ns {
      padding-left: 4rem;
    }

    * .pl6-ns {
      padding-left: 8rem;
    }

    * .pl7-ns {
      padding-left: 16rem;
    }

    * .pr0-ns {
      padding-right: 0;
    }

    * .pr1-ns {
      padding-right: 0.25rem;
    }

    * .pr2-ns {
      padding-right: 0.5rem;
    }

    * .pr3-ns {
      padding-right: 1rem;
    }

    * .pr4-ns {
      padding-right: 2rem;
    }

    * .pr5-ns {
      padding-right: 4rem;
    }

    * .pr6-ns {
      padding-right: 8rem;
    }

    * .pr7-ns {
      padding-right: 16rem;
    }

    * .pb0-ns {
      padding-bottom: 0;
    }

    * .pb1-ns {
      padding-bottom: 0.25rem;
    }

    * .pb2-ns {
      padding-bottom: 0.5rem;
    }

    * .pb3-ns {
      padding-bottom: 1rem;
    }

    * .pb4-ns {
      padding-bottom: 2rem;
    }

    * .pb5-ns {
      padding-bottom: 4rem;
    }

    * .pb6-ns {
      padding-bottom: 8rem;
    }

    * .pb7-ns {
      padding-bottom: 16rem;
    }

    * .pt0-ns {
      padding-top: 0;
    }

    * .pt1-ns {
      padding-top: 0.25rem;
    }

    * .pt2-ns {
      padding-top: 0.5rem;
    }

    * .pt3-ns {
      padding-top: 1rem;
    }

    * .pt4-ns {
      padding-top: 2rem;
    }

    * .pt5-ns {
      padding-top: 4rem;
    }

    * .pt6-ns {
      padding-top: 8rem;
    }

    * .pt7-ns {
      padding-top: 16rem;
    }

    * .pv0-ns {
      padding-bottom: 0;
      padding-top: 0;
    }

    * .pv1-ns {
      padding-bottom: 0.25rem;
      padding-top: 0.25rem;
    }

    * .pv2-ns {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }

    * .pv3-ns {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }

    * .pv4-ns {
      padding-bottom: 2rem;
      padding-top: 2rem;
    }

    * .pv5-ns {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }

    * .pv6-ns {
      padding-bottom: 8rem;
      padding-top: 8rem;
    }

    * .pv7-ns {
      padding-bottom: 16rem;
      padding-top: 16rem;
    }

    * .ph0-ns {
      padding-left: 0;
      padding-right: 0;
    }

    * .ph1-ns {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }

    * .ph2-ns {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    * .ph3-ns {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    * .ph4-ns {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    * .ph5-ns {
      padding-left: 4rem;
      padding-right: 4rem;
    }

    * .ph6-ns {
      padding-left: 8rem;
      padding-right: 8rem;
    }

    * .ph7-ns {
      padding-left: 16rem;
      padding-right: 16rem;
    }

    * .ma0-ns {
      margin: 0;
    }

    * .ma1-ns {
      margin: 0.25rem;
    }

    * .ma2-ns {
      margin: 0.5rem;
    }

    * .ma3-ns {
      margin: 1rem;
    }

    * .ma4-ns {
      margin: 2rem;
    }

    * .ma5-ns {
      margin: 4rem;
    }

    * .ma6-ns {
      margin: 8rem;
    }

    * .ma7-ns {
      margin: 16rem;
    }

    * .ml0-ns {
      margin-left: 0;
    }

    * .ml1-ns {
      margin-left: 0.25rem;
    }

    * .ml2-ns {
      margin-left: 0.5rem;
    }

    * .ml3-ns {
      margin-left: 1rem;
    }

    * .ml4-ns {
      margin-left: 2rem;
    }

    * .ml5-ns {
      margin-left: 4rem;
    }

    * .ml6-ns {
      margin-left: 8rem;
    }

    * .ml7-ns {
      margin-left: 16rem;
    }

    * .mr0-ns {
      margin-right: 0;
    }

    * .mr1-ns {
      margin-right: 0.25rem;
    }

    * .mr2-ns {
      margin-right: 0.5rem;
    }

    * .mr3-ns {
      margin-right: 1rem;
    }

    * .mr4-ns {
      margin-right: 2rem;
    }

    * .mr5-ns {
      margin-right: 4rem;
    }

    * .mr6-ns {
      margin-right: 8rem;
    }

    * .mr7-ns {
      margin-right: 16rem;
    }

    * .mb0-ns {
      margin-bottom: 0;
    }

    * .mb1-ns {
      margin-bottom: 0.25rem;
    }

    * .mb2-ns {
      margin-bottom: 0.5rem;
    }

    * .mb3-ns {
      margin-bottom: 1rem;
    }

    * .mb4-ns {
      margin-bottom: 2rem;
    }

    * .mb5-ns {
      margin-bottom: 4rem;
    }

    * .mb6-ns {
      margin-bottom: 8rem;
    }

    * .mb7-ns {
      margin-bottom: 16rem;
    }

    * .mt0-ns {
      margin-top: 0;
    }

    * .mt1-ns {
      margin-top: 0.25rem;
    }

    * .mt2-ns {
      margin-top: 0.5rem;
    }

    * .mt3-ns {
      margin-top: 1rem;
    }

    * .mt4-ns {
      margin-top: 2rem;
    }

    * .mt5-ns {
      margin-top: 4rem;
    }

    * .mt6-ns {
      margin-top: 8rem;
    }

    * .mt7-ns {
      margin-top: 16rem;
    }

    * .mv0-ns {
      margin-bottom: 0;
      margin-top: 0;
    }

    * .mv1-ns {
      margin-bottom: 0.25rem;
      margin-top: 0.25rem;
    }

    * .mv2-ns {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    * .mv3-ns {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    * .mv4-ns {
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    * .mv5-ns {
      margin-bottom: 4rem;
      margin-top: 4rem;
    }

    * .mv6-ns {
      margin-bottom: 8rem;
      margin-top: 8rem;
    }

    * .mv7-ns {
      margin-bottom: 16rem;
      margin-top: 16rem;
    }

    * .mh0-ns {
      margin-left: 0;
      margin-right: 0;
    }

    * .mh1-ns {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }

    * .mh2-ns {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    * .mh3-ns {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    * .mh4-ns {
      margin-left: 2rem;
      margin-right: 2rem;
    }

    * .mh5-ns {
      margin-left: 4rem;
      margin-right: 4rem;
    }

    * .mh6-ns {
      margin-left: 8rem;
      margin-right: 8rem;
    }

    * .mh7-ns {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .pa0-m {
      padding: 0;
    }

    * .pa1-m {
      padding: 0.25rem;
    }

    * .pa2-m {
      padding: 0.5rem;
    }

    * .pa3-m {
      padding: 1rem;
    }

    * .pa4-m {
      padding: 2rem;
    }

    * .pa5-m {
      padding: 4rem;
    }

    * .pa6-m {
      padding: 8rem;
    }

    * .pa7-m {
      padding: 16rem;
    }

    * .pl0-m {
      padding-left: 0;
    }

    * .pl1-m {
      padding-left: 0.25rem;
    }

    * .pl2-m {
      padding-left: 0.5rem;
    }

    * .pl3-m {
      padding-left: 1rem;
    }

    * .pl4-m {
      padding-left: 2rem;
    }

    * .pl5-m {
      padding-left: 4rem;
    }

    * .pl6-m {
      padding-left: 8rem;
    }

    * .pl7-m {
      padding-left: 16rem;
    }

    * .pr0-m {
      padding-right: 0;
    }

    * .pr1-m {
      padding-right: 0.25rem;
    }

    * .pr2-m {
      padding-right: 0.5rem;
    }

    * .pr3-m {
      padding-right: 1rem;
    }

    * .pr4-m {
      padding-right: 2rem;
    }

    * .pr5-m {
      padding-right: 4rem;
    }

    * .pr6-m {
      padding-right: 8rem;
    }

    * .pr7-m {
      padding-right: 16rem;
    }

    * .pb0-m {
      padding-bottom: 0;
    }

    * .pb1-m {
      padding-bottom: 0.25rem;
    }

    * .pb2-m {
      padding-bottom: 0.5rem;
    }

    * .pb3-m {
      padding-bottom: 1rem;
    }

    * .pb4-m {
      padding-bottom: 2rem;
    }

    * .pb5-m {
      padding-bottom: 4rem;
    }

    * .pb6-m {
      padding-bottom: 8rem;
    }

    * .pb7-m {
      padding-bottom: 16rem;
    }

    * .pt0-m {
      padding-top: 0;
    }

    * .pt1-m {
      padding-top: 0.25rem;
    }

    * .pt2-m {
      padding-top: 0.5rem;
    }

    * .pt3-m {
      padding-top: 1rem;
    }

    * .pt4-m {
      padding-top: 2rem;
    }

    * .pt5-m {
      padding-top: 4rem;
    }

    * .pt6-m {
      padding-top: 8rem;
    }

    * .pt7-m {
      padding-top: 16rem;
    }

    * .pv0-m {
      padding-bottom: 0;
      padding-top: 0;
    }

    * .pv1-m {
      padding-bottom: 0.25rem;
      padding-top: 0.25rem;
    }

    * .pv2-m {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }

    * .pv3-m {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }

    * .pv4-m {
      padding-bottom: 2rem;
      padding-top: 2rem;
    }

    * .pv5-m {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }

    * .pv6-m {
      padding-bottom: 8rem;
      padding-top: 8rem;
    }

    * .pv7-m {
      padding-bottom: 16rem;
      padding-top: 16rem;
    }

    * .ph0-m {
      padding-left: 0;
      padding-right: 0;
    }

    * .ph1-m {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }

    * .ph2-m {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    * .ph3-m {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    * .ph4-m {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    * .ph5-m {
      padding-left: 4rem;
      padding-right: 4rem;
    }

    * .ph6-m {
      padding-left: 8rem;
      padding-right: 8rem;
    }

    * .ph7-m {
      padding-left: 16rem;
      padding-right: 16rem;
    }

    * .ma0-m {
      margin: 0;
    }

    * .ma1-m {
      margin: 0.25rem;
    }

    * .ma2-m {
      margin: 0.5rem;
    }

    * .ma3-m {
      margin: 1rem;
    }

    * .ma4-m {
      margin: 2rem;
    }

    * .ma5-m {
      margin: 4rem;
    }

    * .ma6-m {
      margin: 8rem;
    }

    * .ma7-m {
      margin: 16rem;
    }

    * .ml0-m {
      margin-left: 0;
    }

    * .ml1-m {
      margin-left: 0.25rem;
    }

    * .ml2-m {
      margin-left: 0.5rem;
    }

    * .ml3-m {
      margin-left: 1rem;
    }

    * .ml4-m {
      margin-left: 2rem;
    }

    * .ml5-m {
      margin-left: 4rem;
    }

    * .ml6-m {
      margin-left: 8rem;
    }

    * .ml7-m {
      margin-left: 16rem;
    }

    * .mr0-m {
      margin-right: 0;
    }

    * .mr1-m {
      margin-right: 0.25rem;
    }

    * .mr2-m {
      margin-right: 0.5rem;
    }

    * .mr3-m {
      margin-right: 1rem;
    }

    * .mr4-m {
      margin-right: 2rem;
    }

    * .mr5-m {
      margin-right: 4rem;
    }

    * .mr6-m {
      margin-right: 8rem;
    }

    * .mr7-m {
      margin-right: 16rem;
    }

    * .mb0-m {
      margin-bottom: 0;
    }

    * .mb1-m {
      margin-bottom: 0.25rem;
    }

    * .mb2-m {
      margin-bottom: 0.5rem;
    }

    * .mb3-m {
      margin-bottom: 1rem;
    }

    * .mb4-m {
      margin-bottom: 2rem;
    }

    * .mb5-m {
      margin-bottom: 4rem;
    }

    * .mb6-m {
      margin-bottom: 8rem;
    }

    * .mb7-m {
      margin-bottom: 16rem;
    }

    * .mt0-m {
      margin-top: 0;
    }

    * .mt1-m {
      margin-top: 0.25rem;
    }

    * .mt2-m {
      margin-top: 0.5rem;
    }

    * .mt3-m {
      margin-top: 1rem;
    }

    * .mt4-m {
      margin-top: 2rem;
    }

    * .mt5-m {
      margin-top: 4rem;
    }

    * .mt6-m {
      margin-top: 8rem;
    }

    * .mt7-m {
      margin-top: 16rem;
    }

    * .mv0-m {
      margin-bottom: 0;
      margin-top: 0;
    }

    * .mv1-m {
      margin-bottom: 0.25rem;
      margin-top: 0.25rem;
    }

    * .mv2-m {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    * .mv3-m {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    * .mv4-m {
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    * .mv5-m {
      margin-bottom: 4rem;
      margin-top: 4rem;
    }

    * .mv6-m {
      margin-bottom: 8rem;
      margin-top: 8rem;
    }

    * .mv7-m {
      margin-bottom: 16rem;
      margin-top: 16rem;
    }

    * .mh0-m {
      margin-left: 0;
      margin-right: 0;
    }

    * .mh1-m {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }

    * .mh2-m {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    * .mh3-m {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    * .mh4-m {
      margin-left: 2rem;
      margin-right: 2rem;
    }

    * .mh5-m {
      margin-left: 4rem;
      margin-right: 4rem;
    }

    * .mh6-m {
      margin-left: 8rem;
      margin-right: 8rem;
    }

    * .mh7-m {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }

  @media screen and (min-width: 60em) {
    * .pa0-l {
      padding: 0;
    }

    * .pa1-l {
      padding: 0.25rem;
    }

    * .pa2-l {
      padding: 0.5rem;
    }

    * .pa3-l {
      padding: 1rem;
    }

    * .pa4-l {
      padding: 2rem;
    }

    * .pa5-l {
      padding: 4rem;
    }

    * .pa6-l {
      padding: 8rem;
    }

    * .pa7-l {
      padding: 16rem;
    }

    * .pl0-l {
      padding-left: 0;
    }

    * .pl1-l {
      padding-left: 0.25rem;
    }

    * .pl2-l {
      padding-left: 0.5rem;
    }

    * .pl3-l {
      padding-left: 1rem;
    }

    * .pl4-l {
      padding-left: 2rem;
    }

    * .pl5-l {
      padding-left: 4rem;
    }

    * .pl6-l {
      padding-left: 8rem;
    }

    * .pl7-l {
      padding-left: 16rem;
    }

    * .pr0-l {
      padding-right: 0;
    }

    * .pr1-l {
      padding-right: 0.25rem;
    }

    * .pr2-l {
      padding-right: 0.5rem;
    }

    * .pr3-l {
      padding-right: 1rem;
    }

    * .pr4-l {
      padding-right: 2rem;
    }

    * .pr5-l {
      padding-right: 4rem;
    }

    * .pr6-l {
      padding-right: 8rem;
    }

    * .pr7-l {
      padding-right: 16rem;
    }

    * .pb0-l {
      padding-bottom: 0;
    }

    * .pb1-l {
      padding-bottom: 0.25rem;
    }

    * .pb2-l {
      padding-bottom: 0.5rem;
    }

    * .pb3-l {
      padding-bottom: 1rem;
    }

    * .pb4-l {
      padding-bottom: 2rem;
    }

    * .pb5-l {
      padding-bottom: 4rem;
    }

    * .pb6-l {
      padding-bottom: 8rem;
    }

    * .pb7-l {
      padding-bottom: 16rem;
    }

    * .pt0-l {
      padding-top: 0;
    }

    * .pt1-l {
      padding-top: 0.25rem;
    }

    * .pt2-l {
      padding-top: 0.5rem;
    }

    * .pt3-l {
      padding-top: 1rem;
    }

    * .pt4-l {
      padding-top: 2rem;
    }

    * .pt5-l {
      padding-top: 4rem;
    }

    * .pt6-l {
      padding-top: 8rem;
    }

    * .pt7-l {
      padding-top: 16rem;
    }

    * .pv0-l {
      padding-bottom: 0;
      padding-top: 0;
    }

    * .pv1-l {
      padding-bottom: 0.25rem;
      padding-top: 0.25rem;
    }

    * .pv2-l {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }

    * .pv3-l {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }

    * .pv4-l {
      padding-bottom: 2rem;
      padding-top: 2rem;
    }

    * .pv5-l {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }

    * .pv6-l {
      padding-bottom: 8rem;
      padding-top: 8rem;
    }

    * .pv7-l {
      padding-bottom: 16rem;
      padding-top: 16rem;
    }

    * .ph0-l {
      padding-left: 0;
      padding-right: 0;
    }

    * .ph1-l {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }

    * .ph2-l {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    * .ph3-l {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    * .ph4-l {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    * .ph5-l {
      padding-left: 4rem;
      padding-right: 4rem;
    }

    * .ph6-l {
      padding-left: 8rem;
      padding-right: 8rem;
    }

    * .ph7-l {
      padding-left: 16rem;
      padding-right: 16rem;
    }

    * .ma0-l {
      margin: 0;
    }

    * .ma1-l {
      margin: 0.25rem;
    }

    * .ma2-l {
      margin: 0.5rem;
    }

    * .ma3-l {
      margin: 1rem;
    }

    * .ma4-l {
      margin: 2rem;
    }

    * .ma5-l {
      margin: 4rem;
    }

    * .ma6-l {
      margin: 8rem;
    }

    * .ma7-l {
      margin: 16rem;
    }

    * .ml0-l {
      margin-left: 0;
    }

    * .ml1-l {
      margin-left: 0.25rem;
    }

    * .ml2-l {
      margin-left: 0.5rem;
    }

    * .ml3-l {
      margin-left: 1rem;
    }

    * .ml4-l {
      margin-left: 2rem;
    }

    * .ml5-l {
      margin-left: 4rem;
    }

    * .ml6-l {
      margin-left: 8rem;
    }

    * .ml7-l {
      margin-left: 16rem;
    }

    * .mr0-l {
      margin-right: 0;
    }

    * .mr1-l {
      margin-right: 0.25rem;
    }

    * .mr2-l {
      margin-right: 0.5rem;
    }

    * .mr3-l {
      margin-right: 1rem;
    }

    * .mr4-l {
      margin-right: 2rem;
    }

    * .mr5-l {
      margin-right: 4rem;
    }

    * .mr6-l {
      margin-right: 8rem;
    }

    * .mr7-l {
      margin-right: 16rem;
    }

    * .mb0-l {
      margin-bottom: 0;
    }

    * .mb1-l {
      margin-bottom: 0.25rem;
    }

    * .mb2-l {
      margin-bottom: 0.5rem;
    }

    * .mb3-l {
      margin-bottom: 1rem;
    }

    * .mb4-l {
      margin-bottom: 2rem;
    }

    * .mb5-l {
      margin-bottom: 4rem;
    }

    * .mb6-l {
      margin-bottom: 8rem;
    }

    * .mb7-l {
      margin-bottom: 16rem;
    }

    * .mt0-l {
      margin-top: 0;
    }

    * .mt1-l {
      margin-top: 0.25rem;
    }

    * .mt2-l {
      margin-top: 0.5rem;
    }

    * .mt3-l {
      margin-top: 1rem;
    }

    * .mt4-l {
      margin-top: 2rem;
    }

    * .mt5-l {
      margin-top: 4rem;
    }

    * .mt6-l {
      margin-top: 8rem;
    }

    * .mt7-l {
      margin-top: 16rem;
    }

    * .mv0-l {
      margin-bottom: 0;
      margin-top: 0;
    }

    * .mv1-l {
      margin-bottom: 0.25rem;
      margin-top: 0.25rem;
    }

    * .mv2-l {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    * .mv3-l {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    * .mv4-l {
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    * .mv5-l {
      margin-bottom: 4rem;
      margin-top: 4rem;
    }

    * .mv6-l {
      margin-bottom: 8rem;
      margin-top: 8rem;
    }

    * .mv7-l {
      margin-bottom: 16rem;
      margin-top: 16rem;
    }

    * .mh0-l {
      margin-left: 0;
      margin-right: 0;
    }

    * .mh1-l {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }

    * .mh2-l {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    * .mh3-l {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    * .mh4-l {
      margin-left: 2rem;
      margin-right: 2rem;
    }

    * .mh5-l {
      margin-left: 4rem;
      margin-right: 4rem;
    }

    * .mh6-l {
      margin-left: 8rem;
      margin-right: 8rem;
    }

    * .mh7-l {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }

  * .na1 {
    margin: -0.25rem;
  }

  * .na2 {
    margin: -0.5rem;
  }

  * .na3 {
    margin: -1rem;
  }

  * .na4 {
    margin: -2rem;
  }

  * .na5 {
    margin: -4rem;
  }

  * .na6 {
    margin: -8rem;
  }

  * .na7 {
    margin: -16rem;
  }

  * .nl1 {
    margin-left: -0.25rem;
  }

  * .nl2 {
    margin-left: -0.5rem;
  }

  * .nl3 {
    margin-left: -1rem;
  }

  * .nl4 {
    margin-left: -2rem;
  }

  * .nl5 {
    margin-left: -4rem;
  }

  * .nl6 {
    margin-left: -8rem;
  }

  * .nl7 {
    margin-left: -16rem;
  }

  * .nr1 {
    margin-right: -0.25rem;
  }

  * .nr2 {
    margin-right: -0.5rem;
  }

  * .nr3 {
    margin-right: -1rem;
  }

  * .nr4 {
    margin-right: -2rem;
  }

  * .nr5 {
    margin-right: -4rem;
  }

  * .nr6 {
    margin-right: -8rem;
  }

  * .nr7 {
    margin-right: -16rem;
  }

  * .nb1 {
    margin-bottom: -0.25rem;
  }

  * .nb2 {
    margin-bottom: -0.5rem;
  }

  * .nb3 {
    margin-bottom: -1rem;
  }

  * .nb4 {
    margin-bottom: -2rem;
  }

  * .nb5 {
    margin-bottom: -4rem;
  }

  * .nb6 {
    margin-bottom: -8rem;
  }

  * .nb7 {
    margin-bottom: -16rem;
  }

  * .nt1 {
    margin-top: -0.25rem;
  }

  * .nt2 {
    margin-top: -0.5rem;
  }

  * .nt3 {
    margin-top: -1rem;
  }

  * .nt4 {
    margin-top: -2rem;
  }

  * .nt5 {
    margin-top: -4rem;
  }

  * .nt6 {
    margin-top: -8rem;
  }

  * .nt7 {
    margin-top: -16rem;
  }

  @media screen and (min-width: 30em) {
    * .na1-ns {
      margin: -0.25rem;
    }

    * .na2-ns {
      margin: -0.5rem;
    }

    * .na3-ns {
      margin: -1rem;
    }

    * .na4-ns {
      margin: -2rem;
    }

    * .na5-ns {
      margin: -4rem;
    }

    * .na6-ns {
      margin: -8rem;
    }

    * .na7-ns {
      margin: -16rem;
    }

    * .nl1-ns {
      margin-left: -0.25rem;
    }

    * .nl2-ns {
      margin-left: -0.5rem;
    }

    * .nl3-ns {
      margin-left: -1rem;
    }

    * .nl4-ns {
      margin-left: -2rem;
    }

    * .nl5-ns {
      margin-left: -4rem;
    }

    * .nl6-ns {
      margin-left: -8rem;
    }

    * .nl7-ns {
      margin-left: -16rem;
    }

    * .nr1-ns {
      margin-right: -0.25rem;
    }

    * .nr2-ns {
      margin-right: -0.5rem;
    }

    * .nr3-ns {
      margin-right: -1rem;
    }

    * .nr4-ns {
      margin-right: -2rem;
    }

    * .nr5-ns {
      margin-right: -4rem;
    }

    * .nr6-ns {
      margin-right: -8rem;
    }

    * .nr7-ns {
      margin-right: -16rem;
    }

    * .nb1-ns {
      margin-bottom: -0.25rem;
    }

    * .nb2-ns {
      margin-bottom: -0.5rem;
    }

    * .nb3-ns {
      margin-bottom: -1rem;
    }

    * .nb4-ns {
      margin-bottom: -2rem;
    }

    * .nb5-ns {
      margin-bottom: -4rem;
    }

    * .nb6-ns {
      margin-bottom: -8rem;
    }

    * .nb7-ns {
      margin-bottom: -16rem;
    }

    * .nt1-ns {
      margin-top: -0.25rem;
    }

    * .nt2-ns {
      margin-top: -0.5rem;
    }

    * .nt3-ns {
      margin-top: -1rem;
    }

    * .nt4-ns {
      margin-top: -2rem;
    }

    * .nt5-ns {
      margin-top: -4rem;
    }

    * .nt6-ns {
      margin-top: -8rem;
    }

    * .nt7-ns {
      margin-top: -16rem;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .na1-m {
      margin: -0.25rem;
    }

    * .na2-m {
      margin: -0.5rem;
    }

    * .na3-m {
      margin: -1rem;
    }

    * .na4-m {
      margin: -2rem;
    }

    * .na5-m {
      margin: -4rem;
    }

    * .na6-m {
      margin: -8rem;
    }

    * .na7-m {
      margin: -16rem;
    }

    * .nl1-m {
      margin-left: -0.25rem;
    }

    * .nl2-m {
      margin-left: -0.5rem;
    }

    * .nl3-m {
      margin-left: -1rem;
    }

    * .nl4-m {
      margin-left: -2rem;
    }

    * .nl5-m {
      margin-left: -4rem;
    }

    * .nl6-m {
      margin-left: -8rem;
    }

    * .nl7-m {
      margin-left: -16rem;
    }

    * .nr1-m {
      margin-right: -0.25rem;
    }

    * .nr2-m {
      margin-right: -0.5rem;
    }

    * .nr3-m {
      margin-right: -1rem;
    }

    * .nr4-m {
      margin-right: -2rem;
    }

    * .nr5-m {
      margin-right: -4rem;
    }

    * .nr6-m {
      margin-right: -8rem;
    }

    * .nr7-m {
      margin-right: -16rem;
    }

    * .nb1-m {
      margin-bottom: -0.25rem;
    }

    * .nb2-m {
      margin-bottom: -0.5rem;
    }

    * .nb3-m {
      margin-bottom: -1rem;
    }

    * .nb4-m {
      margin-bottom: -2rem;
    }

    * .nb5-m {
      margin-bottom: -4rem;
    }

    * .nb6-m {
      margin-bottom: -8rem;
    }

    * .nb7-m {
      margin-bottom: -16rem;
    }

    * .nt1-m {
      margin-top: -0.25rem;
    }

    * .nt2-m {
      margin-top: -0.5rem;
    }

    * .nt3-m {
      margin-top: -1rem;
    }

    * .nt4-m {
      margin-top: -2rem;
    }

    * .nt5-m {
      margin-top: -4rem;
    }

    * .nt6-m {
      margin-top: -8rem;
    }

    * .nt7-m {
      margin-top: -16rem;
    }
  }

  @media screen and (min-width: 60em) {
    * .na1-l {
      margin: -0.25rem;
    }

    * .na2-l {
      margin: -0.5rem;
    }

    * .na3-l {
      margin: -1rem;
    }

    * .na4-l {
      margin: -2rem;
    }

    * .na5-l {
      margin: -4rem;
    }

    * .na6-l {
      margin: -8rem;
    }

    * .na7-l {
      margin: -16rem;
    }

    * .nl1-l {
      margin-left: -0.25rem;
    }

    * .nl2-l {
      margin-left: -0.5rem;
    }

    * .nl3-l {
      margin-left: -1rem;
    }

    * .nl4-l {
      margin-left: -2rem;
    }

    * .nl5-l {
      margin-left: -4rem;
    }

    * .nl6-l {
      margin-left: -8rem;
    }

    * .nl7-l {
      margin-left: -16rem;
    }

    * .nr1-l {
      margin-right: -0.25rem;
    }

    * .nr2-l {
      margin-right: -0.5rem;
    }

    * .nr3-l {
      margin-right: -1rem;
    }

    * .nr4-l {
      margin-right: -2rem;
    }

    * .nr5-l {
      margin-right: -4rem;
    }

    * .nr6-l {
      margin-right: -8rem;
    }

    * .nr7-l {
      margin-right: -16rem;
    }

    * .nb1-l {
      margin-bottom: -0.25rem;
    }

    * .nb2-l {
      margin-bottom: -0.5rem;
    }

    * .nb3-l {
      margin-bottom: -1rem;
    }

    * .nb4-l {
      margin-bottom: -2rem;
    }

    * .nb5-l {
      margin-bottom: -4rem;
    }

    * .nb6-l {
      margin-bottom: -8rem;
    }

    * .nb7-l {
      margin-bottom: -16rem;
    }

    * .nt1-l {
      margin-top: -0.25rem;
    }

    * .nt2-l {
      margin-top: -0.5rem;
    }

    * .nt3-l {
      margin-top: -1rem;
    }

    * .nt4-l {
      margin-top: -2rem;
    }

    * .nt5-l {
      margin-top: -4rem;
    }

    * .nt6-l {
      margin-top: -8rem;
    }

    * .nt7-l {
      margin-top: -16rem;
    }
  }

  * .collapse {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * .striped--light-silver:nth-child(odd) {
    background-color: #aaa;
  }

  * .striped--moon-gray:nth-child(odd) {
    background-color: #ccc;
  }

  * .striped--light-gray:nth-child(odd) {
    background-color: #eee;
  }

  * .striped--near-white:nth-child(odd) {
    background-color: #f4f4f4;
  }

  * .stripe-light:nth-child(odd) {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  * .stripe-dark:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  * .strike {
    text-decoration: line-through;
  }

  * .underline {
    text-decoration: underline;
  }

  * .no-underline {
    text-decoration: none;
  }

  @media screen and (min-width: 30em) {
    * .strike-ns {
      text-decoration: line-through;
    }

    * .underline-ns {
      text-decoration: underline;
    }

    * .no-underline-ns {
      text-decoration: none;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .strike-m {
      text-decoration: line-through;
    }

    * .underline-m {
      text-decoration: underline;
    }

    * .no-underline-m {
      text-decoration: none;
    }
  }

  @media screen and (min-width: 60em) {
    * .strike-l {
      text-decoration: line-through;
    }

    * .underline-l {
      text-decoration: underline;
    }

    * .no-underline-l {
      text-decoration: none;
    }
  }

  * .tl {
    text-align: left;
  }

  * .tr {
    text-align: right;
  }

  * .tc {
    text-align: center;
  }

  * .tj {
    text-align: justify;
  }

  @media screen and (min-width: 30em) {
    * .tl-ns {
      text-align: left;
    }

    * .tr-ns {
      text-align: right;
    }

    * .tc-ns {
      text-align: center;
    }

    * .tj-ns {
      text-align: justify;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .tl-m {
      text-align: left;
    }

    * .tr-m {
      text-align: right;
    }

    * .tc-m {
      text-align: center;
    }

    * .tj-m {
      text-align: justify;
    }
  }

  @media screen and (min-width: 60em) {
    * .tl-l {
      text-align: left;
    }

    * .tr-l {
      text-align: right;
    }

    * .tc-l {
      text-align: center;
    }

    * .tj-l {
      text-align: justify;
    }
  }

  * .ttc {
    text-transform: capitalize;
  }

  * .ttl {
    text-transform: lowercase;
  }

  * .ttu {
    text-transform: uppercase;
  }

  * .ttn {
    text-transform: none;
  }

  @media screen and (min-width: 30em) {
    * .ttc-ns {
      text-transform: capitalize;
    }

    * .ttl-ns {
      text-transform: lowercase;
    }

    * .ttu-ns {
      text-transform: uppercase;
    }

    * .ttn-ns {
      text-transform: none;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .ttc-m {
      text-transform: capitalize;
    }

    * .ttl-m {
      text-transform: lowercase;
    }

    * .ttu-m {
      text-transform: uppercase;
    }

    * .ttn-m {
      text-transform: none;
    }
  }

  @media screen and (min-width: 60em) {
    * .ttc-l {
      text-transform: capitalize;
    }

    * .ttl-l {
      text-transform: lowercase;
    }

    * .ttu-l {
      text-transform: uppercase;
    }

    * .ttn-l {
      text-transform: none;
    }
  }

  * .f-6,
  * .f-headline {
    font-size: 6rem;
  }

  * .f-5,
  * .f-subheadline {
    font-size: 5rem;
  }

  * .f1 {
    font-size: 3rem;
  }

  * .f2 {
    font-size: 2.25rem;
  }

  * .f3 {
    font-size: 1.5rem;
  }

  * .f4 {
    font-size: 1.25rem;
  }

  * .f5 {
    font-size: 1rem;
  }

  * .f6 {
    font-size: 0.875rem;
  }

  * .f7 {
    font-size: 0.75rem;
  }

  @media screen and (min-width: 30em) {
    * .f-6-ns,
    * .f-headline-ns {
      font-size: 6rem;
    }

    * .f-5-ns,
    * .f-subheadline-ns {
      font-size: 5rem;
    }

    * .f1-ns {
      font-size: 3rem;
    }

    * .f2-ns {
      font-size: 2.25rem;
    }

    * .f3-ns {
      font-size: 1.5rem;
    }

    * .f4-ns {
      font-size: 1.25rem;
    }

    * .f5-ns {
      font-size: 1rem;
    }

    * .f6-ns {
      font-size: 0.875rem;
    }

    * .f7-ns {
      font-size: 0.75rem;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .f-6-m,
    * .f-headline-m {
      font-size: 6rem;
    }

    * .f-5-m,
    * .f-subheadline-m {
      font-size: 5rem;
    }

    * .f1-m {
      font-size: 3rem;
    }

    * .f2-m {
      font-size: 2.25rem;
    }

    * .f3-m {
      font-size: 1.5rem;
    }

    * .f4-m {
      font-size: 1.25rem;
    }

    * .f5-m {
      font-size: 1rem;
    }

    * .f6-m {
      font-size: 0.875rem;
    }

    * .f7-m {
      font-size: 0.75rem;
    }
  }

  @media screen and (min-width: 60em) {
    * .f-6-l,
    * .f-headline-l {
      font-size: 6rem;
    }

    * .f-5-l,
    * .f-subheadline-l {
      font-size: 5rem;
    }

    * .f1-l {
      font-size: 3rem;
    }

    * .f2-l {
      font-size: 2.25rem;
    }

    * .f3-l {
      font-size: 1.5rem;
    }

    * .f4-l {
      font-size: 1.25rem;
    }

    * .f5-l {
      font-size: 1rem;
    }

    * .f6-l {
      font-size: 0.875rem;
    }

    * .f7-l {
      font-size: 0.75rem;
    }
  }

  * .measure {
    max-width: 30em;
  }

  * .measure-wide {
    max-width: 34em;
  }

  * .measure-narrow {
    max-width: 20em;
  }

  * .indent {
    margin-bottom: 0;
    margin-top: 0;
    text-indent: 1em;
  }

  * .small-caps {
    font-feature-settings: "smcp";
    font-variant: small-caps;
  }

  * .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media screen and (min-width: 30em) {
    * .measure-ns {
      max-width: 30em;
    }

    * .measure-wide-ns {
      max-width: 34em;
    }

    * .measure-narrow-ns {
      max-width: 20em;
    }

    * .indent-ns {
      margin-bottom: 0;
      margin-top: 0;
      text-indent: 1em;
    }

    * .small-caps-ns {
      font-feature-settings: "smcp";
      font-variant: small-caps;
    }

    * .truncate-ns {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .measure-m {
      max-width: 30em;
    }

    * .measure-wide-m {
      max-width: 34em;
    }

    * .measure-narrow-m {
      max-width: 20em;
    }

    * .indent-m {
      margin-bottom: 0;
      margin-top: 0;
      text-indent: 1em;
    }

    * .small-caps-m {
      font-feature-settings: "smcp";
      font-variant: small-caps;
    }

    * .truncate-m {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 60em) {
    * .measure-l {
      max-width: 30em;
    }

    * .measure-wide-l {
      max-width: 34em;
    }

    * .measure-narrow-l {
      max-width: 20em;
    }

    * .indent-l {
      margin-bottom: 0;
      margin-top: 0;
      text-indent: 1em;
    }

    * .small-caps-l {
      font-feature-settings: "smcp";
      font-variant: small-caps;
    }

    * .truncate-l {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  * .overflow-container {
    overflow-y: scroll;
  }

  * .center {
    margin-left: auto;
    margin-right: auto;
  }

  * .mr-auto {
    margin-right: auto;
  }

  * .ml-auto {
    margin-left: auto;
  }

  @media screen and (min-width: 30em) {
    * .center-ns {
      margin-left: auto;
      margin-right: auto;
    }

    * .mr-auto-ns {
      margin-right: auto;
    }

    * .ml-auto-ns {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .center-m {
      margin-left: auto;
      margin-right: auto;
    }

    * .mr-auto-m {
      margin-right: auto;
    }

    * .ml-auto-m {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 60em) {
    * .center-l {
      margin-left: auto;
      margin-right: auto;
    }

    * .mr-auto-l {
      margin-right: auto;
    }

    * .ml-auto-l {
      margin-left: auto;
    }
  }

  * .clip {
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    position: fixed !important;
    _position: absolute !important;
  }

  @media screen and (min-width: 30em) {
    * .clip-ns {
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      position: fixed !important;
      _position: absolute !important;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .clip-m {
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      position: fixed !important;
      _position: absolute !important;
    }
  }

  @media screen and (min-width: 60em) {
    * .clip-l {
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      position: fixed !important;
      _position: absolute !important;
    }
  }

  * .ws-normal {
    white-space: normal;
  }

  * .nowrap {
    white-space: nowrap;
  }

  * .pre {
    white-space: pre;
  }

  @media screen and (min-width: 30em) {
    * .ws-normal-ns {
      white-space: normal;
    }

    * .nowrap-ns {
      white-space: nowrap;
    }

    * .pre-ns {
      white-space: pre;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .ws-normal-m {
      white-space: normal;
    }

    * .nowrap-m {
      white-space: nowrap;
    }

    * .pre-m {
      white-space: pre;
    }
  }

  @media screen and (min-width: 60em) {
    * .ws-normal-l {
      white-space: normal;
    }

    * .nowrap-l {
      white-space: nowrap;
    }

    * .pre-l {
      white-space: pre;
    }
  }

  * .v-base {
    vertical-align: baseline;
  }

  * .v-mid {
    vertical-align: middle;
  }

  * .v-top {
    vertical-align: top;
  }

  * .v-btm {
    vertical-align: bottom;
  }

  @media screen and (min-width: 30em) {
    * .v-base-ns {
      vertical-align: baseline;
    }

    * .v-mid-ns {
      vertical-align: middle;
    }

    * .v-top-ns {
      vertical-align: top;
    }

    * .v-btm-ns {
      vertical-align: bottom;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    * .v-base-m {
      vertical-align: baseline;
    }

    * .v-mid-m {
      vertical-align: middle;
    }

    * .v-top-m {
      vertical-align: top;
    }

    * .v-btm-m {
      vertical-align: bottom;
    }
  }

  @media screen and (min-width: 60em) {
    * .v-base-l {
      vertical-align: baseline;
    }

    * .v-mid-l {
      vertical-align: middle;
    }

    * .v-top-l {
      vertical-align: top;
    }

    * .v-btm-l {
      vertical-align: bottom;
    }
  }

  * .dim {
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }

  * .dim:focus,
  * .dim:hover {
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
  }

  * .dim:active {
    opacity: 0.8;
    transition: opacity 0.15s ease-out;
  }

  * .glow {
    transition: opacity 0.15s ease-in;
  }

  * .glow:focus,
  * .glow:hover {
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }

  * .hide-child .child {
    opacity: 0;
    transition: opacity 0.15s ease-in;
  }

  * .hide-child:active .child,
  * .hide-child:focus .child,
  * .hide-child:hover .child {
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }

  * .underline-hover:focus,
  * .underline-hover:hover {
    text-decoration: underline;
  }

  * .grow {
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
  }

  * .grow:focus,
  * .grow:hover {
    transform: scale(1.05);
  }

  * .grow:active {
    transform: scale(0.9);
  }

  * .grow-large {
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-in-out;
  }

  * .grow-large:focus,
  * .grow-large:hover {
    transform: scale(1.2);
  }

  * .grow-large:active {
    transform: scale(0.95);
  }

  * .pointer:hover {
    cursor: pointer;
  }

  * .shadow-hover {
    cursor: pointer;
    position: relative;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  * .shadow-hover:after {
    border-radius: inherit;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
    z-index: -1;
  }

  * .shadow-hover:focus:after,
  * .shadow-hover:hover:after {
    opacity: 1;
  }

  * .bg-animate,
  * .bg-animate:focus,
  * .bg-animate:hover {
    transition: background-color 0.15s ease-in-out;
  }

  * .z-0 {
    z-index: 0;
  }

  * .z-1 {
    z-index: 1;
  }

  * .z-2 {
    z-index: 2;
  }

  * .z-3 {
    z-index: 3;
  }

  * .z-4 {
    z-index: 4;
  }

  * .z-5 {
    z-index: 5;
  }

  * .z-999 {
    z-index: 999;
  }

  * .z-9999 {
    z-index: 9999;
  }

  * .z-max {
    z-index: 2147483647;
  }

  * .z-inherit {
    z-index: inherit;
  }

  * .z-initial {
    z-index: auto;
  }

  * .z-unset {
    z-index: unset;
  }

  * .nested-copy-line-height ol,
  * .nested-copy-line-height p,
  * .nested-copy-line-height ul {
    line-height: 1.5;
  }

  * .nested-headline-line-height h1,
  * .nested-headline-line-height h2,
  * .nested-headline-line-height h3,
  * .nested-headline-line-height h4,
  * .nested-headline-line-height h5,
  * .nested-headline-line-height h6 {
    line-height: 1.25;
  }

  * .nested-list-reset ol,
  * .nested-list-reset ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
  }

  * .nested-copy-indent p + p {
    margin-bottom: 0;
    margin-top: 0;
    text-indent: 0.1em;
  }

  * .nested-copy-seperator p + p {
    margin-top: 1.5em;
  }

  * .nested-img img {
    display: block;
    max-width: 100%;
    width: 100%;
  }

  * .nested-links a {
    color: #357edd;
    transition: color 0.15s ease-in;
  }

  * .nested-links a:focus,
  * .nested-links a:hover {
    color: #96ccff;
    transition: color 0.15s ease-in;
  }

  * .wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1460px;
    padding: 0 20px;
    width: 100%;
  }

  * .opblock-tag-section {
    display: flex;
    flex-direction: column;
  }

  * .try-out.btn-group {
    display: flex;
    flex: 0.1 2 auto;
    padding: 0;
  }

  * .try-out__btn {
    margin-left: 1.25rem;
  }

  * .opblock-tag {
    align-items: center;
    border-bottom: 1px solid rgba(59, 65, 81, 0.3);
    cursor: pointer;
    display: flex;
    padding: 10px 20px 10px 10px;
    transition: all 0.2s;
  }

  * .opblock-tag:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  * .opblock-tag {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 24px;
    margin: 0 0 5px;
  }

  * .opblock-tag.no-desc span {
    flex: 1;
  }

  * .opblock-tag svg {
    transition: all 0.4s;
  }

  * .opblock-tag small {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 0 10px;
  }

  * .parameter__type {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 0;
  }

  * .parameter-controls {
    margin-top: 0.75em;
  }

  * .examples__title {
    display: block;
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 0.75em;
  }

  * .examples__section {
    margin-top: 1.5em;
  }

  * .examples__section-header {
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  * .examples-select {
    display: inline-block;
    margin-bottom: 0.75em;
  }

  * .examples-select .examples-select-element {
    width: 100%;
  }

  * .examples-select__section-label {
    font-size: 0.9rem;
    font-weight: 700;
    margin-right: 0.5rem;
  }

  * .example__section {
    margin-top: 1.5em;
  }

  * .example__section-header {
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  * .view-line-link {
    cursor: pointer;
    margin: 0 5px;
    position: relative;
    top: 3px;
    transition: all 0.5s;
    width: 20px;
  }

  * .opblock {
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.19);
    margin: 0 0 15px;
  }

  * .opblock .tab-header {
    display: flex;
    flex: 1;
  }

  * .opblock .tab-header .tab-item {
    cursor: pointer;
    padding: 0 40px;
  }

  * .opblock .tab-header .tab-item:first-of-type {
    padding: 0 40px 0 0;
  }

  * .opblock .tab-header .tab-item.active h4 span {
    position: relative;
  }

  * .opblock .tab-header .tab-item.active h4 span:after {
    background: grey;
    bottom: -15px;
    content: "";
    height: 4px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 120%;
  }

  * .opblock.is-open .opblock-summary {
    border-bottom: 1px solid #000;
  }

  * .opblock .opblock-section-header {
    align-items: center;
    background: hsla(0, 0%, 100%, 0.8);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    min-height: 50px;
    padding: 8px 20px;
  }

  * .opblock .opblock-section-header > label {
    align-items: center;
    color: #3b4151;
    display: flex;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 0 auto;
  }

  * .opblock .opblock-section-header > label > span {
    padding: 0 10px 0 0;
  }

  * .opblock .opblock-section-header h4 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 14px;
    margin: 0;
  }

  * .opblock .opblock-summary-method {
    background: #000;
    border-radius: 3px;
    color: #fff;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    min-width: 80px;
    padding: 6px 0;
    text-align: center;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  * .opblock .opblock-summary-operation-id,
  * .opblock .opblock-summary-path,
  * .opblock .opblock-summary-path__deprecated {
    align-items: center;
    color: #3b4151;
    display: flex;
    font-family: monospace;
    font-size: 16px;
    font-weight: 600;
    padding: 0 10px;
    word-break: break-word;
  }

  @media (max-width: 768px) {
    * .opblock .opblock-summary-operation-id,
    * .opblock .opblock-summary-path,
    * .opblock .opblock-summary-path__deprecated {
      font-size: 12px;
    }
  }

  * .opblock .opblock-summary-path {
    flex-shrink: 0;
    max-width: calc(100% - 110px - 15rem);
  }

  * .opblock .opblock-summary-path__deprecated {
    text-decoration: line-through;
  }

  * .opblock .opblock-summary-operation-id {
    font-size: 14px;
  }

  * .opblock .opblock-summary-description {
    color: #3b4151;
    flex: 1 1 auto;
    font-family: sans-serif;
    font-size: 13px;
    word-break: break-word;
  }

  * .opblock .opblock-summary {
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 5px;
  }

  * .opblock .opblock-summary .view-line-link {
    cursor: pointer;
    margin: 0;
    position: relative;
    top: 2px;
    transition: all 0.5s;
    width: 0;
  }

  * .opblock .opblock-summary:hover .view-line-link {
    margin: 0 5px;
    width: 18px;
  }

  * .opblock.opblock-post {
    background: rgba(73, 204, 144, 0.1);
    border-color: #49cc90;
  }

  * .opblock.opblock-post .opblock-summary-method {
    background: #49cc90;
  }

  * .opblock.opblock-post .opblock-summary {
    border-color: #49cc90;
  }

  * .opblock.opblock-post .tab-header .tab-item.active h4 span:after {
    background: #49cc90;
  }

  * .opblock.opblock-put {
    background: rgba(252, 161, 48, 0.1);
    border-color: #fca130;
  }

  * .opblock.opblock-put .opblock-summary-method {
    background: #fca130;
  }

  * .opblock.opblock-put .opblock-summary {
    border-color: #fca130;
  }

  * .opblock.opblock-put .tab-header .tab-item.active h4 span:after {
    background: #fca130;
  }

  * .opblock.opblock-delete {
    background: rgba(249, 62, 62, 0.1);
    border-color: #f93e3e;
  }

  * .opblock.opblock-delete .opblock-summary-method {
    background: #f93e3e;
  }

  * .opblock.opblock-delete .opblock-summary {
    border-color: #f93e3e;
  }

  *
    .opblock.opblock-delete
    .tab-header
    .tab-item.active
    h4
    span:after {
    background: #f93e3e;
  }

  * .opblock.opblock-get {
    background: rgba(97, 175, 254, 0.1);
    border-color: #61affe;
  }

  * .opblock.opblock-get .opblock-summary-method {
    background: #61affe;
  }

  * .opblock.opblock-get .opblock-summary {
    border-color: #61affe;
  }

  * .opblock.opblock-get .tab-header .tab-item.active h4 span:after {
    background: #61affe;
  }

  * .opblock.opblock-patch {
    background: rgba(80, 227, 194, 0.1);
    border-color: #50e3c2;
  }

  * .opblock.opblock-patch .opblock-summary-method {
    background: #50e3c2;
  }

  * .opblock.opblock-patch .opblock-summary {
    border-color: #50e3c2;
  }

  *
    .opblock.opblock-patch
    .tab-header
    .tab-item.active
    h4
    span:after {
    background: #50e3c2;
  }

  * .opblock.opblock-head {
    background: rgba(144, 18, 254, 0.1);
    border-color: #9012fe;
  }

  * .opblock.opblock-head .opblock-summary-method {
    background: #9012fe;
  }

  * .opblock.opblock-head .opblock-summary {
    border-color: #9012fe;
  }

  * .opblock.opblock-head .tab-header .tab-item.active h4 span:after {
    background: #9012fe;
  }

  * .opblock.opblock-options {
    background: rgba(13, 90, 167, 0.1);
    border-color: #0d5aa7;
  }

  * .opblock.opblock-options .opblock-summary-method {
    background: #0d5aa7;
  }

  * .opblock.opblock-options .opblock-summary {
    border-color: #0d5aa7;
  }

  *
    .opblock.opblock-options
    .tab-header
    .tab-item.active
    h4
    span:after {
    background: #0d5aa7;
  }

  * .opblock.opblock-deprecated {
    background: hsla(0, 0%, 92%, 0.1);
    border-color: #ebebeb;
    opacity: 0.6;
  }

  * .opblock.opblock-deprecated .opblock-summary-method {
    background: #ebebeb;
  }

  * .opblock.opblock-deprecated .opblock-summary {
    border-color: #ebebeb;
  }

  *
    .opblock.opblock-deprecated
    .tab-header
    .tab-item.active
    h4
    span:after {
    background: #ebebeb;
  }

  * .opblock .opblock-schemes {
    padding: 8px 20px;
  }

  * .opblock .opblock-schemes .schemes-title {
    padding: 0 10px 0 0;
  }

  * .filter .operation-filter-input {
    border: 2px solid #d8dde7;
    margin: 20px 0;
    padding: 10px;
    width: 100%;
  }

  * .download-url-wrapper .failed,
  * .filter .failed {
    color: red;
  }

  * .download-url-wrapper .loading,
  * .filter .loading {
    color: #aaa;
  }

  * .model-example {
    margin-top: 1em;
  }

  * .tab {
    display: flex;
    list-style: none;
    padding: 0;
  }

  * .tab li {
    color: #3b4151;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 12px;
    min-width: 60px;
    padding: 0;
  }

  * .tab li:first-of-type {
    padding-left: 0;
    padding-right: 12px;
    position: relative;
  }

  * .tab li:first-of-type:after {
    background: rgba(0, 0, 0, 0.2);
    content: "";
    height: 100%;
    position: absolute;
    right: 6px;
    top: 0;
    width: 1px;
  }

  * .tab li.active {
    font-weight: 700;
  }

  * .tab li button.tablinks {
    background: none;
    border: 0;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    padding: 0;
  }

  * .opblock-description-wrapper,
  * .opblock-external-docs-wrapper,
  * .opblock-title_normal {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px;
    padding: 15px 20px;
  }

  * .opblock-description-wrapper h4,
  * .opblock-external-docs-wrapper h4,
  * .opblock-title_normal h4 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px;
  }

  * .opblock-description-wrapper p,
  * .opblock-external-docs-wrapper p,
  * .opblock-title_normal p {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    margin: 0;
  }

  * .opblock-external-docs-wrapper h4 {
    padding-left: 0;
  }

  * .execute-wrapper {
    padding: 20px;
    text-align: right;
  }

  * .execute-wrapper .btn {
    padding: 8px 40px;
    width: 100%;
  }

  * .body-param-options {
    display: flex;
    flex-direction: column;
  }

  * .body-param-options .body-param-edit {
    padding: 10px 0;
  }

  * .body-param-options label {
    padding: 8px 0;
  }

  * .body-param-options label select {
    margin: 3px 0 0;
  }

  * .responses-inner {
    padding: 20px;
  }

  * .responses-inner h4,
  * .responses-inner h5 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 10px 0 5px;
  }

  * .responses-inner .curl {
    white-space: normal;
  }

  * .response-col_status {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
  }

  * .response-col_status .response-undocumented {
    color: #909090;
    font-family: monospace;
    font-size: 11px;
    font-weight: 600;
  }

  * .response-col_links {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    max-width: 40em;
    padding-left: 2em;
  }

  * .response-col_links .response-undocumented {
    color: #909090;
    font-family: monospace;
    font-size: 11px;
    font-weight: 600;
  }

  * .response-col_links .operation-link {
    margin-bottom: 1.5em;
  }

  * .response-col_links .operation-link .description {
    margin-bottom: 0.5em;
  }

  * .opblock-body .opblock-loading-animation {
    display: block;
    margin: 3em auto;
  }

  * .opblock-body pre.microlight {
    word-wrap: break-word;
    background: #333;
    border-radius: 4px;
    color: #fff;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    margin: 0;
    padding: 10px;
    white-space: pre-wrap;
    word-break: break-all;
    word-break: break-word;
  }

  * .opblock-body pre.microlight .headerline {
    display: block;
  }

  * .highlight-code {
    position: relative;
  }

  * .highlight-code > .microlight {
    max-height: 400px;
    min-height: 6em;
    overflow-y: auto;
  }

  * .highlight-code > .microlight code {
    white-space: pre-wrap !important;
    word-break: break-all;
  }

  * .curl-command {
    position: relative;
  }

  * .download-contents {
    background: #7d8293;
    border-radius: 4px;
    bottom: 10px;
    color: #fff;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 600;
    height: 30px;
    padding: 5px;
    position: absolute;
    right: 10px;
    text-align: center;
  }

  * .scheme-container {
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    margin: 0 0 20px;
    padding: 30px 0;
  }

  * .scheme-container .schemes {
    align-items: flex-end;
    display: flex;
  }

  * .scheme-container .schemes > label {
    color: #3b4151;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: -20px 15px 0 0;
  }

  * .scheme-container .schemes > label select {
    min-width: 130px;
    text-transform: uppercase;
  }

  * .loading-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1em;
    min-height: 1px;
    padding: 40px 0 60px;
  }

  * .loading-container .loading {
    position: relative;
  }

  * .loading-container .loading:after {
    color: #3b4151;
    content: "loading";
    font-family: sans-serif;
    font-size: 10px;
    font-weight: 700;
    left: 50%;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  * .loading-container .loading:before {
    -webkit-animation: rotation 1s linear infinite, opacity 0.5s;
    animation: rotation 1s linear infinite, opacity 0.5s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid rgba(85, 85, 85, 0.1);
    border-radius: 100%;
    border-top-color: rgba(0, 0, 0, 0.6);
    content: "";
    display: block;
    height: 60px;
    left: 50%;
    margin: -30px;
    opacity: 1;
    position: absolute;
    top: 50%;
    width: 60px;
  }

  @-webkit-keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }

  * .response-controls {
    display: flex;
    padding-top: 1em;
  }

  * .response-control-media-type {
    margin-right: 1em;
  }

  * .response-control-media-type--accept-controller select {
    border-color: green;
  }

  * .response-control-media-type__accept-message {
    color: green;
    font-size: 0.7em;
  }

  * .response-control-examples__title,
  * .response-control-media-type__title {
    display: block;
    font-size: 0.7em;
    margin-bottom: 0.2em;
  }

  @-webkit-keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  * .hidden {
    display: none;
  }

  * .no-margin {
    border: none;
    height: auto;
    margin: 0;
    padding: 0;
  }

  * .float-right {
    float: right;
  }

  * .svg-assets {
    height: 0;
    position: absolute;
    width: 0;
  }

  * section h3 {
    color: #3b4151;
    font-family: sans-serif;
  }

  * a.nostyle {
    display: inline;
  }

  * a.nostyle,
  * a.nostyle:visited {
    color: inherit;
    cursor: pointer;
    text-decoration: inherit;
  }

  * .fallback {
    color: #aaa;
    padding: 1em;
  }

  * .version-pragma {
    height: 100%;
    padding: 5em 0;
  }

  * .version-pragma__message {
    display: flex;
    font-size: 1.2em;
    height: 100%;
    justify-content: center;
    line-height: 1.5em;
    padding: 0 0.6em;
    text-align: center;
  }

  * .version-pragma__message > div {
    flex: 1;
    max-width: 55ch;
  }

  * .version-pragma__message code {
    background-color: #dedede;
    padding: 4px 4px 2px;
    white-space: pre;
  }

  * .opblock-link {
    font-weight: 400;
  }

  * .opblock-link.shown {
    font-weight: 700;
  }

  * span.token-string {
    color: #555;
  }

  * span.token-not-formatted {
    color: #555;
    font-weight: 700;
  }

  * .btn {
    background: transparent;
    border: 2px solid grey;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 23px;
    transition: all 0.3s;
  }

  * .btn.btn-sm {
    font-size: 12px;
    padding: 4px 23px;
  }

  * .btn[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }

  * .btn:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  * .btn.cancel {
    background-color: transparent;
    border-color: #ff6060;
    color: #ff6060;
    font-family: sans-serif;
  }

  * .btn.authorize {
    background-color: transparent;
    border-color: #49cc90;
    color: #49cc90;
    line-height: 1;
  }

  * .btn.authorize span {
    float: left;
    padding: 4px 20px 0 0;
  }

  * .btn.authorize svg {
    fill: #49cc90;
  }

  * .btn.execute {
    background-color: #4990e2;
    border-color: #4990e2;
    color: #fff;
  }

  * .btn-group {
    display: flex;
    padding: 30px;
  }

  * .btn-group .btn {
    flex: 1;
  }

  * .btn-group .btn:first-child {
    border-radius: 4px 0 0 4px;
  }

  * .btn-group .btn:last-child {
    border-radius: 0 4px 4px 0;
  }

  * .authorization__btn {
    background: none;
    border: none;
    padding: 0 10px;
  }

  * .authorization__btn.locked {
    opacity: 1;
  }

  * .authorization__btn.unlocked {
    opacity: 0.4;
  }

  * .model-box-control,
  * .models-control,
  * .opblock-summary-control {
    all: inherit;
    border-bottom: 0;
    cursor: pointer;
    flex: 1;
    padding: 0;
  }

  * .model-box-control:focus,
  * .models-control:focus,
  * .opblock-summary-control:focus {
    outline: auto;
  }

  * .expand-methods,
  * .expand-operation {
    background: none;
    border: none;
  }

  * .expand-methods svg,
  * .expand-operation svg {
    height: 20px;
    width: 20px;
  }

  * .expand-methods {
    padding: 0 10px;
  }

  * .expand-methods:hover svg {
    fill: #404040;
  }

  * .expand-methods svg {
    fill: #707070;
    transition: all 0.3s;
  }

  * button {
    cursor: pointer;
  }

  * button.invalid {
    -webkit-animation: shake 0.4s 1;
    animation: shake 0.4s 1;
    background: #feebeb;
    border-color: #f93e3e;
  }

  * .copy-to-clipboard {
    background: #7d8293;
    border: none;
    border-radius: 4px;
    bottom: 10px;
    height: 30px;
    position: absolute;
    right: 100px;
    width: 30px;
  }

  * .copy-to-clipboard button {
    background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden="true"><path fill="%23fff" fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg>')
      50% no-repeat;
    border: none;
    height: 25px;
    padding-left: 25px;
  }

  * .curl-command .copy-to-clipboard {
    bottom: 5px;
    height: 20px;
    right: 10px;
    width: 20px;
  }

  * .curl-command .copy-to-clipboard button {
    height: 18px;
    padding-left: 18px;
  }

  * select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f7f7f7
      url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"/></svg>')
      right 10px center no-repeat;
    background-size: 20px;
    border: 2px solid #41444e;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 40px 5px 10px;
  }

  * select[multiple] {
    background: #f7f7f7;
    margin: 5px 0;
    padding: 5px;
  }

  * select.invalid {
    -webkit-animation: shake 0.4s 1;
    animation: shake 0.4s 1;
    background: #feebeb;
    border-color: #f93e3e;
  }

  * .opblock-body select {
    min-width: 230px;
  }

  @media (max-width: 768px) {
    * .opblock-body select {
      min-width: 180px;
    }
  }

  * label {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 5px;
  }

  @media (max-width: 768px) {
    * input[type="email"],
    * input[type="file"],
    * input[type="password"],
    * input[type="search"],
    * input[type="text"] {
      max-width: 175px;
    }
  }

  * input[type="email"],
  * input[type="file"],
  * input[type="password"],
  * input[type="search"],
  * input[type="text"],
  * textarea {
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin: 5px 0;
    min-width: 100px;
    padding: 8px 10px;
  }

  * input[type="email"].invalid,
  * input[type="file"].invalid,
  * input[type="password"].invalid,
  * input[type="search"].invalid,
  * input[type="text"].invalid,
  * textarea.invalid {
    -webkit-animation: shake 0.4s 1;
    animation: shake 0.4s 1;
    background: #feebeb;
    border-color: #f93e3e;
  }

  * input[disabled],
  * select[disabled],
  * textarea[disabled] {
    background-color: #fafafa;
    color: #888;
    cursor: not-allowed;
  }

  * select[disabled] {
    border-color: #888;
  }

  * textarea[disabled] {
    background-color: #41444e;
    color: #fff;
  }

  @-webkit-keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  * textarea {
    background: hsla(0, 0%, 100%, 0.8);
    border: none;
    border-radius: 4px;
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    min-height: 280px;
    outline: none;
    padding: 10px;
    width: 100%;
  }

  * textarea:focus {
    border: 2px solid #61affe;
  }

  * textarea.curl {
    background: #41444e;
    border-radius: 4px;
    color: #fff;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    min-height: 100px;
    padding: 10px;
    resize: none;
  }

  * .checkbox {
    color: #303030;
    padding: 5px 0 10px;
    transition: opacity 0.5s;
  }

  * .checkbox label {
    display: flex;
  }

  * .checkbox p {
    color: #3b4151;
    font-family: monospace;
    font-style: italic;
    font-weight: 400 !important;
    font-weight: 600;
    margin: 0 !important;
  }

  * .checkbox input[type="checkbox"] {
    display: none;
  }

  * .checkbox input[type="checkbox"] + label > .item {
    background: #e8e8e8;
    border-radius: 1px;
    box-shadow: 0 0 0 2px #e8e8e8;
    cursor: pointer;
    display: inline-block;
    flex: none;
    height: 16px;
    margin: 0 8px 0 0;
    padding: 5px;
    position: relative;
    top: 3px;
    width: 16px;
  }

  * .checkbox input[type="checkbox"] + label > .item:active {
    transform: scale(0.9);
  }

  * .checkbox input[type="checkbox"]:checked + label > .item {
    background: #e8e8e8
      url('data:image/svg+xml;charset=utf-8,<svg width="10" height="8" viewBox="3 7 10 8" xmlns="http://www.w3.org/2000/svg"><path fill="%2341474E" fill-rule="evenodd" d="M6.333 15 3 11.667l1.333-1.334 2 2L11.667 7 13 8.333z"/></svg>')
      50% no-repeat;
  }

  * .dialog-ux {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
  }

  * .dialog-ux .backdrop-ux {
    background: rgba(0, 0, 0, 0.8);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  * .dialog-ux .modal-ux {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
    left: 50%;
    max-width: 650px;
    min-width: 300px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 9999;
  }

  * .dialog-ux .modal-ux-content {
    max-height: 540px;
    overflow-y: auto;
    padding: 20px;
  }

  * .dialog-ux .modal-ux-content p {
    color: #41444e;
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px;
  }

  * .dialog-ux .modal-ux-content h4 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0 0;
  }

  * .dialog-ux .modal-ux-header {
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    padding: 12px 0;
  }

  * .dialog-ux .modal-ux-header .close-modal {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: none;
    padding: 0 10px;
  }

  * .dialog-ux .modal-ux-header h3 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    padding: 0 20px;
  }

  * .model {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 300;
    font-weight: 600;
  }

  * .model .deprecated span,
  * .model .deprecated td {
    color: #a0a0a0 !important;
  }

  * .model .deprecated > td:first-of-type {
    text-decoration: line-through;
  }

  * .model-toggle {
    cursor: pointer;
    display: inline-block;
    font-size: 10px;
    margin: auto 0.3em;
    position: relative;
    top: 6px;
    transform: rotate(90deg);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-in;
  }

  * .model-toggle.collapsed {
    transform: rotate(0deg);
  }

  * .model-toggle:after {
    background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>')
      50% no-repeat;
    background-size: 100%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }

  * .model-jump-to-path {
    cursor: pointer;
    position: relative;
  }

  * .model-jump-to-path .view-line-link {
    cursor: pointer;
    position: absolute;
    top: -0.4em;
  }

  * .model-title {
    position: relative;
  }

  * .model-title:hover .model-hint {
    visibility: visible;
  }

  * .model-hint {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    color: #ebebeb;
    padding: 0.1em 0.5em;
    position: absolute;
    top: -1.8em;
    visibility: hidden;
    white-space: nowrap;
  }

  * .model p {
    margin: 0 0 1em;
  }

  * .model .property {
    color: #999;
    font-style: italic;
  }

  * .model .property.primitive {
    color: #6b6b6b;
  }

  * table.model tr.description {
    color: #666;
    font-weight: 400;
  }

  * table.model tr.description td:first-child,
  * table.model tr.property-row.required td:first-child {
    font-weight: 700;
  }

  * table.model tr.property-row td {
    vertical-align: top;
  }

  * table.model tr.property-row td:first-child {
    padding-right: 0.2em;
  }

  * table.model tr.property-row .star {
    color: red;
  }

  * table.model tr.extension {
    color: #777;
  }

  * table.model tr.extension td:last-child {
    vertical-align: top;
  }

  * section.models {
    border: 1px solid rgba(59, 65, 81, 0.3);
    border-radius: 4px;
    margin: 30px 0;
  }

  * section.models .pointer {
    cursor: pointer;
  }

  * section.models.is-open {
    padding: 0 0 20px;
  }

  * section.models.is-open h4 {
    border-bottom: 1px solid rgba(59, 65, 81, 0.3);
    margin: 0 0 5px;
  }

  * section.models h4 {
    align-items: center;
    color: #606060;
    cursor: pointer;
    display: flex;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 10px 20px 10px 10px;
    transition: all 0.2s;
  }

  * section.models h4 svg {
    transition: all 0.4s;
  }

  * section.models h4 span {
    flex: 1;
  }

  * section.models h4:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  * section.models h5 {
    color: #707070;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0 0 10px;
  }

  * section.models .model-jump-to-path {
    position: relative;
    top: 5px;
  }

  * section.models .model-container {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin: 0 20px 15px;
    position: relative;
    transition: all 0.5s;
  }

  * section.models .model-container:hover {
    background: rgba(0, 0, 0, 0.07);
  }

  * section.models .model-container:first-of-type {
    margin: 20px;
  }

  * section.models .model-container:last-of-type {
    margin: 0 20px;
  }

  * section.models .model-container .models-jump-to-path {
    opacity: 0.65;
    position: absolute;
    right: 5px;
    top: 8px;
  }

  * section.models .model-box {
    background: none;
  }

  * .model-box {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: inline-block;
    padding: 10px;
  }

  * .model-box .model-jump-to-path {
    position: relative;
    top: 4px;
  }

  * .model-box.deprecated {
    opacity: 0.5;
  }

  * .model-title {
    color: #505050;
    font-family: sans-serif;
    font-size: 16px;
  }

  * .model-title img {
    bottom: 0;
    margin-left: 1em;
    position: relative;
  }

  * .model-deprecated-warning {
    color: #f93e3e;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-right: 1em;
  }

  * span > span.model .brace-close {
    padding: 0 0 0 10px;
  }

  * .prop-name {
    display: inline-block;
    margin-right: 1em;
  }

  * .prop-type {
    color: #55a;
  }

  * .prop-enum {
    display: block;
  }

  * .prop-format {
    color: #606060;
  }

  * .servers > label {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: -20px 15px 0 0;
  }

  * .servers > label select {
    max-width: 100%;
    min-width: 130px;
  }

  * .servers h4.message {
    padding-bottom: 2em;
  }

  * .servers table tr {
    width: 30em;
  }

  * .servers table td {
    display: inline-block;
    max-width: 15em;
    padding-bottom: 10px;
    padding-top: 10px;
    vertical-align: middle;
  }

  * .servers table td:first-of-type {
    padding-right: 1em;
  }

  * .servers table td input {
    height: 100%;
    width: 100%;
  }

  * .servers .computed-url {
    margin: 2em 0;
  }

  * .servers .computed-url code {
    display: inline-block;
    font-size: 16px;
    margin: 0 1em;
    padding: 4px;
  }

  * .servers-title {
    font-size: 12px;
    font-weight: 700;
  }

  * .operation-servers h4.message {
    margin-bottom: 2em;
  }

  * table {
    border-collapse: collapse;
    padding: 0 10px;
    width: 100%;
  }

  * table.model tbody tr td {
    padding: 0;
    vertical-align: top;
  }

  * table.model tbody tr td:first-of-type {
    padding: 0 0 0 2em;
    width: 174px;
  }

  * table.headers td {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 300;
    font-weight: 600;
    vertical-align: middle;
  }

  * table.headers .header-example {
    color: #999;
    font-style: italic;
  }

  * table tbody tr td {
    padding: 10px 0 0;
    vertical-align: top;
  }

  * table tbody tr td:first-of-type {
    min-width: 6em;
    padding: 10px 0;
  }

  * table thead tr td,
  * table thead tr th {
    border-bottom: 1px solid rgba(59, 65, 81, 0.2);
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    padding: 12px 0;
    text-align: left;
  }

  * .parameters-col_description {
    margin-bottom: 2em;
    width: 99%;
  }

  * .parameters-col_description input[type="text"] {
    max-width: 340px;
    width: 100%;
  }

  * .parameters-col_description select {
    border-width: 1px;
  }

  * .parameter__name {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-right: 0.75em;
  }

  * .parameter__name.required {
    font-weight: 700;
  }

  * .parameter__name.required span {
    color: red;
  }

  * .parameter__name.required:after {
    color: rgba(255, 0, 0, 0.6);
    content: "required";
    font-size: 10px;
    padding: 5px;
    position: relative;
    top: -6px;
  }

  * .parameter__extension,
  * .parameter__in {
    color: grey;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600;
  }

  * .parameter__deprecated {
    color: red;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600;
  }

  * .parameter__empty_value_toggle {
    display: block;
    font-size: 13px;
    padding-bottom: 12px;
    padding-top: 5px;
  }

  * .parameter__empty_value_toggle input {
    margin-right: 7px;
  }

  * .parameter__empty_value_toggle.disabled {
    opacity: 0.7;
  }

  * .table-container {
    padding: 20px;
  }

  * .response-col_description {
    width: 99%;
  }

  * .response-col_links {
    min-width: 6em;
  }

  * .response__extension {
    color: grey;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600;
  }

  * .topbar {
    background-color: #1b1b1b;
    padding: 10px 0;
  }

  * .topbar .topbar-wrapper,
  * .topbar a {
    align-items: center;
    display: flex;
  }

  * .topbar a {
    color: #fff;
    flex: 1;
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    max-width: 300px;
    text-decoration: none;
  }

  * .topbar a span {
    margin: 0;
    padding: 0 10px;
  }

  * .topbar .download-url-wrapper {
    display: flex;
    flex: 3;
    justify-content: flex-end;
  }

  * .topbar .download-url-wrapper input[type="text"] {
    border: 2px solid #62a03f;
    border-radius: 4px 0 0 4px;
    margin: 0;
    outline: none;
    width: 100%;
  }

  * .topbar .download-url-wrapper .select-label {
    align-items: center;
    color: #f0f0f0;
    display: flex;
    margin: 0;
    max-width: 600px;
    width: 100%;
  }

  * .topbar .download-url-wrapper .select-label span {
    flex: 1;
    font-size: 16px;
    padding: 0 10px 0 0;
    text-align: right;
  }

  * .topbar .download-url-wrapper .select-label select {
    border: 2px solid #62a03f;
    box-shadow: none;
    flex: 2;
    outline: none;
    width: 100%;
  }

  * .topbar .download-url-wrapper .download-url-button {
    background: #62a03f;
    border: none;
    border-radius: 0 4px 4px 0;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 30px;
  }

  * .info {
    margin: 50px 0;
  }

  * .info.failed-config {
    margin-left: auto;
    margin-right: auto;
    max-width: 880px;
    text-align: center;
  }

  * .info hgroup.main {
    margin: 0 0 20px;
  }

  * .info hgroup.main a {
    font-size: 12px;
  }

  * .info pre {
    font-size: 14px;
  }

  * .info li,
  * .info p,
  * .info table {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
  }

  * .info h1,
  * .info h2,
  * .info h3,
  * .info h4,
  * .info h5 {
    color: #3b4151;
    font-family: sans-serif;
  }

  * .info a {
    color: #4990e2;
    font-family: sans-serif;
    font-size: 14px;
    transition: all 0.4s;
  }

  * .info a:hover {
    color: #1f69c0;
  }

  * .info > div {
    margin: 0 0 5px;
  }

  * .info .base-url {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 300 !important;
    font-weight: 600;
    margin: 0;
  }

  * .info .title {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 36px;
    margin: 0;
  }

  * .info .title small {
    background: #7d8492;
    border-radius: 57px;
    display: inline-block;
    font-size: 10px;
    margin: 0 0 0 5px;
    padding: 2px 4px;
    position: relative;
    top: -5px;
    vertical-align: super;
  }

  * .info .title small.version-stamp {
    background-color: #89bf04;
  }

  * .info .title small pre {
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  * .auth-btn-wrapper {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

  * .auth-btn-wrapper .btn-done {
    margin-right: 1em;
  }

  * .auth-wrapper {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  * .auth-wrapper .authorize {
    margin-right: 10px;
    padding-right: 20px;
  }

  * .auth-container {
    border-bottom: 1px solid #ebebeb;
    margin: 0 0 10px;
    padding: 10px 20px;
  }

  * .auth-container:last-of-type {
    border: 0;
    margin: 0;
    padding: 10px 20px;
  }

  * .auth-container h4 {
    margin: 5px 0 15px !important;
  }

  * .auth-container .wrapper {
    margin: 0;
    padding: 0;
  }

  * .auth-container input[type="password"],
  * .auth-container input[type="text"] {
    min-width: 230px;
  }

  * .auth-container .errors {
    background-color: #fee;
    border-radius: 4px;
    color: red;
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    margin: 1em;
    padding: 10px;
  }

  * .auth-container .errors b {
    margin-right: 1em;
    text-transform: capitalize;
  }

  * .scopes h2 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
  }

  * .scopes h2 a {
    color: #4990e2;
    cursor: pointer;
    font-size: 12px;
    padding-left: 10px;
    text-decoration: underline;
  }

  * .scope-def {
    padding: 0 0 20px;
  }

  * .errors-wrapper {
    -webkit-animation: scaleUp 0.5s;
    animation: scaleUp 0.5s;
    background: rgba(249, 62, 62, 0.1);
    border: 2px solid #f93e3e;
    border-radius: 4px;
    margin: 20px;
    padding: 10px 20px;
  }

  * .errors-wrapper .error-wrapper {
    margin: 0 0 10px;
  }

  * .errors-wrapper .errors h4 {
    color: #3b4151;
    font-family: monospace;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }

  * .errors-wrapper .errors small {
    color: #606060;
  }

  * .errors-wrapper .errors .message {
    white-space: pre-line;
  }

  * .errors-wrapper .errors .message.thrown {
    max-width: 100%;
  }

  * .errors-wrapper .errors .error-line {
    cursor: pointer;
    text-decoration: underline;
  }

  * .errors-wrapper hgroup {
    align-items: center;
    display: flex;
  }

  * .errors-wrapper hgroup h4 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 20px;
    margin: 0;
  }

  @-webkit-keyframes scaleUp {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes scaleUp {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  * .Resizer.vertical.disabled {
    display: none;
  }

  * .markdown p,
  * .markdown pre,
  * .renderedMarkdown p,
  * .renderedMarkdown pre {
    margin: 1em auto;
    word-break: break-all;
    word-break: break-word;
  }

  * .markdown pre,
  * .renderedMarkdown pre {
    background: none;
    color: #000;
    font-weight: 400;
    padding: 0;
    white-space: pre-wrap;
  }

  * .markdown code,
  * .renderedMarkdown code {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    color: #9012fe;
    font-family: monospace;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 7px;
  }

  * .markdown pre > code,
  * .renderedMarkdown pre > code {
    display: block;
  }

  /*# sourceMappingURL=swagger-ui.css.map*/
`;var Ye=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Be=(i,e,t,o)=>{for(var r=o>1?void 0:o?Ve(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&Ye(e,t,r),r};let ce=class extends g{render(){return U`
      <div class="information-container wrapper">
        <section class="block col-12">
          <div>
            <div class="info">
              <hgroup class="main">
                <h2 class="title">
                  NestJS example
                  <span>
                    <small>
                      <pre class="version"> 1.0 </pre>
                    </small>
                    <small class="version-stamp">
                      <pre class="version">OAS3</pre>
                    </small>
                  </span>
                </h2>
                <a
                  target="_blank"
                  href="swagger.json"
                  rel="noopener noreferrer"
                  class="link"
                >
                  <span class="url"> swagger.json</span>
                </a>
              </hgroup>
              <div class="description">
                <div class="renderedMarkdown">
                  <p>The NestJS API description</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `}static get styles(){return[H,C``]}};ce=Be([D("c-title")],ce);const ee=`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="svg-assets"
      >
        <defs>
          <symbol viewBox="0 0 20 20" id="unlocked">
            <path
              d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 20 20" id="locked">
            <path
              d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 20 20" id="close">
            <path
              d="M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 20 20" id="large-arrow">
            <path
              d="M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 20 20" id="large-arrow-down">
            <path
              d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 20 20" id="large-arrow-up">
            <path
              d="M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 24 24" id="jump-to">
            <path
              d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 24 24" id="expand">
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
          </symbol>
        </defs>
      </svg>
    `;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=i=>(...e)=>({_$litDirective$:i,values:e});class Je{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class J extends Je{constructor(e){if(super(e),this.it=m,e.type!==Qe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===y)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}J.directiveName="unsafeHTML",J.resultType=1;const te=We(J);var Fe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,G=(i,e,t,o)=>{for(var r=o>1?void 0:o?Xe(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&Fe(e,t,r),r};let z=class extends g{constructor(){super(...arguments),this.isAuthorized=!1,this.isModalOpen=!1,this.autoriceValue=""}handlerLogout(){this.autoriceValue="",this.isAuthorized=!1}getIcon(){return this.isAuthorized?"#locked":"#unlocked"}handlerModal(e){this.isModalOpen=e}handlerSubmit(e){e.preventDefault(),this.autoriceValue=this.input.value,e.target.reset(),this.isAuthorized=!0}render(){return U`
      <div>${te(ee)}</div>
      <div class="scheme-container">
        <section class="schemes wrapper block col-12">
          <div class="auth-wrapper">
            <button
              class="btn authorize unlocked"
              @click=${()=>this.handlerModal(!0)}
            >
              <span>Authorize</span>
              <svg width="20" height="20">
                <use href=${this.getIcon()} xlink:href=${this.getIcon()}></use>
              </svg>
            </button>
          </div>
        </section>

        <div class="dialog-ux" ?hidden=${!this.isModalOpen}>
          <div
            class="backdrop-ux"
            @click=${()=>this.handlerModal(!1)}
          ></div>
          <div class="modal-ux">
            <div class="modal-dialog-ux">
              <div class="modal-ux-inner">
                <div class="modal-ux-header">
                  <h3>Available authorizations</h3>
                  <button
                    type="button"
                    class="close-modal"
                    @click=${()=>this.handlerModal(!1)}
                  >
                    <svg width="20" height="20">
                      <use href="#close" xlink:href="#close"></use>
                    </svg>
                  </button>
                </div>

                <div class="modal-ux-content">
                  <div class="auth-container">
                    <form @submit=${this.handlerSubmit}>
                      <div>
                        <h4><code>bearer</code>&nbsp; (http, Bearer)</h4>
                        <h6>Authorized</h6>
                        <div class="wrapper"></div>
                        <div class="wrapper">
                          <label>Value:</label>
                          <code ?hidden=${!this.isAuthorized}> ****** </code>
                          <section ?hidden=${this.isAuthorized}>
                            <input type="text" />
                          </section>
                        </div>
                      </div>
                      <div class="auth-btn-wrapper">
                        <button
                          class="btn modal-btn auth authorize button"
                          ?hidden=${this.isAuthorized}
                        >
                          Authorize
                        </button>
                        <button
                          class="btn modal-btn auth button"
                          type="button"
                          ?hidden=${!this.isAuthorized}
                          @click=${this.handlerLogout}
                        >
                          Logout
                        </button>
                        <button
                          class="btn modal-btn auth btn-done button"
                          type="button"
                          @click=${()=>this.handlerModal(!1)}
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}static get styles(){return[H,C``]}};G([_({type:Boolean})],z.prototype,"isAuthorized",2);G([_({type:Boolean})],z.prototype,"isModalOpen",2);G([_({type:String})],z.prototype,"autoriceValue",2);G([Le("input")],z.prototype,"input",2);z=G([D("c-auth")],z);var qe=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Y=(i,e,t,o)=>{for(var r=o>1?void 0:o?Ke(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&qe(e,t,r),r};let R=class extends g{constructor(){super(...arguments),this.isCollapsed=!0}render(){return U`
      <span>
        <div>${te(ee)}</div>
        <div
          class=${`opblock opblock-${this.method.toLowerCase()}`}
          id="operations-default-AppController_sendMessage"
        >
          <div
            class="opblock-summary opblock-summary-${this.method.toLocaleLowerCase()}"
          >
            <button
              aria-label="${this.method.toLocaleLowerCase()} &ZeroWidthSpace;${this.path}"
              aria-expanded="false"
              class="opblock-summary-control"
              @click=${()=>this.isCollapsed=!this.isCollapsed}
            >
              <span class="opblock-summary-method">${this.method}</span>
              <span class="opblock-summary-path" data-path="${this.path}">
                <a class="nostyle" href="#/default/AppController_sendMessage">
                  <span> ${this.path} </span>
                </a>
              </span>
              <div class="opblock-summary-description"></div>
              <svg
                class="arrow"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
              >
                <use
                  href="#large-arrow-down"
                  xlink:href="#large-arrow-down"
                ></use>
              </svg>
            </button>
            <button
              class="authorization__btn locked"
              aria-label="authorization button locked"
            >
              <svg width="20" height="20">
                <use href="#locked" xlink:href="#locked"></use>
              </svg>
            </button>
          </div>

          <div class="no-margin" ?hidden=${this.isCollapsed}>
            <div class="opblock-body">
              <div class="opblock-section">
                <div class="opblock-section-header">
                  <div class="tab-header">
                    <div class="tab-item active">
                      <h4 class="opblock-title">
                        <span>Parameters</span>
                      </h4>
                    </div>
                  </div>
                  <div class="try-out">
                    <button class="btn try-out__btn">Try it out</button>
                  </div>
                </div>
                <div class="parameters-container">
                  <div class="opblock-description-wrapper">
                    <p>No parameters</p>
                  </div>
                </div>
                <div class="opblock-section opblock-section-request-body">
                  <div class="opblock-section-header">
                    <h4 class="opblock-title parameter__name required">
                      Request body
                    </h4>
                    <label>
                      <div class="content-type-wrapper body-param-content-type">
                        <select
                          aria-label="Request content type"
                          class="content-type"
                        >
                          <option value="application/json">
                            application/json
                          </option>
                        </select>
                      </div>
                    </label>
                  </div>
                  <div class="opblock-description-wrapper">
                    <div>
                      <div class="model-example">
                        <ul class="tab" role="tablist">
                          <li class="tabitem active" role="presentation">
                            <button
                              aria-controls="c4Sb80I="
                              aria-selected="true"
                              class="tablinks"
                              data-name="example"
                              id="ROKUAEU="
                              role="tab"
                            >
                              Example Value
                            </button>
                          </li>
                          <li class="tabitem" role="presentation">
                            <button
                              aria-controls="uZv2MpE="
                              aria-selected="false"
                              class="tablinks"
                              data-name="model"
                              id="FLFAm3s="
                              role="tab"
                            >
                              Schema
                            </button>
                          </li>
                        </ul>
                        <div
                          aria-hidden="false"
                          aria-labelledby="ROKUAEU="
                          data-name="examplePanel"
                          id="c4Sb80I="
                          role="tabpanel"
                          tabindex="0"
                        >
                          <div class="highlight-code">
                            <pre
                              class="body-param__example microlight"
                              style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: white;"
                            ></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="execute-wrapper"></div>
              <div class="responses-wrapper">
                <div class="opblock-section-header">
                  <h4>Responses</h4>
                </div>
                <div class="responses-inner">
                  <table
                    aria-live="polite"
                    class="responses-table"
                    id="post_api_responses"
                    role="region"
                  >
                    <thead>
                      <tr class="responses-header">
                        <td class="col_header response-col_status">Code</td>
                        <td class="col_header response-col_description">
                          Description
                        </td>
                        <td class="col col_header response-col_links">Links</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="response " data-code="200">
                        <td class="response-col_status">200</td>
                        <td class="response-col_description">
                          <div class="response-col_description__inner">
                            <!-- react-empty: 3581 -->
                          </div>
                          <section class="response-controls">
                            <div
                              class="response-control-media-type response-control-media-type--accept-controller"
                            >
                              <small class="response-control-media-type__title"
                                >Media type</small
                              >
                              <div class="content-type-wrapper ">
                                <select
                                  aria-label="Media Type"
                                  class="content-type"
                                >
                                  <option value="application/json">
                                    application/json
                                  </option>
                                </select>
                              </div>
                              <small
                                class="response-control-media-type__accept-message"
                                >Controls
                                <code>Accept</code>
                                header.</small
                              >
                            </div>
                          </section>
                          <div class="model-example">
                            <ul class="tab" role="tablist">
                              <li class="tabitem active" role="presentation">
                                <button
                                  aria-controls="lABe5us="
                                  aria-selected="true"
                                  class="tablinks"
                                  data-name="example"
                                  id="wXLbZqw="
                                  role="tab"
                                >
                                  Example Value
                                </button>
                              </li>
                              <li class="tabitem" role="presentation">
                                <button
                                  aria-controls="ArABzrc="
                                  aria-selected="false"
                                  class="tablinks"
                                  data-name="model"
                                  id="YXOWeH0="
                                  role="tab"
                                >
                                  Schema
                                </button>
                              </li>
                            </ul>
                            <div
                              aria-hidden="false"
                              aria-labelledby="wXLbZqw="
                              data-name="examplePanel"
                              id="lABe5us="
                              role="tabpanel"
                              tabindex="0"
                            >
                              <div>
                                <div class="highlight-code">
                                  <pre
                                    class="example microlight"
                                    style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: white;"
                                  ></pre>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="response-col_links">
                          <i>No links</i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    `}static get styles(){return[H,C``]}};Y([_({type:String})],R.prototype,"method",2);Y([_({type:String})],R.prototype,"path",2);Y([_({type:Boolean})],R.prototype,"isCollapsed",2);R=Y([D("c-endpoint")],R);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,rt=(i,e,t,o)=>{for(var r=o>1?void 0:o?tt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&et(e,t,r),r};let he=class extends g{render(){return U`
      <div>${te(ee)}</div>

      <section class="block col-12 block-desktop col-12-desktop">
        <h3
          class="opblock-tag no-desc"
          id="operations-tag-default"
          data-tag="default"
          data-is-open="true"
        >
          <a class="nostyle" href="#/default">
            <span>default</span>
          </a>
          <small> </small>
          <button
            aria-expanded="true"
            class="expand-operation"
            title="Collapse operation"
          >
            <svg
              class="arrow"
              width="20"
              height="20"
              aria-hidden="true"
              focusable="false"
            >
              <use href="#large-arrow-up" xlink:href="#large-arrow-up"></use>
            </svg>
          </button>
        </h3>

        <c-endpoint method="POST" path="/api"></c-endpoint>
      </section>
    `}static get styles(){return[H,C``]}};he=rt([D("c-endpoints-group")],he);var ot=Object.defineProperty,it=Object.getOwnPropertyDescriptor,nt=(i,e,t,o)=>{for(var r=o>1?void 0:o?it(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&ot(e,t,r),r};let ge=class extends g{render(){return U`
      <div>
        <c-title></c-title>
        <c-auth></c-auth>
        <c-endpoints-group></c-endpoints-group>
        <c-schema></c-schema>
      </div>
    `}static get styles(){return[H]}};ge=nt([D("swagger-alternative")],ge);
