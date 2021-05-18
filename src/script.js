import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()
// find the sizes of our scene
const sizes = {
    width: 900,
    height: 700
}

const canvas = document.querySelector(".webgl")

//create the object
const geometry = new THREE.BoxGeometry(1,1,1)

//create the material
const material = new THREE.MeshBasicMaterial({
    color: "#ff0000"
})

//add the mesh -- mesh is like the set of material with object
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// make the scene's camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//configure the camera
camera.position.set(1,1,3)
scene.add(camera)

//create the rendering tool
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(
    sizes.width, sizes.height
)

//render your scene

renderer.render(scene, camera)



