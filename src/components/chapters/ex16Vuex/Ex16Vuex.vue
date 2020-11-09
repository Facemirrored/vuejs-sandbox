<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <hr>
        <h2>Counter with direct store impact</h2>
        <app-counter></app-counter>
        <hr>
        <h2>Counter with Mutations</h2>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" v-model="value">
        <p>Value: {{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './Counter.vue';
  import Result from './Result.vue';
  import CounterWithMutation from "./CounterWithMutation";

  export default {
    computed: {
      value: {
        get() {
          return this.$store.getters.value;
        },
        set(value) {
          this.$store.dispatch("updateValue", value);
        }
      }
    },
    components: {
      appAnotherCounter: CounterWithMutation,
      appCounter: Counter,
      appResult: Result,
    }
  }
</script>

