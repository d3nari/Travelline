import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<object>({});
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(data: object) {
    this.messageSource.next(data)
  }

}