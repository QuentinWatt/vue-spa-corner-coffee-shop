<template>
  <section
    style="background-image:url('https://images.pexels.com/photos/34085/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
    class="flex bg-center bg-cover"
  >
    <div class="bg-black-30 flex w-full">
      <div class="text-center flex flex-col justify-center items-center w-full">
        <h1 class="text-3xl font-bold text-white mb-5">
          The best coffee in town
        </h1>
        <router-link
          to="/"
          class="bg-red-500 text-white flex justify-center p-3 w-48 mx-auto"
        >
          Make an order
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>
