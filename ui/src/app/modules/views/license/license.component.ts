import { Component, Input, OnInit } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';

@Component({
  selector: 'q-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {
  @Input() theme = Themes.Dark;

  getTheme(): String {
    return themeToString(this.theme);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
