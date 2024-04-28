<script setup>
import Header from "@/components/Header.vue";
import PopupMenu from '@/components/PopupMenu.vue';
import { ref } from 'vue';

const showPopupMenu = ref(false);
const selectedMenuItem = ref('');

const openPopupMenu = (item) => {
  selectedMenuItem.value = item;
  showPopupMenu.value = true;
};

const closePopupMenu = () => {
  showPopupMenu.value = false;
};
</script>
<template>
  <div>
    <Header/>
    <div class="content">
      <div class="title">
        <div class="title__text">Калькуляторы</div>
        <div class="section">
          <!-- Используем @click, чтобы обработать событие нажатия на элементы -->
          <router-link to="/calculate" class="section__item">
            <img class="section__img" src="@/assets/noto-v1_fork-and-knife-with-plate.png" alt="Упс, изображения нет!">
            <p class="section__text">БЖУ</p>
          </router-link>
          <router-link to="/massindex" href="#" class="section__item">
            <img class="section__img" src="@/assets/noto_balance-scale.png" alt="Упс, изображения нет!">
            <p class="section__text">Индекс <br> массы тела</p>
          </router-link>
          <router-link to="/products" class="section__item">
            <img class="section__img" src="@/assets/twemoji_carrot.png" alt="Упс, изображения нет!">
            <p class="section__text">Калорийность</p>
          </router-link>
        </div>
      </div>
    </div>
    <footer class="footer">
      <p class="text-xs text-white">* - Этот сайт предоставляет информацию о диетах и здоровье и не является медицинской организацией. Мы не предоставляем медицинских консультаций и не имеем медицинского образования. Перед принятием каких-либо диетических решений, проконсультируйтесь с врачом или другим квалифицированным специалистом.</p>
    </footer>
      <transition name="fade">
        <div class="overlay" v-if="showPopupMenu" @click="closePopupMenu"></div>
      </transition>
      <transition name="slide">
        <PopupMenu :menuItem="selectedMenuItem" v-if="showPopupMenu" />
      </transition>
  </div>
</template>


<style scoped>

.input__weigth{
  display: flex;
}

.title__weigth{
  font-size: 15px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to {
  transform: translateY(-50%) translateX(-50%) scale(0.5);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998; /* Ниже z-index Popup меню */
}

.content {
  padding-top: 157px;
  width: 100%;
  margin: 0 auto;
  user-select: none;
}

.title {
  display: block;
  align-items: center;
  width: 961px;
  margin: 0 auto;
}

.title__text {
  text-align: center;
  font-size: 32px;
  user-select: text;
}

.section {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}

.section__item {
  width: 285px;
  height: 309px;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: block;
  text-align: center;
  margin-top: 57px;
  font-size: 32px;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
}

.section__item img, .section__item p {
  padding-top: 40px;
}

.section__item img{
  margin: 0 auto;
}

.section a:after {
  width: 0;
  text-decoration: none;
  color: black;
}

.section__item:hover {
  transform: scale(110%);
  transition: 0.3s ease-in-out;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  /* Добавим цвет и ширину блока для наглядности*/
  background-color: #54B947;
  width: 100%;
  height: 50px;
}

@media (max-width: 952px) {
  .title {
    width: auto;
  }
  .section {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
  }
  .footer {
    margin-top: 50px;
    position: relative;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 425px) {
  .section {
    transform: scale(0.9);
  }
}
@media (max-width: 320px) {
  .section__item:first-child {
    margin: 0;
  }
  .content {
    padding-top: 125px;
  }
}

</style>