import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { parseTheme, Themes } from './modules/domain/Theme';
import { ThemeService } from './modules/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'[class.dark]': 'darkThemeIsEnabled'}
})
export class AppComponent {
  @Input() theme = Themes.Light;
  title = 'Quizzler';

  constructor(private elementRef: ElementRef, private themeService: ThemeService){}

  ngAfterViewInit(){
    window.setTimeout((_: any) => {
      this.loadTheme();
      this.updateHost();
    });
  }

  emitThemeChanged(theme: Themes){
    this.theme = theme;
    this.themeService.theme = theme;
    this.themeService.themeChanged.emit(theme);
    this.updateHost();
  }

  private loadTheme(): void{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
      this.theme = parseTheme(savedTheme);
    }
  }

  updateHost(){
    switch(this.theme){
      case Themes.Light:
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#EEE';
        break;
      case Themes.Dark:
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#123';
        break;
      default:
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='#EEE';
        break;
    }
  }
}
