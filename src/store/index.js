import { createStore } from 'vuex';

export default createStore({
    state: {
        loggedIn: false,
        token: null
    },
    mutations: {
        setLoggedIn(state, value) {
            state.loggedIn = value;
        },
        setToken(state, token) {
            state.token = token;
            sessionStorage.setItem('token', token); // Сохраняем токен в sessionStorage
        },
        logout(state) {
            sessionStorage.removeItem('token'); // Удаляем токен из sessionStorage при выходе
            state.loggedIn = false;
            state.token = null;
        },
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                const response = await fetch('http://192.168.1.2:3000/login', {
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
                const token = data.token;

                commit('setToken', token); // Устанавливаем токен в состояние приложения
                commit('setLoggedIn', true); // Устанавливаем флаг входа в состояние приложения

                return true;
            } catch (err) {
                console.error('Ошибка входа:', err);
                return false;
            }
        },
        autoLogin({ commit }) {
            const token = sessionStorage.getItem('token'); // Получаем токен из sessionStorage
            if (token) {
                commit('setToken', token); // Устанавливаем токен в состояние приложения
                commit('setLoggedIn', true); // Устанавливаем флаг входа в состояние приложения
                return true;
            } else {
                return false;
            }
        },
        logout({ commit }) {
            sessionStorage.removeItem('token'); // Удаляем токен из sessionStorage при выходе
            commit('logout');
        }
    },
    getters: {
        isLoggedIn: state => state.loggedIn
    },

});
