<template>
  <header class="border-b px-3">
    <div class="flex items-center h-16">
      <FontAwesomeIcon
        :icon="['fas', 'bars']"
        class="text-2xl lg:hidden mr-5"
        @click="openMenu"
      />
      <span id="site-logo" class="font-bold text-xl mr-5">
        Little Coffee Shop
      </span>
      <nav class="relative hidden lg:block">
        <ul class="flex">
          <li v-for="(menuItem, index) in mainMenu" :key="index">
            <router-link
              :to="menuItem.route"
              class="px-3 flex h-16 items-center"
            >
              {{ menuItem.label }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

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
            <span id="site-logo-mobile" class="font-bold text-xl mr-5">
              Little Coffee Shop
            </span>
            <ul class="border-t mt-3">
              <li v-for="(menuItem, index) in mainMenu" :key="index">
                <router-link
                  :to="menuItem.route"
                  class="border-b py-3 px-3 block"
                >
                  {{ menuItem.label }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { mainMenu } from "../constants/main-menu";
export default {
  name: "HeaderNavigation",
  data() {
    return {
      mainMenu: mainMenu
    };
  },
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
.router-link-exact-active {
  @apply bg-gray-200;
}

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
