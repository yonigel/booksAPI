import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookEventsService {

  constructor() { }

  private addNewBookSubject = new Subject<string>() 

  addNewBookAction$ = this.addNewBookSubject.asObservable()

  alertNewBookAdded(newBooksTitle: string) {

    this.addNewBookSubject.next(newBooksTitle)

  }
}
