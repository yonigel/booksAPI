export class Book {

    id: string;
    authorName: string;
    publishedDate: string;
    bookTitle: string;

    constructor(authorName: string, publishedDate: string, bookTitle: string) {
        this.authorName = authorName;
        this.publishedDate = publishedDate;
        this.bookTitle = bookTitle;
   } 
}