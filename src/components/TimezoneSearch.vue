<script setup lang="ts">
import Fuse from 'fuse.js'
import { timezones } from '../composables/data'
import { addToTimezone } from '../composables/state'

const fuse = new Fuse(timezones, {
  keys: ['name']
})

const input = ref('')
const index = ref(0)
const searchResult = computed(() => {
  return fuse.search(input.value)
})
</script>

<template>
  <div>
    <input v-model="input" type="text">
    <div>
      <button v-for="i of searchResult" :key="i.refIndex" flex gap2 @click="addToTimezone(i.item)">
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>

<style>
html {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
