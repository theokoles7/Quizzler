import { Component, OnInit } from '@angular/core';
import { Themes, themeToString, parseTheme } from '../../domain/Theme';
import { RequestService } from '../../services/request.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'q-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  theme: Themes = Themes.None;
  url: string = "hello";

  constructor(
    private themeService: ThemeService, 
    private requestService: RequestService) { }

  ngOnInit(): void {
    this.loadTheme();
    this.themeService.themeChanged.subscribe((theme) => {this.theme = theme});
    this.requestService.urlChanged.subscribe((url) => {this.url = url});
    this.url = this.requestService.url;
  }

  getTheme(): string{
    return themeToString(this.theme);
  }

  private loadTheme(): void{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
      this.theme = parseTheme(savedTheme);
    }
  }
}
