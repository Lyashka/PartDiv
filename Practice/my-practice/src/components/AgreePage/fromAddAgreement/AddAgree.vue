<template>
  <div class="add_agree">
    <input type="text" placeholder="Тип соглашения" class="form-control" required v-model="typeAgreement"/>
    <input type="data" placeholder="Дата" class="form-control" required v-model="date"/>
    <div style="padding-top:5px;padding-left: 10px; font-weight: 500;">Контакты партнеров:</div>
    <textarea name="" id="d" cols="30" rows="2" class="form-control" style="resize: none;" v-model="contactsPartners"></textarea>
    <div style="padding-top:5px;padding-left: 10px; font-weight: 500;">Контакты подразделений:</div>
    <textarea name="" id="a" cols="30" rows="2" class="form-control" style="resize: none;" v-model="contactsDivision"></textarea>
    <div class="add_form_control"><input type="text" placeholder="Партнеры" class="form-control" required>
      <button class="form_bt hv">+</button>
    </div>
    <div style="padding-top: 6px; padding-left:10px">Перечень партнеров:</div>
    <div class="add_form_control"><input type="text" placeholder="Подразделения" class="form-control" required>
      <button class="form_bt hv">+</button>
    </div>
    <div style="padding-top: 6px; padding-left:10px">Перечень подразделений:</div>
    <button class="add" style="width: auto;" @click="addAgreement">Сохранить</button>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      newAgreement: {},
      typeAgreement: '',
      date: '',
      contactsPartners: '',
      contactsDivision: '',
      partners: [],

    }
  },

  methods: {
    addAgreement() {
      this.partners.push(this.contactsPartners)

      this.newAgreement = {
        agreementDateFrom: '2022-07-24T21:00:00.000+00:00',
        agreementDateTo: '2022-07-24T21:00:00.000+00:00',
        // agreementNumber: 3,
        agreementStatus: {
          statusID: 3,
          statusName: 'Заключено',
        },
        agreementType: {
          typeID: 2,
          typeName: 'Реклама'
        }
      }
      // console.log(this.newAgreement)
      axios.post('http://93.100.110.70:8080/partners/addAgreement', this.newAgreement)
    }
  }
}
</script>

<style>

</style>
