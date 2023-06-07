<template>
  <div class="caseHeader">
    <div>{{ currentCase?.name }}</div>
    <img :src="currentCase?.imageUrl" :alt="currentCase?.shortname" />
    <button @click="openCase">Open</button>
  </div>
  <div class="caseItems">
    <div
      v-for="skin in currentCase?.skins"
      :key="skin.weaponName + skin.name"
      class="caseItem"
      :style="`border-color: ${getRarityColor(skin.rarity)}`"
    >
      <img
        :src="skin.imageUrl"
        :alt="skin.weaponName + skin.name"
        class="itemImage"
      />
      <div class="itemTitle">{{ skin.weaponName + " | " + skin.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from "@/stores/caseStore"
import { useRoute } from "vue-router"
import { getRarityColor } from "@/data/enums/rarity"

const { findCaseByShortName } = useCaseStore()
const currentCase = findCaseByShortName(useRoute().params.casename as string)

const openCase = () => {}
</script>

<style scoped>
.caseHeader {
  display: flex;
  place-items: center;
}
.caseItems {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.caseItem {
  border-width: 2px;
  border-style: solid;
}

.itemImage {
  width: 100%;
  padding: 5px;
}

.itemTitle {
  text-align: center;
}
</style>
