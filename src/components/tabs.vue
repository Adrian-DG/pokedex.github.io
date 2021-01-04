<template>
  <b-container fluid>
    <b-card title="Explorer" np-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item to="/pokemons">Pokemons</b-nav-item>
          <b-nav-item to="/regions">Regions</b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card-body>
        <router-view></router-view>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "tabs",
};
</script>

<style scoped></style>
