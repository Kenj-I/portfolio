<template>
  <transition>
    <div
      v-if="this.$store.getters['status/loading']"
      class="loading-wrapper"
    >
      <div class="spiner"/>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-leave-to,
.v-enter {
  opacity: 0;
}

.loading-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: $color-white;

  .spiner {
    width: 40px;
    height: 40px;
    background-color: $color-primary;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 102;

    border-radius: 100%;
    animation: sk-scaleout 1s infinite ease-in-out;
  }
}

@keyframes sk-scaleout {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
