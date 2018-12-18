<template>
  <h1>Ken's Portfolio</h1>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 5rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 5px;

  @include bp-sp-w {
    font-size: 3rem;
    white-space: nowrap;
  }
}
</style>
