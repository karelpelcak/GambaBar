import * as THREE from "three";

const character_geometry = new THREE.CapsuleGeometry(0.5, 0.5, 0.5);
const character_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const character = new THREE.Mesh(character_geometry, character_material);
character.position.set(0, 1.5, 0);
export { character };
