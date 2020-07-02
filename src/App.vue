<template>
  <div class="container">
    <h1>Choose your exercise app</h1>
    <button @click="changeEx6Status">Activate</button>
    <div id="exercise" v-if="ex6state">
      <ex6app></ex6app>
    </div>
  </div>
</template>

<script>
  import Ex6app from "./components/ex6serverComponents/ex6app"

  export default {
    components: {
      ex6app: Ex6app
    },
    data() {
      return {
        ex6state: false,
      };
    },
    methods: {
      changeEx6Status: function() {
        this.ex6state = !this.ex6state;
      }
    }
  }
</script>

<style>
  #exercise {

  }
</style>
