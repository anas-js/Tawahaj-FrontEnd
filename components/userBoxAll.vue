<template>
  <div :class="classitem">
    <div
      class="user-box"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <div class="image-user">
        <img :src="`/image/${dataUser.photoURL}`" loading="lazy" />
      </div>
      <div class="user-text">
        <nuxt-link :to="dataUser.username"
          ><h4>{{ dataUser.name }}</h4></nuxt-link
        >

        <nuxt-link
          v-if="dataUser.isMember"
          :to="dataUser.class.url"
          class="name-class member-class"
          >{{ dataUser.class.name }} - عضو</nuxt-link
        >
        <nuxt-link
          v-else-if="dataUser.isContributor"
          :to="dataUser.class.url"
          class="name-class contributor-class"
          >{{ dataUser.class.name }} - مساهم</nuxt-link
        >
        <nuxt-link
          v-else-if="dataUser.username === '@dev_none'"
          :to="dataUser.class.url"
          class="name-class admin-class"
          >{{ dataUser.class.name }} - مسؤول</nuxt-link
        >
        <nuxt-link v-else :to="dataUser.class.url" class="name-class">{{
          dataUser.class.name
        }}</nuxt-link>

        <p class="username">{{ dataUser.username }}</p>
        <div class="content">
          <nuxt-link
            v-for="(contentUser, index) in dataUser.content"
            :key="index"
            :to="contentUser.url"
            ><img src="/image/icon.svg" /><span>{{
              contentUser.name
            }}</span></nuxt-link
          >
        </div>
      </div>
      <orBtn
        text-btn="متابعة"
        :to="dataUser.username"
        icon="ri-user-add-line"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataUser: {
      type: Object,
      default: null,
    },
    lengthUser: {
      type: Number,
      default: null,
    },
    classitem: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      randomNumber: 0,
    };
  },

  mounted() {
    // console.log(this.dataUser)
    //  console.log(this.lengthUser)
    // this.randomNumber = Math.floor(Math.random() * this.dataUser.length);
    // while (true) {
    //   if (this.$store.state.lastRandom.includes(this.randomNumber) === true) {
    //     this.randomNumber = Math.floor(Math.random() * this.dataUser.length);
    //   } else {
    //     // this.$store.state.lastRandom.push(this.randomNumber);
    //     this.$store.commit('rundomNum', this.randomNumber);
    //     // if (this.$store.state.lastRandom.length === this.dataUser.length) {
    //     //  // this.$store.state.lastRandom = [];
    //     // }
    //     // masseagSelect = replyMsg[randomReply];
    //     break;
    //   }
    // }
    // // this.$store.state.lastRandom.push(this.randomNumber);
  },
  beforeDestroy() {
    // this.$store.commit('clearNumber');
  },
};
</script>
