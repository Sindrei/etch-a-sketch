function createGrid() {
  const gridContainer = document.querySelector(".container");
  for (let i = 1; i <= 16; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.textContent = i;
    gridContainer.appendChild(gridSquare);
  }
}

createGrid();
