<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Вегетарианство</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Вегетарианство</i></strong> - это система питания, при которой люди употребляют преимущественно или исключительно растительную пищу.</p>
      <h2>Люди становятся вегетарианцами по разным причинам:</h2>
      <ul>
        <li>Этические мотивы: Отказ от употребления продуктов животного происхождения из соображений защиты животных.</li>
        <li>Экологические мотивы: Вегетарианство помогает снизить негативное воздействие на окружающую среду.</li>
        <li>Медицинские мотивы: Вегетарианство связано с улучшением здоровья, снижением риска хронических заболеваний и поддержкой потери веса.</li>
      </ul>
      <h2>Стоит исключить/добавить следующие продукты в свой рацион питания:</h2>
      <ul>
        <li>Исключить: все продукты животного происхождения (мясо, рыбу, молоко, яйца, мед).</li>
        <li>Включить: растительные продукты (фрукты, овощи, орехи, семена, зерновые).</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Недостаток определенных питательных веществ, таких как витамин B12, железо и цинк.</li>
        <li>Неправильное планирование рациона, что может привести к дефициту важных элементов.</li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно): <br><br> <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%B3%D0%B5%D1%82%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE">Wikipedia.org</a></h4>

    </div>
  </div>
</template>

<style scoped>

.closeModal {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;
}
.closeModal:hover {
  opacity: 1;
}
.closeModal::before, .closeModal::after {
  content: "";
  position: absolute;
  top: 10px;
  display: block;
  width: 24px;
  height: 3px;
  background: #000;
}
.closeModal::before {
  transform: rotate(45deg);
}
.closeModal::after {
  transform: rotate(-45deg);
}


.container{
  position: relative;
}

.main-text li, .main-text ul{
  list-style: disc !important;
  margin-left: 10px;
  padding-top: 5px;
}

h1 {
  font-size: 25px;
}
h2 {
  font-size: 22px;
}
h4  {
  font-size: 13px;
}
p {
  text-indent: 40px; /* Отступ первой строки в пикселах */
}

h1, h2 {
  text-align: center;
  padding: 5px 0 5px 0;
}

.diet-name{
  text-align: center;
}
.important-case{
}
.important{
  color: red;
  margin: 30px 0 30px 0;
}

h4 a{
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  transition-duration: 0.3s;

}

h4 a:hover{
  background-color: black;
  color: white;
  transform: scale(1%);
}

@media (max-width: 425px) {
  a {
    padding: 15px;
  }
  p {
    text-indent: 15px;
  }
}
</style>