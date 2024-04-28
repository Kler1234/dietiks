<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Card from "@/components/Card.vue";

type Recipe = {
  recipe_id: number,
  user_id: number,
  name: string,
  description: string,
  image_url: string,
  kkal: number,
  protein: number,
  fats: number,
  carbohydrates: number,
  meal_type: string,
  diet: string,
  source: string,
  ingridients: string,
}

defineProps<{
  recipes: Recipe[]
}>()

const emit = defineEmits(['recipeClick']);

const openRecipePopup = (recipe: Recipe) => {
  emit('recipeClick', recipe);
};
</script>

<template>
  <div class="cards flex flex-wrap">
    <Card v-for="recipe in recipes" :key="recipe.recipe_id" :recipe="recipe" @click="openRecipePopup(recipe)"/>
  </div>
</template>
