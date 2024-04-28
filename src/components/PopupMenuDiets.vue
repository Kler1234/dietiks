<template>
  <div v-if="menuItem" class="popup-menu rounded-[24px]" @click.stop>
    <div class="popup-content">
      <div class="diets-info" v-if="menuItem === 'clearfood'">
        <ClearFoodInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'highbelok'">
        <HighBelokInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'vegetarian'">
        <VegetarianInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'vegan'">
        <VeganInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'lowuglevod'">
        <Lowuglevod :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'highcellulose'">
        <HighCelluloseInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'ketodiet'">
        <KetodietInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'lowfat'">
        <LowFatInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'lowcalories'">
        <LowCaloriesInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'pesketar'">
        <PesketarInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'nosugar'">
        <NoSugarInfo :closePopup="closePopup"/>
      </div>

      <div class="diets-info" v-if="menuItem === 'nomilk'">
        <NoMilkInfo :closePopup="closePopup"/>
      </div>

    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ClearFoodInfo from '@/components/DietsInfo/ClearFoodInfo.vue'
import HighBelokInfo from "@/components/DietsInfo/HighBelokInfo.vue";
import VegetarianInfo from "@/components/DietsInfo/VegetarianInfo.vue";
import VeganInfo from "@/components/DietsInfo/VeganInfo.vue";
import HighCelluloseInfo from "@/components/DietsInfo/HighCelluloseInfo.vue";
import KetodietInfo from "@/components/DietsInfo/KetodietInfo.vue";
import LowFatInfo from "@/components/DietsInfo/LowFatInfo.vue";
import LowCaloriesInfo from "@/components/DietsInfo/LowCaloriesInfo.vue";
import PesketarInfo from "@/components/DietsInfo/PesketarInfo.vue";
import NoSugarInfo from "@/components/DietsInfo/NoSugarInfo.vue";
import NoMilkInfo from "@/components/DietsInfo/NoMilkInfo.vue";
import Lowuglevod from "@/components/DietsInfo/Lowuglevod.vue";

const props = defineProps({
  menuItem: String,
  closePopup: Function
});
</script>


<style scoped>
.popup-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background-color: white;
  border: 1px solid black;
  z-index: 9999;
  overflow: auto;

}

.popup-content{
  position: absolute;
}

@media (max-width: 498px) {
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

@media (max-width: 780px){
  .popup-menu{
    width: 80%;
    height: 80%;
  }
}
</style>