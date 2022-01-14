import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  amount: number = 10;
  category: string = "Any";
  difficulty: string = "Any";

  constructor() { }
}
