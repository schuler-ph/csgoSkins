import { ref } from "vue"
import { defineStore } from "pinia"
import type { Case } from "@/data/case"
import type { KnifeCollection } from "@/data/knifeCollection"

export const useCaseStore = defineStore(
  "caseStore",
  () => {
    const cases = ref<Case[]>([])
    const findCaseByShortName = (shortName: string) => {
      return cases.value.find((obj) => obj.shortname === shortName)
    }

    const knifeCollections = ref<KnifeCollection[]>([])
    const findKnifeCollectionByName = (name: string) => {
      return knifeCollections.value.find((obj) => obj.name === name)
    }

    return {
      cases,
      findCaseByShortName,
      knifeCollections,
      findKnifeCollectionByName,
    }
  },
  {
    persist: true,
  }
)
