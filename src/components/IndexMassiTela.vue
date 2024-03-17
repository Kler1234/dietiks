<template>
  <div class="main">
    <div class="title-block">
      <h2 class="title">Расчет Индекса Массы Тела (ИМТ)</h2>
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
      <p class="">{{bmiCategory}}  ({{ bmi.toFixed(2) }})</p>
<!--      <p>{{ bmiCategory }}</p>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: null,
      height: null,
      bmi: null,
      bmiCategory: null
    };
  },
  methods: {
    calculate() {
      if (this.weight !== null && this.height !== null) {
        const heightInMeters = this.height / 100;
        this.bmi = this.weight / (heightInMeters * heightInMeters);

        if (this.bmi < 18.5) {
          this.bmiCategory = 'Недостаточная масса тела';
        } else if (this.bmi >= 18.5 && this.bmi < 25) {
          this.bmiCategory = 'Нормальная масса тела';
        } else if (this.bmi >= 25 && this.bmi < 30) {
          this.bmiCategory = 'Избыточная масса тела (предожирение)';
        } else if (this.bmi >= 30) {
          this.bmiCategory = 'Ожирение';
        }
      } else {
        alert('Пожалуйста, заполните все поля для расчета.');
      }
    }
  }
};
</script>

<style scoped>
.main{
  display: flex;
  flex-flow: column;

}
.title-block{
  display: flex;
  font-size: 25px;
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
  font-size: 17px;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 6px 18px;
  color: white;
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
</style>
