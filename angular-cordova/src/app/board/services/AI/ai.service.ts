import { Injectable } from '@angular/core';
import { VerificationService } from '../verification.service';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  is_ai_rabbit: Boolean;

  cpy_cells: string[][];
  cpy_rabbit_cell: [number, number];
  cpy_wolf_cells: [number, number][];

  set_ai_side(is_ai_rabbit: Boolean): void { this.is_ai_rabbit = is_ai_rabbit; }

  constructor(private readonly verificationService: VerificationService) { }

  private init_venv(cells: string[][], rabbit_cell: [number, number], wolf_cells: [number, number][]): void {
    this.cpy_cells = cells.map((row) => row.map((cell) => cell));
    this.cpy_rabbit_cell = [...rabbit_cell];
    this.cpy_wolf_cells = wolf_cells.map((cell) => [...cell]);
  }

  calculate_best_decision(cells: string[][], rabbit_cell: [number, number], wolf_cells: [number, number][]): [number, number][] {
    this.init_venv(cells, rabbit_cell, wolf_cells);

    return this.is_ai_rabbit
    ? this.calculate_rabbit_best_decision()
    : this.calculate_wolfes_best_decision()
  }

  private calculate_rabbit_best_decision(): [number, number][] {
    const move_options = this.verificationService.get_rabbit_moves(this.cpy_cells, this.cpy_rabbit_cell[0], this.cpy_rabbit_cell[1]);

    for(const option of move_options) {
      if(option !== undefined) {
        return [this.cpy_rabbit_cell, option]
      }
    }

    return undefined;
  }

  private calculate_wolfes_best_decision(): [number, number][] {
    for(const wolf_cell of this.cpy_wolf_cells) {
      const move_options = this.verificationService.get_wolf_moves(this.cpy_cells, wolf_cell[0], wolf_cell[1]);

      for(const option of move_options) {
        if(option !== undefined) {
          return [wolf_cell, option]
        }
      }
    }

    return undefined;
  }
}
