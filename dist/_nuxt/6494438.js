(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(t,o,r){var content=r(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("56b15182",content,!0,{sourceMap:!1})},230:function(t,o,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("141f8560",content,!0,{sourceMap:!1})},231:function(t,o,r){var content=r(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("5eaf2020",content,!0,{sourceMap:!1})},298:function(t,o,r){"use strict";var n={name:"default",data:function(){return{}}},e=(r(343),r(32)),component=Object(e.a)(n,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"grid-container"},[r("Header",{staticClass:"header"}),t._v(" "),r("main",{staticClass:"main"},[r("Nuxt")],1),t._v(" "),r("Footer",{staticClass:"footer"})],1)}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{Header:r(476).default,Footer:r(477).default})},299:function(t,o,r){r(300),t.exports=r(301)},343:function(t,o,r){"use strict";r(229)},344:function(t,o,r){var n=r(81)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),n.push([t.i,'body{font-family:"Roboto";min-height:100%;margin:0}.header{grid-area:header;background-color:#f88a33;display:flex;justify-content:center;align-items:center}.main{grid-area:main;background-color:#fff}.footer{grid-area:footer;background-color:#f88a33;display:flex;justify-content:center;align-items:center}.grid-container{display:grid;min-height:100vh;grid-template-rows:8vh auto 8vh;grid-template-areas:"header" "main" "footer"}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.layout-enter-active,.layout-leave-active{transition:opacity .5s}.layout-enter,.layout-leave-to{opacity:0}.slide-bottom-enter-active,.slide-bottom-leave-active{transition:opacity .25s ease-in-out,transform .25s ease-in-out}.slide-bottom-enter,.slide-bottom-leave-to{opacity:0;transform:translate3d(0,15px,0)}.bounce-enter-active{transform-origin:top;-webkit-animation:bounce-in .8s;animation:bounce-in .8s}.bounce-leave-active{transform-origin:top;-webkit-animation:bounce-out .5s;animation:bounce-out .5s}@-webkit-keyframes bounce-in{0%{transform:scale(0)}50%{transform:scale(1.25)}to{transform:scale(1)}}@keyframes bounce-in{0%{transform:scale(0)}50%{transform:scale(1.25)}to{transform:scale(1)}}@-webkit-keyframes bounce-out{0%{transform:scale(1)}50%{transform:scale(1.25)}to{transform:scale(0)}}@keyframes bounce-out{0%{transform:scale(1)}50%{transform:scale(1.25)}to{transform:scale(0)}}ul{list-style-type:none;padding:0;margin:0;display:flex;justify-content:center;flex-wrap:wrap}li{margin:0 .5rem;padding:.25rem;font-size:1.2rem}',""]),t.exports=n},345:function(t,o,r){"use strict";r(230)},346:function(t,o,r){var n=r(81)(!1);n.push([t.i,".btn_nuevo_contador{background:linear-gradient(#42a3db,#206cc4);flex-grow:1;font-size:1rem;line-height:1.8rem;color:#fff;border:none;vertical-align:middle;padding:0;cursor:pointer;border-radius:50%;width:45px;height:45px}.btn_nuevo_contador:hover{background:#206cc4}.btn_ordenar{flex-grow:1;font-size:1rem;line-height:1.8rem;background:linear-gradient(#cee007,#97bf0d);color:#fff;border:none;vertical-align:middle;padding:0 20px;cursor:pointer}.btn_ordenar:hover{background:#97bf0d}.btn_filtrar{flex-grow:1;font-size:1rem;line-height:1.8rem;background:linear-gradient(#cee007,#97bf0d);color:#fff;border:none;vertical-align:middle;padding:0 20px;cursor:pointer}.btn_filtrar:hover{background:#97bf0d}.btn_cancelar{flex-grow:1;font-size:1rem;line-height:1.8rem;background:#a79e9a;color:#fff;border:none;vertical-align:middle;padding:0 20px;cursor:pointer}.btn_cancelar:hover{background:#494948}.header{padding:5px;display:flex;flex-direction:row;background-color:#f88a33;justify-content:flex-end}.add_contador_area{flex-grow:1;text-align:right;padding-right:8%;position:absolute;bottom:86px;right:-91px}.buscador{background-color:#fff;cursor:pointer}.contenedor_filtro_mayor_menor_igual{text-align:carga_inicial!important;padding-left:8%}@-webkit-keyframes gradient{0%{background-position:0 0}to{background-position:100% 0}}@keyframes gradient{0%{background-position:0 0}to{background-position:100% 0}}input{flex-grow:1;font-size:1rem;line-height:1.8rem;border-radius:10px;border:none;vertical-align:middle;padding:0 20px}",""]),t.exports=n},347:function(t,o,r){"use strict";r(231)},348:function(t,o,r){var n=r(81)(!1);n.push([t.i,".footer{padding:5px;display:flex;flex-direction:row;background-color:#f88a33}[dir=ltr] .total_area{text-align:left!important}[dir=rtl] .total_area{text-align:right!important}.total_area{flex-grow:12;padding-left:8%;display:flex}.label_total{flex-grow:11;align-self:center;text-align:right;padding-right:8%}",""]),t.exports=n},349:function(t,o,r){"use strict";r.r(o),r.d(o,"state",(function(){return n})),r.d(o,"mutations",(function(){return e})),r.d(o,"getters",(function(){return c}));var n=function(){return{show_modal_crear:!1}},e={toggleModal:function(t){t.show_modal_crear=!t.show_modal_crear}},c={show_modal_crear:function(t){return t.show_modal_crear}}},350:function(t,o,r){"use strict";r.r(o),r.d(o,"state",(function(){return n})),r.d(o,"actions",(function(){return e})),r.d(o,"mutations",(function(){return c})),r.d(o,"getters",(function(){return l}));r(189),r(42),r(226),r(354);var n=function(){return{list:[],total:0,cantidad_contadores:0}},e={add_cantidad_contador:function(t,data){var o=t.commit,r=t.state;o("add_cantidad_contador_mutation",data),o("actualizar_total_mutation",r.list.reduce((function(t,o){return t+Number(o.value)}),0))},remove_cantidad_contador:function(t,data){var o=t.commit,r=t.state;o("remove_cantidad_contador_mutation",data),o("actualizar_total_mutation",r.list.reduce((function(t,o){return t+Number(o.value)}),0))},guardar_contador:function(t,data){var o=t.commit,r=t.state;o("guardar_contador_mutation",data),o("actualizar_total_mutation",r.list.reduce((function(t,o){return t+Number(o.value)}),0)),o("actualizar_numero_contadores_mutation",r.list.length)},eliminar_contador:function(t,data){var o=t.commit,r=t.state;o("eliminar_contador_mutation",data),o("actualizar_total_mutation",r.list.reduce((function(t,o){return t+Number(o.value)}),0)),o("actualizar_numero_contadores_mutation",r.list.length)}},c={add_cantidad_contador_mutation:function(t,data){t.list[data].value++},remove_cantidad_contador_mutation:function(t,data){t.list[data].value--},actualizar_total_mutation:function(t,data){t.total=data},actualizar_numero_contadores_mutation:function(t,data){t.cantidad_contadores=data},guardar_contador_mutation:function(t,data){t.list.push({name:data.name,value:Number(data.value)})},eliminar_contador_mutation:function(t,data){t.list.splice(data,1)},ordenar_por_nombre_asc:function(t){t.list.sort((function(a,b){return a.name<b.name?-1:a.name>b.name?1:0}))},ordenar_por_nombre_desc:function(t){t.list.sort((function(a,b){return b.name<a.name?-1:b.name>e.name?1:0}))},ordenar_por_valor_asc:function(t){t.list=t.list.sort((function(a,b){return a.value-b.value}))},ordenar_por_valor_desc:function(t){t.list=t.list.sort((function(a,b){return b.value-a.value}))}},l={getList:function(t){return t.list},getTotal:function(t){return t.total}}},358:function(t,o,r){"use strict";r.r(o),r.d(o,"state",(function(){return n})),r.d(o,"mutations",(function(){return e}));r(189);var n=function(){return{filter:[],filter_active:!1,filterHigher:!1,filterSmaller:!1,number_filter:0}},e={filtrar_mayor:function(t,data){t.filterHigher=!0,t.number_filter=Number(data),t.filter_active=!0},filtrar_menor:function(t,data){t.filterSmaller=!0,t.number_filter=Number(data),t.filter_active=!0},limpiar_filtros:function(t){t.filter_active=!1,t.filterHigher=!1,t.filterSmaller=!1}}},363:function(t,o){},365:function(t,o){},375:function(t,o){},377:function(t,o){},402:function(t,o){},404:function(t,o){},405:function(t,o){},410:function(t,o){},412:function(t,o){},418:function(t,o){},420:function(t,o){},439:function(t,o){},451:function(t,o){},454:function(t,o){},476:function(t,o,r){"use strict";r.r(o);r(43),r(103);var n={name:"header",data:function(){return{show_limpiar_filtro:!1,filtro_mayor:!0,nombre_ascendente:!0,valor_ascendente:!1,numero_filtro:0,icono_ordenan_nombre:"",flecha_arriba:"↑",flecha_abajo:"↓",icono_ordenar_valor:"",buscador:"",disable_btn_crear_contador:!1,icono_filtro_mayor_menos_igual:"≥"}},computed:{cantidad_contadores:function(){return this.$store.state.contador.cantidad_contadores},list:function(){return this.$store.state.contador.list}},watch:{cantidad_contadores:function(){this.cantidad_contadores>=20?(this.disable_btn_crear_contador=!0,alert("ya no se pueden crear mas contadores")):this.disable_btn_crear_contador=!1}},methods:{carga_inicial:function(){this.$store.commit("contador/ordenar_por_nombre_asc"),this.icono_ordenan_nombre=this.flecha_abajo},crear_nuevo_contador:function(){console.log(this.cantidad_contadores),this.cantidad_contadores>=20?(this.disable_btn_crear_contador=!0,alert("ya no se pueden crear mas contadores")):(this.disable_btn_crear_contador=!1,this.$store.commit("toggleModal"))},filtrar_registros:function(){this.filtro_mayor?this.$store.commit("filtros/filtrar_mayor",this.numero_filtro):this.$store.commit("filtros/filtrar_menor",this.numero_filtro),this.show_limpiar_filtro=!0},filtro_mayor_menos_igual:function(){this.filtro_mayor?(this.icono_filtro_mayor_menos_igual="≤",this.filtro_mayor=!1):(this.icono_filtro_mayor_menos_igual="≥",this.filtro_mayor=!0)},validar_solo_numeros:function(t){var o=t.keyCode||t.which,r=(String.fromCharCode(o).toLowerCase(),"8-16-20-80-186".split("-")),n=!1;for(var e in r)if(o==r[e]){n=!0;break}var c=String.fromCharCode(o);-1!="1234567890".indexOf(c)||n||(t.preventDefault(),t.stopPropagation())},limpiar_filtros:function(){this.$store.commit("filtros/limpiar_filtros"),this.show_limpiar_filtro=!1}},created:function(){this.carga_inicial()}},e=(r(345),r(32)),component=Object(e.a)(n,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"header"},[r("div",{staticClass:"add_contador_area"},[r("button",{staticClass:"btn_nuevo_contador tooltip",attrs:{disabled:t.disable_btn_crear_contador},on:{click:t.crear_nuevo_contador}},[t._v("\n            ✚\n            "),r("span",{staticClass:"tooltiptext"},[t._v("Crear contador")])])]),t._v(" "),r("div",{staticClass:"contenedor_filtro_mayor_menor_igual"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.numero_filtro,expression:"numero_filtro"}],staticStyle:{width:"33px","border-radius":"3px"},attrs:{type:"number",min:"1",max:"20"},domProps:{value:t.numero_filtro},on:{keypress:t.validar_solo_numeros,input:function(o){o.target.composing||(t.numero_filtro=o.target.value)}}}),t._v(" "),r("button",{staticClass:"btn_filtrar",on:{click:t.filtro_mayor_menos_igual}},[t._v(t._s(t.icono_filtro_mayor_menos_igual))]),t._v(" "),r("button",{staticClass:"btn_filtrar",on:{click:t.filtrar_registros}},[t._v("Filtrar")]),t._v(" "),t.show_limpiar_filtro?r("button",{staticClass:"btn_cancelar tooltip",on:{click:t.limpiar_filtros}},[t._v("✖")]):t._e()])])}),[],!1,null,null,null);o.default=component.exports},477:function(t,o,r){"use strict";r.r(o);var n={name:"footer",data:function(){return{items:[]}},computed:{list:function(){return this.$store.state.contador.list},total:function(){return this.$store.state.contador.total}}},e=(r(347),r(32)),component=Object(e.a)(n,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"footer"},[r("div",{staticClass:"label_total"},[r("h2",{staticClass:"total_registros"},[t._v("Total registros: "+t._s(t.total))])])])}),[],!1,null,null,null);o.default=component.exports}},[[299,5,1,6]]]);