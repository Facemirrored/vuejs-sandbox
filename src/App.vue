<template>
  <div class="container">
    <h1>Choose your exercise app</h1>
    <div class="row exercisePacket">
      <div>Exercise 6: Server component setup</div>
      <button @click="changeEx6Status">Activate</button>
      <div v-if="ex6state">
        <ex6app></ex6app>
      </div>
    </div>
    <div class="row exercisePacket">
      <div>Exercise 7: Server components with communication</div>
      <button @click="changeEx7Status">Activate</button>
      <div v-if="ex7Status">
        <ex7app></ex7app>
      </div>
    </div>
    <div class="row exercisePacket">
      <div>Exercise 8: Using dynamic scopes</div>
      <button @click="changeEx8Status">Activate</button>
      <div v-if="ex8status">
        <ex8app></ex8app>
      </div>
    </div>
    <div class="row exercisePacket">
      <div>Exercise 9: Wunderful quotes</div>
      <button @click="changeEx9Status">Activate</button>
      <div v-if="ex9Status">
        <ex9app></ex9app>
      </div>
    </div>
    <div class="row exercisePacket">
      <div>Exercise 10: Submit forms</div>
      <button @click="changeEx10Status">Activate</button>
      <div v-if="ex10Status">
        <ex10app></ex10app>
      </div>
    </div>
    <div class="row exercisePacket">
      <div>Exercise 11: Custom Directives</div>
      <button @click="changeEx11Status">Activate</button>
      <div v-if="ex11Status">
        <ex11app></ex11app>
      </div>
    </div>
    <div class="row exercisePacket">
      <div>Exercise 12: Mixins and Filters</div>
      <button @click="changeEx12Status">Activate</button>
      <div v-if="ex12Status">
        <ex12app></ex12app>
      </div>
    </div>
  </div>
</template>

<script>
  import Ex6app from "./components/ex6serverComponents/Ex6app"
  import Ex7app from "./components/ex7userComponentProps/server/Ex7app";
  import Ex8app from "./components/ex8scopes/Ex8app";
  import Ex9app from "./components/ex9wunderfulQuotes/WunderfulQuotesApp"
  import Ex10app from "@/components/ex10Forms/Ex10FormsApp";
  import Ex11app from "@/components/ex11CustomDirectives/Ex11CustomDirectivesApp";
  import Ex12app from "@/components/ex12FiltersMixins/Ex12FiltersMixinsApp";

  export default {
    components: {
      ex7app: Ex7app,
      ex6app: Ex6app,
      ex8app: Ex8app,
      ex9app: Ex9app,
      ex10app: Ex10app,
      ex11app: Ex11app,
      ex12app: Ex12app
    },
    data() {
      return {
        ex6state: false,
        ex7Status: false,
        ex8status: false,
        ex9Status: false,
        ex10Status: false,
        ex11Status: false,
        ex12Status: false
      };
    },
    methods: {
      changeEx6Status() {
        this.ex6state = !this.ex6state;
      },
      changeEx7Status() {
        this.ex7Status = !this.ex7Status;
      },
      changeEx8Status() {
        this.ex8status = !this.ex8status;
      },
      changeEx9Status() {
        this.ex9Status = !this.ex9Status;
      },
      changeEx10Status() {
        this.ex10Status = !this.ex10Status;
      },
      changeEx11Status() {
        this.ex11Status = !this.ex11Status;
      },
      changeEx12Status() {
        this.ex12Status = !this.ex12Status;
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
