import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private rabbit_cell: [number, number]

  constructor() { }

  make_a_move(cells: string[][], cell_from: [number, number], cell_to: [number, number]): [number, number] {
    const txt_cell_from: string = cells[cell_from[0]][cell_from[1]];
    cells[cell_from[0]][cell_from[1]] = "Black";
    cells[cell_to[0]][cell_to[1]] = txt_cell_from;

    if(cells[cell_to[0]][cell_to[1]] === "Black_White") {
      this.rabbit_cell = [cell_to[0], cell_to[1]];
    }

    return this.rabbit_cell;
  }

  check_game_state(cells: string[][], rabbitMoves: [number, number][]): number {
    if(this.rabbit_cell[0] === 0) {
      return 1;
    }

    for(let idx: number = 0; idx < 4; idx++) {
      if(rabbitMoves[idx] !== undefined) {
        return 0;
      }
    }

    return -1;
  }

  game_init(cells: string[][]): void {
    this.cells_init(cells);
    this.checkers_init(cells);
  }

  private cells_init(cells: string[][]): void {
    let nextWhite: Boolean = true;
    for(let row: number = 0; row < 8; row++) {
      cells[row] = [];
      let currWhite: Boolean = nextWhite;
      nextWhite = !nextWhite;
      for(let column: number = 0; column < 8; column++) {
        cells[row][column] = currWhite ? "White" : "Black";
        currWhite = !currWhite;
      }
    }
  }

  private checkers_init(cells: string[][]): void {
    for(let column: number = 1; column < 8; column += 2) {
      cells[0][column] = "Black_Black";
    }

    cells[7][4] = "Black_White";
    this.rabbit_cell = [7,4];
  }

}
