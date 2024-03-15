<template>
  <div id="app">
    <ReceiptsPage :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"/>
  </div>
</template>
<script setup>
import DietsPage from "@/views/DietsPage.vue";
import ReceiptsPage from "@/views/ReceiptsPage.vue";
</script>