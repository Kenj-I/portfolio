<template>
  <transition>
    <div class="wrapper">
      <section class="main">
        <mainTitle class="title"/>
        <meinMenu/>
      </section>
      <foot class="footer"/>
    </div>
  </transition>
</template>

<script>
import mainTitle from '@/components/pages/index/title';
import meinMenu from '@/components/pages/index/menu';
import foot from '@/components/commons/footer';

import { TweenMax, Power3 } from 'gsap';

export default {
  layout: 'full',
  components: {
    mainTitle,
    meinMenu,
    foot,
  },
  transition: {
    leave(el, done) {
      TweenMax.to('.main, footer', 0.8, {
        opacity: 0,
        scale: 0,
        ease: Power3.easeIn,
        onComplete: done,
      });
    },
  },
  mounted() {
    this.fadeIn();
  },
  methods: {
    fadeIn() {
      TweenMax.to('.main, .footer', 0.8, {
        opacity: 1,
        scale: 1,
        ease: Power3.easeOut,
        startAt: {
          opacity: 0,
          scale: 0.5,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .main,
  .footer {
    opacity: 0;
  }

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .title {
      margin-bottom: 10px;
    }
  }

  .footer {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
