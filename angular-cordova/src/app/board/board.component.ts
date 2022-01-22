import { Component, OnInit } from '@angular/core';
import { AiService } from './services/AI/ai.service';
import { GameService } from './services/game.service';
import { VerificationService } from './services/verification.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cells: string[][] = [];

  private readonly STATS_SERVER_URL: string = 'http://localhost:12345/stats';

  //last seleted human checker indexes
  checker_to_move: [number, number];

  is_human_rabbit: Boolean = true;
  now_humans_turn: Boolean = true;
  human_steps: number;

  best_score_str: string = '-1';

  constructor(private readonly verificationService: VerificationService, private readonly gameService: GameService,
    private readonly aiService: AiService) { }

    ngOnInit(): void {
      this.human_steps = 0;
      this.gameService.game_init(this.cells);
      this.aiService.set_ai_side(!this.is_human_rabbit);
    }

    async onSideChanged(): Promise<void> {
      this.aiService.set_ai_side(this.is_human_rabbit);
      this.is_human_rabbit = !this.is_human_rabbit;
      this.now_humans_turn = false;
      fetch(`${this.STATS_SERVER_URL}?lookup=${this.aiService.nr_steps_lookup}&side=${this.is_human_rabbit ? 'rabbit' : 'wolfes'}`)
      .then(async response => {
        this.best_score_str = await response.text();
      });
      this.activateAI();
    }

    onLookupChanged(newValue: number): void {
      if(newValue > 0 && newValue < 9) {
        this.aiService.nr_steps_lookup = newValue;
      }

      fetch(`${this.STATS_SERVER_URL}?lookup=${this.aiService.nr_steps_lookup}&side=${this.is_human_rabbit ? 'rabbit' : 'wolfes'}`)
      .then(async response => {
        this.best_score_str = await response.text();
      });
    }

  async play(row_index: number, column_index: number) {
    this.verificationService.cleanup_cells(this.cells);

    // uncomment to test fetch request
    //fetch(`http://localhost:12345/stats/set?lookup=${this.aiService.nr_steps_lookup}&side=${this.is_human_rabbit ? 'rabbit' : 'wolfes'}&steps=${this.human_steps}`);

    this.gameService.make_a_move(this.cells, [this.checker_to_move[0], this.checker_to_move[1]], [row_index, column_index]);
    const rabbit_cell: [number, number] = this.gameService.get_rabbit_cell();

    const rabbitMoves: [number, number][] = this.verificationService.get_rabbit_moves(this.cells, rabbit_cell[0], rabbit_cell[1]);

    const allWolfesMoves: [number,number][][] = [];
    for(const wolf of this.gameService.get_wolf_cells()) {
      allWolfesMoves.push(this.verificationService.get_wolf_moves(this.cells, wolf[0], wolf[1]));
    }

    const game_state: number = this.gameService.check_game_state(rabbitMoves, allWolfesMoves);
    if(game_state !== 0) {
      if((game_state === 1 && this.is_human_rabbit) || (game_state === -1 && !this.is_human_rabbit)) {
        fetch(`${this.STATS_SERVER_URL}/set?lookup=${this.aiService.nr_steps_lookup}&side=${this.is_human_rabbit ? 'rabbit' : 'wolfes'}&steps=${this.human_steps}`);
      }

      window.location.reload();
      return;
    }

    if(this.now_humans_turn) {
      this.human_steps++;
      this.now_humans_turn = false;
      this.activateAI();
    }
    else {
      this.now_humans_turn = true;
    }
  }

  checkerClick(row_index: number, column_index: number): void {
    if(!this.now_humans_turn) {
      return;
    }

    this.verificationService.cleanup_cells(this.cells);
    const is_rabbit: Boolean = this.is_rabbit_clicked(row_index, column_index);

    if(is_rabbit !== this.is_human_rabbit) {
      return;
    }

    this.verificationService.show_human_move_options(this.cells, row_index, column_index, is_rabbit);
    this.checker_to_move = [row_index, column_index];
  }

  private activateAI() {
    const best_decision: [number, number][] = this.aiService
    .calculate_best_decision(this.cells, this.gameService.get_rabbit_cell(), this.gameService.get_wolf_cells());

    if(best_decision[0] === undefined) {
      window.location.reload();
      return;
    }

    this.checker_to_move = best_decision[0];
    this.play(best_decision[1][0], best_decision[1][1]);
  }

  private is_rabbit_clicked(row_index: number, column_index: number) { return this.cells[row_index][column_index] === "Black_White"; }
}
