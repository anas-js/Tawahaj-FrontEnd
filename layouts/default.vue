<template>
  <div>
    <loadingApp />
    <headerApp />
    <Nuxt />
    <footerApp />
  </div>
</template>
<script>
import AOS from "aos/dist/aos.js"
export default {
  mounted() {
    AOS.init();
  }
}
</script>
