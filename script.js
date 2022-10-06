// Creates a grid of div according to the specified size
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

// Selects all the grid items
const items = Array.from(document.querySelectorAll(".grid-item"));
// Adding event listeners to each item in the gride for mouse hover
// Adding class grid-item-hover when mouse over and removing when mouse leaves
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("grid-item-hover");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("grid-item-hover");
  });
});
