import { Component, Input, OnInit } from '@angular/core';
import { parseTheme, Themes, themeToString } from '../../domain/Theme';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'q-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {
  @Input() theme = Themes.Light;

  getTheme(): string {
    return themeToString(this.theme);
  }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.loadTheme();
    this.themeService.themeChanged.subscribe((theme) => {this.theme = theme});
  }

  private loadTheme(): void{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
      this.theme = parseTheme(savedTheme);
    }
  }

}
