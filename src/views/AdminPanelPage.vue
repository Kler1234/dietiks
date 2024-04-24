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
              <option value="Вегетарианская">Вегетарианская</option>
              <option value="Веганская">Веганская</option>
              <option value="Низкоуглеводная">Низкоуглеводная</option>
              <option value="Много клетчатки">Много клетчатки</option>
              <option value="Чистое питание">Чистое питание</option>
              <option value="Кетодиета">Кетодиета</option>
              <option value="Мало жира">Мало жира</option>
              <option value="Низкокалорийная">Низкокалорийная</option>
              <option value="Высокобелковая">Высокобелковая</option>
              <option value="Пескетарианство">Пескетарианство</option>
              <option value="Без сахара">Без сахара</option>
              <option value="Без лактозы">Без лактозы</option>
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
            <input type="text" v-model="recipe.source" required />
          </label><br />
          <button type="submit" class="submit-btn">Добавить рецепт</button>
        </form>
      </div>
      <div class="delete-form-wrapper">
        <form class="delete-form" @submit.prevent="deleteRecipe">
          <h1 class="text-2xl text-center pb-5">Удалить рецепт по ID:</h1>
          <div class="explanation">
            <span class="explanation-sign" text='Чтобы узнать ID рецепта зайдите на страницу "Рецепты", нажмите на интересующий рецепт и в появившемся окне, снизу, будет ID рецепта'>?</span>
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
  image: '',
  title: '',
  ingredients: '',
  instructions: '',
  diet: '',
  calories: null,
  proteins: null,
  fats: null,
  carbs: null,
  source: ''
})

const recipeIdToDelete = ref(null)

const onImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      recipe.value.image = reader.result
    }
    reader.readAsDataURL(file)
  }
}

const submitRecipe = () => {
  console.log('Отправляем рецепт:', recipe.value)
}

const deleteRecipe = () => {
  console.log('Удаляем рецепт с ID:', recipeIdToDelete.value)
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
