<script setup>
import Header from '@/components/Header.vue'
import { useRouter } from 'vue-router';
import {ref, computed} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
const loggedIn = computed(() => store.getters.isLoggedIn);

const handleLogout = () => {
  store.dispatch('logout');
  router.push('/login');
};
</script>

<template>
  <Header/>
  <div class="content__container">
    <div class="content">
      <div class="aside">
        <div class="aside__avatar"></div>
        <div class="aside__link">
          <a href="#" class="profile">Профиль</a>
          <a href="#" class="Settings">Настройки</a>
          <button class="logout" @click="handleLogout">Выйти из аккаунта</button>
        </div>
      </div>
      <div class="content__main item">
        <h1 class="title">Здравствуйте, Имя</h1>
        <p class="subtitle">Ваша активность:</p>
        <div class="container">
          <div class="container__item activity"></div>
          <div class="container__item breakfast">
            <div class="breakfast__text">Завтрак</div>
          </div>
          <div class="container__item lunch" >
            <div class="lunch__text">Обед</div>
          </div>
          <div class="container__item dinner">
            <div class="dinner__text">Ужин</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
  </footer>

</template>


<style scoped>

.content {
  padding-top: 135px;
  padding-left: 145px;
  display: grid;
  grid-template-areas: "aside content";
  grid-gap: 314px;
  grid-template-columns: 328px 960px;
}

.aside {
  grid-area: aside;
  align-self: start;
}

.aside__avatar {
  background: #E24545;
  width: 364px;
  height: 364px;
  border-radius: 8px;
}

.aside__link a {
  display: block;
  font-size: 24px;
  margin-top: 21px;
  width: 141px;
}

.content__main {
  grid-area: content;
}

.content__main h1 {
  font-size: 40px;
  margin-left: 140px;
  margin-top: 51px;
}

.content__main p {
  font-size: 24px;
  margin-top: 26px;
  margin-bottom: 7px;
}

.container {
  display: grid;
  height: 100%;
  width: 690px;
  grid-template-areas: "header header header" "first second third";
  justify-content: space-between;
}

.activity {
  grid-area: header;
  border-radius: 20px;
  height: 290px;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.breakfast {
  grid-area: first;
  width: 180px;
  height: 167px;
  border-radius: 20px;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.breakfast .breakfast__text {
  margin-top: 190px;
  margin-left: 50px;
}

.lunch {
  grid-area: second;
  width: 180px;
  height: 167px;
  border-radius: 20px;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.lunch .lunch__text {
  margin-top: 190px;
  margin-left: 50px;
}

.dinner {
  grid-area: third;
  width: 180px;
  height: 167px;
  border-radius: 20px;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.dinner .dinner__text {
  margin-top: 190px;
  margin-left: 50px;
}

</style>