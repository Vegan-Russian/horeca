<template>
  <div class="page">
    <div class="wrapper">
      <guide-the-search
        title="Веганский справочник"
        description="Наша цель — сделать так, чтобы веганские опции в и ресторанах стали доступнее. <br /> Для этого мы создали справочник ингридиентов."
        class="page__search"
      />

      <div class="page__terms">
        <article v-for="term in terms.response" :key="term.id" class="term">
          <img :src="getImage(term)" alt="" class="term__img" />
          <h4 v-html="term.name"></h4>
          <nuxt-link class="term__link" :to="`guide/${term.id}`"></nuxt-link>
        </article>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: 'HoReCa - о нас',
});
const { data: terms } = await useAsyncData('terms-groups', () =>
  $fetch('/api/terms-groups'),
);
const getImage = (item?: { images: { normal: string; small: string } }) =>
  item?.images?.normal;
</script>

<style lang="scss">
.page {
  &__search {
    margin-bottom: 120px;
  }
  &__terms {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px 46px;
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
}
</style>
