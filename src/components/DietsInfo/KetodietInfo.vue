<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Кетодиета</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Кето-диета, или кетогенная диета</i></strong> - это режим питания с низким содержанием углеводов и высоким процентом жиров. Основной принцип заключается в резком сокращении доли углеводов в рационе и повышении потребления жиров. При этом организм переходит в состояние метаболизма, когда в качестве топлива сжигаются жиры, что называется кетозом. Кетогенная диета имеет несколько вариаций, но общий принцип остается похожим: ограничение углеводов, чтобы стимулировать использование жиров в качестве источника энергии.</p>
      <h2>Причины, по которым люди используют кетодиету:</h2>
      <ul>
        <li>Похудение: Кетоз способствует сжиганию жиров, что помогает снизить вес.</li>
        <li>Улучшение общего состояния: Некоторые люди отмечают повышение энергии, улучшение фокусировки и снижение аппетита.</li>
        <li>Поддержка здоровья: Кетоз может улучшить чувствительность к инсулину и контролировать уровень сахара в крови.</li>
      </ul>
      <h2>Стоит исключить/добавить следующие продукты в свой рацион питания:</h2>
      <ul>
        <li>Исключить: продукты содержащие большое количество углеводов (картофель, кукуруза, горох, тыква)</li>
        <li>Включить: низкоуглеводные продукты (брокколи, цветная капуста, салат, огурцы, зелень)</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Диабет: Людям с диабетом следует внимательно следить за уровнем сахара в крови при использовании кето-диеты.</li>
        <li>Заболевания почек и печени: Употребление большого количества жиров может быть нежелательным при наличии проблем с почками или печенью.</li>
        <li>Сердечно-сосудистые заболевания: При наличии сердечных проблем следует проконсультироваться с врачом перед началом кето-диеты.</li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно):<br><br>  <a href="https://edaplus.info/nutrition/keto-diet.html">Edaplus.info</a><br><br>
        <a href="https://www.xfit.ru/blog/chto-takoe-ketodieta/">Xfit.ru</a><br><br>
        <a href="https://style.rbc.ru/health/5f129c6f9a79472d45d4a502">RBC.ru</a>
      </h4>
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