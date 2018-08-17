import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { BookServiceInterface } from './book-service-interface';
import { Book } from '../../models/book';
import { HttpService } from '../httpService/http.service';
import { Logger } from '../../logger/logger';
import { Observable } from 'rxjs';
import { BookTitlePipePipe } from '../../pipes/book-title-pipe.pipe';
import { DateService } from '../dateService/date.service';

@Injectable({
  providedIn: 'root'
})
export class BookService implements BaseService, BookServiceInterface{

  private readonly BOOKS_DATA_URL: string = '../assets/booksData.json';
  private readonly GOOGLE_API_DATE_SEPERATOR = '-';
  private readonly USER_DATE_SEPERATOR = '/'
  private readonly DEFAULT_AUTHORS_NAME = 'none'
  private readonly JANUARY_MONTH = 1;
  private readonly FIRST_DAY_IN_MONTH = 1;
  private readonly VALID_DATE_SPLITTED_NUMBER = 3;
  private logger: Logger;
  private bookId: number;
  
  constructor(private dateService: DateService,private httpService: HttpService, private bookTitlePipe: BookTitlePipePipe) {
    this.logger = new Logger(`BookService`);
    this.bookId = 0;
   }

  getBooks(): Observable<any> {
    return this.httpService.getHttpRequest(this.BOOKS_DATA_URL);
  }

  parseBook(bookData): Book {
    var parsedBook: Book;
    var authorsNames: string[] = []
    var parsedBookTitle: string;
    var parsedDate: Date = this.parseDate(bookData.volumeInfo.publishedDate, this.GOOGLE_API_DATE_SEPERATOR);
    if(bookData.volumeInfo.authors != undefined) {
      authorsNames = Array.from(bookData.volumeInfo.authors)
    } 
    else {
      authorsNames.push(this.DEFAULT_AUTHORS_NAME);
    }
    parsedBook = new Book(this.bookId, authorsNames, parsedDate, bookData.volumeInfo.title);
    parsedBook.bookImageURL = bookData.volumeInfo.imageLinks.thumbnail
    this.bookId++;
    return parsedBook;
  }

  isDateValid(date: Date): boolean {
    var result: boolean;
    var splitedDate: string[] = date.toString().split(this.USER_DATE_SEPERATOR);
    if(splitedDate.length != this.VALID_DATE_SPLITTED_NUMBER) {
      result = false;
    }
    else if(splitedDate[0].length > 2 || splitedDate[1].length > 2 || splitedDate[2].length != 4 || splitedDate[0].length < 1 || splitedDate[1].length < 1) {
      result = false;
    }
    else {
      result = true;
    }
    return result;
  }

  isBookAlreadyExists(newBooksTitle: string, bookList: Book[]): boolean {
    var result: boolean = false    
    bookList.forEach(function(book) {
      if(this.bookTitlePipe.transform(newBooksTitle) == this.bookTitlePipe.transform(book.bookTitle)) {
        result = true;
      }
    }, this)
    return result;
  }

  deleteBook(selectedBook: Book, bookList: Book[]): Book[] {
    var newBookList: Book[] = []
    bookList.forEach(function(book, index) {
      if(book.id == selectedBook.id) {
        bookList.splice(index, 1)
      }
    }, this)
    return bookList
  }

  addBook(bookTitle: string, bookAuthor: string[], bookDate: Date, bookList: Book[]):Book[] {
    var newBook: Book = new Book(this.bookId, bookAuthor, bookDate, bookTitle)
    bookList.push(newBook)
    return bookList;
  }

  private parseDate(date: string, seperator: string): Date {
    var parsedDate = new Date();
    var month: number;
    var day: number
    var dateModules = date.split(seperator);
    if(dateModules.length == 1) {
      month = this.JANUARY_MONTH
      day = this.FIRST_DAY_IN_MONTH
    }
    else if(dateModules.length == 2) {
      month = this.dateService.fixMonth(parseInt(dateModules[1]))
      day = this.FIRST_DAY_IN_MONTH
    }
    else if(dateModules.length == 2) {
      month = this.dateService.fixMonth(parseInt(dateModules[1]))
      day = parseInt(dateModules[2])
    }
    else if(dateModules.length == 3) {
      month = this.dateService.fixMonth(parseInt(dateModules[1]))
      day = parseInt(dateModules[2])
    }
    parsedDate.setFullYear(parseInt(dateModules[0]), month, day)
    return parsedDate;
  }


}
