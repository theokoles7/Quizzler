import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'q-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() theme = Themes.None;

  @ViewChild(SettingsDialogComponent) settingsDialog!: SettingsDialogComponent;
  @Output() themeChanged: EventEmitter<Themes> = new EventEmitter();

  getTheme(): String {
    return themeToString(this.theme);
  }

  onSettingsClick(): void{
    this.settingsDialog.show();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
