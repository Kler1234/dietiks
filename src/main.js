import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from "@/router/router.js";
import store from './store'
import RadioButton from "primevue/radiobutton";

const app = createApp(App);
app.use(PrimeVue, {unstyled: true});
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
