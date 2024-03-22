import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import CalculatorPage from "@/views/CalculatorPage.vue";
import DietsPage from "@/views/DietsPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import Profile from "@/views/Profile.vue"
import ReceiptsPage from "@/views/ReceiptsPage.vue";
import IndexMassiTela from "@/components/IndexMassiTela.vue";
import CalculatorCalories from "@/components/CalculatorCalories.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: MainPage},
        {path: '/login', component: LoginPage},
        {path: '/register', component: RegistrationPage},
        {path: '/diets', component: DietsPage},
        {path: '/receipts', component: ReceiptsPage},
        {path: '/calculators', component: CalculatorPage},
        {path: '/test', component: IndexMassiTela},
        {path: '/product/:productName', component: CalculatorCalories}
    ]
});

