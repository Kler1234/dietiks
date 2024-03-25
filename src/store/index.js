// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        loggedIn: false // изначально считаем, что пользователь не авторизован
    },
    mutations: {
        setLoggedIn(state, value) {
            state.loggedIn = value;
        }
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                const response = await fetch('http://localhost:3000/login', {
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
                localStorage.setItem('token', token);

                commit('setLoggedIn', true);

                return true; // успешный вход
            } catch (err) {
                console.error('Ошибка входа:', err);
                return false; // ошибка входа
            }
        },
        logout({ commit }) {
            localStorage.removeItem('token');
            commit('setLoggedIn', false);
        }
    },
    getters: {
        isLoggedIn: state => state.loggedIn
    }
});
