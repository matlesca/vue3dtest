<template>
  <div :id="'cube-id' + myId" class="cube-wrapper" :style="{transform:'translate(' + xpos + 'px,' + ypos + 'px)', width: 300 * scale  / 3 + 'px', height: 300 * scale / 3 + 'px'}">
  </div>
</template>

<script>
import CubeRendering from './CubeRendering.js'

export default {
  name: 'cube',
  props: ['myId', 'xpos', 'ypos', 'rotx', 'roty', 'scale'],
  mounted: function () {
  	this.myCube = new CubeRendering('#cube-id' + this.myId, this.rotx, this.roty, this.scale)
  },
  watch: {
  	rotx: function () {
  		this.myCube.rotx = this.rotx
  	},
  	roty: function () {
  		this.myCube.roty = this.roty
  	},
  	scale: function () {
  		this.myCube.scale = this.scale
  	}
  },
  data () {
    return {
      myCube: {}
    }
  }
}
</script>

<style>
.cube-wrapper {
	position: absolute;
	top: 0; right: 0;
}

</style>
