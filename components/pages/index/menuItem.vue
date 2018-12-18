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

  @include bp-sp-w {
    margin: 0 auto;
  }

  a {
    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      content: '';
      width: 100%;
      height: 3px;
      background-color: $color-primary;
      border-radius: 1.5px;
      transform: scale(0, 1);
      transform-origin: center top;
      transition: transform 0.2s;
    }
    &:hover::after {
      transform: scale(1, 1);
    }
  }
}
</style>
