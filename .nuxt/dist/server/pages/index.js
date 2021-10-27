exports.ids = [3,1,2];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4b3bd3c0", content, true, context)
};

/***/ }),

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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_contador_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nombre_error{outline:none!important;border:2px solid red}.add_content{border-radius:15px;padding:5px;display:flex;flex-direction:row;background-color:#a1f3bd;border:2px solid #f0f0f0}.valor_contador{width:40px;text-align:center}.contador_error{outline:none!important;border:2px solid red}[dir=ltr] .add_titulo{text-align:left!important}[dir=rtl] .add_titulo{text-align:right!important}.add_titulo{flex-grow:1;padding-left:5%;align-self:center}.add_contador{flex-grow:1;align-items:center;text-align:center}.add_contador,.contador{display:flex;flex-direction:row}.add_action{display:flex;flex-grow:1;align-self:center;text-align:center}.btn_cancelar{background:#6c6c6c}.btn_cancelar:hover{background:#8d8d8d;color:#fff}.cancelar{flex-grow:1;align-self:center}.btn_agregar{background:linear-gradient(#e7a747,#e27125);flex-grow:1;font-size:1rem;line-height:1.8rem;color:#fff;border-radius:4px;border:none;vertical-align:middle;padding:0 20px;cursor:pointer}.btn_agregar:hover{background:#f88a33}.add_nuevo{flex-grow:1;align-self:center}.modal-overlay{z-index:100;position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;background-color:rgba(0,0,0,.8549)}.modal{height:55px;width:80%;margin-top:20%}.modal-fade-enter,.modal-fade-leave-to{opacity:0}.modal-fade-enter-active,.modal-fade-leave-active{transition:opacity .5s ease}@media (max-width:600px){.modal{height:150px;margin-top:20%;width:-webkit-fill-available}.add_content{border-radius:15px;display:flex;flex-direction:column;padding:5% 5px 5px}.nuevo_nombre{width:100%}.modal-overlay{justify-content:left;padding:2%}.add_titulo{padding-left:0}.cancelar{padding-right:10%}.contador{align-self:start;justify-content:center}}@media (min-width:600px) and (max-width:900px){.modal{margin-top:20%;width:-webkit-fill-available}.add_content{border-radius:15px;padding:5px;display:flex;flex-direction:row}.nuevo_nombre{width:90%}.modal-overlay{justify-content:left;width:98%;padding:1%}.add_titulo{padding-left:0}.cancelar{padding-right:1%}.contador{align-self:start;justify-content:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/add_contador.vue?vue&type=template&id=a20b0904&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal-fade"}},[_c('div',{staticClass:"modal-overlay"},[_c('div',{staticClass:"add_content modal row"},[_c('div',{staticClass:"add_titulo"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.obj.name),expression:"obj.name"}],staticClass:"nuevo_nombre",attrs:{"type":"text","placeholder":"Ingrese nombre contador","id":"nuevo_nombre","autofocus":"","maxlength":"20"},domProps:{"value":(_vm.obj.name)},on:{"focus":_vm.limpiar_nombre,"keypress":_vm.validar_solo_letras,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.obj, "name", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"add_contador"},[_c('div',{staticClass:"contador"},[_c('div',{staticStyle:{"padding-right":"5%"}},[_c('h2',{staticClass:"name"},[_vm._v("Valor")])]),_vm._v(" "),_c('div',{staticStyle:{"align-self":"center"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.obj.value),expression:"obj.value"}],staticClass:"valor_contador",attrs:{"type":"number","id":"valor_contador","min":"1","max":"20"},domProps:{"value":(_vm.obj.value)},on:{"keypress":_vm.validar_solo_numeros,"focus":_vm.limpiar_valor,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.obj, "value", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"add_action"},[_c('div',{staticClass:"add_nuevo"},[_c('button',{staticClass:"btn_agregar",attrs:{"disabled":_vm.disable_btn_agregar},on:{"click":_vm.guardar_contador}},[_vm._v("Agregar contador")])]),_vm._v(" "),_c('div',{staticClass:"cancelar"},[_c('button',{staticClass:"btn_cancelar",on:{"click":_vm.cambiar_estado_modal_crear}},[_vm._v("X")])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/add_contador.vue?vue&type=template&id=a20b0904&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/add_contador.vue?vue&type=script&lang=js&
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
/* harmony default export */ var add_contadorvue_type_script_lang_js_ = ({
  name: "crear_contador",

  data() {
    return {
      obj: {
        name: "",
        value: 0
      },
      disable_btn_agregar: true
    };
  },

  watch: {
    "obj.name"() {
      if (this.obj.name == "") {
        this.disable_btn_agregar = true;
      } else {
        this.disable_btn_agregar = false;
      }
    }

  },
  methods: {
    cambiar_estado_modal_crear() {
      this.$store.commit("toggleModal");
    },

    guardar_contador() {
      if (this.obj.name != "") {
        if (Number(this.obj.value) <= 20) {
          var items = JSON.parse(localStorage.getItem("contadores"));

          if (items) {
            const found = items.find(element => element.name === this.obj.name);

            if (!found) {
              this.$store.dispatch("contador/guardar_contador", this.obj).then(res => {
                this.obj.value = 0;
                this.obj.name = "";
                this.cambiar_estado_modal_crear();
              }).catch(err => {
                console.log(err);
              });
            } else {
              this.error_nombre();
            }
          } else {
            this.$store.dispatch("contador/guardar_contador", this.obj).then(res => {
              this.obj.value = 0;
              this.obj.name = "";
              this.cambiar_estado_modal_crear();
            }).catch(err => {
              console.log(err);
            });
          }
        } else {
          this.error_valor();
        }
      } else {
        this.error_nombre();
      }
    },

    limpiar_nombre() {
      var element = document.getElementById("nuevo_nombre");
      element.classList.remove("nombre_error");
    },

    limpiar_valor() {
      var element = document.getElementById("valor_contador");
      element.classList.remove("contador_error");
    },

    error_nombre() {
      var element = document.getElementById("nuevo_nombre");
      element.classList.add("nombre_error");
    },

    error_valor() {
      var element = document.getElementById("valor_contador");
      element.classList.add("contador_error");
    },

    validar_solo_letras(e) {
      var key = e.keyCode || e.which;
      var tecla = String.fromCharCode(key).toLowerCase();
      var letras = "aeiouáéíóúabcdefghijklmnñopqrstuvwxyzAEIOUÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
      var especiales = "8-16-20-32-80-186";
      var valor = especiales.split('-');
      var tecla_especial = false;

      for (var j in valor) {
        if (key == valor[j]) {
          tecla_especial = true;
          break;
        }
      }

      var charStr = String.fromCharCode(key);

      if (letras.indexOf(charStr) == -1 && !tecla_especial) {
        e.preventDefault();
        e.stopPropagation();
      }
    },

    validar_solo_numeros(e) {
      var key = e.keyCode || e.which;
      var tecla = String.fromCharCode(key).toLowerCase();
      var letras = "1234567890";
      var especiales = "8-16-20-80-186";
      var valor = especiales.split("-");
      var tecla_especial = false;

      for (var j in valor) {
        if (key == valor[j]) {
          tecla_especial = true;
          break;
        }
      }

      var charStr = String.fromCharCode(key);

      if (letras.indexOf(charStr) == -1 && !tecla_especial) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/add_contador.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_add_contadorvue_type_script_lang_js_ = (add_contadorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/add_contador.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_add_contadorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "fdbc7e1a"
  
)

/* harmony default export */ var add_contador = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width:600px){.grid-container{display:grid;min-height:100vh;grid-template-rows:8vh auto 8vh;grid-template-areas:\"header\" \"main\" \"footer\"}.label_order{color:#000;font-size:1rem;font-weight:700;letter-spacing:1px}.contenedor_filtros{display:flex;flex-direction:row;align-items:center;text-align:center}.ordenar_por_nombre,.ordenar_por_valor{padding-left:1%!important}.header{grid-area:header;background-color:#f88a33;display:flex;flex-direction:column}.content-all{padding:0 2%!important}.order_filter{flex-grow:1;padding-left:0}.add_area{flex-grow:1;text-align:right;padding-right:0}.filters_area{flex-grow:10;display:flex;width:-webkit-fill-available;padding:0 4%}}@media (min-width:600px) and (max-width:900px){.grid-container{display:grid;min-height:100vh;grid-template-rows:21vh auto 8vh;grid-template-areas:\"header\" \"main\" \"footer\"}.header{grid-area:header;background-color:#f88a33;display:flex;flex-direction:row}.content-all{padding:0 2%!important}.order_filter{padding-left:0}.add_area{flex-grow:1;text-align:right;padding-right:0}}.buscar_registros_input{padding:1% 0;display:flex;flex-direction:row}.contenedor_filtros{display:flex;flex-direction:row;align-items:center;text-align:center}.ordenar_por_nombre{padding-left:1%!important;min-width:120px}.ordenar_por_valor{padding-left:3%!important;min-width:120px}.content-all{padding:0 8%}.mensaje_sugerencia_crear{padding-top:8%;color:#000;font-size:18px;text-align:center;vertical-align:middle}button{border-radius:25px!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=58e4d5f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-all"},[_c('add_contador',{directives:[{name:"show",rawName:"v-show",value:(_vm.show_modal_crear),expression:"show_modal_crear"}],on:{"close-modal":function($event){_vm.show_modal_crear = false}}}),_vm._ssrNode(" "),(_vm.list.length > 0)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"buscar_registros_input\"><div><input type=\"text\" placeholder=\"Buscar registros...\" name=\"buscador\""+(_vm._ssrAttr("value",(_vm.buscador)))+" class=\"buscador\"></div> <div class=\"contenedor_filtros\"><div class=\"label_order\">Ordenar por:</div> <div class=\"ordenar_por_nombre\"><button class=\"btn_ordenar\">"+_vm._ssrEscape(_vm._s(_vm.icono_ordenan_nombre)+" Nombre ")+"</button></div> <div class=\"ordenar_por_valor\"><button class=\"btn_ordenar\">"+_vm._ssrEscape(" "+_vm._s(_vm.icono_ordenar_valor)+" Valor ")+"</button></div></div></div> "),_vm._l((_vm.listado_items),function(item,index){return _vm._ssrNode("<div style=\"padding-bottom: 15px\">","</div>",[_c('contador',{attrs:{"item":item,"index":index}})],1)})],2):_vm._ssrNode(("<div class=\"mensaje_sugerencia_crear\">\n        Para crear un nuevo registro presionar el botón <b>Nuevo contador ✚</b></div>"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=58e4d5f6&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/add_contador.vue + 4 modules
var add_contador = __webpack_require__(43);

// EXTERNAL MODULE: ./components/contador.vue + 4 modules
var contador = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "home",
  components: {
    add_contador: add_contador["default"],
    contador: contador["default"]
  },

  data() {
    return {
      datos: {},
      listado_items: [],
      buscador: "",
      icono_ordenan_nombre: "",
      icono_ordenar_valor: "",
      flecha_arriba: "↑",
      flecha_abajo: "↓",
      nombre_ascendente: true,
      valor_ascendente: false
    };
  },

  computed: {
    show_modal_crear() {
      return this.$store.state.show_modal_crear;
    },

    list() {
      return this.$store.state.contador.list;
    },

    number_filter() {
      return this.$store.state.filtros.number_filter;
    }

  },
  watch: {
    "$store.state.contador.list"() {
      if (this.$store.state.contador.list) {
        this.listado_items = this.$store.state.contador.list;
      }
    },

    "$store.state.filtros.filterSmaller"() {
      if (this.$store.state.filtros.filterSmaller) {
        var items = this.list;
        this.listado_items = items.filter(e => Number(e.value) <= Number(this.number_filter));
      } else {
        this.clean_filters();
      }
    },

    "$store.state.filtros.filterHigher"() {
      if (this.$store.state.filtros.filterHigher) {
        var items = this.list;
        this.listado_items = items.filter(e => Number(e.value) >= Number(this.number_filter));
      } else {
        this.clean_filters();
      }
    }

  },
  methods: {
    cargar_inicial() {
      if (this.$store.state.contador.list) {
        this.listado_items = this.$store.state.contador.list;
      }
    },

    buscar_registros() {
      var items = this.list;
      this.listado_items = items.filter(item => item.name.toLowerCase().indexOf(this.buscador.toLowerCase()) > -1);
    },

    clean_filters() {
      this.$store.commit("filtros/limpiar_filtros");
      this.cargar_inicial();
    },

    order_por_nombre() {
      if (this.nombre_ascendente) {
        this.$store.commit("contador/ordenar_por_nombre_desc");
        this.nombre_ascendente = false;
        this.valor_ascendente = false;
        this.icono_ordenan_nombre = this.flecha_abajo;
        this.icono_ordenar_valor = "";
      } else {
        this.$store.commit("contador/ordenar_por_nombre_asc");
        this.nombre_ascendente = true;
        this.valor_ascendente = false;
        this.icono_ordenan_nombre = this.flecha_arriba;
        this.icono_ordenar_valor = "";
      }
    },

    order_por_valor() {
      if (this.valor_ascendente) {
        this.$store.commit("contador/ordenar_por_valor_desc");
        this.nombre_ascendente = false;
        this.valor_ascendente = false;
        this.icono_ordenan_nombre = "";
        this.icono_ordenar_valor = this.flecha_abajo;
      } else {
        this.$store.commit("contador/ordenar_por_valor_asc");
        this.valor_ascendente = true;
        this.nombre_ascendente = false;
        this.icono_ordenan_nombre = "";
        this.icono_ordenar_valor = this.flecha_arriba;
      }
    }

  },

  created() {
    this.cargar_inicial();
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4192eed1"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Contador: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=index.js.map