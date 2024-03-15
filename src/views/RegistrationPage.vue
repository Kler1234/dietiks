<script setup>
import Header from "@/components/Header.vue";
import Password from 'primevue/password';
import { ref } from 'vue';

const value = ref(null);


</script>

<template>
  <Header/>
  <div class="wrapper">
    <div class="content">
      <div class="registration__form">
        <form class="form" action="">
          <h1 class="title">Зарегистрируйся</h1>
          <h2>и контролируй ситуацию</h2>
          <div class="registration__input-box">
            <div class="input-box">
              <input type="text" placeholder="Введите почту" required>
            </div>
            <div class="input-box">
              <input type="password" placeholder="Введите пароль" required>
            </div>
            <div class="input-box">
            <input type="password" placeholder="Повторите пароль" required>
            </div>

          </div>
          <div class="forgot">
            <p>Уже есть аккаунт?</p>
            <a href="">Вход</a>
          </div>
          <button type="submit" class="btn">Войти</button>
        </form>
      </div>
    </div>s
  </div>
    <footer class="footer"></footer>
</template>

<style scoped>
.content {
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
  background-color: #F2F2F2;
}

.registration__form {
  width: 475px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #000000;
  border-radius: 50px;
  height: 640px;
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
  justify-content: space-between;
  text-align: center;
  margin: 0 120px;
  margin-top: 37px;
}

.forgot a {
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
  /* Добавим цвет и ширину блока для наглядности*/
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

</style>
