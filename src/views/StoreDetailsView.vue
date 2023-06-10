<template>
  <div class="mt-8 flex w-full flex-col items-center">
    <div class="text-3xl font-bold text-gray-100">Unlock Container</div>
    <div class="text-2xl text-gray-200">Unlock {{ container?.name }}</div>
    <img class="w-3/12" :src="container?.image" />
  </div>
  <div
    class="mx-3 grid grid-cols-6 gap-3 gap-y-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10"
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
  <div class="mt-20 flex w-[90vw] justify-center">
    <button
      class="mt-5 rounded-md bg-[#50c153] p-3 font-bold text-white"
      @click="wasteMoney"
    >
      Waste $ 2.35
    </button>
  </div>
  <div
    class="openingAnimation panoramaBlur absolute left-0 top-0 z-50 flex h-screen w-screen flex-col justify-center"
    :class="showAnimation ? 'block' : 'hidden'"
  >
    <div class="flex h-40 w-screen items-center bg-white/40">
      <div class="flex flex-row gap-5 overflow-hidden">
        <div
          v-for="i in demoItems"
          class="rollAnimation"
          :style="`--tw-translate-x: -${randomTranslation}vw;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`"
        >
          <div class="flex flex-col" v-if="i.index !== 4">
            <div
              class="flex h-28 w-44 items-center justify-center bg-gradient-to-b from-gray-500"
              :class="
                i.instance.template.rarity.toLowerCase().replace(' ', '') +
                'Gradient'
              "
            >
              <img class="h-24" :src="i.instance.template.image" />
            </div>
            <div
              :class="i.instance.template.rarity.toLowerCase().replace(' ', '')"
              class="h-2 w-44"
            ></div>
          </div>
          <div v-else class="flex flex-col">
            <div
              class="rareSpecialItemGradient flex h-28 w-44 items-center justify-center bg-gradient-to-b from-gray-500"
            >
              <img class="h-24" src="@/assets/ui/rare_item.webp" />
            </div>
            <div class="rareSpecialItem h-2 w-44"></div>
          </div>
        </div>
      </div>
      <div class="absolute flex w-screen justify-center">
        <div class="h-40 w-[0.125rem] bg-yellow-400"></div>
      </div>
    </div>
  </div>
  <ItemPreview
    v-if="lastItem"
    :display-item="lastItem!"
    :delete-display-item="deleteLastItem"
  />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useTemplateStore } from "@/stores/templateStore"
import { Rarity } from "@/data/enums/rarity"
import type { SkinInstance, SkinTemplate } from "@/data/skins"
import { useInventoryStore } from "@/stores/inventoryStore"
import { ref } from "vue"
import { floatToGrade } from "@/helper/floatHelper"
import ItemPreview from "@/components/ItemPreview.vue"

const showAnimation = ref(false)
const startTranslation = ref(false)
const demoItems = ref<{ index: number; instance: SkinInstance }[]>([])

const { inventory } = useInventoryStore()
const { containers } = useTemplateStore()
const container = containers.find((c) => c.id === useRoute().params.caseName)
const randomTranslation = ref()

const chances = [79.923, 15.985, 3.197, 0.639, 0.256]
// const chances = [0, 0, 0, 0, 100]
// const chances = [0, 0, 0, 100, 0]

const lastItem = ref<SkinInstance>()
function deleteLastItem() {
  lastItem.value = undefined
}

function startAnimation() {
  startTranslation.value = true
  randomTranslation.value = 0
  setTimeout(() => {
    randomTranslation.value = (
      Math.random() * (1000.4 - 991.3) +
      991.3
    ).toFixed(1)
    setTimeout(() => {
      lastItem.value = demoItems.value[102].instance
      inventory.push(lastItem.value)
      stopAnimation()
    }, 5500)
  }, 10)
}

function openAnimation() {
  for (let i = 0; i < 110; i++) {
    const { instance, index } = rollSkin()
    demoItems.value.push({ index, instance })
  }
  // const tigertott = {
  //   template: {
  //     id: "skin-32769636",
  //     rarity: Rarity.RED,
  //     weaponName: WeaponName.KN_BAYONET,
  //     maxFloat: 0.08,
  //     minFloat: 0,
  //     name: "Bayonet | Tiger Tooth",
  //     paintIndex: "409",
  //     pattern: "Tiger Tooth",
  //     image:
  //       "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_an_tiger_orange_light_large.780ff3a58d01a73d4d7d755adbdca46483d13faf.png",
  //     variants: [],
  //   },
  //   float: 0.056042085019103106,
  //   statTrak: true,
  //   price: 0,
  // }
  // demoItems.value[102].instance = tigertott
  // demoItems.value[102].index = 4
  showAnimation.value = true
}

function stopAnimation() {
  showAnimation.value = false
  demoItems.value.splice(0, demoItems.value.length)
  startTranslation.value = false
  randomTranslation.value = 0
}

function rollRarity() {
  const random = Math.random() * 100
  let sum = 0
  for (let i = 0; i < chances.length; i++) {
    sum += chances[i]
    if (random <= sum) {
      return i
    }
  }
  return 0
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
  let aquiredSkin =
    possibleItems[Math.floor(Math.random() * possibleItems.length)]

  if (aquiredSkin.variants.length > 0) {
    aquiredSkin =
      aquiredSkin.variants[
        Math.floor(Math.random() * aquiredSkin.variants.length)
      ]
  }

  const instance: SkinInstance = {
    template: aquiredSkin,
    float:
      Math.random() * (aquiredSkin.maxFloat - aquiredSkin.minFloat) +
      aquiredSkin.minFloat,
    statTrak: container?.containsRare.length! > 0 ? Math.random() < 0.1 : false,
    price: 0,
  }
  return { instance, index }
}

function wasteMoney() {
  openAnimation()
  startAnimation()
}
</script>

<style scoped></style>
