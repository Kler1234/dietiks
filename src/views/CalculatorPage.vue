<script setup>
import Header from "@/components/Header.vue";

</script>

<template>
  <Header/>
  <div class="content">
    <div class="title">
      <div class="title__text">Калькуляторы</div>
      <div class="section">
        <a href="#" class="section__item">
          <img class="section__img" src="../img/noto-v1_fork-and-knife-with-plate.png" alt="Упс, изображения нет!">
          <p class="section__text">БЖУ</p>
        </a>
        <a href="#" class="section__item">
          <img class="section__img" src="../img/noto_balance-scale.png" alt="Упс, изображения нет!">
          <p class="section__text">Индекс <br> массы тела</p>
        </a>
        <a href="#" class="section__item">
          <img class="section__img" src="../img/twemoji_carrot.png" alt="Упс, изображения нет!">
          <p class="section__text">Калорийность</p>
        </a>
      </div>
    </div>
  </div>
  <footer class="footer">
  </footer>
</template>

<style scoped>
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
  padding-top: 47px;
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