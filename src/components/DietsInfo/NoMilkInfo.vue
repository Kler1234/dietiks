<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Без лактозы</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Диета без лактозы</i></strong> - это распространенная схема питания, которая полностью исключает или ограничивает потребление продуктов с лактозой. Лактоза — это вид простого сахара, который содержится в молоке и молочных продуктах. Обычно она расщепляется ферментом лактазой в тонком кишечнике. Однако около 65% населения Земли страдают непереносимостью лактозы, что выражается в различных побочных эффектах со стороны ЖКТ: вздутие, избыточное газообразование, боль, диарея и даже рвота. Поэтому соблюдение безлактозной диеты может свести к минимуму симптомы у людей с этим заболеванием.</p>
      <h2>Причины, по которым люди используют безлактозную диету:</h2>
      <ul>
        <li>Непереносимость лактозы: Люди, страдающие непереносимостью лактозы, испытывают дискомфорт после употребления молочных продуктов.</li>
        <li>Забота о здоровье: Безлактозная диета может помочь снизить риск развития сердечно-сосудистых заболеваний и других состояний.</li>
        <li>Этические и экологические соображения: Некоторые люди выбирают безлактозную диету по личным, религиозным или медицинским причинам, а также из соображений экологии и этики.</li>
      </ul>
      <h2>Стоит исключить/добавить следующие продукты в свой рацион питания:</h2>
      <ul>
        <li>Исключить: молоко и молочные продукты (содержащие лактозу).</li>
        <li>Включить: безлактозные продукты (молоко без лактозы, соевое молоко, ореховые молоки).</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Индивидуальная непереносимость</li>
        <li>Заболевания почек и печени: При наличии проблем с этими органами следует проконсультироваться с врачом.</li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно):<br><br>  <a href="https://medvisor.ru/articles/dieta-i-zdorovoe-pitanie/dieta-bez-laktozy/">Medvisor.ru</a><br><br>
        <a href="https://www.viola.ru/journal/syr-bez-laktozy-chto-eto-takoe">Viola.ru</a><br><br>
        <a href="https://www.sochetaizer.ru/academy/produkty/bezlaktoznye-produkty-vsyo-chto-nuzhno-znat">Sochetaizer.ru</a></h4>
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