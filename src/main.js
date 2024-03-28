import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";


import router from "@/router/router.js";
import store from './store'
import ProgressBar from "primevue/progressbar";

const app = createApp(App);

app.component('ProgressBar', ProgressBar)

app.use(PrimeVue);
app.use(router);
app.use(store);
const token = sessionStorage.getItem('token');
if (token) {
    store.dispatch('autoLogin', token).then(success => {
        if (success) {
            app.use(store).mount('#app');
        }
    });
} else {
    app.use(store).mount('#app');
}
