import { Injectable } from '@angular/core';
import { Info } from '../../deps/Info';
import { Tree } from '../../deps/Tree';
import { TreeNode } from '../../deps/TreeNode';
import { VerificationService } from '../verification.service';
import { BrainService } from './brain.service';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  nr_steps_lookup: number = 3;
  is_ai_rabbit: Boolean;

  set_ai_side(is_ai_rabbit: Boolean): void { this.is_ai_rabbit = is_ai_rabbit; }

  constructor(private readonly verificationService: VerificationService, private readonly brainService: BrainService) { }

  calculate_best_decision(cells: string[][], rabbit_cell: [number, number], wolf_cells: [number, number][]): [number, number][] {

    const cpy_cells: string[][] = cells.map((row) => row.map((cell) => cell));
    const cpy_rabbit_cell: [number, number] = [...rabbit_cell];
    const cpy_wolf_cells: [number, number][] = wolf_cells.map((cell) => [...cell]);
    
    return this.is_ai_rabbit
    ? this.calculate_rabbit_best_decision(this.nr_steps_lookup, cpy_cells, cpy_rabbit_cell, cpy_wolf_cells)
    : this.calculate_wolfes_best_decision(this.nr_steps_lookup, cpy_cells, cpy_rabbit_cell, cpy_wolf_cells);
  }
}
