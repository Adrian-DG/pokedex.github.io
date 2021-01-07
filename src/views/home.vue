<template>
  <b-container fluid id="home">
    <banner />
    <tabs />
  </b-container>
</template>

<script>
import banner from "../components/banner.vue";
import Tabs from "../components/tabs.vue";
export default {
  name: "home",
  components: {
    banner,
    Tabs,
  },
};
</script>

<style scoped>
#home {
  margin: 0 auto;
  padding: 0;
}
</style>
