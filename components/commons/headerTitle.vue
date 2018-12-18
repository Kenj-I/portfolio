<template>
  <h1>
    <router-link to="/">
      Ken's Portfolio
    </router-link>
  </h1>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
h1 {
  text-align: center;
  font-size: 3rem;
  padding: 10px 0;
  font-weight: 500;
  letter-spacing: 5px;
  display: none;

  @include bp-tab {
    display: block;
  }
}
</style>
