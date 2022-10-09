// Creates a grid of div according to the specified size
function createGrid(size = 16) {
  const gridContainer = document.querySelector(".grid-container");
  for (let i = 1; i <= size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.toggle("grid-row");
    gridContainer.appendChild(gridRow);
    for (let y = 1; y <= size; y++) {
      const gridItem = document.createElement("div");
      gridItem.classList.toggle("grid-item");
      gridItem.addEventListener(
        "mouseover",
        () => {
          gridItem.style.backgroundColor = randomColor();
          gridItem.addEventListener("mouseover", () => {
            const newColor = gridItem.style.backgroundColor;
            gridItem.style.backgroundColor = darkerColor(newColor);
          });
        },
        { once: true }
      );
      gridRow.appendChild(gridItem);
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

// Returns ten percent of black rgb color
function randomColor() {
  const red = 255 - 25.5;
  const green = 255 - 25.5;
  const blue = 255 - 25.5;
  return `rgb(${red}, ${green}, ${blue})`;
}

function darkerColor(rgbColor) {
  const rgbString = rgbColor.slice(4, rgbColor.length - 1).split(",");

  const red = rgbString[0] - 25.5;
  const green = rgbString[1] - 25.5;
  const blue = rgbString[2] - 25.5;
  return `rgb(${red}, ${green}, ${blue})`;
}
