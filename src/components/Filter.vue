<template>
  <div class="filter-area">
    <!-- Фильтр по калориям -->
    <div class="filter pl-5 pt-3 rounded-tr-lg">
      <h1 class="text-center text-3xl">Фильтры</h1>
      <h1 class="title text-center cursor-pointer" @click="toggleCalories">
        {{ showCalories ? 'Количество калорий <' : 'Количество калорий >' }}
      </h1>
      <div v-show="showCalories">
        <div class="checkboxes">
          <div v-for="(calorie, index) in calories" :key="index" class="filter-checkbox flex gap-5">
            <RadioButton v-model="selectedCalories" :inputId="'caloriesType'+(index+1)" name="filter" :value="calorie"/>
            <label :for="'caloriesType'+(index+1)" class="ml-2">{{ calorie }}</label>
          </div>
        </div>
      </div>
    </div>
    <!-- Фильтр по приему пищи -->
    <div class="filter pl-5">
      <h1 class="title text-center cursor-pointer" @click="toggleMeals">
        {{ showMeals ? 'Приём пищи <' : 'Приём пищи >' }}
      </h1>
      <div v-show="showMeals">
        <div class="meal-type flex flex-col gap-3 mt-3">
          <div v-for="(meal, index) in meals" :key="index" class="filter-checkbox flex col gap-5">
            <RadioButton v-model="selectedMeal" :inputId="'mealType'+(index+1)" name="filter-meal" :value="meal"/>
            <label :for="'mealType'+(index+1)" class="ml-2">{{ meal }}</label>
          </div>
        </div>
      </div>
    </div>
    <!-- Фильтр по диетам -->
    <div class="filter pl-5 rounded-br-lg pb-3">
      <h1 class="title text-center cursor-pointer" @click="toggleDiets">
        {{ showDiets ? 'Диеты <' : 'Диеты >' }}
      </h1>
      <div v-show="showDiets">
        <div class="diets flex flex-col gap-3 mt-3">
          <div v-for="(diet, index) in diets" :key="index" class="filter-checkbox flex col gap-5">
            <RadioButton v-model="selectedDiets" :inputId="'dietType'+(index+1)" :value="diet"/>
            <label :for="'dietType'+(index+1)" class="ml-2">{{ diet }}</label>
          </div>
        </div>
      </div>
    </div>
    <!-- Кнопка применения фильтров -->
    <div class="btn flex justify-center pt-4">
      <Button class="btn-confirm rounded-lg" label="Принять" icon="pi pi-check" iconPos="right" :loading="loading" @click="applyFilters"/>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import { ref, defineProps } from 'vue';

const { applyFiltersCallback } = defineProps(['applyFiltersCallback']);

const loading = ref(false);
const calories = ["300", "500", "700"];
const meals = ["breakfast", "lunch", "dinner", "Перекус"];
const diets = [
  "Вегетарианство",
  "Веганская",
  "Низкоуглеводная",
  "Много клетчатки",
  "Чистое питание",
  "Кетодиета",
  "Мало жира",
  "Низкокалорийная",
  "Высокобелковая",
  "Пескетарианство",
  "Без сахара",
  "Без лактозы"
];

const selectedCalories = ref(null);
const selectedMeal = ref(null);
const selectedDiets = ref([]);

const showCalories = ref(false);
const showMeals = ref(false);
const showDiets = ref(false);

const applyFilters = async () => {
  applyFiltersCallback();
};

const toggleCalories = () => {
  showCalories.value = !showCalories.value;
};

const toggleMeals = () => {
  showMeals.value = !showMeals.value;
};

const toggleDiets = () => {
  showDiets.value = !showDiets.value;
};
</script>

<style scoped>
.title {
  font-size: 15px;
  padding-top: 15px;
  transition: color 0.3s;
}

.title:hover {
  color: white;
}
.btn {
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
  background-color: #54B947;
}

.filter-area {
  width: 350px;
  font-family: Merriweather, serif;
}

.filter-checkbox label {
  cursor: pointer;
}

.filter {
  background-color: #54B947;
}

@media(max-width: 952px) {
  .filter-area {
    width: 100%;
    text-align: center;
  }
  .filter {
    border-radius: 0;
  }
}
</style>
