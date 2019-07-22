(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/projectdetail/projectdetail"],{

/***/ "../../../../../Documents/HBuilderProjects/shareJQSystem/main.js?{\"page\":\"pages%2Fprojectdetail%2Fprojectdetail\"}":
/*!************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/shareJQSystem/main.js?{"page":"pages%2Fprojectdetail%2Fprojectdetail"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _projectdetail = _interopRequireDefault(__webpack_require__(/*! ./pages/projectdetail/projectdetail.vue */ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_projectdetail.default));

/***/ }),

/***/ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue":
/*!*****************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectdetail_vue_vue_type_template_id_5f7debc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectdetail.vue?vue&type=template&id=5f7debc3& */ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=template&id=5f7debc3&");
/* harmony import */ var _projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectdetail.vue?vue&type=script&lang=js& */ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _projectdetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectdetail.vue?vue&type=style&index=0&lang=scss& */ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _projectdetail_vue_vue_type_template_id_5f7debc3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _projectdetail_vue_vue_type_template_id_5f7debc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./projectdetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./projectdetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=template&id=5f7debc3&":
/*!************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=template&id=5f7debc3& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_template_id_5f7debc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./projectdetail.vue?vue&type=template&id=5f7debc3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=template&id=5f7debc3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_template_id_5f7debc3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_projectdetail_vue_vue_type_template_id_5f7debc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































































































































































var _service = _interopRequireDefault(__webpack_require__(/*! ../../service.js */ "../../../../../Documents/HBuilderProjects/shareJQSystem/service.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// import sharebtn from '@/components/shareBox.vue';
var _default = {
  data: function data() {
    return {
      id: 0,
      datetime: '-',
      order_id: 0,
      money: 0,
      area: 0,
      aname: '-',
      project_name: '-',
      address: '-',
      fmoney: 0,
      head_img: '/static/missing-face.png',
      cuhead_img: '/static/missing-face.png',
      uid: 56,
      booking_time: "",
      pro_id: 6,
      type: 0,
      maketype: 0,
      clicknum: 0,
      time: 1559790973,
      remark: "",
      person: {
        "id": 2,
        "nickname": "",
        "mobile": "",
        "name": "",
        "addressurl": null,
        "addressinfo": null,
        "addresscode": "",
        "head_img": null },

      nickname: "",
      mobile: "",
      addressurl: "",
      addressinfo: "",
      my: '',
      com_id: '' };

  },
  filters: {
    formateDate: function formateDate(val) {
      var date = new Date(val);
      var year = date.getFullYear();
      var month = date.getMonth() > 9 ? date.getMonth() + 1 : "0".concat(date.getMonth() + 1);
      var day = date.getDate() > 9 ? date.getDate() : "0".concat(date.getDate());
      return "".concat(year, "-").concat(month, "-").concat(day);
    } },

  onLoad: function onLoad(option) {
    if (option.id) {
      this.id = option.id;
    } else {
      uni.showToast({
        title: '分享数据过期，请重新分享' });

    }
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: {
    initData: function initData() {
      var self = this;

      uni.request({
        url: _service.default.BASEURL + '/home/share/high_seas_info',
        method: "POST",
        data: {
          id: this.id },

        success: function success(res) {
          if (!res.data || res.data.code != 1) {
            uni.showToast({
              title: res.data.msg,
              icon: 'none' });

          } else {
            var info = res.data.data;
            self.datetime = info.datetime;
            self.order_id = info.order_id;
            self.money = info.money;
            self.area = info.area;
            self.aname = info.aname;
            self.project_name = info.project_name;
            self.fmoney = info.fmoney;
            self.head_img = info.head_img;
            self.maketype = info.maketype;
            self.time = info.time;
            self.remark = info.remark;
            self.person = info.person;
            self.nickname = info.nickname;
            self.addressurl = info.addressurl;
            self.addressinfo = info.addressinfo;
            self.mobile = info.mobile;
            self.com_id = info.com_id;
          }
        } });

    },
    makeCall: function makeCall() {
      uni.makePhoneCall({
        phoneNumber: this.mobile });

    },
    showCompanyDetail: function showCompanyDetail() {
      uni.navigateTo({
        url: "/pages/companyinfo/companyinfo?id=" + this.com_id });

    },
    apply: function apply() {
      uni.showModal({
        title: '提示',
        content: "您需要下载App，进行接单",
        success: function success(res) {
          if (res.confirm) {
            uni.showToast({
              title: '下载APP.....' });

          }
        } });


    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=template&id=5f7debc3&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!D:/Downloads/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/shareJQSystem/pages/projectdetail/projectdetail.vue?vue&type=template&id=5f7debc3& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    { staticClass: "detail-container" },
    [
      _c(
        "cu-custom",
        { attrs: { bgColor: "bg-blue", isBack: false, mpcomid: "84f8af34-0" } },
        [
          _c("block", { slot: "backText" }),
          _c("block", { slot: "content" }, [_vm._v("项目详情")])
        ],
        1
      ),
      _c(
        "view",
        { staticClass: "project-box flex flex-direction justify-center" },
        [
          _c("view", { staticClass: "money margin-top" }, [
            _vm._v("￥"),
            _c("text", { staticClass: "number " }, [_vm._v(_vm._s(_vm.money))]),
            _vm._v("元 工程款")
          ]),
          _c("view", { staticClass: "fmoney" }, [
            _c("text", [_vm._v("￥" + _vm._s(_vm.fmoney) + " 元 返扣")])
          ]),
          _c("view", { staticClass: "info-box flex justify-around" }, [
            _c("view", { staticClass: "item" }, [
              _c("view", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.project_name))
              ]),
              _c("view", { staticClass: "name" }, [_vm._v("项目类型")])
            ]),
            _c("view", { staticClass: "item" }, [
              _c("view", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.area) + "m²")
              ]),
              _c("view", { staticClass: "name" }, [_vm._v("面积")])
            ]),
            _c("view", { staticClass: "item" }, [
              _c("view", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.order_id) + "个点")
              ]),
              _c("view", { staticClass: "name" }, [_vm._v("采集点")])
            ]),
            _c("view", { staticClass: "item" }, [
              _c("view", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.datetime))
              ]),
              _c("view", { staticClass: "name" }, [_vm._v("施工时间")])
            ])
          ]),
          _c("view", { staticClass: "address-box padding-sm" }, [
            _c("text", { staticClass: "iconfont cuIcon-location" }),
            _c("text", { staticClass: "address text-blue" }, [
              _vm._v(_vm._s(_vm.addressurl))
            ])
          ]),
          _c("view", { staticClass: "status-box" }, [
            _vm.maketype == 0
              ? _c("image", {
                  attrs: {
                    src: "/static/img/sea/weiwancheng.png",
                    mode: "widthFix"
                  }
                })
              : _c("image", {
                  attrs: {
                    src: "/static/img/sea/yiwancheng.png",
                    mode: "widthFix"
                  }
                })
          ])
        ]
      ),
      _c("view", { staticClass: "common-box margin-top" }, [
        _vm._m(0),
        _c("view", { staticClass: "info-box flex" }, [
          _c("view", { staticClass: "avatar" }, [
            _c("view", {
              staticClass: "cu-avatar lg round ",
              style: "background-image:url(" + _vm.person.head_img + ")"
            })
          ]),
          _c(
            "view",
            { staticClass: "info flex flex-direction justify-around " },
            [
              _c("view", { staticClass: "project" }, [
                _c("text", { staticClass: "name " }, [
                  _vm._v(_vm._s(_vm.person.name))
                ])
              ]),
              _c("view", {}, [
                _c("text", {}, [_vm._v(_vm._s(_vm.person.nickname))])
              ]),
              _c("view", { staticClass: "date " }, [
                _c("text", { staticClass: "iconfont cuIcon-phone" }),
                _vm._v(_vm._s(_vm.person.mobile))
              ])
            ]
          ),
          _c(
            "view",
            {
              staticClass: "btn-box flex flex-direction justify-around",
              attrs: { eventid: "84f8af34-0" },
              on: {
                tap: function($event) {
                  _vm.showCompanyDetail(_vm.person.id)
                }
              }
            },
            [
              _c("text", { staticClass: "text-right text-blue" }, [
                _vm._v("查看公司>>")
              ])
            ]
          )
        ])
      ]),
      _c("view", { staticClass: "common-box margin-top" }, [
        _vm._m(1),
        _c("view", { staticClass: "info-box flex" }, [
          _c("view", { staticClass: "avatar" }, [
            _c("view", {
              staticClass: "cu-avatar lg round ",
              style: "background-image:url(" + _vm.cuhead_img + ")"
            })
          ]),
          _c(
            "view",
            { staticClass: "info flex flex-direction justify-around " },
            [
              _c("view", { staticClass: "project" }, [
                _c("text", { staticClass: "name " }, [
                  _vm._v(_vm._s(_vm.nickname))
                ])
              ]),
              _c(
                "view",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.mobile,
                      expression: "mobile"
                    }
                  ],
                  staticClass: "date "
                },
                [
                  _c("text", { staticClass: "iconfont cuIcon-phone" }),
                  _vm._v(_vm._s(_vm.mobile))
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.mobile,
                  expression: "!mobile"
                }
              ],
              staticClass: "btn-box flex flex-direction justify-around"
            },
            [
              _c("text", {
                staticClass: "iconfont text-blue text-center cuIcon-lock"
              })
            ]
          )
        ])
      ]),
      _c("view", { staticClass: "common-box margin-top" }, [
        _vm._m(2),
        _c("view", { staticClass: "detail-box" }, [
          _c("view", { staticClass: "flex justify-around " }, [
            _c("view", { staticClass: "item flex" }, [
              _c("text", { staticClass: "name text-right" }, [
                _vm._v("项目类型:")
              ]),
              _c("text", { staticClass: "content text-left" }, [
                _vm._v(_vm._s(_vm.project_name))
              ])
            ]),
            _c("view", { staticClass: "item flex" }, [
              _c("text", { staticClass: "name text-right" }, [
                _vm._v("采集点:")
              ]),
              _c("text", { staticClass: "content text-left" }, [
                _vm._v(_vm._s(_vm.order_id) + "个")
              ])
            ])
          ]),
          _c("view", { staticClass: "flex justify-around " }, [
            _c("view", { staticClass: "item flex" }, [
              _c("text", { staticClass: "name text-right" }, [
                _vm._v("开工时间:")
              ]),
              _c("text", { staticClass: "content text-left" }, [
                _vm._v(_vm._s(_vm.datetime))
              ])
            ]),
            _c("view", { staticClass: "item flex" }, [
              _c("text", { staticClass: "name text-right" }, [
                _vm._v("工程款:")
              ]),
              _c("text", { staticClass: "content text-left text-orange" }, [
                _vm._v(_vm._s(_vm.money) + "元")
              ])
            ])
          ]),
          _c("view", { staticClass: "flex justify-around " }, [
            _c("view", { staticClass: "item flex" }, [
              _c("text", { staticClass: "name text-right" }, [_vm._v("面积:")]),
              _c("text", { staticClass: "content text-left" }, [
                _vm._v(_vm._s(_vm.area) + "m²")
              ])
            ]),
            _c("view", { staticClass: "item flex" }, [
              _c("text", { staticClass: "name text-right" }, [_vm._v("分成:")]),
              _c("text", { staticClass: "content text-left text-orange" }, [
                _vm._v(_vm._s(_vm.fmoney) + "元")
              ])
            ])
          ]),
          _c("view", { staticClass: "flex justify-around " }, [
            _c("view", { staticClass: "item flex" }, [
              _c("text", { staticClass: "name text-right" }, [_vm._v("地址:")]),
              _c("text", { staticClass: "content text-left" }, [
                _vm._v(_vm._s(_vm.addressurl))
              ])
            ]),
            _c("view", { staticClass: "item flex" }, [
              _c("text", { staticClass: "name text-right" }, [
                _vm._v("项目状态:")
              ]),
              _c("text", { staticClass: "content text-left text-blue" }, [
                _vm._v(_vm._s(_vm.maketype == 0 ? "待接单" : "已完成"))
              ])
            ])
          ]),
          _c("view", { staticClass: "flex justify-around  border-bottom" }, [
            _c("view", { staticClass: "item flex  " }, [
              _c("text", { staticClass: "name text-right" }, [_vm._v("备注:")]),
              _c("text", { staticClass: "text-gray desc" }, [
                _vm._v(_vm._s(_vm.remark))
              ])
            ])
          ])
        ])
      ]),
      _c(
        "view",
        { staticClass: "btn-box flex margin-top" },
        [
          _c(
            "button",
            {
              staticClass: "bg-orange text-white",
              attrs: { eventid: "84f8af34-1" },
              on: { click: _vm.apply }
            },
            [_vm._v("马上申请")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "title" }, [
      _c("text", [_vm._v("甲方信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "title" }, [
      _c("text", [_vm._v("客户信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "title" }, [
      _c("text", [_vm._v("项目信息")])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../Documents/HBuilderProjects/shareJQSystem/main.js?{\"page\":\"pages%2Fprojectdetail%2Fprojectdetail\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/projectdetail/projectdetail.js.map