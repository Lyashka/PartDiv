<template>
  <div>
    <div class="dop_itm" style="padding-left: 12px;">-->
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
      <div>{{structureItem.directorName}}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    structureItem: {
      structureItem: Array
    }
  }
}
</script>

<style>

</style>