<template>
  <div class="page">
    <div class="wrapper">
      <template v-if="data.success">
        <h1 v-html="pageInfo.name"></h1>
        <template v-for="(item, index) in pageInfo.content" :key="index">
          <article v-if="item.type === 'block'" class="term page__section">
            <div class="term__inner">
              <template
                v-for="(content, contentIndex) in item.content"
                :key="contentIndex"
              >
                <h2 v-if="content.type === 'title'" class="term__title">
                  {{ content.content }}
                </h2>
                <p
                  v-else-if="content.type === 'text'"
                  class="term__text"
                  v-html="content.content"
                ></p>
                <h4 v-if="content.type === 'subtitle'" class="term__subtitle">
                  {{ content.content }}
                </h4>
                <ol v-if="content.type === 'list'" class="term__list">
                  <li
                    v-for="(listItem, listIdx) in content.content"
                    :key="listIdx"
                  >
                    {{ listItem }}
                  </li>
                </ol>
              </template>
            </div>
          </article>
          <img
            v-else
            :src="item.content"
            :alt="item.imageTitle"
            class="page__section"
          />
        </template>
      </template>
      <h1 v-else>Не найдено</h1>
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
const { data } = await useAsyncData('terms-groups', () =>
  $fetch('/api/terms-groups', { query: { id: route.params.id } }),
);

const pageInfo = computed(() => data.value.response);
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
