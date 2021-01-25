webpackHotUpdate_N_E("pages/templates",{

/***/ "./styles/modalIcon.ts":
/*!*****************************!*\
  !*** ./styles/modalIcon.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(_c = function _c(theme) {\n  var _modalIcon;\n\n  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    // button: {\n    // },\n    modalIcon: (_modalIcon = {\n      display: \"flex\",\n      flexDirection: \"column\",\n      margin: \"180px auto\",\n      maxWidth: \"700px\"\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, theme.breakpoints.down(\"md\"), {\n      margin: \"180px 10px\"\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, \"& > input\", {\n      height: \"50px\",\n      outline: \"none\",\n      border: \"none\",\n      padding: \"0 10px\",\n      fontSize: \"30px\",\n      \"& > input::placeholder\": {\n        fontSize: \"30px\"\n      }\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, \"& > textarea\", {\n      width: \"100%\",\n      outline: \"none\",\n      border: \"none\",\n      height: \"200px\",\n      padding: \"0 10px\",\n      fontSize: \"15px\",\n      \"& > textarea::placeholder\": {\n        fontSize: \"15px\"\n      }\n    }), _modalIcon),\n    navBlock: {\n      display: \"flex\",\n      justifyContent: \"space-between\",\n      alignItems: \"center\",\n      color: \"#4573f9\",\n      margin: \"1px 0 0 0\",\n      padding: \"10px\",\n      backgroundColor: \"white\",\n      \"& > ul\": {\n        padding: 0,\n        margin: 0,\n        display: \"flex\",\n        \"& > li\": {\n          listStyle: \"none\",\n          margin: \"0 5px\",\n          cursor: \"pointer\",\n          \"& > button\": {\n            border: \"none\",\n            outline: \"none\",\n            color: \"#4573f9\",\n            background: \"none\",\n            cursor: \"pointer\"\n          }\n        }\n      },\n      \"& > button\": {\n        margin: \"0 40px 0 0\",\n        border: \"none\",\n        outline: \"none\",\n        color: \"#4573f9\",\n        background: \"none\",\n        cursor: \"pointer\"\n      },\n      \"& > h1\": {\n        margin: \"0 5px 0 0\",\n        padding: \"0\",\n        textTransform: \"uppercase\",\n        fontSize: \"15px\",\n        fontWeight: \"bold\",\n        cursor: \"pointer\"\n      },\n      actionsBurger: {\n        position: \"relative\",\n        color: \"#347cff\",\n        cursor: \"pointer\"\n      },\n      actionsBurgerModal: {\n        display: \"none\"\n      },\n      actionsBurgerModalOpen: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        alignSelf: \"center\",\n        position: \"absolute\",\n        background: \"#fff\",\n        width: \"145px\",\n        transition: \"0.2s ease\",\n        top: \"-75px\",\n        transform: \"translateX(-38%)\",\n        boxShadow: \"-1px 2px 6px 0px rgba(0,0,0,0.2)\"\n      },\n      actionsBurgerIcon: {\n        color: \"#2e373b\",\n        cursor: \"pointer\"\n      },\n      actionsBurgerText: {\n        marginLeft: 10\n      },\n      modalBurgerCopytext: {\n        width: \"100%\",\n        display: \"flex\",\n        alignItems: \"center\",\n        cursor: \"pointer\",\n        padding: \"7px 5px 5px 15px\",\n        transition: \"0.2s ease\",\n        \"&:hover\": {\n          background: \"#eaefff\"\n        }\n      },\n      actionsBtnLink: {\n        background: \"transparent\",\n        color: \"#347cff\",\n        fontWeight: 700\n      }\n    }\n  });\n}));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"%default%$makeStyles\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21vZGFsSWNvbi50cz9iNWI4Il0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsSWNvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luIiwibWF4V2lkdGgiLCJicmVha3BvaW50cyIsImRvd24iLCJoZWlnaHQiLCJvdXRsaW5lIiwiYm9yZGVyIiwicGFkZGluZyIsImZvbnRTaXplIiwid2lkdGgiLCJuYXZCbG9jayIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdFN0eWxlIiwiY3Vyc29yIiwiYmFja2dyb3VuZCIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiYWN0aW9uc0J1cmdlciIsInBvc2l0aW9uIiwiYWN0aW9uc0J1cmdlck1vZGFsIiwiYWN0aW9uc0J1cmdlck1vZGFsT3BlbiIsImZsZXhXcmFwIiwiYWxpZ25TZWxmIiwidHJhbnNpdGlvbiIsInRvcCIsInRyYW5zZm9ybSIsImJveFNoYWRvdyIsImFjdGlvbnNCdXJnZXJJY29uIiwiYWN0aW9uc0J1cmdlclRleHQiLCJtYXJnaW5MZWZ0IiwibW9kYWxCdXJnZXJDb3B5dGV4dCIsImFjdGlvbnNCdG5MaW5rIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFZSxxRUFBQUEsb0VBQVUsTUFBQyxZQUFDQyxLQUFEO0FBQUE7O0FBQUEsU0FDeEJDLHNFQUFZLENBQUM7QUFDWDtBQUVBO0FBRUFDLGFBQVM7QUFDUEMsYUFBTyxFQUFFLE1BREY7QUFFUEMsbUJBQWEsRUFBRSxRQUZSO0FBR1BDLFlBQU0sRUFBRSxZQUhEO0FBSVBDLGNBQVEsRUFBRTtBQUpILDZHQUtOTixLQUFLLENBQUNPLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBTE0sRUFLeUI7QUFDOUJILFlBQU0sRUFBRTtBQURzQixLQUx6Qix5R0FRUCxXQVJP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O0FBREg7QUFQUSxPQXBFYjtBQStFUmlCLG9CQUFjLEVBQUU7QUFDZGpCLGtCQUFVLEVBQUUsYUFERTtBQUVkSixhQUFLLEVBQUUsU0FGTztBQUdkTSxrQkFBVSxFQUFFO0FBSEU7QUEvRVI7QUFuQ0MsR0FBRCxDQURZO0FBQUEsQ0FBRCxDQUF6QiIsImZpbGUiOiIuL3N0eWxlcy9tb2RhbEljb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICAvLyBidXR0b246IHtcblxuICAgIC8vIH0sXG5cbiAgICBtb2RhbEljb246IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIG1hcmdpbjogXCIxODBweCBhdXRvXCIsXG4gICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcbiAgICAgICAgbWFyZ2luOiBcIjE4MHB4IDEwcHhcIixcbiAgICAgIH0sXG4gICAgICBcIiYgPiBpbnB1dFwiOiB7XG4gICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICBwYWRkaW5nOiBcIjAgMTBweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICAgIFwiJiA+IGlucHV0OjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFwiJiA+IHRleHRhcmVhXCI6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMCAxMHB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgXCImID4gdGV4dGFyZWE6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbmF2QmxvY2s6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGNvbG9yOiBcIiM0NTczZjlcIixcbiAgICAgIG1hcmdpbjogXCIxcHggMCAwIDBcIixcbiAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICBcIiYgPiB1bFwiOiB7XG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIFwiJiA+IGxpXCI6IHtcbiAgICAgICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIDVweFwiLFxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgXCImID4gYnV0dG9uXCI6IHtcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0NTczZjlcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFwiJiA+IGJ1dHRvblwiOiB7XG4gICAgICAgIG1hcmdpbjogXCIwIDQwcHggMCAwXCIsXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBjb2xvcjogXCIjNDU3M2Y5XCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgfSxcbiAgICAgIFwiJiA+IGgxXCI6IHtcbiAgICAgICAgbWFyZ2luOiBcIjAgNXB4IDAgMFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIH0sXG4gICAgICBhY3Rpb25zQnVyZ2VyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIGNvbG9yOiBcIiMzNDdjZmZcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIH0sXG4gICAgICBhY3Rpb25zQnVyZ2VyTW9kYWw6IHtcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICB9LFxuICAgICAgYWN0aW9uc0J1cmdlck1vZGFsT3Blbjoge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgICAgICB3aWR0aDogXCIxNDVweFwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcIjAuMnMgZWFzZVwiLFxuICAgICAgICB0b3A6IFwiLTc1cHhcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTM4JSlcIixcbiAgICAgICAgYm94U2hhZG93OiBcIi0xcHggMnB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjIpXCIsXG4gICAgICB9LFxuICAgICAgYWN0aW9uc0J1cmdlckljb246IHtcbiAgICAgICAgY29sb3I6IFwiIzJlMzczYlwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgfSxcbiAgICAgIGFjdGlvbnNCdXJnZXJUZXh0OiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgICAgfSxcbiAgICAgIG1vZGFsQnVyZ2VyQ29weXRleHQ6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgcGFkZGluZzogXCI3cHggNXB4IDVweCAxNXB4XCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwiMC4ycyBlYXNlXCIsXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjZWFlZmZmXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYWN0aW9uc0J0bkxpbms6IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBjb2xvcjogXCIjMzQ3Y2ZmXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/modalIcon.ts\n");

/***/ })

})