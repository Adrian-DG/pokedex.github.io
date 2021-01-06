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
    regions: [],
    currentPokemon: "",
  },
  mutations: {
    pushPokemon: (state, { pokemon }) => {
      state.pokemons.push(pokemon);
    },
    pushRegion: (state, { region }) => {
      state.regions.push(region);
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
        if (endPoint == "pokemon") {
          context.dispatch("fetchPokemonByID", { url: item.url });
        } else if (endPoint == "region") {
          context.commit("pushRegion", { region: item });
        }
      });
    },

    fetchPokemonByID: async (context, { url }) => {
      const { data } = await axios.get(url, {
        responseType: "json",
      });

      context.commit("pushPokemon", { pokemon: pokemonFactory(data) });
    },

    fetchMore: async ({ state, dispatch }, { endPoint }) => {
      const pokemon_qty = state.pokemons.length;
      const to_fetch = pokemon_qty + 10;
      for (let counter = pokemon_qty; counter < to_fetch; counter++) {
        dispatch("fetchPokemonByID", {
          url: `${API_URL}${endPoint}/${counter} `,
        });
      }
    },
  },
  getters: {
    getPokemons: (state) => {
      return state.pokemons;
    },
    getCurrentPokemon: (state) => {
      return state.currentPokemon;
    },
    getRegions: (state) => {
      return state.regions;
    },
  },
  modules: {},
});
