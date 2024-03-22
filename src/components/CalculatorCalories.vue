<template>
  <div class="calorie-calculator">
    <h2><strong>Расчет калорийности продукта</strong></h2>
    <form @submit.prevent="fetchCalories">
      <div class="product-name">
        <label for="productName">Название продукта (пр: Яблоко):</label>
        <input type="text" id="productName" v-model.trim="productName" required>
      </div>
      <button type="submit">Рассчитать</button>
    </form>

    <div v-if="product">
      <p class="text-center">Информация о продукте (на 100 гр.):</p>
      <p>Название: {{ product.name_product }}</p>
      <p>Калории: {{ product.kkal }}</p>
      <p>Белки: {{ product.protein }}</p>
      <p>Жиры: {{ product.fats }}</p>
      <p>Углеводы: {{ product.carbohydrates }}</p>
    </div>

    <div v-if="!product && productNotFound">
      <p>Продукт не найден. Вы можете добавить его в базу данных:</p>
      <form @submit.prevent="addProduct">
        <div>
          <label for="newProductName">Название продукта:</label>
          <input class="ml-10" type="text" id="newProductName" v-model.trim="newProductName" required>
        </div>
        <div class="pt-1.5">
          <label for="newProductCalories">Калории на 100гр :</label>
          <input class="ml-10" type="number" id="newProductCalories" v-model.number="newProductCalories" required>
        </div>
        <div class="pt-1.5">
          <label for="newProductProtein">Белки:</label>
          <input class="ml-10"  type="number" id="newProductProtein" v-model.number="newProductProtein" required>
        </div>
        <div class="pt-1.5">
          <label for="newProductFats">Жиры:</label>
          <input class="ml-10" type="number" id="newProductFats" v-model.number="newProductFats" required>
        </div>
        <div class="pt-1.5">
          <label for="newProductCarbohydrates">Углеводы:</label>
          <input class="ml-10" type="number" id="newProductCarbohydrates" v-model.number="newProductCarbohydrates" required>
        </div>
        <button type="submit">Добавить продукт</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const productName = ref('');
const grams = ref(0);
const product = ref(null);
const productNotFound = ref(false);
const newProductName = ref('');
const newProductCalories = ref(0);
const newProductProtein = ref(0);
const newProductFats = ref(0);
const newProductCarbohydrates = ref(0);

const fetchCalories = async () => {
  try {
    const response = await fetch(`http://localhost:3000/product/${encodeURIComponent(productName.value)}`);
    if (response.ok) {
      product.value = await response.json();
      productNotFound.value = false;
    } else {
      product.value = null; // Обнуляем product, когда продукт не найден
      productNotFound.value = true;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const addProduct = async () => {
  try {
    const response = await fetch('http://localhost:3000/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newProductName.value,
        kkal: newProductCalories.value,
        protein: newProductProtein.value,
        fats: newProductFats.value,
        carbohydrates: newProductCarbohydrates.value
      })
    });
    if (response.ok) {
      newProductName.value = '';
      newProductCalories.value = 0;
      newProductProtein.value = 0;
      newProductFats.value = 0;
      newProductCarbohydrates.value = 0;
      productNotFound.value = false;
    } else {
      console.error('Failed to add product');
    }
  } catch (error) {
    console.error('Error adding product:', error);
  }
};
</script>

<style scoped>
.calorie-calculator{
  display: flex;
  flex-flow: column;

}

form{
  padding-top: 20px;
}

button {
  background-color: #04AA6D;
  padding: 5px 10px 5px 10px;
  margin: 15px 0 15px 0;
  border-radius: 5px;
  color: white;
}

input{
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left: 20px;
}

</style>
