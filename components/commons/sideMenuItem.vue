<template>
  <li
    :class="{ current: current }"
    class="sidemenu-item"
  >
    <router-link :to="url">
      <slot />
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    current: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped>
.sidemenu-item {
  font-size: 1.6rem;

  &.current {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $color-primary;
    }
  }
}
</style>
