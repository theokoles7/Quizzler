import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SettingsDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SettingsDialogComponent
  ]
})
export class ComponentsModule { }
