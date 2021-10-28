<template>
    <div class="content-all">
        
        <add_contador v-show="show_modal_crear" @close-modal="show_modal_crear = false" />
        
        <div v-if="list.length > 0">
            <div class="buscar_registros_input">
                <div>
                    <input
                        type="text"
                        placeholder="Buscar registros..."
                        name="buscador"
                        class="buscador"
                        v-model="buscador"
                        @input="buscar_registros"
                    />
                </div>
                
                <div class="contenedor_filtros">
                    <div class="label_order">Ordenar por:</div>
                    <div class="ordenar_por_nombre">
                        <button @click="order_por_nombre" class="btn_ordenar">{{ icono_ordenan_nombre }} Nombre </button>
                    </div>

                    <div class="ordenar_por_valor">
                        <button @click="order_por_valor" class="btn_ordenar"> {{ icono_ordenar_valor }} Valor </button>
                    </div>

                </div>

            </div>

           <div v-for="(item, index) in listado_items" :key="index" style="padding-bottom: 15px">
                <contador :item="item" :index="index" />
            </div>

        </div>

        <div v-else class="mensaje_sugerencia_crear">
            Para crear un nuevo registro presionar el botón azul <b> ✚</b>
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
import add_contador from "~/components/add_contador.vue";
import contador from "~/components/contador.vue";

export default {
    name: "home",
    components: {
        add_contador,
        contador,
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
            valor_ascendente: false,
            
        };
    },
    computed: {
        show_modal_crear() {
            return this.$store.state.show_modal_crear
        },
        list() {
            return this.$store.state.contador.list
        },
        number_filter() {
            return this.$store.state.filtros.number_filter
        },
    },
    watch: {
        "$store.state.contador.list"() {
            if (this.$store.state.contador.list) {
                this.listado_items = this.$store.state.contador.list
            }
        },
        "$store.state.filtros.filterSmaller"() {
            if (this.$store.state.filtros.filterSmaller) {
                var items = this.list
                this.listado_items = items.filter(
                    (e) => Number(e.value) <= Number(this.number_filter)
                )
            } else {
                this.clean_filters()
            }
        },
        "$store.state.filtros.filterHigher"() {
            if (this.$store.state.filtros.filterHigher) {
                var items = this.list;
                this.listado_items = items.filter(
                    (e) => Number(e.value) >= Number(this.number_filter)
                );
            } else {
                this.clean_filters();
            }
        },
    },
    methods: {
        cargar_inicial() {
            if (this.$store.state.contador.list) {
                this.listado_items = this.$store.state.contador.list
            }
        },
        buscar_registros() {
            var items = this.list
            this.listado_items = items.filter(
                (item) =>
                    item.name.toLowerCase().indexOf(this.buscador.toLowerCase()) > -1
            );
        },
        clean_filters() {
            this.$store.commit("filtros/limpiar_filtros");
            this.cargar_inicial()
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
        },
    },
    created() {
        this.cargar_inicial()
    }
};
</script>


<style lang="css" >
@media (max-width: 600px) {
    .grid-container {
        display: grid;
        min-height: 100vh;
        grid-template-rows: 8vh auto 8vh;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    .label_order {
        color: #000000;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .contenedor_filtros {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
    }
    .ordenar_por_nombre {
        padding-left: 1% !important;
    }
    .ordenar_por_valor {
        padding-left: 1% !important;
    }
    .header {
        padding: 5px;
        display: flex;
        background-color: #f88a33;
        justify-content: flex-end;
        padding-right: 6%;
    }
    .content-all {
        padding: 0px 2% !important;
    }
    .order_filter {
        flex-grow: 1;
        padding-left: 0%;
    }
    .add_area {
        flex-grow: 1;
        text-align: right;
        padding-right: 0%;
    }
    .filters_area {
        flex-grow: 10;
        display: flex;
        width: -webkit-fill-available;
        padding: 0 4%;
    }
    .add_contador_area {
        flex-grow: 1;
        text-align: right;
        padding-right: 8%;
        position: absolute;
        bottom: 86px;
        right: -4%;
    }
    
}
@media (min-width: 600px) and (max-width: 900px) {
    .grid-container {
        display: grid;
        min-height: 100vh;
        grid-template-rows: 8vh auto 8vh;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    .header {
        display: flex;
        flex-direction: row;
        background-color: #f88a33;
        justify-content: flex-end;
        padding: 5px;
        padding-right: 6%;
    }
    .content-all {
        padding: 0px 2% !important;
    }
    .order_filter {
        padding-left: 0%;
    }
    .add_area {
        flex-grow: 1;
        text-align: right;
        padding-right: 0%;
    }
    .add_contador_area {
        flex-grow: 1;
        text-align: right;
        padding-right: 8%;
        position: absolute;
        bottom: 86px;
        right: -4%;
    }
}
.buscar_registros_input {
    padding: 1% 0;
    display: flex;
    flex-direction: row;
}
.contenedor_filtros {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
}
.ordenar_por_nombre {
    padding-left: 1% !important;
    min-width: 120px;
}
.ordenar_por_valor {
    padding-left: 3% !important;
    min-width: 120px;
}
.content-all {
    padding: 0px 8%;
}
.mensaje_sugerencia_crear{
        padding-top: 8%; 
        color: black;
        font-size: 18px;
        text-align: center;
        vertical-align: middle;
        
}
button {
    border-radius: 25px !important;
}
</style>