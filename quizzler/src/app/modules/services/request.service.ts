import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url: string = "https://opentdb.com/api.php?amount=10";
  urlChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }
}
