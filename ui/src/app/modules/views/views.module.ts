import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { LicenseComponent } from './license/license.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    MenuComponent,
    GameComponent,
    LicenseComponent,
    NotFoundComponent,
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
