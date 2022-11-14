<template>
<div class="deal" style="flex-direction: column;">
  <button class="bt_deal hv" @click="ShowDop" :class="{boob: VisBord}" style="height: 50px;">
    <div class="num">13</div>
    <div class="type" style="padding-left: 33px;">Обоюдное</div>
    <div class="data">11.01.11</div>
    <div class="data">11.11.11</div>
    <div class="status">Активен</div>
  </button>
  <div class="dop" v-show="VisibleDop">
    <div class="dop_itm" style="padding-left: 12px;">
      <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Партнеры:</div>
      <div>баребушек пипидастр хуепутоловик говномесина</div>
      <div>rrr</div>
    </div>
    <div class="dop_itm">
      <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Контакты партнеров:</div>
      <div>123</div>
      <div>123</div>
    </div>
    <div class="dop_itm">
      <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Подразделения:</div>
      <div>rrr</div>
      <div>rrr</div>
    </div>
    <div class="dop_itm">
      <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Контакты подразделений:</div>
      <div>123</div>
      <div>123</div>
    </div>
    <div class="dop_itm" >
      <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Статус:</div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Активен
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios3" value="option2">Завершен
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios4" value="option2">Продлен
        </label>
      </div>
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
