"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/constants.js":
/*!******************************!*\
  !*** ./context/constants.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONNECTING_CONTRACT: function() { return /* binding */ CONNECTING_CONTRACT; },\n/* harmony export */   FACTORY_ABI: function() { return /* binding */ FACTORY_ABI; },\n/* harmony export */   FACTORY_ADDRESS: function() { return /* binding */ FACTORY_ADDRESS; },\n/* harmony export */   ICOWoox_ABI: function() { return /* binding */ ICOWoox_ABI; },\n/* harmony export */   ICOWoox_ADDRESS: function() { return /* binding */ ICOWoox_ADDRESS; },\n/* harmony export */   Liqudity_ADDRESS: function() { return /* binding */ Liqudity_ADDRESS; },\n/* harmony export */   Liqudity_abi: function() { return /* binding */ Liqudity_abi; },\n/* harmony export */   Woox_ABI: function() { return /* binding */ Woox_ABI; },\n/* harmony export */   Woox_ADDRESS: function() { return /* binding */ Woox_ADDRESS; },\n/* harmony export */   getBalance: function() { return /* binding */ getBalance; },\n/* harmony export */   internalAddLiquidity: function() { return /* binding */ internalAddLiquidity; },\n/* harmony export */   internalICOWooxContract: function() { return /* binding */ internalICOWooxContract; },\n/* harmony export */   internalWooxContract: function() { return /* binding */ internalWooxContract; },\n/* harmony export */   positionManagerAddress: function() { return /* binding */ positionManagerAddress; },\n/* harmony export */   web3Provider: function() { return /* binding */ web3Provider; }\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factoryAbi_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factoryAbi.json */ \"./context/factoryAbi.json\");\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abi.json */ \"./context/abi.json\");\n/* harmony import */ var _Woox_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Woox.json */ \"./context/Woox.json\");\n/* harmony import */ var _ICOWoox_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ICOWoox.json */ \"./context/ICOWoox.json\");\n/* harmony import */ var _Liqudity_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Liqudity.json */ \"./context/Liqudity.json\");\n// Woox : 0x2578C53c8ab93aAbcdf9B74831aDC1628bbDA037\n// ICOWoox : 0xA2cc0A4DECbd69fc72fdD1F44F0dFb29C36AAa2D\n// Liquidity : 0x1DBcF820Fe8F6c74aD413e7837dBf459bB9e0CDd\n\n\n//internal import \n\n\n\n\n\n//token\nconst Woox_ADDRESS = \"0x12dE044\";\nconst Woox_ABI = _Woox_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n//token sale\nconst ICOWoox_ADDRESS = \"0x3877900693bB409B36C8B4c66E770ba59C78BC33\";\nconst ICOWoox_ABI = _ICOWoox_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n//liquidity\nconst Liqudity_ADDRESS = \"0x1DBcF820Fe8F6c74aD413e7837dBf459bB9e0CDd\";\nconst Liqudity_abi = _Liqudity_json__WEBPACK_IMPORTED_MODULE_5__.abi;\nconst FACTORY_ABI = _factoryAbi_json__WEBPACK_IMPORTED_MODULE_1__;\nconst FACTORY_ADDRESS = \"0x1F98431c8aD98523631AE4a59f267346ea31F984\";\nconst positionManagerAddress = \"0xC36442b4a4522E871399CD717aBDD847Ab11FE88\";\nconst fetchContract = (signer, ABI, ADDRESS)=>new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(ADDRESS, ABI, signer);\nconst web3Provider = async ()=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        return provider;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst CONNECTING_CONTRACT = async (ADDRESS)=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const network = await provider.getNetwork();\n        const signer = provider.getSigner();\n        const contract = fetchContract(signer, _abi_json__WEBPACK_IMPORTED_MODULE_2__, ADDRESS);\n        //USER ADDRESS\n        const userAddress = signer.getAddress();\n        const balance = await contract.balanceOf(userAddress);\n        const name = await contract.name();\n        const symbol = await contract.symbol();\n        const supply = await contract.totalSupply();\n        const decimals = await contract.decimals();\n        const address = await contract.address;\n        const token = {\n            address: address,\n            name: name,\n            symbol: symbol,\n            decimals: decimals,\n            supply: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(supply.toString()),\n            balance: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(balance.toString()),\n            chainID: network.chainId\n        };\n        return token;\n    } catch (error) {\n        console.log(error);\n    }\n};\n_c = CONNECTING_CONTRACT;\nconst internalWooxContract = async ()=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const contract = fetchContract(provider, Woox_ABI, Woox_ADDRESS);\n        return contract;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst internalICOWooxContract = async ()=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const contract = fetchContract(provider, ICOWoox_ABI, ICOWoox_ADDRESS);\n        return contract;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst internalAddLiquidity = async (provider)=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const contract = fetchContract(provider, Liqudity_abi, Liqudity_ADDRESS);\n        return contract;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst getBalance = async ()=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        return await signer.getBalance();\n    } catch (error) {\n        console.log(error);\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"CONNECTING_CONTRACT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NvbnN0YW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFvRDtBQUNwRCx1REFBdUQ7QUFDdkQseURBQXlEO0FBRXpCO0FBQ0U7QUFFbEMsa0JBQWtCO0FBRXlCO0FBQ1Q7QUFFSDtBQUNNO0FBQ0U7QUFFdkMsT0FBTztBQUNBLE1BQU1PLGVBQWUsWUFBWTtBQUNqQyxNQUFNQyxXQUFXSiwyQ0FBUSxDQUFDO0FBQ2pDLFlBQVk7QUFDTCxNQUFNTSxrQkFBa0IsNkNBQTZDO0FBQ3JFLE1BQU1DLGNBQWNOLDhDQUFXLENBQUM7QUFDdkMsV0FBVztBQUNKLE1BQU1PLG1CQUFtQiw2Q0FBNkM7QUFDdEUsTUFBTUMsZUFBZVAsK0NBQVksQ0FBQztBQUVsQyxNQUFNUSxjQUFjWiw2Q0FBVUEsQ0FBQztBQUMvQixNQUFNYSxrQkFBa0IsNkNBQTZDO0FBRXJFLE1BQU1DLHlCQUF5Qiw2Q0FBNkM7QUFFbkYsTUFBTUMsZ0JBQWdCLENBQUNDLFFBQVNDLEtBQUtDLFVBQVksSUFBSXBCLDBDQUFNQSxDQUFDcUIsUUFBUSxDQUFDRCxTQUFVRCxLQUFNRDtBQUU5RSxNQUFNSSxlQUFlO0lBQ3hCLElBQUc7UUFDQyxNQUFNQyxZQUFZLElBQUl0QixrREFBU0E7UUFDL0IsTUFBTXVCLGFBQWEsTUFBTUQsVUFBVUUsT0FBTztRQUMxQyxNQUFNQyxXQUFXLElBQUkxQiwwQ0FBTUEsQ0FBQzJCLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDSjtRQUVuRCxPQUFPRTtJQUNYLEVBQUUsT0FBT0csT0FBTTtRQUNYQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0FBQ0osRUFBRTtBQUVLLE1BQU1HLHNCQUFxQixPQUFPWjtJQUNyQyxJQUFHO1FBQ0MsTUFBTUcsWUFBWSxJQUFJdEIsa0RBQVNBO1FBQy9CLE1BQU11QixhQUFhLE1BQU1ELFVBQVVFLE9BQU87UUFDMUMsTUFBTUMsV0FBVyxJQUFJMUIsMENBQU1BLENBQUMyQixTQUFTLENBQUNDLFlBQVksQ0FBQ0o7UUFFbkQsTUFBTVMsVUFBVSxNQUFNUCxTQUFTUSxVQUFVO1FBRXpDLE1BQU1oQixTQUFTUSxTQUFTUyxTQUFTO1FBQ2pDLE1BQU1DLFdBQVduQixjQUFjQyxRQUFTZixzQ0FBUUEsRUFBR2lCO1FBRW5ELGNBQWM7UUFDZCxNQUFNaUIsY0FBY25CLE9BQU9vQixVQUFVO1FBQ3JDLE1BQU1DLFVBQVUsTUFBTUgsU0FBU0ksU0FBUyxDQUFDSDtRQUV6QyxNQUFNSSxPQUFPLE1BQU1MLFNBQVNLLElBQUk7UUFDaEMsTUFBTUMsU0FBUyxNQUFNTixTQUFTTSxNQUFNO1FBQ3BDLE1BQU1DLFNBQVMsTUFBTVAsU0FBU1EsV0FBVztRQUN6QyxNQUFNQyxXQUFXLE1BQU1ULFNBQVNTLFFBQVE7UUFDeEMsTUFBTUMsVUFBVSxNQUFNVixTQUFTVSxPQUFPO1FBRXRDLE1BQU1DLFFBQVE7WUFDVkQsU0FBU0E7WUFDVEwsTUFBTUE7WUFDTkMsUUFBUUE7WUFDUkcsVUFBVUE7WUFDVkYsUUFBUTNDLDBDQUFNQSxDQUFDZ0QsS0FBSyxDQUFDQyxXQUFXLENBQUNOLE9BQU9PLFFBQVE7WUFDaERYLFNBQVN2QywwQ0FBTUEsQ0FBQ2dELEtBQUssQ0FBQ0MsV0FBVyxDQUFDVixRQUFRVyxRQUFRO1lBQ2xEQyxTQUFTbEIsUUFBUW1CLE9BQU87UUFDNUI7UUFDQSxPQUFPTDtJQUNYLEVBQUMsT0FBT2xCLE9BQU07UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNoQjtBQUNKLEVBQUU7S0FsQ1dHO0FBb0NOLE1BQU1xQix1QkFBdUI7SUFDaEMsSUFBRztRQUNILE1BQU05QixZQUFZLElBQUl0QixrREFBU0E7UUFDL0IsTUFBTXVCLGFBQWEsTUFBTUQsVUFBVUUsT0FBTztRQUMxQyxNQUFNQyxXQUFXLElBQUkxQiwwQ0FBTUEsQ0FBQzJCLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDSjtRQUVuRCxNQUFNWSxXQUFXbkIsY0FBY1MsVUFBV2xCLFVBQVdEO1FBQ3JELE9BQU82QjtJQUNYLEVBQUMsT0FBT1AsT0FBTTtRQUNWQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0FBQ0EsRUFBRTtBQUVLLE1BQU15QiwwQkFBMEI7SUFDbkMsSUFBRztRQUNILE1BQU0vQixZQUFZLElBQUl0QixrREFBU0E7UUFDL0IsTUFBTXVCLGFBQWEsTUFBTUQsVUFBVUUsT0FBTztRQUMxQyxNQUFNQyxXQUFXLElBQUkxQiwwQ0FBTUEsQ0FBQzJCLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDSjtRQUVuRCxNQUFNWSxXQUFXbkIsY0FBY1MsVUFBV2YsYUFBY0Q7UUFDeEQsT0FBTzBCO0lBQ1gsRUFBQyxPQUFPUCxPQUFNO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEI7QUFDQSxFQUFDO0FBRU0sTUFBTTBCLHVCQUF1QixPQUFPN0I7SUFDdkMsSUFBRztRQUNDLE1BQU1ILFlBQVksSUFBSXRCLGtEQUFTQTtRQUMvQixNQUFNdUIsYUFBYSxNQUFNRCxVQUFVRSxPQUFPO1FBQzFDLE1BQU1DLFdBQVcsSUFBSTFCLDBDQUFNQSxDQUFDMkIsU0FBUyxDQUFDQyxZQUFZLENBQUNKO1FBRW5ELE1BQU1ZLFdBQVduQixjQUFjUyxVQUFXYixjQUFlRDtRQUN6RCxPQUFPd0I7SUFDZixFQUFDLE9BQU9QLE9BQU07UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNoQjtBQUNBLEVBQUM7QUFFTSxNQUFNMkIsYUFBYTtJQUN0QixJQUFHO1FBQ0MsTUFBTWpDLFlBQVksSUFBSXRCLGtEQUFTQTtRQUMvQixNQUFNdUIsYUFBYSxNQUFNRCxVQUFVRSxPQUFPO1FBQzFDLE1BQU1DLFdBQVcsSUFBSTFCLDBDQUFNQSxDQUFDMkIsU0FBUyxDQUFDQyxZQUFZLENBQUNKO1FBRW5ELE1BQU1OLFNBQVNRLFNBQVNTLFNBQVM7UUFFakMsT0FBTyxNQUFNakIsT0FBT3NDLFVBQVU7SUFDbEMsRUFBRSxPQUFPM0IsT0FBTTtRQUNYQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2NvbnN0YW50cy5qcz81OTg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFdvb3ggOiAweDI1NzhDNTNjOGFiOTNhQWJjZGY5Qjc0ODMxYURDMTYyOGJiREEwMzdcclxuLy8gSUNPV29veCA6IDB4QTJjYzBBNERFQ2JkNjlmYzcyZmREMUY0NEYwZEZiMjlDMzZBQWEyRFxyXG4vLyBMaXF1aWRpdHkgOiAweDFEQmNGODIwRmU4RjZjNzRhRDQxM2U3ODM3ZEJmNDU5YkI5ZTBDRGRcclxuXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XHJcblxyXG4vL2ludGVybmFsIGltcG9ydCBcclxuXHJcbmltcG9ydCBmYWN0b3J5QWJpIGZyb20gXCIuL2ZhY3RvcnlBYmkuanNvblwiO1xyXG5pbXBvcnQgRVJDMjBBQkkgZnJvbSBcIi4vYWJpLmpzb25cIjtcclxuXHJcbmltcG9ydCBXb294IGZyb20gXCIuL1dvb3guanNvblwiO1xyXG5pbXBvcnQgSUNPV29veCBmcm9tIFwiLi9JQ09Xb294Lmpzb25cIjtcclxuaW1wb3J0IExpcXVkaXR5IGZyb20gXCIuL0xpcXVkaXR5Lmpzb25cIjtcclxuXHJcbi8vdG9rZW5cclxuZXhwb3J0IGNvbnN0IFdvb3hfQUREUkVTUyA9IFwiMHgxMmRFMDQ0XCI7XHJcbmV4cG9ydCBjb25zdCBXb294X0FCSSA9IFdvb3guYWJpO1xyXG4vL3Rva2VuIHNhbGVcclxuZXhwb3J0IGNvbnN0IElDT1dvb3hfQUREUkVTUyA9IFwiMHgzODc3OTAwNjkzYkI0MDlCMzZDOEI0YzY2RTc3MGJhNTlDNzhCQzMzXCI7XHJcbmV4cG9ydCBjb25zdCBJQ09Xb294X0FCSSA9IElDT1dvb3guYWJpO1xyXG4vL2xpcXVpZGl0eVxyXG5leHBvcnQgY29uc3QgTGlxdWRpdHlfQUREUkVTUyA9IFwiMHgxREJjRjgyMEZlOEY2Yzc0YUQ0MTNlNzgzN2RCZjQ1OWJCOWUwQ0RkXCI7XHJcbmV4cG9ydCBjb25zdCBMaXF1ZGl0eV9hYmkgPSBMaXF1ZGl0eS5hYmk7XHJcblxyXG5leHBvcnQgY29uc3QgRkFDVE9SWV9BQkkgPSBmYWN0b3J5QWJpO1xyXG5leHBvcnQgY29uc3QgRkFDVE9SWV9BRERSRVNTID0gXCIweDFGOTg0MzFjOGFEOTg1MjM2MzFBRTRhNTlmMjY3MzQ2ZWEzMUY5ODRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3NpdGlvbk1hbmFnZXJBZGRyZXNzID0gXCIweEMzNjQ0MmI0YTQ1MjJFODcxMzk5Q0Q3MTdhQkREODQ3QWIxMUZFODhcIjtcclxuXHJcbmNvbnN0IGZldGNoQ29udHJhY3QgPSAoc2lnbmVyICwgQUJJICxBRERSRVNTKSA9PiBuZXcgZXRoZXJzLkNvbnRyYWN0KEFERFJFU1MgLCBBQkkgLCBzaWduZXIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdlYjNQcm92aWRlciA9IGFzeW5jICgpID0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHdlYjNtb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM21vZGFsLmNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyO1xyXG4gICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTk5FQ1RJTkdfQ09OVFJBQ1QgPWFzeW5jIChBRERSRVNTKSA9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB3ZWIzbW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNtb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZmV0Y2hDb250cmFjdChzaWduZXIgLCBFUkMyMEFCSSAsIEFERFJFU1MpO1xyXG5cclxuICAgICAgICAvL1VTRVIgQUREUkVTU1xyXG4gICAgICAgIGNvbnN0IHVzZXJBZGRyZXNzID0gc2lnbmVyLmdldEFkZHJlc3MoKTtcclxuICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29udHJhY3QuYmFsYW5jZU9mKHVzZXJBZGRyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF3YWl0IGNvbnRyYWN0Lm5hbWUoKTtcclxuICAgICAgICBjb25zdCBzeW1ib2wgPSBhd2FpdCBjb250cmFjdC5zeW1ib2woKTtcclxuICAgICAgICBjb25zdCBzdXBwbHkgPSBhd2FpdCBjb250cmFjdC50b3RhbFN1cHBseSgpO1xyXG4gICAgICAgIGNvbnN0IGRlY2ltYWxzID0gYXdhaXQgY29udHJhY3QuZGVjaW1hbHMoKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgY29udHJhY3QuYWRkcmVzcztcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHN5bWJvbDogc3ltYm9sLFxyXG4gICAgICAgICAgICBkZWNpbWFsczogZGVjaW1hbHMsXHJcbiAgICAgICAgICAgIHN1cHBseTogZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHN1cHBseS50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgYmFsYW5jZTogZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2UudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgIGNoYWluSUQ6IG5ldHdvcmsuY2hhaW5JZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcm5hbFdvb3hDb250cmFjdCA9IGFzeW5jICgpID0+e1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3Qgd2ViM21vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNtb2RhbC5jb25uZWN0KCk7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjb250cmFjdCA9IGZldGNoQ29udHJhY3QocHJvdmlkZXIgLCBXb294X0FCSSAsIFdvb3hfQUREUkVTUyk7XHJcbiAgICByZXR1cm4gY29udHJhY3Q7XHJcbn1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG59XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJuYWxJQ09Xb294Q29udHJhY3QgPSBhc3luYyAoKSA9PntcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHdlYjNtb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzbW9kYWwuY29ubmVjdCgpO1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcblxyXG4gICAgY29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHByb3ZpZGVyICwgSUNPV29veF9BQkkgLCBJQ09Xb294X0FERFJFU1MpO1xyXG4gICAgcmV0dXJuIGNvbnRyYWN0O1xyXG59Y2F0Y2ggKGVycm9yKXtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJuYWxBZGRMaXF1aWRpdHkgPSBhc3luYyAocHJvdmlkZXIpID0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHdlYjNtb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM21vZGFsLmNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHByb3ZpZGVyICwgTGlxdWRpdHlfYWJpICwgTGlxdWRpdHlfQUREUkVTUyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRyYWN0O1xyXG59Y2F0Y2ggKGVycm9yKXtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB3ZWIzbW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNtb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgc2lnbmVyLmdldEJhbGFuY2UoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbn07Il0sIm5hbWVzIjpbImV0aGVycyIsIldlYjNNb2RhbCIsImZhY3RvcnlBYmkiLCJFUkMyMEFCSSIsIldvb3giLCJJQ09Xb294IiwiTGlxdWRpdHkiLCJXb294X0FERFJFU1MiLCJXb294X0FCSSIsImFiaSIsIklDT1dvb3hfQUREUkVTUyIsIklDT1dvb3hfQUJJIiwiTGlxdWRpdHlfQUREUkVTUyIsIkxpcXVkaXR5X2FiaSIsIkZBQ1RPUllfQUJJIiwiRkFDVE9SWV9BRERSRVNTIiwicG9zaXRpb25NYW5hZ2VyQWRkcmVzcyIsImZldGNoQ29udHJhY3QiLCJzaWduZXIiLCJBQkkiLCJBRERSRVNTIiwiQ29udHJhY3QiLCJ3ZWIzUHJvdmlkZXIiLCJ3ZWIzbW9kYWwiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiQ09OTkVDVElOR19DT05UUkFDVCIsIm5ldHdvcmsiLCJnZXROZXR3b3JrIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJ1c2VyQWRkcmVzcyIsImdldEFkZHJlc3MiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwibmFtZSIsInN5bWJvbCIsInN1cHBseSIsInRvdGFsU3VwcGx5IiwiZGVjaW1hbHMiLCJhZGRyZXNzIiwidG9rZW4iLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwidG9TdHJpbmciLCJjaGFpbklEIiwiY2hhaW5JZCIsImludGVybmFsV29veENvbnRyYWN0IiwiaW50ZXJuYWxJQ09Xb294Q29udHJhY3QiLCJpbnRlcm5hbEFkZExpcXVpZGl0eSIsImdldEJhbGFuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/constants.js\n"));

/***/ })

});