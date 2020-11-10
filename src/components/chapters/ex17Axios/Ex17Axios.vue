<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
    <hr>
    <p>{{ this.$store.getters.test }}</p>
    <p>{{ this.$store.state.axiosModule.test }}</p>
  </div>
</template>

<script>
  import Header from './header/Header.vue'
  export default {
    name: 'app',
    components: {
      'app-header': Header
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>