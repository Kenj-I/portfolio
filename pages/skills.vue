<template>
  <article class="skills">
    <contentTitle>
      Skills
    </contentTitle>
    <section>
      <sectionTitle>
        Backend
      </sectionTitle>
      <sectionContent class="content">
        <p>
          PHP/FuelPHP/Laravel/WordPress
        </p>
      </sectionContent>
    </section>
    <section>
      <sectionTitle>
        Frontend
      </sectionTitle>
      <sectionContent class="content">
        <p>HTML</p>
        <p>CSS/Sass</p>
        <p>JavaScript/Vue.js/Nuxt.js/jQuery</p>
      </sectionContent>
    </section>
    <section>
      <sectionTitle>
        Another
      </sectionTitle>
      <sectionContent class="content">
        <p>CentOS/Ubuntu/Apache/Nginx/Mysqlo</p>
        <p>Docker/Vagrant/zsh/Atom/VScode</p>
        <p>Git/Slack</p>
        <p>Sketch/Photoshop</p>
      </sectionContent>
    </section>
  </article>
</template>

<script>
import contentTitle from '@/components/commons/contentTitle';
import sectionTitle from '@/components/commons/sectionTitle';
import sectionContent from '@/components/commons/sectionContent';

export default {
  layout: 'content',
  components: {
    contentTitle,
    sectionTitle,
    sectionContent,
  },
};
</script>

<style lang='scss' scoped>
</style>
