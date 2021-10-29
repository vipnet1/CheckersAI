import { Component, OnInit } from '@angular/core';
import { VerificationService } from './services/verification.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cells: string[][] = [];
  cells_cleanup_cache: [number, number, string][] = [];
  checker_to_move: [number, number];

  constructor(private readonly verificationService: VerificationService) { }

  GoClick(row_index: number, column_index: number) {
    this.cleanup_cells();
    const currRow: number = this.checker_to_move[0];
    const currColumn: number = this.checker_to_move[1];
    const currStr: string = this.cells[currRow][currColumn];

    this.cells[currRow][currColumn] = "Black";
    this.cells[row_index][column_index] = currStr;
  }

  checkerClick(row_index: number, column_index: number): void {
    const isPlayingRabbit: Boolean = this.is_rabbit_clicked(row_index, column_index);
    this.cleanup_cells();

    const move_results: [number, number][] = this.verificationService
    .getAllowedMoves(this.cells, row_index, column_index, isPlayingRabbit);

    if(move_results) {
      for(let option of move_results) {

        if(option) {
          this.cells_cleanup_cache.push([option[0], option[1], this.cells[option[0]][option[1]]]);
          this.cells[option[0]][option[1]] = "Option";
        }
      }
  
      this.cells_cleanup_cache.push([row_index, column_index, this.cells[row_index][column_index]]);
      this.cells[row_index][column_index] = isPlayingRabbit ? "Black_Selected_White" : "Black_Selected_Black";
      this.checker_to_move = [row_index, column_index];
    }
  }

  cleanup_cells(): void {
    for(const cleanup_cell of this.cells_cleanup_cache) {
      this.cells[cleanup_cell[0]][cleanup_cell[1]] = cleanup_cell[2];
    }
    this.cells_cleanup_cache = [];
  }

  ngOnInit(): void {
    this.board_init();
    this.checkers_init();
    this.verificationService.set_is_rabbit(false);
  }

  is_rabbit_clicked(row_index: number, column_index: number) { return this.cells[row_index][column_index] === "Black_White"; }

  board_init(): void {
    let nextWhite: Boolean = true;
    for(let row: number = 0; row < 8; row++) {
      this.cells[row] = [];
      let currWhite: Boolean = nextWhite;
      nextWhite = !nextWhite;
      for(let column: number = 0; column < 8; column++) {
        this.cells[row][column] = currWhite ? "White" : "Black";
        currWhite = !currWhite;
      }
    }
  }

  checkers_init(): void {
    for(let column: number = 1; column < 8; column += 2) {
      this.cells[0][column] = "Black_Black";
    }

    this.cells[7][4] = "Black_White";
  }

}
