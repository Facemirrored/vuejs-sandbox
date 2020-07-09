<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server-item
          @resetServerSelection="resetServerSelection()"
          :server="server"
          :key="server.id"
          v-for="server in servers">
      </server-item>
    </ul>
  </div>
</template>

<script>
  import ServerItem from "./ServerItem";

  export default {
    components: {
      serverItem: ServerItem
    },
    data() {
      return {
        servers: [
          {id: 1, status: "Normal", selected: false},
          {id: 2, status: "Critical", selected: false},
          {id: 3, status: "Unknown", selected: false},
          {id: 4, status: "Normal", selected: false}
        ]
      }
    },
    methods: {
      resetServerSelection() {
        this.servers.forEach(server => {
          server.selected = false;
        })
      }
    }
  }
</script>

<style>

</style>
