<template>
  <div class="page-wrapper">
    <div
      :class="{active: spMenuActive}"
      class="blur-wrapper">
      <headerTitle/>
      <side class="side"/>
      <div class="content-wrapper">
        <nuxt class="content"/>
      </div>
    </div>
    <hamburger class="hamburger" />
    <spMenu class="sp-menu"/>
  </div>
</template>

<script>
import side from '@/components/commons/side';
import headerTitle from '@/components/commons/headerTitle';
import hamburger from '@/components/commons/hamburger';
import spMenu from '@/components/commons/spMenu';

export default {
  components: {
    side,
    headerTitle,
    hamburger,
    spMenu,
  },
  computed: {
    spMenuActive() {
      return this.$store.getters['menu/active'];
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100%;

  .blur-wrapper {
    transition: filter 0.4s;
    @include bp-tab {
      &.active {
        filter: blur(3px);
      }
    }
  }

  .content-wrapper {
    min-height: 100%;
    padding: 80px 0 80px 250px;

    @include bp-tab {
      padding: 20px 0;
    }

    .content {
      opacity: 0;
    }
  }

  .hamburger {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 500;
    display: none;

    @include bp-tab {
      display: block;
    }
  }
}
</style>
