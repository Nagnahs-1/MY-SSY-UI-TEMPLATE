import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import SSYUI from 'ssy-ui-vite'
import 'ssy-ui-vite/style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(SSYUI)
app.mount('#app')
