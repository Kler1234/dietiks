<template>
  <Header/>
  <div class="wrapper flex flex-row">
    <Filter :applyFiltersCallback="applyFilters"/>
    <CardList :recipes="recipes"/>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Filter from "@/components/Filter.vue";
import CardList from "@/components/CardList.vue";
import { ref } from 'vue';

const loading = ref(false);
const recipes = ref([]);

const applyFilters = async (filters) => {
  loading.value = true;
  try {
    const queryParams = new URLSearchParams();
    for (const key in filters) {
      if (filters[key]) {
        queryParams.append(key, filters[key]);
      }
    }

    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=3f3a6324&app_key=5e400438c457e168e7c0eccc2c63bff6&mealType=Breakfast&calories=300-500`);
    const responseData = await response.text();

    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }

    if (!responseData) {
      throw new Error('Empty response data');
    }

    // Пытаемся распарсить JSON только если ответ не пустой
    const data = JSON.parse(responseData);

    // Проверяем, что ответ содержит ожидаемые свойства
    if (!data || !data.hits || !Array.isArray(data.hits) || data.hits.length === 0) {
      throw new Error('No recipes found');
    }

    recipes.value = data.hits.map(hit => hit.recipe);
  } catch (error) {
    console.error('Error loading recipes:', error);
  }
  loading.value = false;
};
</script>



<style scoped>
.wrapper{
  padding-top: 120px;
}

.cards{
  grid-template-columns: 300px 300px 300px;
  grid-gap: 150px;
  margin: 0 auto;
}



.food-name{
  font-size: 25px;
}
</style>