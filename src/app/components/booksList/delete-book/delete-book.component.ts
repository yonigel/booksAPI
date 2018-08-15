import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/bookService/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  @Input()
  selectedBook: Book

  @Input()
  bookList: Book[]

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.selectedBook = new Book();
  }

  private deleteBook(book: Book) {
    this.bookList = this.bookService.deleteBook(book, this.bookList)
  }

}
