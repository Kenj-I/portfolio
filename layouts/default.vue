<template>
  <div class="main-wrapper">
    <loading class="loading"/>
    <nuxt v-if="!$slots.default" />
    <slot />
  </div>
</template>

<script>
import loading from '@/components/commons/loading';

export default {
  components: {
    loading,
  },
  async beforeMount() {
    await this.$store.dispatch('feed/fetchFeed');
    setTimeout(() => {
      this.$store.dispatch('status/setStatus', false);
    }, 1000);
  },
};
</script>

<style lang="scss">
@import '../assets/sass/base.scss';

html {
  min-height: 100%;
}

body {
  min-height: 100%;
  background-image: url('../assets/images/background.png');
  background-position: center center;
  background-size: cover;
}

#__nuxt,
#__layout {
  min-height: 100%;
}
</style>
