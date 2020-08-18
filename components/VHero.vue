<template>
  <div
    id="hero"
    class="bg-grey-dark shadow-md py-2 items-center flex flex-row justify-between sm:px-24 sm:py-4"
  >
    <div id="photo" class="w-1/3 ml-1 sm:ml-0 sm:w-2/12">
      <img class="rounded-full" src="@/assets/img/photo.jpg" alt="" />
    </div>
    <div id="welcome" class="ml-2 sm:ml-0 text-white w-2/3 sm:w-9/12">
      <p class="text-2xl lg:text-5xl">
        Hello!
        <br />
        I'm <span class="text-red">Johnny Barrantes</span>
      </p>
      <p class="font-normal lg:text-3xl">Computer Engineer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHero"
};
</script>

<style>
#welcome {
  font-family: "Lato", sans-serif;
  font-weight: 700;
}
</style>
