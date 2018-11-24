<template>
  <li>
    <router-link
      :to="url"
    >
      <slot />
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    url: {
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
