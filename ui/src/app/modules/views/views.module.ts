import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { LicenseComponent } from './license/license.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    GameComponent,
    LicenseComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class ViewsModule { }
