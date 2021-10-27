export const state = () => ({
    filter: [],
    filter_active: false,
    filterHigher :false,
    filterSmaller :false,
    number_filter: 0,
})
export const mutations = {
    filtrar_mayor(state, data) {
        state.filterHigher = true
        state.number_filter = Number(data)
        state.filter_active = true
    },
    filtrar_menor(state, data) {
        state.filterSmaller = true
        state.number_filter = Number(data)
        state.filter_active = true
    },
    limpiar_filtros(state) {
        state.filter_active = false
        state.filterHigher = false
        state.filterSmaller = false
        
    },
}