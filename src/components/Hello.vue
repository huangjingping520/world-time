<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const upperCase = computed(() => props.name.toUpperCase())
</script>

<template>
  <div class="text-blue font-sans text-3xl">Hello {{ upperCase }}</div>
  <div text="red-300 3xl" font-mono>Hello {{ upperCase }}</div>
  <div i-carbon-bee text="5xl blue"></div>
</template>
