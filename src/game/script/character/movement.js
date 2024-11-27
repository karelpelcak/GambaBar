import { character } from "./character";

const keysPressed = {
  w: false,
  a: false,
  s: false,
  d: false
};

document.addEventListener("keydown", (event) => {
  if (event.key === "w") keysPressed.w = true;
  if (event.key === "a") keysPressed.a = true;
  if (event.key === "s") keysPressed.s = true;
  if (event.key === "d") keysPressed.d = true;
});

document.addEventListener("keyup", (event) => {
  if (event.key === "w") keysPressed.w = false;
  if (event.key === "a") keysPressed.a = false;
  if (event.key === "s") keysPressed.s = false;
  if (event.key === "d") keysPressed.d = false;
});

function moveCharacter() {
  if (keysPressed.w) character.position.x -= 0.01; // Pohyb dopředu
  if (keysPressed.s) character.position.x += 0.01; // Pohyb dozadu
  if (keysPressed.a) character.position.z += 0.01; // Pohyb doleva
  if (keysPressed.d) character.position.z -= 0.01; // Pohyb doprava
}

function animate() {
  requestAnimationFrame(animate);
  moveCharacter();
}

animate();

export default {};
