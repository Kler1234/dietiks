<script setup>
import Header from "@/components/Header.vue";
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();


const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error=ref('');
const value = ref(null);
const success = ref(false);
const name = ref('');
const register = async () => {

  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      throw new Error('Неверный формат email');
    }
    if (password.value !== confirmPassword.value) {
      throw new Error('Пароли не совпадают');
    }
    const response = await fetch('http://217.71.129.139:4101/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email.value, password: password.value, name: name.value })
    });
    error.value = '';

    if (!response.ok) {
      throw new Error('Данная почта уже занята');
    }
    const data = await response.json();
    const token = data.token;
    store.commit('setToken', token);
    store.commit('setLoggedIn', true);
    success.value = true;
    setTimeout(() => {
      router.push('/calculate');
    }, 2000);
  } catch (err) {
    error.value = err.message;
  }
}

</script>

<template>
  <Header/>
  <div class="wrapper">
    <div class="content">
      <div class="registration__form" v-if="!success">
        <form  class="form" action="" @submit.prevent="register">
          <div class="text">
            <h1 class="title">Зарегистрируйся</h1>
            <h2 class="subtitle">и контролируй ситуацию</h2>
            <div class="error" v-if="error">{{ error }}</div>

          </div>
          <div class="registration__input-box">
            <div class="input-box">
              <input type="text" placeholder="Введите почту" required v-model="email">
            </div>
            <div class="input-box">
              <input type="text" placeholder="Введите имя" required v-model="name">
            </div>
            <div class="input-box">
              <input type="password" placeholder="Введите пароль" required v-model="password">
            </div>
            <div class="input-box">
              <input type="password" placeholder="Повторите пароль" required v-model="confirmPassword">
            </div>

          </div>
          <div class="forgot">
            <p>Уже есть аккаунт?</p>
            <router-link to="/login">
              Вход
            </router-link>
          </div>
          <button type="submit" class="btn">Войти</button>
        </form>
      </div>
      <div v-if="success" class="success-message flex flex-col gap-10">
        <h1>Успешная регистрация!</h1>
        <div class="loader"></div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <p class="text-xs text-white">* - Этот сайт предоставляет информацию о диетах и здоровье и не является медицинской организацией. Мы не предоставляем медицинских консультаций и не имеем медицинского образования. Перед принятием каких-либо диетических решений, проконсультируйтесь с врачом или другим квалифицированным специалистом.</p>
  </footer>
</template>

<style scoped>
.error {
  display: flex;
  width: 100%;
  justify-content: center;
  color: red;
  padding-top: 15px;
}

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
  margin: 0 auto;
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

.content {
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registration__form {
  width: 475px;
  background: #FFF;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000000;
  border-radius: 50px;
  height: 700px;
  padding-bottom: 150px;
}

.title {
  padding-top: 63px;
  color: #3CAF2D;
}

.registration__form h1 {
  font-size: 40px;
  text-align: center;
}

.registration__form h2 {
  padding-top: 10px;
  font-size: 20px;
  text-align: center;
}

.registration__input-box {
  padding-top: 20px;
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

.forgot {
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin: 0 auto;
  margin-top: 37px;
}

.forgot a {
  display: flex;
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
  margin-top: 37px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #54B947;
  width: 100%;
  height: 50px;
}


@media (max-width: 425px){

  .input-box{
    margin: 0 auto;
  }
  .registration__form h1 {
    font-size: 30px;
  }

  .registration__form h2 {
    font-size: 20px;
  }

  .registration__form{
    width: 300px;
  }
  .registration__form .input-box{
    width: 250px;
  }

  .content{
    padding-top: 100px;
    margin-bottom: 50px;
  }

  .footer{
    visibility: hidden;
  }
}
</style>