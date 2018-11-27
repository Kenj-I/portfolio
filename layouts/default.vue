<template>
  <nuxt class="body-wrapper"/>
</template>

<style lang="scss">
@import '../assets/sass/base.scss';

html {
  min-height: 100%;
}

body {
  min-height: 100%;
  background-image: url('../assets/images/background.png');
  background-position: center center;
  background-size: cover;
}

#__nuxt,
#__layout {
  min-height: 100%;
}
</style>
