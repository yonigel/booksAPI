import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/bookService/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @Input()
  bookList: Book[]

  private isDateValid: boolean
  private bookAuthorInvalid: boolean
  private bookTitleInvalid: boolean
  private newBookTitle: string;
  private newBookAuthor: string[]
  private newbookDate: Date
  

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.isDateValid = true;
    this.bookAuthorInvalid = false
    this.bookTitleInvalid = false
    this.newBookAuthor = []
    this.newBookTitle = ''
  }

  private addNewBook() {
    this.bookList = this.bookService.addBook(this.newBookTitle, this.newBookAuthor, this.newbookDate, this.bookList)
  }

  private bookDateChanged(date: Date) {
    this.newbookDate = date;
    this.isDateValid = this.bookService.isDateValid(this.newbookDate);
  }

  private bookAuthorChanged(author: string) {
    if(author == '') {
      this.bookAuthorInvalid = true;
      
    }
    else {
      this.bookAuthorInvalid = false
      this.newBookAuthor = author.split(",")
    }
  }

  private bookTitleChanged(title: string) {
    this.newBookTitle = title
    if(this.newBookTitle == '') {
      this.bookTitleInvalid = true
    }
    else {
      this.bookTitleInvalid = false
    }
  }

}