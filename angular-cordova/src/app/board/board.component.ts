import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cells: string[][] = [];

  constructor() { }

  checkerClick(row_index: number, column_index: number): void {
    this.cells[row_index][column_index] = "Black";
  }

  ngOnInit(): void {
    this.board_init();
    this.checkers_init();
  }

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
    console.log(this.cells)
  }

  checkers_init(): void {
    for(let column: number = 1; column < 8; column += 2) {
      this.cells[0][column] = "Black_Black";
    }

    this.cells[7][4] = "Black_White";
  }

}
