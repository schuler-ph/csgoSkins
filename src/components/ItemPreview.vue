<template>
  <div
    class="panoramaBlur fixed left-0 top-0 z-10 mx-[10vw] my-[10vh] h-[80vh] w-[80vw]"
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
          displayItem?.template.name +
          " (" +
          floatToGrade(displayItem?.float) +
          ")"
        }}
      </div>
      <button
        class="panoramaBlur2 flex h-full w-[5vw] items-center justify-center"
        @click="$emit('deleteitem')"
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
      <img :src="displayItem?.template.image" class="z-30 h-full" />
      <!-- <div
        class="panoramaBlur absolute bottom-5 rounded-xl px-3 py-2 text-2xl text-white"
      >
        {{  }}
      </div> -->
      <img
        v-if="displayItem?.statTrak"
        src="@/assets/ui/Stattrak.webp"
        class="absolute bottom-1/4 right-1/3 z-40"
      />
      <img
        v-if="displayItem?.template.rarity === Rarity.BLUE"
        src="@/assets/ui/decagram/decagramBlue.svg"
        class="rotating absolute z-20 h-[75vh]"
      />
      <img
        v-if="displayItem?.template.rarity === Rarity.PURPLE"
        src="@/assets/ui/decagram/decagramPurple.svg"
        class="rotating absolute z-20 h-[75vh]"
      />
      <img
        v-if="displayItem?.template.rarity === Rarity.PINK"
        src="@/assets/ui/decagram/decagramPink.svg"
        class="rotating absolute z-20 h-[75vh]"
      />
      <img
        v-if="displayItem?.template.rarity === Rarity.RED"
        src="@/assets/ui/decagram/decagramRed.svg"
        class="rotating absolute z-20 h-[75vh]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Rarity } from "@/data/enums/rarity"
import type { SkinInstance } from "@/data/skins"
import { floatToGrade } from "@/helper/floatHelper"

interface Props {
  displayItem: SkinInstance
}

const props = defineProps<Props>()
</script>

<style scoped></style>
