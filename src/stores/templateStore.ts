import type { ContainerTemplate } from "@/data/container"
import type { RareCollection } from "@/data/rareCollection"
import type { SkinTemplate } from "@/data/skins"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useTemplateStore = defineStore(
  "templateStore",
  () => {
    const containers = ref<ContainerTemplate[]>([])
    const rareCollections = ref<RareCollection[]>([])

    return { containers, rareCollections }
  },
  {
    persist: true,
  }
)
