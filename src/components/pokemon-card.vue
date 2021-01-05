<template>
  <b-card
    :title="updatedName"
    :img-src="pokemon.sprites.front_default"
    img-top
    tag="type"
  >
    <b-card-text>
      <p>
        Nature types:
      </p>
      <span
        class="type-tag"
        v-for="(type, index) in pokemon.types"
        :key="index"
      >
        {{ type.type.name }}
      </span>
    </b-card-text>
    <b-button block variant="info" @click="ToDetails()">Details</b-button>
  </b-card>
</template>

<script>
export default {
  name: "pokemon-card",
  props: ["pokemon"],
  computed: {
    updatedName() {
      const name = Array.from(this.pokemon.name);
      name[0] = name[0].toUpperCase();
      return name.join("");
    },
  },
  methods: {
    ToDetails() {
      this.$store.commit("setCurrentPokemon", { pokemon: this.pokemon });
      this.$router.replace(`/pokemon/${this.pokemon.name}`);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  border-bottom: 1px solid gainsboro;
}
.card-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: rgb(77, 77, 77);
}
.type-tag {
  background-color: gainsboro;
  border-radius: 0.3em;
  padding: 0.2em 0.5em;
  margin-right: 0.5em;
}
</style>
