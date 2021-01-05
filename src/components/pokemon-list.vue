<template>
  <b-container fluid>
    <b-row>
      <b-col class="title" col md="6" lg="6">
        <h5>Pokemons ({{ RequestSize }})</h5>
      </b-col>
      <b-col class="search" col sm="12" md="6" lg="6">
        <b-input-group append="name">
          <b-form-input
            v-model="pokemonName"
            @input="SearchByName()"
            placeholder="pokemon name"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <hr />

    <ul class="pokemon-list">
      <li class="list-item" v-for="(pokemon, index) in pokemons" :key="index">
        <pokemon-card :pokemon="pokemon" />
      </li>
    </ul>
  </b-container>
</template>

<script>
import PokemonCard from "./pokemon-card.vue";
export default {
  name: "pokemon-list",
  data() {
    return {
      pokemons: [],
      pokemonName: "",
    };
  },
  components: {
    "pokemon-card": PokemonCard,
  },
  created() {
    this.$store.dispatch("fetchApi", { endPoint: "pokemon" });
  },
  beforeMount() {
    this.pokemons = this.$store.getters.getPokemons;
  },
  computed: {
    RequestSize() {
      return this.pokemons.length;
    },
  },
  methods: {
    SearchByName() {
      // console.log(this.pokemonName);
    },
  },
};
</script>

<style scoped>
.pokemon-list {
  max-height: 55vh;
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  list-style: none;
  margin: 0 1em 1em 1em;
}

@media screen and (min-width: 1024px) {
  .pokemon-list {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
  }
  .list-item {
    width: 15%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .pokemon-list {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
  }
  .list-item {
    width: 25%;
  }
}

@media screen and (max-width: 425px) {
  .pokemon-list {
    max-height: 60vh !important;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    overflow-y: hidden;
    overflow-x: auto;
  }
  .list-item {
    width: 100%;
    margin: 0.5em 3em 0.5em -1.5em;
  }
  .title {
    display: none;
  }
}
</style>
