<template>
  <div class="container">
    <header-server></header-server>
    <servers></servers>
    <server-details></server-details>
    <server-footer></server-footer>
  </div>
</template>

<script>
  import Servers from "./Servers"
  import Header from "../shared/Header"
  import ServerFooter from "../shared/Footer"
  import ServerDetails from "./ServerDetails"

  export default {
    components: {
      serverFooter: ServerFooter,
      servers: Servers,
      headerServer: Header,
      serverDetails: ServerDetails
    },
    props: [],
    methods: {

    }
  }
</script>

<style>

</style>
