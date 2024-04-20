<template>
  <div class="header">
    <div class="header__left-part">
      <RouterLink
          :to="{ name: routeNames.NEWS }"
          class="header__nav-link"
      >
      <div class="header__left-part__name">
        Buletin
      </div>
      </RouterLink>
      <div class="header__left-part__line">|</div>
      <RouterLink
      to="/stories"
      class="header__nav-link"
      >
        Stories
      </RouterLink>
      <RouterLink
        to="/creator"
        class="header__nav-link"
      >
        Creator
      </RouterLink>
      <RouterLink
        to="/community"
        class="header__nav-link"
      >
        Community
      </RouterLink>
      <RouterLink
          to="/subscribe"
          class="header__nav-link"
      >
        Subscribe
      </RouterLink>
    </div>
    <div class="header__right-part">
      <RouterLink
        :to="{ name: routeNames.POST }"
        class="header__nav-link"
      >
        <img class = "header__right-part__write" src="https://img.icons8.com/?size=80&id=9aaOTHZb586a&format=png" alt="write-icon"/>
        <div>Write</div>
      </RouterLink>
      <RouterLink
          to="/notifications"
          class="header__nav-link"
      >
        <img class = "header__right-part__bell" src="https://img.icons8.com/?size=32&id=16008&format=png" alt="bell"/>
      </RouterLink>
      <RouterLink
          to="/user"
          class="header__nav-link"
      >
        <img class = "header__right-part__user" src="https://img.icons8.com/?size=80&id=ckaioC1qqwCu&format=png" alt="user"/>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouteNames } from "@/router/routes";

export default {
  computed: {
    routeNames() {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap');

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  letter-spacing: 1px;

  &__nav-link {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: "Roboto", serif;
    font-weight: 500;
    font-size: 14px;
    color: black;
  }

  &__left-part {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    background-color: white;

    &__name {
      font-family: "Merriweather", serif;
      font-weight: 900;
      font-style: normal;
      display: flex;
      align-items: center;
      font-size: 24px;
      color: red;
    }

    &__line {
      font-size: 20px;
      color: black;
    }
  }

  &__right-part {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;

    &__write, &__bell {
      height: 20px;
    }

    &__user {
      height: 30px;
    }
  }
}
</style>
