<template>
  <b-container fluid>
    <b-row>
      <b-col cols="6">Regions</b-col>
      <b-col cols="6"></b-col>
    </b-row>
    <ul class="regions">
      <div class="card" v-for="(region, index) in regions" :key="index">
        <b-row class="card-body">
          <b-col cols="10"
            ><h4 class="card-title">{{ region.name }}</h4></b-col
          >
          <b-col cols="2"
            ><b-button @click="getDetails(region.name)" btn
              >details</b-button
            ></b-col
          >
        </b-row>
      </div>
    </ul>
  </b-container>
</template>

<script>
export default {
  name: "region-list",
  data() {
    return {
      regions: [],
    };
  },
  created() {
    if (!this.$store.state.regions.length > 0) {
      this.$store.dispatch("fetchApi", { endPoint: "region" });
    }
  },
  beforeMount() {
    this.regions = this.$store.getters.getRegions;
  },
  methods: {
    getDetails(name) {
      this.$router.replace(`/region/${name}`);
    },
  },
};
</script>

<style scoped>
.regions {
  max-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
}
.card {
  width: 80%;
  margin-bottom: 1em;
}
</style>
