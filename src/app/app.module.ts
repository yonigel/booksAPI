import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainBookListComponent } from './components/booksList/main-book-list/main-book-list.component';
import { BooksComponent } from './components/booksList/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { EditBookComponent } from './components/booksList/edit-book/edit-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteBookComponent } from './components/booksList/delete-book/delete-book.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookTitlePipePipe } from './pipes/book-title-pipe.pipe';
import { AddBookComponent } from './components/booksList/add-book/add-book.component';

const appRoutes: Routes = [
  { path: 'books', component: MainBookListComponent },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  { path: '**', component: MainBookListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBookListComponent,
    BooksComponent,
    EditBookComponent,
    DeleteBookComponent,
    BookTitlePipePipe,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [BookTitlePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
