const GRID_SIZE = 4;
const CELL_SIZE = 15;
const CELL_GAP = 2;

class Grid {
  #cells

  constructor(girdElement) {
    girdElement.style.setProperty('--gird-size', GRID_SIZE);
    girdElement.style.setProperty('--cell-size', `${CELL_SIZE}vmin`);
    girdElement.style.setProperty('--cell-gap', `${CELL_GAP}vmin`);

    this.#cells = createCellElement(girdElement).map((cellElement, index) => {
      return new Cell(cellElement, index % GRID_SIZE, Math.floor(index / GRID_SIZE))
    })
  }
}

class Cell {
  #cellElement
  #x
  #y

  constructor(cellElement, x, y) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
  }
}

const createCellElement = (girdElement) => {
  const cellArr = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cellArr.push(cell)
    girdElement.append(cell);
  }
  return cellArr
}

export default Grid;