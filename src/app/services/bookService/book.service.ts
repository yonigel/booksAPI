import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { BookServiceInterface } from './book-service-interface';
import { Book } from '../../models/book';
import { HttpService } from '../httpService/http.service';
import { Logger } from '../../logger/logger';

@Injectable({
  providedIn: 'root'
})
export class BookService implements BaseService, BookServiceInterface{

  private readonly BOOKS_DATA_URL: string = '../assets/booksData.json';
  private logger: Logger;
  
  constructor(private httpService: HttpService) {
    this.logger = new Logger(`BookService`);
   }

  getBooks(): Book[] {
    this.logger.log(`getting books`)
    var books: Book[] = [];
    this.httpService.getHttpRequest(this.BOOKS_DATA_URL).subscribe(data => {
      console.log(data)
    })
    return books;
  }
}
