<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="info">
      <b-navbar-brand>Vuejs Training</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Resources" right>
            <b-dropdown-item href="https://vuejs.org/">Vue.js</b-dropdown-item>
            <b-dropdown-item href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">Bootstrap 4</b-dropdown-item>
            <b-dropdown-item href="https://bootstrap-vue.org/">BootstrapVue</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>