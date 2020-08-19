<template>
  <div
    id="social"
    class=""
  >
    <a
      href="https://github.com/johnnydevcr"
      class="bg-white text-black border border-grey-dark flex justify-center items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
      target="_blank"
    >
      <font-awesome-icon
        :icon="['fab', 'github']"
        class="text-xl"
      /></a>
    <a
      href="https://linkedin.com/in/johnnydevcr"
      class="bg-linkedin flex justify-center border border-grey-dark items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
      target="_blank"
    >
      <font-awesome-icon
        :icon="['fab', 'linkedin-in']"
        class="text-xl"
      /></a>
    <a
      href="https://facebook.com/johnnydevcr"
      class="bg-facebook flex justify-center border border-grey-dark items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
      target="_blank"
    >
      <font-awesome-icon
        :icon="['fab', 'facebook-f']"
        class="text-xl"
      /></a>
    <a
      href="https://twitter.com/johnnydevcr"
      class="bg-twitter flex justify-center border border-grey-dark items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
      target="_blank"
    >
      <font-awesome-icon
        :icon="['fab', 'twitter']"
        class="text-xl"
      /></a>
    <a
      href="https://instagram.com/johnnydevcr"
      class="bg-instagram flex justify-center border border-grey-dark items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
      target="_blank"
    >
      <font-awesome-icon
        :icon="['fab', 'instagram']"
        class="text-xl"
      /></a>
  </div>
</template>
<script>
export default {
  name: "VSocial"
}
</script>