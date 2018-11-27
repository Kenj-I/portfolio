<template>
  <div class="page-wrapper">
    <side class="side"/>
    <div class="content-wrapper">
      <div class="content-container">
        <nuxt class="content"/>
      </div>
    </div>
  </div>
</template>

<script>
import side from '@/components/commons/side';

export default {
  layout: 'defualt',
  components: {
    side,
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100%;

  .content-wrapper {
    height: 100%;
    padding: 80px 0 80px 250px;

    .content-container {
      background-color: $color-white;
      width: 700px;
      height: 100%;
      border-radius: 10px;
      box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
      margin: 0 auto;

      .content {
      }
    }
  }
}
</style>
