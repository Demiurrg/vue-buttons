<template>
  <div class="footer">
    <div class="footer__line"></div>
    <div class="footer__title">
      Buletin
    </div>
    <div class="footer__text">
      Unbiased, independent, truthful, uncensored, neutral, objective, impartial, fair, honest, unprejudiced, uninfluenced, open-minded, unprepossessed news
    </div>
    <div class="footer__text">
      Edit article - $1000
    </div>
    <div class="footer__text">
      Delete unwanted article - $2000
    </div>
    <div class="footer__social-media">

    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap');

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__line {
    width: 100%;
    height: 1px;
    background-color: #222222;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  &__title {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 24px;
    color: black;
    font-family: "Merriweather", serif;
  }

  &__text {
    font-family: "Roboto", serif;
    text-align: center;
    font-size: 14px;
    padding: 0 200px;
  }
}
</style>
