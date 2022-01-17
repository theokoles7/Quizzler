import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  amount: number = 10;
  category: string = "Any";
  difficulty: string = "Any";

  correct: number = 0;
  incorrect: number = 0;
  score: number = this.correct / this.amount;

  clear(): void{
    this.correct = 0;
    this.incorrect = 0;
    this.score = 0;
  }

  constructor() { }
}
