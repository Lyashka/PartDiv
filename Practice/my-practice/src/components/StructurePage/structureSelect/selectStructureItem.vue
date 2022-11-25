<template>
  <div class="agree_tab" style="flex-direction: column;">
    <div class="agree_tab">
      <button class="bt_deal hv" @click="ShowDop">
        <div class="agree_itm" style="padding-left: 6px;">Вид структуры</div>
        <div class="agree_itm" style="padding-left: 18px;">Бженшистикевич</div>
        <div class="agree_itm" style="padding-left: 18px;">GJB</div>
      </button>
      <button class="agree_bt hv">+</button>
      <button class="agree_bt hv">-</button>
    </div>
    <div class="dop" v-show="VisibleDop" style="border: none!important;">
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
        <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Руководитель</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      VisibleDop: false,
      VisBord: false
    }
  },

  methods: {
    ShowDop() {
      if (this.VisibleDop == false) {
        this.VisibleDop = true
        this.VisBord = true
      } else {
        this.VisibleDop = false
        this.VisBord = false
      }
    }
  },

  mounted() {
  }
}
</script>

<style>

</style>