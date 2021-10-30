import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  private cells_cleanup_cache: [number, number, string][] = [];

  constructor() { }

  cleanup_cells(cells: string[][]): void {
    for(const cleanup_cell of this.cells_cleanup_cache) {
      cells[cleanup_cell[0]][cleanup_cell[1]] = cleanup_cell[2];
    }
    this.cells_cleanup_cache = [];
  }

  show_human_move_options(cells: string[][], row_index: number, column_index: number, isRabbitClicked: Boolean): void {
    let move_results = undefined;
    if(isRabbitClicked) {
      move_results = this.get_rabbit_moves(cells, row_index, column_index);

      this.cells_cleanup_cache.push([row_index, column_index, cells[row_index][column_index]]);
      cells[row_index][column_index] = "Black_Selected_White";
    }
    else {
      move_results = this.get_wolf_moves(cells, row_index, column_index);

      this.cells_cleanup_cache.push([row_index, column_index, cells[row_index][column_index]]);
      cells[row_index][column_index] = "Black_Selected_Black";
    }

    for(let option of move_results) {

      if(option) {
        this.cells_cleanup_cache.push([option[0], option[1], cells[option[0]][option[1]]]);
        cells[option[0]][option[1]] = "Option";
      }
    }

  }

  get_rabbit_moves(cells: string[][], row_index: number, column_index: number): [number, number][] {
    const top_right: [number, number] = row_index > 0 && column_index < 7 && cells[row_index - 1][column_index + 1] === "Black" 
    ? [row_index - 1, column_index + 1] : undefined;

    const top_left: [number, number] = row_index > 0 && column_index > 0 && cells[row_index - 1][column_index - 1] === "Black" 
    ? [row_index - 1, column_index - 1] : undefined;
    
    const bottom_right: [number, number] = row_index < 7 && column_index < 7 && cells[row_index + 1][column_index + 1] === "Black" 
    ? [row_index + 1, column_index + 1] : undefined;

    const bottom_left: [number, number] = row_index < 7 && column_index > 0 && cells[row_index + 1][column_index - 1] === "Black" 
    ? [row_index + 1, column_index - 1] : undefined;

    
    return [top_left, top_right, bottom_right, bottom_left];
  }

  get_wolf_moves(cells: string[][], row_index: number, column_index: number): [number, number][] {
    const bottom_right: [number, number] = row_index < 7 && column_index < 7 && cells[row_index + 1][column_index + 1] === "Black" 
    ? [row_index + 1, column_index + 1] : undefined;

    const bottom_left: [number, number] = row_index < 7 && column_index > 0 && cells[row_index + 1][column_index - 1] === "Black" 
    ? [row_index + 1, column_index - 1] : undefined;

    return [bottom_left, bottom_right];
  }

}
