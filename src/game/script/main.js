import * as THREE from "three";
import { plane } from "./world/plane.js";
import { camera } from "./camera/top_view/camera.js";
import { character } from "./character/character.js";
import "./character/movement.js";
import { point, ReLocate } from "./point/point.js";
import {AddPoint} from './point/pointSystem.js'

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(plane);
scene.add(character);
scene.add(point);

const planeSize = 10;

function checkIfCharacterIsOffPlane() {
  const { x, z } = character.position;

  if (Math.abs(x) > planeSize / 2 - 0.5 || Math.abs(z) > planeSize / 2 - 0.5) {
    character.position.set(0, 1, 0);
  }
}

function checkContactBetweenCharacterAndPoint() {
  const characterPos = character.position;
  const pointPos = point.position;

  const distance = characterPos.distanceTo(pointPos);

  const contactThreshold = 1; // Poloměr character + malý offset pro point

  if (distance < contactThreshold) {
    AddPoint()
    character.position.set(0, 1, 0);
    ReLocate()
  }
}

function animate() {
  requestAnimationFrame(animate);

  checkIfCharacterIsOffPlane();
  checkContactBetweenCharacterAndPoint();  // Kontrola kontaktu mezi character a point

  renderer.render(scene, camera);
}
animate();
