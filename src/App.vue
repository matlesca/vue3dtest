<template>
  <div id="app">
    <h1><img src="./assets/logo.png" width="100px" height="100px"> + three.js</h1>
    <div class="promo">https://github.com/matlesca</div>

    <h3>Rotate on the X axis</h3>
    <input type="range" min="-5" max="5" v-model="rotx">
    <h3>Rotate on the Y axis</h3>
    <input type="range" min="-5" max="5" v-model="roty">
    <h3>Resize</h3>
    <input type="range" min="1" max="7" v-model="scale">

    <cube :myId="'1'" :xpos="0" :ypos="0" :rotx="rotx" :roty="roty" :scale="scale"></cube>

  </div>
</template>

<script>
import cube from './Cube.vue'

export default {
  name: 'app',
  components: {cube},
  data () {
    return {
      rotx: 3,
      roty: 0,
      scale: 4
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}

h1 {
  font-weight: normal;
}

.promo {
  position: absolute; right: 0; bottom: 0;
  margin: 50px;
  font-size: 2em;
  color: #6c737a;
}

</style>
