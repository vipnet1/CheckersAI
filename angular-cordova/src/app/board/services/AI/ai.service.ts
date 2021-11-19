import { Injectable } from '@angular/core';
import { GameService } from '../game.service';
import { VerificationService } from '../verification.service';
import { BrainService } from './brain.service';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  nr_steps_lookup: number = 2;
  is_ai_rabbit: Boolean;

  set_ai_side(is_ai_rabbit: Boolean): void { this.is_ai_rabbit = is_ai_rabbit; }

  constructor(private readonly verificationService: VerificationService, private readonly brainService: BrainService,
    private readonly gameService: GameService) { }

  calculate_best_decision(cells: string[][], rabbit_cell: [number, number], wolf_cells: [number, number][]): [number, number][] {

    // copy data so we dont change it accidently
    const cpy_cells: string[][] = cells.map((row) => row.map((cell) => cell));
    const cpy_rabbit_cell: [number, number] = [...rabbit_cell];
    const cpy_wolf_cells: [number, number][] = wolf_cells.map((cell) => [...cell]);

    const bestDecision: [[number,number],[number,number],number]  = this.minimax(this.nr_steps_lookup, this.is_ai_rabbit, cpy_cells, cpy_rabbit_cell, cpy_wolf_cells);
    console.log(bestDecision);
    return [bestDecision[0], bestDecision[1]];
  }

  // returns tuple of format: [move_from, move_to, pointsOfBestDecision]
  private minimax(depth: number, isMax: Boolean, cells: string[][], rabbit_cell: [number, number], wolf_cells: [number,number][]): [[number,number], [number,number], number] {
    const rabbitMoves: [number,number][] = this.verificationService.get_rabbit_moves(cells, rabbit_cell[0], rabbit_cell[1]);
    const allWolfesMoves: [number,number][][] = [];
    for(const wolf of wolf_cells) {
      allWolfesMoves.push(this.verificationService.get_wolf_moves(cells, wolf[0], wolf[1]));
    }

    // if one can win stop at this node, no need to expand the entire tree
    const state: number = this.gameService.check_game_state(cells, rabbitMoves, allWolfesMoves);
    if(state === 1 && isMax) return [undefined, undefined, Infinity];
    if(state === -1 && !isMax) return [undefined, undefined, -Infinity];

    if(depth === 0) {
      return [undefined, undefined, this.brainService.calculate_points(cells, rabbit_cell, wolf_cells)];
    }

    // to store were from/to move
    let best_from: [number,number] = undefined;
    let best_to: [number,number] = undefined;

    if(isMax) {
      let maxEval: number = -Infinity;

      for(const move of rabbitMoves) {
        if(move) {
          const cells_backup: [number,number,string][] = [[rabbit_cell[0], rabbit_cell[1], "Black_White"],[move[0],move[1],"Black"]];

          cells[move[0]][move[1]] = "Black_White";
          cells[rabbit_cell[0]][rabbit_cell[1]] = "Black";

          const points: number = this.minimax(depth - 1, false, cells, move, wolf_cells)[2];

          cells[cells_backup[0][0]][cells_backup[0][1]] = cells_backup[0][2];
          cells[cells_backup[1][0]][cells_backup[1][1]] = cells_backup[1][2];

          if(points >= maxEval) {
            maxEval = points;
            best_from = rabbit_cell;
            best_to = move;
          }
        }
      }
      return [best_from, best_to, maxEval];
    }
    else {
      let minEval: number = Infinity;

      for(let i:number=0; i < allWolfesMoves.length; i++) {
        for(const move of allWolfesMoves[i]) {
          if(move) {
            const cells_backup: [number,number,string][] = [[wolf_cells[i][0], wolf_cells[i][1], "Black_Black"],[move[0],move[1],"Black"]];
            cells[move[0]][move[1]] = "Black_Black";
            cells[wolf_cells[i][0]][wolf_cells[i][1]] = "Black";

            const backup_wolf_cell: [number,number] = wolf_cells[i];
            wolf_cells[i] = move;

            const points: number = this.minimax(depth - 1, true, cells, rabbit_cell, wolf_cells)[2];

            wolf_cells[i] = backup_wolf_cell;
            cells[cells_backup[0][0]][cells_backup[0][1]] = cells_backup[0][2];
            cells[cells_backup[1][0]][cells_backup[1][1]] = cells_backup[1][2];

            if(points <= minEval) {
              minEval = points;
              best_from = wolf_cells[i];
              best_to = move;
            }
          }
        }
      }

      return [best_from, best_to, minEval];
    }
  }
}
