import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'q-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
