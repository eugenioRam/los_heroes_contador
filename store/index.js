export const state = () => ({
	show_modal_crear: false,
})

export const mutations = {
    toggleModal (state) {
        state.show_modal_crear = !state.show_modal_crear
    }
}
export const getters = {
    show_modal_crear: state => {
        return state.show_modal_crear
    }
}
