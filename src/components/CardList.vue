<script setup>
import Card from "@/components/Card.vue";
import { defineProps } from 'vue';

const { recipes } = defineProps(['recipes']);
</script>

<template>
  <div class="cards flex flex-wrap">
    <Card v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" class="cardReceipt"/>
  </div>
</template>


<style scoped>



.cardReceipt{
}
</style>