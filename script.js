function createGrid() {
  const gridContainer = document.querySelector(".grid-container");
  for (let i = 1; i <= 16; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.toggle("grid-row");
    gridContainer.appendChild(gridRow);
    for (let y = 0; y < 16; y++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.toggle("grid-item");
      gridRow.appendChild(gridSquare);
    }
  }
}

createGrid();
