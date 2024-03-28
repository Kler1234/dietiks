<script setup>
import Header from '@/components/Header.vue'
import Sidebar from "@/components/Profile/Sidebar.vue";

let username = "John Doe";
let password = "";
let recalculateMacro = false;

function updateUsername(newName) {
  username = newName;
}

function updatePassword(newPassword) {
  password = newPassword;
}

function toggleRecalculate() {
  recalculateMacro = !recalculateMacro;
}
</script>

<template>
  <Header/>
  <div class="content">
    <Sidebar/>
    <div class="main">
      <h1 class="text-2xl">Настройки</h1>
      <form class="form">
        <label for="username">Имя:</label>
        <input type="text" id="username" v-model="username">
        <br>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password">
        <br>
        <div class="btn-group flex gap-x-5">
          <router-link to="/calculate" class="btn">Пересчитать БЖУ</router-link>
          <button class="btn">Сохранить изменения</button>
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
