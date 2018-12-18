<template>
  <div
    :class="{active: active}"
    class="hamburger"
    @click="switchMenu"
  >
    <div class="wrapper">
      <span/>
      <span/>
      <span/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    active() {
      return this.$store.getters['menu/active'];
    },
  },
  methods: {
    switchMenu() {
      this.$store.dispatch(
        'menu/changeStatus',
        !this.$store.getters['menu/active']
      );
    },
  },
};
</script>

<style lang='scss' scoped>
.hamburger {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: $color-primary;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);

  .wrapper,
  span {
    display: inline-block;
    transition: all 0.4s;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;

    span {
      position: absolute;
      left: 50%;
      width: 50%;
      height: 4px;
      background-color: #fff;
      border-radius: 4px;
      transform: translateX(-50%);

      &:nth-of-type(1) {
        top: 15px;
      }
      &:nth-of-type(2) {
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &:nth-of-type(3) {
        bottom: 15px;
      }
    }
  }

  &.active .wrapper {
    transform: rotate(360deg);

    & span {
      &:nth-of-type(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:nth-of-type(2) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:nth-of-type(3) {
        opacity: 0;
      }
    }
  }
}
</style>
