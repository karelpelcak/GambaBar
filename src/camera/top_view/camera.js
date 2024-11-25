import * as THREE from 'three';

const fov = 75; // zorny uhel
const aspect = window.innerWidth / window.innerHeight; // pomer stran
const near = 0.1; // Blízká ořezávací rovina
const far = 1000; // Vzdálená ořezávací rovina

// objekt kamery
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// nastaveni pozice/uhel
camera.position.set(5, 5, 2); 

camera.lookAt(0, 0, 0);

export { camera }