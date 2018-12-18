<template>
  <contentCard class="card">
    <article class="blog">
      <contentTitle>
        Blog
      </contentTitle>
      <sectionContainer>
        <sectionTitle>
          <a
            href="https://gootablog.com"
            target="_blank"
          >
            Goota
          </a>
        </sectionTitle>
        <sectionContent >
          <p>
            テック系の備忘録とライフログのブログを書いています。<br>
            WordPressのテーマは自作したものを使っています。
          </p>
          <p>現在は月に5000PV~10000PVくらい読まれています。</p>
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
  // computed: {
  //   feeds() {
  //     return this.$store.state.feed.feeds;
  //   },
  // },
};
</script>

<style lang='scss' scoped>
.blog {
  a {
    text-decoration: underline;
  }
}
</style>
