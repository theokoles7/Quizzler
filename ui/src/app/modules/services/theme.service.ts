import { Injectable, EventEmitter } from '@angular/core';
import { Themes } from '../domain/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: Themes = Themes.None;
  themeChanged: EventEmitter<Themes> = new EventEmitter;

  constructor() { }
}
