<template>
  <img
    :src="src"
    :alt="alt"
  >
</template>

<script>
export default {
  props: {
    src: {
      default: '',
      type: String,
    },
    alt: {
      default: '',
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
