"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-callback-ref";
exports.ids = ["vendor-chunks/use-callback-ref"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignRef: () => (/* binding */ assignRef)\n/* harmony export */ });\n/**\n * Assigns a value for a given ref, no matter of the ref format\n * @param {RefObject} ref - a callback function or ref object\n * @param value - a new value\n *\n * @see https://github.com/theKashey/use-callback-ref#assignref\n * @example\n * const refObject = useRef();\n * const refFn = (ref) => {....}\n *\n * assignRef(refObject, \"refValue\");\n * assignRef(refFn, \"refValue\");\n */ function assignRef(ref, value) {\n    if (typeof ref === \"function\") {\n        ref(value);\n    } else if (ref) {\n        ref.current = value;\n    }\n    return ref;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9hc3NpZ25SZWYuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7Q0FZQyxHQUNNLFNBQVNBLFVBQVVDLEdBQUcsRUFBRUMsS0FBSztJQUNoQyxJQUFJLE9BQU9ELFFBQVEsWUFBWTtRQUMzQkEsSUFBSUM7SUFDUixPQUNLLElBQUlELEtBQUs7UUFDVkEsSUFBSUUsT0FBTyxHQUFHRDtJQUNsQjtJQUNBLE9BQU9EO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYW5rXzIuMC8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L2Fzc2lnblJlZi5qcz8wYTQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXNzaWducyBhIHZhbHVlIGZvciBhIGdpdmVuIHJlZiwgbm8gbWF0dGVyIG9mIHRoZSByZWYgZm9ybWF0XG4gKiBAcGFyYW0ge1JlZk9iamVjdH0gcmVmIC0gYSBjYWxsYmFjayBmdW5jdGlvbiBvciByZWYgb2JqZWN0XG4gKiBAcGFyYW0gdmFsdWUgLSBhIG5ldyB2YWx1ZVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI2Fzc2lnbnJlZlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHJlZk9iamVjdCA9IHVzZVJlZigpO1xuICogY29uc3QgcmVmRm4gPSAocmVmKSA9PiB7Li4uLn1cbiAqXG4gKiBhc3NpZ25SZWYocmVmT2JqZWN0LCBcInJlZlZhbHVlXCIpO1xuICogYXNzaWduUmVmKHJlZkZuLCBcInJlZlZhbHVlXCIpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduUmVmKHJlZiwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZWYodmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZjtcbn1cbiJdLCJuYW1lcyI6WyJhc3NpZ25SZWYiLCJyZWYiLCJ2YWx1ZSIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMergeRefs: () => (/* binding */ useMergeRefs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js\");\n/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js\");\n\n\n\nvar useIsomorphicLayoutEffect =  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;\nvar currentValues = new WeakMap();\n/**\n * Merges two or more refs together providing a single interface to set their value\n * @param {RefObject|Ref} refs\n * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}\n *\n * @see {@link mergeRefs} a version without buit-in memoization\n * @see https://github.com/theKashey/use-callback-ref#usemergerefs\n * @example\n * const Component = React.forwardRef((props, ref) => {\n *   const ownRef = useRef();\n *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together\n *   return <div ref={domRef}>...</div>\n * }\n */ function useMergeRefs(refs, defaultValue) {\n    var callbackRef = (0,_useRef__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(defaultValue || null, function(newValue) {\n        return refs.forEach(function(ref) {\n            return (0,_assignRef__WEBPACK_IMPORTED_MODULE_2__.assignRef)(ref, newValue);\n        });\n    });\n    // handle refs changes - added or removed\n    useIsomorphicLayoutEffect(function() {\n        var oldValue = currentValues.get(callbackRef);\n        if (oldValue) {\n            var prevRefs_1 = new Set(oldValue);\n            var nextRefs_1 = new Set(refs);\n            var current_1 = callbackRef.current;\n            prevRefs_1.forEach(function(ref) {\n                if (!nextRefs_1.has(ref)) {\n                    (0,_assignRef__WEBPACK_IMPORTED_MODULE_2__.assignRef)(ref, null);\n                }\n            });\n            nextRefs_1.forEach(function(ref) {\n                if (!prevRefs_1.has(ref)) {\n                    (0,_assignRef__WEBPACK_IMPORTED_MODULE_2__.assignRef)(ref, current_1);\n                }\n            });\n        }\n        currentValues.set(callbackRef, refs);\n    }, [\n        refs\n    ]);\n    return callbackRef;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VNZXJnZVJlZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUNTO0FBQ0U7QUFDMUMsSUFBSUcsNEJBQTRCLE1BQWtCLEdBQWNILENBQXFCLEdBQUdBLDRDQUFlO0FBQ3ZHLElBQUlNLGdCQUFnQixJQUFJQztBQUN4Qjs7Ozs7Ozs7Ozs7OztDQWFDLEdBQ00sU0FBU0MsYUFBYUMsSUFBSSxFQUFFQyxZQUFZO0lBQzNDLElBQUlDLGNBQWNULHVEQUFjQSxDQUFDUSxnQkFBZ0IsTUFBTSxTQUFVRSxRQUFRO1FBQ3JFLE9BQU9ILEtBQUtJLE9BQU8sQ0FBQyxTQUFVQyxHQUFHO1lBQUksT0FBT2IscURBQVNBLENBQUNhLEtBQUtGO1FBQVc7SUFDMUU7SUFDQSx5Q0FBeUM7SUFDekNULDBCQUEwQjtRQUN0QixJQUFJWSxXQUFXVCxjQUFjVSxHQUFHLENBQUNMO1FBQ2pDLElBQUlJLFVBQVU7WUFDVixJQUFJRSxhQUFhLElBQUlDLElBQUlIO1lBQ3pCLElBQUlJLGFBQWEsSUFBSUQsSUFBSVQ7WUFDekIsSUFBSVcsWUFBWVQsWUFBWVUsT0FBTztZQUNuQ0osV0FBV0osT0FBTyxDQUFDLFNBQVVDLEdBQUc7Z0JBQzVCLElBQUksQ0FBQ0ssV0FBV0csR0FBRyxDQUFDUixNQUFNO29CQUN0QmIscURBQVNBLENBQUNhLEtBQUs7Z0JBQ25CO1lBQ0o7WUFDQUssV0FBV04sT0FBTyxDQUFDLFNBQVVDLEdBQUc7Z0JBQzVCLElBQUksQ0FBQ0csV0FBV0ssR0FBRyxDQUFDUixNQUFNO29CQUN0QmIscURBQVNBLENBQUNhLEtBQUtNO2dCQUNuQjtZQUNKO1FBQ0o7UUFDQWQsY0FBY2lCLEdBQUcsQ0FBQ1osYUFBYUY7SUFDbkMsR0FBRztRQUFDQTtLQUFLO0lBQ1QsT0FBT0U7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbmtfMi4wLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdXNlTWVyZ2VSZWYuanM/OWY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhc3NpZ25SZWYgfSBmcm9tICcuL2Fzc2lnblJlZic7XG5pbXBvcnQgeyB1c2VDYWxsYmFja1JlZiB9IGZyb20gJy4vdXNlUmVmJztcbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG52YXIgY3VycmVudFZhbHVlcyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIE1lcmdlcyB0d28gb3IgbW9yZSByZWZzIHRvZ2V0aGVyIHByb3ZpZGluZyBhIHNpbmdsZSBpbnRlcmZhY2UgdG8gc2V0IHRoZWlyIHZhbHVlXG4gKiBAcGFyYW0ge1JlZk9iamVjdHxSZWZ9IHJlZnNcbiAqIEByZXR1cm5zIHtNdXRhYmxlUmVmT2JqZWN0fSAtIGEgbmV3IHJlZiwgd2hpY2ggdHJhbnNsYXRlcyBhbGwgY2hhbmdlcyB0byB7cmVmc31cbiAqXG4gKiBAc2VlIHtAbGluayBtZXJnZVJlZnN9IGEgdmVyc2lvbiB3aXRob3V0IGJ1aXQtaW4gbWVtb2l6YXRpb25cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI3VzZW1lcmdlcmVmc1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgY29uc3Qgb3duUmVmID0gdXNlUmVmKCk7XG4gKiAgIGNvbnN0IGRvbVJlZiA9IHVzZU1lcmdlUmVmcyhbcmVmLCBvd25SZWZdKTsgLy8g8J+RiCBtZXJnZSB0b2dldGhlclxuICogICByZXR1cm4gPGRpdiByZWY9e2RvbVJlZn0+Li4uPC9kaXY+XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZVJlZnMocmVmcywgZGVmYXVsdFZhbHVlKSB7XG4gICAgdmFyIGNhbGxiYWNrUmVmID0gdXNlQ2FsbGJhY2tSZWYoZGVmYXVsdFZhbHVlIHx8IG51bGwsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHsgcmV0dXJuIGFzc2lnblJlZihyZWYsIG5ld1ZhbHVlKTsgfSk7XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIHJlZnMgY2hhbmdlcyAtIGFkZGVkIG9yIHJlbW92ZWRcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gY3VycmVudFZhbHVlcy5nZXQoY2FsbGJhY2tSZWYpO1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwcmV2UmVmc18xID0gbmV3IFNldChvbGRWYWx1ZSk7XG4gICAgICAgICAgICB2YXIgbmV4dFJlZnNfMSA9IG5ldyBTZXQocmVmcyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudF8xID0gY2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgICAgIHByZXZSZWZzXzEuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0UmVmc18xLmhhcyhyZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnblJlZihyZWYsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV4dFJlZnNfMS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZSZWZzXzEuaGFzKHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduUmVmKHJlZiwgY3VycmVudF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VmFsdWVzLnNldChjYWxsYmFja1JlZiwgcmVmcyk7XG4gICAgfSwgW3JlZnNdKTtcbiAgICByZXR1cm4gY2FsbGJhY2tSZWY7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJhc3NpZ25SZWYiLCJ1c2VDYWxsYmFja1JlZiIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJjdXJyZW50VmFsdWVzIiwiV2Vha01hcCIsInVzZU1lcmdlUmVmcyIsInJlZnMiLCJkZWZhdWx0VmFsdWUiLCJjYWxsYmFja1JlZiIsIm5ld1ZhbHVlIiwiZm9yRWFjaCIsInJlZiIsIm9sZFZhbHVlIiwiZ2V0IiwicHJldlJlZnNfMSIsIlNldCIsIm5leHRSZWZzXzEiLCJjdXJyZW50XzEiLCJjdXJyZW50IiwiaGFzIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/useMergeRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * creates a MutableRef with ref change callback\n * @param initialValue - initial ref value\n * @param {Function} callback - a callback to run when value changes\n *\n * @example\n * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);\n * ref.current = 1;\n * // prints 0 -> 1\n *\n * @see https://reactjs.org/docs/hooks-reference.html#useref\n * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref\n * @returns {MutableRefObject}\n */ function useCallbackRef(initialValue, callback) {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function() {\n        return {\n            // value\n            value: initialValue,\n            // last callback\n            callback: callback,\n            // \"memoized\" public interface\n            facade: {\n                get current () {\n                    return ref.value;\n                },\n                set current (value){\n                    var last = ref.value;\n                    if (last !== value) {\n                        ref.value = value;\n                        ref.callback(value, last);\n                    }\n                }\n            }\n        };\n    })[0];\n    // update callback\n    ref.callback = callback;\n    return ref.facade;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VSZWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FDTSxTQUFTQyxlQUFlQyxZQUFZLEVBQUVDLFFBQVE7SUFDakQsSUFBSUMsTUFBTUosK0NBQVFBLENBQUM7UUFBYyxPQUFRO1lBQ3JDLFFBQVE7WUFDUkssT0FBT0g7WUFDUCxnQkFBZ0I7WUFDaEJDLFVBQVVBO1lBQ1YsOEJBQThCO1lBQzlCRyxRQUFRO2dCQUNKLElBQUlDLFdBQVU7b0JBQ1YsT0FBT0gsSUFBSUMsS0FBSztnQkFDcEI7Z0JBQ0EsSUFBSUUsU0FBUUYsTUFBTztvQkFDZixJQUFJRyxPQUFPSixJQUFJQyxLQUFLO29CQUNwQixJQUFJRyxTQUFTSCxPQUFPO3dCQUNoQkQsSUFBSUMsS0FBSyxHQUFHQTt3QkFDWkQsSUFBSUQsUUFBUSxDQUFDRSxPQUFPRztvQkFDeEI7Z0JBQ0o7WUFDSjtRQUNKO0lBQUksRUFBRSxDQUFDLEVBQUU7SUFDVCxrQkFBa0I7SUFDbEJKLElBQUlELFFBQVEsR0FBR0E7SUFDZixPQUFPQyxJQUFJRSxNQUFNO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFua18yLjAvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VSZWYuanM/Mzg5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogY3JlYXRlcyBhIE11dGFibGVSZWYgd2l0aCByZWYgY2hhbmdlIGNhbGxiYWNrXG4gKiBAcGFyYW0gaW5pdGlhbFZhbHVlIC0gaW5pdGlhbCByZWYgdmFsdWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gYSBjYWxsYmFjayB0byBydW4gd2hlbiB2YWx1ZSBjaGFuZ2VzXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHJlZiA9IHVzZUNhbGxiYWNrUmVmKDAsIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IGNvbnNvbGUubG9nKG9sZFZhbHVlLCAnLT4nLCBuZXdWYWx1ZSk7XG4gKiByZWYuY3VycmVudCA9IDE7XG4gKiAvLyBwcmludHMgMCAtPiAxXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjdXNlcmVmXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiN1c2VjYWxsYmFja3JlZi0tLXRvLXJlcGxhY2UtcmVhY3R1c2VyZWZcbiAqIEByZXR1cm5zIHtNdXRhYmxlUmVmT2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWYoaW5pdGlhbFZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciByZWYgPSB1c2VTdGF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgICAgICAvLyB2YWx1ZVxuICAgICAgICB2YWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAvLyBsYXN0IGNhbGxiYWNrXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgLy8gXCJtZW1vaXplZFwiIHB1YmxpYyBpbnRlcmZhY2VcbiAgICAgICAgZmFjYWRlOiB7XG4gICAgICAgICAgICBnZXQgY3VycmVudCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCBjdXJyZW50KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3QgPSByZWYudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZWYuY2FsbGJhY2sodmFsdWUsIGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7IH0pWzBdO1xuICAgIC8vIHVwZGF0ZSBjYWxsYmFja1xuICAgIHJlZi5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHJldHVybiByZWYuZmFjYWRlO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2tSZWYiLCJpbml0aWFsVmFsdWUiLCJjYWxsYmFjayIsInJlZiIsInZhbHVlIiwiZmFjYWRlIiwiY3VycmVudCIsImxhc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js\n");

/***/ })

};
;