

<template>
    <div class="card_content">
        <div class="card_title">
            <div class="nombre_contador">{{ item.name }}</div>
        </div>

        <div class="card_contador">
            
           
            <div class="coutador">
                <input
                    type="text"
                    class="input_valor"
                    readonly
                    v-model="item.value"
                    min="1"
                    max="20"
                />
            </div>

            <div class="contenedor_btn_valor">
                <button class="btn_disminuir_valor tooltip" @click="remove_cantidad_contador" :disabled="remove_disable">
                    <i class="disminuir_valor"></i>
                    <span class="tooltiptext">Disminuir valor</span>
                </button>
                <button class="btn_aumentar_valor tooltip" @click="add_cantidad_contador" :disabled="add_disable">
                    <i class="aumentar_valor"></i>
                    <span class="tooltiptext">Aumentar valor</span>
                </button>
            </div>

        </div>

        <div class="card_action">
            <button class="btn_eliminar_fila tooltip" @click="eliminar_contador">
                X
                <span class="tooltiptext">Eliminar contador</span>
            </button>
        </div>
    </div>
</template>


<script>
export default {
    name: "contador",
    props: ["item", "index"],
    data() {
        return {
            count: 15,
            add_disable: false,
            remove_disable: false,
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
        },
    },
    methods: {
        eliminar_contador() {
            this.$store.dispatch("contador/eliminar_contador", this.index).then((res) => {})
            
            .catch((err) => {
                console.log(err);
            });
        },
        add_cantidad_contador() {
            this.$store.dispatch("contador/add_cantidad_contador", this.index).then((res) => {})
            
            .catch((err) => {
                console.log(err);
            });
        },
        remove_cantidad_contador() {
            this.$store.dispatch("contador/remove_cantidad_contador", this.index).then((res) => {})
            
            .catch((err) => {
                console.log(err);
            });
        },
    }
    
};
</script>

<style>
.card_content {
    border-radius: 15px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    max-height: 35px;
    border: 2px solid #20bf55;
}
.input_valor {
    max-width: 19px;
    text-align: center;
    border: 2px solid #20bf55;
}
.card_title {
    flex-grow: 10;
    padding-left: 5%;
    max-width: 600px;
}
.nombre_contador {
    color: #000000;
    font-size: 1.1rem;
    font-weight: 700;
    padding-top: 5px;;
}
.card_contador {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
.card_action {
    flex-grow: 1;
    align-self: center;
    text-align: center;
}
.contenedor_btn_valor {
    flex-grow: 1;
    align-self: center;

}
.contador {
    flex-grow: 1;
    align-self: center;
}
.add {
    flex-grow: 1;
    align-self: center;
}
.disminuir_valor {
    background-color: #ffffff;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1.5));
    width: 18px;
    height: 18px;
    border: 2px solid #ffffff;
    border-radius: 18px;
    color: #e26d6d;
}
.disminuir_valor:hover {
    background: #e26d6d;
    color: #ffffff;
}
.disminuir_valor:before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    top: 6px;
    left: 2px;
   
}
.btn_disminuir_valor {
    padding: 5px;
    background: #e26d6d;
    color: #ee8484;
    border-radius: 25px;
    cursor: pointer;
}
.btn_disminuir_valor:hover {
    background: #205c11;
}

.btn_aumentar_valor {
    padding: 5px;
    background: #ffffff;
    color: #37c24e;
    border-radius: 25px;
    cursor: pointer;
}
.btn_aumentar_valor:hover {
    background: #37c24e;
    color: #ffffff;
}
.btn_eliminar_fila {
    padding: 6px 10px;
    background: #ffffff;
    color: #f80b0b;
    border-radius: 25px;
    cursor: pointer;
}
.btn_eliminar_fila:hover {
    background: #dbdad9;
}
.btn_trash:hover {
    background: #ff1313;
}
.aumentar_valor {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #ffffff;
    transform: scale(var(--ggs, 1.5));
    border-radius: 18px;

}
.aumentar_valor::after,
.aumentar_valor::before {
    top: 6px;
    left: 2px;
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    
}
.aumentar_valor::after {
    top: 2px;
    left: 6px;
    width: 2px;
    height: 10px;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 110%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
@media (max-width: 600px) {
    .name {
        color: #000000;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: capitalize;
    }
}
</style>