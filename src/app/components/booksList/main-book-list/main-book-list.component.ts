import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/bookService/book.service';
import { Logger } from '../../../logger/logger';
import { Book } from '../../../models/book';
import { BookEventsService } from '../../../events/bookEvents/book-events.service';

@Component({
  selector: 'app-main-book-list',
  templateUrl: './main-book-list.component.html',
  styleUrls: ['./main-book-list.component.css']
})
export class MainBookListComponent implements OnInit {

  bookList: Book[];
  private logger: Logger;
  private newBookAdded: boolean
  private newBookTitle: string

  constructor(private bookService: BookService, private bookEventsService: BookEventsService) {
    this.logger = new Logger(`MainBookListComponent`);
    this.bookEventsService.addNewBookAction$.subscribe(data => {
      this.newBookAdded = true;
      this.newBookTitle = data
    })
   }

  ngOnInit() {
    this.logger.log(`initializing`);
    this.newBookAdded = false
    this.newBookTitle = ''
    this.bookList = [];
    this.bookService.getBooks().subscribe(data => {
      for (let book of data.items) {
        let parsedBook: Book = this.bookService.parseBook(book)     
        this.bookList.push(parsedBook);
      }
    },
    error => {
      this.logger.error(`error occurred when getting books`)
    }
  )
  }

}
