<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <div class="content">
    <div class="container">
      <div class="title">Диеты</div>
      <div class="section">
        <div class="section__info">
          <a href="#" class="section__item">
            <img src="@/assets/diets/noto_cheese-wedge.png" alt="cheese" class="item__img">
            <p class="item__text">Вегетариан- <br>ская</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/twemoji_leafy-green.png" alt="leafy" class="item__img">
            <p class="item__text">Веганская</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/noto_peanuts.png" alt="peanuts" class="item__img">
            <p class="item__text">Низкоуглево-<br>дная</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/twemoji_broccoli.png" alt="broccoli" class="item__img">
            <p class="item__text">Много клетчатки</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/openmoji_scales.png" alt="scales" class="item__img">
            <p class="item__text">Чистое питание</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/twemoji_bacon.png" alt="bacon" class="item__img">
            <p class="item__text">Кетодиета</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/twemoji_cucumber.png" alt="cucumber" class="item__img">
            <p class="item__text">Мало жира</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/noto_green-apple.png" alt="green-apple" class="item__img">
            <p class="item__text">Низко-<br>калорийная</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/noto-v1_egg.png" alt="egg" class="item__img">
            <p class="item__text">Высоко-<br>белковая</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/noto_fish.png" alt="fish" class="item__img">
            <p class="item__text">Пескета-<br>ринство</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/fluent-emoji-flat_candy.png" alt="no-candy" class="item__img">
            <p class="item__text">Без сахара</p>
          </a>
          <a href="#"  class="section__item">
            <img src="@/assets/diets/emojione_glass-of-milk.png" alt="no-milk" class="item__img">
            <p class="item__text">Без лактозы</p>
          </a>

        </div>
      </div>
    </div>
  </div>
  <footer class="footer"></footer>
</template>

<style scoped>
.content {
  //position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  //user-select: none;
  //min-height: 100%;
}

.container{
  margin: 0 auto;
}

.section a:after {
  width: 0;
  text-decoration: none;
  color: black;
}

.title {
  display: flex;
  justify-content: center;
  padding-top: 72px;
  font-size: 48px;
}

.section__info {
  padding-top: 72px;
  display: grid;
  grid-template-columns: repeat(6, 171px);
  grid-template-rows: 171px 171px;
  grid-gap: 46px;
  justify-content: center;
}

.section__item {
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease-in-out;
}

.section__item img {
  padding-left: 55px;
  padding-top: 35px;
}

.section__item p {
  font-size: 20px;
  text-align: center;
  padding-top: 19px;
}

.section__item:hover {
  transform: scale(110%);
  transition: 0.3s ease-in-out;
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

@media (max-height: 500px) {
  .footer {
    display: none;
  }
}
@media (max-width: 1280px) {
  .section__info {
    grid-template-columns: repeat(4, minmax(171px, 171px));
    grid-template-rows: 171px 171px 171px 171px;
  }
}
@media (max-width: 842px) {
  .section__info {
    grid-template-columns: repeat(3, minmax(171px, 171px));
    grid-template-rows: 171px 171px 171px 171px 171px;
  }
}
@media (max-width: 842px) {
  .section__info {
    grid-template-columns: repeat(2, minmax(171px, 171px));
    grid-template-rows: 171px 171px 171px 171px 171px 171px;
  }
}
@media (max-width: 408px) {
  .section__info {
    grid-template-columns: repeat(1, minmax(171px, 171px));
    grid-template-rows: 171px 171px 171px 171px 171px 171px 171px;
  }
}
</style>