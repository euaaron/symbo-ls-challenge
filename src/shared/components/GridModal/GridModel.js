export class GridModel {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = this.initialize(rows, columns);
  }

  initialize(rows, columns) {
    const matrix = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < columns; c++) {
        row.push({
          row: r,
          col: c,
          isSelected: false,
        });
      }
      matrix.push(row);
    }
    return matrix;
  }

  resize(newRows, newColumns) {
    const newMatrix = this.initialize(newRows, newColumns);
    for (let r = 0; r < Math.min(this.rows, newRows); r++) {
      for (let c = 0; c < Math.min(this.columns, newColumns); c++) {
        newMatrix[r][c] = this.matrix[r][c];
      }
    }
    this.rows = newRows;
    this.columns = newColumns;
    this.matrix = newMatrix;
  }

  update(row, col) {
    this.validateCell(row, col);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        this.matrix[r][c].isSelected = r <= row && c <= col;
      }
    }
    return this.matrix;
  }

  get() {
    return this.matrix;
  }

  validateCell(row, col) {
    if (row < 0 || row >= this.rows || col < 0 || col >= this.columns) {
      throw new Error("Cell position out of bounds");
    }
    return true;
  }

  getCell(row, col) {
    this.validateCell(row, col);
    return this.matrix[row][col];
  }
}
