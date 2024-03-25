<script setup>
import {ref, computed} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const loggedIn = computed(() => store.getters.isLoggedIn);
const burgerMenuOpen = ref(false);

const toggleBurgerMenu = () => {
  burgerMenuOpen.value = !burgerMenuOpen.value;
};
</script>

<template>
  <header class="header">
    <div class="container__header">
      <div class="header__body">
        <router-link to="/" class="header__logo">
          Диетикс
        </router-link>
        <div class="header__burger cursor-pointer" @click="toggleBurgerMenu">
          <span></span>
        </div>
        <nav class="header__menu" :class="{ active: burgerMenuOpen }">
          <ul class="header__list">
            <li>
              <router-link to="/receipts" class="header__link">
                Рецепты
              </router-link>
            </li>
            <li>
              <router-link to="/calculators" class="header__link">
                Калькуляторы
              </router-link>
            </li>
            <li>
              <router-link to="/diets" class="header__link">
                Диеты
              </router-link>
            </li>
            <li>
              <router-link :to="loggedIn ? '/profile' : '/login'" class="header__link">
                {{ loggedIn ? 'Профиль' : 'Войти' }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>


<style scoped>



@font-face {
  font-family: "Kyiv_TypeSerif";
  src: url("@/fonts/KyivTypeSerif-Regular2.otf");
}@font-face {
  font-family: "Merriweather";
  src: url("@/fonts/Merriweather/Merriweather-Regular.ttf");
}

body {
  box-sizing: border-box;
  font-family: Merriweather, serif;
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

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  font-family: Merriweather, serif;
  font-size: calc(14px + 0.5208333333vw);
}

.header:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 2;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.header__body {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
}

.header__logo {
  font-family: Kyiv_TypeSerif, serif;
  font-size: calc(24px + 1.25vw);
  margin-left: 43px;
  position: relative;
  z-index: 3;
}

.header__list {
  display: flex;
  font-size: 20px;
  text-decoration: none;
  position: relative;
  z-index: 2;
}

.header__list li {
  list-style: none;
  margin-right: 89px;
}

.header__burger {
  display: none;
}

li:last-child {
  margin-right: 43px;
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
    background-color: #000;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 0.3s ease 0s;
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
    background-color: #000;
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
  .header__list {
    display: block;
  }
  .header__list li {
    margin: 0px 0 20px 0;
  }
  .header__list li:first-child {
    padding-top: 30px;
  }
}

/*# sourceMappingURL=header.css.map */

</style>