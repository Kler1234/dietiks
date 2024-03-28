<template>
  <div class="recipe-square">
    <h3>{{ recipe.title }}</h3>
    <p>{{ recipe.description }}</p>
    <p>Калории: {{ recipe.calories }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  recipe: Object
});
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
</style>
