<template>
  <div>
    <header-app></header-app>
    <div class="container">
      <div class="row">
        <transition
            enter-active-class="animate__animated animate__backInUp"
            leave-active-class="animate__animated animate__backOutDown">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from "@/components/Header";

  export default {
    components: {
      HeaderApp: Header
    }
  }
</script>

<style>
</style>
