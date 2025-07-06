<template>
  <section class="section-orange">
    <h1>{{ text }}</h1>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
      x="0px"
      viewBox="0 0 1920 89.35"
    >
      <path
        id="Path_52"
        data-name="Path 52"
        d="M0,0S505.553,72.2,985.553,72.2,1920,0,1920,0V89.35H0Z"
        fill="#fff"
      />
    </svg>


    <div class="background-elemnt">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
    },
  },
};
</script>
