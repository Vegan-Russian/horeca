<template>
  <div class="page">
    <div class="wrapper">
      <article v-for="term in terms" :key="term.id" class="term">
        {{ term.response }}
      </article>
    </div>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: 'HoReCa - о нас',
});
const { data: terms } = await useAsyncData('terms-groups', () =>
  $fetch('/api/terms-groups', { query: { id: 'zakuski' } }),
);
</script>
