<template>
  <form ref="form" class="search" @submit.prevent="searchTerm">
    <div v-html="LinkMagnifier"></div>
    <input
      v-model="localValue"
      type="text"
      :placeholder="placeholder"
      class="search__field"
      @focus="isFocused = true"
    />
    <the-button
      type="submit"
      small
      class="search__btn"
      :disabled="localValue.length === 0 && isRendered"
      >Найти</the-button
    >
    <transition name="list">
      <ul v-show="suggested.length && isFocused" class="search__options">
        <li v-for="(option, idx) in suggested" :key="idx">
          <button
            type="button"
            class="search__choose-option-btn"
            @click="emit('choose', option)"
          >
            {{ option.title }}
          </button>
        </li>
      </ul>
    </transition>
  </form>
</template>
<script lang="ts" setup>
import LinkMagnifier from '~/assets/images/magnifier.svg?raw';
import { onClickOutside } from '@vueuse/core';
withDefaults(
  defineProps<{
    placeholder?: string;
    suggested: { value: string; title: string }[];
  }>(),
  {
    placeholder: 'Поиск по ингредиентам',
  },
);

const form = ref<HTMLElement | null>(null);

onClickOutside(form, () => {
  isFocused.value = false;
  emit('blur');
});

const localValue = ref('');
const isFocused = ref(false);

const emit = defineEmits(['search', 'choose', 'blur']);

const searchTerm = () => {
  emit('search', localValue.value);
  isFocused.value = true;
};

const isRendered = ref(false);

onMounted(() => {
  isRendered.value = true;
});
</script>

<style lang="scss" scoped>
.search {
  position: relative;
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

  &__options {
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(20px);
    border: 1.5px solid #000000;
    width: 100%;
    list-style-type: none;
    z-index: 10;
    max-height: 352px;
    overflow-y: auto;
    background-color: #fff4cd;

    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 6px;
      margin-right: 2px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fffdeb;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--title-color);
      border-radius: 2px;
    }
  }

  li + li {
    border-top: 1.5px solid #000000;
  }

  &__choose-option-btn {
    padding: 26px 38px;
    font-size: 30px;
    text-transform: background-color 0.3 ease;
    width: 100%;
    text-align: left;
    background-color: #fff4cd;

    &:hover {
      background-color: darken(#fff4cd, 10);
    }
  }

  @include media('xxs') {
    height: 58px;
    border-radius: 8px;
    padding: 10px 16px;
    gap: 13px;
    font-size: 12px;

    &:deep(svg) {
      height: 28px;
      width: auto;
      display: block;
      rect {
        fill: #642400;
      }
      circle {
        stroke: #642400;
      }
    }
    &__btn {
      padding-inline: 13px;
      border-radius: 6px;
    }

    &__field {
      flex-shrink: 1;
      min-width: 140px;
    }

    &__choose-option-btn {
      padding: 8px 14px;
      font-size: 16px;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(20px);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
