<template>
  <div class="bzhu-form">
    <h2>Расчет базового обмена веществ (БЖУ)</h2>
    <form @submit.prevent="calculateBZHU">
      <!-- Добавлено поле "Цель" -->

      <!-- Конец добавления -->
      <div class="form-group">
        <label for="gender">Пол:</label>
        <select v-model="gender" id="gender">
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <div class="form-group">
        <label for="activity-level">Уровень активности:</label>
        <select v-model="activityLevel" id="activity-level">
          <option value="sedentary">Сидячий образ жизни</option>
          <option value="lightly-active">Малоподвижный</option>
          <option value="moderately-active">Умеренно активный</option>
          <option value="very-active">Очень активный</option>
          <option value="extra-active">Экстремально активный</option>
        </select>
      </div>
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
        <label>Тренировка силы и объема мышц:</label>
        <input type="checkbox" id="strength-training" v-model="strengthTraining">
        <label for="strength-training">Да</label>
      </div>
      <div class="form-group">
        <label for="goal">Цель:</label>
        <select v-model="goal" id="goal">
          <option value="lose-weight">Сбросить вес</option>
          <option value="maintain-weight">Поддерживать вес</option>
          <option value="gain-weight">Набрать вес</option>
        </select>
      </div>
      <button type="submit">Рассчитать БЖУ</button>
    </form>
    <div v-if="result" class="result">
      <h3>Ваш БЖУ составляет:</h3>
      <p>Калории: {{ result.calories }} ккал</p>
      <p>Белки: {{ result.proteins }} г</p>
      <p>Жиры: {{ result.fats }} г</p>
      <p>Углеводы: {{ result.carbs }} г</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      gender: 'male',
      activityLevel: 'sedentary',
      age: null,
      height: null,
      weight: null,
      caloricDeficit: 'no',
      strengthTraining: false,
      goal: 'lose-weight',
      result: null
    };
  },
  methods: {
    calculateBZHU() {
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

      // Общее энергопотребление
      const totalCalories = bmr * activityFactor;

      // Множитель для корректировки калорий в зависимости от цели
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

      // Корректировка калорий в зависимости от тренировок
      const trainingMultiplier = this.strengthTraining ? 1.1 : 1;

      // Итоговое количество калорий
      const adjustedCalories = totalCalories * goalMultiplier * trainingMultiplier;

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
    }

  }
};
</script>

<style scoped>
/* Стили для формы */
</style>
