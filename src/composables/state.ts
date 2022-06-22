import type { Timezone } from '~/type'

export const zones = ref<Timezone[]>([])

export function addToTimezone(timezone: Timezone) {
  zones.value.push(timezone)
}
