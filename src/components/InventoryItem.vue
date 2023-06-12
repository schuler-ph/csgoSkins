<template>
  <button
    class="flex flex-col"
    @click="$emit('inspect', item)"
    @mouseenter="sound('hoverInventoryItem')"
  >
    <div class="flex flex-row">
      <div
        :class="item?.template.rarity.toLowerCase().replace(' ', '')"
        class="h-28 w-2"
      ></div>
      <div
        class="has-tooltip flex h-28 w-44 items-center justify-center bg-gradient-to-b from-gray-500 to-gray-200"
      >
        <div
          class="tooltip flex h-28 w-44 flex-col items-start bg-gradient-to-b from-gray-700 to-gray-400 p-2 text-gray-100"
        >
          <div class="text-xs">Exterior: {{ floatToGrade(item?.float) }}</div>
          <div class="text-xs">Float: {{ item?.float }}</div>
        </div>
        <img class="h-24" :src="item?.template.image" />
        <img
          v-if="item?.statTrak"
          src="@/assets/ui/Stattrak.webp"
          class="absolute h-10 translate-x-16 translate-y-7"
        />
      </div>
    </div>
    <div class="mt-1 text-sm font-bold text-gray-100">
      {{ (item?.statTrak ? "StatTrak™ " : "") + item?.template.weaponName }}
    </div>
    <div class="mb-10 text-xs text-gray-200">
      {{ item?.template.pattern }}
    </div>
  </button>
</template>

<script setup lang="ts">
import { floatToGrade } from "@/helper/floatHelper"
import { sound } from "@/helper/soundHelper"

const props = defineProps({
  item: Object,
})
</script>

<style scoped>
.mil-specgrade {
  background-color: #4b69ff;
}
.restricted {
  background-color: #8847ff;
}
.classified {
  background-color: #d32ee6;
}
.covert {
  background-color: #eb4b4b;
}
</style>
