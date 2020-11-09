<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Animations/Transition</button>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <transition class="distance" name="fade">
          <div class="alert alert-info" v-if="show">With css transition</div>
        </transition>
      </div>
      <div class="col-md-3">
        <transition class="distance" name="slide" type="animation">
          <div class="alert alert-info" v-show="show">With css animation</div>
        </transition>
      </div>
      <div class="col-md-3">
        <transition
            class="distance"
            enter-active-class="animate__animated animate__shakeX"
            leave-active-class="animate__animated animate__flash"
        >
          <div class="alert alert-info" v-if="show">With Animate.css</div>
        </transition>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition class="distance" name="slide" type="animation" appear>
          <div class="alert alert-info">Again with css animation and initial load</div>
        </transition>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h3>Select one cool style!</h3>
        <select v-model="dynamicAnimationSelection" class="form-control">
          <option value="animate__animated animate__heartBeat">Heart Beat</option>
          <option value="animate__animated animate__rubberBand">Rubber Band</option>
          <option value="animate__animated animate__tada">Tada</option>
        </select>
        <transition
            class="distance"
            :enter-active-class="dynamicAnimationSelection"
            :leave-active-class="dynamicAnimationSelection"
        >
          <div class="alert alert-info" v-if="show">Dynamic select animation with Animate.css</div>
        </transition>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h3>Animate two div's</h3>
        <h4>(useful for changing state with animations)</h4>
        <transition
            name="fade"
            class="distance"
            mode="out-in">
          <div class="alert alert-info" key="info" v-if="show">Info</div>
          <div class="alert alert-warning" key="warning" v-else>Warning</div>
        </transition>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br><br>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
            :css="false">
          <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
        <hr>
        <button
            class="btn btn-primary"
            @click="selectedComponent === 'app-success-alert' ?
                selectedComponent = 'app-danger-alert' :
                selectedComponent = 'app-success-alert'"
        >
          Toggle Components
        </button>
        <hr>
        <transition
            name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br><br>
        <ul class="list-group">
          <transition-group
              name="slide">
            <li
                class="list-group-item"
                :key="index + 'KEY'"
                v-for="(number, index) in numbers"
                @click="removeItem(index)"
                style="cursor: pointer">{{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import DangerAlert from './DangerAlert'
  import SuccessAlert from './SuccessAlert'

  export default {
    name: "ex13app",
    components: {
      appDangerAlert: DangerAlert,
      appSuccessAlert: SuccessAlert
    },
    data() {
      return {
        show: false,
        load: false,
        dynamicAnimationSelection: "",
        elementWidth: 100,
        selectedComponent: 'app-success-alert',
        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1);
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
      },
      beforeEnter(el) {
        console.log(el);
        console.log("beforeEnter");

        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      enter(el, done) {
        console.log(el);
        console.log("enter");

        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterEnter(el) {
        console.log(el);
        console.log("afterEnter");
      },
      enterCancelled(el) {
        console.log(el);
        console.log("enterCancelled");
      },
      beforeLeave(el) {
        console.log(el);
        console.log("beforeLeave");

        this.elementWidth = 300;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        console.log(el);
        console.log("leave");

        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log(el);
        console.log("afterLeave");
      },
      leaveCancelled(el) {
        console.log(el);
        console.log("leaveCancelled");
      }
    }
  }
</script>

<style>
  .distance {
    padding: 10px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /*opacity: 1;*/
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }

  .slide-leave {
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);

    }
    to {
      transform: translateY(20px);
    }
  }
</style>