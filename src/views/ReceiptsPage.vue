<template>
  <Header/>
  <div class="wrapper grid grid-cols-2 row-span-1">
    <div class="wrapper-filter pt-5">
      <Filter :applyFiltersCallback="applyFilters"/>
    </div>
    <div class="wrapper-recipes flex flex-wrap">
      <CardList :recipes="recipes"/>
    </div>
  </div>
  <footer class="footer">
    <p class="text-xs text-white">* - Этот сайт предоставляет информацию о диетах и здоровье и не является медицинской организацией. Мы не предоставляем медицинских консультаций и не имеем медицинского образования. Перед принятием каких-либо диетических решений, проконсультируйтесь с врачом или другим квалифицированным специалистом.</p>
  </footer>
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
  padding-top: 100px;
  grid-template-columns: 500px auto;
  padding-bottom: 320px;
}
.footer {
  margin-top: 50px;
  display: flex;
  left: 0;
  bottom: 0;
  background-color: #54B947;
  width: 100%;
  height: 50px;
}
@media (max-width: 952px){
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    flex: 1;
  }

  .wrapper-recipes{
    align-content: center;
    justify-content: center;
  }
  .wrapper-filter{
    padding: 0;
  }

  .cards{
    flex-wrap: nowrap;
    flex-flow: column;
  }
}
@media (max-width: 623px) {
  .footer{
    height: 100%;
  }
  
}
</style>