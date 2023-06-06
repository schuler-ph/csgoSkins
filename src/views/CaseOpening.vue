<template>
  <main>
    <CaseList />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import CaseList from "@/components/CaseList.vue"

const random = ref(0)
const generate = () => {
  random.value = Math.random()
}
</script>

<style scoped></style>
