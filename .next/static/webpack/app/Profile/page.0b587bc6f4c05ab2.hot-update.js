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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/alert-dialog */ \"(app-pages-browser)/./src/components/ui/alert-dialog.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Profile_actions_updateProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Profile/actions/updateProfile */ \"(app-pages-browser)/./src/app/Profile/actions/updateProfile.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction EditProfile(param) {\n    let { client } = param;\n    _s();\n    const [uName, setUName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const update = async ()=>{\n        try {\n            if (!uName) throw new Error(\"Digite um novo nome de usuario\");\n            if (uName.length < 5 || uName.length > 15) throw new Error(\"Nome de usu\\xe1rio deve obter de 5 a 15 caract\\xe9res\");\n            const profile = {\n                id: client.id,\n                userName: uName\n            };\n            await (0,_Profile_actions_updateProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                profile\n            });\n            alert(\"Usu\\xe1rio editado com sucesso!\");\n        } catch (error) {\n            alert(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    className: \"my-2\",\n                    children: \"Editar\"\n                }, void 0, false, {\n                    fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogTitle, {\n                                children: \"Editar Perfil\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogDescription, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"w-96 h-12 border-b-2 border-black text-sm outline-none\",\n                                    value: uName,\n                                    onChange: (ev)=>{\n                                        setUName(ev.target.value);\n                                    },\n                                    placeholder: \"Nome de usu\\xe1rio\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogFooter, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogCancel, {\n                                children: \"Cancelar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogAction, {\n                                onClick: update,\n                                children: \"Confirmar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emannuel/Documents/Projetinhos/GitHub/Bank-2.0/src/app/components/EditProfile.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(EditProfile, \"nnLHdNp1L5iFpxcxlsPYPca9fQM=\");\n_c = EditProfile;\nvar _c;\n$RefreshReg$(_c, \"EditProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FZGl0UHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBWXVDO0FBQ1M7QUFDZjtBQUM0QjtBQVM5QyxTQUFTWSxZQUFZLEtBQW9CO1FBQXBCLEVBQUNDLE1BQU0sRUFBYSxHQUFwQjs7SUFFaEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUlMLCtDQUFRQSxDQUFTO0lBRTVDLE1BQU1NLFNBQVM7UUFFWCxJQUFJO1lBQ0EsSUFBRyxDQUFDRixPQUFPLE1BQU0sSUFBSUcsTUFBTTtZQUMzQixJQUFHSCxNQUFNSSxNQUFNLEdBQUcsS0FBS0osTUFBTUksTUFBTSxHQUFHLElBQUksTUFBTSxJQUFJRCxNQUFNO1lBRTFELE1BQU1FLFVBQVU7Z0JBQ1pDLElBQUlQLE9BQU9PLEVBQUU7Z0JBQ2JDLFVBQVVQO1lBQ2Q7WUFFQSxNQUFNSCwwRUFBYUEsQ0FBQztnQkFBQ1E7WUFBTztZQUU1QkcsTUFBTTtRQUVWLEVBQUUsT0FBT0MsT0FBVztZQUNoQkQsTUFBTUMsTUFBTUMsT0FBTztRQUN2QjtJQUVKO0lBRUEscUJBQ0ksOERBQUN4QixvRUFBV0E7OzBCQUNSLDhEQUFDUSwyRUFBa0JBO2dCQUFDaUIsT0FBTzswQkFDdkIsNEVBQUNoQix5REFBTUE7b0JBQUNpQixXQUFVOzhCQUFPOzs7Ozs7Ozs7OzswQkFFN0IsOERBQUN2QiwyRUFBa0JBOztrQ0FDZiw4REFBQ0csMEVBQWlCQTs7MENBQ2xCLDhEQUFDQyx5RUFBZ0JBOzBDQUFDOzs7Ozs7MENBQ2xCLDhEQUFDSCwrRUFBc0JBOzBDQUNuQiw0RUFBQ3VCO29DQUNHRCxXQUFVO29DQUNWRSxPQUFPZDtvQ0FDUGUsVUFBVSxDQUFDQzt3Q0FBTWYsU0FBU2UsR0FBR0MsTUFBTSxDQUFDSCxLQUFLO29DQUFDO29DQUMxQ0ksYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXBCLDhEQUFDM0IsMEVBQWlCQTs7MENBQ2xCLDhEQUFDSCwwRUFBaUJBOzBDQUFDOzs7Ozs7MENBQ25CLDhEQUFDRCwwRUFBaUJBO2dDQUFDZ0MsU0FBU2pCOzBDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQ7R0FsRHdCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRWRpdFByb2ZpbGUudHN4PzliZTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHtcbiAgICBBbGVydERpYWxvZyxcbiAgICBBbGVydERpYWxvZ0FjdGlvbixcbiAgICBBbGVydERpYWxvZ0NhbmNlbCxcbiAgICBBbGVydERpYWxvZ0NvbnRlbnQsXG4gICAgQWxlcnREaWFsb2dEZXNjcmlwdGlvbixcbiAgICBBbGVydERpYWxvZ0Zvb3RlcixcbiAgICBBbGVydERpYWxvZ0hlYWRlcixcbiAgICBBbGVydERpYWxvZ1RpdGxlLFxuICAgIEFsZXJ0RGlhbG9nVHJpZ2dlcixcbiAgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FsZXJ0LWRpYWxvZ1wiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVcGRhdGVQcm9maWxlIGZyb20gXCIuLi9Qcm9maWxlL2FjdGlvbnMvdXBkYXRlUHJvZmlsZVwiO1xuXG5pbnRlcmZhY2UgQ2xpZW50UHJvcHN7XG4gICAgY2xpZW50OntcbiAgICAgICAgaWQ6c3RyaW5nXG4gICAgICAgIHVzZXJOYW1lOnN0cmluZ1xuICAgIH1cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0UHJvZmlsZSh7Y2xpZW50fTpDbGllbnRQcm9wcykge1xuXG4gICAgY29uc3QgW3VOYW1lLCBzZXRVTmFtZV0gID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxuXG4gICAgY29uc3QgdXBkYXRlID0gYXN5bmMgKCk9PntcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYoIXVOYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJEaWdpdGUgdW0gbm92byBub21lIGRlIHVzdWFyaW9cIik7XG4gICAgICAgICAgICBpZih1TmFtZS5sZW5ndGggPCA1IHx8IHVOYW1lLmxlbmd0aCA+IDE1KSB0aHJvdyBuZXcgRXJyb3IoXCJOb21lIGRlIHVzdcOhcmlvIGRldmUgb2J0ZXIgZGUgNSBhIDE1IGNhcmFjdMOpcmVzXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGUgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGNsaWVudC5pZCxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdU5hbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgVXBkYXRlUHJvZmlsZSh7cHJvZmlsZX0pXG5cbiAgICAgICAgICAgIGFsZXJ0KFwiVXN1w6FyaW8gZWRpdGFkbyBjb20gc3VjZXNzbyFcIilcblxuICAgICAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBbGVydERpYWxvZz5cbiAgICAgICAgICAgIDxBbGVydERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm15LTJcIj5FZGl0YXI8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQWxlcnREaWFsb2dUcmlnZ2VyPlxuICAgICAgICAgICAgPEFsZXJ0RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nVGl0bGU+RWRpdGFyIFBlcmZpbDwvQWxlcnREaWFsb2dUaXRsZT5cbiAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTk2IGgtMTIgYm9yZGVyLWItMiBib3JkZXItYmxhY2sgdGV4dC1zbSBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldik9PntzZXRVTmFtZShldi50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkZSB1c3XDoXJpb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9BbGVydERpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQWxlcnREaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxBbGVydERpYWxvZ0NhbmNlbD5DYW5jZWxhcjwvQWxlcnREaWFsb2dDYW5jZWw+XG4gICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nQWN0aW9uIG9uQ2xpY2s9e3VwZGF0ZX0+Q29uZmlybWFyPC9BbGVydERpYWxvZ0FjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0FsZXJ0RGlhbG9nRm9vdGVyPlxuICAgICAgICAgICAgPC9BbGVydERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDwvQWxlcnREaWFsb2c+XG5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJBbGVydERpYWxvZyIsIkFsZXJ0RGlhbG9nQWN0aW9uIiwiQWxlcnREaWFsb2dDYW5jZWwiLCJBbGVydERpYWxvZ0NvbnRlbnQiLCJBbGVydERpYWxvZ0Rlc2NyaXB0aW9uIiwiQWxlcnREaWFsb2dGb290ZXIiLCJBbGVydERpYWxvZ0hlYWRlciIsIkFsZXJ0RGlhbG9nVGl0bGUiLCJBbGVydERpYWxvZ1RyaWdnZXIiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIlVwZGF0ZVByb2ZpbGUiLCJFZGl0UHJvZmlsZSIsImNsaWVudCIsInVOYW1lIiwic2V0VU5hbWUiLCJ1cGRhdGUiLCJFcnJvciIsImxlbmd0aCIsInByb2ZpbGUiLCJpZCIsInVzZXJOYW1lIiwiYWxlcnQiLCJlcnJvciIsIm1lc3NhZ2UiLCJhc0NoaWxkIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXYiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/EditProfile.tsx\n"));

/***/ })

});