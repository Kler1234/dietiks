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
            <RadioButton v-model="selectedCalories" :inputId="'caloriesType'+(index+1)" name="filter" :value="calorie.value"/>
            <label :for="'caloriesType'+(index+1)" class="ml-2">{{ calorie.label }}</label>
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
            <RadioButton v-model="selectedMeal" :inputId="'mealType'+(index+1)" name="filter-meal" :value="meal.value"/>
            <label :for="'mealType'+(index+1)" class="ml-2">{{ meal.label }}</label>
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
            <RadioButton v-model="selectedDiets" :inputId="'dietType'+(index+1)" :value="diet.value"/>
            <label :for="'dietType'+(index+1)" class="ml-2">{{ diet.label }}</label>
          </div>
        </div>
      </div>
    </div>
    <!-- Кнопка применения фильтров -->
    <div class="btn flex justify-center pt-4">
      <Button class="btn-confirm rounded-lg" label="Принять" icon="pi pi-check" iconPos="right" :loading="loading"
              @click="applyFilters"/>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
import {ref, defineProps} from 'vue';
import { watch } from 'vue';

const { applyFiltersCallback, currentPage } = defineProps(['applyFiltersCallback', 'currentPage']);

const loading = ref(false);
const calories = [
  { label: "Ничего из нижеперечисленного", value: null },
  { label: "300", value: '300' },
  { label: '500', value: '500' },
  { label: "700", value: '700' }
];
const meals = [
  { label: "Ничего из нижеперечисленного", value: null },
  { label: "Завтрак", value: "breakfast" },
  { label: "Обед", value: "lunch" },
  { label: "Ужин", value: "dinner" },
  { label: "Перекус", value: "snack" }
];
const diets = [
  { label: "Вегетарианство", value: "vegetarian" },
  { label: "Веганская", value: "vegan" },
  { label: "Низкоуглеводная", value: "lowCarb" },
  { label: "Много клетчатки", value: "highFiber" },
  { label: "Чистое питание", value: "cleanEating" },
  { label: "Кетодиета", value: "keto" },
  { label: "Мало жира", value: "lowFat" },
  { label: "Низкокалорийная", value: "lowCalorie" },
  { label: "Высокобелковая", value: "highProtein" },
  { label: "Пескетарианство", value: "pescatarian" },
  { label: "Без сахара", value: "sugarFree" },
  { label: "Без лактозы", value: "lactoseFree" }
];

const selectedCalories = ref(null);
const selectedMeal = ref(null);
const selectedDiets = ref([]);

const showCalories = ref(false);
const showMeals = ref(false);
const showDiets = ref(false);

const applyFilters = async () => {
  loading.value = true;
  try {
    const queryParams = [];
    if (selectedCalories.value) queryParams.push(`kkal=${selectedCalories.value}`);
    if (selectedMeal.value) queryParams.push(`meal_type=${selectedMeal.value}`);
    if (!Array.isArray(selectedDiets.value)) {
      selectedDiets.value = [selectedDiets.value];
    }
    if (selectedDiets.value.length > 0) {
      selectedDiets.value.forEach(diet => queryParams.push(`diet=${diet}`));
    }

    const url = queryParams.length > 0 ? `http://192.168.1.2:3000/recipes?${queryParams.join('&')}` : 'http://192.168.1.2:3000/recipes';

    const response = await fetch(url);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }

    applyFiltersCallback(responseData);

  } catch (error) {
    console.error('Error applying filters:', error);
  }
  loading.value = false;
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

@media (max-width: 952px) {
  .filter-area {
    width: 100%;
    text-align: center;
  }

  .filter {
    border-radius: 0;
  }
}
</style>
