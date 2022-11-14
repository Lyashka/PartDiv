<template>
  

    <!-- Соглашения -->
    <Agreement v-show="visibleAgreement"  :class="{content_marg: MargCont}">

    </Agreement>

    <!-- Структуры -->
    <Structure v-show="visibleStructure"  :class="{content_marg: MargCont}">

    </Structure>

    <!-- Взаимодейств -->
    <Interactions v-show="visibleInteractions" :class="{content_marg: MargCont}">

    </Interactions>

    <!-- Мероприятия -->
    <Events v-show="visibleEvents" :class="{content_marg: MargCont}">

    </Events>

  <div class="head" id="header">
    <div class="container">
      <div style="display: flex;">
        <div style="height: 60px;" @click="openSideDrawer">
          <button class="menu"><a class="side">☰</a></button>
        </div>
        <div>
          <svg x="0px" y="0px" viewBox="0 0 69.8 70" class="head-image" style="enable-background:new 0 0 69.8 70; fill:#fff;" xml:space="preserve">
            <!--<style type="text/css">-->
            <!--	.st0{fill:;}-->
            <!--</style>-->
            <path class="st0" d="M41.1,38.1c0.1,0.9,0.1,2,0.1,4.6c0,2.9,0,4-0.1,5h2.1c-0.1-1-0.1-2.1-0.1-5c0-2.7,0-3.7,0.1-4.6H41.1
	          L41.1,38.1z"/>
            <path class="st0" d="M45.1,45.1c0,1.7,1.3,2.7,3.5,2.7c2.3,0,3.6-1,3.6-2.8c0-1.2-0.7-2-1.9-2.4c1-0.4,1.6-1.1,1.6-2.2
            c0-1.6-1.2-2.5-3.2-2.5c-2.1,0-3.4,1-3.4,2.6c0,1,0.6,1.8,1.6,2.2C45.8,43.1,45.1,43.9,45.1,45.1L45.1,45.1z M48.7,38.8
            c0.9,0,1.4,0.7,1.4,1.8c0,1.1-0.5,1.7-1.3,1.7c-0.9,0-1.4-0.7-1.4-1.8C47.3,39.4,47.8,38.8,48.7,38.8L48.7,38.8z M48.7,43.2
            c1,0,1.6,0.7,1.6,2c0,1.2-0.6,1.9-1.6,1.9c-1,0-1.6-0.7-1.6-2C47.1,43.9,47.7,43.2,48.7,43.2L48.7,43.2z"/>
            <path class="st0" d="M53.6,45.1c0,1.7,1.3,2.7,3.5,2.7c2.3,0,3.6-1,3.6-2.8c0-1.2-0.7-2-1.9-2.4c1-0.4,1.6-1.1,1.6-2.2
            c0-1.6-1.2-2.5-3.2-2.5c-2.1,0-3.4,1-3.4,2.6c0,1,0.6,1.8,1.6,2.2C54.3,43.1,53.6,43.9,53.6,45.1L53.6,45.1z M57.2,38.8
            c0.9,0,1.4,0.7,1.4,1.8c0,1.1-0.5,1.7-1.3,1.7c-0.9,0-1.4-0.7-1.4-1.8C55.9,39.4,56.4,38.8,57.2,38.8L57.2,38.8z M57.2,43.2
            c1,0,1.6,0.7,1.6,2c0,1.2-0.6,1.9-1.6,1.9c-1,0-1.6-0.7-1.6-2C55.6,43.9,56.2,43.2,57.2,43.2L57.2,43.2z"/>
            <path class="st0" d="M66.4,41.5c-1.1,0-1.8,0.5-2.2,1c0.1-2.2,0.7-3.7,2.2-3.7c1.2,0,1.9,1.2,1.9,1.2v-1.7c0,0-0.7-0.3-2-0.3
            c-2.4,0-4.2,1.9-4.2,5.2c0,3.3,1.4,4.8,3.7,4.8c2.1,0,3.4-1.3,3.4-3.4C69.2,42.6,68.2,41.5,66.4,41.5L66.4,41.5z M65.9,46.9
            c-1,0-1.6-0.8-1.7-3.4c0.3-0.4,0.9-0.8,1.6-0.8c1,0,1.5,0.7,1.5,2C67.3,46.1,66.8,46.9,65.9,46.9L65.9,46.9z"/>
            <path class="st0" d="M59.6,10.2C46-3.4,23.9-3.4,10.2,10.2C3.6,16.8,0.2,25.4,0,34.1h0c0,0,0,0.1,0,0.1c0,0.4,0,0.7,0,1.1
            c0-0.2,0-0.3,0-0.5c0,3,0.3,6,1.1,9C6,62.5,25,73.7,43.7,68.9c8.8-2.3,15.9-7.7,20.5-14.8h-0.1c-4.2,6-10.4,10.6-18.1,12.6
            c-17,4.4-34.4-5.8-38.9-22.8c-0.8-3.3-1.1-6.5-1-9.7h1.4c-0.1,2.6,0.2,5.3,0.9,7.9c4,15.3,19.6,24.4,34.8,20.5
            c5.6-1.4,10.3-4.5,13.9-8.5h0c-4.6,4.3-10.7,7-17.5,7c-7.3,0-13.9-3.1-18.6-8c-0.1-0.1-0.2-0.2-0.2-0.2c-0.1-0.1-0.2-0.2-0.2-0.3
            C18,49.6,16,46,14.9,41.9c-0.7-2.6-0.9-5.2-0.7-7.8h1.6c-0.1,2.2,0.1,4.4,0.7,6.6c3,11.7,15,18.8,26.7,15.7c2-0.5,3.9-1.3,5.6-2.4
            h-0.4c-2.3,1-4.9,1.6-7.5,1.6c-10.5,0-19-8.5-19-19c0-0.9,0.1-1.7,0.2-2.5h5h20.5h0h6.7l0,0h9.4h6.1l0,0
            C69.6,25.5,66.2,16.8,59.6,10.2L59.6,10.2z M11.1,33.1c0.7-3.5,2.3-6.9,5-9.6c7.2-7.2,19-7.2,26.2,0c1.9,1.9,3.3,4.1,4.1,6.4
            L11.1,33.1L11.1,33.1z M48,20.7c-8.6-8.6-22.4-8.6-31,0c-3.5,3.5-5.5,7.9-6.2,12.5l-5.7,0.5c0.7-5.4,3.1-10.7,7.3-14.8
            c10-10,26.2-10,36.2,0c3,3,5.1,6.5,6.3,10.3l-1.6,0.1C52.2,26.2,50.5,23.2,48,20.7L48,20.7z M61.6,28.6c-1.2-4.8-3.7-9.3-7.5-13.1
            c-11.2-11.2-29.5-11.2-40.7,0c-5.1,5.1-7.8,11.6-8.3,18.2L1.8,34L0,34.1c0.4-7.6,3.5-15,9.3-20.8C21.8,0.8,42,0.8,54.4,13.3
            c4.3,4.3,7.1,9.6,8.4,15.2L61.6,28.6L61.6,28.6z"/>
          </svg>
        </div>
      </div>

      <ul>
        <div @click="openProfMenu">
          <button class="prof"><img src="@/components/assets/img.png" style="width: 45px; filter:invert();" alt="" >
          </button>
        </div >
        <div class="prof_menu" v-show="visibleProfMenu">
          <div class="dwn-itm">Большаков Алексей Алексеевич</div>
          <div class="dwn-itm ml">Leha-bolshakov02@mail.ru</div>
          <button class="dwn-itm prf" @click="$router.push('/profilePartner')">Akk</button>
          <button class="dwn-itm prf" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;" @click="$router.push('/')">Выйти
          </button>
        </div>
      </ul>


    </div>
  </div>
  <div class="sidedrawer" :class="{ani_hidde: AniHidde,ani_show: AniShow}" >
    <ul style="display:inline;">
      <li>
        <button class="bt" @click="openAgreement">Соглашения</button>
      </li>
      <li>
        <button class="bt" @click="openStructure">Совместные структуры</button>
      </li>
      <li>
        <button class="bt" @click="openInteractions">Взаимодействия</button>
      </li>
      <li>
        <button class="bt" @click="openEvents">Мероприятия</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Agreement from "@/components/AgreePage/Agreement.vue";
import Structure from "@/components/StructurePage/Structure.vue"
import Interactions from '@/components/InteractionsPage/Interactions.vue'
import Events from '@/components/EventsPage/Events'

export default {
  components: {
    Agreement,
    Structure,
    Interactions,
    Events,
  },
  data() {
    return {
      visibleAgreement: true,
      visibleStructure: false,
      visibleInteractions: false,
      visibleEvents: false,
      visibleProfMenu: false,
      MargCont: false,
      AniHidde:false,
      AniShow:true,
    }
  },
  methods: {
    openAgreement() {
      this.visibleAgreement = true
      this.visibleStructure = false
      this.visibleInteractions = false
      this.visibleEvents = false
    },
    openStructure() {
      this.visibleStructure = true
      this.visibleAgreement = false
      this.visibleInteractions = false
      this.visibleEvents = false
    },
    openInteractions() {
      this.visibleInteractions = true
      this.visibleAgreement = false
      this.visibleStructure = false
      this.visibleEvents = false
    },
    openEvents() {
      this.visibleEvents = true
      this.visibleAgreement = false
      this.visibleStructure = false
      this.visibleInteractions = false
    },
    openSideDrawer() {
      if (this.AniShow === true) {
        this.MargCont = true
        this.AniHidde = true
        this.AniShow = false
      } else {
        this.MargCont = false
        this.AniHidde = false
        this.AniShow = true
      }
    },
    openProfMenu(){
      if(this.visibleProfMenu === false){
        this.visibleProfMenu = true
      }else {
        this.visibleProfMenu = false
      }
    }
  }
}
</script>

<style>
*::before,
*::after {
  box-sizing: border-box;

}

body {
  /* background-color: rgb(221, 221, 221); */
  line-height: 1.5;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

div {
  display: block;
}

ul {
  margin: 0;
}
button{
  cursor: pointer;
}

header,
.head {
  width: 100%;
  height: 60px;
  background-color: #023370;
  font-size: 25px;
  /*color:#fff;*/
  position: fixed;
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

.content_marg{
  margin-left: 0px!important;
  width: 100%!important;
}

.menu {
  width: 60px;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: inherit;
  border: none;
}

.side {
  font-size: 25px;
  color: #fff;
  line-height: 1.5;
}

.menu:hover {
  background-color: #e8910c;
}

.sidedrawer {
  width: 240px;
  height: 1000px;
  background-color: #37383a;
  color: #fff;
  position: fixed;
  margin-top: 60px;

}
.ani_show{
  display: inline;
  transform: translateX(-150%);
  animation: ani2 0.3s forwards;
}

.ani_hidde{
  transform: translateX(-150%);
  /*display: none;*/
  animation: aniHid 0.4s forwards;
}

@keyframes aniHid {
  0% {transform: translateX(0%);}
  100% {transform: translateX(-150%);}
}
@keyframes ani2 {
  0% {transform: translateX(-150%);}
  100% {transform: translateX(0);}
}

.prof {
  width: 60px;
  height: 60px;
  background-color: inherit;
  border: none;
}

.prof:hover {
  background-color: #e8910c;
}

.bt {
  width: 100%;
  height: 42px;
  color: #fff;
  background-color: inherit;
  border: none;
  text-align: left;
  font-size: 18px;
  padding-left: 10px;
}

.bt:hover {
  background-color: rgb(128, 128, 128, 0.12);
}

/* DWN */

.prof_menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 307px;
  min-height: auto;
  margin-top: 2px;
  margin-right: 2px;
  transform: translate3d(-252px, 0px, 0px);
  border-radius: 5px;
  background-color: rgb(240, 240, 240);
  color: black;
  border: 1px rgba(0, 0, 0, 0.103) solid;
}

.dwn-itm {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding: 5px 20px 5px 20px;
  font-size: 18px;
}

.ml {
  font-size: 13px;
  line-height: 0.5;
  border-bottom: 1px rgba(0, 0, 0, 0.103) solid;
  padding-bottom: 10px;
  padding-top: 1px;
}

.prf {
  border-bottom: 1px rgba(0, 0, 0, 0.103) solid;
  border-top: 0px rgba(0, 0, 0, 0.103) solid;
  border-left: 0px;
  border-right: 0px;
  font-weight: 400;
}

.prf:hover {
  background-color: rgb(128, 128, 128, 0.12);
}
</style>