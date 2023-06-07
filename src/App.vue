<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"
import SkinList from "./components/SkinList.vue"
import TheWelcome from "./components/TheWelcome.vue"
import { ref } from "vue"

const expanded = ref(false)

function expand() {
  expanded.value = !expanded
}
</script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="50"
      height="50"
    />

    <div clas="wrapper">
      <HelloWorld msg="Hello, csgoSkins." />

      <nav class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/caseOpening">Case Opening</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <div class="flex flex-row min-h-screen">
    <nav class="w-[5vw] bg-blue-300">sd</nav>
    <main class="w-[90vw] bg-green-300">
      <!-- <TheWelcome /> -->
      <!-- <RouterView /> -->
      <button @click="expand">sdfu</button>
    </main>

    <aside
      class="fixed top-0 w-[20vw] right-[-15vw] hover:right-0 h-screen bg-purple-300 transition-all flex flex-row"
    >
      <div class="flex flex-col bg-slate-300 w-[5vw] items-center">
        <div
          class="flex flex-col items-center border-b border-white border-opacity-60 border-solid h-[11.5vw] w-[5vw]"
        >
          <img class="w-[3.3vw] bg-black mt-[0.85vw]" src="@/assets/chad.jpg" />
          <img class="w-[2.8vw] mt-[1.2vw]" src="@/assets/csgoXp.webp" />
          <img class="w-[4.3vw] mt-[0.85vw]" src="@/assets/skillgroup18.png" />
        </div>
      </div>
      <div class="flex bg-pink-300 w-[15vw]">sdf</div>
      <!-- <aside class="fixed top-0 h-screen w-[5vw] bg-red-300">sdf</aside>
      <aside class="fixed top-0 h-screen w-[15vw] bg-purple-300">sdf</aside> -->
    </aside>
  </div>
</template>

<style scoped>
/* .links {
  display: flex;
  padding-left: 100px;
  gap: 70px;
  font-size: xx-large;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }
} */
</style>
