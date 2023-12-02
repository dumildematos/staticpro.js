/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/directives/if.ts":
/*!******************************!*\
  !*** ./src/directives/if.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.IfDirective = void 0;\n// src/directives/if.ts\nvar types_1 = __webpack_require__(/*! ../types */ \"./src/types/index.ts\");\nvar IfDirective = /** @class */ (function (_super) {\n    __extends(IfDirective, _super);\n    function IfDirective() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    IfDirective.prototype.execute = function (element, value) {\n        if (!value) {\n            element.style.display = 'none';\n        }\n        else {\n            element.style.display = '';\n        }\n    };\n    return IfDirective;\n}(types_1.DirectiveImplementation));\nexports.IfDirective = IfDirective;\nexports[\"default\"] = IfDirective;\n\n\n//# sourceURL=webpack://staticpro.js/./src/directives/if.ts?");

/***/ }),

/***/ "./src/directives/render.ts":
/*!**********************************!*\
  !*** ./src/directives/render.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RenderDirective = void 0;\n// src/directives/render.ts\nvar types_1 = __webpack_require__(/*! ../types */ \"./src/types/index.ts\");\nvar RenderDirective = /** @class */ (function (_super) {\n    __extends(RenderDirective, _super);\n    function RenderDirective() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    RenderDirective.prototype.execute = function (element, value) {\n        console.log(value);\n        element.innerHTML = value;\n    };\n    return RenderDirective;\n}(types_1.DirectiveImplementation));\nexports.RenderDirective = RenderDirective;\nexports[\"default\"] = RenderDirective;\n\n\n//# sourceURL=webpack://staticpro.js/./src/directives/render.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// src/index.ts\nvar staticpro_1 = __importDefault(__webpack_require__(/*! ./staticpro */ \"./src/staticpro.ts\"));\n// You might want to do something with staticpro here or just leave it as is\nexports[\"default\"] = staticpro_1.default;\n\n\n//# sourceURL=webpack://staticpro.js/./src/index.ts?");

/***/ }),

/***/ "./src/staticpro.ts":
/*!**************************!*\
  !*** ./src/staticpro.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// src/staticpro.ts\nvar if_1 = __webpack_require__(/*! ./directives/if */ \"./src/directives/if.ts\");\nvar render_1 = __webpack_require__(/*! ./directives/render */ \"./src/directives/render.ts\");\nvar staticpro = {\n    originalDOM: document.cloneNode(true),\n    directive: function (directives) {\n        document.addEventListener('DOMContentLoaded', function () {\n            // Check if the 'Static' attribute is present on the body tag\n            if (document.body.hasAttribute('Static')) {\n                staticpro.originalDOM = document.cloneNode(true);\n                var _loop_1 = function (key) {\n                    if (directives.hasOwnProperty(key)) {\n                        var selector_1 = key;\n                        var DirectiveClass = directives[key];\n                        var implementation_1 = new DirectiveClass();\n                        var elements = staticpro.queryOriginalDOM(\"[\".concat(selector_1, \"]\"));\n                        elements.forEach(function (element) {\n                            var value = element.getAttribute(selector_1);\n                            // Explicitly convert the attribute value to a boolean\n                            var booleanValue = value === 'true';\n                            implementation_1.execute(element, booleanValue);\n                        });\n                    }\n                };\n                for (var key in directives) {\n                    _loop_1(key);\n                }\n                // Update the actual DOM with the modified staticpro.originalDOM\n                document.documentElement.replaceWith(staticpro.originalDOM.documentElement.cloneNode(true));\n            }\n        });\n    },\n    updateOriginalDOM: function () {\n        // Update the original DOM to reflect the changes\n        staticpro.originalDOM = document.cloneNode(true);\n    },\n    // Helper method to query elements in the original DOM using the attribute value\n    queryOriginalDOM: function (selector) {\n        return staticpro.originalDOM.querySelectorAll(selector);\n    },\n    app: function (propFn) {\n        document.addEventListener('DOMContentLoaded', function () {\n            if (document.body.hasAttribute('Static')) {\n                var callbackVariables_1 = {};\n                // Override the 'window' object temporarily to capture variable declarations\n                var originalWindow = window;\n                var temporaryWindow = Object.create(originalWindow, {\n                    staticproVariables: { value: callbackVariables_1, writable: true },\n                });\n                // Execute the provided callback within the temporary window context\n                propFn(callbackVariables_1);\n                // Access properties of the $var declared inside the .app() callback\n                var elements = staticpro.originalDOM.body.querySelectorAll('*:not(script):not(style)'); // Exclude script and style elements\n                var regex_1 = /\\{(.+?)\\}/;\n                elements.forEach(function (element) {\n                    // Check if innerText matches the format { some }\n                    var match = regex_1.exec(element.innerText);\n                    if (match) {\n                        // Extract the content inside the curly braces\n                        var contentInsideBraces = match[1].trim();\n                        var variableValue_1 = resolveVariable(contentInsideBraces, callbackVariables_1);\n                        element.innerHTML = element.innerText.replace(/{([^}]+)}/g, function (_, contentInsideBraces) {\n                            return variableValue_1;\n                        });\n                        console.log(element);\n                    }\n                });\n                // Restore the original 'window' object\n                window.staticproVariables = window.staticproVariables || {};\n                Object.assign(window.staticproVariables, callbackVariables_1);\n                // Update the actual DOM with the modified staticpro.originalDOM\n                document.documentElement.replaceWith(staticpro.originalDOM.documentElement.cloneNode(true));\n            }\n        });\n    },\n};\n// Include the \"If\" and \"Render\" directives as part of the acceptable directives\nstaticpro.directive({\n    'If': if_1.IfDirective,\n    'Render': render_1.RenderDirective,\n});\n// Assign the 'staticpro' object to the global window object\nwindow.staticpro = staticpro;\nexports[\"default\"] = staticpro;\n// Function to resolve variables without using eval\nfunction resolveVariable(variableName, variables) {\n    var parts = variableName.split('.');\n    var value = variables;\n    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {\n        var part = parts_1[_i];\n        if (value && part in value) {\n            value = value[part];\n        }\n        else {\n            return undefined;\n        }\n    }\n    return value;\n}\n\n\n//# sourceURL=webpack://staticpro.js/./src/staticpro.ts?");

/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./types */ \"./src/types/types.ts\"), exports);\n\n\n//# sourceURL=webpack://staticpro.js/./src/types/index.ts?");

/***/ }),

/***/ "./src/types/types.ts":
/*!****************************!*\
  !*** ./src/types/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DirectiveImplementation = void 0;\n// src/types.ts\nvar DirectiveImplementation = /** @class */ (function () {\n    function DirectiveImplementation() {\n    }\n    return DirectiveImplementation;\n}());\nexports.DirectiveImplementation = DirectiveImplementation;\n\n\n//# sourceURL=webpack://staticpro.js/./src/types/types.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;