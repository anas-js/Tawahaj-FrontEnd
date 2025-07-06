<template>
  <div>
    <topSection text="الأعضاء" />
    <section class="section-space">
      <div class="container">
        <h2 class="globalH2">الأعضاء</h2>
        <div v-if="member == ''" class="row">
          <userLoading
            v-for="(element, index) in 4"
            :key="index"
            classitem="col-lg-6"
          />
        </div>
        <div v-if="member !== ''" class="row">
          <userBoxAll
            v-for="(dataUser, index) in member"
            :key="index"
            :data-user="dataUser"
            :length-user="index"
            classitem="col-lg-6"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      member: '',
    };
  },
  mounted() {
    const myThis = this;
    axios.get('/api/member.json').then(function (status) {
      myThis.member = status.data;
    });
  },
};
</script>
