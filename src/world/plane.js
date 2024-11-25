import * as THREE from 'three';

const plane_geometry = new THREE.BoxGeometry( 4,1,4 )
const plane_material = new THREE.MeshBasicMaterial({ color: 0xffffff})
const plane = new THREE.Mesh(plane_geometry, plane_material)

export {plane}