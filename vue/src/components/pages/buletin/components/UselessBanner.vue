<template>
  <div class="banner">
    <div class="banner__welcome">
      Welcome to buletin
    </div>
    <div class="banner__motivation">
      Craft narratives ✍️ that ignite
      <span class = "banner__motivation__red-text">inspiration</span> 💡,
      <span class = "banner__motivation__red-text">knowledge</span> 📕, and
      <span class = "banner__motivation__red-text">entertainment</span> 🎬
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap');

.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: #EEEEEE;
  padding: 40px 200px;
  font-family: "Roboto", serif;
  font-weight: 500;
  border-radius: 20px;
  margin-bottom: 40px;

  &__welcome {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 14px;
    color: grey;
  }

  &__motivation {
    letter-spacing: 1px;
    font-size: 30px;
    color: black;
    text-align: center;

    &__red-text {
      color: red;
    }
  }
}
</style>
