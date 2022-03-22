<template>
  <nuxt-link :to="to" class="orange-btn">
    <div class="contentText">
      <i v-if="icon" :class="'icon-5px ' + icon"></i>
      <span>{{ textBtn }}</span>
    </div>
    <span class="shadow"></span>
  </nuxt-link>
</template>

<script>
export default {
  props: ['textBtn', 'to', 'icon'],
};
</script>
