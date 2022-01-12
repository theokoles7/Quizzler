import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Question } from '../../domain/Question';
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
  questions!: Question[];

  constructor(
    private themeService: ThemeService, 
    private requestService: RequestService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loadTheme();
    this.themeService.themeChanged.subscribe((theme) => {this.theme = theme});
    this.requestQuestions(this.requestService.url);
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

  private requestQuestions(url: string){
    this.http.get<any>(url).subscribe((loadedQuestions: { results: any; }) => {
    this.questions = loadedQuestions.results;
  })
  }
}
