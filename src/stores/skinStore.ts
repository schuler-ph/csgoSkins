import { ref, computed } from "vue"
import { defineStore } from "pinia"
import type { SkinInstance, SkinTemplate } from "@/data/skins"
import { Rarity } from "@/data/enums/rarity"
import { WeaponName } from "@/data/enums/weaponName"

export const useSkinStore = defineStore("skinStore", () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const skins = ref<SkinInstance[]>([])

  function createVulcan() {
    const akVulcan: SkinTemplate = {
      rarity: Rarity.RED,
      weaponName: WeaponName.AK47,
      name: "Vulcan",
      imageUrl:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_rubber_light_large.5836c38d3037a5a1f90ffdc8c9d0b94367ca8efd.png",
    }

    const akVulcanInstance: SkinInstance = {
      template: akVulcan,
      float: 0.2,
      statTrak: false,
      price: 288.8,
    }

    skins.value.push(akVulcanInstance)
  }

  return { skins, createVulcan }
})
