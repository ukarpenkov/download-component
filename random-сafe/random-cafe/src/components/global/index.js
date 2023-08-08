import Uinput from './Uinput.vue'
import UFile from './UFile.vue'
import UCheckBox from './UCheckBox.vue'
import URadio from './URadio.vue'


const components = [
  { name: 'Uinput', component: Uinput },
  { name: 'UFile', component: UFile },
  { name: 'UCheckBox', component: UCheckBox },
  { name: 'URadio', component: URadio },
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}