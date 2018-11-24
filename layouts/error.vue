<template>
  <div>
    <h1 v-if="error.statusCode === 404">404 : Page not found</h1>
    <h1 v-else>{{ error.statusCode }} : Error</h1>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
