<template>
  <div class="cards flex">
    <div class="cards-card flex flex-col shadow-md">
      <img :src="recipe.image" :alt="recipe.label">
      <h1 class="food-name">{{ recipe.label }}</h1>
    </div>
  </div>
</template>

<script setup>
const { recipe } = defineProps(['recipe']);
</script>

<style scoped>
.cards-card{
  width: 300px;
  height: 350px;
  margin: 20px;
  padding: 20px;
  cursor: pointer;
}

</style>