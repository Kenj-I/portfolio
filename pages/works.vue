<template>
  <article class="skills">
    <contentTitle>
      Works
    </contentTitle>
    <sectionContainer>
      <sectionTitle>
        業務での経験
      </sectionTitle>
      <sectionContent >
        <ul>
          <li>Wordpress製作</li>
          <li>LP（ランディングページ）製作</li>
          <li>ECサイト構築</li>
          <li>自社内システム開発</li>
          <li>社内システム</li>
        </ul>
        <p>※ 詳しい実績はお問い合わせください</p>
      </sectionContent>
    </sectionContainer>
    <sectionContainer>
      <sectionTitle>
        個人開発
      </sectionTitle>
      <sectionContent >
        <ul>
          <li>
            <a
              href="https://gootablog.com"
              target="_blank"
            >
              個人ブログのWordpressテーマ
            </a>
          </li>
          <li>
            <a
              href="https://blogcardmaker.com"
              target="_blank"
            >
              ブログカードを出力するサイト
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
  components: {
    contentTitle,
    sectionContainer,
    sectionTitle,
    sectionContent,
  },
};
</script>

<style lang='scss' scoped>
.skills {
  a {
    text-decoration: underline;
  }
}
</style>
