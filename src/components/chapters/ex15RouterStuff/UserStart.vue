<template>
  <div class="row">
    <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
      <p>Please select a User</p>
      <hr>
      <ul class="list-group">
        <router-link tag="li" class="list-group-item" style="cursor: pointer" to="/ex15RoutingUser/1">User 1</router-link>
        <router-link tag="li" class="list-group-item" style="cursor: pointer" to="/ex15RoutingUser/2">User 2</router-link>
        <router-link tag="li" class="list-group-item" style="cursor: pointer" to="/ex15RoutingUser/3">User 3</router-link>
      </ul>
    </div>
  </div>
</template>