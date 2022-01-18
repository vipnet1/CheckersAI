import { Injectable } from '@angular/core';
import { VerificationService } from '../verification.service';

@Injectable({
  providedIn: 'root'
})
export class BrainService {
  public static readonly CUSTOM_INFINITY = 1000000; //not using Infinity but this so ai will take best decision, even when he knows he's gona lose

  constructor(private readonly verificationService: VerificationService) { }

  /*
    @ Params: 
    cells - the strings of all cells.
    rabbit_cell - current cell rabbit is on.
    wolf_cells - array of cells wolfes currently on.

    @ External Methods:
    this.verificationService.get_rabbit_moves(cells, rabbit_cell_row, rabbit_cell_column).
    explanation: get array of length 4(one for each direction) rabbit can move. if he can move you get
    the cell to move to, but if cant 'undefined' is returned.

    this.verificationService.get_wolf_moves(cells, wolf_cell_row, wolf_cell_column).
    explanation: get array of length 2(one for each direction) wolf can move. if he can move you get
    the cell to move to, but if cant 'undefined' is returned. It returns move options only for one wolf so
    if you want to retrieve for all of them create a loop and call the function on each of them.(iterate wolf_cells)
  */
  calculate_points(cells: string[][], rabbit_cell: [number, number], wolf_cells: [number,number][]): number {
    return this.get_rabbit_move_direction_points(cells, rabbit_cell)
    + this.get_rabbit_higher_row_points(rabbit_cell)
    + this.get_rabbit_pass_wolfes_points(rabbit_cell, wolf_cells)
    + this.get_wolfes_move_together_points(rabbit_cell, wolf_cells)
    + this.get_wolfes_move_direction_points(wolf_cells)
    + this.get_rabbit_path_to_end_exists_points(rabbit_cell, wolf_cells);
  }

  private get_rabbit_move_direction_points(cells: string[][], rabbit_cell: [number, number]): number {
    const move_options = this.verificationService.get_rabbit_moves(cells, rabbit_cell[0], rabbit_cell[1]);

    let open_directions = 0;
    for(const option of move_options) {
      if(option !== undefined) {
        open_directions++;
      }
    }

    switch(open_directions) {
      case 0:
        return -BrainService.CUSTOM_INFINITY;
      case 1:
        return 1;
      case 2:
        return 3;
      case 3:
        return 5;
      case 4:
        return 5.5;
      default:
        return 0;
    }
  }

  // give wolfes points when move forward(so rabbit ai won't spend time jumping around - as the time goes his situation worse)
  private get_wolfes_move_direction_points(wolf_cells: [number,number][]): number {
    return wolf_cells[0][0] + wolf_cells[1][0] + wolf_cells[2][0] + wolf_cells[3][0];
  }

    // give points when passing wolfes
    private get_rabbit_pass_wolfes_points(rabbit_cell: [number, number], wolf_cells: [number,number][]) {
      let num_passed_wolfes = 0;
      for(const wolf of wolf_cells) {
        if(rabbit_cell[0] <= wolf[0]) {
          num_passed_wolfes++;
        }
      }

      switch(num_passed_wolfes) {
        case 1: return 20;
        case 2: return 40;
        case 3: return 60;
        case 4: return BrainService.CUSTOM_INFINITY;
        default: return 0;
      }

    }

  // give points when going towards destination
  private get_rabbit_higher_row_points(rabbit_cell: [number, number]) {
    if(rabbit_cell[0] === 0) return BrainService.CUSTOM_INFINITY;
    return (7 - rabbit_cell[0]) * 2.5;
  }


  // wolfes should try to stay closer on the row
  private get_wolfes_move_together_points(rabbit_cell: [number, number], wolf_cells: [number,number][]) {
    let maxIdx = wolf_cells[0][0];
    let minIdx = wolf_cells[0][0];
    wolf_cells.forEach((wolf) => {
      maxIdx = wolf[0] > maxIdx ? wolf[0] : maxIdx;
      minIdx = wolf[0] < minIdx ? wolf[0] : minIdx;
    })

    return Math.pow(maxIdx - minIdx, 2);
  }

  private get_rabbit_path_to_end_exists_points(rabbit_cell: [number, number], wolf_cells: [number,number][]) {

    const cells: boolean[][] = new Array(8);
    [...Array(8).keys()].forEach((y) => {
      cells[y] = new Array(8);
      [...Array(8).keys()].forEach((x) => {
        cells[y][x] = false;
      })
    })

    const result: [string, number] = this.isPathToEndExists(rabbit_cell, wolf_cells, cells)
    if(result[0] !== "None") {
      const score = 500 - result[1] * 30;

      if(score < 80) {
        return 80
      }

      return score;
    }

    return 0;
  }

  // returns: [direction to move to open path, number cells to final cell]
  private isPathToEndExists(cell: [number, number], wolf_cells: [number,number][], cells: boolean[][]): [string, number] {
    if(cell[0] === 0) {
      return ["YES", 0];
    }

    // top-right
    if(cell[0] > 0 && cell[1] < 7 && !cells[cell[0] - 1][cell[1] + 1] && !this.isOnWolf([cell[0] - 1, cell[1] + 1], wolf_cells)) {
      cells[cell[0] - 1][cell[1] + 1] = true;

      const result: [string, number] = this.isPathToEndExists([cell[0] - 1, cell[1] + 1], wolf_cells, cells);
      if(result[0] !== "None") {
        return ["tr", ++result[1]];
      }
    }


    // top-left
    if(cell[0] > 0 && cell[1] > 0 && !cells[cell[0] - 1][cell[1] - 1] && !this.isOnWolf([cell[0] - 1, cell[1] - 1], wolf_cells)) {
      cells[cell[0] - 1][cell[1] - 1] = true;
    
      const result: [string, number] = this.isPathToEndExists([cell[0] - 1, cell[1] - 1], wolf_cells, cells);
      if(result[0] !== "None") {
        return ["tl", ++result[1]];
      }
    }


    // bottom-left
    if(cell[0] < 7 && cell[1] > 0 && !cells[cell[0] + 1][cell[1] - 1] && !this.isOnWolf([cell[0] + 1, cell[1] - 1], wolf_cells)) {
      cells[cell[0] + 1][cell[1] - 1] = true;
        
      const result: [string, number] = this.isPathToEndExists([cell[0] + 1, cell[1] - 1], wolf_cells, cells);
      if(result[0] !== "None") {
        return ["bl", ++result[1]];
      }
    }


    // bottom-right
    if(cell[0] < 7 && cell[1] < 7 && !cells[cell[0] + 1][cell[1] + 1] && !this.isOnWolf([cell[0] + 1, cell[1] + 1], wolf_cells)) {
      cells[cell[0] + 1][cell[1] + 1] = true;
            
      const result: [string, number] = this.isPathToEndExists([cell[0] + 1, cell[1] + 1], wolf_cells, cells);
      if(result[0] !== "None") {
        return ["br", ++result[1]];
      }
    }


    return ["None", -1];
  }


  private isOnWolf(cell: [number, number], wolf_cells: [number,number][]): boolean {
    for(const wolf of wolf_cells) {
      if(cell[0] === wolf[0] && cell[1] === wolf[1]) {
        return true;
      }
    }

    return false;
  }

}
