<template>
  <div class="cards-card flex flex-col shadow-md">
    <div class="recipe-info">
      <img :src="recipe.image_url" :alt="recipe.name">
      <h1 class="food-name">{{ recipe.name }}</h1>
      <p>Kkal: {{ recipe.kkal }}</p>
    </div>
    <div class="btn-group">
      <button @click.stop="toggleFavorite">
        <img class="favorite" v-if="isFavorite" src="@/assets/receipts/isFavorite.svg" alt="Favorite Star Filled">
        <img class="favorite" v-else src="@/assets/receipts/noFavorite.svg" alt="Favorite Star Empty">
      </button>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref, onMounted} from 'vue';

const props = defineProps(['recipe', 'recipeId']);
const emit = defineEmits(['toggleFavorite']);

const isFavorite = ref(false);

const fetchFavoriteStatus = async () => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('Токен пользователя отсутствует');
      return;
    }

    const favoriteData = {
      token: token,
      recipeId: props.recipe.recipe_id,
    };

    const response = await fetch(`http://192.168.1.2:3000/favorites/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(favoriteData)
    });

    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }

    const data = await response.json();
    isFavorite.value = data.isFavorite;
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
};


const toggleFavorite = async () => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('Токен пользователя отсутствует');
      return;
    }

    const favoriteData = {
      recipeId: props.recipe.recipe_id,
      isFavorite: !isFavorite.value
    };
    console.log(favoriteData);

    const response = await fetch('http://192.168.1.2:3000/favorites/toggle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({token, favoriteData})
    });

    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }

    isFavorite.value = !isFavorite.value;
    emit('toggleFavorite', { recipe: props.recipe, isFavorite: isFavorite.value });
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
};

onMounted(() => {
  fetchFavoriteStatus();
});

</script>

<style scoped>
.cards-card {
  width: 300px;
  height: 350px;
  margin: 20px;
  padding: 20px;
  cursor: pointer;
  position: relative;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}
.btn-group{
  display: flex;
}
.favorite {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
