(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AboutUs.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AboutUs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_page_CardWithImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/page/CardWithImage */ "./resources/js/components/page/CardWithImage.vue");
/* harmony import */ var _js_components_page_MultiCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/page/MultiCard */ "./resources/js/components/page/MultiCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardWithImage: _js_components_page_CardWithImage__WEBPACK_IMPORTED_MODULE_0__["default"],
    MultiCard: _js_components_page_MultiCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      content: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.axios.get("/about-us").then(function (response) {
      return _this.content = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "uk-container" }, [
    _c("h1", [_vm._v("Über Uns")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content" },
      [
        _vm._l(_vm.content, function(card) {
          return [
            card.type === "card_with_image" || card.type === "card_with_video"
              ? _c("card-with-image", { attrs: { card: card } })
              : _vm._e(),
            _vm._v(" "),
            card.type === "multi_card"
              ? _c("multi-card", {
                  attrs: {
                    cards: card.subCards,
                    columns: parseInt(card.content.columns)
                  }
                })
              : _vm._e()
          ]
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/AboutUs.vue":
/*!****************************************!*\
  !*** ./resources/js/views/AboutUs.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_5d5795bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=5d5795bc&scoped=true& */ "./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&scoped=true&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js& */ "./resources/js/views/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_5d5795bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUs_vue_vue_type_template_id_5d5795bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d5795bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AboutUs.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/AboutUs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_5d5795bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=template&id=5d5795bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_5d5795bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_5d5795bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);