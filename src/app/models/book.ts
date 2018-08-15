export class Book {

    id: number;
    authorsNames: string[];
    publishedDate: Date;
    bookTitle: string;

    constructor(id: number = 0, authorsNames: string[] = [], publishedDate: Date = new Date(), bookTitle: string = '') {
        this.id = id;
        this.authorsNames = authorsNames;
        this.publishedDate = publishedDate;
        this.bookTitle = bookTitle;
   } 

    getDateString():string {
        return `${this.publishedDate.getDay()}/${this.publishedDate.getMonth()}/${this.publishedDate.getFullYear()}`;
    }
}