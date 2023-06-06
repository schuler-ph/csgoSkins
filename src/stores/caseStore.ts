import { ref } from "vue"
import { defineStore } from "pinia"
import type { Case } from "@/data/case"

export const useCaseStore = defineStore(
  "caseStore",
  () => {
    const cases = ref<Case[]>([])
    return { cases }
  },
  {
    persist: true,
  }
)
