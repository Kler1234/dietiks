<script setup lang="ts">
import Header from '@/components/Header.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex';

type NutritionData = {
  gender: Gender,
  activityLevel: ActivityLevel,
  activityFactor: number,
  age: number | null,
  height: number | null,
  weight: number | null,
  goal: Goal,
}

type NutritionResult = {
  calories: string,
  protein: string,
  fats: string,
  carbs: string
}

type Gender = 'male' | 'female'
type Goal = 'lose-weight' | 'maintain-weight' | 'gain-weight'
type ActivityLevel = 'sedentary' | 'lightly-active' | 'moderately-active' | 'very-active' | 'extra-active'

const step = ref(1)
const nutritionData = ref<NutritionData>({
  gender: 'male',
  activityLevel: 'sedentary',
  activityFactor: 1.2,
  age: null,
  height: null,
  weight: null,
  goal: 'lose-weight',
})

const result = ref<NutritionResult | null>({
  calories: '',
  protein: '',
  fats: '',
  carbs: ''
})

function selectGender(gender: Gender) {
  nutritionData.value.gender = gender
}

function selectActivityLevel(activityLevel: ActivityLevel) {
  nutritionData.value.activityLevel = activityLevel
}

const basalMetabolicRate = computed(() => {
  if (nutritionData.value.gender === 'male') {
    return 10 * nutritionData.value.weight + 6.25 * nutritionData.value.height - 5 * nutritionData.value.age + 5
  }
  else {
    return 10 * nutritionData.value.weight + 6.25 * nutritionData.value.height - 5 * nutritionData.value.age - 161
  }
})

function calculateNutritionData() {
  if (nutritionData.value.age === null || nutritionData.value.height === null || nutritionData.value.weight === null) {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  if (nutritionData.value.activityLevel === 'sedentary') {
    nutritionData.value.activityFactor = 1.2;
  }
  else if (nutritionData.value.activityLevel === 'lightly-active') {
    nutritionData.value.activityFactor = 1.375;
  }
  else if (nutritionData.value.activityLevel === 'moderately-active') {
    nutritionData.value.activityFactor = 1.55;
  }
  else if (nutritionData.value.activityLevel === 'very-active') {
    nutritionData.value.activityFactor = 1.725;
  }
  else if (nutritionData.value.activityLevel === 'extra-active') {
    nutritionData.value.activityFactor = 1.9;
  }

  const totalCalories = basalMetabolicRate.value * nutritionData.value.activityFactor

  let goalMultiplier: number

  if (nutritionData.value.goal === 'lose-weight') {
    goalMultiplier =  0.8;
  }
  else if (nutritionData.value.goal === 'maintain-weight') {
    goalMultiplier = 1;
  }
  else if (nutritionData.value.goal === 'gain-weight') {
    goalMultiplier = 1.2;
  }

  const adjustedCalories = totalCalories * goalMultiplier;

  const protein = 0.8 * nutritionData.value.weight
  const fats = 0.3 * adjustedCalories / 9
  const carbs = (adjustedCalories - (protein * 4) - (fats * 9)) / 4

  result.value = {
    calories: adjustedCalories.toFixed(0),
    protein: protein.toFixed(0),
    fats: fats.toFixed(0),
    carbs: carbs.toFixed(0)
  }

  step.value = 4
}

function nextStep() {
  step.value++
}

function prevStep() {
  step.value--
}

function resetForm(){
  step.value = 1;
  nutritionData.value = null
}

function saveNutritionData() {
  const token = sessionStorage.getItem('token')
  
  if (token === undefined) {
    console.error('Токен пользователя отсутствует');

    alert('Токен пользователя отсутствует')
    return
  }

  fetch('http://217.71.129.139:4101/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ token: token, result: result.value })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка HTTP: ' + response.status);
    }
    console.log('Результаты БЖУ успешно сохранены на сервере');
    })
    .catch(error => {
      console.error('Ошибка при сохранении результатов БЖУ:', error.message);
    });
}

const store = useStore()
const loggedIn = computed(() => store.state.isAuth);
</script>

<template>
  <div>
    <Header/>
  </div>
  <div class="bzhu-form">
    <h2 class="title pt-10"> <strong>Расчет базового обмена веществ (БЖУ)</strong></h2> <!-- формула Миффлина-Сан Жеора -->
    <div v-if="step === 1">
      <h1 class="select-gender pb-5 text-xl">Выберите пол:</h1>
      <div class="gender-buttons">
        <button @click="selectGender('male')" :class="{ 'selected': nutritionData.gender === 'male' }">Мужчина</button>
        <button @click="selectGender('female')" :class="{ 'selected': nutritionData.gender === 'female' }">Женщина</button>
      </div>
      <div class="group-of-button flex gap-10">
        <button class="prev-button" @click="prevStep" v-if="step > 1">Назад</button>
        <button class="next-button" @click="nextStep">Далее</button>
      </div>
    </div>
    <!-- Шаг 2: Выбор активности -->
    <div v-else-if="step === 2">
      <h1 class="select-activity">Ваш образ жизни:</h1>
      <div class="activity-level-buttons">
        <button @click="selectActivityLevel('sedentary')" :class="{ 'selected': nutritionData.activityLevel === 'sedentary' }">Сидячий образ жизни</button>
        <button @click="selectActivityLevel('lightly-active')" :class="{ 'selected': nutritionData.activityLevel === 'lightly-active' }">Малоподвижный</button>
        <button @click="selectActivityLevel('moderately-active')" :class="{ 'selected': nutritionData.activityLevel === 'moderately-active' }">Умеренно активный</button>
        <button @click="selectActivityLevel('very-active')" :class="{ 'selected': nutritionData.activityLevel === 'very-active' }">Очень активный</button>
        <button @click="selectActivityLevel('extra-active')" :class="{ 'selected': nutritionData.activityLevel === 'extra-active' }">Экстремально активный</button>
      </div>
      <div class="group-of-button gap-10">
        <button class="prev-button" @click="prevStep">Назад</button>
        <button class="next-button" @click="nextStep">Далее</button>
      </div>
    </div>
    <!-- Шаг 3: Заполнение данных -->
    <div v-else-if="step === 3">
      <form @submit.prevent="calculateNutritionData">
        <div class="form-group">
          <label for="age">Возраст (лет):</label>
          <input type="number" v-model.number="nutritionData.age" id="age">
        </div>
        <div class="form-group">
          <label for="height">Рост (см):</label>
          <input type="number" v-model.number="nutritionData.height" id="height">
        </div>
        <div class="form-group">
          <label for="weight">Вес (кг):</label>
          <input type="number" v-model.number="nutritionData.weight" id="weight">
        </div>
        <div class="form-group">
          <label for="goal">Цель:</label>
          <select v-model="nutritionData.goal" id="goal">
            <option value="lose-weight">Сбросить вес</option>
            <option value="maintain-weight">Поддерживать вес</option>
            <option value="gain-weight">Набрать вес</option>
          </select>
        </div>
        <div class="group-of-button gap-10">
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
          <p>Белки: {{ result.protein }} г</p>
          <p>Жиры: {{ result.fats }} г</p>
          <p>Углеводы: {{ result.carbs }} г</p>
        </div>
        <div class="flex justify-center gap-2">
          <router-link class="goToProfile" to="/profile">В профиль</router-link>
          <button class="goToProfile" v-if='loggedIn' @click="saveNutritionData">Сохранить результат</button>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <p class="text-xs text-white">* - Этот сайт предоставляет информацию о диетах и здоровье и не является медицинской организацией. Мы не предоставляем медицинских консультаций и не имеем медицинского образования. Перед принятием каких-либо диетических решений, проконсультируйтесь с врачом или другим квалифицированным специалистом.</p>
  </footer>
</template>

<style scoped>
.bzhu-form {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding-top: 100px;

}

.title {
  font-size: 25px;
  padding-bottom: 50px;
}

.gender-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.gender-buttons button {
  width: 100px;
  height: 100px;
  margin: 0 5px;
  border-radius: 15px;
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
  padding: 5px;
  border: 1px solid black;
  margin: 5px;
  border-radius: 25px
}

.group-of-button{
  display: flex;
  justify-content: center;
  padding-bottom: 350px;

}

.goToProfile {
  background-color: #04AA6D;
  border-radius: 5px;
  color: white;

  padding: 5px 5px;

  max-height: 40px;
  max-width: 200px;
  height: 100%;

  display: block;
}

.prev-button, .next-button, .result-btn{
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
  padding-bottom: 15px;
}

.result h3{
  font-size: 20px;
}

.footer {
  margin-top: 50px;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #54B947;
  width: 100%;
  height: 50px;
}
@media (max-width: 952px){
  .footer{
    position: relative;
    height: 100%;
  }
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
