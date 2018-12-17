<template>
  <div class="content-card">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.content-card {
  background-color: $color-white;
  width: 700px;
  min-height: 100%;
  border-radius: 10px;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  padding: 50px;

  @include bp-tab {
    width: calc(100% - 40px);
  }
  @include bp-sp-w {
    width: calc(100% - 20px);
    margin: 0 auto;
    padding: 50px 20px;
  }
}
</style>
