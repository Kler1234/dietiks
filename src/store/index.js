import { createStore } from 'vuex';

export default createStore({
    state: {
        isAuth: false,
        token: null,
        isAdmin: false,
    },
    mutations: {
        setLoggedIn(state, value) {
            state.isAuth = value;
        },
        setToken(state, token) {
            state.token = token;
            sessionStorage.setItem('token', token); // Сохраняем токен в sessionStorage
        },
        logout(state) {
            sessionStorage.removeItem('token'); // Удаляем токен из sessionStorage при выходе
            sessionStorage.removeItem('isAdmin');
            state.isAuth = false;
            state.token = null;
            state.isAdmin = false;
        },
        setAdminStatus(state, isAdmin) {
            state.isAdmin = isAdmin;
            sessionStorage.setItem('isAdmin', isAdmin); // Сохраняем статус администратора в sessionStorage
        },
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                const response = await fetch('http://217.71.129.139:4101/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                if (!response.ok) {
                    throw new Error('Неверные почта или пароль');
                }

                const data = await response.json();
                const { token, isAdmin } = data;

                commit('setToken', token);
                commit('setLoggedIn', true);
                commit('setAdminStatus', isAdmin);

                return true;
            } catch (err) {
                console.error('Ошибка входа:', err);
                return false;
            }
        },
        autoLogin({ commit }) {
            const token = sessionStorage.getItem('token'); // Получаем токен из sessionStorage
            const isAdmin = sessionStorage.getItem('isAdmin'); // Получаем статус администратора из sessionStorage
            
            if (token) {
                commit('setToken', token);
                commit('setLoggedIn', true);
                commit('setAdminStatus', isAdmin === 'true'); // Преобразуем строку в булево значение
                return true;
            } else {
                return false;
            }
        },
        logout({ commit }) {
            sessionStorage.removeItem('token'); // Удаляем токен из sessionStorage при выходе
            sessionStorage.removeItem('isAdmin'); // Удаляем статус администратора из sessionStorage при выходе
            commit('logout');
        },
    }
});
