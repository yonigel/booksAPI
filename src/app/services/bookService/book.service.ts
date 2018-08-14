import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { BookServiceInterface } from './book-service-interface';
import { Book } from '../../models/book';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService implements BaseService, BookServiceInterface{

  private booksURL: string = '../../data/bookData.json';
  
  constructor(private httpService: HttpService) { }

  getBooks(): Book[] {
    var books: Book[] = [];
    return books;
  }
}
