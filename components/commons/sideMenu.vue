<template>
  <nav class="menu">
    <ul class="container">
      <item
        v-for="(item, key) in menuList"
        :key="key"
        :url="item.url"
        :current="$route.path === item.url"
        class="item">
        {{ item.name }}
      </item>
    </ul>
  </nav>
</template>

<script>
import item from '@/components/commons/sideMenuItem';

export default {
  components: {
    item,
  },
  data: () => ({
    menuList: [
      { name: 'About', url: '/about' },
      { name: 'Skills', url: '/skills' },
      { name: 'Works', url: '/works' },
      { name: 'Blog', url: '/blog' },
      { name: 'Contact', url: '/contact' },
    ],
  }),
  methods: {},
};
</script>

<style lang='scss' scoped>
.menu {
  padding-left: 100px;

  @include bp-tab {
    padding: 40px 0 0 0;
    width: 70px;
    margin: 0 auto;
  }

  .container {
    list-style: none;

    .item {
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
