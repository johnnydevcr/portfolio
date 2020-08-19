<template>
  <div
    id="container"
    class="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start"
  >
    <section
      id="information"
      class="lg:w-3/5"
    >
      <h1 class="font-bold text-2xl">Johnny Barrantes</h1>
      <h3 class="font-bold text-xl text-red">Who's this guy?</h3>
      <p class="text-justify text-lg my-4">
        Hi! I'm Web Developer from Costa Rica, I have serious passion for UI effects and creating intuitive, dynamic user experiences. I focus on write clean, elegant and efficient code.
        <br>
        Feel free to take a look at my projects on my <nuxt-link
          to="/projects"
          class="text-red hover:underline"
        >work page</nuxt-link>, or we just can start created a new idea so <a
          href="mailto:jbarrantes95@gmail.com"
          class="text-red hover:underline"
        >contact me</a>.
      </p>
      <ul>
        <li class="font-bold">Date of Birth: <span class="font-normal text-sm">22 february 1995</span></li>
        <li class="font-bold">Phone Number: <span class="font-normal text-sm">+506 8747-3361</span></li>
        <li class="font-bold">Address: <span class="font-normal text-sm">Alajuela, Costa Rica</span></li>
        <li class="font-bold">Website: <span class="font-normal text-sm">www.johnnydevcr.com</span></li>
      </ul>
      <h2 class="font-bold text-xl text-red my-4">You can find me here!</h2>
      <v-social class="flex justify-start text-white" />
    </section>
    <section
      id="skills"
      class="mt-8 lg:mt-0 lg:ml-24 w-full lg:w-2/5"
    >
      <h2 class="text-grey-dark font-bold text-xl mb-4">My Skills</h2>
      <div
        id="box-set"
        class="flex flex-row flex-wrap "
      >
        <v-pill
          text="HTML"
          icon="html5"
        />
        <v-pill
          text="CSS"
          icon="css3-alt"
        />
        <v-pill
          text="HTML"
          icon="html5"
        />
        <v-pill
          text="CSS"
          icon="css3-alt"
        />
        <v-pill
          text="HTML"
          icon="html5"
        />
        <v-pill
          text="CSS"
          icon="css3-alt"
        />
        <v-pill
          text="HTML"
          icon="html5"
        />
        <v-pill
          text="CSS"
          icon="css3-alt"
        />
      </div>
      <h2 class="text-grey-dark font-bold text-xl my-4">My Knowledge</h2>
      <div
        id="box-set"
        class="flex flex-row flex-wrap "
      >
        <v-pill
          text="HTML"
          icon="html5"
        />
        <v-pill
          text="CSS"
          icon="css3-alt"
        />
        <v-pill
          text="HTML"
          icon="html5"
        />
        <v-pill
          text="CSS"
          icon="css3-alt"
        />
        <v-pill
          text="HTML"
          icon="html5"
        />
        <v-pill
          text="CSS"
          icon="css3-alt"
        />
        <v-pill
          text="HTML"
          icon="html5"
        />
        <v-pill
          text="CSS"
          icon="css3-alt"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  font-family: "Lato", sans-serif;
}
</style>
