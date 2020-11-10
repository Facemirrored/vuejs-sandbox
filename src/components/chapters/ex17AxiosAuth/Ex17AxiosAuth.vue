<template>
  <div>
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './header/Header.vue'

  export default {
    name: 'ex17axiosauthapp',
    components: {
      'app-header': Header
    },
    created() {
      this.$store.dispatch('tryAutoLogin');
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>