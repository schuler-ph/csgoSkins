<template>
  <div>
    <button @click="grabContainers">Pull up</button>
    <div class="grid grid-cols-8">
      <RouterLink :to="'/store/' + c.id" v-for="c in containers">
        <div>{{ c.name }}</div>
        <img :src="c.image" class="w-full" />
        <button @click="deleteContainer(c.id)"></button>
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

const deleteContainer = (id: string) => {
  const index = containers.findIndex((obj) => obj.id === id)
  if (index !== -1) {
    containers.splice(index, 1)
  }
}

const grabContainers = () => {
  for (let i = 0; i < cases.length; i++) {
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
    for (const cnt in currentContainer.contains) {
      const currentItem = currentContainer.contains[cnt]
      const skin = skins.find((s) => s.name === currentItem.name)
      const template: SkinTemplate = {
        id: currentItem.id,
        rarity: getRarity(currentItem.rarity),
        weaponName: getWeapon(skin?.weapon!),
        maxFloat: skin?.max_float!,
        minFloat: skin?.min_float!,
        name: skin?.name!,
        paintIndex: skin?.paint_index!,
        pattern: skin?.pattern!,
        image: skin?.image!,
      }
      container.contains.push(template)
    }
    for (const cntR in currentContainer.contains_rare) {
      const currentItem = currentContainer.contains_rare[cntR]
      const skin = skins.find((s) => s.name === currentItem.name)
      const template: SkinTemplate = {
        id: skin?.id!,
        rarity: Rarity.RED,
        weaponName: getWeapon(skin?.weapon!),
        maxFloat: skin?.max_float!,
        minFloat: skin?.min_float!,
        name: skin?.name!,
        paintIndex: skin?.paint_index!,
        pattern: skin?.pattern!,
        image: skin?.image!,
      }
      container.containsRare.push(template)
    }
    containers.push(container)
  }
}
</script>

<style scoped></style>
