<script setup>
import Header from '@/components/Header.vue'
import Sidebar from "@/components/Profile/Sidebar.vue";
import {computed, ref} from 'vue'
import store from "@/store/index.js";
import router from "@/router/router.js";

const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const newUsername = ref('');
const loggedIn = computed(() => store.getters.isLoggedIn);

const handleLogout = () => {
  store.dispatch('logout');
  router.push('/login');
};
async function changeUsername() {
  try{
    const token = sessionStorage.getItem('token');
    const response = await fetch('http://192.168.1.2:3000/user/changeUsername', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify({token, newUsername: newUsername.value})
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }
    alert("Имя успешно изменено.");
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error.message);
    alert('Ошибка при изменении имени. Пожалуйста, попробуйте снова.');
  }
}
async function changePassword() {
  try {
    if (newPassword.value !== confirmPassword.value) {
      throw new Error("Новый пароль и его подтверждение не совпадают.");
    }
    const token = sessionStorage.getItem('token');
    const response = await fetch('http://192.168.1.2:3000/user/changePassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify({token, oldPassword: oldPassword.value, newPassword: newPassword.value})
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }
    alert("Пароль успешно изменен.");
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error.message);
    alert('Ошибка при изменении пароля. Пожалуйста, попробуйте снова.');
  }
}
</script>

<template>
  <Header/>
  <div class="content">
    <Sidebar @logout="handleLogout"/>
    <div class="main">
      <h1 class="text-2xl">Настройки</h1>
      <form class="form" @submit.prevent>
        <div class="changeName">
          <label for="username">Имя:</label>
          <input type="text" id="username" v-model="newUsername">
          <button class="btn" @click="changeUsername">Изменить имя</button>
        </div>
        <div class="changePassword">
          <label for="oldPassword">Старый пароль:</label>
          <input type="password" id="oldPassword" v-model="oldPassword">
          <br>
          <label for="newPassword">Новый пароль:</label>
          <input type="password" id="newPassword" v-model="newPassword">
          <br>
          <label for="confirmPassword">Повторите новый пароль:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword">
        </div>
        <button class="btn" @click="changePassword">Изменить пароль</button>
        <div class="btn-group flex gap-x-5">
          <router-link to="/calculate" class="btn">Пересчитать БЖУ</router-link>
        </div>
      </form>
    </div>
  </div>
  <footer class="footer">
    <p class="text-xs text-white">* - Этот сайт предоставляет информацию о диетах и здоровье и не является медицинской организацией. Мы не предоставляем медицинских консультаций и не имеем медицинского образования. Перед принятием каких-либо диетических решений, проконсультируйтесь с врачом или другим квалифицированным специалистом.</p>
  </footer>
</template>

<style scoped>
.content{
  padding-top: 150px;
  height: 100%;
  display: flex;
}
.main {
  display: flex;
  flex-grow: 1;
  width: 80%;
  flex-flow: column;
  text-align: center;
}

.main h1{
  margin: 10px;
}
input{
  padding: 5px;
  border: 1px solid black;
  margin: 5px;
  border-radius: 25px
}
.btn{
  padding: 5px;
  background-color: #54B947;
  color: white;
  border-radius: 5px;
  transition-duration: 0.3s;
}
.btn:hover{
  background-color: #cc0000;
}

.btn-group{
  padding-top: 30px;
  padding-bottom: 300px;
  align-content: center;
  justify-content: center;
}
.footer {
  margin-top: 50px;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #54B947;
  width: 100%;
  height: 50px;
}

@media (max-width: 952px){
  .content{
    padding-top: 100px;
    flex-wrap: wrap;
  }
  .sidebar{
    text-align: center;
    margin: 0 auto;
    box-sizing: content-box;
  }
  .main{
    width: 100%;
  }
  .footer{
    position: relative;
    height: 100%;
  }
}
</style>
