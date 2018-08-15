import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book';
import { Logger } from '../../../logger/logger';
import { BookService } from '../../../services/bookService/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input()
  selectedBook: Book

  private edittedBookTitle: string;
  private edittedBooksAuthor: string;
  private edittedBooksDate: Date;
  private isDateValid: boolean;
  private showBookTitleError: boolean
  private showBookAuthorError: boolean
  private logger: Logger;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.selectedBook = new Book();
    this.logger = new Logger("EditBookComponent");
    this.isDateValid = true;
    this.showBookTitleError = false;
    this.showBookAuthorError = false;
  }

  private saveBookChanges() {
    this.selectedBook.bookTitle = this.edittedBookTitle != undefined ? this.edittedBookTitle : this.selectedBook.bookTitle;
    this.selectedBook.authorsNames = this.edittedBooksAuthor != undefined ? this.edittedBooksAuthor.split(",") : this.selectedBook.authorsNames;

    if(this.edittedBooksDate != undefined) {
      this.isDateValid = this.bookService.isDateValid(this.edittedBooksDate)
      this.selectedBook.publishedDate = this.edittedBooksDate;
    }

    
  
    
  }

  private bookTitleChanged(newBookTitle) {
    this.logger.log('bookTitleChanged')
    if(newBookTitle == '') {
      this.showBookTitleError = true;
    }
    else {
      this.showBookTitleError = false;
    }
    this.edittedBookTitle = newBookTitle;
  }

  private bookAuthorChanged(newBookAuthor) {
    this.logger.log('bookAuthorChanged')
    if(newBookAuthor == '') {
      this.showBookAuthorError = true;
    }
    else {
      this.showBookAuthorError = false;
    }
    this.edittedBooksAuthor = newBookAuthor
    
  }

  private bookDateChanged(newBookDate: Date) {
    this.logger.log(`changed`)
    this.edittedBooksDate = newBookDate;
    this.isDateValid = this.bookService.isDateValid(this.edittedBooksDate);
    this.logger.log(`date validation is ${this.isDateValid}`)
  }


  
}
