import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  selectedBookEvent = new EventEmitter<Book>();

  private logger: Logger;
  private selectedBook: Book
  constructor() { }

  ngOnInit() {
    this.logger = new Logger("BooksComponent");
  }

  private setSelectedBook(book: Book) {
    this.selectedBook = book;
    this.selectedBookEvent.emit(book)
  }

  updateBookList(books: Book[]) {
    this.logger.log(`emitted`)
  }
}
