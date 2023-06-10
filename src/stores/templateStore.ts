import type { ContainerTemplate } from "@/data/container"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useTemplateStore = defineStore(
  "templateStore",
  () => {
    const containers = ref<ContainerTemplate[]>([])
    return { containers }
  },
  {
    persist: true,
  }
)
