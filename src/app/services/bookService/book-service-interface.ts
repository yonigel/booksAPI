import { Book } from "../../models/book";
import { Observable } from "rxjs";

export interface BookServiceInterface {

    getBooks(): Observable<any>

    deleteBook(book: Book, bookList: Book[]): Book[]

    addBook()

    parseBook(book): Book

    parseBookTitle(bookTitle: string): string

    isDateValid(date): boolean



}
