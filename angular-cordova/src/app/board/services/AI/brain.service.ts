import { Injectable } from '@angular/core';
import { VerificationService } from '../verification.service';

@Injectable({
  providedIn: 'root'
})
export class BrainService {

  constructor(private readonly verificationService: VerificationService) { }

  get_rabbit_move_direction_points(cpy_cells: string[][], cpy_rabbit_cell: [number, number]): number {
    const move_options = this.verificationService.get_rabbit_moves(cpy_cells, cpy_rabbit_cell[0], cpy_rabbit_cell[1]);

    let points = 0;
    for(const option of move_options) {
      if(option !== undefined) {
        points++;
      }
    }

    return points;
  }
}
