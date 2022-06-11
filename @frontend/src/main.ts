import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import { router } from "./router"
import "./master.css"

const app = createApp( App )
app.use( router )
app.use( createPinia() )
app.config.globalProperties.$axios = axios

app.mount("#app")