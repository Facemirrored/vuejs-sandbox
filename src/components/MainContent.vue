<template>
  <div class="row">
    <server-list-component></server-list-component>
    <server-details-component></server-details-component>
  </div>
</template>

<script>
  import ServerList from './ServerList'
  import ServerDetails from "./ServerDetails";

  export default {
    components: {
      serverListComponent: ServerList,
      serverDetailsComponent: ServerDetails
    }
  }
</script>