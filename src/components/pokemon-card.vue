<template>
  <b-card
    :title="updatedName"
    :img-src="pokemon.sprites.front_default"
    img-top
    tag="type"
  >
    <b-card-text>
      <p>
        <strong>{{ updatedName }}</strong> is a pokemon of the following type:
      </p>
      <span
        class="type-tag"
        v-for="(type, index) in pokemon.types"
        :key="index"
      >
        {{ type.type.name }}
      </span>
    </b-card-text>
    <b-button block variant="info">Details</b-button>
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
};
</script>

<style scoped>
.card-img-top {
  border-bottom: 1px solid gainsboro;
}
.card-title {
  font-size: 1.2rem;
}
.type-tag {
  background-color: gainsboro;
  border-radius: 0.3em;
  padding: 0.2em 0.5em;
  margin-right: 0.5em;
}
</style>
