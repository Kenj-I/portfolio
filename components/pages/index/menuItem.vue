<template>
  <li>
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    ref: {
      default: '',
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  font-size: 2.4rem;
  display: inline-block;
  margin: 0 6px;
  cursor: pointer;
}
</style>
