<template>
  <div>
    <div class="dop_itm" style="padding-left: 12px;">
      <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Партнеры:</div>
      <div v-for="el of item">
          {{el}}
      </div>
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
    <div class="dop_itm">
      <div style="padding-bottom: 6px; font-weight: 600; font-size: 15px;">Статус:</div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios2" value="3" v-model="radioCheked">Активен
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios3" value="4" v-model="radioCheked">Завершен
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios4" value="2" v-model="radioCheked">Продлен

        </label>
      </div>
<!--      <select v-model="selected">-->
<!--        <option disabled value="">Не определено</option>-->
<!--        <option>a</option>-->

<!--      </select>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      item: Array
    }
  },
  data(){
    return{
      radioCheked: '',
    }
  },
  methods: {

  },
  watch: {
    radioCheked(value){
      // console.log(value)
      if(value === '2'){
        this.item.agreementStatus.statusID = value
        this.item.agreementStatus.statusName = 'В процессе заключения'
      }else if(value === '3'){
        this.item.agreementStatus.statusID = value
        this.item.agreementStatus.statusName = 'Заключено'
      }else if(value === '4'){
        this.item.agreementStatus.statusID = value
        this.item.agreementStatus.statusName = 'Расторгнуто'
      }else{

      }
      // this.item.agreementStatus.statusID = value
      // console.log('radioCheked')
      // console.log(this.item)
      this.$emit('newStatusItem',this.item)
    }
  },

  mounted() {
   this.radioCheked = this.item.agreementStatus.statusID
  }
}

</script>

<style>

</style>