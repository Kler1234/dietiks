<template>
  <div class="calorie-calculator">
    <h2 class="text-2xl"><strong>Расчет калорийности продукта</strong></h2>
    <form @submit.prevent="fetchCalories" class="find" v-if="searchingProduct">
      <div class="product-name">
        <label for="productName" class="text-xl">Название продукта (пр: Яблоко):</label>
        <input type="text" id="productName" v-model.trim="productName" @input="autocomplete" required>
        <ul class="autocomplete-results" v-show="showAutocomplete && autocompleteResults.length > 0">
          <li v-for="(result, index) in autocompleteResults" :key="index" @click="selectAutocompleteResult(result)">
            {{ result.name_product }}
          </li>
        </ul>
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
      <form @submit.prevent="addProduct" class="addProduct">
        <div class="title__new-product">
          <label for="newProductName">Название продукта:</label>
          <input class="ml-10" type="text" id="newProductName" v-model.trim="newProductName" required>
        </div>
        <div class="pt-1.5">
          <label for="newProductCalories">Калории на 100гр :</label>
          <input class="ml-10" type="number" id="newProductCalories" v-model.number="newProductCalories" required>
        </div>
        <div class="pt-1.5">
          <label for="newProductProtein">Белки:</label>
          <input class="ml-10"  type="number" id="newProductProtein" step="any" v-model.number="newProductProtein" required>
        </div>
        <div class="pt-1.5">
          <label for="newProductFats">Жиры:</label>
          <input class="ml-10" type="number" id="newProductFats" step="any" v-model.number="newProductFats" required>
        </div>
        <div class="pt-1.5">
          <label for="newProductCarbohydrates">Углеводы:</label>
          <input class="ml-10" type="number" id="newProductCarbohydrates" step="any" v-model.number="newProductCarbohydrates" required>
        </div>
        <Button type="submit">Добавить продукт</Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const productName = ref('');
const product = ref(null);
const productNotFound = ref(false);
const autocompleteResults = ref([]);
const showAutocomplete = ref(false);
const newProductName = ref('');
const newProductCalories = ref(0);
const newProductProtein = ref(0);
const newProductFats = ref(0);
const newProductCarbohydrates = ref(0);
const searchingProduct = ref(true);

const fetchAutocompleteResults = async (searchTerm) => {
  try {
    const response = await fetch(`http://217.71.129.139:4327/autocomplete/${encodeURIComponent(searchTerm)}`);
    if (response.ok) {
      autocompleteResults.value = await response.json();
      showAutocomplete.value = true;
    } else {
      autocompleteResults.value = [];
      showAutocomplete.value = false;
    }
  } catch (error) {
    console.error('Error fetching autocomplete results:', error);
  }
};

const autocomplete = () => {
  fetchAutocompleteResults(productName.value);
};

const selectAutocompleteResult = async (result) => {
  productName.value = result.name_product;
  showAutocomplete.value = false;
};

const fetchCalories = async () => {
  try {
    const response = await fetch(`http://217.71.129.139:4327/product/${encodeURIComponent(productName.value)}`);
    if (response.ok) {
      product.value = await response.json();
      productNotFound.value = false;
    } else {
      product.value = null;
      productNotFound.value = true;
      searchingProduct.value = false;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const addProduct = async () => {
  try {
    const response = await fetch('http://217.71.129.139:4327/product', {
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
      searchingProduct.value = true;
    } else {
      console.error('Failed to add product');
    }
  } catch (error) {
    console.error('Error adding product:', error);
  }
};
</script>

<style scoped>

.autocomplete-results {
  position: absolute;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  width: 150px;
  margin-left: 55%;
}

.autocomplete-list li {
  list-style-type: none;
  padding: 5px 10px;
  cursor: pointer;
}

.autocomplete-list li:hover {
  background-color: #f0f0f0;
}

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

@media (max-width: 498px) {
  .autocomplete-results {
    width: calc(100% - 100px);
    position: relative;
    margin: 0 20px;
  }

  #productName input-text{
    margin: 0 auto;
  }
  .addProduct input{
    width: 70px;
  }

  #newProductName{
    width: 150px;
  }
}

</style>
