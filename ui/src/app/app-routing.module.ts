import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseComponent } from './modules/views/license/license.component';
import { MenuComponent } from './modules/views/menu/menu.component';
import { SettingsDialogComponent } from './modules/components/settings-dialog/settings-dialog.component';

const routes: Routes = [
  {path: '', component: SettingsDialogComponent},
  {path: 'license', component: LicenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
