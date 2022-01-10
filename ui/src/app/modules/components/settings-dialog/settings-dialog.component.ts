import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';

const ESC_KEY = 27;

@Component({
  selector: 'q-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent implements OnInit {
  @Input() theme = Themes.Light;
  @Output() themeChanged: EventEmitter<Themes> = new EventEmitter;
  visible: Boolean = false;

  getTheme(): String {
    return themeToString(this.theme);
  }

  enableLightTheme(): void{
    this.enableTheme(Themes.Light);
  }

  enableDarkTheme(): void{
    this.enableTheme(Themes.Dark);
  }

  private enableTheme(theme: Themes): void{
    this.theme = theme;
    this.themeChanged.emit(this.theme);
    this.saveTheme();
  }

  private saveTheme(): void{
    const themeString = themeToString(this.theme);
    if(themeString !== ''){
      localStorage.setItem('theme', themeString);
    }
  }

  show(): void{
    this.visible = true;
    document.onkeydown = (event) => {
      if(event.keyCode === ESC_KEY){
        this.hide();
      }
    };
  }

  hide(): void{
    this.visible = false;
    document.onkeydown = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
