import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from './router/index'
import App from './App.vue'
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';

import '@assets/style/style.css'
import 'vue-datepicker-next/locale/zh-tw.es';

const pinia = createPinia()
const app = createApp(App)

app.use(Router)
app.use(pinia)
app.component('DatePicker', DatePicker)
app.mount('#app')
