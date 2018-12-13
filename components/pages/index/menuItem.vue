<template>
  <li>
    <router-link
      :to="url"
      class="link"
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
  position: relative;

  a {
    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: '';
      width: 0;
      height: 3px;
      background-color: $color-primary;
      transition: all 0.2s;
      border-radius: 1.5px;
      transform: translateX(-50%);
    }
    &:hover::after {
      width: 100%;
    }
  }
}
</style>
