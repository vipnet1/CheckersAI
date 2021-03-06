import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private rabbit_cell: [number, number];
  private wolf_cells: [number, number][];

  constructor() { }

  get_rabbit_cell(): [number, number] { return this.rabbit_cell; }
  get_wolf_cells(): [number, number][] { return this.wolf_cells; }

  make_a_move(cells: string[][], cell_from: [number, number], cell_to: [number, number]): void {
    const txt_cell_from: string = cells[cell_from[0]][cell_from[1]];
    cells[cell_from[0]][cell_from[1]] = "Black";
    cells[cell_to[0]][cell_to[1]] = txt_cell_from;

    // remember new rabbit/wolfes cell positons
    if(cells[cell_to[0]][cell_to[1]] === "Black_White") {
      this.rabbit_cell = [cell_to[0], cell_to[1]];
    }
    else {
      for(const wolf_cell of this.wolf_cells) {
        if(wolf_cell[0] === cell_from[0] && (wolf_cell[1] === cell_from[1])) {
          wolf_cell[0] = cell_to[0];
          wolf_cell[1] = cell_to[1];
          break;
        }
      }
    }
  }

  //check if someone won
  check_game_state(rabbitMoves: [number, number][], allWolfesMoves: [number,number][][]): number {
    // if rabbit on first row he's won
    if(this.rabbit_cell[0] === 0) {
      return 1;
    }

    // if rabbit can't move wolfes won
    let rabbit_has_move: Boolean = false;
    for(let idx: number = 0; idx < 4; idx++) {
      if(rabbitMoves[idx] !== undefined) {
        rabbit_has_move = true;
        break;
      }
    }
    
    if(!rabbit_has_move) return -1;

    // if wolfes have no options to move rabbit won
    let wolf_has_move: Boolean = false;
    for(const wolfMove of allWolfesMoves) {
      for(const move of wolfMove) {
        if(move) {
          wolf_has_move = true;
          break;
        }
      }
      if(wolf_has_move) break;
    }

    if(!wolf_has_move) return 1;

    return 0;
  }

  public check_game_state_ai(currRabbitCell: [number, number], currWolfCells: [number, number][], rabbitMoves: [number, number][], allWolfesMoves: [number,number][][]): number {
    const rabbit_cell_cpy = this.rabbit_cell;
    const wolf_cells_cpy = this.wolf_cells;

    this.rabbit_cell = currRabbitCell;
    this.wolf_cells = currWolfCells;

    const res: number = this.check_game_state(rabbitMoves, allWolfesMoves);

    this.rabbit_cell = rabbit_cell_cpy;
    this.wolf_cells = wolf_cells_cpy;

    return res;
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
    this.wolf_cells = [[0,1],[0,3],[0,5],[0,7]];
  }

}
