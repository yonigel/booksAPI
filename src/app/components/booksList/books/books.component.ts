import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book';
import { Logger } from '../../../logger/logger';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @Input()
  bookList: Book[];

  private logger: Logger;

  constructor() { }

  ngOnInit() {
    this.logger = new Logger("BooksComponent");
  }

}
