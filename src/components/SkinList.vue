<template>
  <div>
    <h1 class="text-lg">CSGO Skins</h1>
    <div class="skinList">
      <div v-for="skin in skinsList" :key="skin.name" class="skinListItem">
        <img :src="`src/assets/skins/${skin.image}`" :alt="skin.name" class="itemImage"/>
        <div>{{ skin.weaponName + " | " + skin.name }}</div>
        <div>Rarity: {{ skin.rarity }}</div>
        <div>Float: {{ skin.float }}</div>
        <div>Grade: {{ skin.grade }}</div>
        <div>Price: {{ skin.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { skins, type Skin } from '../data/skins';

const skinsList = ref<Skin[]>(skins);
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