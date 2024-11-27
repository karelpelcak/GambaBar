import * as THREE from "three";

const fov = 75;
const aspect = window.innerWidth / window.innerHeight; 
const near = 0.1; 
const far = 1000; 

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

document.addEventListener("wheel", (event) => {
  const scroll = event.deltaY;

  if (scroll < 0) {
    camera.fov -= 1;
  } else if (scroll > 0) { 
    camera.fov += 1;
  }

  camera.fov = Math.max(40, Math.min(120, camera.fov));

  console.log(camera.fov);

  camera.updateProjectionMatrix();
});

camera.position.set(5, 5, 2);
camera.lookAt(0, 0, 0);

export { camera };
