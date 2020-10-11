<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="activeComponent = 'app-blue'">Load Blue Template</button>
        <button class="btn btn-success" @click="activeComponent = 'app-green'">Load Green Template</button>
        <button class="btn btn-danger" @click="activeComponent = 'app-red'">Load Red Template</button>
        <hr>
        <keep-alive>
          <component :is="activeComponent">
            <h3>The blue template is the default component</h3>
            <hr>
            <p>This information is passed to the scope of the blue default template component.</p>
            <div slot="green">
              <h3 v-if="greenKillStatus">I was willed by Red!!!</h3>
            </div>
            <div :killGreen="killGreen" slot="red">
              <h2>WARNING!!!</h2>
              <hr>
              <p>This is critical area, please be sure what to do!</p>
              <button @click="greenKillStatus = true">KILL GREEN TEMPLATE!</button>
            </div>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "@/components/chapters/ex8scopes/Blue"
import Green from "@/components/chapters/ex8scopes/Green"
import Red from "@/components/chapters/ex8scopes/Red"

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data: () => {
    return {
      activeComponent: 'app-blue',
      greenKillStatus: false
    }
  },
  methods: {
    killGreen() {
      this.greenKillStatus = true;
    }
  }
}
</script>

<style>
</style>
