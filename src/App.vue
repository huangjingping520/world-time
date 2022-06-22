<script setup lang="ts">
</script>

<template>
  <div font-mono bg-canvas bg-gray:15 h-screen>
    <NavBar />
    <div border="~ base rounded" bg-base shadow m2>
      <ActionBar />
      <TimeSchedular />
    </div>
  </div>
</template>

<style>
.dark {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
