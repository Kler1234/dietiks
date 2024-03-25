import { createRouter, createWebHistory } from "vue-router";
import store from '@/store';

const MainPage = () => import("@/views/MainPage.vue");
const CalculatorPage = () => import("@/views/CalculatorPage.vue");
const DietsPage = () => import("@/views/DietsPage.vue");
const LoginPage = () => import("@/views/LoginPage.vue");
const RegistrationPage = () => import("@/views/RegistrationPage.vue");
const Profile = () => import("@/views/Profile.vue");
const ReceiptsPage = () => import("@/views/ReceiptsPage.vue");
const IndexMassiTela = () => import("@/components/IndexMassiTela.vue");
const CalculatorCalories = () => import("@/components/CalculatorCalories.vue");

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

router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.loggedIn) {
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
