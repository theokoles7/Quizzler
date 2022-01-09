import { Component, ElementRef, Input } from '@angular/core';
import { Themes } from './modules/domain/Theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() theme = Themes.Light;
  title = 'Quizzler';

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit(){
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
