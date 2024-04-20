<template>
  <div class="container">
    <div class="container__label">Latest News</div>
    <div class="container__search">
      <div
        class="container__search__button"
        @click="() => sendData()">
        <img class="container__search__button__icon" src="https://img.icons8.com/?size=50&id=132&format=png" alt="search-icon">
      </div>
      <input
        v-model="inputData"
        type="text"
        class="container__search__input"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchSection',
  data () {
    return {
      value: '',
      inputData: ''
    }
  },
  computed: {
  },
  methods: {
    sendData () {
      this.$emit('search', this.inputData);
    }
  }
};
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap');

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-bottom: 30px;
  margin-top: 40px;

  &__label {
    color: #504040;
    font-family: 'Merriweather', serif;
    font-size: 26px;
    text-align: center;
  }

  &__search {
    display: flex;

    &__input {
      height: 35px;
      width: 200px;
      background-color: #EEEEEE;
      border: none;
      font-size: 15px;
      font-family: 'Roboto', 'serif';
      border-radius: 0 10px 10px 0;

      &:focus {
        outline: none;
      }
    }

    &__button {
      width: 35px;
      background-color: #EEEEEE;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px 0 0 10px;

      &__icon {
        height: 20px;
        width: 20px;
      }
    }
  }
} 
</style>

