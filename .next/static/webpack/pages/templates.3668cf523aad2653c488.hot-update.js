webpackHotUpdate_N_E("pages/templates",{

/***/ "./styles/modalWindow.ts":
/*!*******************************!*\
  !*** ./styles/modalWindow.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(_c = function _c(theme) {\n  var _modalIcon;\n\n  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    // button: {\n    // },\n    modalIcon: (_modalIcon = {\n      display: \"flex\",\n      flexDirection: \"column\",\n      margin: \"180px auto\",\n      maxWidth: \"700px\"\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, theme.breakpoints.down(\"md\"), {\n      margin: \"180px 10px\"\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, \"& > input\", {\n      height: \"50px\",\n      outline: \"none\",\n      border: \"none\",\n      padding: \"0 10px\",\n      fontSize: \"30px\",\n      \"& > input::placeholder\": {\n        fontSize: \"30px\"\n      }\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modalIcon, \"& > textarea\", {\n      width: \"100%\",\n      outline: \"none\",\n      border: \"none\",\n      height: \"200px\",\n      padding: \"0 10px\",\n      fontSize: \"15px\",\n      resize: \"none\",\n      \"& > textarea::placeholder\": {\n        fontSize: \"15px\"\n      },\n      \"& > textarea::scrollbar\": {\n        width: \"0\"\n      }\n    }), _modalIcon),\n    navBlock: {\n      display: \"flex\",\n      justifyContent: \"space-between\",\n      alignItems: \"center\",\n      color: \"#4573f9\",\n      borderTop: \"2px solid silver\",\n      padding: \"10px\",\n      backgroundColor: \"white\",\n      \"& > ul\": {\n        padding: 0,\n        margin: 0,\n        display: \"flex\",\n        \"& > li\": {\n          listStyle: \"none\",\n          margin: \"0 5px\",\n          cursor: \"pointer\",\n          \"& > button\": {\n            border: \"none\",\n            outline: \"none\",\n            color: \"#4573f9\",\n            background: \"none\",\n            cursor: \"pointer\"\n          }\n        }\n      },\n      \"& > button\": {\n        margin: \"0 40px 0 0\",\n        border: \"none\",\n        outline: \"none\",\n        color: \"#4573f9\",\n        background: \"none\",\n        cursor: \"pointer\"\n      },\n      \"& > h1\": {\n        margin: \"0 5px 0 0\",\n        padding: \"0\",\n        textTransform: \"uppercase\",\n        fontSize: \"15px\",\n        fontWeight: \"bold\",\n        cursor: \"pointer\"\n      }\n    },\n    actionsBurgerModal: {\n      display: \"none\"\n    },\n    actionsBurgerModalOpen: {\n      display: \"flex\",\n      flexWrap: \"wrap\",\n      alignSelf: \"center\",\n      position: \"absolute\",\n      background: \"#fff\",\n      width: \"145px\",\n      transition: \"0.2s ease\",\n      top: \"-50px\",\n      transform: \"translateX(-38%)\",\n      boxShadow: \"-1px 2px 6px 0px rgba(0,0,0,0.2)\"\n    },\n    actionsBurgerIcon: {\n      color: \"#2e373b\",\n      cursor: \"pointer\"\n    },\n    actionsBurgerText: {\n      marginLeft: 10,\n      color: \"#2e373b\"\n    },\n    modalBurgerCopytext: {\n      width: \"100%\",\n      display: \"flex\",\n      alignItems: \"center\",\n      cursor: \"pointer\",\n      padding: \"7px 5px 5px 15px\",\n      transition: \"0.2s ease\",\n      \"&:hover\": {\n        background: \"#eaefff\"\n      }\n    },\n    actionsBtnLink: {\n      background: \"transparent\",\n      color: \"#347cff\",\n      fontWeight: 700\n    },\n    actionsBurger: {\n      color: \"#347cff\",\n      cursor: \"pointer\"\n    }\n  });\n}));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"%default%$makeStyles\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21vZGFsV2luZG93LnRzPzQyOTkiXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibW9kYWxJY29uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJtYXhXaWR0aCIsImJyZWFrcG9pbnRzIiwiZG93biIsImhlaWdodCIsIm91dGxpbmUiLCJib3JkZXIiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJ3aWR0aCIsInJlc2l6ZSIsIm5hdkJsb2NrIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJib3JkZXJUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0U3R5bGUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJhY3Rpb25zQnVyZ2VyTW9kYWwiLCJhY3Rpb25zQnVyZ2VyTW9kYWxPcGVuIiwiZmxleFdyYXAiLCJhbGlnblNlbGYiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciLCJhY3Rpb25zQnVyZ2VySWNvbiIsImFjdGlvbnNCdXJnZXJUZXh0IiwibWFyZ2luTGVmdCIsIm1vZGFsQnVyZ2VyQ29weXRleHQiLCJhY3Rpb25zQnRuTGluayIsImFjdGlvbnNCdXJnZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVlLHFFQUFBQSxvRUFBVSxNQUFDLFlBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUN4QkMsc0VBQVksQ0FBQztBQUNYO0FBRUE7QUFFQUMsYUFBUztBQUNQQyxhQUFPLEVBQUUsTUFERjtBQUVQQyxtQkFBYSxFQUFFLFFBRlI7QUFHUEMsWUFBTSxFQUFFLFlBSEQ7QUFJUEMsY0FBUSxFQUFFO0FBSkgsNkdBS05OLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FMTSxFQUt5QjtBQUM5QkgsWUFBTSxFQUFF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aUJBQVc7QUFDVFIsa0JBQVUsRUFBRTtBQURIO0FBUFEsS0F6R1Y7QUFvSFhnQixrQkFBYyxFQUFFO0FBQ2RoQixnQkFBVSxFQUFFLGFBREU7QUFFZEwsV0FBSyxFQUFFLFNBRk87QUFHZE8sZ0JBQVUsRUFBRTtBQUhFLEtBcEhMO0FBeUhYZSxpQkFBYSxFQUFFO0FBQ2J0QixXQUFLLEVBQUUsU0FETTtBQUViSSxZQUFNLEVBQUU7QUFGSztBQXpISixHQUFELENBRFk7QUFBQSxDQUFELENBQXpCIiwiZmlsZSI6Ii4vc3R5bGVzL21vZGFsV2luZG93LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgLy8gYnV0dG9uOiB7XG5cbiAgICAvLyB9LFxuXG4gICAgbW9kYWxJY29uOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBtYXJnaW46IFwiMTgwcHggYXV0b1wiLFxuICAgICAgbWF4V2lkdGg6IFwiNzAwcHhcIixcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XG4gICAgICAgIG1hcmdpbjogXCIxODBweCAxMHB4XCIsXG4gICAgICB9LFxuICAgICAgXCImID4gaW5wdXRcIjoge1xuICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgcGFkZGluZzogXCIwIDEwcHhcIixcbiAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICBcIiYgPiBpbnB1dDo6cGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBcIiYgPiB0ZXh0YXJlYVwiOiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjAgMTBweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgIHJlc2l6ZTogXCJub25lXCIsXG4gICAgICAgIFwiJiA+IHRleHRhcmVhOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICB9LFxuICAgICAgICBcIiYgPiB0ZXh0YXJlYTo6c2Nyb2xsYmFyXCI6IHtcbiAgICAgICAgICB3aWR0aDogXCIwXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbmF2QmxvY2s6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGNvbG9yOiBcIiM0NTczZjlcIixcbiAgICAgIGJvcmRlclRvcDogXCIycHggc29saWQgc2lsdmVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXG4gICAgICBcIiYgPiB1bFwiOiB7XG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIFwiJiA+IGxpXCI6IHtcbiAgICAgICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIDVweFwiLFxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgXCImID4gYnV0dG9uXCI6IHtcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0NTczZjlcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFwiJiA+IGJ1dHRvblwiOiB7XG4gICAgICAgIG1hcmdpbjogXCIwIDQwcHggMCAwXCIsXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBjb2xvcjogXCIjNDU3M2Y5XCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgfSxcbiAgICAgIFwiJiA+IGgxXCI6IHtcbiAgICAgICAgbWFyZ2luOiBcIjAgNXB4IDAgMFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhY3Rpb25zQnVyZ2VyTW9kYWw6IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gICAgYWN0aW9uc0J1cmdlck1vZGFsT3Blbjoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgICB3aWR0aDogXCIxNDVweFwiLFxuICAgICAgdHJhbnNpdGlvbjogXCIwLjJzIGVhc2VcIixcbiAgICAgIHRvcDogXCItNTBweFwiLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTM4JSlcIixcbiAgICAgIGJveFNoYWRvdzogXCItMXB4IDJweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4yKVwiLFxuICAgIH0sXG4gICAgYWN0aW9uc0J1cmdlckljb246IHtcbiAgICAgIGNvbG9yOiBcIiMyZTM3M2JcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgICBhY3Rpb25zQnVyZ2VyVGV4dDoge1xuICAgICAgbWFyZ2luTGVmdDogMTAsXG4gICAgICBjb2xvcjogXCIjMmUzNzNiXCIsXG4gICAgfSxcbiAgICBtb2RhbEJ1cmdlckNvcHl0ZXh0OiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI3cHggNXB4IDVweCAxNXB4XCIsXG4gICAgICB0cmFuc2l0aW9uOiBcIjAuMnMgZWFzZVwiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCIjZWFlZmZmXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYWN0aW9uc0J0bkxpbms6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGNvbG9yOiBcIiMzNDdjZmZcIixcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB9LFxuICAgIGFjdGlvbnNCdXJnZXI6IHtcbiAgICAgIGNvbG9yOiBcIiMzNDdjZmZcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSlcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/modalWindow.ts\n");

/***/ })

})