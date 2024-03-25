<script setup>
import Header from "@/components/Header.vue";
import {ref, computed} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const loggedIn = computed(() => store.getters.isLoggedIn);

</script>

<template>
  <Header/>
  <div class="main">
    <div class="btn-up btn-up_hide"></div>
    <div class="section-about flex items-center justify-between0">
      <div class="about-dietiks pl-60">
        <div class="title-dietiks">
          <p>Диетикс</p>
        </div>
        <div class="title-description">
          <p class="title-description__text">Если вы устали от срывов и жестких диет,<br>
            пробовали разные варианты правильного <br>
            питания, но так и не добились результата, <br>
            мы поможем вам достичь цели!</p>
        </div>
        <div class="btn-try relative bg-green-600 rounded-2xl mt-5 h-14 hover:-translate-y-0.5 cursor-pointer">
          <router-link :to="loggedIn ? '/profile' : '/register'">
            <p class="text-white text-center pt-3.5">Попробовать</p>
          </router-link>
        </div>
      </div>
      <div class="img-dietiks">
        <img src="@/assets/food2.png" alt="food" class="img-food scale-80">
      </div>
    </div>
    <section class="section-info">
      <div class="wrapper">
        <div class="wrapper__info pr-52">
          <img src="@/assets/ico-carrot1.svg" alt="Упс, изображение пропало!" class="img-phrases">
          <p class="text-carrot">Просто и <br><span class="span-green"> эффективно</span></p>
        </div>
        <div class="wrapper__info pr-52">
          <img src="@/assets/ico-checklist1.svg" alt="Упс, изображение пропало!" class="img-phrases">
          <p class="text-checklist">Придерживайся <br><span class="span-green"> графику</span></p>
        </div>
        <div class="wrapper__info">
          <img src="@/assets/weight.svg" alt="Упс, изображение пропало!" class="img-phrases">
          <p class="text-weight">Следи за <br><span class="span-green"> показателями</span></p>
        </div>
      </div>
    </section>
    <section class="section-registry">
      <div class="section-registry wrapper-image">
        <div class="section-registry__container">
          <div class="section-registry__infoblock">
            <div class="registration"> Подбери для себя оптимальный <span> план питания </span></div>
            <div class="regbox">
              <div class="regbox__block">
                <router-link :to="loggedIn ? '/profile' : '/register'">
                  <p class="regbox__text">Зарегестрироваться</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer>
    <div class="footer-block"></div>
  </footer>
</template>

<style scoped>
@font-face {
  font-family: "Kyiv_TypeSerif";
  src: url("@/fonts/KyivTypeSerif-Regular2.otf");
}
@font-face {
  font-family: "Merriweather";
  src: url("@/fonts/Merriweather/Merriweather-Regular.ttf");
}



a {
  text-decoration: none;
}

a {
  text-decoration: none;
  color: black;
}

a:after {
  display: block;
  content: "";
  height: 2px;
  width: 0%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: width 0.3s ease-in-out;
}
a:hover:after, a:focus:after {
  width: 100%;
}

.about-dietiks{
  width: 800px;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.title-description__text, .title-dietiks{
  font-family: Kyiv_TypeSerif;
  font-size: 25px ;
}

.title-dietiks{
  font-size: 80px;
}

.btn-try{
  font-family: Merriweather;
  width: 350px;
}

.section-info {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  /*padding: 145px 307px 0 308px; */
  padding-left: 50px;
  padding-top: 145px;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1296px;
  margin: 0 auto;
  font-size: 32px;
  text-align: center;
}

.wrapper__info {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  font-family: Merriweather, serif;
  //padding-right: 100px;
}
.wrapper__info:last-child {
  padding-right: 0;
}

.img-phrases {
  display: block;
  height: 90px;
}

.wrapper__info p {
  padding-top: 50px;
}
.wrapper__info span {
  color: #54B947;
}

.wrapper-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(@/assets/bg_image_main.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 723px;
}

/* Высота блока */
.section-registry {
  padding-top: 154px;
}

.section-registry__container {
  background-color: white;
  border-radius: 23px;
  width: 781px;
  height: 313px;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}

.section-registry__infoblock {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: Merriweather, serif;
  font-size: 32px;
}
.section-registry__infoblock span {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: Merriweather, serif;
  font-size: 32px;
}

.registration {
  padding-top: 55px;
}
.registration span {
  color: #54B947;
}

.regbox {
  padding-top: 35px;
}

.regbox__block {
  display: flex;
  border-radius: 23px;
  background: rgba(60, 175, 45, 0.92);
  width: 560px;
  height: 99px;
  justify-content: center;
}

.regbox__text {
  padding-top: 27px;
  color: white;
}

.footer-block {
  position: relative;
  margin-top: 99px;
  left: 0;
  bottom: 0;
  background-color: #54B947;
  width: 100%;
  height: 50px;
}

@media (max-width: 1250px) {
  .wrapper {
    display: block;
  }
  .wrapper__info {
    padding-top: 150px;
    padding-right: 0;
  }
  .section-info, .wrapper-image {
    padding-top: 0;
  }
  .section-about{
    display: block;
    padding-top: 150px;
  }
  .about-dietiks{
    padding-left: 250px;
  }
  .img-food{
    scale: 80%;
    margin-top: -50px;
  }

}
@media (max-width: 952px) {
  body.lock {
    overflow: hidden;
  }
  .header__body {
    height: 70px;
  }
  .header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    z-index: 3;
    margin-right: 43px;
  }
  .header__burger:before, .header__burger:after {
    content: "";
    background-color: #ffffff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 0.3s ease 0s;
    -webkit-text-stroke: 1px #000000;
  }
  .header:before {
    background-color: #54B947;
  }
  .header__burger:before {
    top: 0;
  }
  .header__burger:after {
    bottom: 0;
  }
  .header__burger span {
    position: absolute;
    background-color: #ffffff;
    left: 0;
    width: 100%;
    height: 2px;
    top: 9px;
    transition: all 0.3s ease 0s;
  }
  .header__burger.active span {
    transform: scale(0);
  }
  .header__burger.active:before {
    transform: rotate(45deg);
    top: 9px;
  }
  .header__burger.active:after {
    transform: rotate(-45deg);
    bottom: 9px;
  }
  .header__menu {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    padding: 60px 0px 10px 10px;
    overflow: auto;
    box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
  .header__menu.active {
    top: 0;
    transition: all 0.3s ease 0s;
  }
  .header__logo {
    color: white;
  }
  .header__list {
    display: block;
  }
  .header__list li {
    margin: 0px 0 20px 0;
  }
  .header__list li:first-child {
    padding-top: 30px;
  }
  .wrapper {
    display: block;
  }
  .wrapper__info {
    padding-top: 110px;
    padding-right: 0px;
  }
  .section-info {
    padding: 0;
  }
}
@media (max-width: 778px) {
  .regbox__block {
    width: 360px;
    height: 70px;
    font-size: 20px;
  }
  .registration {
    font-size: 20px;
  }
  .registration span {
    font-size: 20px;
  }
  
  .section-info{
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .section-registry__container {
    width: 500px;
    height: 280px;
  }
  .wrapper__info {
    margin: 0 auto;

  }
  .wrapper__image{
    padding: 0;
  }
  .footer-block{
    width: 100%;
  }

  .about-dietiks{
    padding: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 500px;
    margin: 0 auto;
  }
}

@media(max-width:425px) {

  .regbox__text{
    padding: 20px;
  }
  .about-dietiks{
    width: 100%;
  }

  .title-dietiks, .title-description{
    padding-left: 20px;
  }
  .img-dietiks{
    margin: 0 auto;
    padding: 50px 0 50px 0;
  }

  .btn-try{
    width: 100%;
  }

  .section-registry__container{
    width: 100%;
  }
  .title-dietiks{
    font-size: 60px;
  }
  .title-description__text{
    font-size: 20px;
  }

  .registration{
    text-align: center;
  }
  .wrapper__info{
    padding: 0;
  }
}

@media (max-width: 320px){
.regbox__block{
  width: 100%;
}
}

</style>
