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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/page/addNumber.js":
/*!*******************************!*\
  !*** ./src/page/addNumber.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_radcolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/radcolor */ \"./src/util/radcolor.js\");\n\r\n\r\nvar divContainer = document.getElementById(\"divContainer\");\r\nvar divCenter = document.getElementById(\"divCenter\");\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n, isPrime) {\r\n    var span = document.createElement(\"span\");\r\n    if (isPrime) {\r\n        var color = (0,_util_radcolor__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n        span.style.color = color;\r\n        createCenterPrimeNumber(n, color)\r\n    }\r\n    span.innerText = n\r\n    divContainer.appendChild(span);\r\n    createCenterNumber(n, isPrime)\r\n}\r\n\r\nfunction createCenterNumber(n, isPrime) {\r\n    divCenter.innerText = n;\r\n\r\n}\r\n\r\nfunction createCenterPrimeNumber(n, color) {\r\n    var div = document.createElement(\"div\");\r\n    div.className = \"center\";\r\n    div.style.color = color;\r\n    div.innerText = n;\r\n    document.body.appendChild(div);\r\n    getComputedStyle(divCenter).left\r\n    div.style.transform = `translate(${(0,_util_radcolor__WEBPACK_IMPORTED_MODULE_0__.getRandom)(150,-150)}px,${(0,_util_radcolor__WEBPACK_IMPORTED_MODULE_0__.getRandom)(150,-150)}px)`;\r\n    div.style.opacity = 0;\r\n}\n\n//# sourceURL=webpack://test/./src/page/addNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/number */ \"./src/util/number.js\");\n/* harmony import */ var _addNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNumber */ \"./src/page/addNumber.js\");\n\r\n\r\nvar n = new _util_number__WEBPACK_IMPORTED_MODULE_0__.default(100);\r\nn.onNumberCreated = function(n, isPrime) {\r\n    (0,_addNumber__WEBPACK_IMPORTED_MODULE_1__.default)(n, isPrime)\r\n}\r\n\r\nvar isStart = false;\r\n\r\nwindow.onclick = function() {\r\n    if (isStart) {\r\n        n.stop()\r\n        isStart = false;\r\n    } else {\r\n        isStart = true\r\n        n.start()\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/page/event.js?");

/***/ }),

/***/ "./src/util/isPrimes.js":
/*!******************************!*\
  !*** ./src/util/isPrimes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n) {\r\n    if (n < 2) {\r\n        return false;\r\n    }\r\n    for (let i = 2; i <= n - 1; i++) {\r\n        if (n % i === 0) {\r\n            return false;\r\n        }\r\n    }\r\n    return true\r\n}\n\n//# sourceURL=webpack://test/./src/util/isPrimes.js?");

/***/ }),

/***/ "./src/util/number.js":
/*!****************************!*\
  !*** ./src/util/number.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NumberTimer)\n/* harmony export */ });\n/* harmony import */ var _isPrimes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrimes */ \"./src/util/isPrimes.js\");\n\r\n\r\nclass NumberTimer {\r\n    constructor(duration = 500) {\r\n        this.duration = duration;\r\n        this.number = 1;\r\n        this.onNumberCreated = null;\r\n        this.timerId = null;\r\n    }\r\n    start() {\r\n        if (this.timerId) {\r\n            return\r\n        }\r\n        this.timerId = setInterval(() => {\r\n            this.onNumberCreated && this.onNumberCreated(this.number, (0,_isPrimes__WEBPACK_IMPORTED_MODULE_0__.default)(this.number));\r\n            this.number++;\r\n        }, this.duration)\r\n    }\r\n    stop() {\r\n        clearInterval(this.timerId);\r\n        this.timerId = null\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/util/number.js?");

/***/ }),

/***/ "./src/util/radcolor.js":
/*!******************************!*\
  !*** ./src/util/radcolor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar colors = [\"#24b57f\", \"#9824b5\", \"#b52467\", \"#b52424\", \"#34b524\", \"#8fcac9\", \"#988fca\"];\r\n\r\nfunction getRandom(min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min)\r\n}\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    var index = getRandom(0, colors.length);\r\n    return colors[index]\r\n}\n\n//# sourceURL=webpack://test/./src/util/radcolor.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;