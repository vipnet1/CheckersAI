import { Component, OnInit } from '@angular/core';
import { AiService } from './services/ai.service';
import { GameService } from './services/game.service';
import { VerificationService } from './services/verification.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cells: string[][] = [];
  checker_to_move: [number, number];

  is_human_rabbit: Boolean = false;
  now_humans_turn: Boolean = true;

  constructor(private readonly verificationService: VerificationService, private readonly gameService: GameService,
    private readonly aiService: AiService) { }

  GoClick(row_index: number, column_index: number) {
    this.verificationService.cleanup_cells(this.cells);

    const rabbit_cell: [number, number] = this.gameService
    .make_a_move(this.cells, [this.checker_to_move[0], this.checker_to_move[1]], [row_index, column_index]);

    const rabbitMoves: [number, number][] = this.verificationService.get_rabbit_moves(this.cells, rabbit_cell[0], rabbit_cell[1]);
    const game_state: number = this.gameService.check_game_state(this.cells, rabbitMoves);
  }

  checkerClick(row_index: number, column_index: number): void {
    this.verificationService.cleanup_cells(this.cells);
    const is_rabbit: Boolean = this.is_rabbit_clicked(row_index, column_index);

    if(is_rabbit !== this.is_human_rabbit) {
      return;
    }

    this.verificationService.show_human_move_options(this.cells, row_index, column_index, is_rabbit);
    this.checker_to_move = [row_index, column_index];
  }

  ngOnInit(): void {
    this.gameService.game_init(this.cells);
    this.aiService.set_ai_side(!this.is_human_rabbit);
  }

  private is_rabbit_clicked(row_index: number, column_index: number) { return this.cells[row_index][column_index] === "Black_White"; }
}
