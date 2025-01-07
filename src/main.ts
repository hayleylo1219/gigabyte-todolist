import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import Router from './router/index'
import App from './App.vue'
// import Api from '@plugins/api'

const pinia = createPinia()
const app = createApp(App)

app.use(Router)
app.use(pinia)
// app.use(Api)
app.mount('#app')
