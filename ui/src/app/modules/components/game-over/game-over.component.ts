import { Component, Input, OnInit } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';

@Component({
  selector: 'q-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {
  @Input() theme: Themes = Themes.None;

  visible: boolean = false;

  @Input() score: number = 0;
  @Input() correct: number = 0;
  @Input() incorrect: number = 0;

  getTheme(): string{
    return themeToString(this.theme);
  }

  show(): void{
    this.visible = true;
  }

  hide(): void{
    this.visible = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
