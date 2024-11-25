import * as THREE from 'three';
import { plane } from './world/plane.js';
import { camera } from './camera/top_view/camera.js';


const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add(plane);

renderer.render(scene, camera)