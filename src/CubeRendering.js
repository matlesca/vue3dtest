import * as THREE from 'three'

export default function (elemQuery, rotx, roty, scale) {
	const that = this
	this.rotx = rotx
	this.roty = roty
	this.scale = scale

	this.elem = document.querySelector(elemQuery)
	this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, this.elem.offsetWidth / this.elem.offsetHeight, 1, 4000)
    this.camera.position.z = 1000
 
    this.geometry = new THREE.BoxGeometry(300, 300, 300)
    this.material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)
 
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    this.renderer.setSize(this.elem.offsetWidth, this.elem.offsetHeight)
 	
    this.elem.appendChild(this.renderer.domElement)

    function animate() {
        requestAnimationFrame(animate)
        that.mesh.rotation.x += that.rotx / 100
        that.mesh.rotation.y += that.roty / 100
        that.mesh.scale.x = that.scale / 3
        that.mesh.scale.y = that.scale / 3
        that.mesh.scale.z = that.scale / 3

        that.renderer.setSize(that.elem.offsetWidth, that.elem.offsetHeight)
        that.renderer.render(that.scene, that.camera)
    }

    animate()

}