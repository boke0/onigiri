/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/onigiri.js":
/*!*************************!*\
  !*** ./dist/onigiri.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports */
/*! CommonJS bailout: this is used directly at 1:195-199 */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ (function(module) {

eval("!function(e,t){ true?module.exports=t():0}(this,(function(){return(()=>{\"use strict\";var e={607:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>l,Template:()=>s,html:()=>o});class d extends HTMLElement{constructor(){super(),this.hasAttribute(\"data-id\")&&(this.dummyId=Number(this.dataset.id))}}customElements.define(\"dummy-elem\",d);class l extends HTMLElement{constructor(){super(),this.state=this.init();const{temp:e,args:t}=this.render(this.state);this.template=e(),this.attachShadow({mode:\"open\"}),this.shadowRoot.appendChild(this.template.fragment),this._update(this.state)}dispatch(e,...t){this.state=this[e](this.state,t),this._update(this.state)}_update(e){const{args:t}=this.render(e);this.template.update(...t)}}class s{constructor(e){this.fullstring=e.join(\"\");let t=\"\";this.placeholder=[];for(let n=0;n<e.length;n++){const d=e[n];t+=d;const l=d.trim();if(\"=\"==l[l.length-1]||\"=\"==l[l.length-2]){let e=\"\";if(\"'\"==l[l.length-1]||'\"'==l[l.length-1]||\"`\"==l[l.length-1]){t+=l[l.length];for(let t=l.length-3;t>=0&&\" \"!=l[t];t--)e=l[t]+e}else{t+='\"\"';for(let t=l.length-2;t>=0&&\" \"!=l[t];t--)e=l[t]+e}t+=\" data-dummy-attr\"+n+\"=\"+e,this.placeholder.push({kind:\"attr\",element:null,attr:e})}else n!=e.length-1&&(t+='<dummy-elem data-id=\"'+n+'\"></dummy-elem>',this.placeholder.push({kind:\"text\",node:null}))}let n=document.createElement(\"template\");n.innerHTML=t;for(let t=0;t<e.length-1;t++){const e=this.placeholder[t];switch(e.kind){case\"attr\":const d=n.content.querySelector(\"[data-dummy-attr\"+t+\"]\");e.element=d,d.removeAttribute(\"data-dummy-attr\"+t);break;case\"text\":const l=n.content.querySelector('[data-id=\"'+t+'\"]'),s=document.createTextNode(\"hhhhh\");l.parentNode.replaceChild(s,l),e.node=s}}this.fragment=n.content}update(...e){const t=[];for(let d=0;d<e.length;d++)if(\"object\"==typeof(n=e[d])&&\"function\"==typeof n.temp&&\"string\"==typeof n.fullstring){const n={kind:\"temp\",value:e[d]};t.push(n)}else t.push({kind:typeof e[d],value:e[d]});var n;for(let e=0;e<this.placeholder.length;e++){const n=this.placeholder[e],d=t[e];if(\"attr\"==n.kind){const e=n.element.getAttributeNode(n.attr);switch(n.attr[0]){case\"@\":n.element[\"on\"+e.name.slice(1)]=d.value;break;case\".\":n.element[e.name.slice(1)]=d.value;break;case\"?\":let t=e.name.slice(1);d.value?n.element.setAttribute(t,\"\"):n.element.hasAttribute(t)&&n.element.removeAttribute(t);break;default:e.value=String(d.value)}}else if(\"temp\"==d.kind&&\"temp\"==n.kind){let t=d.value;if(t.fullstring==n.node.fullstring)n.node.temp.update(t.args);else{let d=t.temp();d.update(t.args);let l=document.createRange();l.setStart(n.node.start.parentNode,[].slice.call(n.node.start.parentNode.childNodes).indexOf(n.node.start)),l.setEnd(n.node.end.parentNode,[].slice.call(n.node.end.parentNode.childNodes).indexOf(n.node.end)),l.deleteContents(),l.insertNode(d.fragment);let s=l.startContainer.childNodes.item(l.startOffset),o=l.endContainer.childNodes.item(l.endOffset);this.placeholder[e]={kind:\"temp\",node:{start:s,end:o,temp:d,fullstring:t.fullstring}}}}else if(\"temp\"==d.kind&&\"temp\"!=n.kind){let t=d.value,l=t.temp();l.update(t.args);let s=document.createRange();s.selectNode(n.node),s.deleteContents(),s.insertNode(l.fragment);let o=s.startContainer.childNodes.item(s.startOffset),r=s.endContainer.childNodes.item(s.endOffset);this.placeholder[e]={kind:\"temp\",node:{start:o,end:r,temp:l,fullstring:t.fullstring}}}else if(\"temp\"!=d.kind&&\"temp\"==n.kind){let t=document.createTextNode(String(d.value)),l=document.createRange();l.setStart(n.node.start.parentNode,[].slice.call(n.node.start.childNodes).indexOf(n.node.start)),l.setEnd(n.node.end.parentNode,[].slice.call(n.node.end.childNodes).indexOf(n.node.end)),l.deleteContents(),l.insertNode(t),this.placeholder[e]={kind:\"text\",node:t}}else if(\"text\"==n.kind){let t=document.createTextNode(String(d.value));n.node.parentNode.replaceChild(t,n.node),this.placeholder[e]={kind:\"text\",node:t}}}}}function o(e,...t){return{fullstring:e.join(\"\"),temp:()=>new s(e),args:t}}}},t={};function n(d){if(t[d])return t[d].exports;var l=t[d]={exports:{}};return e[d](l,l.exports,n),l.exports}return n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n(607)})()}));\n\n//# sourceURL=webpack://webcomponent/./dist/onigiri.js?");

/***/ }),

/***/ "./examples/src/main.js":
/*!******************************!*\
  !*** ./examples/src/main.js ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_onigiri_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/onigiri.js */ \"./dist/onigiri.js\");\n/* harmony import */ var _dist_onigiri_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_onigiri_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass TestComponent extends _dist_onigiri_js__WEBPACK_IMPORTED_MODULE_0__.Component {\n  init() {\n    return {\n      attr: 'hello',\n      content: 'control'\n    }\n  }\n  update(state) {\n    return {\n      attr: state.attr + 'e',\n      content: state.content + 'c'\n    }\n  }\n  render(state) {\n    return _dist_onigiri_js__WEBPACK_IMPORTED_MODULE_0__.html`\n      <div id=${state.attr} @click=${e => this.dispatch('update')}>\n        ${state.content}\n      </div>\n    `;\n  }\n}\n\ncustomElements.define('test-component', TestComponent);\n\n\n//# sourceURL=webpack://webcomponent/./examples/src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./examples/src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;