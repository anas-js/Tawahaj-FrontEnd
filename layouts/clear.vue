<template>
  <div>
    <Nuxt />
  </div>

</template>
<script>
import AOS from "aos/dist/aos.js"
export default {
  mounted() {
    AOS.init();
        const myThis = this;
     this.$fire.auth.onAuthStateChanged(function()  {
    myThis.$store.commit("isLogin", !! myThis.$fire.auth.currentUser)
  })
  }
}
</script>
