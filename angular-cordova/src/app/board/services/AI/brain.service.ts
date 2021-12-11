import { Injectable } from '@angular/core';
import { VerificationService } from '../verification.service';

@Injectable({
  providedIn: 'root'
})
export class BrainService {
  readonly WOLF_ROW_CELL_DIFF_POINTS: number = 2;
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
    + this.get_wolfes_move_direction_points(wolf_cells);
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
    let max_wolfes_on_row = 0;
    let wolf_total_row_distances = 0;

    const map = new Map();
    for(const wolf of wolf_cells) {
      if(map.has(wolf[0])) {
        map.set(wolf[0], map.get(wolf[0]) + 1);
        //console.log(map.get(wolf[0]))
      }
      else {
        map.set(wolf[0], 1);
      }

      if(map.get(wolf[0]) > max_wolfes_on_row) max_wolfes_on_row = map.get(wolf[0])

      for(const w of wolf_cells) {
        wolf_total_row_distances += Math.abs(w[0] - wolf[0])
      }
    }

    if(max_wolfes_on_row === 4 && rabbit_cell[0] > wolf_cells[0][0]) return -10000;
    const wolf_row_points = -50 * max_wolfes_on_row;

    return wolf_total_row_distances + wolf_row_points;
  }

}
