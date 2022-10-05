function createGrid() {
  const GRID_AMOUNT = 16 * 16;
  const gridContainer = document.querySelector(".grid-container");
  for (let i = 1; i <= GRID_AMOUNT; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.toggle("grid-item");
    gridContainer.appendChild(gridSquare);
  }
}

createGrid();
