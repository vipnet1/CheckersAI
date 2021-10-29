import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  private isRabbit: Boolean;

  constructor() { this.isRabbit = true; }

  set_is_rabbit(isRabbit: Boolean): void { this.isRabbit = isRabbit; }

  getAllowedMoves(cells: string[][], row_index: number, column_index: number, isRabbitClicked: Boolean): any {
    if(this.isRabbit && isRabbitClicked) {
      return this.get_rabbit_moves(cells, row_index, column_index);
    }
    else if(!this.isRabbit && !isRabbitClicked){
      return this.get_wolf_moves(cells, row_index, column_index);
    }
    return undefined;
  }

  private get_rabbit_moves(cells: string[][], row_index: number, column_index: number): [number, number][] {
    const top_right: [number, number] = row_index > 0 && column_index < 7 && cells[row_index - 1][column_index + 1] === "Black" 
    ? [row_index - 1, column_index + 1] : undefined;

    const top_left: [number, number] = row_index > 0 && column_index > 0 && cells[row_index - 1][column_index - 1] === "Black" 
    ? [row_index - 1, column_index - 1] : undefined;
    
    const bottom_right: [number, number] = row_index < 7 && column_index < 7 && cells[row_index + 1][column_index + 1] === "Black" 
    ? [row_index + 1, column_index + 1] : undefined;

    const bottom_left: [number, number] = row_index < 7 && column_index > 0 && cells[row_index + 1][column_index - 1] === "Black" 
    ? [row_index + 1, column_index - 1] : undefined;

    
    return [top_left, top_right, bottom_right, bottom_left];
  }

  private get_wolf_moves(cells: string[][], row_index: number, column_index: number): [number, number][] {
    const bottom_right: [number, number] = row_index < 7 && column_index < 7 && cells[row_index + 1][column_index + 1] === "Black" 
    ? [row_index + 1, column_index + 1] : undefined;

    const bottom_left: [number, number] = row_index < 7 && column_index > 0 && cells[row_index + 1][column_index - 1] === "Black" 
    ? [row_index + 1, column_index - 1] : undefined;

    return [bottom_left, bottom_right];
  }

}
