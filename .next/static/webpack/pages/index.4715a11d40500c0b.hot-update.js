"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ICOSale.jsx":
/*!********************************!*\
  !*** ./components/ICOSale.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ICOSale = (param)=>{\n    let { tokenSale, nativeToken, buyToken } = param;\n    _s();\n    const [tokenQuantity, setTokenQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const percentage = \"\".concat((tokenSale === null || tokenSale === void 0 ? void 0 : tokenSale.tokenSold) / (tokenSale === null || tokenSale === void 0 ? void 0 : tokenSale.tokenSaleBalance)) * 100;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"tokenBuy\",\n        className: \"medium-padding120 responsive-align-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            id: \"buyWoox\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ermac\\\\OneDrive\\\\Desktop\\\\ICO token\\\\Create-Liquidity-Marketplace\\\\components\\\\ICOSale.jsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ermac\\\\OneDrive\\\\Desktop\\\\ICO token\\\\Create-Liquidity-Marketplace\\\\components\\\\ICOSale.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ermac\\\\OneDrive\\\\Desktop\\\\ICO token\\\\Create-Liquidity-Marketplace\\\\components\\\\ICOSale.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ICOSale, \"Tn0f+Q8451sgFPExVyWbLPnw9vo=\");\n_c = ICOSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ICOSale);\nvar _c;\n$RefreshReg$(_c, \"ICOSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lDT1NhbGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ1A7QUFDOUIsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLFNBQVMsRUFDM0JDLFdBQVcsRUFDWEMsUUFBUSxFQUFDOztJQUNQLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQTtJQUVsRCxNQUFNUSxhQUFhLEdBQXFELE9BQWxETCxDQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVlNLFNBQVMsS0FBQ04sc0JBQUFBLGdDQUFBQSxVQUFXTyxnQkFBZ0IsS0FBSTtJQUMzRSxxQkFDRSw4REFBQ0M7UUFBUUMsSUFBRztRQUFXQyxXQUFVO2tCQUMvQiw0RUFBQ0M7WUFBSUQsV0FBVTtZQUFZRCxJQUFHO3NCQUM1Qiw0RUFBQ0U7Z0JBQUlELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0FiTVg7S0FBQUE7QUFlTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lDT1NhbGUuanN4P2Y1ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXR9IGZyb20gXCIuL2luZGV4XCI7XHJcbmNvbnN0IElDT1NhbGUgPSAoe3Rva2VuU2FsZSxcclxubmF0aXZlVG9rZW4sXHJcbmJ1eVRva2VufSkgPT4ge1xyXG4gIGNvbnN0IFt0b2tlblF1YW50aXR5LCBzZXRUb2tlblF1YW50aXR5XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IHBlcmNlbnRhZ2UgPSBgJHt0b2tlblNhbGUgPy50b2tlblNvbGQvdG9rZW5TYWxlPy50b2tlblNhbGVCYWxhbmNlfWAgKjEwMDtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ0b2tlbkJ1eVwiIGNsYXNzTmFtZT1cIm1lZGl1bS1wYWRkaW5nMTIwIHJlc3BvbnNpdmUtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJidXlXb294XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElDT1NhbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXQiLCJJQ09TYWxlIiwidG9rZW5TYWxlIiwibmF0aXZlVG9rZW4iLCJidXlUb2tlbiIsInRva2VuUXVhbnRpdHkiLCJzZXRUb2tlblF1YW50aXR5IiwicGVyY2VudGFnZSIsInRva2VuU29sZCIsInRva2VuU2FsZUJhbGFuY2UiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ICOSale.jsx\n"));

/***/ })

});