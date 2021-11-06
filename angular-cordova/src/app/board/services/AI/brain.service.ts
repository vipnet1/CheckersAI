import { Injectable } from '@angular/core';
import { VerificationService } from '../verification.service';

@Injectable({
  providedIn: 'root'
})
export class BrainService {

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
     + this.example_function(wolf_cells);
  }

  private get_rabbit_move_direction_points(cells: string[][], rabbit_cell: [number, number]): number {
    const move_options = this.verificationService.get_rabbit_moves(cells, rabbit_cell[0], rabbit_cell[1]);

    let points = 0;
    for(const option of move_options) {
      if(option !== undefined) {
        points++;
      }
    }

    return points;
  }

  private example_function(wolf_cells): number {
    return wolf_cells[0][1] + wolf_cells[1][1] +wolf_cells[2][1] +wolf_cells[3][1];
  }

}
