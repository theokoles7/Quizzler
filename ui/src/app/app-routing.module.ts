import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseComponent } from './modules/views/license/license.component';
import { MenuComponent } from './modules/views/menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'license', component: LicenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
