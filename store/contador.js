export const state = () => ({
    list: [],
    total: 0,
    number_counters:0
})
export const actions = {
    add_cantidad_contador({ commit, state }, data) {
        commit('add_cantidad_contador_mutation', data)
        commit('actualizar_total_mutation', state.list.reduce((sum, value) => sum + Number(value.value),0))
    },
    remove_cantidad_contador({ commit, state }, data) {
        commit('remove_cantidad_contador_mutation', data)
        commit('actualizar_total_mutation', state.list.reduce((sum, value) => sum + Number(value.value),0))
    },
    guardar_contador({ commit,state }, data) {
        commit('guardar_contador_mutation', data)
        commit('actualizar_total_mutation', state.list.reduce((sum, value) => sum + Number(value.value),0))
        commit('actualizar_numero_contadores_mutation', state.list.length)
    },
    eliminar_contador({ commit, state }, data) {
        commit('eliminar_contador_mutation', data)
        commit('actualizar_total_mutation', state.list.reduce((sum, value) => sum + Number(value.value),0))
        commit('actualizar_numero_contadores_mutation', state.list.length)
    },
   
}
export const mutations = {
    add_cantidad_contador_mutation(state, data) {
        state.list[data].value++
    },
    remove_cantidad_contador_mutation(state, data) {
        state.list[data].value--
    },
    actualizar_total_mutation(state,data){
        state.total = data
    },
    actualizar_numero_contadores_mutation(state,data){
        state.number_counters = data
    },
    guardar_contador_mutation(state, data) {
        state.list.push({name: data.name, value: Number(data.value)})
    },
    eliminar_contador_mutation(state, data) {
        state.list.splice(data, 1);
    },
    ordenar_por_nombre_asc (state) {
        state.list.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
    },
    ordenar_por_nombre_desc(state) {
        state.list.sort(function(a, b){
            if(b.name < a.name) { return -1; }
            if(b.name > actions.name) { return 1; }
            return 0;
        })
    },
    ordenar_por_valor_asc (state) {
        state.list = state.list.sort(((a, b) => a.value - b.value));
    },
    ordenar_por_valor_desc(state) {
        state.list = state.list.sort(((a, b) => b.value - a.value));
    }
}
export const getters = {
    getList: state => {
        return state.list
    },
    getTotal: state => {
        return state.total
    }
}