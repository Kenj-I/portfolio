<template>
  <contentCard class="card">
    <article class="skills">
      <contentTitle>
        Skills
      </contentTitle>
      <sectionContainer>
        <sectionTitle>
          Backend
        </sectionTitle>
        <sectionContent class="content">
          <p>
            PHP/FuelPHP/Laravel/WordPress
          </p>
        </sectionContent>
      </sectionContainer>
      <sectionContainer>
        <sectionTitle>
          Frontend
        </sectionTitle>
        <sectionContent class="content">
          <p>HTML</p>
          <p>CSS/Sass</p>
          <p>JavaScript/Vue.js/Nuxt.js/jQuery</p>
        </sectionContent>
      </sectionContainer>
      <sectionContainer>
        <sectionTitle>
          Another
        </sectionTitle>
        <sectionContent class="content">
          <p>CentOS/Ubuntu/Apache/Nginx/Mysql</p>
          <p>Docker/Vagrant/zsh/Atom/VScode</p>
          <p>Git/Slack</p>
          <p>Sketch/Photoshop</p>
        </sectionContent>
      </sectionContainer>
    </article>
  </contentCard>
</template>

<script>
import contentCard from '@/components/commons/contentCard';
import contentTitle from '@/components/commons/contentTitle';
import sectionContainer from '@/components/commons/sectionContainer';
import sectionTitle from '@/components/commons/sectionTitle';
import sectionContent from '@/components/commons/sectionContent';

import pageTransition from '@/mixins/pageTransition';

export default {
  layout: 'content',
  components: {
    contentCard,
    contentTitle,
    sectionContainer,
    sectionTitle,
    sectionContent,
  },
  mixins: [pageTransition],
};
</script>

<style lang='scss' scoped>
</style>
