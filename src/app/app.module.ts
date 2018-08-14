import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainBookListComponent } from './components/booksList/main-book-list/main-book-list.component';
import { BooksComponent } from './components/booksList/books/books.component';

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
    BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
