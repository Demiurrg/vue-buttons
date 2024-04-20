<template>
  <div class="article-container">
    <PageHeader/>
    <div class="news-article">
      <p class="news-article__date"> {{getNewsById(this.$route.params.id).date}}</p>
      <h2 class="news-article__title">{{getNewsById(this.$route.params.id).title}}</h2>
      <div class="news-article__container">
        <img
          :src="getNewsById(this.$route.params.id).image"
          alt="news-image"
          class="news-article__container__image"
        />
      </div>
      <p class="news-article__description"> {{getNewsById(this.$route.params.id).description}}</p>
      <p class="news-article__text" style="white-space: pre-line"> {{getNewsById(this.$route.params.id).text}}</p>
    </div>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from "@/components/pages/buletin/components/PageHeader.vue";
import PageFooter from "@/components/pages/buletin/components/PageFooter.vue";
import { mapGetters } from 'vuex';

export default {
  name: 'ArticlePage',
  components: {
    PageFooter,
    PageHeader,
  },
  computed: {
    ...mapGetters("newsStore", [
      "getNewsById"
    ])
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap');

.article-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 235px;
}

.news-article {
  display: flex;
  flex-direction: column;

  &__date {
    font-family: 'Roboto', serif;
    color: grey;
  }

  &__title {
    font-family: 'Merriweather', serif;
    font-size: 50px;
    color: black;
  }

  &__container {
    height: 350px;
    display: flex;
    justify-content: center;
    margin: 30px 0;

    &__image {
      display: block;
      height: 100%;
      width: auto;
      border-radius: 20px;
    }
  }

  &__description {
    font-family: 'Roboto', serif;
    font-size: 24px;
  }

  &__text {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }
}
</style>
