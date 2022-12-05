<template>
  <!-- Соглашения -->
  <div class="content">
    <div class="table">
      <div class=" agr_widt"><button class="add" @click="openFormAddAgreement">Создать Соглашение</button> </div>
      <div>
        <div class="deal">
          <button class="num fnt hv" style="padding-left: 12px;padding-right: 6px;">№</button>
          <button class="type fnt hv" >Тип соглашения</button>
          <button class="data fnt hv">Дата начала</button>
          <button class="data fnt hv">Дата окончания</button>
          <button class="status fnt hv">Статус</button>
        </div>
      </div>
<!--   AgreementList   -->
      <AgreeAdditionalItem v-for="item of userData" :item="item" :key="item.id" @newStatusItem="updateStatusItem">

      </AgreeAdditionalItem>

    </div>
    <div class="agreement">
      <div class="agreement_cont">
        <div class=" agr_widt"><button class="add" @click="openFormAddAgreement">Создать соглашение</button> </div>
        <div>
          <div class="agree_tab" style="height: 60px;border-top: 2px solid rgba(54,64,74,.15); ">
            <button class="agree_itm fnt hv" style="padding-left: 6px;">Сторона соглашения</button>
            <button class="agree_itm fnt hv">Тип соглашения</button>
            <button class="agree_itm fnt hv">Дата окончания</button>
            <button class="fnt hv">Принять/Отклонить</button>
          </div>
<!--     AcceptAgreeItem     -->
          <OfferAgreeItem>

          </OfferAgreeItem>

        </div>
      </div>
    </div>
<!--  AddAgree  -->
    <AddAgree v-show="visibleFormAddAgree">

    </AddAgree>
  </div>
</template>

<script>
import OfferAgreeItem from '@/components/AgreePage/agreementSelect/OfferAgreeItem'
import AgreeAdditionalItem from '@/components/AgreePage/agreementList/AgreeAdditionalItem.vue'
import AddAgree from '@/components/AgreePage/fromAddAgreement/AddAgree'
import axios from "axios";
export default {
  components:{
    OfferAgreeItem,
    AgreeAdditionalItem,
    AddAgree,
  },
  data(){
    return{
      visibleFormAddAgree: false,
      MargCont: true,
      userData: [],
    }
  },

  methods:{
    updateStatusItem(itemUpdateStatus) {
      // console.log(this.$store.state.userData.accountID)
      // axios.get('http://93.100.110.70:8080/partners/agreements',{
      //   params: {
      //     partner_id: 2
      //   }
      // }).then(res => {
      //   console.log(res)
      // })

      console.log(itemUpdateStatus)
      this.userData.forEach(e => {
        if (e.agreementNumber === itemUpdateStatus.agreementNumber) {
          e.agreementStatus.statusID = itemUpdateStatus.agreementStatus.statusID
          e.agreementStatus.statusName = itemUpdateStatus.agreementStatus.statusName
        }
      })
      console.log(this.userData)
    // как оправить данны, массив иль обект
      axios.post('http://93.100.110.70:8080/partners/agreements/updateAgreement',  this.userData)
    },

    openFormAddAgreement(){
      this.visibleFormAddAgree = this.visibleFormAddAgree === false;
    }
  },

  mounted() {
    if (localStorage.getItem('tagProfile') === 'Division') {
      if (JSON.parse(localStorage.getItem('AgreementData')) === null) {
        this.userData = this.$store.state.userData.universityDivision.agreements
        localStorage.setItem('AgreementData', JSON.stringify(this.userData))
      } else {
        this.userData = JSON.parse(localStorage.getItem('AgreementData'))
      }
    } else {
      if (JSON.parse(localStorage.getItem('AgreementData')) === null) {
        this.userData = this.$store.state.userData.partner.agreements
        console.log('sss')
        console.log(this.$store.state.userData)
        localStorage.setItem('AgreementData', JSON.stringify(this.userData))
      } else {
        this.userData = JSON.parse(localStorage.getItem('AgreementData'))
      }
    }
    console.log(this.userData)
  }

}
</script>

<style>
*, :after, :before {
  box-sizing: border-box;
}
body {
  background-color:#f5f5f5;
  line-height: 1.5;
  overflow-y:scroll;
  overflow-x: hidden;
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}

#body-clean{
  overflow-x: hidden;
  position: inherit!important;
}

div{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}

ul{
  margin: 0;
}
header,
.head {
  width: 100%;
  height: 60px;
  background-color: #023370;
  font-size: 25px;
  /*color:#fff;*/
  position:fixed;
}

.head-image {
  display: inline-block;
  height: auto;
  max-width: 100%;
  width: 50px;
  margin-top: 4px;
  margin-left: 5px;
}

.container {
  display: flex;
  width: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  height: 60px;
  justify-content: space-between;
}


.menu{
  width: 60px;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  background-color:inherit;
  border:none;
}

.side{
  font-size: 25px;
  color:#fff;
  line-height: 1.5;
}

.menu:hover{
  background-color:#e8910c;
}

/*.sidedrawer{*/
/*  width: 240px;*/
/*  height:100%;*/
/*  background-color: #37383a;*/
/*  color:#fff;*/
/*  position: fixed!important;*/
/*  top: 60px;*/
/*  display: inline;*/
/*  bottom: 0;*/
/*}*/

.prof{
  width: 60px;
  height: 60px;
  background-color:inherit;
  border:none;
}

.prof:hover{
  background-color:#e8910c;
}

.bt{
  width: 100%;
  height: 42px;
  color:#fff;
  background-color:inherit;
  border:none;
  text-align: left;
  font-size: 18px;
  padding-left: 10px;
}

.bt:hover{
  background-color: rgb(128, 128, 128, 0.12);
}

/* DWN */

.dwn-menu {
  visibility: hidden;
  display: flex;
  flex-direction: column;
  position:absolute;
  min-width: 307px;
  min-height: auto;
  margin-top: 2px;
  margin-right: 2px;
  transform: translate3d(-252px, 0px, 0px);
  border-radius: 5px;
  background-color:rgb(255, 255, 255);
  color:black;
  border: 1px rgba(0, 0, 0, 0.103) solid;
  z-index: 100;
}

.dwn-itm{
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding: 5px 20px 5px 20px;
  font-size: 18px;
  background-color:rgb(255, 255, 255);
}

.ml{
  font-size: 13px;
  line-height: 0.5;
  border-bottom: 1px rgba(0, 0, 0, 0.103) solid;
  padding-bottom: 10px;
  padding-top: 1px;
}

.prf{
  border-bottom: 1px rgba(0, 0, 0, 0.103) solid;
  border-top: 0px rgba(0, 0, 0, 0.103) solid;
  border-left: 0px;
  border-right: 0px;
  font-weight: 400;
}

.prf:hover{
  background-color: rgb(128, 128, 128, 0.12);
}

/* Соглашения */

.content{
  display: flex;
  flex-direction: row;
  width: 87.5%;
  min-height: 92%;
  margin-left: 240px;
  /*max-height: auto;*/
  margin-top: 60px;
  margin-right: 20px;
  position:absolute;
  z-index: 0;
  transition: margin-left .3s;
}



@media (max-width: 1100px){.content {margin-left: 0!important;width: 100%!important;}}
@media (max-width: 1700px){.content {width: 84%;}}
@media (max-width: 1500px){.content {width: 83%;}}
@media (max-width: 1200px){.content {width: 80%;}}

.table{
  display: flex;
  flex-direction: column;
  z-index: 0;
  margin-left:auto;
  margin-right: auto;
  margin-top: 20px;
  width: 70%;
  min-height: 80%;
  border: 1.5px solid rgba(54,64,74,.08);
  background-color:#fff;
  border-radius:5px;
}

.agreement{
  display: none;
  margin-left: 20px;
  margin-right: 20px;
  width: 50%;
  border: 1.5px solid rgba(54,64,74,.08);
  background-color:#fff;
  border-radius:5px;
  min-height: 80%;
  margin-top: 20px;
}

.add{
  font-size: 20px;
  background-color: #023370;
  border-color: #023370;
  color: #fff;
  border: 2px rgba(0, 0, 0, 0.11) solid;
  border-radius: 5px;
  height: 40px;
  padding: 7px 40px 7px 40px;
  transition: 0.3s;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  transition: 0.3s;
}

.add:hover{
  background-color: #03244d;
}

.agreement_cont{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
}

.agree_tab{
  display: flex;
  border-bottom: 2px solid rgba(54,64,74,.15);
  width: 100%;
  flex-wrap: nowrap;
}

.agr_widt{
  width: auto;
  margin-left: 20px;
  margin-right: 10px;
}

.add_agree{
  margin-left: 30%;
  margin-right: auto;
  margin-top: 220px;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.30)!important;;
  border:1.5px rgba(0, 0, 0, 0.11) solid;
  border-radius:20px;
  width: 100%;
  max-width: 540px;
  height: auto;
  position: fixed;
  background-color:#ffffff;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  padding-left: 20px;
  z-index: 11;
}

@keyframes ani {
  0% {transform: translateY(-150%);}
  100% {transform: translateY(0);}
}
.add_agree {
  transform: translateY(-150%);
  animation: ani 0.5s forwards;
}

@media (max-width: 1500px){.add_agree {margin-left: 20%;}}
@media (max-width: 950px){.add_agree {margin-left: 13%;}}

.agree_itm{
  display: flex;
  font-size: 13px;
  width: 100%;
  text-align: left;
  padding-left: 0;
  height: 50px;
  align-items:center;
}

.agree_bt{
  margin: 5px;
  width: 48px;
  border-radius:100px;
  border:0;
}

.deal{
  display: flex;
  border-bottom: 2px solid rgba(54,64,74,.15);
  width: auto;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  position: relative;
}

.boob{
  border-left: 2px solid rgba(54,64,74,.15)!important;
  border-right: 2px solid rgba(54,64,74,.15)!important;
}

.num{
  width: 5%;
  text-align: center;
  font-size: 20px;
}


.type{
  font-size: 20px;
  padding-left: 30px;
  padding-right: 6px;
  text-align: left;
  width: 52%;
}

.status{
  font-size: 20px;
  width: 130px;
  text-align: left;
  padding-left: 6px;
  padding-right: 6px;
}

.status_bt{
  position:relative;
  width: auto;
  height: 100px;
}

.data{
  font-size: 20px;
  width: 16%;
  text-align: left;
  padding-right: 6px;
  padding-left: 6px;

}

.fnt{
  font-weight: 600;
  background-color:inherit;
  border:none;
  height: 60px;
  padding-right: 6px;
}

.bt_deal{
  display: flex;
  background-color:inherit;
  border:none;
  width: 100%;
  align-items: center;
}


.dop{
  border: 2px solid rgba(54,64,74,.15);
  border-bottom:0;
  display: flex;
  background-color: inherit;
  width: 100%;
  animation: ani1 0.5s ;
}

.dop_itm{
  width: 100%;
}

@keyframes ani1 {

}

.hv:hover{
  background-color:rgb(245, 245, 245);
}

.form-control {
  border: 1px solid #ced4da;
  width: 96%;
  font-weight: 400;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  margin: 10px;
  margin-bottom: 0;
  outline: none;
}

.form-control:focus{
  box-shadow:0 0 0 2.5px #0368e448;
  border:1px solid #004497;
  transition: all 0.2s linear;
  animation-direction: normal, reverse;
}

.add_form_control{
  display: flex;
  flex-direction: row;
}

.form_bt{
  margin-top: 10px;
  margin-right: 10px;
  background-color:#fff;
  border: 1px solid #ced4da;
  margin-left: 0;
  width: 45px;
  border-radius: 10px;
}

/* структуры */

.kind{
  font-size: 20px;
  padding-right: 6px;
  padding-left: 6px;
  text-align: left;
  width: 45%;
}

.name{
  font-size: 20px;
  width: 35%;
  text-align: left;
  padding-right: 6px;
  padding-left: 6px;
}

.short_name{
  font-size: 20px;
  width: 24%;
  text-align: left;
  padding-right: 6px;
  padding-left: 6px;
}
</style>