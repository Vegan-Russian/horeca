<template>
  <div class="page">
    <div class="wrapper">
      <template v-if="data.success">
        <article class="page__section found-term">
          <template
            v-for="(content, index) in data.response.content"
            :key="index"
          >
            <div class="">
              <h1 v-if="content.type === 'title'" class="">
                {{ content.content }}
              </h1>
              <p
                v-else-if="content.type === 'text'"
                class=""
                v-html="content.content"
              ></p>
              <h4 v-if="content.type === 'subtitle'" class="">
                {{ content.content }}
              </h4>
              <ol v-if="content.type === 'list'" class="">
                <li
                  v-for="(listItem, listIdx) in content.content"
                  :key="listIdx"
                  v-html="listItem"
                ></li>
              </ol>
            </div>
          </template>
        </article>
      </template>
      <template v-else>Ничего не найдено</template>
    </div>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: 'HoReCa - о нас',
});

const route = useRoute();
const { data } = await useAsyncData('term', () =>
  $fetch('/api/term', { query: { search: route.query.search } }),
);
</script>

<style lang="scss" scoped>
.page {
  &__section {
    margin-top: 98px;
  }
}
.found-term {
  max-width: 800px;
  h1 {
    margin-bottom: 75px;
  }
  h4 {
    margin-bottom: 28px;
  }
  p,
  ol {
    margin-bottom: 28px;
    line-height: 1.73;
  }
  ol {
    margin-left: 1rem;
  }

  &::v-deep(a) {
    color: var(--title-color);
    text-decoration: underline;
    text-decoration-skip-ink: none;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
