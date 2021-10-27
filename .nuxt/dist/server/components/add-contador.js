exports.ids = [1];
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

/***/ })

};;
//# sourceMappingURL=add-contador.js.map