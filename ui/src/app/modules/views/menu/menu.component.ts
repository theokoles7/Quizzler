import { Component, Input, OnInit } from '@angular/core';
import { parseTheme, Themes, themeToString } from '../../domain/Theme';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'q-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() theme: Themes = Themes.None;

  getTheme(): string{
    return themeToString(this.theme);
  }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.loadTheme();
    this.themeService.themeChanged.subscribe((theme) => (this.theme = theme));
  }

  private loadTheme(): void{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
      this.theme = parseTheme(savedTheme);
    }
  }

}
