<template>
  <div>
    <Header/>
    <div class="wrapper grid grid-cols-2 row-span-1">
      <div class="wrapper-filter pt-5">
        <Filter :applyFiltersCallback="updateRecipes"/>
      </div>
      <div class="wrapper-recipes flex flex-wrap">
        <template v-if="!loading && recipes.length === 0">
          <p class="noRecipes">Нет рецептов, удовлетворяющих выбранным критериям.</p>
        </template>
        <template v-else>
          <CardList :recipes="recipes" @recipeClick="openRecipePopup" />
        </template>
      </div>
    </div>
    <footer class="footer">
      <p class="text-xs text-white">* - Этот сайт предоставляет информацию о диетах и здоровье и не является медицинской организацией. Мы не предоставляем медицинских консультаций и не имеем медицинского образования. Перед принятием каких-либо диетических решений, проконсультируйтесь с врачом или другим квалифицированным специалистом.</p>
    </footer>
    <PopupRecipe v-if="popupVisible" :recipeInfo="selectedRecipe" @closePopup="closeRecipePopup" />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Filter from "@/components/Filter.vue";
import CardList from "@/components/CardList.vue";
import PopupRecipe from "@/components/PopupRecipePage/PopupRecipe.vue";
import {ref} from 'vue';

const loading = ref(false);
const recipes = ref([]);
const selectedRecipe = ref(null);
const popupVisible = ref(false);
const updateRecipes = (newRecipes) => {
  recipes.value = newRecipes;
};

const openRecipePopup = (recipe) => {
  selectedRecipe.value = recipe;
  popupVisible.value = true;
};

const closeRecipePopup = () => {
  popupVisible.value = false;
};

</script>

<style scoped>
.wrapper {
  padding-top: 100px;
  grid-template-columns: 500px auto;
  padding-bottom: 320px;
}

.footer {
  margin-top: 300px;
  display: flex;
  left: 0;
  bottom: 0;
  background-color: #54B947;
  width: 100%;
  height: 50px;
}

.noRecipes{
  align-content: center;
  justify-content: center;
  text-align: center;
}
@media (max-width: 952px) {
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    flex: 1;
  }

  .wrapper-recipes {
    align-content: center;
    justify-content: center;
  }

  .wrapper-filter {
    padding: 0;
  }

  .cards {
    flex-wrap: nowrap;
    flex-flow: column;
  }

  .noRecipes{
    padding-top: 150px;
  }
}

@media (max-width: 623px) {
  .footer {
    height: 100%;
  }
}
</style>