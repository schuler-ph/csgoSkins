<template>
  <div
    class="m-3 mb-32 grid grid-cols-6 gap-3 gap-y-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10"
  >
    <div v-for="i in contains" class="flex flex-col">
      <div class="flex flex-row">
        <div
          :class="i.rarity.toLowerCase().replace(' ', '')"
          class="h-28 w-2"
        ></div>
        <div
          class="flex h-28 w-44 items-center justify-center bg-gradient-to-b from-gray-500 to-gray-200"
        >
          <img class="h-24" :src="i.image" />
        </div>
      </div>
      <div class="my-1 text-sm font-bold text-gray-100">
        {{ i.weaponName }}
      </div>
      <div class="text-xs text-gray-200">{{ i.pattern }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type SkinTemplate } from "@/data/skins"

const props = defineProps({
  contains: Array<SkinTemplate>,
})
</script>

<style scoped></style>
