<template>
  <section class="guide-search">
    <h1 v-html="title"></h1>
    <p v-html="description"></p>
    <the-search
      class="guide-search__search"
      @search="handleSearch"
    ></the-search>
  </section>
</template>
<script lang="ts" setup>
defineProps<{ title: string; description: string }>();

const foundItems = ref();

const handleSearch = async (text: string) => {
  const { data } = await useAsyncData('terms-groups', () =>
    $fetch('/api/terms-groups', { query: { search: text } }),
  );
  foundItems.value = data;
};
</script>

<style lang="scss" scoped>
.guide-search {
  &__search {
    max-width: 930px;
    margin-top: 100px;
  }
}
</style>
