import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import CalculatorPage from "@/views/CalculatorPage.vue";
import DietsPage from "@/views/DietsPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import Profile from "@/views/Profile.vue"
import ReceiptsPage from "@/views/ReceiptsPage.vue";
import IndexMassiTela from "@/components/IndexMassiTela.vue";
import CalculatorCalories from "@/components/CalculatorCalories.vue";
import store from '@/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: MainPage},
        {path: '/login', component: LoginPage},
        {path: '/register', component: RegistrationPage},
        {path: '/diets', component: DietsPage},
        {path: '/receipts', component: ReceiptsPage},
        {path: '/calculators', component: CalculatorPage},
        {path: '/test', component: IndexMassiTela},
        {path: '/product/:productName', component: CalculatorCalories},
        {path: '/profile', component: Profile, meta: { requiresAuth: true }}
    ]
});

router.beforeEach((to, from, next) => {
    // Проверяем, требует ли маршрут аутентификации
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Проверяем, авторизован ли пользователь
        if (!store.state.loggedIn) {
            // Если пользователь не авторизован, перенаправляем его на страницу входа
            next('/login');
        } else {
            // Если пользователь авторизован, разрешаем доступ к защищенному маршруту
            next();
        }
    } else {
        // Если маршрут не требует аутентификации, разрешаем доступ без ограничений
        next();
    }
});

export default router;
