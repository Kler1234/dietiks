<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
<div class="container">
  <div class="diet-name">
    <h1>Чистое питание</h1>
  </div>
  <div class="closeModal" @click="closePopup"></div>
  <div class="main-text">
    <p><strong><i>Чистое питание</i></strong> - это принцип построения диеты, основанный на выборе цельных продуктов и отказе от обработанных и рафинированных, содержащих химикаты и консерванты. Основное внимание в чистом питании уделяется потреблению цельных продуктов в их естественном или наименее обработанном состоянии, при котором существенное количество питательных веществ при обработке не теряется.
    </p>
    <h2>Причины, по которым люди используют чистое питание:</h2>
    <ul>
      <li>Поддержка здоровья: Чистое питание способствует общему благополучию, снижает риск развития сердечно-сосудистых заболеваний и диабета.</li>
      <li>Контроль веса: Пищевые волокна создают ощущение сытости, помогая контролировать аппетит и снижать калорийность рациона.
      </li>
    </ul>
    <h2>Стоит исключить/добавить следующие продукты в свой рацион питания:</h2>
    <ul>
      <li>Исключить: обработанные продукты (картофель фри, чипсы, сладости).</li>
      <li>Включить: цельные продукты (коричневый рис, фрукты, овощи).</li>
    </ul>
    <h2>Противопоказания и ограничения:</h2>
    <ul>
      <li>Индивидуальная непереносимость</li>
      <li>Заболевания желудочно-кишечного тракта: В некоторых случаях, при заболеваниях желудка или кишечника, употребление большого количества клетчатки может быть нежелательным.
      </li>
    </ul>
    <div class="important-case">
      <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
    </div>
    <h4>Источники (кликабельно):<br><br>  <a href="https://www.gastronom.ru/text/chto-takoe-chistaya-dieta-vred-i-polza-komu-podhodit-obzor-nutriciologa-1022027">Gastronom.ru</a>, <a href="https://lifehacker.ru/chistoe-pitanie/">Lifehacker.ru</a> </h4>
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
  text-indent: 40px;
}

h1, h2 {
  text-align: center;
  padding: 5px 0 5px 0;
}

.diet-name{
  text-align: center;
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