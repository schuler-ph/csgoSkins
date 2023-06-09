<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <video
    loop
    autoplay
    muted
    class="fixed -z-10 h-[100vh] w-[100vw] object-cover"
  >
    <source src="@/assets/ui/nuke.webm" type="video/webm" />
  </video>
  <div class="flex min-h-screen flex-row">
    <nav
      id="leftnav"
      class="panoramaBlur fixed flex h-screen w-[5vw] flex-col justify-between"
    >
      <div class="flex flex-col">
        <RouterLink
          to="/"
          class="panoramaBorder flex h-[5vw] items-center justify-center border-b"
        >
          <img
            src="@/assets/ui/CSGO-Logo.svg"
            class="panoramaIconTransition w-[4vw]"
          />
          <img
            src="@/assets/ui/CSGO-Logo-black.svg"
            class="absolute z-0 w-[4vw]"
          />
        </RouterLink>
        <div
          id="playButtons"
          class="panoramaBorder flex h-[10vw] flex-col items-center justify-evenly border-b"
        >
          <RouterLink to="/play" class="flex">
            <img
              src="@/assets/ui/play-filled.svg"
              class="panoramaIconTransition w-[3.5vw]"
            />
            <img
              src="@/assets/ui/play-filled-black.svg"
              class="absolute w-[3.5vw]"
            />
          </RouterLink>
          <RouterLink to="/looking" class="flex">
            <img
              src="@/assets/ui/antenna.svg"
              class="panoramaIconTransition w-[2.5vw]"
            />
            <img
              src="@/assets/ui/antenna-black.svg"
              class="absolute w-[2.5vw]"
            />
          </RouterLink>
        </div>
        <RouterLink
          to="/inventory"
          class="flex h-[5vw] flex-col items-center justify-center"
        >
          <img
            src="@/assets/ui/inventory.svg"
            class="panoramaIconTransition w-[2.5vw]"
          />
          <img
            src="@/assets/ui/inventory-black.svg"
            class="absolute w-[2.5vw]"
          />
        </RouterLink>
        <RouterLink
          to="/store"
          class="flex h-[5vw] flex-col items-center justify-center"
        >
          <img
            src="@/assets/ui/store.svg"
            class="panoramaIconTransition w-[2.5vw]"
          />
          <img src="@/assets/ui/store-black.svg" class="absolute w-[2.5vw]" />
        </RouterLink>
        <RouterLink
          to="/watch"
          class="flex h-[5vw] flex-col items-center justify-center"
        >
          <img
            src="@/assets/ui/tv.svg"
            class="panoramaIconTransition w-[2.2vw]"
          />
          <img src="@/assets/ui/tv-black.svg" class="absolute w-[2.2vw]" />
        </RouterLink>
        <RouterLink
          to="/settings"
          class="flex h-[5vw] flex-col items-center justify-center"
        >
          <img
            src="@/assets/ui/cog.svg"
            class="panoramaIconTransition w-[2vw]"
          />
          <img src="@/assets/ui/cog-black.svg" class="absolute w-[2vw]" />
        </RouterLink>
      </div>
      <div id="quit" class="flex h-[5vw] flex-col items-center justify-center">
        <img
          src="@/assets/ui/off.svg"
          class="panoramaIconTransition w-[1.7vw]"
        />
        <img src="@/assets/ui/off-black.svg" class="absolute w-[1.7vw]" />
      </div>
    </nav>
    <main class="ml-[5vw] w-[90vw]">
      <RouterView />
    </main>

    <aside
      class="panoramaBlur fixed right-[-15vw] top-0 flex h-screen w-[20vw] flex-row shadow-xl transition-all hover:right-0"
    >
      <div class="flex w-[5vw] flex-col items-center">
        <div
          class="panoramaBorder flex h-[11.5vw] w-[5vw] flex-col items-center border-b"
        >
          <img class="mt-[0.85vw] w-[3.3vw]" src="@/assets/ui/chad.jpg" />
          <img class="mt-[1.2vw] w-[2.8vw]" src="@/assets/ui/csgoXp.webp" />
          <img
            class="mt-[0.85vw] w-[4.3vw]"
            src="@/assets/ui/skillgroup18.png"
          />
        </div>
      </div>
      <div class="flex w-[15vw]">sdf</div>
      <!-- <aside class="fixed top-0 h-screen w-[5vw] bg-red-300">sdf</aside>
      <aside class="fixed top-0 h-screen w-[15vw] bg-purple-300">sdf</aside> -->
    </aside>
  </div>
</template>

<style scoped></style>
