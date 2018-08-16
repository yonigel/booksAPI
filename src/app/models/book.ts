export class Book {

    id: number;
    authorsNames: string[];
    publishedDate: Date;
    bookTitle: string;
    bookImageURL: string

    constructor(id: number = 0, authorsNames: string[] = [], publishedDate: Date = new Date(), bookTitle: string = '') {
        this.id = id;
        this.authorsNames = authorsNames;
        this.publishedDate = publishedDate;
        this.bookTitle = bookTitle;
   } 
   
}