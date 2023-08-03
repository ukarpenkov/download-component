import Uinput from './Uinput.vue'


const components = [
  { name: 'Uinput', component: Uinput }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}