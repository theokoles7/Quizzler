import { Component, Input, OnInit } from '@angular/core';
import { parseTheme, Themes, themeToString } from '../../domain/Theme';
import { ThemeService } from '../../services/theme.service';
import { Categories, catToNum } from '../../domain/Category';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'q-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() amount: number = 10;
  @Input() theme: Themes = Themes.None;

  category: number = 0;
  difficulty: string = "any";
  type: string = "any";
  url: string = "";

  getTheme(): string{
    return themeToString(this.theme);
  }

  constructor(
    private themeService: ThemeService, 
    private requestService: RequestService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadTheme();
    this.themeService.themeChanged.subscribe((theme) => (this.theme = theme));
  }

  setAmount(num: number): void{
    this.amount = num;
  }

  setCategory(num: number): void{
    this.category = num;
  }

  setDifficulty(diff: string): void{
    this.difficulty = diff;
  }

  setType(type: string): void{
    this.type = type;
  }

  clearMenu(): void{
    this.amount = 10;
    this.category = 0;
    this.difficulty = "any";
    this.type = "any";
  }

  beginGame(){
    this.url = "https://opentdb.com/api.php?amount=" + this.amount;

    if(this.category != 0){
      this.url += "&category=" + this.category;
    }

    if(this.difficulty != "any"){
      this.url += "&difficulty=" + this.difficulty;
    }

    if(this.type != "any"){
      this.url += "&type=" + this.type;
    }

    this.requestService.url = this.url;
    this.requestService.urlChanged.emit(this.url);
    this.router.navigateByUrl('/game');
  }

  private loadTheme(): void{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
      this.theme = parseTheme(savedTheme);
    }
  }

}
