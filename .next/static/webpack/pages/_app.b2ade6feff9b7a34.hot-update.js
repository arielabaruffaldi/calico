/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/lib/intl.js":
/*!*************************!*\
  !*** ./src/lib/intl.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createIntlInstance\": function() { return /* binding */ createIntlInstance; }\n/* harmony export */ });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n\nconst cache = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.createIntlCache)();\nfunction createIntlInstance(locale) {\n    return (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.createIntl)({\n        locale,\n        messages: __webpack_require__(\"./src/locales sync recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(locale, \".json\"))\n    }, cache);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2ludGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUQ7QUFFekQsTUFBTUUsUUFBUUQsMkRBQWVBO0FBRXRCLFNBQVNFLG1CQUFtQkMsTUFBTSxFQUFFO0lBQ3pDLE9BQU9KLHNEQUFVQSxDQUNmO1FBQ0VJO1FBQ0FDLFVBQVVDLHNFQUFRLEtBQXFCLE9BQVBGLFFBQU87SUFDekMsR0FDQUY7QUFFSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvaW50bC5qcz9iZDhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUludGwsIGNyZWF0ZUludGxDYWNoZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5jb25zdCBjYWNoZSA9IGNyZWF0ZUludGxDYWNoZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW50bEluc3RhbmNlKGxvY2FsZSkge1xuICByZXR1cm4gY3JlYXRlSW50bChcbiAgICB7XG4gICAgICBsb2NhbGUsXG4gICAgICBtZXNzYWdlczogcmVxdWlyZShgLi4vbG9jYWxlcy8ke2xvY2FsZX0uanNvbmApLCBcbiAgICB9LFxuICAgIGNhY2hlXG4gICk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUludGwiLCJjcmVhdGVJbnRsQ2FjaGUiLCJjYWNoZSIsImNyZWF0ZUludGxJbnN0YW5jZSIsImxvY2FsZSIsIm1lc3NhZ2VzIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/intl.js\n"));

/***/ }),

/***/ "./src/locales sync recursive ^\\.\\/.*\\.json$":
/*!******************************************!*\
  !*** ./src/locales/ sync ^\.\/.*\.json$ ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./en.json": "./src/locales/en.json",
	"./es.json": "./src/locales/es.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/locales sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./src/locales/en.json":
/*!*****************************!*\
  !*** ./src/locales/en.json ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = JSON.parse('{"page.home.head.title":"Hello World"}');

/***/ }),

/***/ "./src/locales/es.json":
/*!*****************************!*\
  !*** ./src/locales/es.json ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = JSON.parse('{"page.home.head.title":"Hola mundo"}');

/***/ })

});