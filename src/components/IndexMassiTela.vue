<template>
  <div class="main">
    <div class="title-block">
      <h2 class="title"><strong>Расчет Индекса Массы Тела (ИМТ)</strong></h2>
    </div>
    <div class="input__weigth">
      <label for="weight">Вес (в кг):</label>
      <input type="number" v-model="weight" id="weight">
    </div>
    <div class="input__height">
      <label for="height">Рост (в см):</label>
      <input type="number" v-model="height" id="height">
    </div>
      <button class="btn mt-5" @click="calculate">Рассчитать</button>
    <div class="result" v-if="bmi !== null">
      <h3>Ваш ИМТ:</h3>
      <p class="result__num" :class="bmiCategoryClass">{{bmiCategory}}  ({{ bmi.toFixed(2) }})</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const weight = ref(null)
const height = ref(null)
const bmi = ref(null)
const bmiCategory = ref(null)

const calculate = () => {
  if (weight.value !== null && height.value !== null) {
    const heightInMeters = height.value / 100
    bmi.value = weight.value / (heightInMeters * heightInMeters)

    if (bmi.value < 18.5) {
      bmiCategory.value = 'Недостаточная масса тела'
    } else if (bmi.value >= 18.5 && bmi.value < 25) {
      bmiCategory.value = 'Нормальная масса тела'
    } else if (bmi.value >= 25 && bmi.value < 30) {
      bmiCategory.value = 'Избыточная масса тела (предожирение)'
    } else if (bmi.value >= 30) {
      bmiCategory.value = 'Ожирение'
    }
  } else {
    alert('Пожалуйста, заполните все поля для расчета.')
  }
}

const bmiCategoryClass = computed(() => {
  if (bmi.value < 18.5) {
    return 'underweight'
  } else if (bmi.value >= 18.5 && bmi.value < 25) {
    return 'normal'
  } else if (bmi.value >= 25 && bmi.value < 30) {
    return 'overweight'
  } else if (bmi.value >= 30) {
    return 'obese'
  }
})
</script>

<style scoped>
.main{
  display: flex;
  flex-flow: column;
}
.title-block{
  display: flex;
  font-size: 25px;
  margin: 0 auto;

}

.title{
  align-content: center;
}
label{
  font-size: 20px;
}

.btn{
  background-color: #04AA6D !important;
  border-radius: 5px;
  max-width: 200px;
  font-size: 17px;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 6px 18px;
  color: white;
  margin: 0 auto;
  margin-top: 10px;
}

input{
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left: 20px;
}

.input__weigth{
  padding-top: 10px;
  padding-bottom: 10px;
}

.result{
  display: flex;
  flex-flow: column;
}

.result h3{
  padding-top: 10px;
  font-size: 25px;
  text-align: center;
}

.result__num{
  padding-top: 5px;
}

.result__num.underweight {
  color: red;
}

.result__num.normal {
  color: green;
}

.result__num.overweight {
  color: orange;
}

.result__num.obese {
  color: red;
}
</style>
