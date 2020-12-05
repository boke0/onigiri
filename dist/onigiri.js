/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Onigiri"] = factory();
	else
		root["Onigiri"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! export Component [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export Template [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export html [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => /* binding */ Component,\n/* harmony export */   \"Template\": () => /* binding */ Template,\n/* harmony export */   \"html\": () => /* binding */ html\n/* harmony export */ });\nclass DummyElement extends HTMLElement {\n    constructor() {\n        super();\n        if (this.hasAttribute('data-id')) {\n            this.dummyId = Number(this.dataset.id);\n        }\n    }\n}\ncustomElements.define('dummy-elem', DummyElement);\nclass Component extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        //@ts-ignore\n        this.shadowRoot.adoptedStyleSheets = this.styles;\n    }\n    get styles() {\n        return [];\n    }\n    proxy() {\n        return new Proxy(this, {\n            set(target, prop, value) {\n                if (prop in target) {\n                    target[prop] = value;\n                    return true;\n                }\n                else if (target.state.hasOwnProperty(prop)) {\n                    target.state[prop] = value;\n                    target._update(target.state);\n                    return true;\n                }\n                return false;\n            }\n        });\n    }\n    connectedCallback() {\n        this.state = this.init();\n        try {\n            const { temp, args } = this.render(this.state);\n            this.template = temp();\n        }\n        catch (e) {\n            console.error('Component.render() must return result of html()');\n        }\n        this.shadowRoot.appendChild(this.template.fragment);\n        this._update(this.state);\n    }\n    dispatch(action, ...args) {\n        this.state = this[action](this.state, args);\n        this._update(this.state);\n    }\n    init(...arg) {\n        return {};\n    }\n    ;\n    _update(state) {\n        const { args } = this.render(state);\n        this.template.update(...args);\n    }\n}\nfunction isComponent(value) {\n    return typeof value.proxy === 'function';\n}\nfunction isTemplateArgSet(v) {\n    return typeof v === 'object'\n        && typeof v.temp === 'function'\n        && typeof v.fullstring === 'string';\n}\nfunction isTemplateArgSetArray(v) {\n    return Array.isArray(v)\n        && v.some(v_ => isTemplateArgSet(v_));\n}\nclass Template {\n    constructor(strings) {\n        this.fullstring = strings.join('');\n        let html = '';\n        this.placeholder = [];\n        for (let i = 0; i < strings.length; i++) {\n            const s = strings[i];\n            html += s;\n            const s_ = s.trim();\n            if (s_[s_.length - 1] == '=' || s_[s_.length - 2] == '=') {\n                let attr = '';\n                if (s_[s_.length - 1] == '\\'' || s_[s_.length - 1] == '\\\"' || s_[s_.length - 1] == '\\`') {\n                    html += s_[s_.length];\n                    for (let j = s_.length - 3; j >= 0; j--) {\n                        if (s_[j] == ' ')\n                            break;\n                        attr = s_[j] + attr;\n                    }\n                }\n                else {\n                    html += '\\\"\\\"';\n                    for (let j = s_.length - 2; j >= 0; j--) {\n                        if (s_[j] == ' ')\n                            break;\n                        attr = s_[j] + attr;\n                    }\n                }\n                html += (' data-dummy-attr' + i + '=' + attr);\n                this.placeholder.push({\n                    kind: 'attr',\n                    element: null,\n                    attr: attr\n                });\n            }\n            else if (i != strings.length - 1) {\n                html += ('<dummy-elem data-id=\"' + i + '\"></dummy-elem>');\n                this.placeholder.push({\n                    kind: 'text',\n                    node: null,\n                });\n            }\n        }\n        let tmp = document.createElement('template');\n        tmp.innerHTML = html;\n        for (let i = 0; i < strings.length - 1; i++) {\n            const p = this.placeholder[i];\n            switch (p.kind) {\n                case \"attr\":\n                    const dummy_elem_attr = tmp.content.querySelector('[data-dummy-attr' + i + ']');\n                    p.element = dummy_elem_attr;\n                    dummy_elem_attr.removeAttribute('data-dummy-attr' + i);\n                    break;\n                case \"text\":\n                    const dummy_elem = tmp.content.querySelector('[data-id=\"' + i + '\"]');\n                    const t = document.createTextNode('');\n                    dummy_elem.parentNode.replaceChild(t, dummy_elem);\n                    p.node = t;\n                    break;\n            }\n        }\n        this.fragment = tmp.content;\n    }\n    update(...values) {\n        const values_ = [];\n        for (let i = 0; i < values.length; i++) {\n            if (isTemplateArgSetArray(values[i])) {\n                const temp = {\n                    kind: 'tempArr',\n                    value: values[i]\n                };\n                values_.push(temp);\n            }\n            else if (isTemplateArgSet(values[i])) {\n                const temp = {\n                    kind: 'temp',\n                    value: values[i]\n                };\n                values_.push(temp);\n            }\n            else {\n                values_.push({\n                    kind: typeof values[i],\n                    value: values[i]\n                });\n            }\n        }\n        for (let i = 0; i < this.placeholder.length; i++) {\n            const p = this.placeholder[i];\n            const v = values_[i];\n            if (p.kind == \"attr\") {\n                const a = p.element.getAttributeNode(p.attr);\n                switch (p.attr[0]) {\n                    case \"@\":\n                        p.element['on' + a.name.slice(1)] = v.value;\n                        break;\n                    case \".\":\n                        p.element[a.name.slice(1)] = v.value;\n                        break;\n                    case \"?\":\n                        let attr = a.name.slice(1);\n                        if (v.value) {\n                            p.element.setAttribute(attr, '');\n                        }\n                        else if (p.element.hasAttribute(attr)) {\n                            p.element.removeAttribute(attr);\n                        }\n                        break;\n                    default:\n                        a.value = String(v.value);\n                        break;\n                }\n            }\n            else {\n                if (v.kind == 'temp' && p.kind == 'temp') {\n                    let v_ = v.value;\n                    if (v_.fullstring == p.node.fullstring) {\n                        p.node.temp.update(v_.args);\n                    }\n                    else {\n                        let t = v_.temp();\n                        t.update(v_.args);\n                        let range = document.createRange();\n                        range.setStart(p.node.start.parentNode, [].slice.call(p.node.start.parentNode.childNodes).indexOf(p.node.start));\n                        range.setEnd(p.node.end.parentNode, [].slice.call(p.node.end.parentNode.childNodes).indexOf(p.node.end));\n                        range.deleteContents();\n                        range.insertNode(t.fragment);\n                        let start = range.startContainer.childNodes.item(range.startOffset);\n                        let end = range.endContainer.childNodes.item(range.endOffset);\n                        this.placeholder[i] = {\n                            kind: 'temp',\n                            node: {\n                                start: start,\n                                end: end,\n                                temp: t,\n                                fullstring: v_.fullstring\n                            },\n                        };\n                    }\n                }\n                else if (v.kind == 'temp' && p.kind != 'temp') {\n                    let v_ = v.value;\n                    let t = v_.temp();\n                    t.update(v_.args);\n                    let range = document.createRange();\n                    range.selectNode(p.node);\n                    range.deleteContents();\n                    range.insertNode(t.fragment);\n                    let start = range.startContainer.childNodes.item(range.startOffset);\n                    let end = range.endContainer.childNodes.item(range.endOffset);\n                    this.placeholder[i] = {\n                        kind: 'temp',\n                        node: {\n                            start: start,\n                            end: end,\n                            temp: t,\n                            fullstring: v_.fullstring\n                        }\n                    };\n                }\n                else if (v.kind != 'temp' && p.kind == 'temp') {\n                    let t = document.createTextNode(String(v.value));\n                    let range = document.createRange();\n                    range.setStart(p.node.start.parentNode, [].slice.call(p.node.start.childNodes).indexOf(p.node.start));\n                    range.setEnd(p.node.end.parentNode, [].slice.call(p.node.end.childNodes).indexOf(p.node.end));\n                    range.deleteContents();\n                    range.insertNode(t);\n                    this.placeholder[i] = {\n                        kind: 'text',\n                        node: t,\n                    };\n                }\n                else if (p.kind == 'text') {\n                    let t = document.createTextNode(String(v.value));\n                    p.node.parentNode.replaceChild(t, p.node);\n                    this.placeholder[i] = {\n                        kind: 'text',\n                        node: t,\n                    };\n                }\n            }\n        }\n    }\n}\nfunction html(strings, ...values) {\n    return {\n        fullstring: strings.join(''),\n        temp: () => new Template(strings),\n        args: values\n    };\n}\n\n\n//# sourceURL=webpack://Onigiri/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});