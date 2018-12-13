<template>
  <div>
    <loading />
    <nuxt />
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
</style>
