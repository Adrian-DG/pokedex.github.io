import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";
const limitParam = "?limit=10";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    currentPokemon: "",
  },
  mutations: {
    pushPokemon: (state, { pokemon }) => {
      state.pokemons.push(pokemon);
    },
  },
  actions: {
    fetchApi: async (context, { endPoint }) => {
      const { data } = await axios.get(`${API_URL}${endPoint}${limitParam}`, {
        responseType: "json",
      });

      data.results.forEach((item) => {
        if (endPoint == "pokemon") {
          context.dispatch("fetchPokemonByID", { url: item.url });
        }
      });
    },

    fetchPokemonByID: async (context, { url }) => {
      const { data } = await axios.get(url, {
        responseType: "json",
      });

      const pokemon = {
        name: data.name,
        sprites: data.sprites,
        types: data.types,
      };

      context.commit("pushPokemon", { pokemon });
    },
  },
  getters: {
    getPokemons: (state) => {
      return state.pokemons;
    },
  },
  modules: {},
});
