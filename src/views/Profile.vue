<script setup>
import Header from '@/components/Header.vue'
import Sidebar from "@/components/Profile/Sidebar.vue";
import MealSquare from '@/components/Profile/MealSquare.vue';
import RecipeSquare from "@/components/Profile/RecipeSquare.vue";
import PopupRecipe from "@/components/PopupRecipePage/PopupRecipe.vue";
import { useRouter } from 'vue-router';
import {ref, computed, reactive, onMounted} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
const loggedIn = computed(() => store.getters.isLoggedIn);
const selectedRecipe = ref(null);

const openRecipePopup = (recipe) => {
  selectedRecipe.value = recipe;
};

const closeRecipePopup = () => {
  selectedRecipe.value = null;
};

const handleLogout = () => {
  store.dispatch('logout');
  router.push('/login');
};

const userData = reactive({
  username: '',
  protein: 0,
  fats: 0,
  carbohydrate: 0,
  calorie_result: 0
});

const fetchUserData = async () => {
  try {
    const response = await fetch('http://192.168.1.2:3000/user/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    const { username, protein, fat, carbohydrate, calorie_result } = data;
    userData.username = username;
    userData.protein = protein;
    userData.fats = fat;
    userData.carbohydrate = carbohydrate;
    userData.calorie_result = calorie_result;
  } catch (error) {
    console.error('Error fetching user data', error);
  }
};

const fetchFavoriteRecipes = async () => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('Токен пользователя отсутствует');
      return;
    }

    const response = await fetch('http://192.168.1.2:3000/favorites/recipes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }

    const data = await response.json();
    recipes.value = data;
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
};

onMounted(fetchUserData);
onMounted(fetchFavoriteRecipes);

const value = 100;
const total = 200;
const remaining = total - value;
const protein = { value: 50, total: 100 };
const fat = { value: 30, total: 60 };
const carbs = { value: 20, total: 40 };
const recipes = ref([]);



</script>

<template>
  <Header/>
  <div class="content">
    <Sidebar @logout="handleLogout" class="sidebar"/>
    <div class="main">
      <h1 class="profile text-center pb-10 text-3xl">Здравствуйте, {{userData.username}}</h1>
      <h1 class="profile-phone text-center pb-10 text-3xl"><strong>{{userData.username}}</strong></h1>
      <div class="progressBar flex gap-5">
          <div class="score flex ">
            <div class="eatede">
              <h1 class="text-2xl">Съедено</h1>
              <h2>{{ value }} / {{userData.calorie_result}}</h2>

            </div>
            <div class="needToEat">
              <h1 class="text-2xl"> Осталось </h1>
              <h2>{{ remaining }} / {{userData.calorie_result}}</h2>
            </div>
          </div>
          <div class="nutr flex">
            <div class="belki">
              <h1 class="text-2xl">Белки</h1>
              <h2>{{protein.value}}/{{ userData.protein }}</h2>
            </div>
            <div class="fats">
              <h1 class="text-2xl">Жиры</h1>
              <h2>{{fat.value}}/{{ userData.fats }}</h2>
            </div>
            <div class="uglevodi">
              <h1 class="text-2xl">Углеводы</h1>
              <h2>{{carbs.value}}/{{ userData.carbohydrate }}</h2>
            </div>
          </div>
        <div class="food"></div>
        <div class="favorite"></div>
        </div>
      <div class="meal-squares">
        <MealSquare mealName="Завтрак" />
        <MealSquare mealName="Завтрак" />
        <MealSquare mealName="Завтрак" />
        <MealSquare mealName="Завтрак" />
      </div>
      <div class="favorites">
        <h2>Избранное</h2>
        <div class="recipes-container">
          <div class="recipes">
            <RecipeSquare class="cursor-pointer" :recipe="recipe" v-for="recipe in recipes" :key="recipe.id" @click="openRecipePopup(recipe)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <p class="text-xs text-white">* - Этот сайт предоставляет информацию о диетах и здоровье и не является медицинской организацией. Мы не предоставляем медицинских консультаций и не имеем медицинского образования. Перед принятием каких-либо диетических решений, проконсультируйтесь с врачом или другим квалифицированным специалистом.</p>
  </footer>
  <PopupRecipe :recipeInfo="selectedRecipe" v-if="selectedRecipe" @closePopup="closeRecipePopup" />
</template>



<style scoped>
.content{
  padding-top: 150px;
  height: 100%;
  display: flex;
}


.main{
  flex-grow: 1;
  width: 80%;
}


.progressBar{
  flex-flow: column;
  padding-top: 5px;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  width: 50%;
  margin: 0 auto;
  min-width: 300px
}
.score{
  justify-content: space-around;
  text-align: center;
}
.nutr{
  justify-content: space-around;
  text-align: center;
  bottom: 0;
}

.meal-squares {
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  margin-top: 20px;
  align-content: center;
  justify-content: center;
}

.favorites {
  margin-top: 20px;
  text-align: center;
}

.favorites h2 {
  font-size: 20px;
  margin-bottom: 10px;
}


.recipes-container {
  display: flex;
  width: 50%;
  max-height: 350px;
  overflow-y: auto;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  align-content: center;
  margin: 0 auto;
  justify-content: center;
  min-width: 350px
}
.recipes {
  display: inline-flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;

}
.profile-phone{
  display: none;
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
  .content{
    padding-top: 100px;
    flex-wrap: wrap;
  }
  .sidebar{
    text-align: center;
    margin: 0 auto;
    box-sizing: content-box;
  }
  .recipes-container{
    overflow-y: auto;
  }
  .main{
    width: 100%;
  }
  .footer{
    height: 100%;
  }
  .profile{
    display: none;
  }
  .profile-phone{
    display: block;
  }
}

@media (max-width: 839px){
}
@media (max-width: 768px) {
  .recipes-container {
    overflow-y: auto;
  }

  .recipes {
    display: flex;
    flex-direction: column; /* Направление столбцом */
  }
}
</style>