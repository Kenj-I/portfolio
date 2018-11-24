<template>
  <div class="menu-box">
    <ul>
      <item
        v-for="(item, key) in menuList"
        :key="key"
        :ref="item.ref"
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
      { name: 'About', ref: 'about' },
      { name: 'Skills', ref: 'skills' },
      { name: 'Works', ref: 'works' },
      { name: 'Blog', ref: 'blog' },
      { name: 'Contact', ref: 'contact' },
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
