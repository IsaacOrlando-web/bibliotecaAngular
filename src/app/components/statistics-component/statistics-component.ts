import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-statistics-component',
  imports: [],
  templateUrl: './statistics-component.html',
  styleUrl: './statistics-component.css',
})
export class StatisticsComponent implements OnInit{
  librosLeidosCantidad: number = 0;
  librosNoLeidosCantidad: number = 0;
  books: Book[] = [];
  librosLeidos: Book[] = [];
  librosNoLeidos: Book[] = [];

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.librosLeidos = this.books.filter((b) => b.isRead === true);
    this.librosNoLeidos = this.books.filter(b => b.isRead === false);
  }
}
