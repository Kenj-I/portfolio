<template>
  <div class="menu-box">
    <ul>
      <item
        v-for="(item, key) in menuList"
        :key="key"
        :url="item.url"
        class="menu__item">
        {{ item.name }}
      </item>
    </ul>
  </div>
</template>

<script>
import item from '@/components/pages/index/menuItem';

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
};
</script>

<style lang="scss" scoped>
.menu-box {
  ul {
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
  }
}
</style>
