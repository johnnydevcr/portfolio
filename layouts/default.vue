<template>
  <div class="w-full min-h-screen flex flex-col">
    <header>
      <v-hero class="order-1" />
      <v-nav class="hidden lg:block lg:order-2" />
    </header>
    <v-nav class="lg:hidden order-3 block fixed inset-x-0 bottom-0 z-10" />
    <Nuxt class="order-2 lg:order-3 flex-grow pt-8 pb-32 px-4 lg:px-24" />
    <v-footer class="order-4" />
  </div>
</template>

<style>
html {
  font-family: "Open Sans", sans-serif;
}
</style>
