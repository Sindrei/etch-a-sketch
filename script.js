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

// Returns a random rgb color
function randomColor() {
  const red = Math.floor(Math.random() * 255 + 1);
  const green = Math.floor(Math.random() * 255 + 1);
  const blue = Math.floor(Math.random() * 255 + 1);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  return rgbColor;
}

function darkerColor(rgbColor) {
  const rgbString = rgbColor.slice(4, rgbColor.length - 1).split(",");

  const red = rgbString[0] / 255;
  const green = rgbString[1] / 255;
  const blue = rgbString[2] / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let luminance = (max + min) / 2;
  let hue;
  let saturation;

  if (min === max) {
    saturation = 0;
    hue = 0;
  } else if (min != max) {
    if (luminance <= 0.5) {
      saturation = (max - min) / (max + min);
    } else if (luminance > 0.5) {
      saturation = (max - min) / (2.0 - max - min);
    }
    if (red === max) {
      hue = (green - blue) / (max - min);
    } else if (green === max) {
      hue = 2 + (blue - red) / (max - min);
    } else if (blue === max) {
      hue = 4 + (red - green) / (max - min);
    }
  }
  hue = hue *= 60;
  if (hue < 0) {
    hue += 360;
  }
  luminance *= 100;
  saturation *= 100;

  luminance = luminance - luminance * 0.1;
  const hslColor = `hsl(${hue}, ${saturation}%, ${luminance}%)`;

  return hslColor;
}
