<template>
  <div class="cards-card flex flex-col shadow-md" @click="openRecipePopup(recipe)">
    <img :src="recipe.image_url" :alt="recipe.name">
    <h1 class="food-name">{{ recipe.name }}</h1>
    <p>Kkal: {{ recipe.kkal }}</p>

  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['recipe']);
const emit = defineEmits(['recipeClick']);

const openRecipePopup = (recipe) => {
  emit('recipeClick', recipe);
};
</script>

<style scoped>
.cards-card {
  width: 300px;
  height: 350px;
  margin: 20px;
  padding: 20px;
  cursor: pointer;
}
</style>
