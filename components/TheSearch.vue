<template>
  <form class="search" @submit.prevent="searchTerm">
    <link-magnifier class="search__icon" />
    <input
      v-model="localValue"
      type="text"
      :placeholder="placeholder"
      class="search__field"
    />
    <the-button type="submit" small class="search__btn">Найти</the-button>
  </form>
</template>
<script lang="ts" setup>
import LinkMagnifier from '~/assets/images/magnifier.svg?component';
withDefaults(defineProps<{ placeholder?: string }>(), {
  placeholder: 'Поиск по ингредиентам',
});

const localValue = ref('');

const emit = defineEmits(['search']);

const searchTerm = () => {
  emit('search', localValue.value);
};
</script>

<style lang="scss" scoped>
.search {
  background-color: #fff;
  border: 1.5px solid #000000;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 16px 19px 16px 30px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }

  &__field {
    outline: none;
    border: none;
    flex-grow: 1;
    font-size: inherit;
  }
}
</style>
