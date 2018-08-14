import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { BookServiceInterface } from './book-service-interface';
import { Book } from '../../models/book';
import { HttpService } from '../httpService/http.service';
import { Logger } from '../../logger/logger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService implements BaseService, BookServiceInterface{

  private readonly BOOKS_DATA_URL: string = '../assets/booksData.json';
  private logger: Logger;
  
  constructor(private httpService: HttpService) {
    this.logger = new Logger(`BookService`);
   }

  getBooks(): Observable<any> {
    this.logger.log(`getting books Observable`)
    return this.httpService.getHttpRequest(this.BOOKS_DATA_URL);
  }

  parseBook(bookData): Book {
    var parsedBook: Book;
    this.logger.log(`parsing book`);
    this.logger.log(JSON.stringify(bookData.volumeInfo.title))
    return parsedBook;
  }
}
