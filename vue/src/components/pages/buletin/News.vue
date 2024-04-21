<template>
  <div class="news">
    <PageHeader />
    <UselessBanner />
    <FirstCard
      :currentNews="latestNews"
    />
    <SearchSection @search="(data) => handleSearch(data)" />
    <div class="news__grid">
      <SecondCard
        v-for="news in filteredNews"
        :key="news.id"
        :news="news"
      />
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/pages/buletin/components/PageHeader.vue";
import FirstCard from "@/components/pages/buletin/components/BigNewsType.vue";
import SecondCard from "@/components/pages/buletin/components/SmallNewsType.vue";
import PageFooter from "@/components/pages/buletin/components/PageFooter.vue";
import UselessBanner from "@/components/pages/buletin/components/UselessBanner.vue";
import { mapGetters } from "vuex";
import SearchSection from "@/components/pages/buletin/components/SearchSection.vue";

export default {
  name: "NewsPage",
  components: {
    SearchSection,
    PageFooter,
    PageHeader,
    FirstCard,
    SecondCard,
    UselessBanner
  },
  data () {
    return {
      currentSlide: 0,
      inputData: ""
    };
  },
  computed: {
    ...mapGetters("newsStore", [
      "getNews",
      "getFilteredNews",
    ]),
    allNews () {
      return this.getNews;
    },
    filteredNews () {
      return this.getFilteredNews(this.inputData);
    },
    latestNews () {
      return this.allNews[0];
    }
  },
  methods: {
    handleSearch (data) {
      this.inputData = data;
    }
  }
};
</script>

<style scoped lang="less">
.news {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 235px;

  &__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
  }
}
</style>
