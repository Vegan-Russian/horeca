<template>
  <div class="sheet">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  padding?: string;
  mdPadding?: string;
  smPadding?: string;
  radius?: string;
}
withDefaults(defineProps<Props>(), {
  padding: "40px",
  mdPadding: "",
  smPadding: "",
  radius: "",
});
</script>

<style lang="scss" scoped>
.sheet {
  padding: v-bind(padding);
  border-radius: v-bind(radius);
  border: 2px solid var(--text-color);
}
</style>
