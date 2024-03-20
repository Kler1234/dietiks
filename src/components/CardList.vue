<script setup>
import Card from "@/components/Card.vue";
import { defineProps } from 'vue';

const { recipes } = defineProps(['recipes']);
</script>

<template>
  <div class="cards grid grid-cols-2">
    <Card v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
  </div>
</template>

<style scoped>

</style>