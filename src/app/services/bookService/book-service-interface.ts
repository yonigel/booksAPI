import { Book } from "../../models/book";
import { Observable } from "rxjs";

export interface BookServiceInterface {

    getBooks(): Observable<any>

    deleteBook(book: Book, bookList: Book[]): Book[]

    addBook(bookTitle: string, bookAuthor: string[], bookDate: Date, bookList: Book[]):Book[]

    parseBook(book): Book

    parseBookTitle(bookTitle: string): string

    isDateValid(date): boolean

    isBookAlreadyExists(newBooksTitle: string, bookList: Book[]): boolean
}
