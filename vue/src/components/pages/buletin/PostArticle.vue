<template>
  <div class="post">
    <PageHeader/>
    <div class="post__form">
      <div class="post__form__field">
        <div class="post__form__field__title">Date</div>
        <input
            v-model="date"
            class="post__form__field__input"
            type="text"
        />
      </div>
      <div class="post__form__field">
        <div class="post__form__field__title">Title</div>
        <input
            v-model="title"
            class="post__form__field__input"
            type="text"
        />
      </div>
      <div class="post__form__field">
        <div class="post__form__field__title">Image</div>
        <input
            v-model="image"
            class="post__form__field__input"
            type="text"
        />
      </div>
      <div class="post__form__field">
        <div class="post__form__field__title">Description</div>
        <input
            v-model="description"
            class="post__form__field__input"
            type="text"
        />
      </div>
      <div class="post__form__field">
        <div class="post__form__field__title">Text</div>
        <input
            v-model="text"
            class="post__form__field__input"
            type="text"
        />
      </div>
      <button class="post__form__button" @click="() => createNews()">POST</button>
    </div>
    <PageFooter/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageHeader from "@/components/pages/buletin/components/PageHeader.vue";
import PageFooter from "@/components/pages/buletin/components/PageFooter.vue";

export default {
  name: 'CreateNewsBlog',
  components: {
    PageFooter,
    PageHeader
  },
  data () {
    return {
      image: '',
      date:'',
      title: '',
      description: '',
      text: ''
    };
  },
  computed: {
    ...mapGetters("newsStore", [
      "getLastIndex"
    ])
  },
  methods: {
    ...mapActions('newsStore', [
      'addNews'
    ]),
    createNews () {
      const newNews = {
        id: this.getLastIndex,
        date: this.date,
        title: this.title,
        image: this.image,
        description: this.description,
        text: this.text
      };
      this.addNews(newNews);
      this.date = '';
      this.title = '';
      this.image = '';
      this.description = '';
      this.text = '';
    }
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap');

.post {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 235px;

  &__form {
    margin: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    &__field {
      display: flex;
      flex-direction: column;
      gap: 5px;

      &__title {
        font-family: 'Merriweather', serif;
        font-size: 20px;
      }

      &__input {
        background-color: #EEEEEE;
        font-size: 16px;
        padding: 10px 15px;
        border-radius: 10px;
        border: none;
        font-family: 'Roboto', serif;

        &:focus {
          outline: none;
        }
      }
    }

    &__button {
      margin-top: 20px;
      font-family: 'Merriweather', serif;
      font-size: 16px;
      padding: 8px 15px;
      color: white;
      background-color: #c40d00;
      border: none;
      border-radius: 20px;
      cursor: pointer;
    }
  }
}
</style>
