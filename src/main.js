import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";

import router from "@/router/router.js";
import store from './store'
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from 'primevue/button'
import Paginator from "primevue/paginator";

const app = createApp(App);

app.component ('Button', Button);
app.component ('Paginator', Paginator);
app.use(PrimeVue);
app.use(router);
app.use(store);
app.mount('#app');

const token = sessionStorage.getItem('token');

if (token) {
    store.dispatch('autoLogin', token)
}
