export class Book {

    id: number;
    authorsNames: string[];
    publishedDate: string;
    bookTitle: string;

    constructor(id: number, authorsNames: string[], publishedDate: string, bookTitle: string) {
        this.id = id;
        this.authorsNames = authorsNames;
        this.publishedDate = publishedDate;
        this.bookTitle = bookTitle;
   } 
}