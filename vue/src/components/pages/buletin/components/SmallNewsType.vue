<template>
  <RouterLink :to="{ name: routeNames.ARTICLE, params: { id:news.id } }">
    <div class="small-news">
      <img
        :src="news.image"
        alt="news-image"
        class="small-news__image"
      />
      <div class="small-news__text">
        <div class="small-news__text__date">{{ news.date }}</div>
        <div class="small-news__text__title">{{ news.title }}</div>
        <div class="small-news__text__description">{{ news.description }}</div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
import { RouteNames } from "../../../../router/routes";

export default {
  name: "SmallNewsType",
  components: {
  },
  props: {
    news: {
      type: Object,
      required: 'true'
    }
  },
  computed: {
    routeNames () {
      return RouteNames;
    }
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap');

.small-news {
  width: 250px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background-color: #EEEEEE;
    border-radius: 20px;
  }

  &__image {
    height: 250px;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 20px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px 20px 20px;
    gap: 10px;

    &__date {
      font-family: 'Roboto', 'serif';
      color: grey;
      font-size: 12px;
    }

    &__title {
      font-family: 'Merriweather', 'serif';
      color: black;
      font-size: 24px;
    }

    &__description {
      font-family: 'Roboto', 'serif';
      color: #555555;
      font-size: 14px;
    }
  }
}
</style>
