<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="textInput" />
    <button @click="handleInput">Print</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import * as cheerio from "cheerio"

const textInput = ref("")
const handleInput = () => {}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
