<template>
  <div class="recipe-square" @click="openPopup(recipe)">
    <img class="recipe-image" :src="'http://172.17.3.77:3000/' + recipe.image_url" :alt="recipe.name">
    <h3>{{ recipe.name }}</h3>
    <p>Калории: {{ Math.round(recipe.kkal) }}</p>
  </div>
</template>

<script setup>
import PopupRecipe from '@/components/PopupRecipePage/PopupRecipe.vue';
import {ref} from 'vue';
const props = defineProps({
  recipe: Object
});

const popupRecipeInfo = ref(null);
const openPopup = (recipe) => {
  popupRecipeInfo.value = recipe;
};

const closePopup = () => {
  popupRecipeInfo.value = null;
};
</script>


<style scoped>
.recipe-square {
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  overflow: hidden;
}

.recipe-square h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.recipe-square p {
  font-size: 14px;
  margin-bottom: 3px;
}

.recipe-image{
  max-width: 200px;
  max-height: 170px;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
