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
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ifDirective = function (element, value) {\n    if (!value) {\n        // Hide the element (set display to 'none')\n        element.style.display = 'none';\n    }\n    else {\n        // Show the element\n        element.style.display = '';\n    }\n};\nexports[\"default\"] = ifDirective;\n\n\n//# sourceURL=webpack://staticpro.js/./src/directives/if.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// src/index.ts\nvar staticpro_1 = __webpack_require__(/*! ./staticpro */ \"./src/staticpro.ts\");\n// You might want to do something with staticpro here or just leave it as is\nexports[\"default\"] = staticpro_1.default;\n\n\n//# sourceURL=webpack://staticpro.js/./src/index.ts?");

/***/ }),

/***/ "./src/staticpro.ts":
/*!**************************!*\
  !*** ./src/staticpro.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// src/staticpro.ts\nvar if_1 = __webpack_require__(/*! ./directives/if */ \"./src/directives/if.ts\");\nvar staticpro = {\n    originalDOM: document.cloneNode(true),\n    directive: function (directives) {\n        document.addEventListener('DOMContentLoaded', function () {\n            // Check if the 'Static' attribute is present on the body tag\n            if (document.body.hasAttribute('Static')) {\n                staticpro.originalDOM = document.cloneNode(true);\n                var _loop_1 = function (key) {\n                    if (directives.hasOwnProperty(key)) {\n                        var selector_1 = key;\n                        var implementation_1 = directives[key];\n                        var elements = staticpro.queryOriginalDOM(\"[\".concat(selector_1, \"]\"));\n                        elements.forEach(function (element) {\n                            var value = element.getAttribute(selector_1);\n                            // Explicitly convert the attribute value to a boolean\n                            var booleanValue = value === 'true';\n                            implementation_1(element, booleanValue);\n                        });\n                    }\n                };\n                for (var key in directives) {\n                    _loop_1(key);\n                }\n                // Update the actual DOM with the modified staticpro.originalDOM\n                document.documentElement.replaceWith(staticpro.originalDOM.documentElement.cloneNode(true));\n                // Optionally, you can call staticpro.updateOriginalDOM() if you still want to keep a clone in memory\n                // staticpro.updateOriginalDOM();\n            }\n        });\n    },\n    updateOriginalDOM: function () {\n        // Update the original DOM to reflect the changes\n        staticpro.originalDOM = document.cloneNode(true);\n    },\n    // Helper method to query elements in the original DOM using the attribute value\n    queryOriginalDOM: function (selector) {\n        return staticpro.originalDOM.querySelectorAll(selector);\n    },\n};\n// Include the \"if\" directive as part of the acceptable directives\nstaticpro.directive({\n    'If': if_1.default,\n});\nexports[\"default\"] = staticpro;\n\n\n//# sourceURL=webpack://staticpro.js/./src/staticpro.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;