import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { QuestionComponent } from './question/question.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GameOverComponent } from './game-over/game-over.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SettingsDialogComponent,
    QuestionComponent,
    ScoreboardComponent,
    GameboardComponent,
    GameOverComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SettingsDialogComponent,
    QuestionComponent,
    ScoreboardComponent,
    GameboardComponent,
    GameOverComponent
  ]
})
export class ComponentsModule { }
