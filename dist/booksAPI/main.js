(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_booksList_main_book_list_main_book_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/booksList/main-book-list/main-book-list.component */ "./src/app/components/booksList/main-book-list/main-book-list.component.ts");
/* harmony import */ var _components_booksList_books_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/booksList/books/books.component */ "./src/app/components/booksList/books/books.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_booksList_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/booksList/edit-book/edit-book.component */ "./src/app/components/booksList/edit-book/edit-book.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_booksList_delete_book_delete_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/booksList/delete-book/delete-book.component */ "./src/app/components/booksList/delete-book/delete-book.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _pipes_book_title_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/book-title-pipe.pipe */ "./src/app/pipes/book-title-pipe.pipe.ts");
/* harmony import */ var _components_booksList_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/booksList/add-book/add-book.component */ "./src/app/components/booksList/add-book/add-book.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'books', component: _components_booksList_main_book_list_main_book_list_component__WEBPACK_IMPORTED_MODULE_6__["MainBookListComponent"] },
    { path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
    { path: '**', component: _components_booksList_main_book_list_main_book_list_component__WEBPACK_IMPORTED_MODULE_6__["MainBookListComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_booksList_main_book_list_main_book_list_component__WEBPACK_IMPORTED_MODULE_6__["MainBookListComponent"],
                _components_booksList_books_books_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"],
                _components_booksList_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_9__["EditBookComponent"],
                _components_booksList_delete_book_delete_book_component__WEBPACK_IMPORTED_MODULE_11__["DeleteBookComponent"],
                _pipes_book_title_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__["BookTitlePipePipe"],
                _components_booksList_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_14__["AddBookComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false })
            ],
            providers: [_pipes_book_title_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__["BookTitlePipePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/booksList/add-book/add-book.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/booksList/add-book/add-book.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booksList/add-book/add-book.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/booksList/add-book/add-book.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"addBook\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Add new book</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label>Book title</label>\n              <input type=\"text\" class=\"form-control\" name=\"edittedBookTitle\" id=\"bookTitleInput\" placeholder=\"Title\" (keyup)=\"bookTitleChanged($event.target.value)\">\n              <span [hidden]=\"!bookTitleInvalid\" class=\"badge badge-danger\">Book's title can't be empty</span>\n              <span [hidden]=\"!isNewBookExists\" class=\"badge badge-danger\">This book is already exists</span>\n            </div>\n            <div class=\"form-group\">\n              <label>Authors</label>\n              <input type=\"text\" class=\"form-control\" id=\"authorsInput\"  name=\"edittedBooksAuthor\" placeholder=\"Author(s)\" (keyup)=\"bookAuthorChanged($event.target.value)\">\n              <span [hidden]=\"!bookAuthorInvalid\" class=\"badge badge-danger\">Book's author can't be empty</span>\n            </div>\n            <div class=\"form-group\">\n              <label>Published date</label>\n              <input type=\"text\" class=\"form-control\" id=\"publishedDateInput\" placeholder=\"dd/mm/yyyy\" (keyup)=\"bookDateChanged($event.target.value)\">\n              <span [hidden]=\"isDateValid == true\" class=\"badge badge-danger\">Date is invalid. Please enter date in format dd/mm/yyyy</span>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewBook()\" [attr.disabled]=\"(newBookAuthor == '' || newBookTitle == '' || isDateValid == false || isNewBookExists == true || newbookDate == null) ? '' : null\" data-dismiss=\"modal\">Add book</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/booksList/add-book/add-book.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/booksList/add-book/add-book.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bookService_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/bookService/book.service */ "./src/app/services/bookService/book.service.ts");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logger/logger */ "./src/app/logger/logger.ts");
/* harmony import */ var _events_bookEvents_book_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../events/bookEvents/book-events.service */ "./src/app/events/bookEvents/book-events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(bookService, bookEventsService) {
        this.bookService = bookService;
        this.bookEventsService = bookEventsService;
    }
    AddBookComponent.prototype.ngOnInit = function () {
        this.logger = new _logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]("AddBookComponent");
        this.initLayout();
    };
    AddBookComponent.prototype.initLayout = function () {
        this.isDateValid = true;
        this.bookAuthorInvalid = false;
        this.bookTitleInvalid = false;
        this.isNewBookExists = false;
        this.newBookAuthor = [];
        this.newBookTitle = '';
    };
    AddBookComponent.prototype.addNewBook = function () {
        this.bookList = this.bookService.addBook(this.newBookTitle, this.newBookAuthor, this.newbookDate, this.bookList);
        this.bookEventsService.alertNewBookAdded(this.newBookTitle);
    };
    AddBookComponent.prototype.bookDateChanged = function (date) {
        this.newbookDate = date;
        this.isDateValid = this.bookService.isDateValid(this.newbookDate);
    };
    AddBookComponent.prototype.bookAuthorChanged = function (author) {
        if (author == '') {
            this.bookAuthorInvalid = true;
        }
        else {
            this.bookAuthorInvalid = false;
            this.newBookAuthor = author.split(",");
        }
    };
    AddBookComponent.prototype.bookTitleChanged = function (title) {
        this.newBookTitle = title;
        if (this.newBookTitle == '') {
            this.bookTitleInvalid = true;
        }
        else {
            this.bookTitleInvalid = false;
        }
        this.isNewBookExists = this.bookService.isBookAlreadyExists(title, this.bookList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddBookComponent.prototype, "bookList", void 0);
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/components/booksList/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/components/booksList/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bookService_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _events_bookEvents_book_events_service__WEBPACK_IMPORTED_MODULE_3__["BookEventsService"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/components/booksList/books/books.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/booksList/books/books.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bookCard {\r\n    padding: 0;\r\n    margin: 1% 0;\r\n}\r\n\r\n.bookRow {\r\n    width: 90%;\r\n    margin: 2% auto;\r\n}\r\n\r\n.buttonBookCard {\r\n    margin: 0 1%;  \r\n}\r\n\r\na.bookHeader {\r\n    margin-right: 0;\r\n    margin-left: 1%;\r\n    text-align: right;\r\n}\r\n\r\ndiv.bookHeader {\r\n    /* min-height: 3.5em; */\r\n}\r\n\r\ndiv.bookBody {\r\n    min-height: 10em;\r\n}"

/***/ }),

/***/ "./src/app/components/booksList/books/books.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/booksList/books/books.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bookRow\" >\n  <div *ngFor=\"let book of bookList\" class=\"card col-md-4 bookCard  bg-light\">\n    <div class=\"card-header \">\n      <div class=\"row bookHeader\">\n        <b style=\"margin: auto auto\">{{book.bookTitle | bookTitlePipe}}</b>\n      </div>\n    </div>\n    <div class=\"card-body \">\n      <h6 class=\"card-subtitle mb-2 text-muted\" style=\"text-align: center\"><img src=\"{{book.bookImageURL}}\" style=\"margin: auto auto;\"></h6>\n      <h6 class=\"card-subtitle mb-2 text-muted\"><b>id:</b> {{book.id}}</h6>\n      <h6 class=\"card-subtitle mb-2 text-muted\"><b>Author(s):</b> {{book.authorsNames}}</h6>\n      <h6 class=\"card-subtitle mb-2 text-muted\"><b>Publish date:</b>{{book.publishedDate | date:\"dd/MM/yyyy\"}}</h6>\n    </div>\n    <div class=\"card-footer\">\n      \n        <a href=\"#\" class=\"badge badge-dark bookHeader\" (click)=\"setSelectedBook(book)\" data-toggle=\"modal\" data-target=\"#editBook\"><i class=\"fa fa-edit\"></i> Edit</a>\n        <a href=\"#\" class=\"badge badge-dark bookHeader\" (click)=\"setSelectedBook(book)\" data-toggle=\"modal\" data-target=\"#deleteBook\"><i class=\"fa fa-close\"></i> Delete</a>\n    </div>\n  </div>\n</div>\n\n<app-edit-book [selectedBook]=\"selectedBook\"></app-edit-book>\n<app-delete-book [selectedBook]=\"selectedBook\" [bookList]=\"bookList\"></app-delete-book>"

/***/ }),

/***/ "./src/app/components/booksList/books/books.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/booksList/books/books.component.ts ***!
  \***************************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../logger/logger */ "./src/app/logger/logger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.logger = new _logger_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"]("BooksComponent");
    };
    BooksComponent.prototype.setSelectedBook = function (book) {
        this.selectedBook = book;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BooksComponent.prototype, "bookList", void 0);
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/components/booksList/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/components/booksList/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/components/booksList/delete-book/delete-book.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/booksList/delete-book/delete-book.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booksList/delete-book/delete-book.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/booksList/delete-book/delete-book.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"deleteBook\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Delete book</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          Are you sure you want to delete book <b>{{selectedBook.bookTitle}}</b>?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteBook(selectedBook)\" data-dismiss=\"modal\">OK</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/booksList/delete-book/delete-book.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/booksList/delete-book/delete-book.component.ts ***!
  \***************************************************************************/
/*! exports provided: DeleteBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBookComponent", function() { return DeleteBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/book */ "./src/app/models/book.ts");
/* harmony import */ var _services_bookService_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/bookService/book.service */ "./src/app/services/bookService/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteBookComponent = /** @class */ (function () {
    function DeleteBookComponent(bookService) {
        this.bookService = bookService;
    }
    DeleteBookComponent.prototype.ngOnInit = function () {
        this.selectedBook = new _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"]();
    };
    DeleteBookComponent.prototype.deleteBook = function (book) {
        this.bookList = this.bookService.deleteBook(book, this.bookList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], DeleteBookComponent.prototype, "selectedBook", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DeleteBookComponent.prototype, "bookList", void 0);
    DeleteBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-book',
            template: __webpack_require__(/*! ./delete-book.component.html */ "./src/app/components/booksList/delete-book/delete-book.component.html"),
            styles: [__webpack_require__(/*! ./delete-book.component.css */ "./src/app/components/booksList/delete-book/delete-book.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bookService_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], DeleteBookComponent);
    return DeleteBookComponent;
}());



/***/ }),

/***/ "./src/app/components/booksList/edit-book/edit-book.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/booksList/edit-book/edit-book.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booksList/edit-book/edit-book.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/booksList/edit-book/edit-book.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"editBook\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Edit book</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Book title</label>\n            <input type=\"text\" class=\"form-control\" name=\"edittedBookTitle\" id=\"bookTitleInput\" value=\"{{selectedBook.bookTitle}}\" (keyup)=\"bookTitleChanged($event.target.value)\">\n            <span [hidden]=\"!showBookTitleError\" class=\"badge badge-danger\">Book's title can't be empty</span>\n          </div>\n          <div class=\"form-group\">\n            <label>Authors</label>\n            <input type=\"text\" class=\"form-control\" id=\"authorsInput\"  name=\"edittedBooksAuthor\" value=\"{{selectedBook.authorsNames}}\" (keyup)=\"bookAuthorChanged($event.target.value)\">\n            <span [hidden]=\"!showBookAuthorError\" class=\"badge badge-danger\">Book's author can't be empty</span>\n          </div>\n          <div class=\"form-group\">\n            <label>Published date</label>\n            <input type=\"text\" class=\"form-control\" id=\"publishedDateInput\" value=\"{{selectedBook.publishedDate | date:'dd/MM/yyyy'}}\" (keyup)=\"bookDateChanged($event.target.value)\">\n            <span [hidden]=\"isDateValid == true\" class=\"badge badge-danger\">Date is invalid. Please enter date in format dd/mm/yyyy</span>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveBookChanges()\" [attr.disabled]=\"(edittedBooksAuthor == '' || edittedBookTitle == '' || isDateValid == false) ? '' : null\" data-dismiss=\"modal\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/booksList/edit-book/edit-book.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/booksList/edit-book/edit-book.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/book */ "./src/app/models/book.ts");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logger/logger */ "./src/app/logger/logger.ts");
/* harmony import */ var _services_bookService_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/bookService/book.service */ "./src/app/services/bookService/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(bookService) {
        this.bookService = bookService;
    }
    EditBookComponent.prototype.ngOnInit = function () {
        this.selectedBook = new _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"]();
        this.logger = new _logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]("EditBookComponent");
        this.isDateValid = true;
        this.showBookTitleError = false;
        this.showBookAuthorError = false;
    };
    EditBookComponent.prototype.saveBookChanges = function () {
        this.selectedBook.bookTitle = this.edittedBookTitle != undefined ? this.edittedBookTitle : this.selectedBook.bookTitle;
        this.selectedBook.authorsNames = this.edittedBooksAuthor != undefined ? this.edittedBooksAuthor.split(",") : this.selectedBook.authorsNames;
        if (this.edittedBooksDate != undefined) {
            this.isDateValid = this.bookService.isDateValid(this.edittedBooksDate);
            this.selectedBook.publishedDate = this.edittedBooksDate;
        }
    };
    EditBookComponent.prototype.bookTitleChanged = function (newBookTitle) {
        this.logger.log('bookTitleChanged');
        if (newBookTitle == '') {
            this.showBookTitleError = true;
        }
        else {
            this.showBookTitleError = false;
        }
        this.edittedBookTitle = newBookTitle;
    };
    EditBookComponent.prototype.bookAuthorChanged = function (newBookAuthor) {
        this.logger.log('bookAuthorChanged');
        if (newBookAuthor == '') {
            this.showBookAuthorError = true;
        }
        else {
            this.showBookAuthorError = false;
        }
        this.edittedBooksAuthor = newBookAuthor;
    };
    EditBookComponent.prototype.bookDateChanged = function (newBookDate) {
        this.logger.log("changed");
        this.edittedBooksDate = newBookDate;
        this.isDateValid = this.bookService.isDateValid(this.edittedBooksDate);
        this.logger.log("date validation is " + this.isDateValid);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], EditBookComponent.prototype, "selectedBook", void 0);
    EditBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-book',
            template: __webpack_require__(/*! ./edit-book.component.html */ "./src/app/components/booksList/edit-book/edit-book.component.html"),
            styles: [__webpack_require__(/*! ./edit-book.component.css */ "./src/app/components/booksList/edit-book/edit-book.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bookService_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "./src/app/components/booksList/main-book-list/main-book-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/booksList/main-book-list/main-book-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.mainBookRow {\r\n    width: 90%; \r\n    margin: 2% auto;\r\n}"

/***/ }),

/***/ "./src/app/components/booksList/main-book-list/main-book-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/booksList/main-book-list/main-book-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mainBookRow\">\r\n    <div [hidden]=\"!newBookAdded\" style=\"display: inline; margin-top: 1%;\" class=\"alert alert-success\" role=\"alert\">\r\n        <i class=\"fa fa-check-circle-o\"></i>\r\n        The book <b>{{newBookTitle}}</b> was successfully added!\r\n        <a href=\"#\" style=\"color: #f46542\" (click)=\"newBookAdded = false\"><i class=\"fa fa-times-circle-o\"></i></a>\r\n    </div>\r\n</div>\r\n\r\n<app-books [bookList]=\"bookList\"></app-books>\r\n<app-add-book [bookList]=\"bookList\"></app-add-book>\r\n"

/***/ }),

/***/ "./src/app/components/booksList/main-book-list/main-book-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/booksList/main-book-list/main-book-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MainBookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBookListComponent", function() { return MainBookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bookService_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/bookService/book.service */ "./src/app/services/bookService/book.service.ts");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logger/logger */ "./src/app/logger/logger.ts");
/* harmony import */ var _events_bookEvents_book_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../events/bookEvents/book-events.service */ "./src/app/events/bookEvents/book-events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainBookListComponent = /** @class */ (function () {
    function MainBookListComponent(bookService, bookEventsService) {
        var _this = this;
        this.bookService = bookService;
        this.bookEventsService = bookEventsService;
        this.logger = new _logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]("MainBookListComponent");
        this.bookEventsService.addNewBookAction$.subscribe(function (data) {
            _this.newBookAdded = true;
            _this.newBookTitle = data;
        });
    }
    MainBookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.log("initializing");
        this.newBookAdded = false;
        this.newBookTitle = '';
        this.bookList = [];
        this.bookService.getBooks().subscribe(function (data) {
            for (var _i = 0, _a = data.items; _i < _a.length; _i++) {
                var book = _a[_i];
                var parsedBook = _this.bookService.parseBook(book);
                _this.bookList.push(parsedBook);
            }
        }, function (error) {
            _this.logger.error("error occurred when getting books");
        });
    };
    MainBookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-book-list',
            template: __webpack_require__(/*! ./main-book-list.component.html */ "./src/app/components/booksList/main-book-list/main-book-list.component.html"),
            styles: [__webpack_require__(/*! ./main-book-list.component.css */ "./src/app/components/booksList/main-book-list/main-book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bookService_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _events_bookEvents_book_events_service__WEBPACK_IMPORTED_MODULE_3__["BookEventsService"]])
    ], MainBookListComponent);
    return MainBookListComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <span class=\"navbar-text\">\n    All right reserved \n  </span>\n</nav>"

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <i class=\"fa fa-home\"></i>\n      BooksAPI\n    </a>\t\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link headerLink\" href=\"#\" data-toggle=\"modal\" data-target=\"#addBook\">\n            <i class=\"fa fa-plus\"></i>\n            add new book\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/events/bookEvents/book-events.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/events/bookEvents/book-events.service.ts ***!
  \**********************************************************/
/*! exports provided: BookEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEventsService", function() { return BookEventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookEventsService = /** @class */ (function () {
    function BookEventsService() {
        this.addNewBookSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.addNewBookAction$ = this.addNewBookSubject.asObservable();
    }
    BookEventsService.prototype.alertNewBookAdded = function (newBooksTitle) {
        this.addNewBookSubject.next(newBooksTitle);
    };
    BookEventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BookEventsService);
    return BookEventsService;
}());



/***/ }),

/***/ "./src/app/logger/logger.ts":
/*!**********************************!*\
  !*** ./src/app/logger/logger.ts ***!
  \**********************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
var Logger = /** @class */ (function () {
    function Logger(tag) {
        this.TAG = tag;
    }
    Logger.prototype.log = function (message) {
        console.log(this.TAG + ": " + message);
    };
    Logger.prototype.warn = function (message) {
        console.warn(this.TAG + ": " + message);
    };
    Logger.prototype.error = function (message) {
        console.error(this.TAG + ": " + message);
    };
    return Logger;
}());



/***/ }),

/***/ "./src/app/models/book.ts":
/*!********************************!*\
  !*** ./src/app/models/book.ts ***!
  \********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, authorsNames, publishedDate, bookTitle) {
        if (id === void 0) { id = 0; }
        if (authorsNames === void 0) { authorsNames = []; }
        if (publishedDate === void 0) { publishedDate = new Date(); }
        if (bookTitle === void 0) { bookTitle = ''; }
        this.id = id;
        this.authorsNames = authorsNames;
        this.publishedDate = publishedDate;
        this.bookTitle = bookTitle;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/pipes/book-title-pipe.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/book-title-pipe.pipe.ts ***!
  \***********************************************/
/*! exports provided: BookTitlePipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookTitlePipePipe", function() { return BookTitlePipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BookTitlePipePipe = /** @class */ (function () {
    function BookTitlePipePipe() {
    }
    BookTitlePipePipe.prototype.transform = function (value, args) {
        var parsedBookTitle = '';
        var bookTitleParts = value.split(" ");
        for (var _i = 0, bookTitleParts_1 = bookTitleParts; _i < bookTitleParts_1.length; _i++) {
            var bookTitlePart = bookTitleParts_1[_i];
            var newTitle = '';
            for (var _a = 0, bookTitlePart_1 = bookTitlePart; _a < bookTitlePart_1.length; _a++) {
                var bookTitleChar = bookTitlePart_1[_a];
                if (!bookTitleChar.match(/^[a-zA-Z]+$/)) {
                    bookTitleChar = '';
                }
                newTitle += bookTitleChar;
            }
            bookTitlePart = newTitle;
            bookTitlePart = bookTitlePart.charAt(0).toUpperCase() + bookTitlePart.slice(1).toLowerCase();
            parsedBookTitle += " " + bookTitlePart;
        }
        return parsedBookTitle;
    };
    BookTitlePipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'bookTitlePipe'
        })
    ], BookTitlePipePipe);
    return BookTitlePipePipe;
}());



/***/ }),

/***/ "./src/app/services/bookService/book.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/bookService/book.service.ts ***!
  \******************************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book */ "./src/app/models/book.ts");
/* harmony import */ var _httpService_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpService/http.service */ "./src/app/services/httpService/http.service.ts");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logger/logger */ "./src/app/logger/logger.ts");
/* harmony import */ var _pipes_book_title_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/book-title-pipe.pipe */ "./src/app/pipes/book-title-pipe.pipe.ts");
/* harmony import */ var _dateService_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dateService/date.service */ "./src/app/services/dateService/date.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookService = /** @class */ (function () {
    function BookService(dateService, httpService, bookTitlePipe) {
        this.dateService = dateService;
        this.httpService = httpService;
        this.bookTitlePipe = bookTitlePipe;
        this.BOOKS_DATA_URL = '../assets/booksData.json';
        this.GOOGLE_API_DATE_SEPERATOR = '-';
        this.USER_DATE_SEPERATOR = '/';
        this.DEFAULT_AUTHORS_NAME = 'none';
        this.JANUARY_MONTH = 1;
        this.FIRST_DAY_IN_MONTH = 1;
        this.VALID_DATE_SPLITTED_NUMBER = 3;
        this.logger = new _logger_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]("BookService");
        this.bookId = 0;
    }
    BookService.prototype.getBooks = function () {
        return this.httpService.getHttpRequest(this.BOOKS_DATA_URL);
    };
    BookService.prototype.parseBook = function (bookData) {
        var parsedBook;
        var authorsNames = [];
        var parsedBookTitle;
        var parsedDate = this.parseDate(bookData.volumeInfo.publishedDate, this.GOOGLE_API_DATE_SEPERATOR);
        if (bookData.volumeInfo.authors != undefined) {
            authorsNames = Array.from(bookData.volumeInfo.authors);
        }
        else {
            authorsNames.push(this.DEFAULT_AUTHORS_NAME);
        }
        parsedBook = new _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"](this.bookId, authorsNames, parsedDate, bookData.volumeInfo.title);
        parsedBook.bookImageURL = bookData.volumeInfo.imageLinks.thumbnail;
        this.bookId++;
        return parsedBook;
    };
    BookService.prototype.isDateValid = function (date) {
        var result;
        var splitedDate = date.toString().split(this.USER_DATE_SEPERATOR);
        if (splitedDate.length != this.VALID_DATE_SPLITTED_NUMBER) {
            result = false;
        }
        else if (splitedDate[0].length > 2 || splitedDate[1].length > 2 || splitedDate[2].length != 4 || splitedDate[0].length < 1 || splitedDate[1].length < 1) {
            result = false;
        }
        else {
            result = true;
        }
        return result;
    };
    BookService.prototype.isBookAlreadyExists = function (newBooksTitle, bookList) {
        var result = false;
        bookList.forEach(function (book) {
            if (this.bookTitlePipe.transform(newBooksTitle) == this.bookTitlePipe.transform(book.bookTitle)) {
                result = true;
            }
        }, this);
        return result;
    };
    BookService.prototype.deleteBook = function (selectedBook, bookList) {
        var newBookList = [];
        bookList.forEach(function (book, index) {
            if (book.id == selectedBook.id) {
                bookList.splice(index, 1);
            }
        }, this);
        return bookList;
    };
    BookService.prototype.addBook = function (bookTitle, bookAuthor, bookDate, bookList) {
        var newBook = new _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"](this.bookId, bookAuthor, bookDate, bookTitle);
        bookList.push(newBook);
        return bookList;
    };
    BookService.prototype.parseDate = function (date, seperator) {
        var parsedDate = new Date();
        var month;
        var day;
        var dateModules = date.split(seperator);
        if (dateModules.length == 1) {
            month = this.JANUARY_MONTH;
            day = this.FIRST_DAY_IN_MONTH;
        }
        else if (dateModules.length == 2) {
            month = this.dateService.fixMonth(parseInt(dateModules[1]));
            day = this.FIRST_DAY_IN_MONTH;
        }
        else if (dateModules.length == 2) {
            month = this.dateService.fixMonth(parseInt(dateModules[1]));
            day = parseInt(dateModules[2]);
        }
        else if (dateModules.length == 3) {
            month = this.dateService.fixMonth(parseInt(dateModules[1]));
            day = parseInt(dateModules[2]);
        }
        parsedDate.setFullYear(parseInt(dateModules[0]), month, day);
        return parsedDate;
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_dateService_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"], _httpService_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _pipes_book_title_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__["BookTitlePipePipe"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/services/dateService/date.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/dateService/date.service.ts ***!
  \******************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateService = /** @class */ (function () {
    function DateService() {
    }
    DateService.prototype.fixMonth = function (month) {
        return month++;
    };
    DateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DateService);
    return DateService;
}());



/***/ }),

/***/ "./src/app/services/httpService/http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/httpService/http.service.ts ***!
  \******************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger/logger */ "./src/app/logger/logger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(httpClient) {
        this.httpClient = httpClient;
        this.logger = new _logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]("HttpService");
        this.logger.log("initiating http service");
    }
    HttpService.prototype.getHttpRequest = function (url) {
        this.logger.log("sending GET request to URL: " + url);
        return this.httpClient.get(url);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\yonatan\projects\booksAPI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map