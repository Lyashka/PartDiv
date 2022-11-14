<template>
  <div class="content">
    <div class="table">
      <div>
        <div class="deal" style="height: 60px;">
          <button class="kind fnt hv" style="padding-left: 6px;">Вид взаимодействия</button>
          <button class="name fnt hv">Тема</button>
          <button class="short_name fnt hv">Срок</button>
          <button class="data fnt hv">Дата</button>
        </div>
      </div>
<!--      Table-->
    <InteractionsItem>

    </InteractionsItem>
    </div>
    <div class="agreement">
      <div class="agreement_cont">
        <div class=" agr_widt"><button class="add" @click="openFormAddInteractions">Создать Взаимодействие</button> </div>
        <div >
          <div class="agree_tab" style="height: 60px; border-top: 2px solid rgba(54,64,74,.15);">
            <button class="agree_itm fnt hv" style="padding-left: 6px;">Вид взаимодействия</button>
            <button class="agree_itm fnt hv">Тема</button>
            <button class="agree_itm fnt hv">Срок</button>
            <button class="fnt hv">Принять/Отклонить</button>
          </div>
<!--          AddTable-->
          <SelectInteractionsItem>

          </SelectInteractionsItem>

        </div>
      </div>
    </div>
<!--    formAddInteractions-->
    <formAddInteractions v-show="visibleFormAddInteractions">

    </formAddInteractions>
  </div>
</template>

<script>
import formAddInteractions from '@/components/InteractionsPage/formAddInteractions/formAddInteractions'
import InteractionsItem from '@/components/InteractionsPage/interactionsList/InteractionsItem'
import SelectInteractionsItem from '@/components/InteractionsPage/interactionsSelect/SelectInteractionsItem'
export default {
  components:{
    formAddInteractions,
    InteractionsItem,
    SelectInteractionsItem,
  },
  data(){
    return{
      visibleFormAddInteractions: false,
    }
  },

  methods:{
    openFormAddInteractions(){
      if(this.visibleFormAddInteractions === false){
        this.visibleFormAddInteractions = true
      }else {
        this.visibleFormAddInteractions = false
      }
    }
  }
}
</script>

<style>

</style>