<script setup>
import {defineProps, defineEmits} from 'vue';
import Card from "@/components/Card.vue";

const props = defineProps(['recipes']);
const emit = defineEmits(['recipeClick']);

const openRecipePopup = (recipe) => {
  emit('recipeClick', recipe);
};

</script>

<template>
  <div class="cards flex flex-wrap">
    <Card v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" :recipeId="recipe.id" class="cardReceipt" @click="openRecipePopup(recipe)"/>
  </div>
</template>

<style scoped>
.cardReceipt {
}
</style>
