import { ref } from "vue"
import { defineStore } from "pinia"
import type { SkinInstance } from "@/data/skins"

export const useInventoryStore = defineStore(
  "inventoryStore",
  () => {
    const skins = ref<SkinInstance[]>([])
    return { skins }
  },
  {
    persist: true,
  }
)
