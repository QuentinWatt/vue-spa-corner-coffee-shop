<template>
  <div class="container mx-auto px-3 lg:px-0">
    <h1 class="mt-5 font-bold text-3xl">
      This is an about page
    </h1>
    <p v-for="i in 100" :key="i" class="my-3">
      {{ i }}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
      aspernatur, consequatur debitis dolorem, earum expedita facilis inventore
      ipsam iure iusto minus, mollitia obcaecati quasi quibusdam repudiandae sed
      sit tempora tempore?
    </p>
  </div>
</template>
