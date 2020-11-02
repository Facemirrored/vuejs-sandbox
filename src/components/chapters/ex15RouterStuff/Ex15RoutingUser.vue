<template>
  <div class="container">
    <div class="row">
      <div
          class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
        <h1>The User Page</h1>
        <hr>
        <router-view></router-view>
        <hr>
        <button @click="backToUserConfig" class="btn-primary btn">Got to overview</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      backToUserConfig() {
        this.$router.push({ name: "home" });
      }
    }
  }
</script>