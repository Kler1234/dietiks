<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closePopup: Function
});
</script>

<template>
  <div class="container">
    <div class="diet-name">
      <h1>Много клетчатки</h1>
    </div>
    <div class="closeModal" @click="closePopup"></div>
    <div class="main-text">
      <p><strong><i>Диета с большим количеством клетчатки</i></strong> - это режим питания, при котором акцент делается на употреблении продуктов, богатых клетчаткой (пищевыми волокнами). Клетчатка — это несъедобная часть растительных продуктов, которая не расщепляется в желудке и кишечнике, но оказывает положительное воздействие на организм.</p>
      <h2>Причины, по которым люди используют диету с употреблением большого количества клетчатки:</h2>
      <ul>
        <li>Поддержка пищеварения: Клетчатка способствует нормализации кишечной моторики, предотвращает запоры и поддерживает здоровую микрофлору.</li>
        <li>Снижение риска заболеваний: Регулярное употребление клетчатки связано с снижением риска развития сердечно-сосудистых заболеваний, диабета и некоторых видов рака.</li>
        <li>Контроль веса: Пищевые волокна создают ощущение сытости, что помогает контролировать аппетит и снижать калорийность рациона.</li>
      </ul>
      <h2>Стоит добавить следующие продукты в свой рацион питания:</h2>
      <ul>
        <li>Включить: фасоль, горох, булгур, жареные семечки, фисташки, груши, ягоды, овощи (зеленый горошек, брюссельская капуста, брокколи, спаржа, морковь).</li>
      </ul>
      <h2>Противопоказания и ограничения:</h2>
      <ul>
        <li>Индивидуальная непереносимость: Некоторые люди могут испытывать дискомфорт при употреблении большого количества клетчатки.</li>
        <li>Заболевания желудочно-кишечного тракта: В некоторых случаях, при заболеваниях желудка или кишечника, употребление большого количества клетчатки может быть нежелательным.</li>
      </ul>
      <div class="important-case">
        <h1 class="important">Если при использовании <strong>данной</strong> диеты вы почувствовали себя плохо, рекомендуется <i>обратиться к <strong>врачу.</strong></i></h1>
      </div>
      <h4>Источники (кликабельно):<br><br>  <a href="https://medaboutme.ru/articles/dieta_s_bolshim_kolichestvom_kletchatki/">Medaboutme.ru</a>,<br><br>
        <a href="https://www.missfit.ru/likbez/fibre/">Missfit.ru</a> </h4>
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