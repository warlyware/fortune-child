import { createApp } from 'vue'

import VueGtag from "vue-gtag"
import App from './App.vue'

import router from './router/index'

import './index.css'

const app = createApp(App)

app.use(VueGtag, {
  config: { 
    id: "G-F5WF1KCLPP",
  },
}, router)

app.use(router).mount('#app')
