<template>
  <div class="page-wrapper">
    <side class="side"/>
    <div class="content-wrapper">
      <nuxt class="content"/>
    </div>
  </div>
</template>

<script>
import side from '@/components/commons/side';

export default {
  components: {
    side,
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100%;

  .content-wrapper {
    min-height: 100%;
    padding: 80px 0 80px 250px;

    .content {
      opacity: 0;
    }
  }
}
</style>
