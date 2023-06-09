<template>
  <div class="mt-10 flex w-full flex-col items-center">
    <div class="text-3xl font-bold text-gray-100">Unlock Container</div>
    <div class="text-2xl text-gray-200">Unlock {{ container?.name }}</div>
    <img class="w-3/12" :src="container?.image" />
  </div>
  <div
    class="m-3 grid grid-cols-6 gap-3 gap-y-10 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10"
  >
    <div v-for="i in container?.contains" class="flex flex-col">
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
    <div v-if="container?.containsRare.length! > 0" class="flex flex-col">
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
  <div class="flex w-[90vw] justify-center">
    <button
      class="rounded-md bg-[#50c153] p-3 font-bold text-white"
      @click="rollSkin"
    >
      Waste 2.35 €
    </button>
    <div class="flex flex-col" v-if="lastItem">
      <div class="flex flex-row">
        <div
          :class="lastItem.template.rarity.toLowerCase().replace(' ', '')"
          class="h-28 w-2"
        ></div>
        <div
          class="flex h-28 w-44 items-center justify-center bg-gradient-to-b from-gray-500 to-gray-200"
        >
          <img class="h-24" :src="lastItem.template.image" />
        </div>
      </div>
      <div class="my-1 text-sm font-bold text-gray-100">
        {{ lastItem.template.weaponName }}
      </div>
      <div class="text-xs text-gray-200">{{ lastItem.template.pattern }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useTemplateStore } from "@/stores/templateStore"
import { Rarity } from "@/data/enums/rarity"
import type { SkinInstance, SkinTemplate } from "@/data/skins"
import { useInventoryStore } from "@/stores/inventoryStore"
import { ref } from "vue"

const { inventory } = useInventoryStore()
const { containers } = useTemplateStore()
const container = containers.find((c) => c.id === useRoute().params.caseName)

// const chances = [79.923, 15.985, 3.197, 0.639, 0.256]
const chances = [20, 20, 20, 20, 20]
const lastItem = ref<SkinInstance>()

function rollRarity() {
  const random = Math.random() * 100
  let sum = 0
  for (let i = 0; i < chances.length; i++) {
    sum += chances[i]
    if (random <= sum) {
      return i
    }
  }
}

function rollSkin() {
  const index = rollRarity()
  let possibleItems: SkinTemplate[] = []
  if (index === 0) {
    possibleItems = container?.contains.filter((i) => i.rarity === Rarity.BLUE)!
  } else if (index === 1) {
    possibleItems = container?.contains.filter(
      (i) => i.rarity === Rarity.PURPLE
    )!
  } else if (index === 2) {
    possibleItems = container?.contains.filter((i) => i.rarity === Rarity.PINK)!
  } else if (index === 3) {
    possibleItems = container?.contains.filter((i) => i.rarity === Rarity.RED)!
  } else if (index === 4) {
    possibleItems = container?.containsRare!
  }
  const aquiredSkin =
    possibleItems[Math.floor(Math.random() * possibleItems.length)]
  const instance: SkinInstance = {
    template: aquiredSkin,
    float:
      Math.random() * (aquiredSkin.maxFloat - aquiredSkin.minFloat) +
      aquiredSkin.minFloat,
    statTrak: container?.containsRare.length! > 0 ? Math.random() < 0.1 : false,
    price: 0,
  }
  lastItem.value = instance
  inventory.push(instance)
}
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
.rareSpecialItem {
  background-color: gold;
}
</style>
