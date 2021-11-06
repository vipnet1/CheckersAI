import { Injectable } from '@angular/core';
import { VerificationService } from '../verification.service';

@Injectable({
  providedIn: 'root'
})
export class BrainService {

  constructor(private readonly verificationService: VerificationService) { }

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
