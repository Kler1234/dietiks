<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Низкоуглеводная диета</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Низкоуглеводная диета</i></strong> - это режим питания, при котором углеводы исключаются до минимума. Организм получает меньше углеводов, но увеличивает потребление белков и жиров. Важно отметить, что полностью исключить углеводы невозможно, так как они присутствуют во многих продуктах, включая фрукты и овощи. Однако низкоуглеводная диета позволяет минимизировать потребление “вредных” простых углеводов</p>
      <h2>Причины, по которым люди используют низкоуглеводную диету:</h2>
      <ul>
        <li>Поддержка снижения веса: Уменьшение углеводов помогает контролировать уровень сахара в крови и способствует снижению жира.</li>
        <li>Улучшение метаболизма и энергии: Простые углеводы быстро расщепляются, что приводит к скачкам инсулина и отложению жира. Низкоуглеводная диета помогает избежать этого.</li>
        <li>Поддержка здоровья: Умеренное ограничение углеводов может способствовать общему благополучию.</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Диабет: Людям с диабетом следует соблюдать специальную диету, поэтому изменение питания может быть нежелательным.</li>
        <li>Беременность и грудное вскармливание: Важно обратиться к врачу перед началом низкоуглеводной диеты.</li>
        <li>Болезни щитовидной железы, почек и другие состояния: Индивидуальные особенности могут повлиять на применимость диеты.</li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно):<br><br>  <a href="https://style.rbc.ru/health/654a3af29a7947bbfa0d33b3">RBC.ru</a><br><br>
        <a href="https://www.yamdiet.com/blog/vse-o-zdorovoy-pishche/nizkouglevodnaja-dieta-kak-dostich-polzy-i-izbezhat-protivopokazanij-s-pomoshhju-primernogo-menju/">Yamdiet.ru</a><br><br>
        <a href="https://www.sport-express.ru/zozh/food/reviews/nizkouglevodnye-diety-chto-eto-polza-i-vred-stoit-li-priderzhivatsya-2175791/">Sport-express.ru</a>
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