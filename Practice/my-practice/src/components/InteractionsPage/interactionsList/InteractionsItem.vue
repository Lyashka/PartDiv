<template>
  <div class="deal" style="flex-direction: column;">
    <button class="bt_deal hv" @click="ShowDop" :class="{boob: VisBord}" style="height: 50px;">
      <div class="kind" style="padding-left: 6px;">Кристаллическая</div>
      <div class="name" style="padding-left: 13px;">Бженшистикевич</div>
      <div class="short_name" style="padding-left: 13px;">12 месяцев</div>
      <div class="data">11.11.11</div>
    </button>
    <div class="dop"  v-show="VisibleDop">
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