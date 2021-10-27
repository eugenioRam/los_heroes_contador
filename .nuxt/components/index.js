export const AddContador = () => import('../..\\components\\add_contador.vue' /* webpackChunkName: "components/add-contador" */).then(c => wrapFunctional(c.default || c))
export const Contador = () => import('../..\\components\\contador.vue' /* webpackChunkName: "components/contador" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
