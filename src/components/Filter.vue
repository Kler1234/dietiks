<script setup>

import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
</script>

<template>
  <div class="filter-area">
    <div class="filter bg-green-600 pl-5 rounded-r-lg">
      <h1 class="title text-center">Рецепты</h1>
      <h1 class="title-secondLVL pt-5">Количество калорий:</h1>
      <div class="checkboxes">
        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="calories" inputId="caloriesType1" name="filter" value="oneHun"/>
          <label for="caloriesType1" class="ml-2"> 300-500 калорий</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="calories" inputId="caloriesType2" name="filter" value="oneHun"/>
          <label for="caloriesType2" class="ml-2"> 300-500 калорий</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="calories" inputId="caloriesType3" name="filter" value="oneHun"/>
          <label for="caloriesType3" class="ml-2"> 300-500 калорий</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="calories" inputId="caloriesType4" name="filter" value="oneHun"/>
          <label for="caloriesType4" class="ml-2"> 300-500 калорий</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="calories" inputId="caloriesType5" name="filter" value="oneHun"/>
          <label for="caloriesType5" class="ml-2"> 300-500 калорий</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="calories" inputId="caloriesType6" name="filter" value="oneHun"/>
          <label for="caloriesType6" class="ml-2"> 300-500 калорий</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="calories" inputId="caloriesType7" name="filter" value="oneHun"/>
          <label for="caloriesType7" class="ml-2"> 300-500 калорий</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="calories" inputId="caloriesType8" name="filter" value="oneHun"/>
          <label for="caloriesType8" class="ml-2"> 300-500 калорий</label>
        </div>

      </div>
      <h1 class="title-secondLVL pt-5">Приём пищи:</h1>
      <div class="meal-type flex flex-col gap-3 mt-3">
        <div class="filter-checkbox flex col gap-5">
          <RadioButton v-model="mealtype" inputId="mealType1" name="filter-meal" value="meal"/>
          <label for="mealType1" class="ml-2">Завтрак</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="mealtype" inputId="mealType2" name="filter-meal" value="meal"/>
          <label for="mealType2" class="ml-2">Обед</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="mealtype" inputId="mealType3" name="filter-meal" value="meal"/>
          <label for="mealType3" class="ml-2">Ужин</label>
        </div>

        <div class="filter-checkbox flex gap-5">
          <RadioButton v-model="mealtype" inputId="mealType4" name="filter-meal" value="meal"/>
          <label for="mealType4" class="ml-2">Перекус</label>
        </div>
      </div>
      <div class="btn flex justify-center pt-4">
        <Button class="btn-confirm bg-white rounded-lg" label="Принять" icon="pi pi-check" iconPos="right" :loading="loading" @click="load"/>
      </div>
    </div>
  </div>
</template>

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

</style>