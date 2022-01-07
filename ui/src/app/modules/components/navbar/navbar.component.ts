import { Component, Input, OnInit } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';

@Component({
  selector: 'q-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() theme = Themes.Dark;

  getTheme(): String {
    return themeToString(this.theme);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
