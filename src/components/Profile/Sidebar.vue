<template>
  <div class="sidebar">
    <div class="avatar">
      <img src="@/assets/avatar-svgrepo-com.svg" alt="Аватарка">
    </div>
    <router-link to="/profile" class="sidebar-link profile">Профиль</router-link>
    <router-link to="/settings" class="sidebar-link settings">Настройки</router-link>
    <router-link v-if="isAdmin" class="sidebar-link admin-panel" to="/admin">Админ панель</router-link>
    <button @click="handleLogout" class="logout-btn">Выйти из аккаунта</button>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import { defineEmits, computed } from 'vue';
const store = useStore();
const emitLogout = defineEmits(['logout']);
const isAdmin = computed(() => store.state.isAdmin);
const handleLogout = () => {
  emitLogout('logout');
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  padding: 20px;
  box-sizing: border-box;
}

.avatar{
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.sidebar-link {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
}

.logout-btn {
  width: 100%;
  padding: 10px;
  background-color: #54B947;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition-duration: 0.3s;

}

.logout-btn:hover {
  background-color: #cc0000;
}
</style>
