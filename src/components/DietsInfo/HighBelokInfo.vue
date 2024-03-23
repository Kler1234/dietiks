<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Высокобелковая диета</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Высокобелковая диета</i></strong> - это режим питания, при котором акцент делается на увеличении потребления белков. Цель такой диеты может быть разной: от похудения до поддержания здоровья и спортивных достижений.</p>
      <h2>Причины, по которым люди используют высокобелковую диету:</h2>
      <ul>
        <li>Похудение: Белки создают ощущение сытости, что помогает контролировать аппетит и снижать калорийность рациона.</li>
        <li>Поддержка мышечной массы: Белки необходимы для роста и восстановления мышц, особенно при физической активности.</li>
        <li>Улучшение общего состояния: Белки важны для здоровья кожи, волос, ногтей и других тканей.</li>
      </ul>
      <h2>Стоит исключить/добавить следующие продукты в свой рацион питания:</h2>
      <ul>
        <li>Исключить: продукты с низким содержанием белка (сладости, некоторые овощи).</li>
        <li>Включить: продукты с высоким содержанием белка (мясо, рыба, яйца, молочные продукты, орехи).</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Индивидуальная непереносимость: Некоторые люди могут испытывать дискомфорт при увеличении потребления белков.</li>
        <li>Заболевания почек и печени: При наличии проблем с этими органами следует проконсультироваться с <i>врачом.</i></li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно): <br><br> <a href="http://amapa.ru/spravochniki/pitanie/dieta/prikaz_330/vysokobelkovaya_dieta_t/">Amapa.ru</a>
        <br> <br>
        <a href="https://lifehacker.ru/high-protein-diet/">Lifehacker.ru</a>
        <br> <br>
        <a href="https://calorizator.ru/diet/moda/protein/high-protein-diet">Calorizator.ru</a></h4>
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
  p {
    text-indent: 15px;
  }
}
</style>