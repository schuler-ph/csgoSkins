<template>
  <div class="panoramaBlur2 flex flex-col text-gray-100">
    <div
      class="panoramaBorder flex h-[5vw] w-[90vw] items-center border-b pl-[2vw]"
    >
      <div class="text-2xl font-bold tracking-widest">INVENTORY</div>
    </div>
    <div class="panoramaBorder border-b">
      <div>
        <select
          v-model="filterRarity"
          class="my-2 ml-5 h-12 w-80 rounded-md bg-black/10 p-2 text-lg tracking-wide"
        >
          <option class="bg-gray-500" :value="undefined">EVERYTHING</option>
          <option class="bg-gray-500" :value="Rarity.RED">Covert</option>
          <option class="bg-gray-500" :value="Rarity.PINK">Classified</option>
          <option class="bg-gray-500" :value="Rarity.PURPLE">Restricted</option>
          <option class="bg-gray-500" :value="Rarity.BLUE">
            Mil-Spec Grade
          </option>
        </select>
      </div>
    </div>
    <div class="panoramaBorder flex flex-row border-b">
      <button @click="clearInventory">Clear Inventory</button>
    </div>
  </div>

  <div
    class="panoramaBlur panoramaBorder grid grid-cols-4 gap-1 border-l border-t pt-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 xl:px-20"
  >
    <InventoryItem
      v-for="i in inventoryFiltered(filterRarity)"
      :item="i"
      @inspect="setInspectItem"
    />
  </div>

  <ItemPreview
    v-if="inspectItem"
    :display-item="inspectItem!"
    @deleteitem="deleteInspectItem"
  />
</template>

<script setup lang="ts">
import InventoryItem from "@/components/InventoryItem.vue"
import ItemPreview from "@/components/ItemPreview.vue"
import { Rarity } from "@/data/enums/rarity"
import { type SkinInstance } from "@/data/skins"
import { useInventoryStore } from "@/stores/inventoryStore"
import { ref } from "vue"
import inspectImport from "@/assets/sounds/inspect_weapon_01.wav"

const filterRarity = ref<Rarity | undefined>(undefined)
const inspectItem = ref<SkinInstance>()
const setInspectItem = (item: SkinInstance) => {
  inspectItem.value = item
  const inspectAudio = new Audio(inspectImport)
  inspectAudio.volume = 0.1
  inspectAudio.play()
}
const deleteInspectItem = () => {
  inspectItem.value = undefined
}

const { inventory } = useInventoryStore()
const inventoryFiltered = (rarity: Rarity | undefined) => {
  if (rarity !== undefined)
    return inventory.filter((a) => a.template.rarity === rarity)
  else return inventory
}

const clearInventory = () => {
  inventory.splice(0, inventory.length)
}
</script>

<style scoped></style>
