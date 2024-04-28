import { createRouter, createWebHistory } from "vue-router";
import store from '@/store';

const MainPage = () => import("@/views/MainPage.vue");
const CalculatorPage = () => import("@/views/CalculatorPage.vue");
const DietsPage = () => import("@/views/DietsPage.vue");
const LoginPage = () => import("@/views/LoginPage.vue");
const RegistrationPage = () => import("@/views/RegistrationPage.vue");
const Profile = () => import("@/views/Profile.vue");
const ReceiptsPage = () => import("@/views/ReceiptsPage.vue");
const SettingPage = () => import("@/views/SettingPage.vue")
const IndexMassiTela = () => import("@/components/IndexMassiTela.vue");
const CalculatorCalories = () => import("@/components/CalculatorCalories.vue");
const CalculatePage = () => import("@/views/CalculatePage.vue");
const BMIPage = () => import("@/views/BMIPage.vue");
const AdminPanelPage = () => import("@/views/AdminPanelPage.vue");
const ProductPage = () => import("@/views/ProductPage.vue");

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
        {path: '/profile', component: Profile, meta: { requiresAuth: true }},
        {path: '/settings', component: SettingPage, meta: {requiresAuth: true}},
        {path: '/calculate', component: CalculatePage},
        {path: '/massindex', component: BMIPage},
        {path: '/products', component: ProductPage},
        {path: '/admin', component: AdminPanelPage, meta: {requiresAuth: true, requiresAdmin: true}},
    ]
});

router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.isAuth) {
            next('/login');
        } else {
            // Проверяем, является ли пользователь администратором
            if (to.matched.some(record => record.meta.requiresAdmin)) {
                // Проверяем, есть ли токен в хранилище
                if (!store.state.token) {
                    next('/login'); // Перенаправляем на страницу входа, если токен отсутствует
                } else if (!store.state.isAdmin) {
                    next('/'); // Перенаправляем на главную страницу, если пользователь не администратор
                } else {
                    next();
                }
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

export default router;
