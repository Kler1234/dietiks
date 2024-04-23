<template>
  <div class="cards-card flex flex-col shadow-md">
    <div class="recipe-info">
      <img :src="recipe.image_url" :alt="recipe.name">
      <h1 class="food-name">{{ recipe.name }}</h1>
      <p>Kkal: {{ recipe.kkal }}</p>
    </div>
    <div class="btn-group">
      <button @click.stop="toggleMenu">
        <img class="add" src="@/assets/receipts/plus-svgrepo-com.svg" alt="Add Image">
      </button>
      <button @click.stop="toggleFavorite">
        <img class="favorite" v-if="isFavorite" src="@/assets/receipts/isFavorite.svg" alt="Favorite Star Filled">
        <img class="favorite" v-else src="@/assets/receipts/noFavorite.svg" alt="Favorite Star Empty">
      </button>
    </div>
    <!-- Меню -->
    <div v-if="isMenuVisible" ref="menu" class="menu">
      <button @click.stop="handleMenuClick('breakfast')">Завтрак</button>
      <button @click.stop="handleMenuClick('lunch')">Обед</button>
      <button @click.stop="handleMenuClick('dinner')">Ужин</button>
      <button @click.stop="handleMenuClick('snack')">Перекус</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['recipe', 'recipeId']);
const emit = defineEmits(['toggleFavorite']);

const isFavorite = ref(false);
const isMenuVisible = ref(false);

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
      alert('Для использования функции - авторизуйтесь');
      return;
    }

    const favoriteData = {
      recipeId: props.recipe.recipe_id,
      isFavorite: !isFavorite.value
    };

    const response = await fetch('http://192.168.1.2:3000/favorites/toggle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ token, favoriteData })
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

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const handleMenuClick = async (menuItem) => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      alert('Для использования функции - авторизуйтесь');
      return;
    }
    alert('Рецепт успешно добавлен');

    const diaryData = {
      token: token,
      recipeId: props.recipe.recipe_id,
      name: props.recipe.name,
      mealType: menuItem,
      recipeKkal: props.recipe.kkal,
      recipeProtein: props.recipe.protein,
      recipeFats: props.recipe.fats,
      recipeCarbohydrates: props.recipe.carbohydrates
    };

    const response = await fetch('http://192.168.1.2:3000/diary/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(diaryData)
    });

    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }

    console.log('Запись успешно добавлена в дневник.');
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
  toggleMenu();
};

const closeMenuOnClickOutside = (event) => {
  const menu = document.querySelector('.menu');
  if (!menu.contains(event.target)) {
    isMenuVisible.value = false;
  }
};

onMounted(() => {
  fetchFavoriteStatus();
  document.addEventListener('click', closeMenuOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenuOnClickOutside);
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

.btn-group {
  display: flex;
}

.favorite {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.add {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1;
}

.menu button {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 5px 0;
}

.menu button:hover {
  background-color: #f0f0f0;
}
</style>
