import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';



@NgModule({
  declarations: [
    MenuComponent,
    GameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
