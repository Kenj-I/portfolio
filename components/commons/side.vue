<template>
  <div class="side">
    <sideTitle class="title"/>
    <sideMenu />
    <foot class="footer"/>
  </div>
</template>

<script>
import sideTitle from '@/components/commons/sideTitle';
import sideMenu from '@/components/commons/sideMenu';
import foot from '@/components/commons/footer';

import { TweenMax, Back } from 'gsap';

export default {
  components: {
    sideTitle,
    sideMenu,
    foot,
  },
  watch: {
    $route(newRoute) {
      if (newRoute.name === 'index') {
        this.fadeOut();
      }
    },
  },
  mounted() {
    this.fadeIn();
  },
  methods: {
    fadeIn() {
      TweenMax.to('.side', 0.8, {
        left: 0,
        delay: 0.2,
        opacity: 1,
        ease: Back.easeOut.config(1.5),
        startAt: {
          opacity: 0,
        },
      });
    },
    fadeOut() {
      TweenMax.to('.side', 0.8, {
        opacity: 0,
        x: '-250px',
        ease: Back.easeIn.config(1.5),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.side {
  background-color: $color-white;
  width: 250px;
  height: 100vh;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: -250px;

  .title {
    margin: 100px 0;
    text-align: center;
  }

  .footer {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
  }
}
</style>
