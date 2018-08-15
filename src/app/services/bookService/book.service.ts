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
  private readonly GOOGLE_API_DATE_SEPERATOR = '-';
  private logger: Logger;
  private bookId: number;
  
  constructor(private httpService: HttpService) {
    this.logger = new Logger(`BookService`);
    this.bookId = 0;
   }

  getBooks(): Observable<any> {
    this.logger.log(`getting books Observable`)
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
      authorsNames.push('none');
    }
    parsedBook = new Book(this.bookId, authorsNames, parsedDate, bookData.volumeInfo.title);
    this.bookId++;
    return parsedBook;
  }

  parseBookTitle(bookTitle: string): string {
    var parsedBookTitle: string = '';
    var bookTitleParts = bookTitle.split(" ");
    for(let bookTitlePart of bookTitleParts) {
      let newTitle: string = ''
      for(let bookTitleChar of bookTitlePart) {
        if(!bookTitleChar.match(/^[a-zA-Z]+$/)) {
          this.logger.log(`${bookTitleChar} not match`)
          bookTitleChar = '';
        } 
        newTitle += bookTitleChar;
        this.logger.log(`newTitle is now ${newTitle}`)
      }
      bookTitlePart = newTitle;
      bookTitlePart = bookTitlePart.charAt(0).toUpperCase() + bookTitlePart.slice(1).toLowerCase();
      parsedBookTitle += ` ${bookTitlePart}`;
    }
    return parsedBookTitle;
  }

  isDateValid(date: Date): boolean {
    var result: boolean;
    var splitedDate: string[] = date.toString().split("/");
    this.logger.log(`splitedDate is ${splitedDate}`)
    if(splitedDate.length != 3) {
      this.logger.log(`splitted date length is ${splitedDate.length}`)
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

  deleteBook(selectedBook: Book, bookList: Book[]): Book[] {
    var newBookList: Book[] = []
    bookList.forEach(function(book, index) {
      if(book.id == selectedBook.id) {
        this.logger.log(`deleting book ${book.bookTitle}`)
        bookList.splice(index, 1)
      }
    }, this)

    return bookList
  }

  addBook(bookTitle: string, bookAuthor: string[], bookDate: Date, bookList: Book[]):Book[] {
    var newBookList: Book[] = []
    var newBook: Book = new Book(this.bookId, bookAuthor, bookDate, bookTitle)
    bookList.push(newBook)
    return bookList;
  }

  private parseDate(date: string, seperator: string): Date {
    var parsedDate = new Date();
    var dateModules = date.split(seperator);
    if(dateModules.length == 1) {
      parsedDate.setFullYear(parseInt(dateModules[0]), 1, 1)
    }
    else if(dateModules.length == 2) {
      parsedDate.setFullYear(parseInt(dateModules[0]), parseInt(dateModules[1])+1, 1)
    }
    else if(dateModules.length == 2) {
      parsedDate.setFullYear(parseInt(dateModules[0]), parseInt(dateModules[1])+1, parseInt(dateModules[2]))
    }
    return parsedDate;
  }
}
