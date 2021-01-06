<template>
  <b-container fluid>
    <b-card no-body>
      <b-row class="poke-body" no-gutters>
        <b-col class="poke-img" col lg="2" md="4">
          <b-card-img :src="pokemon.sprites.front_default"></b-card-img>
        </b-col>
        <b-col class="poke-info" col lg="10" md="8">
          <div
            class="card-header d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <h5 class="title">{{ formatedName }}</h5>
            </div>
            <div>
              <small class="type-tag card-subtitle"
                >pokemon/{{ pokemon.name }}</small
              >
            </div>
          </div>
          <b-card-body>
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to
              additional content. This content is a little bit longer.
            </b-card-text>
            <span
              class="type-tag"
              v-for="(type, index) in pokemon.types"
              :key="index"
              >{{ type.type.name }}</span
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "pokemon-details",
  data() {
    return {
      pokemon: "",
    };
  },
  beforeMount() {
    this.pokemon = this.$store.getters.getCurrentPokemon;
  },
  computed: {
    formatedName() {
      const name = Array.from(this.pokemon.name);
      name[0] = name[0].toUpperCase();
      return name.join("");
    },
  },
};
</script>

<style scoped>
.poke-img {
  border-right: 1px solid gainsboro;
}
.card-img {
  width: 100%;
  height: auto;
}
.title {
  margin-top: 0.5em;
  font-weight: 800;
  color: rgb(82, 82, 82);
}
.type-tag {
  background-color: gainsboro;
  border-radius: 0.3em;
  padding: 0.2em 0.5em;
  margin-right: 0.5em;
}

@media screen and (max-width: 425px) {
  .poke-body {
    display: flex !important;
    flex-direction: column !important;
  }
  .card-header {
    display: flex !important;
    flex-direction: column !important;
  }
}
</style>
