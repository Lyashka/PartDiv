<template>
  <div class="btn">
    <button class="item" @click="addDirectionOfDev">{{ this.item.directionName }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
    item: {
      item: Array
    }
  },
  methods: {
    addDirectionOfDev() {
      this.$emit('newDirectionOfDev', this.item)
      console.log(this.item)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.btn {
  display: flex;
  flex-direction: column;
}

.item {
  border: none;
  background-color: transparent;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  /*margin-top: 5px;*/
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);;
}

.item:hover {
  background-color: rgba(32, 100, 218, 0.3);;
}
</style>