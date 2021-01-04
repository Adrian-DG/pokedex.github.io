<template>
  <b-jumbotron>
    <b-img :src="require(`@/assets/pokemon-logo.png`)"></b-img>
  </b-jumbotron>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style scoped>
.jumbotron {
  height: 40vh;
  background: linear-gradient(
    90deg,
    rgba(128, 189, 108, 1) 22%,
    rgba(73, 202, 228, 1) 46%,
    rgba(251, 184, 184, 1) 75%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

img {
  height: auto;
  filter: drop-shadow(0.5em 0.5em 0.5em rgb(85, 85, 85));
}

@media screen and (min-width: 1024px) {
  img {
    width: 35% !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  img {
    width: 55% !important;
  }
}

@media screen and (max-width: 425px) {
  img {
    width: 70% !important;
  }
}
</style>
