<template>
  <button type="button" :class="classes">
    <slot />
  </button>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ small?: boolean; bottomRounded?: boolean; width?: string }>(),
  {
    width: 'auto',
  },
);

const classes = computed(() => ({
  button: true,
  'button--small': props.small,
  'button--bottom-rounded': props.bottomRounded,
}));
</script>

<style lang="scss" scoped>
.button {
  height: 85px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 9px;
  padding: 20px;
  white-space: nowrap;
  width: v-bind(width);
  font-size: 30px;
  background-color: #b87c5a;
  transition: background-color 0.3s ease;
  font-weight: 600;
  &:hover {
    background-color: #642400;
  }
  &--small {
    height: 77px;
    font-size: 28px;
  }

  &--bottom-rounded {
    border-radius: 0 0 9px 9px;
  }

  @include media('sm') {
    font-size: 24px;
    height: 77px;

    &--small {
      font-size: 20px;
      height: 70px;
    }
  }
  @include media('xxs') {
    font-size: 18px;
    height: 55px;

    &--small {
      height: 39px;
    }
  }
}
</style>
