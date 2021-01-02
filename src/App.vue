<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Popper from "popper.js";
import Navbar from "./components/navbar.vue";

Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;

export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  height: auto;
}
</style>
