<template>
  <header class="border-b py-3 px-3">
    <FontAwesomeIcon
      :icon="['fas', 'bars']"
      class="text-2xl"
      @click="openMenu"
    />
    <span id="site-logo" class="font-bold text-xl">
      Little Corner Coffee Shop
    </span>

    <transition name="menu">
      <div
        v-if="$store.getters.showMenuStatus"
        class="menu-mask fixed z-50 top-0 left-0 w-full h-full flex bg-black-50"
        @click="closeMenu"
      >
        <div class="menu-container w-4/5 p-6 bg-white shadow-lg" @click.stop>
          <nav class="relative">
            <FontAwesomeIcon
              :icon="['fas', 'times']"
              class="text-2xl absolute top-0 right-0"
              @click="closeMenu"
            />
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "HeaderNavigation",
  methods: {
    openMenu() {
      this.$store.dispatch("openMenu");
    },
    closeMenu() {
      this.$store.dispatch("closeMenu");
    }
  }
};
</script>

<style scoped>
.menu-mask {
  transition: opacity 0.2s ease;
}

.menu-container {
  transition: all 0.2s ease;
}

.menu-enter {
  opacity: 0;
}

.menu-leave-active {
  opacity: 0;
}

.menu-enter .menu-container,
.menu-leave-active .menu-container {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
</style>
