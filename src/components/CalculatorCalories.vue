<script setup>
import { ref } from 'vue';

const productName = ref('');
const grams = ref(0);
const totalCalories = ref(null);


const translateToEnglish = async (text) => {
  const apiKey = 'b1g3k5df7ui6bv5qji1c'; // Вставьте ваш API ключ Яндекс Переводчика
  const response = await fetch(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${encodeURIComponent(text)}&lang=ru-en`
  );
  const data = await response.json();
  return data.text[0];
};

const translateToRussian = async (text) => {
  const apiKey = 'b1g3k5df7ui6bv5qji1c'; // Вставьте ваш API ключ Яндекс Переводчика
  const response = await fetch(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${encodeURIComponent(text)}&lang=en-ru`
  );
  const data = await response.json();
  return data.text[0];
};
const fetchCalories = async () => {
  try {
    const API_KEY = 'cec1cae63f5a2d06dc9bfc5ea37577a0';
    const API_ID = '1162aa92';

    const encodedProductName = encodeURIComponent(productName.value);
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${encodedProductName}&app_id=` + API_ID +`&app_key=` + API_KEY);
    const data = await response.json();

    if (data.hints.length > 0) {
      const caloriesPer100g = data.hints[0].food.nutrients.ENERC_KCAL;
      totalCalories.value = Math.round((caloriesPer100g * grams.value) / 100);
    } else {
      totalCalories.value = null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    totalCalories.value = null;
  }
};
</script>

<template>
  <div class="calorie-calculator">
    <h2><strong>Расчет калорийности продукта</strong></h2>
    <form @submit.prevent="fetchCalories">
      <div class="product-name">
        <label for="productName">Название продукта (на англ):</label>
        <input type="text" id="productName" v-model.trim="productName" required>
      </div>
      <div class="product-grams">
        <label for="grams">Граммы продукта:</label>
        <input type="number" id="grams" v-model.number="grams" required>
      </div>
      <button type="submit">Рассчитать</button>
    </form>

    <div v-if="totalCalories !== null">
      <p>Калорийность продукта "{{ productName }}" в {{ grams }} граммах: {{ totalCalories }} калорий</p>
    </div>
  </div>
</template>

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