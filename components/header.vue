<template>
    <div class="header">

        <div class="add_contador_area">
            <button @click="crear_nuevo_contador" :disabled="disable_btn_crear_contador" class="btn_nuevo_contador tooltip">
                ✚
                <span class="tooltiptext">Crear contador</span>
            </button>
        </div>

        <div class="contenedor_filtro_mayor_menor_igual">
            
            <input
                type="number"
                v-model="numero_filtro"
                min="1"
                max="20"
                style="width: 33px; border-radius:3px;"
                @keypress="validar_solo_numeros"
            />

            <button class="btn_filtrar" @click="filtro_mayor_menos_igual">{{ icono_filtro_mayor_menos_igual }}</button>
            <button @click="filtrar_registros" class="btn_filtrar">Filtrar</button>
            <button v-if="show_limpiar_filtro" class="btn_cancelar tooltip" @click="limpiar_filtros">✖</button>

        </div>

        
    </div>
</template>

<script>
export default {
    name: "header",
    data() {
        return {
            show_limpiar_filtro: false,
            filtro_mayor: true,
            nombre_ascendente: true,
            valor_ascendente: false,
            numero_filtro: 0,
            icono_ordenan_nombre: "",
            flecha_arriba: "↑",
            flecha_abajo: "↓",
            icono_ordenar_valor: "",
            buscador: "",
            disable_btn_crear_contador: false,
            icono_filtro_mayor_menos_igual: '≥'
        };
    },
    computed: {
        cantidad_contadores() {
            return this.$store.state.contador.cantidad_contadores;
        },
        list() {
            return this.$store.state.contador.list;
        },
    },
    watch: {
        "cantidad_contadores"() {
            if (this.cantidad_contadores >= 20) {
                this.disable_btn_crear_contador = true;
                alert("ya no se pueden crear mas contadores")
            } else {
                this.disable_btn_crear_contador = false;
                
            }
        },
    },
    methods: {
        carga_inicial() {
            this.$store.commit("contador/ordenar_por_nombre_asc");
            this.icono_ordenan_nombre = this.flecha_abajo;
        },
        crear_nuevo_contador() {
            console.log(this.cantidad_contadores)
            if (this.cantidad_contadores >= 20) {
                this.disable_btn_crear_contador = true;
                alert("ya no se pueden crear mas contadores")
            } else {
                this.disable_btn_crear_contador = false;
                this.$store.commit("toggleModal");
            }
            
        },
        filtrar_registros(){
            if (this.filtro_mayor) {
                this.$store.commit("filtros/filtrar_mayor", this.numero_filtro);
            }
            else{
                this.$store.commit("filtros/filtrar_menor",this.numero_filtro);
            }
            this.show_limpiar_filtro = true
        },
        filtro_mayor_menos_igual(){
            if (this.filtro_mayor) {
                this.icono_filtro_mayor_menos_igual = '≤'
                this.filtro_mayor = false
            }
            else{
                this.icono_filtro_mayor_menos_igual = '≥'
                this.filtro_mayor = true
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
        },
        limpiar_filtros() {
            this.$store.commit("filtros/limpiar_filtros");
            this.show_limpiar_filtro = false
        },
    },
    created() {
        this.carga_inicial();
    }
};
</script>


<style>
.btn_nuevo_contador {
    background: linear-gradient(#42a3db, #206cc4);
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    color: #fff;
    border: none;
    vertical-align: middle;
    padding: 0px 0px;
    cursor: pointer;
    border-radius: 50%;
    width: 45px;
    height: 45px;
}

.btn_nuevo_contador:hover {
    background: #206cc4;
}

.btn_ordenar {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    background: linear-gradient(#cee007, #97bf0d);
    color: #fff;
    border: none;
    vertical-align: middle;
    padding: 0px 20px;
    cursor: pointer;
}
.btn_ordenar:hover {
    background: #97bf0d;
}

.btn_filtrar {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    background: linear-gradient(#cee007, #97bf0d);
    color: #fff;
    border: none;
    vertical-align: middle;
    padding: 0px 20px;
    cursor: pointer;
}
.btn_filtrar:hover {
    background: #97bf0d;
}
.btn_cancelar {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    background: #a79e9a;
    color: rgb(255, 255, 255);
    border: none;
    vertical-align: middle;
    padding: 0px 20px;
    cursor: pointer;
}
.btn_cancelar:hover {
    background: #494948;
}

.header {
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #f88a33;
    justify-content: flex-end;
}


.add_contador_area {
    flex-grow: 1;
    text-align: right;
    padding-right: 8%;
    position: absolute;
    bottom: 86px;
    right: -4%;
}
.buscador {
    background-color: white;
    cursor: pointer;
}

.contenedor_filtro_mayor_menor_igual {
    padding-left: 8%;
}


@keyframes gradient {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
}
input {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    border-radius: 10px;
    border: none;
    vertical-align: middle;
    padding: 0 20px;
}
</style>

