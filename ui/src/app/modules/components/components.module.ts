import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SettingsDialogComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    ButtonComponent,
    SettingsDialogComponent
  ]
})
export class ComponentsModule { }
