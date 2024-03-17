<template>
  <div class="popup-menu rounded-[24px]" @click.stop>
    <div class="popup-content">
      <div v-if="menuItem === 'БЖУ'">Форма для БЖУ</div>
      <p v-else-if="menuItem === 'Индекс массы тела'">
        <IndexMassiTela></IndexMassiTela>
      </p>
      <p v-else-if="menuItem === 'Калорийность'">Форма для калорийности</p>
    </div>
  </div>
</template>


<script setup>
import IndexMassiTela from "@/components/IndexMassiTela.vue"

</script>

<script>
export default {
  props: ['menuItem']
}
</script>

<style scoped>
.popup-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: white;
  border: 1px solid black;
  z-index: 9999; /* Убедитесь, что z-index выше, чем у остального содержимого */
  /* Дополнительные стили для оформления меню */
}


@media (max-width: 425px) {
  .popup-menu{
    width: 300px;
    height: 400px;

  }

  .title__weigth{
    font-size: 10px;
  }
}

.popup-content {
  padding: 20px;
}


</style>
