<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div class="bg-red-500 p-3 text-white">
      Test tailwind
    </div>
  </div>
</template>

<style lang="postcss">
@import "assets/main.css";
</style>
