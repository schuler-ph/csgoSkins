<template>
  <div
    class="panoramaBlur absolute left-0 top-0 mx-[10vw] my-[10vh] h-[80vh] w-[80vw]"
  >
    <div
      class="panoramaBlur2 flex h-[7vh] w-full flex-row"
      :class="
        displayItem?.template.rarity.toLowerCase().replace(' ', '') + 'Inspect'
      "
    >
      <div
        class="flex h-full w-[75vw] items-center justify-center text-3xl font-bold tracking-widest text-white"
      >
        {{
          (displayItem?.statTrak ? "StatTrak™ " : "") +
          displayItem?.template.weaponName +
          " | " +
          displayItem?.template.pattern
        }}
      </div>
      <button
        class="panoramaBlur2 flex h-full w-[5vw] items-center justify-center"
        @click="deleteDisplayItem!"
      >
        <img src="@/assets/ui/close.svg" class="w-[3vw]" />
      </button>
    </div>
    <div
      class="flex h-[73vh] w-full justify-center bg-gradient-to-t from-transparent"
      :class="
        displayItem?.template.rarity.toLowerCase().replace(' ', '') + 'Gradient'
      "
    >
      <img :src="displayItem?.template.image" class="h-full" />
      <div
        class="panoramaBlur absolute bottom-5 rounded-xl px-3 py-2 text-2xl text-white"
      >
        {{ floatToGrade(displayItem?.float) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { floatToGrade } from "@/helper/floatHelper"

defineProps({
  displayItem: {
    type: Object,
    required: true,
  },
  deleteDisplayItem: {
    type: Function,
    required: true,
  },
})
</script>

<style scoped></style>
