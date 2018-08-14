import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/bookService/book.service';
import { Logger } from '../../../logger/logger';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-main-book-list',
  templateUrl: './main-book-list.component.html',
  styleUrls: ['./main-book-list.component.css']
})
export class MainBookListComponent implements OnInit {

  private logger: Logger;

  constructor(private bookService: BookService) {
    this.logger = new Logger(`MainBookListComponent`);
   }

  ngOnInit() {
    this.logger.log(`initializing`);
    this.bookService.getBooks().subscribe(data => {
    
      for (let book of data.items) {
        let parsedBook: Book = this.bookService.parseBook(book)     
      }
    },
    error => {
      this.logger.error(`error occurred when getting books`)
    }
  )
  }

}
