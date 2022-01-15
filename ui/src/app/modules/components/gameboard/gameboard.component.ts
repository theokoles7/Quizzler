import { Component, Input, OnInit } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'q-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {
  @Input() theme: Themes = Themes.None;

  amount: number = 0;
  category: string = "----";
  difficulty: string = "----";

  getTheme(): String {
    return themeToString(this.theme);
  }

  getGameInfo():void{
    this.amount = this.gameService.amount;
    this.category = this.gameService.category;
    this.difficulty = this.gameService.difficulty;
  }

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGameInfo();
  }
}
