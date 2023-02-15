<template>
  <span>{{ currentText }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{ texts: string[] }>();

let texts = ref(props.texts);

let currentIndex = 0;

const currentText = ref('');

const animate = (text: string) => {
  let i = 0;
  let interval = setInterval(() => {
    if (i < text.length) {
      currentText.value += text[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        erase(text);
      }, 1000);
    }
  }, 200);
};

const erase = (text: string) => {
  let i = text.length - 1;
  let interval = setInterval(() => {
    if (i >= 0) {
      currentText.value = currentText.value.slice(0, -1);
      i--;
    } else {
      clearInterval(interval);
      currentIndex = (currentIndex + 1) % texts.value.length;
      animate(texts.value[currentIndex]);
    }
  }, 200);
};

onMounted(() => {
  animate(props.texts[currentIndex]);
});
</script>
