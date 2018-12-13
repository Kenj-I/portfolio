<template>
  <contentCard class="card">
    <article class="contact">
      <contentTitle>
        Contact
      </contentTitle>
      <sectionContainer>
        <sectionContent class="content">
          <p>
            お問い合わせは
            <a
              href="https://gootablog.com/contact"
              target="_blank">コチラ</a>か
            <a
              href="https://twitter.com/gootablog"
              target="_blank">Twitter</a>
            からお願いします。
          </p>
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
.contact {
  a {
    text-decoration: underline;
  }
}
</style>
