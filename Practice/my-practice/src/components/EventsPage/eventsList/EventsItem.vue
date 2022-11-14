<template>
  <div class="deal" style="flex-direction: column;">
    <button class="bt_deal hv" @click="ShowDop" :class="{boob: VisBord}" style="height: 50px;">
      <div class="kind">аыввыавыа</div>
      <div class="name" style="padding-left: 13px;">ываыва</div>
      <div class="short_name" style="padding-left: 13px;">уууууу</div>
      <div class="data">11.11.11</div>
    </button>
    <div class="dop" v-show="VisibleDop">
      <div class="dop_itm" style="padding-left: 12px;">
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Партнеры</div>
        <div>rrr</div>
        <div>rrr</div>
      </div>
      <div class="dop_itm">
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Подразделения</div>
        <div>rrr</div>
        <div>rrr</div>
      </div>
      <div class="dop_itm">
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Результат</div>
        <div class="add_form_control"><input type="text" placeholder="Внести Результат" class="form-control" style="margin-left:0!important; margin-bottom:10px"><button class="form_bt hv" style="margin-bottom:10px">+</button></div>
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