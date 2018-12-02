<template>
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
</template>

<script>
import contentTitle from '@/components/commons/contentTitle';
import sectionContainer from '@/components/commons/sectionContainer';
import sectionTitle from '@/components/commons/sectionTitle';
import sectionContent from '@/components/commons/sectionContent';

export default {
  layout: 'content',
  async fetch({ store }) {
    await store.dispatch('feed/fetchFeed');
  },
  components: {
    contentTitle,
    sectionContainer,
    sectionTitle,
    sectionContent,
  },
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
