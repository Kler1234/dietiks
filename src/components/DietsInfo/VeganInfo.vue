<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Веганская диета</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Веганство</i></strong> - это система питания, при которой люди полностью отказываются от употребления продуктов животного происхождения. В отличие от вегетарианства, веганы не употребляют мясо, рыбу, птицу, яйца, молоко и другие молочные продукты. Они также избегают продуктов, в которых могут содержаться следы животных ингредиентов, таких как желатин, лецитин или мед. Веганство считается самым строгим типом растительной диеты.</p>
      <h2>Отличия <i>веганства</i> от <i>вегетарианства:</i></h2>
      <ul>
        <li>Исключение продуктов животного происхождения: Веганы не употребляют никакие продукты животного происхождения, включая молоко, яйца и мед.</li>
        <li>Моральная позиция: Веганство часто связано с этическими соображениями, защитой прав животных и экологическими мотивами.</li>
        <li>Ограничения в одежде и других областях: Веганы также избегают использования меховой, шерстяной одежды и изделий из кожи, рогов и костей.</li>
      </ul>
      <h2>Причины, по которым люди придерживаются веганства:</h2>
      <ul>
        <li>Этика и животные права: Веганы отказываются от продуктов животного происхождения, чтобы не способствовать животным страданиям и смерти.</li>
        <li>Экологические соображения: Веганство помогает снизить негативное воздействие на окружающую среду, так как производство мяса требует больше ресурсов.</li>
        <li>Забота о здоровье: Некоторые люди переходят на веганскую диету, чтобы улучшить свое здоровье, снизить риск сердечно-сосудистых заболеваний и диабета.</li>
      </ul>
      <h2>Стоит исключить/добавить следующие продукты в свой рацион питания:</h2>
      <ul>
        <li>Исключить: продукты с высоким содержанием углеводов (белый хлеб, макароны, картофель, сладости).</li>
        <li>Включить: продукты с низким содержанием углеводов (булгур, овес, орехи, фисташки, груши).</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Дефицит определенных питательных веществ: Веганы могут столкнуться с недостатком витаминов B12, железа, цинка и омега-3 жирных кислот.</li>
        <li>Неправильное планирование рациона: Недостаток белка, кальция и других важных элементов может возникнуть при неправильной организации питания.</li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно):<br><br>  <a href="https://www.oum.ru/yoga/pravilnoe-pitanie/veganstvo-i-vegetarianstvo-v-chem-raznitsa/">Oum.ru</a></h4>
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