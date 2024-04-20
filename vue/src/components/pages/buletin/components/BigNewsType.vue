<template>
  <RouterLink :to="{ name: routeNames.ARTICLE, params: { id:currentNews['id'] } }">
    <div class="big-news">
      <div class="big-news__image" :style="{ backgroundImage: 'url(' + currentNews['image'] + ')' }"></div>
        <div class="big-news__text">
          <div class="big-news__text__date">
            {{ currentNews['date'] }}
          </div>

            <div class="big-news__text__title">
              {{ currentNews['title'] }}
            </div>

          <div class="big-news__text__description">
            {{ currentNews['description'] }}
          </div>
        </div>
    </div>
  </RouterLink>
</template>

<script>
import { mapGetters } from 'vuex';
import { RouteNames } from "@/router/routes";

export default {
  name: 'BigNewsType',
  props: {
    currentNews: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('newsStore', [
      'getNews'
    ]),
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

.big-news {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  border-radius: 10px;
  padding-right: 80px;

  &:hover {
    background-color: #EEEEEE;
  }

  &__image {
    height: 300px;
    width: 120%;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;

    &__date {
      color: grey;
      font-family: "Roboto", serif;
      margin-top: 20px;
    }

    &__title {
      font-size: 44px;
      font-family: "Merriweather", serif;
      color: black;
    }

    &__description {
      font-family: "Roboto", serif;
      color: #555555;
      font-size: 16px;
    }
  }
}
</style>
