import { Component, Input, OnInit } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'q-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() theme: Themes = Themes.None;
  @Input() last_result!: any;

  @Input() questions: number = this.gameService.amount;
  @Input() correct: number = 0;
  @Input() incorrect: number = 0;
  @Input() score: number = this.correct / this.questions;

  getLastResult(): String{
    return this.last_result;
  }

  getTheme(): String {
    return themeToString(this.theme);
  }

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

}
