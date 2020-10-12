<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
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
  // alternative: use route param
  watch: {
    "$route"(to, from) {
      this.id = to.params.id;
      console.log(from);
    }
  },
  methods: {
    backToUserConfig() {
      this.$router.push('/ex15router_stuff');
    }
  }
}
</script>