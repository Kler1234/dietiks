<script setup>
import Header from "@/components/Header.vue";
import {ref, computed} from 'vue';
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const email = ref('');
const password = ref('');
const loggedIn = computed(() => store.getters.isLoggedIn);

const handleLogin = async () => {
  try {
    const success = await store.dispatch('login', { email: email.value, password: password.value });
    if (success) {
      setTimeout(() => {
        router.push('/profile');
      }, 2000);
    }
  } catch (error) {
    console.error('Ошибка входа:', error.message);
  }
};
</script>

<template>
  <Header />
  <div class="content">
    <div class="registration__form" v-if="!loggedIn">
      <form class="form" @submit.prevent="handleLogin">
        <h1 class="title">Вход</h1>
        <div class="registration__input-box">
          <div class="input-box">
            <input type="text" placeholder="Введите почту" required v-model="email">
          </div>
          <div class="input-box">
            <input type="password" placeholder="Введите пароль" required v-model="password">
          </div>
        </div>
        <div class="forgot">
          <p>Нет аккаунта?</p>
          <router-link to="/register">
            Зарегистрироваться
          </router-link>
        </div>
        <button type="submit" class="btn">Войти</button>
      </form>
    </div>
    <div v-else class="success-message">
      <div class="loader"></div>
    </div>
  </div>
  <footer class="footer"></footer>
</template>


<style scoped>

.success-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

template{
  background-color: #F2F2F2;
}

@font-face {
  font-family: "Merriweather";
  src: url("@/fonts/Merriweather/Merriweather-Regular.ttf");
}

.no__acc {
  padding-right: 23px;
}

.header__link {
  color: #1CA909;
}

.header__link:hover {
  text-decoration: underline;
}

.content {
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  height: 100vh;

}

.registration__form {
  width: 475px;
  background: #FFF;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000000;
  border-radius: 50px;
  height: 551px;
}


.title {
  padding-top: 63px;
  color: #3CAF2D;
}

.registration__form h1 {
  font-size: 40px;
  text-align: center;
}

.registration__input-box {
  padding-top: 54px;
}

.registration__form .input-box {
  width: 404px;
  height: 63px;
  margin: 16px 0;
  margin-left: 35px;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 1px solid #DAD6D6;
  border-radius: 50px;
  font-size: 20px;
  padding: 20px 45px 20px 20px;
  color: #000000;
}

.input-box input::placeholder {
  color: #000000;
}

.input-box{

}

.forgot {
  display: flex;
  flex-flow: column;
  text-align: center;
  margin-top: 37px;
}

.forgot a {
  padding-top: 5px;
  color: #1CA909;
  text-transform: none;
  text-decoration: none;
}

a:hover:after {
  width: 0;
}

.forgot a:hover {
  text-decoration: underline;
}

.btn {
  width: 246px;
  height: 63px;
  background: #4BB53D;
  border: 1px solid #4BB53D;
  outline: none;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
  margin: 0 auto;
  display: block;
  align-content: center;
}

.footer {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #54B947;
  width: 100%;
  height: 50px;
}

@media (max-width: 952px) {
  .header__list {
    padding-top: 30px;
  }
  .header__list li {
    margin-top: 5px;
  }
}

@media (max-width: 450px){
  .registration__form {
    padding-top: 0;
    height: 450px;
    width: 300px;
  }
  .input-box input{
    width: 230px;
  }

  .registration__form .input-box{
    width: 250px;
  }

  .content{
    margin: 0;
    padding: 0;
    padding-bottom: 50px;
  }
  .btn{
    margin-top: 50px;
    margin-bottom: 60px;
  }

  footer{
    visibility: hidden;
  }

}
</style>