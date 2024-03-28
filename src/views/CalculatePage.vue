<template>
  <div class="">
    <Header/>
  </div>
  <div class="bzhu-form">
    <h2 class="title pt-10"> <strong>Расчет базового обмена веществ (БЖУ)</strong></h2> <!-- формула Миффлина-Сан Жеора -->
    <div v-if="step === 1">
      <h1 class="select-gender pb-5 text-xl">Выберите пол:</h1>
      <div class="gender-buttons">
        <button @click="selectGender('male')" :class="{ 'selected': gender === 'male' }">Мужчина</button>
        <button @click="selectGender('female')" :class="{ 'selected': gender === 'female' }">Женщина</button>
      </div>
      <div class="group-of-button flex gap-10">
        <button class="prev-button" @click="prevStep">Назад</button>
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
      <div class="group-of-button gap-10">
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
          <p>Белки: {{ result.proteins }} г</p>
          <p>Жиры: {{ result.fats }} г</p>
          <p>Углеводы: {{ result.carbs }} г</p>
        </div>
        <button class="restart" @click="resetForm">Продолжить</button>
      </div>
    </div>
  </div>
  <footer class="footer">
    <p class="text-xs text-white">* - Этот сайт предоставляет информацию о диетах и здоровье и не является медицинской организацией. Мы не предоставляем медицинских консультаций и не имеем медицинского образования. Перед принятием каких-либо диетических решений, проконсультируйтесь с врачом или другим квалифицированным специалистом.</p>
  </footer>
</template>

<script>
import Header from '@/components/Header.vue'
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
      result: null,
    };
  },
  components: {
    Header
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
      // Определение базового метаболизма (BMR)
      let bmr;
      if (this.gender === 'male') {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      } else {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      }

      // Учет уровня активности
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
        protein: proteins.toFixed(0),
        fats: fats.toFixed(0),
        carbs: carbs.toFixed(0)
      };

      const token = sessionStorage.getItem('token'); // Получение токена из sessionStorage
      console.log(token);
      if (!token) {
        console.error('Токен пользователя отсутствует');
        return;
      }

      const bzhuData = {
        proteins: this.result.protein,
        fats: this.result.fats,
        carbs: this.result.carbs,
        calories: this.result.calories
      };

      fetch('http://192.168.1.2:3000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Передача токена в заголовке
        },
        body: JSON.stringify({ token, bzhuData })
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

      this.step = 4; // Переход к результатам
    },

    nextStep() {
      this.step++; // Переход к следующему шагу
    },
    prevStep() {
      this.step--; // Возврат к предыдущему шагу
    },
    resetForm() {
      // Сброс формы для нового расчета
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
