import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../../domain/Question';
import { Themes, themeToString, parseTheme } from '../../domain/Theme';
import { RequestService } from '../../services/request.service';
import { ThemeService } from '../../services/theme.service';
import { GameService } from '../../services/game.service';
import { GameOverComponent } from '../../components/game-over/game-over.component';

@Component({
  selector: 'q-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  theme: Themes = Themes.None;
  questions!: Question[];

  correct: number = 0;
  incorrect: number = 0;
  score: number = 0;

  @ViewChild(GameOverComponent) gameOverDialog!: GameOverComponent;

  constructor(
    private themeService: ThemeService, 
    private requestService: RequestService,
    private http: HttpClient,
    private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.clear();
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
    console.log(JSON.stringify(this.questions));
  })
  }

  answerCorrect(): void{
    this.correct = ++this.gameService.correct;
    this.updateScore();
  }

  answerIncorrect(): void{
    this.incorrect = ++this.gameService.incorrect;
    this.updateScore();
  }

  updateScore(): void{
    this.score = (this.correct / this.gameService.amount) * 100;
    if(this.correct + this.incorrect === this.questions.length){
      this.gameOverDialog.show();
    }
  }
}
