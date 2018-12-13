<template>
  <contentCard class="card">
    <article class="blog">
      <contentTitle>
        Blog
      </contentTitle>
      <sectionContainer>
        <sectionTitle>
          最新記事
        </sectionTitle>
        <sectionContent v-if="feeds">
          <ul>
            <li
              v-for="(entry, key) of feeds"
              :key="key"
              class="entry">
              <a
                :href="entry.url"
                target="_blank">
                {{ entry.title }}
              </a>
            </li>
          </ul>
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
  computed: {
    feeds() {
      return this.$store.state.feed.feeds;
    },
  },
};
</script>

<style lang='scss' scoped>
.blog {
  .entry {
    margin-bottom: 20px;
    text-decoration: underline;
  }
}
</style>
