import { defineStore } from "pinia"
import { ref } from "vue"

export const useSettingsStore = defineStore(
  "settingsStore",
  () => {
    const volume = ref(0.1)

    return { volume }
  },
  {
    persist: true,
  }
)
