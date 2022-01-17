import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './modules/views/game/game.component';
import { LicenseComponent } from './modules/views/license/license.component';
import { MenuComponent } from './modules/views/menu/menu.component';
import { NotFoundComponent } from './modules/views/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'game', component: GameComponent},
  {path: 'license', component: LicenseComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
