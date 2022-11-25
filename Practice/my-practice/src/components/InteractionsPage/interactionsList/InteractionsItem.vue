<template>
  <div class="deal" style="flex-direction: column;">
    <div class="bt_deal hv" @click="ShowDop" :class="{boob: VisBord}" style="height: 50px;">
      <div class="kind" style="padding-left: 6px;">{{ itemInteractions.interactionType.interactionTypeName }}</div>
      <div class="name" style="padding-left: 13px;">{{ itemInteractions.theme }}</div>
      <div class="short_name" style="padding-left: 13px;">{{itemInteractions.contractTerm}}</div>
      <div class="data">{{itemInteractions.signingDate}}</div>
    </div>
    <interactionsDopItem class="dop"  v-show="VisibleDop" :itemInteractions="itemInteractions">
<!--      <div class="dop_itm" style="padding-left: 12px;">-->
<!--        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Партнер</div>-->
<!--        <div>rrr</div>-->
<!--      </div>-->
<!--      <div class="dop_itm">-->
<!--        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Подразделение</div>-->
<!--        <div>rrr</div>-->
<!--      </div>-->
<!--      <div class="dop_itm">-->
<!--        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px; width: 150px;">Основные направления разработки</div>-->
<!--        <div>123</div>-->
<!--        <div>123</div>-->
<!--        <div>123</div>-->
<!--        <div>123</div>-->
<!--      </div>-->
<!--      <div class="dop_itm">-->
<!--        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Шифр</div>-->
<!--        <div>123</div>-->
<!--      </div>-->
<!--      <div class="dop_itm">-->
<!--        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Руководитель</div>-->
<!--        <div>йцукенгш</div>-->
<!--      </div>-->
    </interactionsDopItem>
  </div>
</template>

<script>
import interactionsDopItem from "@/components/InteractionsPage/interactionsList/interactionsDopItem";
export default {
  components: {
    interactionsDopItem
  },
  props: {
    itemInteractions: {
      itemInteractions: Array
    }
  },
  data(){
    return{
      VisibleDop:false,
      VisBord:false
    }
  },

  methods:{
    ShowDop(){
      if(this.VisibleDop == false){
        this.VisibleDop = true
        this.VisBord = true
      }else {
        this.VisibleDop = false
        this.VisBord = false
      }
    }
  },

  mounted() {
    console.log(this.itemInteractions)
  }
}
</script>

<style>

</style>