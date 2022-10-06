// Creates a grid of div according to the specified size
function createGrid(size = 16) {
  const gridContainer = document.querySelector(".grid-container");
  for (let i = 1; i <= size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.toggle("grid-row");
    gridContainer.appendChild(gridRow);
    for (let y = 1; y <= size; y++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.toggle("grid-item");
      gridSquare.addEventListener("mouseover", () => {
        gridSquare.classList.add("grid-item-hover");
      });
      gridRow.appendChild(gridSquare);
    }
  }
}

// Creates the initial default grid at size 16 x 16
createGrid();

const newGrid = document.querySelector(".button-new");
// Event listener to create a new grid
newGrid.addEventListener("click", () => {
  removeGrid();
  let size = 0;
  do {
    size = prompt("Please enter the side length of the grid");
  } while (size > 100);
  createGrid(size);
});

function removeGrid() {
  const rows = Array.from(document.querySelectorAll(".grid-row"));
  const gridContainer = document.querySelector(".grid-container");
  rows.forEach((row) => {
    gridContainer.removeChild(row);
  });
}
