<template>
  <section class="guide-search">
    <h1 v-html="title"></h1>
    <p v-html="description"></p>
    <the-search
      class="guide-search__search"
      :suggested="foundItems"
      @search="handleSearch"
      @choose="handleChoose"
    ></the-search>
    <section v-if="inNothingFound" class="empty">
      <h3 class="empty__title">Нет результатов по вашему запросу</h3>
      <p>Измените запрос или поищите вручную в справочнике.</p>
    </section>
  </section>
</template>
<script lang="ts" setup>
import { SuggestOption } from '~~/types/index';

defineProps<{ title: string; description: string }>();

const foundItems = ref<SuggestOption[]>([]);

const inNothingFound = ref(false);

const handleSearch = async (text: string) => {
  const { data } = await useAsyncData('terms', () =>
    $fetch('/api/terms', { query: { search: text } }),
  );

  if (data.value?.error) return;
  if (!data.value?.response) return;
  foundItems.value = data.value.response.map((item) => ({
    value: item.id,
    title: item.term,
  }));

  inNothingFound.value = !Boolean(data.value.response.length);
};

const router = useRouter();

const handleChoose = (option: SuggestOption) => {
  router.push('/term/' + option.value);
};
</script>

<style lang="scss" scoped>
.guide-search {
  &__search {
    max-width: 930px;
    margin-top: 100px;
  }
}

.empty {
  padding: 90px 110px;
  background: rgba(255, 255, 255, 0.45);
  border: 1.5px solid #000000;
  border-radius: 30px;
  margin-top: 100px;

  &__title {
    margin-bottom: 40px;
    font-size: 40px;
    color: var(--title-color);
  }
}
</style>
