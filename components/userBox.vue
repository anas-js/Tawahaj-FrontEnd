<template>
  <div class="col-lg-6">
    <div
      class="user-box"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <div class="image-user">
        <img
          :src="`/image/${dataUser[randomNumber].photoURL}`"
          loading="lazy"
        />
      </div>
      <div class="user-text">
        <nuxt-link :to="dataUser[randomNumber].username"
          ><h4>{{ dataUser[randomNumber].name }}</h4></nuxt-link
        >

        <nuxt-link
          v-if="dataUser[randomNumber].isMember"
          :to="dataUser[randomNumber].class.url"
          class="name-class member-class"
          >{{ dataUser[randomNumber].class.name }} - عضو</nuxt-link
        >
        <nuxt-link
          v-else-if="dataUser[randomNumber].isContributor"
          :to="dataUser[randomNumber].class.url"
          class="name-class contributor-class"
          >{{ dataUser[randomNumber].class.name }} - مساهم</nuxt-link
        >
        <nuxt-link
          v-else
          :to="dataUser[randomNumber].class.url"
          class="name-class"
          >{{ dataUser[randomNumber].class.name }}</nuxt-link
        >

        <p class="username">{{ dataUser[randomNumber].username }}</p>
        <div class="content">
          <nuxt-link
            v-for="(contentUser, index) in dataUser[randomNumber].content"
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
        :to="dataUser[randomNumber].username"
        icon="ri-user-add-line"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataUser: {
      type: Array,
      default: null,
    },
    lengthUser: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      randomNumber: 0,
    };
  },

  mounted() {
    //  console.log(this.lengthUser)
    this.randomNumber = Math.floor(Math.random() * this.dataUser.length);
    while (true) {
      if (this.$store.state.lastRandom.includes(this.randomNumber) === true) {
        this.randomNumber = Math.floor(Math.random() * this.dataUser.length);
      } else {
        // this.$store.state.lastRandom.push(this.randomNumber);
        this.$store.commit('rundomNum', this.randomNumber);
        // if (this.$store.state.lastRandom.length === this.dataUser.length) {
        //  // this.$store.state.lastRandom = [];
        // }
        // masseagSelect = replyMsg[randomReply];
        break;
      }
    }
    // this.$store.state.lastRandom.push(this.randomNumber);
  },
  beforeDestroy() {
    this.$store.commit('clearNumber');
  },
};
</script>
