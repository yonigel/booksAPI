import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input()
  selectedBook: Book

  constructor() { }

  ngOnInit() {
    this.selectedBook = new Book();
  }

}
