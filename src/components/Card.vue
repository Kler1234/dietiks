<template>
  <div class="cards">
    <div class="cards-card flex flex-col shadow-md w-250">
      <img :src="recipe.image" :alt="recipe.label">
      <h1 class="food-name m-auto p-3">{{ recipe.label }}</h1>
    </div>
  </div>
</template>

<script setup>
const { recipe } = defineProps(['recipe']);
</script>

<style scoped>



.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  background-color: #D9D9D9;
  border: 1px solid black;
}

</style>