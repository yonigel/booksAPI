import { Book } from "../../models/book";

export interface BookServiceInterface {

    getBooks(): Book[]
}
