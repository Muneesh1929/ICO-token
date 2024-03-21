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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONNECTING_CONTRACT: function() { return /* binding */ CONNECTING_CONTRACT; },\n/* harmony export */   FACTORY_ABI: function() { return /* binding */ FACTORY_ABI; },\n/* harmony export */   FACTORY_ADDRESS: function() { return /* binding */ FACTORY_ADDRESS; },\n/* harmony export */   ICOWoox_ABI: function() { return /* binding */ ICOWoox_ABI; },\n/* harmony export */   ICOWoox_ADDRESS: function() { return /* binding */ ICOWoox_ADDRESS; },\n/* harmony export */   Liqudity_ADDRESS: function() { return /* binding */ Liqudity_ADDRESS; },\n/* harmony export */   Liqudity_abi: function() { return /* binding */ Liqudity_abi; },\n/* harmony export */   Woox_ABI: function() { return /* binding */ Woox_ABI; },\n/* harmony export */   Woox_ADDRESS: function() { return /* binding */ Woox_ADDRESS; },\n/* harmony export */   getBalance: function() { return /* binding */ getBalance; },\n/* harmony export */   internalAddLiquidity: function() { return /* binding */ internalAddLiquidity; },\n/* harmony export */   internalICOWooxContract: function() { return /* binding */ internalICOWooxContract; },\n/* harmony export */   internalWooxContract: function() { return /* binding */ internalWooxContract; },\n/* harmony export */   positionManagerAddress: function() { return /* binding */ positionManagerAddress; },\n/* harmony export */   web3Provider: function() { return /* binding */ web3Provider; }\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factoryAbi_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factoryAbi.json */ \"./context/factoryAbi.json\");\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abi.json */ \"./context/abi.json\");\n/* harmony import */ var _Woox_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Woox.json */ \"./context/Woox.json\");\n/* harmony import */ var _ICOWoox_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ICOWoox.json */ \"./context/ICOWoox.json\");\n/* harmony import */ var _Liqudity_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Liqudity.json */ \"./context/Liqudity.json\");\n// Woox : 0x2578C53c8ab93aAbcdf9B74831aDC1628bbDA037\n// ICOWoox : 0xA2cc0A4DECbd69fc72fdD1F44F0dFb29C36AAa2D\n// Liquidity : 0x1DBcF820Fe8F6c74aD413e7837dBf459bB9e0CDd\n\n\n//internal import \n\n\n\n\n\n//token\nconst Woox_ADDRESS = \"0x2578C53c8ab93aAbcdf9B74831aDC1628bbDA037\";\nconst Woox_ABI = _Woox_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n//token sale\nconst ICOWoox_ADDRESS = \"0x3877900693bB409B36C8B4c66E770ba59C\";\nconst ICOWoox_ABI = _ICOWoox_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n//liquidity\nconst Liqudity_ADDRESS = \"0x1DBcF820Fe8F6c74aD413e7837dBf459bB9e0CDd\";\nconst Liqudity_abi = _Liqudity_json__WEBPACK_IMPORTED_MODULE_5__.abi;\nconst FACTORY_ABI = _factoryAbi_json__WEBPACK_IMPORTED_MODULE_1__;\nconst FACTORY_ADDRESS = \"0x1F98431c8aD98523631AE4a59f267346ea31F984\";\nconst positionManagerAddress = \"0xC36442b4a4522E871399CD717aBDD847Ab11FE88\";\nconst fetchContract = (signer, ABI, ADDRESS)=>new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(ADDRESS, ABI, signer);\nconst web3Provider = async ()=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        return provider;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst CONNECTING_CONTRACT = async (ADDRESS)=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const network = await provider.getNetwork();\n        const signer = provider.getSigner();\n        const contract = fetchContract(signer, _abi_json__WEBPACK_IMPORTED_MODULE_2__, ADDRESS);\n        //USER ADDRESS\n        const userAddress = signer.getAddress();\n        const balance = await contract.balanceOf(userAddress);\n        const name = await contract.name();\n        const symbol = await contract.symbol();\n        const supply = await contract.totalSupply();\n        const decimals = await contract.decimals();\n        const address = await contract.address;\n        const token = {\n            address: address,\n            name: name,\n            symbol: symbol,\n            decimals: decimals,\n            supply: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(supply.toString()),\n            balance: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(balance.toString()),\n            chainID: network.chainId\n        };\n        return token;\n    } catch (error) {\n        console.log(error);\n    }\n};\n_c = CONNECTING_CONTRACT;\nconst internalWooxContract = async ()=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const contract = fetchContract(provider, Woox_ABI, Woox_ADDRESS);\n        return contract;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst internalICOWooxContract = async ()=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const contract = fetchContract(provider, ICOWoox_ABI, ICOWoox_ADDRESS);\n        return contract;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst internalAddLiquidity = async (provider)=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const contract = fetchContract(provider, Liqudity_abi, Liqudity_ADDRESS);\n        return contract;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst getBalance = async ()=>{\n    try {\n        const web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n        const connection = await web3modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        return await signer.getBalance();\n    } catch (error) {\n        console.log(error);\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"CONNECTING_CONTRACT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NvbnN0YW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFvRDtBQUNwRCx1REFBdUQ7QUFDdkQseURBQXlEO0FBRXpCO0FBQ0U7QUFFbEMsa0JBQWtCO0FBRXlCO0FBQ1Q7QUFFSDtBQUNNO0FBQ0U7QUFFdkMsT0FBTztBQUNBLE1BQU1PLGVBQWUsNkNBQTZDO0FBQ2xFLE1BQU1DLFdBQVdKLDJDQUFRLENBQUM7QUFDakMsWUFBWTtBQUNMLE1BQU1NLGtCQUFrQix1Q0FBdUM7QUFDL0QsTUFBTUMsY0FBY04sOENBQVcsQ0FBQztBQUN2QyxXQUFXO0FBQ0osTUFBTU8sbUJBQW1CLDZDQUE2QztBQUN0RSxNQUFNQyxlQUFlUCwrQ0FBWSxDQUFDO0FBRWxDLE1BQU1RLGNBQWNaLDZDQUFVQSxDQUFDO0FBQy9CLE1BQU1hLGtCQUFrQiw2Q0FBNkM7QUFFckUsTUFBTUMseUJBQXlCLDZDQUE2QztBQUVuRixNQUFNQyxnQkFBZ0IsQ0FBQ0MsUUFBU0MsS0FBS0MsVUFBWSxJQUFJcEIsMENBQU1BLENBQUNxQixRQUFRLENBQUNELFNBQVVELEtBQU1EO0FBRTlFLE1BQU1JLGVBQWU7SUFDeEIsSUFBRztRQUNDLE1BQU1DLFlBQVksSUFBSXRCLGtEQUFTQTtRQUMvQixNQUFNdUIsYUFBYSxNQUFNRCxVQUFVRSxPQUFPO1FBQzFDLE1BQU1DLFdBQVcsSUFBSTFCLDBDQUFNQSxDQUFDMkIsU0FBUyxDQUFDQyxZQUFZLENBQUNKO1FBRW5ELE9BQU9FO0lBQ1gsRUFBRSxPQUFPRyxPQUFNO1FBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEI7QUFDSixFQUFFO0FBRUssTUFBTUcsc0JBQXFCLE9BQU9aO0lBQ3JDLElBQUc7UUFDQyxNQUFNRyxZQUFZLElBQUl0QixrREFBU0E7UUFDL0IsTUFBTXVCLGFBQWEsTUFBTUQsVUFBVUUsT0FBTztRQUMxQyxNQUFNQyxXQUFXLElBQUkxQiwwQ0FBTUEsQ0FBQzJCLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDSjtRQUVuRCxNQUFNUyxVQUFVLE1BQU1QLFNBQVNRLFVBQVU7UUFFekMsTUFBTWhCLFNBQVNRLFNBQVNTLFNBQVM7UUFDakMsTUFBTUMsV0FBV25CLGNBQWNDLFFBQVNmLHNDQUFRQSxFQUFHaUI7UUFFbkQsY0FBYztRQUNkLE1BQU1pQixjQUFjbkIsT0FBT29CLFVBQVU7UUFDckMsTUFBTUMsVUFBVSxNQUFNSCxTQUFTSSxTQUFTLENBQUNIO1FBRXpDLE1BQU1JLE9BQU8sTUFBTUwsU0FBU0ssSUFBSTtRQUNoQyxNQUFNQyxTQUFTLE1BQU1OLFNBQVNNLE1BQU07UUFDcEMsTUFBTUMsU0FBUyxNQUFNUCxTQUFTUSxXQUFXO1FBQ3pDLE1BQU1DLFdBQVcsTUFBTVQsU0FBU1MsUUFBUTtRQUN4QyxNQUFNQyxVQUFVLE1BQU1WLFNBQVNVLE9BQU87UUFFdEMsTUFBTUMsUUFBUTtZQUNWRCxTQUFTQTtZQUNUTCxNQUFNQTtZQUNOQyxRQUFRQTtZQUNSRyxVQUFVQTtZQUNWRixRQUFRM0MsMENBQU1BLENBQUNnRCxLQUFLLENBQUNDLFdBQVcsQ0FBQ04sT0FBT08sUUFBUTtZQUNoRFgsU0FBU3ZDLDBDQUFNQSxDQUFDZ0QsS0FBSyxDQUFDQyxXQUFXLENBQUNWLFFBQVFXLFFBQVE7WUFDbERDLFNBQVNsQixRQUFRbUIsT0FBTztRQUM1QjtRQUNBLE9BQU9MO0lBQ1gsRUFBQyxPQUFPbEIsT0FBTTtRQUNWQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0FBQ0osRUFBRTtLQWxDV0c7QUFvQ04sTUFBTXFCLHVCQUF1QjtJQUNoQyxJQUFHO1FBQ0gsTUFBTTlCLFlBQVksSUFBSXRCLGtEQUFTQTtRQUMvQixNQUFNdUIsYUFBYSxNQUFNRCxVQUFVRSxPQUFPO1FBQzFDLE1BQU1DLFdBQVcsSUFBSTFCLDBDQUFNQSxDQUFDMkIsU0FBUyxDQUFDQyxZQUFZLENBQUNKO1FBRW5ELE1BQU1ZLFdBQVduQixjQUFjUyxVQUFXbEIsVUFBV0Q7UUFDckQsT0FBTzZCO0lBQ1gsRUFBQyxPQUFPUCxPQUFNO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEI7QUFDQSxFQUFFO0FBRUssTUFBTXlCLDBCQUEwQjtJQUNuQyxJQUFHO1FBQ0gsTUFBTS9CLFlBQVksSUFBSXRCLGtEQUFTQTtRQUMvQixNQUFNdUIsYUFBYSxNQUFNRCxVQUFVRSxPQUFPO1FBQzFDLE1BQU1DLFdBQVcsSUFBSTFCLDBDQUFNQSxDQUFDMkIsU0FBUyxDQUFDQyxZQUFZLENBQUNKO1FBRW5ELE1BQU1ZLFdBQVduQixjQUFjUyxVQUFXZixhQUFjRDtRQUN4RCxPQUFPMEI7SUFDWCxFQUFDLE9BQU9QLE9BQU07UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNoQjtBQUNBLEVBQUM7QUFFTSxNQUFNMEIsdUJBQXVCLE9BQU83QjtJQUN2QyxJQUFHO1FBQ0MsTUFBTUgsWUFBWSxJQUFJdEIsa0RBQVNBO1FBQy9CLE1BQU11QixhQUFhLE1BQU1ELFVBQVVFLE9BQU87UUFDMUMsTUFBTUMsV0FBVyxJQUFJMUIsMENBQU1BLENBQUMyQixTQUFTLENBQUNDLFlBQVksQ0FBQ0o7UUFFbkQsTUFBTVksV0FBV25CLGNBQWNTLFVBQVdiLGNBQWVEO1FBQ3pELE9BQU93QjtJQUNmLEVBQUMsT0FBT1AsT0FBTTtRQUNWQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0FBQ0EsRUFBQztBQUVNLE1BQU0yQixhQUFhO0lBQ3RCLElBQUc7UUFDQyxNQUFNakMsWUFBWSxJQUFJdEIsa0RBQVNBO1FBQy9CLE1BQU11QixhQUFhLE1BQU1ELFVBQVVFLE9BQU87UUFDMUMsTUFBTUMsV0FBVyxJQUFJMUIsMENBQU1BLENBQUMyQixTQUFTLENBQUNDLFlBQVksQ0FBQ0o7UUFFbkQsTUFBTU4sU0FBU1EsU0FBU1MsU0FBUztRQUVqQyxPQUFPLE1BQU1qQixPQUFPc0MsVUFBVTtJQUNsQyxFQUFFLE9BQU8zQixPQUFNO1FBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEI7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvY29uc3RhbnRzLmpzPzU5ODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gV29veCA6IDB4MjU3OEM1M2M4YWI5M2FBYmNkZjlCNzQ4MzFhREMxNjI4YmJEQTAzN1xyXG4vLyBJQ09Xb294IDogMHhBMmNjMEE0REVDYmQ2OWZjNzJmZEQxRjQ0RjBkRmIyOUMzNkFBYTJEXHJcbi8vIExpcXVpZGl0eSA6IDB4MURCY0Y4MjBGZThGNmM3NGFENDEzZTc4MzdkQmY0NTliQjllMENEZFxyXG5cclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuXHJcbi8vaW50ZXJuYWwgaW1wb3J0IFxyXG5cclxuaW1wb3J0IGZhY3RvcnlBYmkgZnJvbSBcIi4vZmFjdG9yeUFiaS5qc29uXCI7XHJcbmltcG9ydCBFUkMyMEFCSSBmcm9tIFwiLi9hYmkuanNvblwiO1xyXG5cclxuaW1wb3J0IFdvb3ggZnJvbSBcIi4vV29veC5qc29uXCI7XHJcbmltcG9ydCBJQ09Xb294IGZyb20gXCIuL0lDT1dvb3guanNvblwiO1xyXG5pbXBvcnQgTGlxdWRpdHkgZnJvbSBcIi4vTGlxdWRpdHkuanNvblwiO1xyXG5cclxuLy90b2tlblxyXG5leHBvcnQgY29uc3QgV29veF9BRERSRVNTID0gXCIweDI1NzhDNTNjOGFiOTNhQWJjZGY5Qjc0ODMxYURDMTYyOGJiREEwMzdcIjtcclxuZXhwb3J0IGNvbnN0IFdvb3hfQUJJID0gV29veC5hYmk7XHJcbi8vdG9rZW4gc2FsZVxyXG5leHBvcnQgY29uc3QgSUNPV29veF9BRERSRVNTID0gXCIweDM4Nzc5MDA2OTNiQjQwOUIzNkM4QjRjNjZFNzcwYmE1OUNcIjtcclxuZXhwb3J0IGNvbnN0IElDT1dvb3hfQUJJID0gSUNPV29veC5hYmk7XHJcbi8vbGlxdWlkaXR5XHJcbmV4cG9ydCBjb25zdCBMaXF1ZGl0eV9BRERSRVNTID0gXCIweDFEQmNGODIwRmU4RjZjNzRhRDQxM2U3ODM3ZEJmNDU5YkI5ZTBDRGRcIjtcclxuZXhwb3J0IGNvbnN0IExpcXVkaXR5X2FiaSA9IExpcXVkaXR5LmFiaTtcclxuXHJcbmV4cG9ydCBjb25zdCBGQUNUT1JZX0FCSSA9IGZhY3RvcnlBYmk7XHJcbmV4cG9ydCBjb25zdCBGQUNUT1JZX0FERFJFU1MgPSBcIjB4MUY5ODQzMWM4YUQ5ODUyMzYzMUFFNGE1OWYyNjczNDZlYTMxRjk4NFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc2l0aW9uTWFuYWdlckFkZHJlc3MgPSBcIjB4QzM2NDQyYjRhNDUyMkU4NzEzOTlDRDcxN2FCREQ4NDdBYjExRkU4OFwiO1xyXG5cclxuY29uc3QgZmV0Y2hDb250cmFjdCA9IChzaWduZXIgLCBBQkkgLEFERFJFU1MpID0+IG5ldyBldGhlcnMuQ29udHJhY3QoQUREUkVTUyAsIEFCSSAsIHNpZ25lcik7XHJcblxyXG5leHBvcnQgY29uc3Qgd2ViM1Byb3ZpZGVyID0gYXN5bmMgKCkgPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgd2ViM21vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzbW9kYWwuY29ubmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09OTkVDVElOR19DT05UUkFDVCA9YXN5bmMgKEFERFJFU1MpID0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHdlYjNtb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM21vZGFsLmNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV0d29yayA9IGF3YWl0IHByb3ZpZGVyLmdldE5ldHdvcmsoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHNpZ25lciAsIEVSQzIwQUJJICwgQUREUkVTUyk7XHJcblxyXG4gICAgICAgIC8vVVNFUiBBRERSRVNTXHJcbiAgICAgICAgY29uc3QgdXNlckFkZHJlc3MgPSBzaWduZXIuZ2V0QWRkcmVzcygpO1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2YodXNlckFkZHJlc3MpO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gYXdhaXQgY29udHJhY3QubmFtZSgpO1xyXG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpO1xyXG4gICAgICAgIGNvbnN0IHN1cHBseSA9IGF3YWl0IGNvbnRyYWN0LnRvdGFsU3VwcGx5KCk7XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbHMgPSBhd2FpdCBjb250cmFjdC5kZWNpbWFscygpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBjb250cmFjdC5hZGRyZXNzO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IHtcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXHJcbiAgICAgICAgICAgIGRlY2ltYWxzOiBkZWNpbWFscyxcclxuICAgICAgICAgICAgc3VwcGx5OiBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoc3VwcGx5LnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICBiYWxhbmNlOiBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYmFsYW5jZS50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgY2hhaW5JRDogbmV0d29yay5jaGFpbklkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfWNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGVybmFsV29veENvbnRyYWN0ID0gYXN5bmMgKCkgPT57XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCB3ZWIzbW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM21vZGFsLmNvbm5lY3QoKTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gZmV0Y2hDb250cmFjdChwcm92aWRlciAsIFdvb3hfQUJJICwgV29veF9BRERSRVNTKTtcclxuICAgIHJldHVybiBjb250cmFjdDtcclxufWNhdGNoIChlcnJvcil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbn1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcm5hbElDT1dvb3hDb250cmFjdCA9IGFzeW5jICgpID0+e1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3Qgd2ViM21vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNtb2RhbC5jb25uZWN0KCk7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjb250cmFjdCA9IGZldGNoQ29udHJhY3QocHJvdmlkZXIgLCBJQ09Xb294X0FCSSAsIElDT1dvb3hfQUREUkVTUyk7XHJcbiAgICByZXR1cm4gY29udHJhY3Q7XHJcbn1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcm5hbEFkZExpcXVpZGl0eSA9IGFzeW5jIChwcm92aWRlcikgPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgd2ViM21vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzbW9kYWwuY29ubmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBjb250cmFjdCA9IGZldGNoQ29udHJhY3QocHJvdmlkZXIgLCBMaXF1ZGl0eV9hYmkgLCBMaXF1ZGl0eV9BRERSRVNTKTtcclxuICAgICAgICByZXR1cm4gY29udHJhY3Q7XHJcbn1jYXRjaCAoZXJyb3Ipe1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHdlYjNtb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM21vZGFsLmNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBzaWduZXIuZ2V0QmFsYW5jZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxufTsiXSwibmFtZXMiOlsiZXRoZXJzIiwiV2ViM01vZGFsIiwiZmFjdG9yeUFiaSIsIkVSQzIwQUJJIiwiV29veCIsIklDT1dvb3giLCJMaXF1ZGl0eSIsIldvb3hfQUREUkVTUyIsIldvb3hfQUJJIiwiYWJpIiwiSUNPV29veF9BRERSRVNTIiwiSUNPV29veF9BQkkiLCJMaXF1ZGl0eV9BRERSRVNTIiwiTGlxdWRpdHlfYWJpIiwiRkFDVE9SWV9BQkkiLCJGQUNUT1JZX0FERFJFU1MiLCJwb3NpdGlvbk1hbmFnZXJBZGRyZXNzIiwiZmV0Y2hDb250cmFjdCIsInNpZ25lciIsIkFCSSIsIkFERFJFU1MiLCJDb250cmFjdCIsIndlYjNQcm92aWRlciIsIndlYjNtb2RhbCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDT05ORUNUSU5HX0NPTlRSQUNUIiwibmV0d29yayIsImdldE5ldHdvcmsiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsInVzZXJBZGRyZXNzIiwiZ2V0QWRkcmVzcyIsImJhbGFuY2UiLCJiYWxhbmNlT2YiLCJuYW1lIiwic3ltYm9sIiwic3VwcGx5IiwidG90YWxTdXBwbHkiLCJkZWNpbWFscyIsImFkZHJlc3MiLCJ0b2tlbiIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJ0b1N0cmluZyIsImNoYWluSUQiLCJjaGFpbklkIiwiaW50ZXJuYWxXb294Q29udHJhY3QiLCJpbnRlcm5hbElDT1dvb3hDb250cmFjdCIsImludGVybmFsQWRkTGlxdWlkaXR5IiwiZ2V0QmFsYW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/constants.js\n"));

/***/ })

});