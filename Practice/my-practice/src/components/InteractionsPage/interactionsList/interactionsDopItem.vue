<template>
  <div>
    <div class="dop_itm" style="padding-left: 12px;">-->
              <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Партнер</div>
              <div>rrr</div>
            </div>
            <div class="dop_itm">
              <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Подразделение</div>
              <div>rrr</div>
            </div>

            <div class="dop_itm">
              <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px; width: 150px;" v-for="item of itemInteractions.directionsOfDev">Направления разработок
                <div>{{item.directionName}}</div>
              </div>
            </div>

            <div class="dop_itm">
              <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Шифр</div>
              <div>{{itemInteractions.contractCode}}</div>
            </div>
            <div class="dop_itm">
              <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Руководитель</div>
              <div>йцукенгш</div>
            </div>
  </div>
</template>

<script>
export default {
  props: {
    itemInteractions: {
      itemInteractions: Array
    }
  },
  data() {
    return {

    }
  },

  mounted() {
    console.log(this.itemInteractions)
  }
}
</script>

<style>

</style>