(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/ProductPreview.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/ProductPreview.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "ProductPreview",
  props: {
    product: {
      type: Object,
      required: true
    },
    hoverSlider: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      hover: {}
    };
  },
  computed: {
    weight: function weight() {
      return this.product.prices.filter(function (price) {
        return price.isDefault;
      })[0];
    }
  },
  mounted: function mounted() {},
  methods: {
    updateHover: function updateHover(isHover) {
      if (isHover) {
        this.hover = {
          transform: "scale(1.05)"
        };
      } else {
        this.hover = {};
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-preview-container[data-v-709d8189] {\n  width: 25%;\n  margin-bottom: 30px;\n}\n.product-preview[data-v-709d8189] {\n  padding-top: 1px;\n  width: 90%;\n  background-color: white;\n  position: relative;\n  margin: 0 5%;\n  border-radius: 5px;\n  cursor: pointer;\n  transition-duration: 0.3s;\n}\n.image[data-v-709d8189] {\n  width: 100%;\n  padding-bottom: 60%;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n.no-image[data-v-709d8189] {\n  padding-bottom: 60%;\n  position: relative;\n  width: 100%;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.no-image > p[data-v-709d8189] {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.content[data-v-709d8189] {\n  text-align: center;\n  height: 190px;\n}\nh3[data-v-709d8189] {\n  margin: 10px 0 0 0;\n  font-size: 2.2rem;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.short-description[data-v-709d8189] {\n  height: 60px;\n}\n.short-description p[data-v-709d8189] {\n  position: relative;\n  color: #e89602;\n  font-size: 1.3rem;\n  margin: 0 10px;\n  vertical-align: middle;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.price[data-v-709d8189] {\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 0;\n  font-size: 1.3rem;\n}\n.subdescription[data-v-709d8189] {\n  color: gray;\n  margin-top: 0;\n}\n.hover-container[data-v-709d8189] {\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(63, 63, 63, 0.9);\n  text-align: center;\n  transition: 0.4s;\n  border-radius: 5px;\n}\n.product-preview[data-v-709d8189]:hover {\n  transform: scale(1.05);\n}\n.product-preview:hover .hover-container[data-v-709d8189] {\n  opacity: 1;\n}\n.detail-description[data-v-709d8189] {\n  margin: 20px;\n  height: calc(100% - 120px);\n  overflow-x: hidden;\n  overflow-y: hidden;\n  color: white;\n}\n.more-button[data-v-709d8189] {\n  background-color: transparent;\n  border-style: solid;\n  border-color: white;\n  border-radius: 30px;\n  color: white;\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.more-button[data-v-709d8189]:hover {\n  color: lightgray;\n  border-color: lightgray;\n}\n@media only screen and (max-width: 1700px) {\n.ajust-with[data-v-709d8189] {\n    width: 33.3%;\n}\n}\n@media only screen and (max-width: 1200px) {\n.product-preview-container[data-v-709d8189] {\n    width: 50%;\n}\n}\n@media only screen and (max-width: 600px) {\n.product-preview-container[data-v-709d8189] {\n    width: 100%;\n}\n.product-preview[data-v-709d8189]:hover {\n    transform: scale(1);\n}\n.hover-container[data-v-709d8189] {\n    display: none;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/ProductPreview.vue?vue&type=template&id=709d8189&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/ProductPreview.vue?vue&type=template&id=709d8189&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "product-preview-container",
      class: { "ajust-with": !_vm.hoverSlider }
    },
    [
      _c(
        "router-link",
        {
          staticClass: "product-preview",
          style: _vm.hover,
          attrs: { to: "/produkte/" + _vm.product.slugs[0].slug, tag: "div" },
          on: {
            mouseover: function($event) {
              return _vm.updateHover(true)
            },
            mouseleave: function($event) {
              return _vm.updateHover(false)
            }
          }
        },
        [
          _vm.product.medias.length > 0
            ? _c("div", {
                staticClass: "image",
                style: {
                  backgroundImage:
                    "url(/img/" + _vm.product.medias[0].uuid + ")"
                }
              })
            : _c("div", { staticClass: "no-image" }, [
                _c("p", [_vm._v("Kein Bild vorhanden")])
              ]),
          _vm._v(" "),
          _c("div", { staticClass: "content" }, [
            _c("h3", [_vm._v(_vm._s(_vm.product.title))]),
            _vm._v(" "),
            _c("div", { staticClass: "short-description" }, [
              _c("p", [_vm._v(_vm._s(_vm.product.short_description))])
            ]),
            _vm._v(" "),
            _vm.product.prices.length > 0
              ? _c("div", { staticClass: "price-information" }, [
                  _c("p", { staticClass: "price" }, [
                    _vm._v("ab " + _vm._s(_vm.product.prices[0].amount) + ".-")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "subdescription" }, [
                    _vm._v("( zzgl. Versand )")
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.hoverSlider
            ? _c(
                "div",
                { staticClass: "hover-container" },
                [
                  _c("p", {
                    staticClass: "detail-description text-editor-content dark",
                    domProps: { innerHTML: _vm._s(_vm.product.description) }
                  }),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "more-button",
                      attrs: {
                        tag: "button",
                        to: "/produkte/" + _vm.product.slugs[0].slug
                      }
                    },
                    [_vm._v("Mehr details")]
                  )
                ],
                1
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/products/ProductPreview.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/products/ProductPreview.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductPreview_vue_vue_type_template_id_709d8189_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPreview.vue?vue&type=template&id=709d8189&scoped=true& */ "./resources/js/components/products/ProductPreview.vue?vue&type=template&id=709d8189&scoped=true&");
/* harmony import */ var _ProductPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPreview.vue?vue&type=script&lang=js& */ "./resources/js/components/products/ProductPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductPreview_vue_vue_type_style_index_0_id_709d8189_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true& */ "./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductPreview_vue_vue_type_template_id_709d8189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductPreview_vue_vue_type_template_id_709d8189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "709d8189",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/ProductPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/ProductPreview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/products/ProductPreview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/ProductPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_style_index_0_id_709d8189_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/ProductPreview.vue?vue&type=style&index=0&id=709d8189&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_style_index_0_id_709d8189_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_style_index_0_id_709d8189_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_style_index_0_id_709d8189_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_style_index_0_id_709d8189_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_style_index_0_id_709d8189_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/products/ProductPreview.vue?vue&type=template&id=709d8189&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/products/ProductPreview.vue?vue&type=template&id=709d8189&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_template_id_709d8189_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPreview.vue?vue&type=template&id=709d8189&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/ProductPreview.vue?vue&type=template&id=709d8189&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_template_id_709d8189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPreview_vue_vue_type_template_id_709d8189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);