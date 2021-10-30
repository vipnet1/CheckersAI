import { Injectable } from '@angular/core';
import { VerificationService } from './verification.service';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  is_ai_rabbit: Boolean;

  set_ai_side(is_ai_rabbit: Boolean): void { this.is_ai_rabbit = is_ai_rabbit; }

  constructor(private readonly verificationService: VerificationService) { }

  calculate_best_decision(cells: string[][], rabbit_cell: [number, number], wolf_cells: [number, number][]): [number, number][] {
    if(this.is_ai_rabbit) {
      const move_options = this.verificationService.get_rabbit_moves(cells, rabbit_cell[0], rabbit_cell[1]);
      for(const option of move_options) {
        if(option !== undefined) {
          return [rabbit_cell, option]
        }
      }
    }
    else {
      for(const wolf_cell of wolf_cells) {
        const move_options = this.verificationService.get_wolf_moves(cells, wolf_cell[0], wolf_cell[1]);
        for(const option of move_options) {
          if(option !== undefined) {
            return [wolf_cell, option]
          }
        }
      }
    }

    return undefined;
  }
}
