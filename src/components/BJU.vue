<template>
  <div class="bzhu-form">
    <h2 class="title"> <strong>Расчет базового обмена веществ (БЖУ)</strong></h2> <!-- формула Миффлина-Сан Жеора -->
    <!-- Шаг 1: Выбор пола -->
    <div v-if="step === 1">
      <h1 class="select-gender">Выберите пол:</h1>
      <div class="gender-buttons">
        <button @click="selectGender('male')" :class="{ 'selected': gender === 'male' }">М</button>
        <button @click="selectGender('female')" :class="{ 'selected': gender === 'female' }">Ж</button>
      </div>
      <div class="group-of-button">
        <button class="next-button" @click="nextStep">Далее</button>
      </div>
    </div>
    <!-- Шаг 2: Выбор активности -->
    <div v-else-if="step === 2">
      <h1 class="select-activity"> Ваш образ жизни:</h1>
      <div class="activity-level-buttons">
        <button @click="selectActivityLevel('sedentary')" :class="{ 'selected': activityLevel === 'sedentary' }">Сидячий образ жизни</button>
        <button @click="selectActivityLevel('lightly-active')" :class="{ 'selected': activityLevel === 'lightly-active' }">Малоподвижный</button>
        <button @click="selectActivityLevel('moderately-active')" :class="{ 'selected': activityLevel === 'moderately-active' }">Умеренно активный</button>
        <button @click="selectActivityLevel('very-active')" :class="{ 'selected': activityLevel === 'very-active' }">Очень активный</button>
        <button @click="selectActivityLevel('extra-active')" :class="{ 'selected': activityLevel === 'extra-active' }">Экстремально активный</button>
      </div>
      <div class="group-of-button">
        <button class="prev-button" @click="prevStep">Назад</button>
        <button class="next-button" @click="nextStep">Далее</button>
      </div>
    </div>
    <!-- Шаг 3: Заполнение данных -->
    <div v-else-if="step === 3">
      <form @submit.prevent="calculateBZHU">
        <div class="form-group">
          <label for="age">Возраст (лет):</label>
          <input type="number" v-model.number="age" id="age">
        </div>
        <div class="form-group">
          <label for="height">Рост (см):</label>
          <input type="number" v-model.number="height" id="height">
        </div>
        <div class="form-group">
          <label for="weight">Вес (кг):</label>
          <input type="number" v-model.number="weight" id="weight">
        </div>
        <div class="form-group">
          <label for="goal">Цель:</label>
          <select v-model="goal" id="goal">
            <option value="lose-weight">Сбросить вес</option>
            <option value="maintain-weight">Поддерживать вес</option>
            <option value="gain-weight">Набрать вес</option>
          </select>
        </div>
        <div class="group-of-button">
          <button class="prev-button" @click="prevStep">Назад</button>
          <button class="result-btn" type="submit">Рассчитать БЖУ</button>
        </div>
      </form>
    </div>
    <!--Показ результатов -->
    <div v-else-if="step === 4">
      <div v-if="result" class="result">
        <h3>Ваш БЖУ составляет:</h3>
        <div class="result">
          <p>Калории: {{ result.calories }} ккал</p>
          <p>Белки: {{ result.proteins }} г</p>
          <p>Жиры: {{ result.fats }} г</p>
          <p>Углеводы: {{ result.carbs }} г</p>
        </div>
        <Button class="restart" @click="resetForm">Новый расчет</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
export default {
  data() {
    return {
      step: 1, // Текущий шаг
      gender: 'male',
      activityLevel: 'sedentary',
      age: null,
      height: null,
      weight: null,
      caloricDeficit: 'no',
      goal: 'lose-weight',
      result: null
    };
  },
  methods: {
    selectGender(selectedGender) {
      this.gender = selectedGender;
    },
    selectActivityLevel(selectedActivityLevel) {
      this.activityLevel = selectedActivityLevel;
    },
    calculateBZHU() {
      if (!this.age || !this.height || !this.weight) {
        alert('Пожалуйста, заполните все поля.');
        return;
      }
      let bmr;
      if (this.gender === 'male') {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      } else {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      }

      let activityFactor;
      switch (this.activityLevel) {
        case 'sedentary':
          activityFactor = 1.2;
          break;
        case 'lightly-active':
          activityFactor = 1.375;
          break;
        case 'moderately-active':
          activityFactor = 1.55;
          break;
        case 'very-active':
          activityFactor = 1.725;
          break;
        case 'extra-active':
          activityFactor = 1.9;
          break;
        default:
          activityFactor = 1.2;
      }

      const totalCalories = bmr * activityFactor;

      let goalMultiplier;
      
      switch (this.goal) {
        case 'lose-weight':
          goalMultiplier = this.caloricDeficit === 'yes' ? 0.8 : 1;
          break;
        case 'maintain-weight':
          goalMultiplier = 1;
          break;
        case 'gain-weight':
          goalMultiplier = 1.2;
          break;
        default:
          goalMultiplier = 1;
      }


      const adjustedCalories = totalCalories * goalMultiplier;

      // Расчет БЖУ
      const proteins = 0.8 * this.weight; // грамм белков на килограмм веса
      const fats = 0.3 * adjustedCalories / 9; // грамм жиров (30% от общего количества калорий)
      const carbs = (adjustedCalories - (proteins * 4) - (fats * 9)) / 4; // грамм углеводов

      this.result = {
        calories: adjustedCalories.toFixed(0),
        proteins: proteins.toFixed(0),
        fats: fats.toFixed(0),
        carbs: carbs.toFixed(0)
      };

      this.step = 4; 
    },
    nextStep() {
      this.step++; 
    },
    prevStep() {
      this.step--; 
    },
    resetForm() {
      this.step = 1;
      this.result = null;
    }
  }
};
</script>

<style scoped>
.bzhu-form {
  display: flex;
  flex-flow: column;
}

.title {
  font-size: 25px;
}

.gender-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.gender-buttons button {
  width: 50px;
  height: 50px;
  margin: 0 5px;
  border-radius: 50%;
  border: none;
  background-color: #ccc;
  font-size: 20px;
}

.gender-buttons button.selected {
  background-color: #04AA6D;
  color: white;
}

.activity-level-buttons {
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
}

.activity-level-buttons button {
  width: 200px;
  height: 35px;
  margin: 0 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  font-size: 14px;
}

.select-activity{
  text-align: center;
  font-size: 20px;
}

.activity-level-buttons button.selected {
  background-color: #04AA6D;
  color: white;
}


input {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-top: 10px;
}

.group-of-button{
  display: flex;
  justify-content: space-between;
}

.prev-button, .next-button, .restart, .result-btn{
  background-color: #04AA6D;
  padding: 5px 10px 5px 10px;
  margin: 15px 0 15px 0;
  border-radius: 5px;
  color: white;
}

.form-group label{
  padding-left: 10px;
}

.result{
  padding-top: 10px;
  justify-content: center;
  text-align: center;
}

.result h3{
  font-size: 20px;
}


@media (max-width: 498px){

  .title{
    font-size: 15px;
  }

  .select-gender{
    padding-top: 5px;
    text-align: center;
  }

  .gender-buttons{
    padding-top: 10px;
  }

  input{
    margin-top: 0;
  }

}
</style>
