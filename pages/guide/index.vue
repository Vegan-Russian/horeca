<template>
  <div class="page">
    <div class="wrapper">
      <guide-the-search
        title="Веганский справочник"
        description="Наша цель — сделать так, чтобы веганские опции в и ресторанах стали доступнее. <br /> Для этого мы создали справочник ингредиентов."
        class="page__search"
      />

      <div class="page__terms">
        <article
          v-for="term in articles"
          :key="term.id"
          class="term"
          :style="{ '--image-sm': `url(${term.images?.small})` }"
        >
          <img :src="term.images.normal" alt="" class="term__img" />
          <h4 v-html="term.name"></h4>
          <nuxt-link class="term__link" :to="`guide/${term.id}`"></nuxt-link>
        </article>
      </div>

      <div class="common-links">
        <the-link :to="{ name: 'suppliers' }">
          Посмотреть поставщиков
        </the-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: 'HoReCa - о нас',
});

const { data: articles } = await useFetch('/api/articles');
</script>

<style lang="scss" scoped>
.page {
  &__search {
    margin-bottom: 120px;
  }
  &__terms {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px 46px;
  }

  @include media('xxs') {
    &__terms {
      display: flex;
      flex-direction: column;
      gap: 20px;
      img {
        display: none;
      }
    }
  }
}

.term {
  background-color: rgba(255, 255, 255, 0.45);
  border: 1.5px solid #000000;
  padding: 40px;
  position: relative;
  &__link {
    position: absolute;
    inset: 0;
  }
  &__img {
    border-radius: 50%;
    margin-bottom: 42px;
  }
  &:first-child {
    border-radius: 30px 0px 0px 0px;
  }
  &:nth-child(2) {
    border-radius: 0px 30px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 30px 0px;
  }
  &:nth-last-child(2) {
    border-radius: 0px 0px 0px 30px;
  }
  &:nth-child(4n + 1),
  &:nth-child(4n) {
    grid-column: span 2;
    .term__img {
      border-radius: 0px 140px 0px 0px;
      margin-bottom: 36px;
    }
  }

  @include media('xxs') {
    position: relative;
    overflow: hidden;
    border-color: #b87c5a;
    height: 89px;
    padding: 24px 21px;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: var(--image-sm);
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.2;
      transition: opacity 0.2s ease;
    }
    &:hover {
      &::before {
        opacity: 0.4;
      }
    }
    &:nth-child(n) {
      border-radius: 0;
    }
    &:first-child {
      border-radius: 20px 20px 0 0;
    }
    &:last-child {
      border-radius: 0 0 20px 20px;
    }

    h4 {
      font-size: 22px;
      line-height: 20px;
    }
  }
}
</style>
