<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
        <h1>User configuration</h1>
        <hr>
      </div>
    </div>
    <app-user-start></app-user-start>
  </div>
</template>

<script>
import UserStart from "@/components/chapters/ex15RouterStuff/UserStart";

export default {
  name: "Ex15Routing",
  components: {AppUserStart: UserStart}
}
</script>

<style scoped>

</style>