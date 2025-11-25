import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list-component',
  imports: [],
  templateUrl: './book-list-component.html',
  styleUrl: './book-list-component.css',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
