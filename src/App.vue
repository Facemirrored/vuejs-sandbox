<template>
  <div>
    <header-app></header-app>
    <router-view></router-view>
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
