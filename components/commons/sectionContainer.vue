<template>
  <section>
    <slot/>
  </section>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
section {
  padding-left: 50px;
  margin-bottom: 30px;

  @include bp-sp-w {
    padding-left: 20px;
  }
}
</style>
