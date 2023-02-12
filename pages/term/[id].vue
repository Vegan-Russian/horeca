<template>
  <div class="page">
    <div class="wrapper">
      {{ route.params.id }}
      <div class="common-links">
        <the-link :to="{ name: 'guide' }">
          Главная веганского справочника
        </the-link>
        <the-link :to="{ name: 'suppliers' }">
          Посмотреть поставщиков
        </the-link>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: 'HoReCa - о нас',
});

const route = useRoute();
// const { data } = await useAsyncData('article', () =>
//   $fetch('/api/article', { query: { id: route.params.id } }),
// );

// const pageInfo = computed(() => data.value.response);
</script>

<style lang="scss" scoped>
.page {
  &__section {
    margin-top: 98px;
  }
}
.term {
  padding: 100px;
  border: 1.5px solid #000000;
  &--first {
    border-radius: 40px 40px 0px 0px;
  }
  &--last {
    border-radius: 0px 0px 40px 40px;
  }

  &__inner {
    max-width: 952px;
  }

  &__title {
    margin-bottom: 58px;
  }

  &__text {
    line-height: 1.42;
    &::v-deep(a) {
      color: var(--title-color);
      text-decoration: underline;
      text-decoration-skip-ink: none;
      &:hover {
        text-decoration: none;
      }
    }
  }

  &__subtitle {
    margin-top: 78px;
    margin-bottom: 22px;
  }

  &__list {
    margin-top: 38px;
    margin-left: 1rem;
    line-height: 1.73;
  }
}
</style>
