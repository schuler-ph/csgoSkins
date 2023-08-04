<template>
  <div>
    <button class="panoramaButton" @click="grabContainers">Fetch cases</button>
    <button class="panoramaButton" @click="deleteContainer">
      Delete cases
    </button>
    <button class="panoramaButton" @click="getUniqueRarePool">
      Get unique rare special item pools
    </button>
    <button class="panoramaButton" @click="deleteRaresFromCases">
      Delete redundant rare specials from cases
    </button>
    <div
      class="xs:grid-cols-5 grid w-[89vw] grid-cols-4 gap-10 p-[1vw] sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8"
    >
      <RouterLink :to="'/store/' + c.id" v-for="c in containers">
        <div
          @click="sound('caseDrop')"
          class="panoramaBlur2 panoramaBorder flex min-h-[200px] flex-col justify-center rounded-lg border-2 p-3"
        >
          <img :src="c.image" />
          <div class="text-center text-white">{{ c.name }}</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import casesFromApi from "./cases.json"
import skinsFromApi from "./skins.json"
import type { ContainerTemplate } from "@/data/container"
import { getContainerType } from "@/data/enums/containerType"
import { Rarity, getRarity } from "@/data/enums/rarity"
import type { SkinTemplate } from "@/data/skins"
import { getWeapon } from "@/data/enums/weaponName"
import { useTemplateStore } from "@/stores/templateStore"
import { sound } from "@/helper/soundHelper"

import cases from "@/data/templates/cases.json"
import rares from "@/data/templates/rares.json"
import type { RareCollection } from "@/data/rareCollection"

const { containers, rareCollections } = useTemplateStore()

const deleteRaresFromCases = () => {
  containers.forEach((c) => c.containsRare.splice(0, c.containsRare.length))
}

const getUniqueRarePool = () => {
  let alreadyContained = false
  let index: number | null = null

  containers.forEach((c) => {
    rareCollections.forEach((uc) => {
      if (JSON.stringify(uc.collection) === JSON.stringify(c.containsRare)) {
        alreadyContained = true
        index = uc.index
      }
    })

    if (!alreadyContained) {
      c.containsRareIndex = rareCollections.length
      rareCollections.push({
        index: rareCollections.length,
        collection: c.containsRare,
      })
    } else {
      c.containsRareIndex = index
    }
    alreadyContained = false
    index = null
  })
}

const deleteContainer = () => {
  containers.splice(0, containers.length)
  rareCollections.splice(0, rareCollections.length)
}

const grabContainedItems = (currentContains: any, contains: any) => {
  const doubledItems: string[] = []

  for (const cnt in currentContains) {
    const currentItem = currentContains[cnt]
    if (doubledItems.includes(currentItem.name)) continue

    const skin = skinsFromApi.filter((s) => s.name === currentItem.name)
    if (skin.length > 1) {
      // multiple items with same name found
      doubledItems.push(currentItem.name)
      const variants: any = []
      const template: SkinTemplate = {
        id: skin[0]?.id!,
        rarity: getRarity(currentItem.rarity),
        weaponName: getWeapon(skin[0]?.weapon!),
        maxFloat: skin[0]?.max_float!,
        minFloat: skin[0]?.min_float!,
        canHaveStatTrak: skin[0]?.stattrak,
        name: skin[0]?.name!,
        paintIndex: skin[0]?.paint_index!,
        pattern: skin[0]?.pattern!,
        image: skin[0]?.image!,
        variants: [],
      }
      for (const s in skin) {
        const variant: SkinTemplate = {
          id: skin[s]?.id!,
          rarity: getRarity(currentItem.rarity),
          weaponName: getWeapon(skin[s]?.weapon!),
          maxFloat: skin[s]?.max_float!,
          minFloat: skin[s]?.min_float!,
          canHaveStatTrak: skin[s]?.stattrak,
          name: skin[s]?.name!,
          paintIndex: skin[s]?.paint_index!,
          pattern: skin[s]?.pattern!,
          image: skin[s]?.image!,
          variants: [],
        }

        switch (skin[s]?.paint_index!) {
          case "415":
            variant.name = variant.name + " (Ruby) "
            break
          case "416":
            variant.name = variant.name + " (Sapphire) "
            break
          case "417":
            variant.name = variant.name + " (Blackpearl) "
            break
          case "418":
            variant.name = variant.name + " (Phase 1) "
            break
          case "419":
            variant.name = variant.name + " (Phase 2) "
            break
          case "420":
            variant.name = variant.name + " (Phase 3) "
            break
          case "421":
            variant.name = variant.name + " (Phase 4) "
            break
          case "568":
            variant.name = variant.name + " (Emerald) "
            break
          case "569":
            variant.name = variant.name + " (Phase 1) "
            break
          case "570":
            variant.name = variant.name + " (Phase 2) "
            break
          case "571":
            variant.name = variant.name + " (Phase 3) "
            break
          case "572":
            variant.name = variant.name + " (Phase 4) "
            break
        }

        if (currentItem.rarity === "Extraordinary") {
          variant.rarity = Rarity.RED
        }

        variants.push(variant)
      }
      template.variants = variants

      if (currentItem.rarity === "Extraordinary") {
        template.rarity = Rarity.RED
      }

      contains.push(template)
    } else {
      for (const s in skin) {
        const template: SkinTemplate = {
          id: skin[s]?.id!,
          rarity: getRarity(currentItem.rarity),
          weaponName: getWeapon(skin[s]?.weapon!),
          maxFloat: skin[s]?.max_float!,
          minFloat: skin[s]?.min_float!,
          canHaveStatTrak: skin[s]?.stattrak,
          name: skin[s]?.name!,
          paintIndex: skin[s]?.paint_index!,
          pattern: skin[s]?.pattern!,
          image: skin[s]?.image!,
          variants: [],
        }

        if (currentItem.rarity === "Extraordinary") {
          template.rarity = Rarity.RED
        }

        contains.push(template)
      }
    }
  }
}

const grabContainers = () => {
  cases.forEach((c) => {
    containers.push(c as ContainerTemplate)
  })

  rares.forEach((r) => {
    rareCollections.push(r as RareCollection)
  })

  // for (let i = 0; i < cases.length; i++) {
  //   // if (cases[i].id !== "crate-4061") continue
  //   if (cases[i].type !== "Case") continue
  //   const currentContainer = cases[i]
  //   const container: ContainerTemplate = {
  //     id: currentContainer.id,
  //     name: currentContainer.name,
  //     image: currentContainer.image,
  //     type: getContainerType(currentContainer.type),
  //     firstSale: currentContainer.first_sale_date,
  //     contains: [],
  //     containsRare: [],
  //     containsRareIndex: null,
  //   }
  //   grabContainedItems(currentContainer.contains, container.contains)
  //   grabContainedItems(currentContainer.contains_rare, container.containsRare)
  //   containers.push(container)
  // }
}
</script>

<style scoped></style>
