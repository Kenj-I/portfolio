<template>
  <defaultLayout>
    <div class="fullview">
      <nuxt/>
      <foot class="footer"/>
    </div>
  </defaultLayout>
</template>

<script>
import defaultLayout from '@/layouts/default';
import foot from '@/components/commons/footer';
import loading from '@/components/commons/loading';

export default {
  components: {
    foot,
    loading,
    defaultLayout,
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
