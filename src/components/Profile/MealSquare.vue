<template>
  <div class="meal-square">
    <div class="meal-name">{{ mealUser }}</div>
    <div class="recipes" ref="recipeContainer">
      <div v-for="recipe in filteredRecipes" :key="recipe.entry_id" class="recipe">
        <p>{{ recipe.name }}</p>
        <button>
          <img class="delete-img" src="@/assets/delete-button-svgrepo-com.svg" alt="delete">
        </button>
      </div>
      <div v-if="filteredRecipes.length === 0" class="no-recipes">
        <p>Нет добавленных рецептов</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref, onMounted } from "vue";

const props = defineProps({
  mealName: String,
  mealUser: String,
  recipes: Array,
});

const recipeContainer = ref(null);

const filteredRecipes = computed(() => {
  return props.recipes.filter(recipe => recipe.meal_type === props.mealName);
});

</script>

<style scoped>
.meal-square {
  width: 350px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.meal-name {
  font-size: 18px;
  margin-bottom: 5px;
  position: absolute;
  top: 5px;
}

.recipes {
  margin-top: 20px;
  max-height: 100px; /* Установите желаемую максимальную высоту */
  overflow-y: auto; /* Скройте лишний контент, который превышает высоту */
}

.recipe {
  margin-bottom: 5px;
  display: flex;
}

.no-recipes {
  margin-top: 10px;
  font-style: italic;
}
.delete-img{
  margin-left: 5px;
  width: 20px;
  height: 20px;
  right: 0;
  top: 0;
}
</style>
