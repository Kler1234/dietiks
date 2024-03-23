<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Пескетарианство</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Пескетарианство</i></strong> - это вид частичного вегетарианства, при котором люди отказываются от употребления мяса, за исключением рыбы и других морепродуктов. Другие продукты животного происхождения, такие как яйца и молочные продукты, могут употребляться как без ограничений, так и с некоторыми исключениями.</p>
      <h2>Причины, по которым люди используют пескетарианство:</h2>
      <ul>
        <li>Поддержка здоровья: Пескетарианство может помочь снизить риск сердечно-сосудистых заболеваний и других состояний.</li>
        <li>Этические соображения: Некоторые пескетарианцы отказываются от мяса из-за этических убеждений, связанных с животными.</li>
        <li>Экологические соображения: Рыболовство и рыбоводство могут быть менее вредными для окружающей среды по сравнению с другими видами животноводства.</li>
      </ul>
      <h2>Стоит исключить/добавить следующие продукты в свой рацион питания:</h2>
      <ul>
        <li>Исключить: мясо (кроме рыбы и морепродуктов).</li>
        <li>Включить: рыбу и другие морепродукты, а также растительные продукты.</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Индивидуальная непереносимость.</li>
        <li>Заболевания почек и печени: При наличии проблем с этими органами следует проконсультироваться с врачом.</li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно):<br><br>  <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%81%D0%BA%D0%B5%D1%82%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE">Wikipedia.org</a><br><br>
        <a href="https://veganolife.ru/articles/health/pesketarianstvo/">Veganolife.ru</a><br><br>
        <a href="https://www.baby.ru/wiki/pesketarianstvo/">Baby.ru</a>
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