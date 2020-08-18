<template>
  <div id="menu" class="shadow-md">
    <nav class="w-full bg-grey text-white lg:px-24">
      <ul class="w-full flex justify-between items-end lg:items-center">
        <li
          class="w-1/5 lg:w-full transition duration-200 ease-in-out  hover:bg-red"
        >
          <nuxt-link
            to="/"
            class="text-sm mt-3  flex flex-col items-center justify-center lg:text-lg lg:flex-row lg:mt-0 lg:py-3 lg:px-2"
            ><font-awesome-icon
              :icon="['fas', 'user']"
              class="text-2xl lg:text-lg"
            />
            <span class="my-1 lg:my-0 lg:ml-2">About Me</span></nuxt-link
          >
        </li>
        <li
          class="w-1/5 lg:w-full transition duration-200 ease-in-out  hover:bg-red"
        >
          <nuxt-link
            to="/projects"
            class="text-sm mt-3  flex flex-col items-center justify-center lg:text-lg lg:flex-row lg:mt-0 lg:py-3 lg:px-2"
            ><font-awesome-icon
              :icon="['fas', 'laptop-code']"
              class="text-2xl lg:text-lg"
            />
            <span class="my-1 lg:my-0 lg:ml-2">Projects</span></nuxt-link
          >
        </li>
        <li
          class="w-1/5 lg:w-full transition duration-200 ease-in-out  hover:bg-red"
        >
          <nuxt-link
            to="/resume"
            class="text-sm mt-3  flex flex-col items-center justify-center lg:text-lg lg:flex-row lg:mt-0 lg:py-3 lg:px-2"
            ><font-awesome-icon
              :icon="['fas', 'briefcase']"
              class="text-2xl lg:text-lg"
            />
            <span class="my-1 lg:my-0 lg:ml-2">Resume</span></nuxt-link
          >
        </li>
        <li
          class="w-1/5 lg:w-full transition duration-200 ease-in-out  hover:bg-red"
        >
          <nuxt-link
            to="/blog"
            class="text-sm mt-3  flex flex-col items-center justify-center lg:text-lg lg:flex-row lg:mt-0 lg:py-3 lg:px-2"
            ><font-awesome-icon
              :icon="['fas', 'blog']"
              class="text-2xl lg:text-lg"
            />
            <span class="my-1 lg:my-0 lg:ml-2">Blog</span></nuxt-link
          >
        </li>
        <li
          class="w-1/5 lg:w-full transition duration-200 ease-in-out  hover:bg-red"
        >
          <nuxt-link
            to="/contact"
            class="text-sm mt-3  flex flex-col items-center justify-center lg:text-lg lg:flex-row lg:mt-0 lg:py-3 lg:px-2"
            ><font-awesome-icon
              :icon="['fas', 'id-card']"
              class="text-2xl lg:text-lg"
            />
            <span class="my-1 lg:my-0 lg:ml-2">Contact</span></nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "VNav"
};
</script>

<style>
nav {
  font-family: "Lato", sans-serif;
}
</style>
