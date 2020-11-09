<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
    <p>Test: {{ test }}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  // before: prop
  // props: ['counter']
  // computed: {
  // counter() {
  // can be bad if you wanna edit the value before getting it like computed props
  // return this.$store.state.counter;
  // Use getter instead:
  //   return this.$store.getters.doubleCounter;
  // },
  // clicks() {
  //   return this.$store.getters.stringCounter;
  // }
  // }

  // create automatic create computed props mapped to the named functions in the vuex store
  // computed mapGetters with String Array
  // computed: mapGetters(['doubleCounter', 'stringCounter'])
  // computed mapGetters as Object
  // use ... as es6 syntax for combining vuex created computed props with own custom props (need babel-preset-stage-2 as dev-dep)
  export default {
    computed: {
      ...mapGetters({
        stringCounter: 'stringCounter',
        doubleCounter: 'doubleCounter'
      }),
      test() {
        return "I'm a normal computed prop without VUEX"
      }
    }
  }
</script>