import { Component, Input, OnInit } from '@angular/core';
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

  private combineAnswers() {
    this.answers = this.incorrect_answers;
    this.answers.push(this.correct_answer);
    this.shuffle(this.answers);
    return this.answers;
  }

  getTheme(): string {
    return themeToString(this.theme);
  }

  private shuffle(arr: string[]): void {
    let curr = arr.length, rand;
    while (curr != 0) {
      rand = Math.floor(Math.random() * curr);
      curr--;
      [arr[curr], arr[rand]] = [arr[rand], arr[curr]];
    }
  }

  private cleanQ(q: string): string{
    const a = /&quot;/gi;
    const b = /&#039;/gi;
    const c = /&amp;/gi;
    q = q.replace(a, "\'");
    q = q.replace(b, "\'");
    q = q.replace(c, "&");
    return q;
  }

  constructor() { }

  ngOnInit(): void {
    this.answers = this.combineAnswers();
    this.category = shortCat(this.category);
    this.question = this.cleanQ(this.question);
  }

}
