function createGrid(gridSize=16) {
  const grid = document.querySelector('.grid');
  const squareSize = Math.floor(1200/gridSize);
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j=0; j<gridSize; j++) {
      const square = document.createElement('div');
      square.classList.add('square');

      square.style.cssText = `height: ${squareSize}px; width: ${squareSize}px;`
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blue';
      })
      row.appendChild(square);
    }
    grid.appendChild(row);
  }
}

function deleteGrid() {
  const rows = document.querySelectorAll('.row');
  for (let i = 0; i < rows.length; i++) {
    rows[i].remove()
  }
}

function refresh() {
  deleteGrid();
  createGrid(size)
}

const slider = document.getElementById("gridSize");
let size = slider.value;
const value = document.querySelector("#value");
value.textContent = `Grid Size: ${size}`;
createGrid(size);

slider.addEventListener("input", (e) => {
  size = e.target.value;
  value.textContent = `Grid Size: ${size}`;
  deleteGrid();
  createGrid(size);
});

