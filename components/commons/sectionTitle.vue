<template>
  <h3>
    <slot/>
  </h3>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: $color-primary;
  letter-spacing: 2px;
  margin-bottom: 15px;
}
</style>
