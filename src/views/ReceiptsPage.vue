<script setup>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue"
import Filter from "@/components/Filter.vue"
import CardList from "@/components/CardList.vue"
import RadioButton from 'primevue/radiobutton';
import Button from "primevue/button";
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <Header/>
<div class="wrapper flex flex-row">
  <Filter/>
  <CardList/>
</div>
</template>

<style scoped>
.wrapper{
  padding-top: 120px;
}

.cards{
  grid-template-columns: 300px 300px 300px;
  grid-gap: 50px;
  margin: 0 auto;
}

.food-name{
  font-size: 25px;
}
</style>