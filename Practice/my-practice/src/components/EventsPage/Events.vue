<template>
  <div class="content">
    <div class="table">
      <div class=" agr_widt"><button class="add" @click="openFormAddEvents">Создать Мероприятие</button> </div>
      <div>
        <div class="deal" style="height: 60px;">
          <button class="kind fnt hv" style="padding-left: 6px;">Название</button>
          <button class="name fnt hv">Тип</button>
          <button class="short_name fnt hv">Результат</button>
          <button class="data fnt hv">Дата</button>
        </div>
      </div>
<!--      EventsItem-->
      <EventsItem v-for="item of userData" :item="item" :key="item.id">

      </EventsItem>

    </div>
    <div class="agreement">
      <div class="agreement_cont">
        <div class=" agr_widt"><button class="add" @click="openFormAddEvents">Создать мероприятие</button> </div>
        <div >
          <div class="agree_tab" style="height: 60px; border-top: 2px solid rgba(54,64,74,.15);">
            <button class="agree_itm fnt hv" style="padding-left: 6px;">Название</button>
            <button class="agree_itm fnt hv">Тип</button>
            <button class="fnt hv">Принять/Отклонить</button>
          </div>
<!--          SelectEventItem-->
          <SelectEventItem>

          </SelectEventItem>

        </div>
      </div>
    </div>
<!--    fopmAddEvents-->
    <formAddEvents v-show="visibleFormAddEvents">

    </formAddEvents>

  </div>
</template>

<script>
import formAddEvents from '@/components/EventsPage/formAddEvents/formAddEvents'
import EventsItem from '@/components/EventsPage/eventsList/EventsItem'
import SelectEventItem from '@/components/EventsPage/eventsSelect/SelectEventItem'
export default {
  components:{
    formAddEvents,
    EventsItem,
    SelectEventItem,
  },
  data(){
    return{
      userData: [],
      visibleFormAddEvents: false
    }

  },
  methods:{
    openFormAddEvents(){
      if(this.visibleFormAddEvents === false) {
        this.visibleFormAddEvents = true
      }else {
        this.visibleFormAddEvents = false
      }
    }
  },

  mounted() {
    if (localStorage.getItem('tagProfile') === 'Division') {
      if (JSON.parse(localStorage.getItem('EventsData')) === null) {
        this.userData = this.$store.state.userData.universityDivision.events
        localStorage.setItem('EventsData', JSON.stringify(this.userData))
      } else {
        this.userData = JSON.parse(localStorage.getItem('EventsData'))
      }
    } else {
      if (JSON.parse(localStorage.getItem('EventsData')) === null) {
        this.userData = this.$store.state.userData.partner.events
        // console.log('sss')
        // console.log(this.$store.state.userData)
        localStorage.setItem('EventsData', JSON.stringify(this.userData))
      } else {
        this.userData = JSON.parse(localStorage.getItem('EventsData'))
      }
    }
  }

}
</script>

<style>

</style>