<template>
  <div class="container">
    <header-component></header-component>
    <hr>
    <server-main-content></server-main-content>
    <hr>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Header from "./Header";
  import MainContent from "./MainContent";
  import Footer from "./Footer";

  export default {
    name: "ex6app",
    components: {
      headerComponent: Header,
      serverMainContent: MainContent,
      footerComponent: Footer
    }
  }
</script>

<style>

</style>