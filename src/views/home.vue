<template>
  <b-container fluid id="home">
    <banner />
  </b-container>
</template>

<script>
import banner from "../components/banner.vue";

export default {
  name: "home",
  created() {
    this.$store.dispatch("fetchApi", { endPoint: "pokemon" });
  },
  mounted() {
    console.log(this.$store.getters.getPokemons);
  },
  components: {
    banner,
  },
};
</script>

<style scoped>
#home {
  margin: 0;
  padding: 0;
}
</style>
