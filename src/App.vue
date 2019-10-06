<template>
  <div id="app">
    <HeaderNavigation />
    <router-view />
    <FooterNavigation />
  </div>
</template>

<style lang="postcss">
@import "assets/main.css";
</style>
<script>
import FooterNavigation from "./components/FooterNavigation";
import HeaderNavigation from "./components/HeaderNavigation";
export default {
  components: { HeaderNavigation, FooterNavigation }
};
</script>
