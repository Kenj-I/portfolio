<template>
  <div class="fullview">
    <nuxt/>
    <foot class="footer"/>
  </div>
</template>

<script>
import foot from '@/components/commons/footer';

export default {
  layout: 'default',
  components: {
    foot,
  },
};
</script>


<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
