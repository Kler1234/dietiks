<template>
  <transition name="fade">
    <div v-if="props.recipeInfo" class="popup-background" @click="closePopup">
      <transition name="slide-fade">
        <div class="popup-menu" @click.stop>
          <div class="popup-content">
            <div class="recipe-info">
              <div class="closeModal" @click="closePopup"></div>
              <h1 class="recipe-name">{{ props.recipeInfo.name }}</h1>
              <h2 class="text-xl pt-5 pb-2">Ингридиенты (на 1 порцию):</h2>
              <p>{{props.recipeInfo.ingridients}}</p>
              <h2 class="text-xl pt-5 pb-2">Способ приготовления:</h2>
              <p>{{ props.recipeInfo.description }}</p>
              <h2 class="text-xl pt-5 pb-2">Пищевая ценность:</h2>
              <p>ККАЛ: {{ props.recipeInfo.kkal }} грамм</p>
              <p>Белки: {{ props.recipeInfo.protein }} грамм</p>
              <p>Жиры: {{ props.recipeInfo.fats }} грамм</p>
              <p>Углеводы: {{ props.recipeInfo.carbohydrates }} грамм</p>
              <p>Диета: {{ diet.find(item => item.value === props.recipeInfo.diet).label }}</p>
              <h2 class="text-xl pt-5 pb-2">Источник: {{ props.recipeInfo.source }}</h2>
              <h3 class="text-id pt-5 pb-2">ID рецепта: {{props.recipeInfo.recipe_id}}</h3>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue';

const props = defineProps(['recipeInfo']);
const emit = defineEmits(['closePopup']);

const closePopup = () => {
  emit('closePopup');
};

const diet = [
  { label: "Вегетарианство", value: "vegetarian" },
  { label: "Веганская", value: "vegan" },
  { label: "Низкоуглеводная", value: "lowCarb" },
  { label: "Много клетчатки", value: "highFiber" },
  { label: "Чистое питание", value: "cleanEating" },
  { label: "Кетодиета", value: "keto" },
  { label: "Мало жира", value: "lowFat" },
  { label: "Низкокалорийная", value: "lowCalorie" },
  { label: "Высокобелковая", value: "highProtein" },
  { label: "Пескетарианство", value: "pescatarian" },
  { label: "Без сахара", value: "sugarFree" },
  { label: "Без лактозы", value: "lactoseFree" }
];


</script>

<style scoped>
p {
  text-indent: 15px;
}

.closeModal {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;
}
.closeModal:hover {
  opacity: 1;
}
.closeModal::before, .closeModal::after {
  content: "";
  position: absolute;
  top: 10px;
  display: block;
  width: 24px;
  height: 3px;
  background: #000;
}
.closeModal::before {
  transform: rotate(45deg);
}
.closeModal::after {
  transform: rotate(-45deg);
}

.popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Затемнение фона */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 55;
}

.popup-menu {
  position: relative;
  width: 800px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  background-color: white;
  border: 1px solid black;
  border-radius: 24px;
  z-inedx: 56;
}

.popup-content {
  padding: 20px;
}

.recipe-name {
  font-size: 20px;
  font-weight: bold;
}

.recipe-info p {
  margin-bottom: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s;
}

.slide-fade-leave-active {
  transition: transform 0.5s;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-50%) translateX(-50%) scale(0.5);
}

.text-id {
  font-size: 10px;
  text-align: center;
}
</style>
