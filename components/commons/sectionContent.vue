<template>
  <div class="section-content">
    <slot/>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.section-content {
  font-size: 1.2rem;
  letter-spacing: 2px;
  line-height: 1.7;
  margin-bottom: 10px;

  p {
    margin-bottom: 5px;
  }

  li {
    margin-bottom: 5px;
  }
}
</style>
