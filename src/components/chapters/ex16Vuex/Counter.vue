<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increment() {
        // before (normal emit on 'updated' event):
        // this.$emit('updated', 1);

        this.$store.state.counterModul.counter++;
      },
      decrement() {
        // before (normal emit on 'updated' event):
        // this.$emit('updated', -1);

        this.$store.state.counterModul.counter--;
      }
    }
  }
</script>