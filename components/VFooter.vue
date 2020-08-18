<template>
  <footer
    class=" hidden shadow-md bg-grey-dark px-24 py-4 lg:flex flex-col items-center"
  >
    <div id="social" class="flex justify-center text-white">
      <a
        href="https://github.com/johnnydevcr"
        class="bg-white text-black flex justify-center items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
        target="_blank"
        ><font-awesome-icon :icon="['fab', 'github']" class="text-xl"
      /></a>
      <a
        href="https://linkedin.com/in/johnnydevcr"
        class="bg-linkedin flex justify-center items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
        target="_blank"
        ><font-awesome-icon :icon="['fab', 'linkedin-in']" class="text-xl"
      /></a>
      <a
        href="https://facebook.com/johnnydevcr"
        class="bg-facebook flex justify-center items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
        target="_blank"
        ><font-awesome-icon :icon="['fab', 'facebook-f']" class="text-xl"
      /></a>
      <a
        href="https://twitter.com/johnnydevcr"
        class="bg-twitter flex justify-center items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
        target="_blank"
        ><font-awesome-icon :icon="['fab', 'twitter']" class="text-xl"
      /></a>
      <a
        href="https://instagram.com/johnnydevcr"
        class="bg-instagram flex justify-center items-center ml-2 w-8 h-8 rounded-sm transition duration-200 ease-in-out  hover:bg-red"
        target="_blank"
        ><font-awesome-icon :icon="['fab', 'instagram']" class="text-xl"
      /></a>
    </div>
    <div class="text-grey-light w-2/4 my-4">
      <ul class="flex justify-between items-center">
        <li>
          <nuxt-link
            to="/"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
            >About Me</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/projects"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
            >Projects</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/resume"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
            >Resume</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/blog"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
            >Blog</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
            >Contact</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div>
      <p class="text-white">
        ©2020
        <a
          href="#"
          target="_blank"
          class=" font-semibold text-red hover:underline"
          >Johnny Barrantes</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "VFooter"
};
</script>

<style>
footer {
  font-family: "Lato", sans-serif;
}
</style>
