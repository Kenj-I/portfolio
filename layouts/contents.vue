<template>
  <div class="page-wrapper">
    <side class="side"/>
    <div class="content">
      <nuxt />
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
  display: flex;
}
</style>
