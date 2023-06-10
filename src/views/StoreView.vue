<template>
  <div>
    <button @click="grabContainers">Pull up</button>
    <button @click="deleteContainer">Delete all</button>
    <div
      class="xs:grid-cols-5 grid grid-cols-4 gap-10 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8"
    >
      <RouterLink :to="'/store/' + c.id" v-for="c in containers">
        <div>{{ c.name }}</div>
        <img :src="c.image" class="w-32" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import cases from "./cases.json"
import skins from "./skins.json"
import type { ContainerTemplate } from "@/data/container"
import { getContainerType } from "@/data/enums/containerType"
import { Rarity, getRarity } from "@/data/enums/rarity"
import type { SkinTemplate } from "@/data/skins"
import { getWeapon } from "@/data/enums/weaponName"

import { useTemplateStore } from "@/stores/templateStore"
const { containers } = useTemplateStore()

const deleteContainer = () => {
  containers.splice(0, containers.length)
  // const index = containers.findIndex((obj) => obj.id === id)
  // if (index !== -1) {
  //   containers.splice(index, 1)
  // }
}

const grabContainedItems = (currentContains: any, contains: any) => {
  const doubledItems: string[] = []
  for (const cnt in currentContains) {
    const currentItem = currentContains[cnt]
    if (doubledItems.includes(currentItem.name)) continue

    const skin = skins.filter((s) => s.name === currentItem.name)
    if (skin.length > 1) {
      doubledItems.push(currentItem.name)
      const variants: any = []
      const template: SkinTemplate = {
        id: skin[0]?.id!,
        rarity: getRarity(currentItem.rarity),
        weaponName: getWeapon(skin[0]?.weapon!),
        maxFloat: skin[0]?.max_float!,
        minFloat: skin[0]?.min_float!,
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
          name: skin[s]?.name!,
          paintIndex: skin[s]?.paint_index!,
          pattern: skin[s]?.pattern!,
          image: skin[s]?.image!,
          variants: [],
        }

        switch (skin[s]?.paint_index!) {
          case "415":
            variant.name = variant.name + " (Ruby)"
            break
          case "416":
            variant.name = variant.name + " (Sapphire)"
            break
          case "417":
            variant.name = variant.name + " (Blackpearl)"
            break
          case "418":
            variant.name = variant.name + " (Phase 1)"
            break
          case "419":
            variant.name = variant.name + " (Phase 2)"
            break
          case "420":
            variant.name = variant.name + " (Phase 3)"
            break
          case "421":
            variant.name = variant.name + " (Phase 4)"
            break
        }

        variants.push(variant)
      }
      template.variants = variants
      contains.push(template)
    } else {
      for (const s in skin) {
        const template: SkinTemplate = {
          id: skin[s]?.id!,
          rarity: getRarity(currentItem.rarity),
          weaponName: getWeapon(skin[s]?.weapon!),
          maxFloat: skin[s]?.max_float!,
          minFloat: skin[s]?.min_float!,
          name: skin[s]?.name!,
          paintIndex: skin[s]?.paint_index!,
          pattern: skin[s]?.pattern!,
          image: skin[s]?.image!,
          variants: [],
        }
        contains.push(template)
      }
    }
  }
}

const grabContainers = () => {
  for (let i = 0; i < cases.length; i++) {
    // if (cases[i].id !== "crate-4061") continue
    if (cases[i].type !== "Case") continue

    const currentContainer = cases[i]
    const container: ContainerTemplate = {
      id: currentContainer.id,
      name: currentContainer.name,
      image: currentContainer.image,
      description: currentContainer.description,
      type: getContainerType(currentContainer.type),
      firstSale: currentContainer.first_sale_date,
      contains: [],
      containsRare: [],
    }

    grabContainedItems(currentContainer.contains, container.contains)
    grabContainedItems(currentContainer.contains_rare, container.containsRare)

    containers.push(container)
  }
}
</script>

<style scoped></style>
