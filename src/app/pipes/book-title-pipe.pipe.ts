import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookTitlePipe'
})
export class BookTitlePipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    var parsedBookTitle: string = '';
    var bookTitleParts = value.split(" ");
    for(let bookTitlePart of bookTitleParts) {
      let newTitle: string = ''
      for(let bookTitleChar of bookTitlePart) {
        if(!bookTitleChar.match(/^[a-zA-Z]+$/)) {
          bookTitleChar = '';
        } 
        newTitle += bookTitleChar;
      }
      bookTitlePart = newTitle;
      bookTitlePart = bookTitlePart.charAt(0).toUpperCase() + bookTitlePart.slice(1).toLowerCase();
      parsedBookTitle += ` ${bookTitlePart}`;
    }
    return parsedBookTitle;
  }

}
