

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import globalComponents from './components/global'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(globalComponents)

// app.use(createPinia())
// app.use(router)

app.mount('#app')
