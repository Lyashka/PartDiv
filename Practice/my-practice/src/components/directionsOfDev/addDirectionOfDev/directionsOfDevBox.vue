<template>
  <div class="boxSelectOfDef">
<!--    <div class="topLable">Выберите направление разработки</div>-->
      <directionsOfDevItem v-for="item of directionOfDev" :item="item" :key="item.id" @newDirectionOfDev="$emit('newDirectionOfDev', item)"></directionsOfDevItem>
  </div>
</template>

<script>
import directionsOfDevItem from "@/components/directionsOfDev/addDirectionOfDev/directionsOfDevItem.vue";
  export default {
    components: {
      directionsOfDevItem
    },
    props:{
      directionOfDev:{
        directionOfDev: Array
      }
    },
  }
</script>

<style>
.boxSelectOfDef{
  /*display: flex;*/
  position: absolute;
  margin-top: 100px;
  margin-left: 40px;
  background-color: rgb(250, 250, 250);
  min-height: 100px;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.10)!important;
  border: 1.5px rgba(0, 0, 0, 0.1) solid;
  z-index: 1;
}
</style>