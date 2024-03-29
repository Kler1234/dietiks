<template>
  <div class="filter-area">
    <div class="filter pl-5 rounded-r-lg">
      <h1 class="title text-center">Рецепты</h1>
      <h1 class="title-secondLVL pt-5">Количество калорий:</h1>
      <div class="checkboxes">
        <div v-for="(calorie, index) in calories" :key="index" class="filter-checkbox flex gap-5">
          <RadioButton v-model="selectedCalories" :inputId="'caloriesType'+(index+1)" name="filter" :value="calorie"/>
          <label :for="'caloriesType'+(index+1)" class="ml-2">{{ calorie }}</label>
        </div>
      </div>
      <h1 class="title-secondLVL pt-5">Приём пищи:</h1>
      <div class="meal-type flex flex-col gap-3 mt-3">
        <div v-for="(meal, index) in meals" :key="index" class="filter-checkbox flex col gap-5">
          <RadioButton v-model="selectedMeal" :inputId="'mealType'+(index+1)" name="filter-meal" :value="meal"/>
          <label :for="'mealType'+(index+1)" class="ml-2">{{ meal }}</label>
        </div>
      </div>
      <div class="btn flex justify-center pt-4">
        <Button class="btn-confirm bg-white rounded-lg" label="Принять" icon="pi pi-check" iconPos="right" :loading="loading" @click="applyFilters"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
import { ref, defineProps } from 'vue';

const { applyFiltersCallback } = defineProps(['applyFiltersCallback']);

const loading = ref(false);
const calories = ["300", "500", "700"];
const meals = ["breakfast", "lunch", "dinner", "Перекус"];

const selectedCalories = ref(null);
const selectedMeal = ref(null);

const applyFilters = async () => {
  const filters = {
    calories: selectedCalories.value,
    mealtype: selectedMeal.value
  };
  applyFiltersCallback(filters);
};
</script>




<style scoped>

.title{
  font-size: 20px;
  padding-top: 15px;
}

.btn{
  color: #ffffff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
  border-radius: 6px;
  outline-color: transparent;
}

.btn-confirm {
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  color: black;
  padding-top: 7px;
}

.filter-area{
  width: 350px;
  font-family: Merriweather, serif;
}

.filter-checkbox label{
  cursor: pointer;
}
.filter{
  background-color: #54B947;
}

@media(max-width: 952px) {
  .filter-area{
    width: 100%;
    text-align: center;
  }
  .filter{
    border-radius: 0;
  }
}
</style>