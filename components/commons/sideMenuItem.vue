<template>
  <li
    class="sidemenu-item"
  >
    <router-link :to="url">
      <div
        :class="{ current: current }"
        class="mark"
      />
      <slot />
    </router-link>
  </li>
</template>

<script>
import { TweenMax, Elastic, Expo } from 'gsap';

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
  watch: {
    $route() {
      this.$nextTick(() => {
        this.fadeOut();
        this.fadeIn();
      });
    },
  },
  mounted() {
    this.fadeIn();
  },
  methods: {
    fadeOut() {
      TweenMax.to('.mark', 0.8, {
        opacity: 0,
        scale: 0,
        ease: Expo.easeOut,
      });
    },
    fadeIn() {
      TweenMax.to('.nuxt-link-active .mark', 0.8, {
        opacity: 1,
        scale: 1,
        delay: 1,
        ease: Elastic.easeOut.config(1, 0.2),
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.sidemenu-item {
  font-size: 1.6rem;
  position: relative;

  @include bp-tab {
    color: $color-white;
  }

  .mark {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: $color-primary;
    position: absolute;
    top: 8px;
    left: -20px;
    transform: scale(0);
    // opacity: 0;

    @include bp-tab {
      background-color: $color-white;
    }
  }
}
</style>
