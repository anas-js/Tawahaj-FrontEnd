<template>
  <div v-if="$store.state.loading" class="loading">
    <div>
      <img class="main" src="/image/icon.svg" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      load : ""
    }
  },
  // mounted() {
  //   this.load = "load"
  // }
}
</script>
