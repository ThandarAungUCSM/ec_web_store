// import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import httpConfig from './httpConfig';
import HTTP from './config/HTTP';

const app = createApp(App).use(store)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) // provide 'axios' //Vue.prototype.axios = axios;// Providing to all components during app creation // vue2

app.config.globalProperties.$HTTP = HTTP
app.config.globalProperties.$httpConfig = httpConfig
app.use(router)
app.mount('#app')

// const app = createApp(App)
// app.config.globalProperties.axios = axios;
// createApp(App).use(store).use(router).mount('#app')
