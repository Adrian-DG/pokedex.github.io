<template>
  <div class="tab-container">
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
  </div>
</template>

<script>
export default {
  name: "tabs",
};
</script>

<style scoped>
.tab-container {
  width: 80%;
  margin: auto;
}
</style>
