import * as THREE from "three";

const point_geometry = new THREE.BoxGeometry(1, 1, 1);
const point_material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const point = new THREE.Mesh(point_geometry, point_material);
const ReLocate = () => {
  const x = Math.floor(Math.random() * 5);
  const y = Math.floor(Math.random() * 5);
  point.position.set(x, 1, y);
};
ReLocate()
export { point, ReLocate };
