import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";
const limitParam = "?limit=10";

Vue.use(Vuex);

const pokemonFactory = (data) => {
  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    types: data.types,
  };

  return pokemon;
};

export default new Vuex.Store({
  state: {
    pokemons: [],
    currentPokemon: "",
  },
  mutations: {
    pushPokemon: (state, { pokemon }) => {
      state.pokemons.push(pokemon);
    },
    setCurrentPokemon: (state, { pokemon }) => {
      state.currentPokemon = pokemon;
    },
  },
  actions: {
    fetchApi: async (context, { endPoint }) => {
      const { data } = await axios.get(`${API_URL}${endPoint}${limitParam}`, {
        responseType: "json",
      });

      data.results.forEach((item) => {
        context.dispatch("fetchPokemonByID", { url: item.url });
      });
    },

    fetchPokemonByID: async (context, { url }) => {
      const { data } = await axios.get(url, {
        responseType: "json",
      });

      context.commit("pushPokemon", { pokemon: pokemonFactory(data) });
    },
  },
  getters: {
    getPokemons: (state) => {
      return state.pokemons;
    },
    getCurrentPokemon: (state) => {
      return state.currentPokemon;
    },
  },
  modules: {},
});
