import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/bookService/book.service';
import { Logger } from '../../../logger/logger';

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
    console.log("lalala")
    this.bookService.getBooks();
  }

}
