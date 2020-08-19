<template>
  <div
    id="box"
    class="bg-red py-1 px-3  shadow-material-1 mx-2 mb-2 rounded-lg text-white font-semibold"
  >
    <font-awesome-icon
      :icon="['fab', `${icon}`]"
      v-if="icon!=undefined"
    /> {{text}}</div>
</template>
<script>
export default {
  name: "VPill",
  props: ['icon', 'text']
}
</script>
<style scoped>
#box {
  font-family: "Lato", sans-serif;
}
</style>