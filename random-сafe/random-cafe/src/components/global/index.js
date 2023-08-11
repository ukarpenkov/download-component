import Uinput from './Uinput.vue'
import UFile from './UFile.vue'



const components = [
  { name: 'Uinput', component: Uinput },
  { name: 'UFile', component: UFile },
  { name: 'URadio', component: URadio },
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}