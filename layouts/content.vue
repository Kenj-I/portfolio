<template>
  <defaultLayout>
    <div class="page-wrapper">
      <side class="side"/>
      <div class="content-wrapper">
        <div class="content-container">
          <nuxt class="content"/>
        </div>
      </div>
    </div>
  </defaultLayout>
</template>

<script>
import defaultLayout from '@/layouts/default';
import side from '@/components/commons/side';

export default {
  components: {
    defaultLayout,
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

    .content-container {
      background-color: $color-white;
      width: 700px;
      min-height: 100%;
      border-radius: 10px;
      box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
      margin: 0 auto;
      padding: 50px;

      .content {
      }
    }
  }
}
</style>
