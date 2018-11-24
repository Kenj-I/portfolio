<template>
  <section class="main">
    <mainTitle class="title"/>
    <meinMenu/>
  </section>
</template>

<script>
import mainTitle from '@/components/pages/index/title';
import meinMenu from '@/components/pages/index/menu';

export default {
  layout: 'full',
  components: {
    mainTitle,
    meinMenu,
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    margin-bottom: 10px;
  }
}
</style>
