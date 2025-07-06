<template>
  <div v-if="dataUser[lengthUser].data().show && !! dataUser[lengthUser].data().content" :class="classitem">
    <div
      class="user-box"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <div class="image-user">
                      <img v-if="dataUser[lengthUser].data().photo" :src="dataUser[lengthUser].data().photoUrl" loading="lazy"  />
                 <img v-else src="/image/background-user.svg" loading="lazy"  />
      </div>
      <div class="user-text">
        <nuxt-link :to="dataUser[lengthUser].data().username"
          ><h4>{{ dataUser[lengthUser].data().name }}</h4></nuxt-link
        >

        <nuxt-link
          v-if="dataUser[lengthUser].data().isMember"
          to="/members"
          class="name-class member-class"
          >{{ dataUser[lengthUser].class.name }} - عضو</nuxt-link
        >
        <nuxt-link
          v-else-if="dataUser[lengthUser].data().isContributor"
          to="/members"
          class="name-class contributor-class"
          >{{ dataUser[lengthUser].data().class}} - مساهم</nuxt-link
        >
        <nuxt-link
          v-else-if="dataUser[lengthUser].data().username === '@dev_none'"
          to="/members"
          class="name-class admin-class"
          >{{ dataUser[lengthUser].data().class }} - مسؤول</nuxt-link
        >
        <nuxt-link
          v-else
          to="/creators"
          class="name-class"
          >{{ dataUser[lengthUser].data().class }}</nuxt-link
        >


        <p class="username">@{{ dataUser[lengthUser].data().username }}</p>
        <div class="content">
          <nuxt-link
            v-for="(contentUser, index) in dataUser[lengthUser].data().content"
            :key="index"
            to="/creators"
            ><img src="/image/icon.svg" /><span>{{
              contentUser
            }}</span></nuxt-link
          >
        </div>
      </div>
      <orBtn
        text-btn="متابعة"
        :to="dataUser[lengthUser].data().username"
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
