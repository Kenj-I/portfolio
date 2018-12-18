<template>
  <div
    :class="{active: spMenuActive}"
    class="menu-list">
    <menuList />
    <foot class="footer"/>
  </div>
</template>

<script>
import menuList from '@/components/commons/sideMenu';
import foot from '@/components/commons/footer';

// import { TweenMax, Power4 } from 'gsap';

export default {
  components: {
    menuList,
    foot,
  },
  computed: {
    spMenuActive() {
      return this.$store.getters['menu/active'];
    },
  },
  watch: {
    //   spMenuActive(newStatus) {
    //     if (newStatus) {
    //       this.fadeIn();
    //     } else {
    //       this.fadeOut();
    //     }
    //   },
    $route() {
      this.$store.dispatch('menu/changeStatus', false);
    },
  },
  // methods: {
  //   fadeIn() {
  //     TweenMax.to('.menu-list', 0.4, {
  //       bottom: 0,
  //       ease: Power4.easeOut,
  //       startAt: {
  //         bottom: '-400px',
  //         display: 'block',
  //       },
  //     });
  //   },
  //   fadeOut() {
  //     TweenMax.to('.menu-list', 0.4, {
  //       bottom: '-400px',
  //       display: 'none',
  //       ease: Power4.easeOut,
  //     });
  //   },
  // },
};
</script>

<style lang='scss' scoped>
.menu-list {
  background: rgba($color-primary, 0.9);
  width: 100%;
  height: 400px;
  position: fixed;
  bottom: -400px;
  border-radius: 10px 10px 0 0;
  display: none;
  transition: bottom 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

  @include bp-tab {
    display: block;

    &.active {
      bottom: 0;
    }
  }
}

.footer {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
