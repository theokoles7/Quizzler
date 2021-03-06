import { Component, Input, OnInit } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';

@Component({
  selector: 'q-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() theme = Themes.None;

  getTheme(): string {
    return themeToString(this.theme);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
