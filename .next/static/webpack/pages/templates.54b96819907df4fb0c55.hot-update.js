webpackHotUpdate_N_E("pages/templates",{

/***/ "./styles/modalWindow.ts":
/*!*******************************!*\
  !*** ./styles/modalWindow.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(_c = function _c(theme) {\n  var _modalIcon;\n\n  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    // button: {\n    // },\n    modalIcon: (_modalIcon = {\n      display: \"flex\",\n      flexDirection: \"column\",\n      margin: \"180px auto\",\n      maxWidth: \"700px\"\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, theme.breakpoints.down(\"md\"), {\n      margin: \"180px 10px\"\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, \"& > input\", {\n      height: \"50px\",\n      outline: \"none\",\n      border: \"none\",\n      padding: \"0 10px\",\n      fontSize: \"30px\",\n      \"& > input::placeholder\": {\n        fontSize: \"30px\"\n      }\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, \"& > textarea\", {\n      width: \"100%\",\n      outline: \"none\",\n      border: \"none\",\n      height: \"200px\",\n      padding: \"0 10px\",\n      fontSize: \"15px\",\n      \"& > textarea::placeholder\": {\n        fontSize: \"15px\"\n      }\n    }), _modalIcon),\n    navBlock: {\n      display: \"flex\",\n      justifyContent: \"space-between\",\n      alignItems: \"center\",\n      color: \"#4573f9\",\n      margin: \"1px 0 0 0\",\n      padding: \"10px\",\n      backgroundColor: \"white\",\n      \"& > ul\": {\n        padding: 0,\n        margin: 0,\n        display: \"flex\",\n        \"& > li\": {\n          listStyle: \"none\",\n          margin: \"0 5px\",\n          cursor: \"pointer\",\n          \"& > button\": {\n            border: \"none\",\n            outline: \"none\",\n            color: \"#4573f9\",\n            background: \"none\",\n            cursor: \"pointer\"\n          }\n        }\n      },\n      \"& > button\": {\n        margin: \"0 40px 0 0\",\n        border: \"none\",\n        outline: \"none\",\n        color: \"#4573f9\",\n        background: \"none\",\n        cursor: \"pointer\"\n      },\n      \"& > h1\": {\n        margin: \"0 5px 0 0\",\n        padding: \"0\",\n        textTransform: \"uppercase\",\n        fontSize: \"15px\",\n        fontWeight: \"bold\",\n        cursor: \"pointer\"\n      }\n    },\n    actionsBurgerModal: {\n      display: \"none\"\n    },\n    actionsBurgerModalOpen: {\n      display: \"flex\",\n      flexWrap: \"wrap\",\n      alignSelf: \"center\",\n      position: \"absolute\",\n      background: \"#fff\",\n      width: \"145px\",\n      transition: \"0.2s ease\",\n      top: \"-50px\",\n      transform: \"translateX(-38%)\",\n      boxShadow: \"-1px 2px 6px 0px rgba(0,0,0,0.2)\"\n    },\n    actionsBurgerIcon: {\n      color: \"#2e373b\",\n      cursor: \"pointer\"\n    },\n    actionsBurgerText: {\n      marginLeft: 10\n    },\n    modalBurgerCopytext: {\n      width: \"100%\",\n      display: \"flex\",\n      alignItems: \"center\",\n      cursor: \"pointer\",\n      padding: \"7px 5px 5px 15px\",\n      transition: \"0.2s ease\",\n      \"&:hover\": {\n        background: \"#eaefff\"\n      }\n    },\n    actionsBtnLink: {\n      background: \"transparent\",\n      // color: \"#347cff\",\n      fontWeight: 700\n    },\n    actionsBurger: {\n      color: \"#347cff\",\n      cursor: \"pointer\"\n    }\n  });\n}));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"%default%$makeStyles\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21vZGFsV2luZG93LnRzPzQyOTkiXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibW9kYWxJY29uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJtYXhXaWR0aCIsImJyZWFrcG9pbnRzIiwiZG93biIsImhlaWdodCIsIm91dGxpbmUiLCJib3JkZXIiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJ3aWR0aCIsIm5hdkJsb2NrIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0U3R5bGUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJhY3Rpb25zQnVyZ2VyTW9kYWwiLCJhY3Rpb25zQnVyZ2VyTW9kYWxPcGVuIiwiZmxleFdyYXAiLCJhbGlnblNlbGYiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciLCJhY3Rpb25zQnVyZ2VySWNvbiIsImFjdGlvbnNCdXJnZXJUZXh0IiwibWFyZ2luTGVmdCIsIm1vZGFsQnVyZ2VyQ29weXRleHQiLCJhY3Rpb25zQnRuTGluayIsImFjdGlvbnNCdXJnZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVlLHFFQUFBQSxvRUFBVSxNQUFDLFlBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUN4QkMsc0VBQVksQ0FBQztBQUNYO0FBRUE7QUFFQUMsYUFBUztBQUNQQyxhQUFPLEVBQUUsTUFERjtBQUVQQyxtQkFBYSxFQUFFLFFBRlI7QUFHUEMsWUFBTSxFQUFFLFlBSEQ7QUFJUEMsY0FBUSxFQUFFO0FBSkgsNkdBS05OLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FMTSxFQUt5QjtBQUM5QkgsWUFBTSxFQUFFO0FBRHNCLEtBTHpCLHlHQVFQLFdB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S0EvR0w7QUFvSFhlLGlCQUFhLEVBQUU7QUFDYnJCLFdBQUssRUFBRSxTQURNO0FBRWJHLFlBQU0sRUFBRTtBQUZLO0FBcEhKLEdBQUQsQ0FEWTtBQUFBLENBQUQsQ0FBekIiLCJmaWxlIjoiLi9zdHlsZXMvbW9kYWxXaW5kb3cudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICAvLyBidXR0b246IHtcblxuICAgIC8vIH0sXG5cbiAgICBtb2RhbEljb246IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIG1hcmdpbjogXCIxODBweCBhdXRvXCIsXG4gICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcbiAgICAgICAgbWFyZ2luOiBcIjE4MHB4IDEwcHhcIixcbiAgICAgIH0sXG4gICAgICBcIiYgPiBpbnB1dFwiOiB7XG4gICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICBwYWRkaW5nOiBcIjAgMTBweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICAgIFwiJiA+IGlucHV0OjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFwiJiA+IHRleHRhcmVhXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMCAxMHB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgXCImID4gdGV4dGFyZWE6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbmF2QmxvY2s6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGNvbG9yOiBcIiM0NTczZjlcIixcbiAgICAgIG1hcmdpbjogXCIxcHggMCAwIDBcIixcbiAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG5cbiAgICAgIFwiJiA+IHVsXCI6IHtcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgXCImID4gbGlcIjoge1xuICAgICAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjAgNXB4XCIsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICBcIiYgPiBidXR0b25cIjoge1xuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzQ1NzNmOVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgXCImID4gYnV0dG9uXCI6IHtcbiAgICAgICAgbWFyZ2luOiBcIjAgNDBweCAwIDBcIixcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgIGNvbG9yOiBcIiM0NTczZjlcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICB9LFxuICAgICAgXCImID4gaDFcIjoge1xuICAgICAgICBtYXJnaW46IFwiMCA1cHggMCAwXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGFjdGlvbnNCdXJnZXJNb2RhbDoge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgICBhY3Rpb25zQnVyZ2VyTW9kYWxPcGVuOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICAgIHdpZHRoOiBcIjE0NXB4XCIsXG4gICAgICB0cmFuc2l0aW9uOiBcIjAuMnMgZWFzZVwiLFxuICAgICAgdG9wOiBcIi01MHB4XCIsXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMzglKVwiLFxuICAgICAgYm94U2hhZG93OiBcIi0xcHggMnB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjIpXCIsXG4gICAgfSxcbiAgICBhY3Rpb25zQnVyZ2VySWNvbjoge1xuICAgICAgY29sb3I6IFwiIzJlMzczYlwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICAgIGFjdGlvbnNCdXJnZXJUZXh0OiB7XG4gICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICB9LFxuICAgIG1vZGFsQnVyZ2VyQ29weXRleHQ6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjdweCA1cHggNXB4IDE1cHhcIixcbiAgICAgIHRyYW5zaXRpb246IFwiMC4ycyBlYXNlXCIsXG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNlYWVmZmZcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhY3Rpb25zQnRuTGluazoge1xuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgLy8gY29sb3I6IFwiIzM0N2NmZlwiLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgIH0sXG4gICAgYWN0aW9uc0J1cmdlcjoge1xuICAgICAgY29sb3I6IFwiIzM0N2NmZlwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9KVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/modalWindow.ts\n");

/***/ })

})