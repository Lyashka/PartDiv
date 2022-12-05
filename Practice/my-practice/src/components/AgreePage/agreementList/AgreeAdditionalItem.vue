<template>
  <div class="deal" style="flex-direction: column;">
    <div class="bt_deal hv" @click="ShowDop" :class="{boob: VisBord}" style="height: 50px;">
      <div class="num">{{ item.agreementNumber }}</div>
      <div class="type" style="padding-left: 33px;">{{ item.agreementType.typeName }}</div>
      <div class="data">{{ item.agreementDateFrom }}</div>
      <div class="data">{{ item.agreementDateTo }}</div>
      <div class="status">{{ status }}</div>
    </div>
    <AgreeAdditionalItemDop class="dop" v-show="VisibleDop" :item="item" @newStatusItem="$emit('newStatusItem', item)">

    </AgreeAdditionalItemDop>
  </div>
</template>

<script>
import axios from "axios";
import AgreeAdditionalItemDop from "@/components/AgreePage/agreementList/AgreeAdditionalItemDop";
export default {
  components:{
    AgreeAdditionalItemDop
  },

  props: {
    item: {
      item: Array
    }
  },
  data() {
    return {
      status: '',
      VisibleDop: false,
      VisBord: false
    }
  },

  methods: {

    ShowDop() {
      if (this.VisibleDop === false) {
        this.VisibleDop = true
        this.VisBord = true
      } else {
        this.VisibleDop = false
        this.VisBord = false
      }
    }
  },

  mounted() {

    // this.status = this.item.agreementStatus.statusName
    // if(this.item.agreementStatus.statusID === 1){
    //   this.status = this.item.agreementStatus.statusName
    //   console.log('yah')
    // }else if(this.item.agreementStatus.statusID === 2){
    //   this.status = this.item.agreementStatus.statusName
    // }else if(this.item.agreementStatus.statusID === 3){
    //   this.status = this.item.agreementStatus.statusName
    // }

    axios.get('http://93.100.110.70:8080/references/agreementStatuses').then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>
