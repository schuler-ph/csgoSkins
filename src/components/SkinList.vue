<template>
  <div>
    <h1 class="text-lg">CSGO Skins</h1>
    <div class="skinList">
      <div v-for="skin in skins" :key="skin.template.name" class="skinListItem">
        <img
          :src="skin.template.imageUrl"
          :alt="skin.template.weaponName + skin.template.name"
          class="itemImage"
        />
        <div>{{ skin.template.weaponName + " | " + skin.template.name }}</div>
        <div>Rarity: {{ skin.template.rarity }}</div>
        <div>Float: {{ skin.float }}</div>
        <div>Grade: {{ floatToGrade(skin.float) }}</div>
        <div>Price: {{ skin.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInventoryStore } from "@/stores/inventoryStore"
import { floatToGrade } from "@/helper/floatHelper"
const { skins } = useInventoryStore()
</script>

<style scoped>
.skinList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
}

.skinListItem {
  border: 1px solid white;
}

.itemImage {
  width: 100%;
}
</style>
