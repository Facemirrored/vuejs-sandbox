<template>
  <li class="list-group-item serverItem"
      :class="{activeClass: server.selected}"
      @click="selectedServer">
    Server ID: {{ server.id }}
  </li>
</template>

<script>
  import {mainBus} from "../Bus";

  export default {
    props: {
      server: Object,
    },
    methods: {
      selectedServer() {
        this.$emit("resetServerSelection");
        this.server.selected = true;
        mainBus.$emit("serverSelect", this.server);
      }
    }
  }
</script>

<style>
  .serverItem:hover {
    background-color: lightgrey;
  }
  .serverItem {
    cursor: pointer;
  }
  .activeClass {
    background-color: lightgreen;
  }
</style>
