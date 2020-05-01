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
  import Header from "./components/Header"
  import MainContent from "./components/MainContent"
  import Footer from "./components/Footer"

  export default {
    components: {
      headerComponent: Header,
      serverMainContent: MainContent,
      footerComponent: Footer
    }
  }
</script>

<style>

</style>
