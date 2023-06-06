<template>
  <main class="about">
    <div class="inputAndButton">
      <h1>Download images from CsgoStash</h1>
      <div class="inputAndButton">
        <input v-model="textInput" />
        <button @click="handleInput">Print</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { scrape } from "../helper/scrapeHelper"
import type { SkinInstance } from "@/data/skins"
import { useInventoryStore } from "@/stores/inventoryStore"
import { useCaseStore } from "@/stores/caseStore"

const textInput = ref("https://csgostash.com/case/1/CS:GO-Weapon-Case")
const { skins } = useInventoryStore()
const { cases } = useCaseStore()

const handleInput = async () => {
  const caseObj = await scrape(textInput.value)
  cases.push(caseObj)

  // caseObj.skins.forEach((s) => {
  //   const instance: SkinInstance = {
  //     template: s,
  //     float: 0,
  //     statTrak: false,
  //     price: 0,
  //   }
  //   skins.push(instance)
  // })
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .inputAndButton {
    display: flex;
    flex-direction: column;
  }
}
</style>
