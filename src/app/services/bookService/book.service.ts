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
    var authorsNames: string[] = []
    this.logger.log(`parsing book`);
    if(bookData.volumeInfo.authors != undefined) {
      authorsNames = Array.from(bookData.volumeInfo.authors)
    } 
    else {
      authorsNames.push('none');
    }
    parsedBook = new Book(authorsNames, bookData.volumeInfo.publishedDate, bookData.volumeInfo.title);
    return parsedBook;
  }
}
