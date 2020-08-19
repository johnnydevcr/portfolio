<template>
  <div>
    <section class="flex justify-center flex-wrap">
      <button
        @click="toggleEdu"
        class="bg-red py-1 px-3 w-full sm:w-1/3 lg:w-1/4 shadow-material-1 mx-2 mb-4 rounded-sm text-white font-semibold transition duration-200 ease-in-out hover:bg-red-dark"
      >Educational History</button>
      <button
        @click="toggleWork"
        class="bg-red py-1 px-3 w-full sm:w-1/3 lg:w-1/4 lg:py-3 shadow-material-1 mx-2 mb-4 rounded-sm text-white font-semibold transition duration-200 ease-in-out hover:bg-red-dark"
      >Work Experience</button>
    </section>
    <section>
      <transition name="fade">
        <div v-show="showEdu">
          <div
            id="card"
            class="flex flex-col items-center border border-grey-dark"
          >
            <div id="card-image">
              <img
                src="@/assets/img/fidelitas.png"
                alt="fidelitas"
                class="w-32"
              />
            </div>
            <div id="card-body">
              <div id="card-title">
                <h2>Computer Engineer Bachelor Degree</h2>
              </div>
              <div id="card-info">
                <ul>
                  <li>Place: Universidad Fidelitas</li>
                  <li>Start: September 2016</li>
                  <li>Finished: December 2019</li>
                </ul>
              </div>
              <div id="card-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ullam illo, optio iusto necessitatibus dolorem repellat temporibus, minus in quaerat sequi adipisci cum autem. Repellendus aperiam libero in quasi doloremque.</p>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="showWork">Work</div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showEdu: true,
      showWork: false,
    }
  },
  methods: {
    toggleEdu () {
      this.showEdu = !this.showEdu;
    },
    toggleWork () {
      this.showWork = !this.showWork;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
