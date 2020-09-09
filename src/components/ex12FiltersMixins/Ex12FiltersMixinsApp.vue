<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <div class="row" style="padding-left: 20px">
          <h3>{{ reverseText }} with filter</h3>
          <p>{{ reverseText | reverseFilter }}</p>
        </div>
        <div class="row" style="padding-left: 20px">
          <h3>{{ reverseText }} with computed property</h3>
          <p>{{ reverse }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {reverseMixin} from './reverseMixin'

export default {
  filters: {
    reverseFilter(value) {
      return value.split("").reverse().join("");
    }
  },
  mixins: [reverseMixin]
}
</script>

<style>
</style>
