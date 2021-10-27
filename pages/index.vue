<template>
    <div class="content-all">
        
        <add_contador v-show="showModal" @close-modal="showModal = false" />
        
        <div v-if="list.length > 0">
            <div class="search_area">
                <div class="webflow-style-input">
                    <input
                        type="text"
                        placeholder="Buscar registros..."
                        name="buscador"
                        class="buscador"
                        v-model="buscador"
                        @input="search"
                    />
                </div>
            </div>

            <div v-for="(item, index) in listado_items" :key="index" style="padding-bottom: 15px">
                <contador :item="item" :index="index" />
            </div>

        </div>

        <div v-else class="mensaje_sugerencia_crear">
            Para crear un nuevo registro presionar el botón <b>Nuevo contador ✚</b>
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
            
        };
    },
    computed: {
        showModal() {
            return this.$store.state.showModal
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
        search() {
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
        grid-template-rows: 20vh auto 8vh;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    .header {
        grid-area: header;
        background-color: #f88a33;
        display: flex;
        flex-direction: column;
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
    
}
@media (min-width: 600px) and (max-width: 900px) {
    .grid-container {
        display: grid;
        min-height: 100vh;
        grid-template-rows: 21vh auto 8vh;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    .header {
        grid-area: header;
        background-color: #f88a33;
        display: flex;
        flex-direction: row;
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
}
.search_area {
    padding: 1% 0;

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
</style>