import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book';
import { Logger } from '../../../logger/logger';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input()
  selectedBook: Book

  private edittedBookTitle: string;
  private logger: Logger;

  constructor() { }

  ngOnInit() {
    this.selectedBook = new Book();
    this.logger = new Logger("EditBookComponent");
  }

  private saveBookChanges() {
    this.logger.log(this.edittedBookTitle)
    this.selectedBook.bookTitle = this.edittedBookTitle; 
  }

}
