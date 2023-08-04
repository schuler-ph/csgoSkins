<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"

import { sound } from "@/helper/soundHelper"
</script>

<template>
  <video
    loop
    autoplay
    muted
    class="fixed -z-10 h-[100vh] w-[100vw] object-cover"
  >
    <source src="@/assets/ui/bg/cbble.webm" type="video/webm" />
  </video>
  <div class="flex min-h-screen flex-row">
    <nav
      id="leftnav"
      class="panoramaBlur fixed flex h-screen w-[5vw] flex-col justify-between"
    >
      <div class="flex flex-col">
        <RouterLink to="/">
          <div
            class="panoramaBorder flex h-[5vw] items-center justify-center border-b"
            @click="sound('homePress')"
          >
            <img
              @mouseover="sound('hover')"
              src="@/assets/ui/CSGO-Logo.svg"
              class="panoramaIconTransition w-[4vw]"
            />
            <img
              src="@/assets/ui/CSGO-Logo-black.svg"
              class="absolute z-0 w-[4vw]"
            />
          </div>
        </RouterLink>
        <div
          id="playButtons"
          class="panoramaBorder flex h-[10vw] flex-col items-center justify-evenly border-b"
        >
          <RouterLink to="/play">
            <div class="flex" @click="sound('playPress')">
              <img
                src="@/assets/ui/play-filled.svg"
                @mouseover="sound('hover')"
                class="panoramaIconTransition w-[3.5vw]"
              />
              <img
                src="@/assets/ui/play-filled-black.svg"
                class="absolute w-[3.5vw]"
              />
            </div>
          </RouterLink>
          <RouterLink to="/looking" class="flex">
            <img
              @mouseover="sound('hover')"
              src="@/assets/ui/antenna.svg"
              class="panoramaIconTransition w-[2.5vw]"
            />
            <img
              src="@/assets/ui/antenna-black.svg"
              class="absolute w-[2.5vw]"
            />
          </RouterLink>
        </div>
        <RouterLink to="/inventory">
          <div
            class="flex h-[5vw] flex-col items-center justify-center"
            @click="sound('inventoryPress')"
          >
            <img
              @mouseover="sound('hover')"
              src="@/assets/ui/inventory.svg"
              class="panoramaIconTransition w-[2.5vw]"
            />
            <img
              src="@/assets/ui/inventory-black.svg"
              class="absolute w-[2.5vw]"
            />
          </div>
        </RouterLink>
        <RouterLink
          to="/store"
          class="flex h-[5vw] flex-col items-center justify-center"
        >
          <img
            @mouseover="sound('hover')"
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
            @mouseover="sound('hover')"
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
            @mouseover="sound('hover')"
            src="@/assets/ui/cog.svg"
            class="panoramaIconTransition w-[2vw]"
          />
          <img src="@/assets/ui/cog-black.svg" class="absolute w-[2vw]" />
        </RouterLink>
      </div>
      <div id="quit" class="flex h-[5vw] flex-col items-center justify-center">
        <img
          @mouseover="sound('hover')"
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
      @mouseenter="sound('sideSlideIn')"
      @mouseleave="sound('sideSlideIn')"
      class="panoramaBlur fixed right-[-15vw] top-0 flex h-screen w-[20vw] flex-row shadow-xl transition-all hover:right-0"
    >
      <div class="flex w-[5vw] flex-col items-center">
        <div
          class="panoramaBorder flex h-[11.5vw] w-[5vw] flex-col items-center border-b"
        >
          <img
            class="mt-[0.85vw] w-[3.3vw]"
            src="https://avatars.steamstatic.com/b5bd56c1aa4644a474a2e4972be27ef9e82e517e_full.jpg"
          />
          <img
            class="mt-[1.2vw] w-[2.8vw]"
            src="@/assets/ui/xp/Csgo-profile-rank-level1.webp"
          />
          <img
            class="mt-[0.85vw] w-[4.3vw]"
            src="@/assets/ui/ranks/skillgroup_none.png"
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
