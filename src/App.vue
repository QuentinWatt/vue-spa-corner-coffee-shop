<template>
  <div id="app" class="relative">
    <HeaderNavigation class="sticky top-0 bg-white z-50" />
    <router-view class="min-h-screen -mt-16 pt-16 pb-12" />
    <FooterNavigation class="absolute bottom-0 bg-white w-full h-12" />
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
