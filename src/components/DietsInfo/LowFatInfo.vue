<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Мало жира</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Диета с малым содержанием жира</i></strong> - это режим питания, при котором акцент делается на ограничении потребления продуктов, богатых жирами. Основная цель — снижение общего потребления жиров в рационе.
      </p>
      <h2>Причины, по которым люди используют диету с малым содержанием жира:</h2>
      <ul>
        <li>Похудение: Ограничение жиров помогает снизить калорийность рациона и способствует потере веса.</li>
        <li>Поддержка здоровья: Малое количество жиров связано с снижением риска развития сердечно-сосудистых заболеваний и других состояний.</li>
        <li>Поддержка печени и желчного пузыря: Низкожировая диета может быть рекомендована при заболеваниях этих органов.</li>
      </ul>
      <h2>Стоит исключить/добавить следующие продукты в свой рацион питания:</h2>
      <ul>
        <li>Исключить: пищевые продукты с высоким содержанием жиров (жирное мясо, сливочное масло, сыры с высоким содержанием жира).</li>
        <li>Включить: пищевые продукты с низким содержанием жиров (птица без кожи, рыба, молочные продукты с низким содержанием жира).</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Индивидуальная непереносимость: Некоторые люди могут испытывать дискомфорт при ограничении жиров.</li>
        <li>Заболевания печени и желчного пузыря: При наличии проблем с этими органами следует проконсультироваться с врачом.</li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно):<br><br>  <a href="https://style.rbc.ru/health/654a3af29a7947bbfa0d33b3">RBC.ru</a><br><br>
        <a href="https://www.mskcc.org/ru/cancer-care/patient-education/minimal-fat-diet">Mskcc.org</a><br><br>
        <a href="https://fitomarket.com.ua/fitoblog/keto-dieta-podrobnaja-informacija-dlja-nachinajushhih-i-ne-tolko">Fitomarket.ru</a></h4>
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