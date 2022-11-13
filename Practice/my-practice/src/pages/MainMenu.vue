<template>

    <!-- Соглашения -->

    <!-- Структуры -->


    <!-- Взаимодейств -->


    <!-- Мероприятия -->


  <div class="head " id="header">
    <div class="container">
      <div style="display: flex;">
        <div style="height: 60px;">
          <button class="menu"><a class="side">☰</a></button>
        </div>
        <div>
          <img src="/scr/img/logo-e-blue.svg" class="head-image" alt="#" >
        </div>
      </div>
      <ul>
        <div><button class="prof"><img src="/scr/img/img.png" style="width: 45px; filter:invert();" alt=""></button></div>
        <div class="dwn-menu">
          <div class="dwn-itm">Большаков Алексей Алексеевич</div>
          <div class="dwn-itm ml">Leha-bolshakov02@mail.ru</div>
          <button class="dwn-itm prf">Akk</button>
          <button class="dwn-itm prf" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">Выйти</button>
        </div>
      </ul>

    </div>
  </div>
  <div class="sidedrawer">
    <ul style="display:inline;">
      <li>
        <button class="bt">Соглашения</иг>
      </li>
      <li>
        <button class="bt">Совместные структуры</button>
      </li>
      <li>
        <button class="bt">Взаимодействия</button>
      </li>
      <li>
        <button class="bt">Мероприятия</button>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style>
*::before,
*::after {
  box-sizing: border-box;

}
body {
  background-color:rgb(221, 221, 221);
  line-height: 1.5;
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}
div {
  display: block;
}

ul{
  margin: 0;
}
header,
.head {
  width: 100%;
  height: 60px;
  background-color: #023370;
  font-size: 25px;
  color:#fff;
  position:fixed;
}

.head-image {
  display: inline-block;
  height: auto;
  max-width: 100%;
  width: 50px;
  margin-top: 4px;
  margin-left: 5px;
}

.tabla {
  border-collapse: collapse;
  box-sizing: border-box;

}

.container {
  display: flex;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  height: 60px;
  justify-content: space-between;
}


.menu{
  width: 60px;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  background-color:inherit;
  border:none;
}

.side{
  font-size: 25px;
  color:#fff;
  line-height: 1.5;
}

.menu:hover{
  background-color:#e8910c;
}

.sidedrawer{
  width: 240px;
  height:1000px;
  background-color: #37383a;
  color:#fff;
  position:fixed;
  margin-top: 60px;
  display: inline;
}

.prof{
  width: 60px;
  height: 60px;
  background-color:inherit;
  border:none;
}

.prof:hover{
  background-color:#e8910c;
}

.bt{
  width: 100%;
  height: 42px;
  color:#fff;
  background-color:inherit;
  border:none;
  text-align: left;
  font-size: 18px;
  padding-left: 10px;
}

.bt:hover{
  background-color: rgb(128, 128, 128, 0.12);
}

/* DWN */

.dwn-menu {
  display: flex;
  flex-direction: column;
  position:absolute;
  min-width: 307px;
  min-height: auto;
  margin-top: 2px;
  margin-right: 2px;
  transform: translate3d(-252px, 0px, 0px);
  border-radius: 5px;
  background-color:rgb(240, 240, 240);
  color:black;
  border: 1px rgba(0, 0, 0, 0.103) solid;
}

.dwn-itm{
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding: 5px 20px 5px 20px;
  font-size: 18px;
}

.ml{
  font-size: 13px;
  line-height: 0.5;
  border-bottom: 1px rgba(0, 0, 0, 0.103) solid;
  padding-bottom: 10px;
  padding-top: 1px;
}

.prf{
  border-bottom: 1px rgba(0, 0, 0, 0.103) solid;
  border-top: 0px rgba(0, 0, 0, 0.103) solid;
  border-left: 0px;
  border-right: 0px;
  font-weight: 400;
}

.prf:hover{
  background-color: rgb(128, 128, 128, 0.12);
}
</style>