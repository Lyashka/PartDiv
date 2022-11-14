<template>
  <div class="agree_tab" @click="ShowDop" style="flex-direction: column;">
    <div class="agree_tab">
      <button class="bt_deal hv">
        <div class="agree_itm" style="padding-left: 6px;">rertgrtgg</div>
        <div class="agree_itm" style="padding-left: 18px;">sdfsdsfdsfd</div>
        <div class="agree_itm" style="padding-left:20px;">12 мес</div>
        <button class="agree_bt hv">+</button>
        <button class="agree_bt hv">-</button>
      </button>
    </div>
    <div class="dop"  v-show="VisibleDop" style="border: none!important;">
      <div class="dop_itm" style="padding-left: 12px;">
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Партнер</div>
        <div>rrr</div>
      </div>
      <div class="dop_itm">
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Подразделение</div>
        <div>rrr</div>
      </div>
      <div class="dop_itm">
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px; width: 150px;">Основные направления разработки</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
      <div class="dop_itm">
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Шифр</div>
        <div>123</div>
      </div>
      <div class="dop_itm">
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Руководитель</div>
        <div>йцукенгш</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style>

</style>