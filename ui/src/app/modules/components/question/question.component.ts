import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Themes, themeToString } from '../../domain/Theme';
import { Categories, shortCat } from '../../domain/Category';

@Component({
  selector: 'q-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() theme: Themes = Themes.None;

  @Input() category!: any;
  @Input() type!: any;
  @Input() difficulty!: any;
  @Input() question!: any;
  @Input() correct_answer!: any;
  @Input() incorrect_answers!: any;
  answers!: any;
  answered: boolean = false;

  @Output() answerCorrect: EventEmitter<void> = new EventEmitter();
  @Output() answerIncorrect: EventEmitter<void> = new EventEmitter();

  checkAnswer(s: string, a: string): void{
    if (s === a){this.answerCorrect.emit();}
    else{this.answerIncorrect.emit();}
    this.answered = true;
  }

  private combineAnswers() {
    this.answers = this.incorrect_answers;
    this.answers.push(this.correct_answer);
    this.shuffle(this.answers);
    for(let i = 0; i < this.answers.length; i++){
      this.answers[i] = this.cleanString(this.answers[i]);
    }
    return this.answers;
  }

  getTheme(): string {
    return themeToString(this.theme);
  }

  getResult(s: string, a: string): string{
    if (s === a){return "correct";}
    else{return "incorrect";}
  }

  private shuffle(arr: string[]): void {
    let curr = arr.length, rand;
    while (curr != 0) {
      rand = Math.floor(Math.random() * curr);
      curr--;
      [arr[curr], arr[rand]] = [arr[rand], arr[curr]];
    }
  }

  private cleanString(s: string): string{
    s = s.replace(/&quot;/gi, "\"");
    s = s.replace(/&#039;/gi, "\'");
    s = s.replace(/&amp;/gi, "&");
    s = s.replace(/&euml;/gi, "e");
    s = s.replace(/&ecirc;/gi, "e");
    s = s.replace(/&eacute;/gi, "e");
    s = s.replace(/&uacute;/gi, "u");
    s = s.replace(/&atilde;/gi, "a");
    s = s.replace(/&oacute;/gi, "o");
    s = s.replace(/&reg;/gi, "");
    s = s.replace(/&trade;/gi, "");
    s = s.replace(/&gt;/gi, ">");
    s = s.replace(/&lt;/gi, "<");
    s = s.replace(/&ntilde;/gi, "n");
    s = s.replace(/&prime;/gi, "\'");
    return s;
  }

  constructor() { }

  ngOnInit(): void {
    this.answers = this.combineAnswers();
    this.category = shortCat(this.category);
    this.question = this.cleanString(this.question);
  }

}