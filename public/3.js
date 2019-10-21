(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/CardWithImage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/CardWithImage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ContentWithImage",
  props: {
    value: {
      type: Object,
      required: true
    },
    medias: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    content: function content() {//   return JSON.parse(this.value);
    }
  },
  mounted: function mounted() {// console.log(this.content);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/MultiCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/MultiCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_page_CardWithImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/page/CardWithImage */ "./resources/js/components/page/CardWithImage.vue");
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
  name: "MultiCard",
  components: {
    CardWithImage: _js_components_page_CardWithImage__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    rows: {
      type: Number,
      required: true
    }
  },
  computed: {
    containerStyle: function containerStyle() {
      var gridTemplateColumns = "";

      for (var i = 0; i < this.rows; i++) {
        gridTemplateColumns += " ".concat(100 / this.rows, "%");
      }

      var gridTemplateRows = "";

      for (var _i = 0; _i < this.cards.length; _i++) {
        gridTemplateRows += " auto";
      }

      return {
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows
      };
    }
  },
  methods: {
    cardStyle: function cardStyle(index) {
      var addToRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var gridColumn = index % 2 + 1;
      var gridRow = this.cards.length / 2 + (index - index % 2) + addToRow;
      return {
        gridColumnStart: gridColumn,
        gridColumnEnd: gridColumn,
        gridRowStart: gridRow,
        gridRowEnd: gridRow
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Frontpage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Frontpage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_products_ProductPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/products/ProductPreview */ "./resources/js/components/products/ProductPreview.vue");
/* harmony import */ var _js_components_PageFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/PageFooter */ "./resources/js/components/PageFooter.vue");
/* harmony import */ var _js_components_NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/NavigationBar */ "./resources/js/components/NavigationBar.vue");
/* harmony import */ var _js_components_page_CardWithImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/page/CardWithImage */ "./resources/js/components/page/CardWithImage.vue");
/* harmony import */ var _js_components_page_MultiCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/page/MultiCard */ "./resources/js/components/page/MultiCard.vue");
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
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Frontpage",
  components: {
    ProductPreview: _js_components_products_ProductPreview__WEBPACK_IMPORTED_MODULE_0__["default"],
    PageFooter: _js_components_PageFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    NavigationBar: _js_components_NavigationBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardWithImage: _js_components_page_CardWithImage__WEBPACK_IMPORTED_MODULE_3__["default"],
    MultiCard: _js_components_page_MultiCard__WEBPACK_IMPORTED_MODULE_4__["default"]
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
  },
  methods: {
    onScroll: function onScroll() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        this.navbarFixed = true;
      } else {
        this.navbarFixed = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2[data-v-6f701e70] {\n  font-size: 3rem;\n  text-align: center;\n  margin-top: 30px;\n}\n.card[data-v-6f701e70] {\n  width: 60%;\n  margin: 100px auto 0 auto;\n  background-color: white;\n  padding-top: 1px;\n}\n.card.small[data-v-6f701e70] {\n  width: 40%;\n}\n.card.large[data-v-6f701e70] {\n  width: calc(100% - 20px);\n}\n.content[data-v-6f701e70] {\n  text-align: center;\n  padding: 0 20px;\n}\n.image[data-v-6f701e70] {\n  padding: 20px;\n  text-align: center;\n  justify-content: center;\n}\n.image img[data-v-6f701e70] {\n  width: 100%;\n}\n.image .video[data-v-6f701e70] {\n  width: 100%;\n  padding-bottom: calc(100% / 16 * 9);\n  position: relative;\n}\n.image .video > div[data-v-6f701e70] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.image .video > div > iframe[data-v-6f701e70] {\n  width: 100%;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container[data-v-e65efa58] {\n  display: grid;\n  margin-top: 100px;\n}\nh2[data-v-e65efa58] {\n  text-align: center;\n  margin-top: 30px;\n  font-size: 3rem;\n}\n.text[data-v-e65efa58] {\n  text-align: center;\n  background-color: white;\n  margin: 10px 10px 0 10px;\n}\n.image[data-v-e65efa58] {\n  padding: 20px;\n  margin: 0 10px 10px 10px;\n  background-color: white;\n}\n.image > div[data-v-e65efa58] {\n  width: 100%;\n  padding-bottom: calc(100% / 16 * 9);\n  background-size: cover;\n  background-position: center center;\n}", ""]);

// exports


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
exports.push([module.i, "h2[data-v-7834ba29] {\n  font-size: 3rem;\n  text-align: center;\n}\n.background-image[data-v-7834ba29] {\n  height: 100vh;\n  width: 100%;\n  background-position: center center;\n  background-size: cover;\n  background-image: url(\"/images/wallpaper01.jpg\");\n}\n.darken-background[data-v-7834ba29] {\n  background-color: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100vh;\n  padding-top: 1px;\n}\n.main-title[data-v-7834ba29] {\n  color: white;\n  font-size: 80px;\n  text-align: center;\n  margin-top: calc(50vh - 100px);\n}\n.second-title[data-v-7834ba29] {\n  color: white;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 0;\n}\n.large-logo[data-v-7834ba29] {\n  height: 170px;\n  margin: 10px;\n  display: block;\n  position: absolute;\n}\n.content[data-v-7834ba29] {\n  margin: 20px 0;\n}\n.products-header[data-v-7834ba29] {\n  margin: 70px 0;\n}\n.products[data-v-7834ba29] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media only screen and (max-width: 600px) {\n.large-logo[data-v-7834ba29] {\n    display: none;\n}\n.main-title[data-v-7834ba29] {\n    font-size: 60px;\n    margin-top: calc(50vh - 150px);\n}\n.second-title[data-v-7834ba29] {\n    font-size: 30px;\n}\n.products[data-v-7834ba29] {\n    transform: scale(1);\n}\n.products-header[data-v-7834ba29] {\n    margin-top: 50px;\n    margin-bottom: 20px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/CardWithImage.vue?vue&type=template&id=6f701e70&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/CardWithImage.vue?vue&type=template&id=6f701e70&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: ["card", _vm.value.size] }, [
    _c("h2", [_vm._v(_vm._s(_vm.value.title))]),
    _vm._v(" "),
    _c("div", [
      _c("div", {
        staticClass: "content",
        domProps: { innerHTML: _vm._s(_vm.value.text) }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "image" }, [
        _vm.value.url
          ? _c("div", { staticClass: "video" }, [
              _c("div", [_c("iframe", { attrs: { src: _vm.value.url } })])
            ])
          : _c("img", { attrs: { src: "/img/" + _vm.medias[0].uuid } })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/MultiCard.vue?vue&type=template&id=e65efa58&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/MultiCard.vue?vue&type=template&id=e65efa58&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-container", style: _vm.containerStyle },
    [
      _vm._l(_vm.cards, function(card, index) {
        return [
          _c(
            "div",
            {
              key: "t" + card.id,
              staticClass: "text",
              style: _vm.cardStyle(index)
            },
            [
              _c("h2", [_vm._v(_vm._s(card.content.title))]),
              _vm._v(" "),
              _c("div", { domProps: { innerHTML: _vm._s(card.content.text) } })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              key: "i" + card.id,
              staticClass: "image",
              style: _vm.cardStyle(index, 1)
            },
            [
              _c("div", {
                style: {
                  backgroundImage: "url('/img/" + card.medias[0].uuid + "'"
                },
                attrs: { src: "/img/" + card.medias[0].uuid }
              })
            ]
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass: "background-image",
          attrs: { "uk-parallax": "bgy: -200" }
        },
        [
          _c(
            "div",
            { staticClass: "darken-background" },
            [
              _c("NavigationBar", { attrs: { sticky: "" } }),
              _vm._v(" "),
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
            ],
            1
          )
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
                card.type === "card_with_image" ||
                card.type === "card_with_video"
                  ? _c("card-with-image", {
                      attrs: { medias: card.medias },
                      model: {
                        value: card.content,
                        callback: function($$v) {
                          _vm.$set(card, "content", $$v)
                        },
                        expression: "card.content"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                card.type === "multi_card"
                  ? _c("multi-card", {
                      attrs: {
                        cards: card.subCards,
                        rows: parseInt(card.content.rows)
                      }
                    })
                  : _vm._e()
              ]
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("page-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/page/CardWithImage.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/page/CardWithImage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardWithImage_vue_vue_type_template_id_6f701e70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardWithImage.vue?vue&type=template&id=6f701e70&scoped=true& */ "./resources/js/components/page/CardWithImage.vue?vue&type=template&id=6f701e70&scoped=true&");
/* harmony import */ var _CardWithImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardWithImage.vue?vue&type=script&lang=js& */ "./resources/js/components/page/CardWithImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CardWithImage_vue_vue_type_style_index_0_id_6f701e70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true& */ "./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardWithImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardWithImage_vue_vue_type_template_id_6f701e70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardWithImage_vue_vue_type_template_id_6f701e70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f701e70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/CardWithImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/CardWithImage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/page/CardWithImage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardWithImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/CardWithImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_style_index_0_id_6f701e70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/CardWithImage.vue?vue&type=style&index=0&id=6f701e70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_style_index_0_id_6f701e70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_style_index_0_id_6f701e70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_style_index_0_id_6f701e70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_style_index_0_id_6f701e70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_style_index_0_id_6f701e70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/page/CardWithImage.vue?vue&type=template&id=6f701e70&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/page/CardWithImage.vue?vue&type=template&id=6f701e70&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_template_id_6f701e70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardWithImage.vue?vue&type=template&id=6f701e70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/CardWithImage.vue?vue&type=template&id=6f701e70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_template_id_6f701e70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardWithImage_vue_vue_type_template_id_6f701e70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/page/MultiCard.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/page/MultiCard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiCard_vue_vue_type_template_id_e65efa58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiCard.vue?vue&type=template&id=e65efa58&scoped=true& */ "./resources/js/components/page/MultiCard.vue?vue&type=template&id=e65efa58&scoped=true&");
/* harmony import */ var _MultiCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiCard.vue?vue&type=script&lang=js& */ "./resources/js/components/page/MultiCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MultiCard_vue_vue_type_style_index_0_id_e65efa58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true& */ "./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MultiCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiCard_vue_vue_type_template_id_e65efa58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiCard_vue_vue_type_template_id_e65efa58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e65efa58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/MultiCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/MultiCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/page/MultiCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/MultiCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_style_index_0_id_e65efa58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/MultiCard.vue?vue&type=style&index=0&id=e65efa58&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_style_index_0_id_e65efa58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_style_index_0_id_e65efa58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_style_index_0_id_e65efa58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_style_index_0_id_e65efa58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_style_index_0_id_e65efa58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/page/MultiCard.vue?vue&type=template&id=e65efa58&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/page/MultiCard.vue?vue&type=template&id=e65efa58&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_template_id_e65efa58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiCard.vue?vue&type=template&id=e65efa58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/MultiCard.vue?vue&type=template&id=e65efa58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_template_id_e65efa58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiCard_vue_vue_type_template_id_e65efa58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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