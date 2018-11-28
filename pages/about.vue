<template>
  <article class="about">
    <contentTitle class="title">
      About
    </contentTitle>
    <sectionContainer>
      <sectionTitle class="section-title">Me</sectionTitle>
      <sectionContent class="content">
        <ul>
          <li>Name : Ken</li>
          <li>Age: 25</li>
          <li>Job : Web Developer</li>
        </ul>
      </sectionContent>
    </sectionContainer>
    <sectionContainer>
      <sectionTitle class="section-title">Profile</sectionTitle>
      <sectionContent class="content">
        <p>
          学生時代にWebの世界へ入り込み、そこからWeb Developerに。<br>
          現在は東京でシステム開発会社で働いています。<br>
          業務では主にPHPを使用したシステム開発のサーバーサイド、最近だとVue.jsを使用したフロントエンドを担当。
        </p>
        <p>
          趣味はトレーニングとランニング。毎週欠かさないくらいハマってます。あとはコーヒーを淹れて飲むのと、サウナで体を整えるが好きです。
        </p>
      </sectionContent>
    </sectionContainer>
    <sectionContainer>
      <sectionTitle class="section-title" >History</sectionTitle>
      <sectionContent class="content">
        <ul class="history-list">
          <li>1993年 東京にて生まれる</li>
          <li>2012年 四年制大学 入学</li>
          <li>2015年 休学・プログラミングを勉強し始める</li>
          <li>2017年 四年制大学 卒業</li>
          <li>2017年~現在 システム開発会社に勤務</li>
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
    sectionTitle,
    sectionContent,
    sectionContainer,
  },
};
</script>

<style lang="scss" scoped>
article {
  .content {
    .history-list {
      padding-left: 20px;

      li {
        margin-bottom: 20px;
        position: relative;

        &::before {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: $color-primary;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -20px;
        }

        &::after {
          content: '';
          width: 5px;
          height: 20px;
          background-color: $color-primary-light;
          position: absolute;
          bottom: -20px;
          left: -18px;
        }

        &:last-of-type::after {
          display: none;
        }
      }
    }
  }
}
</style>
