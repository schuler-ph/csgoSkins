<template>
  <div class="about">
    <div class="inputAndButton">
      <h1>Download images from CsgoStash</h1>
      <div class="inputAndButton">
        <input v-model="textInput" />
        <button @click="handleInput">Print</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { scrape } from "../helper/scrapeHelper"
import type { SkinInstance } from "@/data/skins"
import { useSkinStore } from "@/stores/skinStore"

const textInput = ref("https://csgostash.com/case/1/CS:GO-Weapon-Case")
const { skins } = useSkinStore()

const handleInput = async () => {
  const caseObj = await scrape(textInput.value)
  caseObj.skins.forEach((s) => {
    const instance: SkinInstance = {
      template: s,
      float: 0,
      statTrak: false,
      price: 0,
    }
    skins.push(instance)
  })
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
