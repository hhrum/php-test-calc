/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./script.js":
/*!*******************!*
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./css/style.css\");\n\r\n\r\n// Константные значения\r\nconst depositeAmountRange = [1000, 3000000];\r\nconst depositReplenishmentAmounttRange = [1000, 3000000];\r\n\r\nvar calculatorForm = $(\"#calculatorForm\");\r\ncalculatorForm.find(\"#datepicker\").datepicker();\r\n\r\n$(function () {\r\n    makeSliderForNumericInput(\"#depositeAmount\", depositeAmountRange);\r\n    makeSliderForNumericInput(\"#depositReplenishmentAmount\", depositReplenishmentAmounttRange);\r\n\r\n    calculatorForm.submit(function (e) {\r\n        e.preventDefault();\r\n\r\n        if (!formIsNotEmpty(calculatorForm)) {\r\n            alert(\"Не все поля заполнены!\");\r\n            return\r\n        }\r\n\r\n        var url = calculatorForm.attr('action');\r\n\r\n        $.ajax({\r\n            type: \"POST\",\r\n            url: url,\r\n            data: calculatorForm.serialize(),\r\n            success: function (data) {\r\n                alert(data); // show response from the php script.\r\n            }\r\n        });\r\n\r\n    });\r\n});\r\n\r\nfunction makeSliderForNumericInput(inputId, range) {\r\n    var depositeAmountInput = $(inputId);\r\n    depositeAmountInput.attr('min', range[0]);\r\n    depositeAmountInput.val(range[0]);\r\n\r\n    var slider = $(\"<div class='calculator__slider'></div>\").insertAfter(depositeAmountInput).slider({\r\n        min: range[0],\r\n        max: range[1],\r\n        range: \"min\",\r\n        value: depositeAmountInput.val(),\r\n        slide: function (event, ui) {\r\n            depositeAmountInput.val(ui.value);\r\n        }\r\n    });\r\n    depositeAmountInput.on(\"change\", function () {\r\n        slider.slider(\"value\", $(this).val());\r\n    });\r\n}\r\n\r\nfunction formIsNotEmpty(form) {\r\n    var inputs = form.serializeArray();\r\n    for (const key in inputs) {\r\n        if (inputs[key].value === \"\") return false;\r\n    }\r\n\r\n    return true;\r\n}\n\n//# sourceURL=webpack:///./script.js?");

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
/******/ 	__webpack_require__("./script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;