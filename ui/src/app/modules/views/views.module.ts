import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { LicenseComponent } from './license/license.component';



@NgModule({
  declarations: [
    MenuComponent,
    GameComponent,
    LicenseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class ViewsModule { }
