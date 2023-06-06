import { ref } from "vue"
import { defineStore } from "pinia"
import type { Case } from "@/data/case"

export const useCaseStore = defineStore(
  "caseStore",
  () => {
    const cases = ref<Case[]>([])
    const findByShortName = (shortName: string) => {
      return cases.value.find((obj) => obj.shortname === shortName)
    }

    return { cases, findByShortName }
  },
  {
    persist: true,
  }
)
