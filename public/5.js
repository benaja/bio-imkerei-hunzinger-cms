(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Frontpage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_products_ProductPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/products/ProductPreview */ "./resources/js/components/products/ProductPreview.vue");
/* harmony import */ var _js_components_NavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/NavigationBar */ "./resources/js/components/NavigationBar.vue");
/* harmony import */ var _js_components_page_CardWithImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/page/CardWithImage */ "./resources/js/components/page/CardWithImage.vue");
/* harmony import */ var _js_components_page_MultiCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/page/MultiCard */ "./resources/js/components/page/MultiCard.vue");
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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Frontpage",
  components: {
    ProductPreview: _js_components_products_ProductPreview__WEBPACK_IMPORTED_MODULE_0__["default"],
    NavigationBar: _js_components_NavigationBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    CardWithImage: _js_components_page_CardWithImage__WEBPACK_IMPORTED_MODULE_2__["default"],
    MultiCard: _js_components_page_MultiCard__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      products: [],
      contentElements: [],
      navbarFixed: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.axios.get("/features").then(function (response) {
      _this.products = response.data.products;
      _this.contentElements = response.data.cards;
    });
    window.onscroll = this.onScroll;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2[data-v-7834ba29] {\n  font-size: 3rem;\n  text-align: center;\n}\n.background-image[data-v-7834ba29] {\n  height: 100vh;\n  width: 100%;\n  background-position: center center;\n  background-size: cover;\n  background-image: url(\"/images/wallpaper01.jpg\");\n}\n.darken-background[data-v-7834ba29] {\n  background-color: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100vh;\n  padding-top: 1px;\n}\n.main-title[data-v-7834ba29] {\n  color: white;\n  font-size: 80px;\n  text-align: center;\n  margin-top: calc(50vh - 100px);\n}\n.second-title[data-v-7834ba29] {\n  color: white;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 0;\n}\n.large-logo[data-v-7834ba29] {\n  height: 170px;\n  margin: 10px;\n  display: block;\n  position: absolute;\n}\n.content[data-v-7834ba29] {\n  margin: 20px 0;\n}\n.products-header[data-v-7834ba29] {\n  margin: 70px 0;\n}\n.products[data-v-7834ba29] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media only screen and (max-width: 800px) {\n.large-logo[data-v-7834ba29] {\n    right: 0;\n}\n}\n@media only screen and (max-width: 600px) {\n.large-logo[data-v-7834ba29] {\n    display: none;\n}\n.main-title[data-v-7834ba29] {\n    font-size: 60px;\n    margin-top: calc(50vh - 150px);\n}\n.second-title[data-v-7834ba29] {\n    font-size: 30px;\n}\n.products[data-v-7834ba29] {\n    transform: scale(1);\n}\n.products-header[data-v-7834ba29] {\n    margin-top: 50px;\n    margin-bottom: 20px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=template&id=7834ba29&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Frontpage.vue?vue&type=template&id=7834ba29&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "background-image", attrs: { "uk-parallax": "bgy: 200" } },
      [
        _c("div", { staticClass: "darken-background" }, [
          !_vm.navbarFixed
            ? _c("img", {
                staticClass: "large-logo",
                attrs: { src: "/images/logo_portrait_inverted.png" }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("h1", { staticClass: "main-title" }, [
            _vm._v("Bio-Imkerei Hunzinger")
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "second-title" }, [
            _vm._v("Schweizer Bienenhonig feinster Qualität")
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "uk-container" }, [
      _c("h2", { staticClass: "products-header" }, [_vm._v("Produkte")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "products" },
        _vm._l(_vm.products, function(product) {
          return _c("ProductPreview", {
            key: product.id,
            attrs: { product: product, "hover-slider": "" }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _vm._l(_vm.contentElements, function(card) {
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Frontpage.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Frontpage.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Frontpage_vue_vue_type_template_id_7834ba29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frontpage.vue?vue&type=template&id=7834ba29&scoped=true& */ "./resources/js/views/Frontpage.vue?vue&type=template&id=7834ba29&scoped=true&");
/* harmony import */ var _Frontpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Frontpage.vue?vue&type=script&lang=js& */ "./resources/js/views/Frontpage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Frontpage_vue_vue_type_style_index_0_id_7834ba29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true& */ "./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Frontpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Frontpage_vue_vue_type_template_id_7834ba29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Frontpage_vue_vue_type_template_id_7834ba29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7834ba29",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Frontpage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Frontpage.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Frontpage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Frontpage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_style_index_0_id_7834ba29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=style&index=0&id=7834ba29&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_style_index_0_id_7834ba29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_style_index_0_id_7834ba29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_style_index_0_id_7834ba29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_style_index_0_id_7834ba29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_style_index_0_id_7834ba29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Frontpage.vue?vue&type=template&id=7834ba29&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Frontpage.vue?vue&type=template&id=7834ba29&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_template_id_7834ba29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Frontpage.vue?vue&type=template&id=7834ba29&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=template&id=7834ba29&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_template_id_7834ba29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Frontpage_vue_vue_type_template_id_7834ba29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);