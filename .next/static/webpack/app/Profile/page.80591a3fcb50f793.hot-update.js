"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Profile/page",{

/***/ "(app-pages-browser)/./src/app/components/EditProfile.tsx":
/*!********************************************!*\
  !*** ./src/app/components/EditProfile.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/alert-dialog */ \"(app-pages-browser)/./src/components/ui/alert-dialog.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Profile_actions_updateProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Profile/actions/updateProfile */ \"(app-pages-browser)/./src/app/Profile/actions/updateProfile.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction EditProfile(param) {\n    let { client } = param;\n    _s();\n    const [uName, setUName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{}, []);\n    const update = async ()=>{\n        try {\n            if (!uName) throw new Error(\"Digite um novo nome de usuario\");\n            if (uName.length < 5 || uName.length > 15) throw new Error(\"Nome de usu\\xe1rio deve obter de 5 a 15 caract\\xe9res\");\n            const profile = {\n                id: client.id,\n                userName: uName\n            };\n            await (0,_Profile_actions_updateProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                profile\n            });\n            alert(\"Usu\\xe1rio editado com sucesso!\");\n        } catch (error) {\n            alert(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    className: \"my-2\",\n                    children: \"Editar\"\n                }, void 0, false, {\n                    fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogTitle, {\n                                children: \"Editar Perfil\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogDescription, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"w-96 h-12 border-b-2 border-black text-sm outline-none\",\n                                    value: uName,\n                                    onChange: (ev)=>{\n                                        setUName(ev.target.value);\n                                    },\n                                    placeholder: \"Nome de usu\\xe1rio\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogFooter, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogCancel, {\n                                children: \"Cancelar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogAction, {\n                                onClick: update,\n                                children: \"Confirmar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(EditProfile, \"LUVXQkbKIBKxcb2x6pyj+yOVvWs=\");\n_c = EditProfile;\nvar _c;\n$RefreshReg$(_c, \"EditProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FZGl0UHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBWXVDO0FBQ1M7QUFDSjtBQUNpQjtBQVM5QyxTQUFTYSxZQUFZLEtBQW9CO1FBQXBCLEVBQUNDLE1BQU0sRUFBYSxHQUFwQjs7SUFFaEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUlMLCtDQUFRQSxDQUFTO0lBRTVDRCxnREFBU0EsQ0FBQyxLQUVWLEdBQUUsRUFBRTtJQUVKLE1BQU1PLFNBQVM7UUFFWCxJQUFJO1lBQ0EsSUFBRyxDQUFDRixPQUFPLE1BQU0sSUFBSUcsTUFBTTtZQUMzQixJQUFHSCxNQUFNSSxNQUFNLEdBQUcsS0FBS0osTUFBTUksTUFBTSxHQUFHLElBQUksTUFBTSxJQUFJRCxNQUFNO1lBRTFELE1BQU1FLFVBQVU7Z0JBQ1pDLElBQUlQLE9BQU9PLEVBQUU7Z0JBQ2JDLFVBQVVQO1lBQ2Q7WUFFQSxNQUFNSCwwRUFBYUEsQ0FBQztnQkFBQ1E7WUFBTztZQUU1QkcsTUFBTTtRQUVWLEVBQUUsT0FBT0MsT0FBVztZQUNoQkQsTUFBTUMsTUFBTUMsT0FBTztRQUN2QjtJQUVKO0lBRUEscUJBQ0ksOERBQUN6QixvRUFBV0E7OzBCQUNSLDhEQUFDUSwyRUFBa0JBO2dCQUFDa0IsT0FBTzswQkFDdkIsNEVBQUNqQix5REFBTUE7b0JBQUNrQixXQUFVOzhCQUFPOzs7Ozs7Ozs7OzswQkFFN0IsOERBQUN4QiwyRUFBa0JBOztrQ0FDZiw4REFBQ0csMEVBQWlCQTs7MENBQ2xCLDhEQUFDQyx5RUFBZ0JBOzBDQUFDOzs7Ozs7MENBQ2xCLDhEQUFDSCwrRUFBc0JBOzBDQUNuQiw0RUFBQ3dCO29DQUNHRCxXQUFVO29DQUNWRSxPQUFPZDtvQ0FDUGUsVUFBVSxDQUFDQzt3Q0FBTWYsU0FBU2UsR0FBR0MsTUFBTSxDQUFDSCxLQUFLO29DQUFDO29DQUMxQ0ksYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXBCLDhEQUFDNUIsMEVBQWlCQTs7MENBQ2xCLDhEQUFDSCwwRUFBaUJBOzBDQUFDOzs7Ozs7MENBQ25CLDhEQUFDRCwwRUFBaUJBO2dDQUFDaUMsU0FBU2pCOzBDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQ7R0F0RHdCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRWRpdFByb2ZpbGUudHN4PzliZTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHtcbiAgICBBbGVydERpYWxvZyxcbiAgICBBbGVydERpYWxvZ0FjdGlvbixcbiAgICBBbGVydERpYWxvZ0NhbmNlbCxcbiAgICBBbGVydERpYWxvZ0NvbnRlbnQsXG4gICAgQWxlcnREaWFsb2dEZXNjcmlwdGlvbixcbiAgICBBbGVydERpYWxvZ0Zvb3RlcixcbiAgICBBbGVydERpYWxvZ0hlYWRlcixcbiAgICBBbGVydERpYWxvZ1RpdGxlLFxuICAgIEFsZXJ0RGlhbG9nVHJpZ2dlcixcbiAgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FsZXJ0LWRpYWxvZ1wiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVwZGF0ZVByb2ZpbGUgZnJvbSBcIi4uL1Byb2ZpbGUvYWN0aW9ucy91cGRhdGVQcm9maWxlXCI7XG5cbmludGVyZmFjZSBDbGllbnRQcm9wc3tcbiAgICBjbGllbnQ6e1xuICAgICAgICBpZDpzdHJpbmdcbiAgICAgICAgdXNlck5hbWU6c3RyaW5nXG4gICAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRQcm9maWxlKHtjbGllbnR9OkNsaWVudFByb3BzKSB7XG5cbiAgICBjb25zdCBbdU5hbWUsIHNldFVOYW1lXSAgPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgXG4gICAgfSxbXSlcblxuICAgIGNvbnN0IHVwZGF0ZSA9IGFzeW5jICgpPT57XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmKCF1TmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiRGlnaXRlIHVtIG5vdm8gbm9tZSBkZSB1c3VhcmlvXCIpO1xuICAgICAgICAgICAgaWYodU5hbWUubGVuZ3RoIDwgNSB8fCB1TmFtZS5sZW5ndGggPiAxNSkgdGhyb3cgbmV3IEVycm9yKFwiTm9tZSBkZSB1c3XDoXJpbyBkZXZlIG9idGVyIGRlIDUgYSAxNSBjYXJhY3TDqXJlc1wiKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9maWxlID0ge1xuICAgICAgICAgICAgICAgIGlkOiBjbGllbnQuaWQsXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IHVOYW1lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVByb2ZpbGUoe3Byb2ZpbGV9KVxuXG4gICAgICAgICAgICBhbGVydChcIlVzdcOhcmlvIGVkaXRhZG8gY29tIHN1Y2Vzc28hXCIpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QWxlcnREaWFsb2c+XG4gICAgICAgICAgICA8QWxlcnREaWFsb2dUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJteS0yXCI+RWRpdGFyPC9CdXR0b24+XG4gICAgICAgICAgICA8L0FsZXJ0RGlhbG9nVHJpZ2dlcj5cbiAgICAgICAgICAgIDxBbGVydERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxBbGVydERpYWxvZ1RpdGxlPkVkaXRhciBQZXJmaWw8L0FsZXJ0RGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy05NiBoLTEyIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIHRleHQtc20gb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpPT57c2V0VU5hbWUoZXYudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgZGUgdXN1w6FyaW9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQWxlcnREaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L0FsZXJ0RGlhbG9nSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxBbGVydERpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dDYW5jZWw+Q2FuY2VsYXI8L0FsZXJ0RGlhbG9nQ2FuY2VsPlxuICAgICAgICAgICAgICAgIDxBbGVydERpYWxvZ0FjdGlvbiBvbkNsaWNrPXt1cGRhdGV9PkNvbmZpcm1hcjwvQWxlcnREaWFsb2dBY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9BbGVydERpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgICAgIDwvQWxlcnREaWFsb2dDb250ZW50PlxuICAgICAgICA8L0FsZXJ0RGlhbG9nPlxuXG4gICAgKTtcbn0iXSwibmFtZXMiOlsiQWxlcnREaWFsb2ciLCJBbGVydERpYWxvZ0FjdGlvbiIsIkFsZXJ0RGlhbG9nQ2FuY2VsIiwiQWxlcnREaWFsb2dDb250ZW50IiwiQWxlcnREaWFsb2dEZXNjcmlwdGlvbiIsIkFsZXJ0RGlhbG9nRm9vdGVyIiwiQWxlcnREaWFsb2dIZWFkZXIiLCJBbGVydERpYWxvZ1RpdGxlIiwiQWxlcnREaWFsb2dUcmlnZ2VyIiwiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVcGRhdGVQcm9maWxlIiwiRWRpdFByb2ZpbGUiLCJjbGllbnQiLCJ1TmFtZSIsInNldFVOYW1lIiwidXBkYXRlIiwiRXJyb3IiLCJsZW5ndGgiLCJwcm9maWxlIiwiaWQiLCJ1c2VyTmFtZSIsImFsZXJ0IiwiZXJyb3IiLCJtZXNzYWdlIiwiYXNDaGlsZCIsImNsYXNzTmFtZSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImV2IiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/EditProfile.tsx\n"));

/***/ })

});