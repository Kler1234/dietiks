<template>
  <div>
    <Header />
    <h1 class="title-admin text-center text-3xl">Админ панель</h1>
    <div class="form-container">
      <div class="form-wrapper">
        <form class="form" @submit.prevent="submitRecipe">
          <h1 class="text-2xl text-center pb-5">Добавление рецепта</h1>
          <label class="form-label">
            Изображение:
            <input type="file" accept="image/*" @change="onImageChange" ref="imageInput" required />
          </label><br />
          <label class="form-label">
            Название:
            <input type="text" v-model="recipe.title" required />
          </label><br />
          <label class="form-label">
            Ингредиенты:
            <textarea v-model="recipe.ingredients" required></textarea>
          </label><br />
          <label class="form-label">
            Способ приготовления:
            <textarea v-model="recipe.instructions" required></textarea>
          </label><br />
          <label class="form-label">
            Диета:
            <select v-model="recipe.diet" required>
              <option disabled value="">Выберите диету</option>
              <option value="vegetarian">Вегетарианская</option>
              <option value="vegan">Веганская</option>
              <option value="lowCarb">Низкоуглеводная</option>
              <option value="highFiber">Много клетчатки</option>
              <option value="cleanEating">Чистое питание</option>
              <option value="keto">Кетодиета</option>
              <option value="lowFat">Мало жира</option>
              <option value="lowCalorie">Низкокалорийная</option>
              <option value="highProtein">Высокобелковая</option>
              <option value="pescatarian">Пескетарианство</option>
              <option value="sugarFree">Без сахара</option>
              <option value="lactoseFree">Без лактозы</option>
            </select>
          </label><br />
          <label class="form-label">
            Тип питания:
            <select v-model="recipe.meal_type">
              <option disabled value="">Выберите тип питания</option>
              <option value="breakfast">Завтрак</option>
              <option value="lunch">Обед</option>
              <option value="dinner">Ужин</option>
              <option value="snack">Перекус</option>
            </select>
          </label><br />
          <label class="form-label">
            ККАЛ:
            <input type="number" v-model="recipe.calories" required />
          </label><br />
          <label class="form-label">
            Белки:
            <input type="number" v-model="recipe.proteins" required />
          </label><br />
          <label class="form-label">
            Жиры:
            <input type="number" v-model="recipe.fats" required />
          </label><br />
          <label class="form-label">
            Углеводы:
            <input type="number" v-model="recipe.carbs" required />
          </label><br />
          <label class="form-label">
            Источник:
            <input type="text" v-model="recipe.source"/>
          </label><br />
          <button type="submit" class="submit-btn">Добавить рецепт</button>
        </form>
      </div>
      <div class="delete-form-wrapper">
        <form class="delete-form" @submit.prevent="deleteRecipe">
          <h1 class="text-2xl text-center pb-5">Удалить рецепт по ID:</h1>
          <div class="explanation">
            <span class="explanation-sign" text='Чтобы узнать ID рецепта зайдите на страницу "Рецепты", нажмите на интересующий рецепт и в появившемся окне, снизу, будет ID рецепта.'>?</span>
          </div>
          <label class="form-label">
            Напишите ID рецепта
            <input type="number" v-model="recipeIdToDelete" required />
          </label>
          <button type="submit" class="delete-btn">Удалить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue'

const recipe = ref({
  image: null,
  title: '',
  ingredients: '',
  instructions: '',
  diet: '',
  meal_type: '',
  calories: null,
  proteins: null,
  fats: null,
  carbs: null,
  source: ''
})

const recipeIdToDelete = ref(null)

const onImageChange = (e) => {
  const file = e.target.files[0];
  console.log('Выбранный файл:', file);
  const reader = new FileReader();
  reader.onload = (event) => {
    recipe.value.image = file;
  };
  reader.readAsDataURL(file);
}

const submitRecipe = async () => {
  try {
    console.log(recipe.value.image);
    const formData = new FormData();
    formData.append('recipeImage', recipe.value.image);
    formData.append('recipeName', recipe.value.title);
    formData.append('recipeIngredients', recipe.value.ingredients);
    formData.append('recipeSteps', recipe.value.instructions);
    formData.append('recipeDiet', recipe.value.diet);
    formData.append('recipeMealType', recipe.value.meal_type);
    formData.append('recipeKkal', recipe.value.calories);
    formData.append('recipeProtein', recipe.value.proteins);
    formData.append('recipeFats', recipe.value.fats);
    formData.append('recipeCarbs', recipe.value.carbs);
    formData.append('recipeSource', recipe.value.source);

    const response = await fetch('http://192.168.1.2:3000/admin/addRecipe', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Произошла ошибка при добавлении рецепта.');
    }

    alert('Рецепт успешно добавлен');
    clearForm();
  } catch (error) {
    alert('Ошибка:', error.message);
  }
}

const deleteRecipe = async () => {
  try {
    const recipeID = recipeIdToDelete.value;
    const response = await fetch('http://192.168.1.2:3000/admin/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipeID })
    });

    if (!response.ok) {
      throw new Error('Произошла ошибка при удалении рецепта.');
    }

    alert('Рецепт успешно удален');
  } catch (error) {
    alert('Ошибка:', error.message);
  }
}

const clearForm = () => {
  recipe.value.image = null;
  recipe.value.title = '';
  recipe.value.ingredients = '';
  recipe.value.instructions = '';
  recipe.value.diet = '';
  recipe.value.meal_type = '';
  recipe.value.calories = null;
  recipe.value.proteins = null;
  recipe.value.fats = null;
  recipe.value.carbs = null;
  recipe.value.source = '';
  console.log(1);
}
</script>

<style scoped>

.title-admin{
  padding-top: 125px;
}
.form-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  justify-content: space-between;
}

.form-wrapper,
.delete-form-wrapper {
  flex: 1;
  margin-right: 20px;
}

.delete-form-wrapper{
  position: relative;
}

.form,
.delete-form {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
}

input[type="text"],
input[type="number"],
textarea,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit-btn,
.delete-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.explanation{
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background-color: #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  width: 25px;
  height: 25px;
  text-align: center;
  color: black;
}

.explanation-sign:hover::after {
  content: attr(text);
  position: absolute;
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  top: 100%;
  left: 50%;
  transform: translateX(-100%);
  z-index: 1;
}

.submit-btn:hover,
.delete-btn:hover {
  background-color: #45a049;
}

@media (max-width: 422px) {
  .explanation{
    display: none;
  }

}

@media (max-width: 320px) {
  .form, .delete-form{
    padding: 0;
  }

}
</style>
