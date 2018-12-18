<template>
  <h1>Ken's Portfolio</h1>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
h1 {
  text-align: center;
  font-size: 3rem;
  padding: 10px 0;
  font-weight: bold;
  letter-spacing: 5px;
  display: none;

  @include bp-tab {
    display: block;
  }
}
</style>
