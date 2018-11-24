<template>
  <div>
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


<style lang="scss">
html {
  height: 100%;
}

body {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(3px);
  }

  height: 100%;
  background-image: url('../assets/images/background.png');
  background-position: center center;
  background-size: cover;
}

.footer {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
