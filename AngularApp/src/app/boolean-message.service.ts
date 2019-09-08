import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooleanMessageService{
  private subject:Subject<boolean> =  new Subject<boolean>()
  constructor() { }
  sendMessage(message:boolean) {
      this.subject.next(message);
  }
  clearMessage() {
      this.subject.next();
  }
  getMessage(): Observable<boolean> {
      return this.subject.asObservable();
  }
  
}
