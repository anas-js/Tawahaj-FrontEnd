<template>
 <div :class="classitem">
    <div
      class="user-box loading-user-box"
    >
      <div class="image-user">
        <!-- <div class="img">

        </div> -->
      </div>
      <div class="user-text">
        <nuxt-link to=""
          ><h4>TextTextText</h4></nuxt-link
        >

        <p class="username">username</p>
        <div class="content">
          <nuxt-link
            v-for="(contentUser, index) in 4"
            :key="index"
            to=""
            ><span>
              نص
            </span></nuxt-link
          >
        </div>
      </div>
      <orBtn
        text-btn="متابعة"
        to=""
        icon="ri-user-add-line"
      />
    </div>
  </div>
</template>

<script>
export default {
    props: {
    classitem: {
      type: String,
      default: null,
    },
  },
};
</script>
