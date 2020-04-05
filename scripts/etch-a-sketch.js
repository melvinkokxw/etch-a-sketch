const container = document.querySelector('.container');

function generateGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for(i=0 ; i < size * size ; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    container.appendChild(cell);
  }
}

function fillCell(e) {
  e.target.style.backgroundColor = "black";
}

generateGrid(16);

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', fillCell));
