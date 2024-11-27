import * as THREE from 'three';

const plane_geometry = new THREE.BoxGeometry( 10,1,10 )
const plane_material = new THREE.MeshBasicMaterial({ color: 0xffffff})
const plane = new THREE.Mesh(plane_geometry, plane_material)

export {plane}