export class Book {

    id: string;
    authorsNames: string[];
    publishedDate: string;
    bookTitle: string;

    constructor(authorsNames: string[], publishedDate: string, bookTitle: string) {
        this.authorsNames = authorsNames;
        this.publishedDate = publishedDate;
        this.bookTitle = bookTitle;
   } 
}