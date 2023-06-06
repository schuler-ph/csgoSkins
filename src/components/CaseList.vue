<template>
  <div>
    <h1 class="text-lg">CSGO Skins</h1>
    <div class="caseList">
      <div
        v-for="caseItem in cases"
        :key="caseItem.shortname"
        class="caseListItem"
      >
        <RouterLink :to="`/caseOpening/${caseItem.shortname}`">
          <img
            :src="caseItem.imageUrl"
            :alt="caseItem.shortname"
            class="itemImage"
          />
          <div>{{ caseItem.name }}</div></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from "@/stores/caseStore"
const { cases } = useCaseStore()
</script>

<style scoped>
.caseList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
}

.caseListItem {
  border: 1px solid white;
}

.itemImage {
  width: 100%;
}
</style>
