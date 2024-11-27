let points = 0; 

const PointEl = document.getElementById("point");

const AddPoint = () => {
  points += 1;

  if (PointEl) {
    PointEl.textContent = `Points: ${points}`;
  }
};

export { AddPoint };
