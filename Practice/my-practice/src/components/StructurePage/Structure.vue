<template>

  <div class="content" :class="{marg: margSide}">
    <div class="table">
      <div>
        <div class="deal" style="height: 60px;">
          <button class="kind fnt hv" style="padding-left: 6px;">Вид структуры</button>
          <button class="name fnt hv">Полное название</button>
          <button class="short_name fnt hv">Короткое название</button>
          <button class="data fnt hv">Дата</button>
        </div>
      </div>
<!--   Table   -->
    <StructureItem>

    </StructureItem>

    </div>
    <div class="agreement">
      <div class="agreement_cont">
        <div class=" agr_widt"><button class="add" @click="openFormAddStructure">Создать Структуру</button> </div>
        <div >
          <div class="agree_tab" style="height: 60px; border-top: 2px solid rgba(54,64,74,.15);">
            <button class="agree_itm fnt hv" style="padding-left: 6px;">Вид структуры</button>
            <button class="agree_itm fnt hv">Полное название</button>
            <button class="agree_itm fnt hv">Короткое название</button>
            <button class="fnt hv">Принять/Отклонить</button>
          </div>
<!--       AddTable   -->
          <selectStructureItem>

          </selectStructureItem>
        </div>
      </div>

    </div>
<!--    formAddStructure-->
    <formAddStructure v-show="visibleFormAddStructure">

    </formAddStructure>
  </div>
</template>

<script>
import formAddStructure from '@/components/StructurePage/formAddStructure/formAddStructure'
import selectStructureItem from '@/components/StructurePage/structureSelect/selectStructureItem'
import StructureItem from '@/components/StructurePage/structureList/StructureItem'
export default {
  components:{
    formAddStructure,
    selectStructureItem,
    StructureItem,
  },
  data(){
    return{
      visibleFormAddStructure: false
    }
  },

  methods:{
    openFormAddStructure(){
      if(this.visibleFormAddStructure == false){
        this.visibleFormAddStructure = true
      }else {
        this.visibleFormAddStructure = false
      }
    }
  }
}
</script>

<style>

</style>
