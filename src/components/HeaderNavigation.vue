<template>
  <header class="border-b py-3 px-3">
    <FontAwesomeIcon
      :icon="['fas', 'bars']"
      class="text-2xl"
      @click="toggleShowMenu"
    />
    <span id="site-logo" class="font-bold text-xl">
      Little Corner Coffee Shop
    </span>
    <nav v-if="showMenu">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNavigation",
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
