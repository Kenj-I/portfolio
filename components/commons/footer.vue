<template>
  <footer>
    <div class="link">
      <div class="twitter">
        <a
          v-for="(i, key) of iconList"
          :key="key"
          :href="i.href"
          target="_brank"
        >
          <img
            :src="i.src"
            :alt="i.alt"
          >
        </a>
      </div>
    </div>
    <copyright />
  </footer>
</template>

<script>
import copyright from '@/components/commons/copyright';
import icon from '@/components/commons/icon';

import twitterIcon from '@/assets/images/icon/twitter.svg';
import githubIcon from '@/assets/images/icon/github.svg';

export default {
  components: {
    copyright,
    icon,
  },
  data: () => ({
    iconList: [
      {
        href: 'https://twitter.com/gootablog',
        src: twitterIcon,
        art: 'twitter icon',
      },
      {
        href: 'https://github.com/Kenj-I',
        src: githubIcon,
        art: 'github icon',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  img {
    margin: 0 10px;
    cursor: pointer;
  }
}
</style>
