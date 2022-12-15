<template>
  <div class="plus">
    <div>
      {{dev.directionName}}
    </div>
    <button class="agree_bt hv" style="width: 30px; height: 30px; margin: 0 0 0 5px" @click="removeDirectionOfDev">X</button>
  </div>
</template>

<script>
export default {
  props: {
    dev:{
      dev: Object
    }
  },

  methods: {
    removeDirectionOfDev() {
      this.$emit('removeDirectionOfDev', this.dev)
    }
  }
}
</script>

<style scoped>
.plus{
  display: flex;
  flex-direction: row;

}
</style>