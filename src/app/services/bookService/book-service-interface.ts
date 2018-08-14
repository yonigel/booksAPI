import { Book } from "../../models/book";
import { Observable } from "rxjs";

export interface BookServiceInterface {

    getBooks(): Observable<any>

    parseBook(book): Book
}
