<template>
  <div
    class="mx-3 grid grid-cols-6 gap-3 gap-y-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10"
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
      <div class="my-1 text-sm font-bold text-gray-100">{{ i.weaponName }}</div>
      <div class="text-xs text-gray-200">{{ i.pattern }}</div>
    </div>
    <div v-if="containerContainsRare" class="flex flex-col">
      <div class="flex flex-row">
        <div class="rareSpecialItem h-28 w-2"></div>
        <div
          class="flex h-28 w-44 items-center justify-center bg-gradient-to-b from-gray-500 to-gray-200"
        >
          <img class="h-24" src="@/assets/ui/rare_item.webp" />
        </div>
      </div>
      <div class="my-1 text-sm text-gray-100">★ Rare Special Item ★</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type SkinTemplate } from "@/data/skins"

const props = defineProps({
  contains: Array<SkinTemplate>,
  containerContainsRare: Boolean,
})
</script>

<style scoped></style>
