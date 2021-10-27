

<template>
    <transition name="modal-fade">
        <div class="modal-overlay">
            <div class="add_content modal row">
                <div class="add_titulo">
                    <input
                        type="text"
                        placeholder="Ingrese nombre contador"
                        id="nuevo_nombre"
                        class="nuevo_nombre"
                        autofocus
                        v-model="obj.name"
                        @focus="limpiar_nombre"
                        maxlength="20"
                        @keypress="validar_solo_letras"
                    />
                </div>

                <div class="add_contador">
                    <div class="contador">
                        <div style="padding-right: 5%">
                            <h2 class="name">Valor</h2>
                        </div>

                        <div style="align-self: center">
                            <input
                                type="number"
                                id="valor_contador"
                                class="valor_contador"
                                min="1"
                                max="20"
                                v-model="obj.value"
                                @keypress="validar_solo_numeros"
                                @focus="limpiar_valor"
                            />
                        </div>
                    </div>
                </div>
                
                <div class="add_action">
                    <div class="add_nuevo">
                        <button @click="guardar_contador" class="btn_agregar" :disabled="disable_btn_agregar">Agregar contador</button>
                    </div>

                    <div class="cancelar">
                        <button class="btn_cancelar" @click="cambiar_estado_modal_crear">X</button>
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>
<script>

export default {
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
    watch:{
        "obj.name"(){
            if(this.obj.name == ""){
                this.disable_btn_agregar = true
            }else{
                this.disable_btn_agregar = false
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
                        const found = items.find(
                            (element) => element.name === this.obj.name
                        );
                        if (!found) {
                            this.$store.dispatch("contador/guardar_contador", this.obj).then((res) => {
                                this.obj.value = 0;
                                this.obj.name = "";
                                this.cambiar_estado_modal_crear();
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                        } else {
                            this.error_nombre();
                        }
                    } else {
                        this.$store.dispatch("contador/guardar_contador", this.obj).then((res) => {
                            this.obj.value = 0;
                            this.obj.name = "";
                            this.cambiar_estado_modal_crear();
                        })
                        .catch((err) => {
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
        validar_solo_letras(e){
                    
            var key = e.keyCode || e.which;
            var tecla = String.fromCharCode(key).toLowerCase();
            var letras = "aeiouáéíóúabcdefghijklmnñopqrstuvwxyzAEIOUÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
            var especiales = "8-16-20-32-80-186";
            var valor = especiales.split('-');
            var tecla_especial = false;
        
            for(var j in valor){
                if(key == valor[j]){
                    tecla_especial = true;
                    break;
                }
            }
            
            var charStr = String.fromCharCode(key)

            if(letras.indexOf(charStr)==-1 && !tecla_especial){  
                e.preventDefault()
                e.stopPropagation()                
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
    },
};
</script>

<style >
.nombre_error {
    outline: none !important;
    border: 2px solid red;
}
.add_content {
    border-radius: 15px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #a1f3bd;
    border: 2px solid #f0f0f0;
}
.valor_contador {
    width: 40px;
    text-align: center;
}
.contador_error {
    outline: none !important;
    border: 2px solid red;
}
.add_titulo {
    flex-grow: 1;
    text-align: start !important;
    padding-left: 5%;
    align-self: center;
}
.add_contador {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}

.contador {
    display: flex;
    flex-direction: row;
}
.add_action {
    display: flex;
    flex-grow: 1;
    align-self: center;
    text-align: center;
}
.btn_cancelar {
    background: #6c6c6c;
}
.btn_cancelar:hover {
    background: #8d8d8d;
    color: #ffffff;
}
.cancelar {
    flex-grow: 1;
    align-self: center;
}
.btn_agregar {
    background: linear-gradient(#e7a747, #e27125);
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    color: #fff;
    border-radius: 4px;
    border: none;
    vertical-align: middle;
    padding: 0px 20px;
    cursor: pointer;
}
.btn_agregar:hover {
    background: #f88a33;
}
.add_nuevo {
    flex-grow: 1;
    align-self: center;
}
.modal-overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    height: 55px;
    width: 80%;
    margin-top: 20%;
}
.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}
@media (max-width: 600px) {
    .modal {
        height: 150px;
        margin-top: 20%;
        width: -webkit-fill-available;
    }
    .add_content {
        border-radius: 15px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        padding-top: 5%;
    }
    .nuevo_nombre {
        width: 100%;
    }
    .modal-overlay {
        justify-content: left;
        padding: 2%;
    }
    .add_titulo {
        padding-left: 0%;
    }
    .cancelar {
        padding-right: 10%;
    }
    .contador {
        align-self: start;
        justify-content: center;
    }
}
@media (min-width: 600px) and (max-width: 900px) {
    .modal {
        margin-top: 20%;
        width: -webkit-fill-available;
    }
    .add_content {
        border-radius: 15px;
        padding: 5px;
        display: flex;
        flex-direction: row;
    }
    .nuevo_nombre {
        width: 90%;
    }
    .modal-overlay {
        justify-content: left;
        width: 98%;
        padding: 1%;
    }
    .add_titulo {
        padding-left: 0%;
    }
    .cancelar {
        padding-right: 1%;
    }
    .contador {
        align-self: start;
        justify-content: center;
    }
}
</style>