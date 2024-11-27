import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(10, 1, 10);
const material = new THREE.MeshBasicMaterial({ color: 0xA1662F });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const loader = new GLTFLoader();
loader.load(
  "../../assets/automat.glb",
  function (gltf) {
    const automat = gltf.scene;
    scene.add(automat);
    automat.position.set(0, 1, 0);
  },
  undefined,
  function (error) {
    console.error("An error occurred while loading the GLTF model:", error);
  }
);

const radius = 15; 
let angle = 0; 

function animate() {
  requestAnimationFrame(animate);
  
  angle += 0.005;
  camera.position.y = 10
  camera.position.x = radius * Math.cos(angle); 
  camera.position.z = radius * Math.sin(angle) + 10;
  camera.lookAt(0, 0, 0); 

  renderer.render(scene, camera);
}
animate();