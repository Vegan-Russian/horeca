<template>
  <div class="page recipes">
    <div class="wrapper">
      <div class="recipes__preview">
        <h1>рецепты</h1>
        <p class="recipes__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vitae
          iusto ut in, mollitia maiores id obcaecati odio pariatur provident
          quo. Qui nesciunt necessitatibus voluptas placeat quibusdam dicta
          tempore deleniti?
        </p>
        <p class="recipes__text">
          Если вы хотите добавить свой бренд на эту страницу, напишите нам на
          <a href="mailto:hello@veganrussian.ru">hello@veganrussian.ru</a>.
        </p>
      </div>
      <template v-for="(item, index) in items" :key="index">
        <div
          v-if="'title' in item && 'text' in item"
          class="card recipes__item"
          :class="{
            'card--reversed': item.reversed,
            'card--first': index === 0,
            'card--last': index === items.length - 1,
          }"
        >
          <div class="card__content">
            <h2 class="card__title" v-html="item.title"></h2>
            <p
              v-for="(paragraph, pIndex) in item.text"
              :key="pIndex"
              class="card__text"
            >
              {{ paragraph }}
            </p>
          </div>
          <div class="card__image-wrapper">
            <img :src="item.image" alt="" class="card__image" />
            <the-button
              class="card__btn"
              bottom-rounded
              width="100%"
              @click="openPresentation(item.link)"
              >Открыть презентацию</the-button
            >
          </div>
        </div>
        <div v-else class="recipes__item image">
          <img :src="item.image" alt="" />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.recipes {
  &__item {
    & + & {
      margin-top: 100px;
    }
  }

  &__preview {
    margin-bottom: 180px;
    max-width: 50%;
  }

  &__text {
    line-height: 1.73;
    & + & {
      margin-top: 30px;
    }
  }
  @include media('sm') {
    &__item {
      & + & {
        margin-top: 75px;
      }
    }
    &__preview {
      margin-bottom: 120px;
    }
  }
  @include media('xxs') {
    &__item {
      & + & {
        margin-top: 37px;
      }
    }
    &__preview {
      margin-bottom: 68px;
      max-width: 100%;
    }

    &__text {
      & + & {
        margin-top: 20px;
      }
    }
  }
}
.card {
  padding: 100px;
  border: 1.5px solid #000000;
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 50px;
  &--first {
    border-radius: 40px 40px 0px 0px;
  }
  &--last {
    border-radius: 0px 0px 40px 40px;
  }
  &--reversed {
    grid-template-columns: 5fr 7fr;
    .card__image-wrapper {
      order: -1;
    }
  }

  &__title {
    margin-bottom: 64px;
  }

  &__text {
    line-height: 1.73;
  }

  &__btn {
    margin-top: 30px;
  }

  &__image {
    width: 100%;
    border-radius: 230px 230px 0 0;
    outline: 1px solid #000000;
  }

  @include media('lg') {
    padding: 75px;
  }

  @include media('sm') {
    padding: 36px;
    grid-template-columns: 1fr 320px;
    gap: 24px;
    &__title {
      margin-bottom: 40px;
    }
    &--reversed {
      grid-template-columns: 320px 7fr;
    }
    &--first {
      border-radius: 24px 24px 0px 0px;
    }
    &--last {
      border-radius: 0px 0px 24px 24px;
    }
  }

  @include media('xxs') {
    grid-template-columns: 1fr;
    padding: 0;
    gap: 0;
    overflow: hidden;
    &__title {
      margin-bottom: 20px;
    }
    &__content {
      padding: 20px;
    }
    &__image-wrapper {
      display: contents;
    }
    &__image {
      border-radius: 0;
      width: 100%;
      order: -1;
      outline: none;
    }
    &__btn {
      order: 1000;
      border-radius: 0;
      margin: 10px 20px 20px;
      width: calc(100% - 40px);
    }
  }
}

.image img {
  outline: 1px solid #000000;
  width: 100%;
  display: block;
  max-height: 100vh;
  object-fit: cover;
}
</style>
