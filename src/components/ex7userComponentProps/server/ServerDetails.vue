<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="server">
      <p>Server {{ server.id }} ST: {{ server.status }}</p>
      <hr>
      <button v-if="server.status === 'Critical'"
        @click="server.status = 'Normal'">Change Status to normal.</button>
    </div>
    <div v-else>
      <p>Please select a Server on the left side.</p>
    </div>
  </div>
</template>

<script>
  import {mainBus} from "../Bus";

  export default {
    name: "ServerDetails.vue",
    data() {
      return {
        server: null
      }
    },
    created() {
      mainBus.$on("serverSelect", (server) => {
        this.server = server;
      });
    }
  }
</script>

<style>
</style>