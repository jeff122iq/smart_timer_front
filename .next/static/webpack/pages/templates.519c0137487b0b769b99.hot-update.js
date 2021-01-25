webpackHotUpdate_N_E("pages/templates",{

/***/ "./styles/modalWindow.ts":
/*!*******************************!*\
  !*** ./styles/modalWindow.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(_c = function _c(theme) {\n  var _modalIcon;\n\n  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    // button: {\n    // },\n    modalIcon: (_modalIcon = {\n      display: \"flex\",\n      flexDirection: \"column\",\n      margin: \"180px auto\",\n      maxWidth: \"700px\"\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, theme.breakpoints.down(\"md\"), {\n      margin: \"180px 10px\"\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, \"& > input\", {\n      height: \"50px\",\n      outline: \"none\",\n      border: \"none\",\n      padding: \"0 10px\",\n      fontSize: \"30px\",\n      \"& > input::placeholder\": {\n        fontSize: \"30px\"\n      }\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, \"& > textarea\", {\n      width: \"100%\",\n      outline: \"none\",\n      border: \"none\",\n      height: \"200px\",\n      padding: \"0 10px\",\n      fontSize: \"15px\",\n      \"& > textarea::placeholder\": {\n        fontSize: \"15px\"\n      }\n    }), _modalIcon),\n    navBlock: {\n      display: \"flex\",\n      justifyContent: \"space-between\",\n      alignItems: \"center\",\n      color: \"#4573f9\",\n      margin: \"1px 0 0 0\",\n      padding: \"10px\",\n      backgroundColor: \"white\",\n      \"& > ul\": {\n        padding: 0,\n        margin: 0,\n        display: \"flex\",\n        \"& > li\": {\n          listStyle: \"none\",\n          margin: \"0 5px\",\n          cursor: \"pointer\",\n          \"& > button\": {\n            border: \"none\",\n            outline: \"none\",\n            color: \"#4573f9\",\n            background: \"none\",\n            cursor: \"pointer\"\n          }\n        }\n      },\n      \"& > button\": {\n        margin: \"0 40px 0 0\",\n        border: \"none\",\n        outline: \"none\",\n        color: \"#4573f9\",\n        background: \"none\",\n        cursor: \"pointer\"\n      },\n      \"& > h1\": {\n        margin: \"0 5px 0 0\",\n        padding: \"0\",\n        textTransform: \"uppercase\",\n        fontSize: \"15px\",\n        fontWeight: \"bold\",\n        cursor: \"pointer\"\n      }\n    },\n    actionsBurgerModal: {\n      display: \"none\"\n    },\n    actionsBurgerModalOpen: {\n      display: \"flex\",\n      flexWrap: \"wrap\",\n      alignSelf: \"center\",\n      position: \"absolute\",\n      background: \"#fff\",\n      width: \"145px\",\n      transition: \"0.2s ease\",\n      top: \"-75px\",\n      transform: \"translateX(-38%)\",\n      boxShadow: \"-1px 2px 6px 0px rgba(0,0,0,0.2)\"\n    },\n    actionsBurgerIcon: {\n      color: \"#2e373b\",\n      cursor: \"pointer\"\n    },\n    actionsBurgerText: {\n      marginLeft: 10\n    },\n    modalBurgerCopytext: {\n      width: \"100%\",\n      display: \"flex\",\n      alignItems: \"center\",\n      cursor: \"pointer\",\n      padding: \"7px 5px 5px 15px\",\n      transition: \"0.2s ease\",\n      \"&:hover\": {\n        background: \"#eaefff\"\n      }\n    },\n    actionsBtnLink: {\n      background: \"transparent\",\n      color: \"#347cff\",\n      fontWeight: 700\n    },\n    actionsBurger: {\n      color: \"#347cff\",\n      cursor: \"pointer\"\n    }\n  });\n}));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"%default%$makeStyles\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21vZGFsSWNvbi50cz9iNWI4Il0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsSWNvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luIiwibWF4V2lkdGgiLCJicmVha3BvaW50cyIsImRvd24iLCJoZWlnaHQiLCJvdXRsaW5lIiwiYm9yZGVyIiwicGFkZGluZyIsImZvbnRTaXplIiwid2lkdGgiLCJuYXZCbG9jayIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdFN0eWxlIiwiY3Vyc29yIiwiYmFja2dyb3VuZCIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiYWN0aW9uc0J1cmdlck1vZGFsIiwiYWN0aW9uc0J1cmdlck1vZGFsT3BlbiIsImZsZXhXcmFwIiwiYWxpZ25TZWxmIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtIiwiYm94U2hhZG93IiwiYWN0aW9uc0J1cmdlckljb24iLCJhY3Rpb25zQnVyZ2VyVGV4dCIsIm1hcmdpbkxlZnQiLCJtb2RhbEJ1cmdlckNvcHl0ZXh0IiwiYWN0aW9uc0J0bkxpbmsiLCJhY3Rpb25zQnVyZ2VyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFZSxxRUFBQUEsb0VBQVUsTUFBQyxZQUFDQyxLQUFEO0FBQUE7O0FBQUEsU0FDeEJDLHNFQUFZLENBQUM7QUFDWDtBQUVBO0FBRUFDLGFBQVM7QUFDUEMsYUFBTyxFQUFFLE1BREY7QUFFUEMsbUJBQWEsRUFBRSxRQUZSO0FBR1BDLFlBQU0sRUFBRSxZQUhEO0FBSVBDLGNBQVEsRUFBRTtBQUpILDZHQUtOTixLQUFLLENBQUNPLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBTE0sRUFLeUI7QUFDOUJILFlBQU0sRUFBRTtBQURzQixLQUx6Qix5R0FRUCxXQVJP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QUFVLEVBQUU7QUFIRSxLQS9HTDtBQW9IWGUsaUJBQWEsRUFBRTtBQUNickIsV0FBSyxFQUFFLFNBRE07QUFFYkcsWUFBTSxFQUFFO0FBRks7QUFwSEosR0FBRCxDQURZO0FBQUEsQ0FBRCxDQUF6QiIsImZpbGUiOiIuL3N0eWxlcy9tb2RhbFdpbmRvdy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIC8vIGJ1dHRvbjoge1xuXG4gICAgLy8gfSxcblxuICAgIG1vZGFsSWNvbjoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgbWFyZ2luOiBcIjE4MHB4IGF1dG9cIixcbiAgICAgIG1heFdpZHRoOiBcIjcwMHB4XCIsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xuICAgICAgICBtYXJnaW46IFwiMTgwcHggMTBweFwiLFxuICAgICAgfSxcbiAgICAgIFwiJiA+IGlucHV0XCI6IHtcbiAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMCAxMHB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgICAgXCImID4gaW5wdXQ6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgXCImID4gdGV4dGFyZWFcIjoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcbiAgICAgICAgcGFkZGluZzogXCIwIDEwcHhcIixcbiAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICBcIiYgPiB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBuYXZCbG9jazoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgY29sb3I6IFwiIzQ1NzNmOVwiLFxuICAgICAgbWFyZ2luOiBcIjFweCAwIDAgMFwiLFxuICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblxuICAgICAgXCImID4gdWxcIjoge1xuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBcIiYgPiBsaVwiOiB7XG4gICAgICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCA1cHhcIixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIFwiJiA+IGJ1dHRvblwiOiB7XG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjNDU3M2Y5XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBcIiYgPiBidXR0b25cIjoge1xuICAgICAgICBtYXJnaW46IFwiMCA0MHB4IDAgMFwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgY29sb3I6IFwiIzQ1NzNmOVwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIH0sXG4gICAgICBcIiYgPiBoMVwiOiB7XG4gICAgICAgIG1hcmdpbjogXCIwIDVweCAwIDBcIixcbiAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYWN0aW9uc0J1cmdlck1vZGFsOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICAgIGFjdGlvbnNCdXJnZXJNb2RhbE9wZW46IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgICAgd2lkdGg6IFwiMTQ1cHhcIixcbiAgICAgIHRyYW5zaXRpb246IFwiMC4ycyBlYXNlXCIsXG4gICAgICB0b3A6IFwiLTc1cHhcIixcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0zOCUpXCIsXG4gICAgICBib3hTaGFkb3c6IFwiLTFweCAycHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMilcIixcbiAgICB9LFxuICAgIGFjdGlvbnNCdXJnZXJJY29uOiB7XG4gICAgICBjb2xvcjogXCIjMmUzNzNiXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gICAgYWN0aW9uc0J1cmdlclRleHQ6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgIH0sXG4gICAgbW9kYWxCdXJnZXJDb3B5dGV4dDoge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IFwiN3B4IDVweCA1cHggMTVweFwiLFxuICAgICAgdHJhbnNpdGlvbjogXCIwLjJzIGVhc2VcIixcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2VhZWZmZlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGFjdGlvbnNCdG5MaW5rOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCIjMzQ3Y2ZmXCIsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgfSxcbiAgICBhY3Rpb25zQnVyZ2VyOiB7XG4gICAgICBjb2xvcjogXCIjMzQ3Y2ZmXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0pXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/modalWindow.ts\n");

/***/ })

})