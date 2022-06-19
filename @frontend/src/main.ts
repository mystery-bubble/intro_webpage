import { createApp } from 'vue'
import { store, key } from '@/stores'
import axios from 'axios'

import App from './App.vue'
import { router } from "./router"
import "./master.css"

const app = createApp( App )
app.use( router )
app.use( store, key )
app.config.globalProperties.$axios = axios

app.mount("#app")