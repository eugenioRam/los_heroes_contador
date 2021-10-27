exports.ids = [2];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3311c100", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card_content{border-radius:15px;padding:5px;display:flex;flex-direction:row;max-height:35px;border:2px solid #20bf55}.input_valor{max-width:19px;text-align:center;border:2px solid #20bf55}.card_title{flex-grow:10;padding-left:5%;max-width:600px}.nombre_contador{color:#000;font-size:1.1rem;font-weight:700;padding-top:5px}.card_contador{display:flex;flex-direction:row;align-items:center}.card_action,.card_contador{flex-grow:1;text-align:center}.card_action{align-self:center}.add,.contador,.contenedor_btn_valor{flex-grow:1;align-self:center}.disminuir_valor{background-color:#fff;box-sizing:border-box;position:relative;display:block;transform:scale(1.5);transform:scale(var(--ggs,1.5));width:18px;height:18px;border:2px solid #fff;border-radius:18px;color:#e26d6d}.disminuir_valor:hover{background:#e26d6d;color:#fff}.disminuir_valor:before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:6px;left:2px}.btn_disminuir_valor{padding:5px;background:#e26d6d;color:#ee8484;border-radius:25px;cursor:pointer}.btn_disminuir_valor:hover{background:#205c11}.btn_aumentar_valor{padding:5px;background:#fff;color:#37c24e;border-radius:25px;cursor:pointer}.btn_aumentar_valor:hover{background:#37c24e;color:#fff}.btn_eliminar_fila{padding:6px 10px;background:#fff;color:#f80b0b;border-radius:25px;cursor:pointer}.btn_eliminar_fila:hover{background:#dbdad9}.btn_trash:hover{background:#ff1313}.aumentar_valor{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;border:2px solid #fff;transform:scale(1.5);transform:scale(var(--ggs,1.5));border-radius:18px}.aumentar_valor:after,.aumentar_valor:before{top:6px;left:2px;content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px}.aumentar_valor:after{top:2px;left:6px;width:2px;height:10px}.tooltip{position:relative;display:inline-block;border-bottom:1px dotted #000}.tooltip .tooltiptext{visibility:hidden;width:120px;background-color:#000;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;top:20px;right:110%}.tooltip:hover .tooltiptext{visibility:visible}@media (max-width:600px){.name{color:#000;font-size:.9rem;font-weight:700;letter-spacing:1px;text-transform:capitalize}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contador.vue?vue&type=template&id=8e933f1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card_content"},[_vm._ssrNode("<div class=\"card_title\"><div class=\"nombre_contador\">"+_vm._ssrEscape(_vm._s(_vm.item.name))+"</div></div> <div class=\"card_contador\"><div class=\"coutador\"><input type=\"text\" readonly=\"readonly\" min=\"1\" max=\"20\""+(_vm._ssrAttr("value",(_vm.item.value)))+" class=\"input_valor\"></div> <div class=\"contenedor_btn_valor\"><button"+(_vm._ssrAttr("disabled",_vm.remove_disable))+" class=\"btn_disminuir_valor tooltip\"><i class=\"disminuir_valor\"></i> <span class=\"tooltiptext\">Disminuir valor</span></button> <button"+(_vm._ssrAttr("disabled",_vm.add_disable))+" class=\"btn_aumentar_valor tooltip\"><i class=\"aumentar_valor\"></i> <span class=\"tooltiptext\">Aumentar valor</span></button></div></div> <div class=\"card_action\"><button class=\"btn_eliminar_fila tooltip\">\n            X\n            <span class=\"tooltiptext\">Eliminar contador</span></button></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/contador.vue?vue&type=template&id=8e933f1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contador.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var contadorvue_type_script_lang_js_ = ({
  name: "contador",
  props: ["item", "index"],

  data() {
    return {
      count: 15,
      add_disable: false,
      remove_disable: false
    };
  },

  watch: {
    "item.value"() {
      if (this.item.value >= 20) {
        this.add_disable = true;
      } else {
        this.add_disable = false;
      }

      if (this.item.value <= 0) {
        this.remove_disable = true;
      } else {
        this.remove_disable = false;
      }
    }

  },
  methods: {
    eliminar_contador() {
      this.$store.dispatch("contador/eliminar_contador", this.index).then(res => {}).catch(err => {
        console.log(err);
      });
    },

    add_cantidad_contador() {
      this.$store.dispatch("contador/add_cantidad_contador", this.index).then(res => {}).catch(err => {
        console.log(err);
      });
    },

    remove_cantidad_contador() {
      this.$store.dispatch("contador/remove_cantidad_contador", this.index).then(res => {}).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./components/contador.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_contadorvue_type_script_lang_js_ = (contadorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/contador.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_contadorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c60866d6"
  
)

/* harmony default export */ var contador = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contador.js.map