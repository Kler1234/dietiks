<template>
  <div class="meal-square" @click="addRecipe">
    <div class="meal-name">{{ mealName }}</div>
    <div class="calories">{{ calories }} ккал</div>
  </div>
</template>

<script setup>
const props = defineProps({
  mealName: String,
  calories: Number
});

const addRecipe = () => {
  console.log(`Добавлен рецепт в ${props.mealName}`);
};
</script>

<style scoped>

/* Стили квадратов блюд */
.meal-square {
  width: 150px;
  height: 150px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px; /* Отступ между квадратами */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.meal-name {
  font-size: 18px;
  margin-bottom: 5px;
}

.calories {
  font-size: 14px;
}

</style>
