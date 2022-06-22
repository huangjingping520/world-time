<script setup lang="ts">
import type { Timezone } from '../type'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const state = $computed(() => timezone.name.split('/')[0])
const city = $computed(() => timezone.name.split('/')[1])
const offset = $computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
</script>

<template>
  <div flex gap2 py1>
    <div w-10 ma font-bold>
      {{ offset }}
    </div>
    <div flex="~ col" text-left flex-auto>
      <div text-xl>
        {{ city }}
      </div>
      <div op50 leading-1em>
        {{ state }}
      </div>
    </div>
  </div>
</template>
