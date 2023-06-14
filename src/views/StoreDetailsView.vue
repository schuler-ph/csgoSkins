<template>
  <div class="mt-8 flex w-full flex-col items-center">
    <div class="text-3xl font-bold text-gray-100">Unlock Container</div>
    <div class="text-2xl text-gray-200">Unlock {{ container?.name }}</div>
    <img class="w-3/12" :src="container?.image" />
  </div>
  <CaseContainedItems
    :contains="container?.contains"
    :container-contains-rare="container?.containsRare.length! > 0"
  />
  <div v-if="container?.containsRare.length! > 0">
    <button
      @click="switchShowRareItems"
      class="m-5 rounded-full border-2 border-dashed border-[black] bg-[#ffd9009b] p-1 text-[black]"
    >
      Show Rare Special Items
    </button>
    <CaseContainedItemsRare
      v-if="showRareItems"
      :contains="container?.containsRare"
    />
  </div>
  <div class="flex justify-center">
    <button
      class="fixed bottom-5 z-50 rounded-md bg-[#50c153] p-3 font-bold text-white"
      @click="startAnimation"
    >
      Waste $ 2.35
    </button>
  </div>
  <div
    class="openingAnimation panoramaBlur left-0 top-0 z-50 flex h-screen w-screen flex-col justify-center"
    :class="showAnimation ? 'fixed' : 'hidden'"
  >
    <div class="flex h-96 w-screen items-center bg-white/40">
      <div class="flex flex-row gap-5 overflow-hidden">
        <div
          v-for="i in demoItems"
          class="rollAnimation"
          :style="`--tw-translate-x: -${randomTranslation}vw;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`"
        >
          <div class="flex flex-col" v-if="i.index !== 4">
            <div
              class="flex h-60 w-96 items-center justify-center bg-gradient-to-b from-gray-500"
              :class="
                i.instance.template.rarity.toLowerCase().replace(' ', '') +
                'Gradient'
              "
            >
              <img class="h-48" :src="i.instance.template.image" />
              <img
                v-if="i.instance.statTrak"
                src="@/assets/ui/Stattrak.webp"
                class="absolute bottom-20 right-16 h-14"
              />
            </div>
            <div
              :class="i.instance.template.rarity.toLowerCase().replace(' ', '')"
              class="h-2 w-96"
            ></div>
          </div>
          <div v-else class="flex flex-col">
            <div
              class="rareSpecialItemGradient flex h-60 w-96 items-center justify-center bg-gradient-to-b from-gray-500"
            >
              <img class="h-48" src="@/assets/ui/rare_item.webp" />
            </div>
            <div class="rareSpecialItem h-2 w-96"></div>
          </div>
        </div>
      </div>
      <div class="absolute flex w-screen justify-center">
        <div class="h-96 w-[0.125rem] bg-yellow-400"></div>
      </div>
    </div>
  </div>
  <ItemPreview
    v-if="lastItem"
    :display-item="lastItem!"
    @deleteitem="deleteLastItem"
  />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useTemplateStore } from "@/stores/templateStore"
import { Rarity } from "@/data/enums/rarity"
import type { SkinInstance, SkinTemplate } from "@/data/skins"
import { useInventoryStore } from "@/stores/inventoryStore"
import { ref } from "vue"
import ItemPreview from "@/components/ItemPreview.vue"
import CaseContainedItemsRare from "@/components/CaseContainedItemsRare.vue"
import CaseContainedItems from "@/components/CaseContainedItems.vue"
import { sound } from "@/helper/soundHelper"

const showAnimation = ref(false)
const startTranslation = ref(false)
const demoItems = ref<{ index: number; instance: SkinInstance }[]>([])

const { inventory } = useInventoryStore()
const { containers } = useTemplateStore()
const container = containers.find((c) => c.id === useRoute().params.caseName)
const randomTranslation = ref()
const showRareItems = ref(false)

const chances = [79.923, 15.985, 3.197, 0.639, 0.256]
// const chances = [0, 0, 0, 0, 100]
// const chances = [0, 0, 0, 100, 0]

const lastItem = ref<SkinInstance | null>()
function deleteLastItem() {
  sound("close")
  lastItem.value = null
}

const switchShowRareItems = () => {
  if (showRareItems.value) {
    sound("close")
    showRareItems.value = false
  } else {
    sound("showKnives")
    showRareItems.value = true
  }
}

const playScrollSound = (
  repeats: number,
  curRep: number,
  interval: number,
  index: number
) => {
  sound("caseItemScroll")
  curRep++
  if (curRep < repeats) {
    setTimeout(() => {
      playScrollSound(repeats, curRep, interval, index)
    }, interval)
  } else {
    switch (index) {
      case 0:
        setTimeout(() => {
          playScrollSound(8, 0, 70, 1)
        }, 100)
        break
      case 1:
        setTimeout(() => {
          playScrollSound(5, 0, 150, 2)
        }, 150)
        break
      case 2:
        setTimeout(() => {
          playScrollSound(2, 0, 250, 3)
        }, 200)
        break
    }
  }
}

function startAnimation() {
  sound("unlockCase")
  setTimeout(() => {
    for (let i = 0; i < 55; i++) {
      const { instance, index } = rollSkin()
      demoItems.value.push({ index, instance })
    }

    showAnimation.value = true
    startTranslation.value = true

    playScrollSound(30, 0, 50, 0)

    randomTranslation.value = 0
    setTimeout(() => {
      randomTranslation.value = (Math.random() * (1001 - 981) + 981).toFixed(1)

      setTimeout(() => {
        lastItem.value = demoItems.value[49].instance
        inventory.push(lastItem.value)

        switch (demoItems.value[49].index) {
          case 0:
            sound("revealBlue")
            break
          case 1:
            sound("revealPurple")
            break
          case 2:
            sound("revealPinkRed")
            break
          case 3:
            sound("revealPinkRed")
            break
          case 4:
            sound("revealRsi")
            break
        }

        showAnimation.value = false
        demoItems.value.splice(0, demoItems.value.length)
        startTranslation.value = false
        randomTranslation.value = 0
      }, 5500)
    }, 100)
  }, 2500)
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
    statTrak: aquiredSkin.canHaveStatTrak ? Math.random() < 0.1 : false,
    price: 0,
    timestamp: new Date(),
  }
  return { instance, index }
}
</script>

<style scoped></style>
