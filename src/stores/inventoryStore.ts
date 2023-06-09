import { ref } from "vue"
import { defineStore } from "pinia"
import type { SkinInstance } from "@/data/skins"

export const useInventoryStore = defineStore(
  "inventoryStore",
  () => {
    const inventory = ref<SkinInstance[]>([])
    return { inventory }
  },
  {
    persist: true,
  }
)
