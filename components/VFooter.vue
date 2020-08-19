<template>
  <footer class=" hidden shadow-md bg-grey-dark px-24 py-4 lg:flex flex-col items-center">
    <v-social class="flex justify-center text-white" />
    <div class="text-grey-light w-2/4 my-4">
      <ul class="flex justify-between items-center">
        <li>
          <nuxt-link
            to="/"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
          >About Me</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/projects"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
          >Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/resume"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
          >Resume</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/blog"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
          >Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="transition duration-200 ease-in-out hover:underline hover:text-red"
          >Contact</nuxt-link>
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
        >Johnny Barrantes</a>
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
