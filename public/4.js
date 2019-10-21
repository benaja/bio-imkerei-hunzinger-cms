(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_PageFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/PageFooter */ "./resources/js/components/PageFooter.vue");
/* harmony import */ var _js_components_NavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/NavigationBar */ "./resources/js/components/NavigationBar.vue");
/* harmony import */ var _js_components_products_ProductPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/products/ProductPreview */ "./resources/js/components/products/ProductPreview.vue");
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
} //
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
  components: {
    PageFooter: _js_components_PageFooter__WEBPACK_IMPORTED_MODULE_0__["default"],
    NavigationBar: _js_components_NavigationBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductPreview: _js_components_products_ProductPreview__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      products: [],
      categories: [],
      filters: [{
        text: "Alle Produkte",
        selected: true,
        type: "all"
      }, {
        text: "An Lager",
        selected: false,
        type: "available"
      }],
      sortby: 1
    };
  },
  computed: {
    filterProducts: function filterProducts() {
      var _this = this;

      return this.products.filter(function (product) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var filter = _step.value;

            if (filter.selected) {
              if (filter.type === "category") {
                if (!product.categories.some(function (c) {
                  return c.id == filter.categoryId;
                })) {
                  return {
                    v: false
                  };
                }
              } else if (filter.type === "available") {
                if (!product.available) {
                  return {
                    v: false
                  };
                }
              }
            }
          };

          for (var _iterator = _this.filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if (_typeof(_ret) === "object") return _ret.v;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return true;
      }).sort(this.sort);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.axios.get("/products").then(function (response) {
      _this2.products = response.data;
    });
    this.axios.get("/categories").then(function (response) {
      _this2.categories = response.data;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _this2.categories[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var category = _step2.value;

          _this2.filters.push({
            text: category.name,
            selected: false,
            type: "category",
            categoryId: category.id
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    });
  },
  methods: {
    changeFilter: function changeFilter(index) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.filters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var filter = _step3.value;
          filter.selected = false;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.filters[index].selected = true;
    },
    sort: function sort(a, b) {
      if (this.sortby == 1) {
        if (a.rank > b.rank) return 1;
        if (a.rank < b.rank) return -1;
        return 0;
      } else if (this.sortby == 2) {
        a.minPirce = a.prices.sort(this.sortPrices)[0];
        b.minPirce = b.prices.sort(this.sortPrices)[0];
        if (!a.minPirce || !b.minPirce) return -1;
        if (a.minPirce.amount > b.minPirce.amount) return 1;
        if (a.minPirce.amount < b.minPirce.amount) return -1;
        return 0;
      } else {
        a.minPirce = a.prices.sort(this.sortPrices)[0];
        b.minPirce = b.prices.sort(this.sortPrices)[0];
        if (!a.minPirce || !b.minPirce) return 1;
        if (a.minPirce.amount < b.minPirce.amount) return 1;
        if (a.minPirce.amount > b.minPirce.amount) return -1;
        return 0;
      }
    },
    sortPrices: function sortPrices(priceA, priceB) {
      return (priceA.amount > priceB.amount) - (priceA.amount < priceB.amount);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uk-container[data-v-eec6f8fa] {\n  padding-top: 100px;\n}\nh4[data-v-eec6f8fa] {\n  margin-bottom: 0;\n}\n.products-grid[data-v-eec6f8fa] {\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-template-rows: auto auto;\n}\n.filter[data-v-eec6f8fa] {\n  grid-row-start: 1;\n  grid-row-end: 2;\n  grid-column-start: 1;\n  grid-column-end: 1;\n  margin: 5px 0;\n  padding: 3px 6px;\n  cursor: pointer;\n}\n.filter p[data-v-eec6f8fa] {\n  margin: 0;\n}\n.filter.selected[data-v-eec6f8fa] {\n  background-color: rgba(255, 192, 75, 0.479);\n  border-radius: 3px;\n}\n.uk-select[data-v-eec6f8fa] {\n  background-color: transparent;\n  border-color: #e89602;\n}\n.products[data-v-eec6f8fa] {\n  grid-row-start: 1;\n  grid-row-end: 2;\n  grid-column-start: 2;\n  grid-column-end: 2;\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 300px;\n}\n[type=checkbox].filled-in:checked + span[data-v-eec6f8fa]:not(.lever):after {\n  background-color: #e89602;\n  border-color: #e89602;\n}\n.filter-text[data-v-eec6f8fa] {\n  float: left;\n  width: 150px;\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    [
      _c("NavigationBar"),
      _vm._v(" "),
      _c("div", { staticClass: "uk-container" }, [
        _c("h1", { staticClass: "uk-margin-top" }, [_vm._v("Produkte")]),
        _vm._v(" "),
        _c("div", { staticClass: "products-grid" }, [
          _c(
            "div",
            { staticClass: "filter" },
            [
              _c("div", [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.sortby,
                        expression: "sortby"
                      }
                    ],
                    staticClass: "uk-select",
                    attrs: { id: "sort-by" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.sortby = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1", selected: "" } }, [
                      _vm._v("Bestseller")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Günstigste")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Teuerste")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("h4", [_vm._v("Filter")]),
              _vm._v(" "),
              _vm._l(_vm.filters, function(filter, index) {
                return _c(
                  "div",
                  {
                    class: ["filter", { selected: filter.selected }],
                    on: {
                      click: function($event) {
                        return _vm.changeFilter(index)
                      }
                    }
                  },
                  [_c("p", [_vm._v(_vm._s(filter.text))])]
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "products" },
            _vm._l(_vm.filterProducts, function(product) {
              return _c("ProductPreview", {
                key: product.id,
                attrs: { product: product }
              })
            }),
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("PageFooter")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "uk-form-label", attrs: { for: "sort-by" } },
      [_c("h4", [_vm._v("Sortieren nach")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Products.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Products.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=eec6f8fa&scoped=true& */ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Products_vue_vue_type_style_index_0_id_eec6f8fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true& */ "./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eec6f8fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_eec6f8fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=style&index=0&id=eec6f8fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_eec6f8fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_eec6f8fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_eec6f8fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_eec6f8fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_eec6f8fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=eec6f8fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);