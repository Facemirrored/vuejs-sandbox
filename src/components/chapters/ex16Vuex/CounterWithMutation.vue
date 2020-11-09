<template>
  <div>
    <button class="btn btn-primary" @click="incrementMethod(1)">Increment</button>
    <button class="btn btn-primary" @click="decrementMethod(10)">Decrement by 10</button>
    <button class="btn btn-primary" @click="anotherMethod">Call non vuex method with console
      logging
    </button>
    <button class="btn btn-primary" @click="incrementByValAction({val: 10, duration: 500})">Async
      Increase by 10
    </button>
    <button class="btn btn-primary" @click="decrementAction">Async Decrease</button>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex';

  export default {
    // methods: {
    //   increment() {
    //     this.$store.commit("increment");
    //   },
    //   decrement() {
    //     this.$store.commit("decrement");
    //   }
    // }
    methods: {
      ...mapMutations({
        incrementMethod: "increment",
        decrementMethod: "decrement"
      }),
      anotherMethod() {
        console.log("I'm a non vuex method!");
      },
      ...mapActions({
        incrementByValAction: "asyncIncrement",
        decrementAction: "asyncDecrement"
      })
    }
  }
</script>