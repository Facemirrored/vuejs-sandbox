<template>
  <div class="container">
    <h1>Choose your exercise app</h1>
    <div class="exercisePacket">
      <div>Exercise 6: Server component setup</div>
      <button @click="changeEx6Status">Activate</button>
      <div v-if="ex6state">
        <ex6app></ex6app>
      </div>
    </div>
    <div class="exercisePacket">
      <div>Exercise 7: Server components with communication</div>
      <button @click="changeEx7Status">Activate</button>
      <div v-if="ex7Status">
        <ex7app></ex7app>
      </div>
    </div>
  </div>
</template>

<script>
  import Ex6app from "./components/ex6serverComponents/ex6app"
  import Ex7app from "./components/ex7userComponentProps/server/Ex7app";

  export default {
    components: {
      ex7app: Ex7app,
      ex6app: Ex6app
    },
    data() {
      return {
        ex6state: false,
        ex7Status: false,
      };
    },
    methods: {
      changeEx6Status() {
        this.ex6state = !this.ex6state;
      },
      changeEx7Status() {
        this.ex7Status = !this.ex7Status;
      }
    }
  }
</script>

<style>
  .exercisePacket {
    border: 1px solid black;
    margin-bottom: 50px;
    padding: 25px;
  }
</style>
