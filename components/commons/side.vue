<template>
  <div class="side">
    <sideTitle class="title"/>
    <sideMenu />
    <foot class="footer"/>
  </div>
</template>

<script>
import sideTitle from '@/components/commons/sideTitle';
import sideMenu from '@/components/commons/sideMenu';
import foot from '@/components/commons/footer';

export default {
  components: {
    sideTitle,
    sideMenu,
    foot,
  },
};
</script>

<style lang="scss" scoped>
.side {
  background-color: $color-white;
  width: 250px;
  height: 100vh;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
  position: relative;

  .title {
    margin: 100px 0;
    text-align: center;
  }

  .footer {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
  }
}
</style>
