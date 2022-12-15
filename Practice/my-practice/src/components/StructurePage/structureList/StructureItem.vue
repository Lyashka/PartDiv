<template>
  <div class="deal" style="flex-direction: column;">
    <div class="bt_deal hv" @click="ShowDop" :class="{boob: VisBord}" style="height: 50px;">
      <div class="kind" style="padding-left: 6px;">{{ structureItem.structureType.structureTypeName }}</div>
      <div class="name" style="padding-left: 13px;">{{ structureItem.structureFullName }}</div>
      <div class="short_name" style="padding-left: 13px;">{{ structureItem.structureShortName }}</div>
      <div class="data">{{ structureItem.formationDate }}</div>
    </div>
    <structureDopItem class="dop" v-show="VisibleDop" :structureItem="structureItem">

    </structureDopItem>
  </div>
</template>

<script>
import structureDopItem from "@/components/StructurePage/structureList/structureDopItem";
export default {
  components: {
    structureDopItem
  },
  props: {
    structureItem: {
      structureItem: Array
    }
  },
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
    // console.log(this.structureItem)
  }
}
</script>

<style>

</style>