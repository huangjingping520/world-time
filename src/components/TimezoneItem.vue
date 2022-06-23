<script setup lang="ts">
import type { Timezone } from '../type'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour: 'numeric',
  minute: 'numeric'
})

const state = $computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = $computed(() => timezone.name.split('/')[1].replace(/_/g, ' '))
const offset = $computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
const time = $computed(() => formatter.format(now.value))
</script>

<template>
  <div flex gap2 py1>
    <div w-10 ma font-bold>
      {{ offset }}
    </div>
    <div flex="~ col" text-left flex-auto>
      <div text-xl>
        {{ city }}
        <sup border="~ base rounded" px1>
          {{ timezone.abbr }}
        </sup>
      </div>
      <div op50 leading-1em>
        {{ state }}
      </div>
    </div>
    <div tabular-nums>
      {{ time }}
    </div>
  </div>
</template>
