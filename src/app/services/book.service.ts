import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private books: Book[] = [
        {
            id: 1,
            title: 'Cien años de soledad',
            author: 'Gabriel García Márquez',
            year: 1967,
            isRead: true,
            rating: 5,
            addedDate: new Date(),
            img: 'https://images.cdn3.buscalibre.com/fit-in/520x520/90/d6/90d6455083f95cb36dc10052fe29f2ea.jpg'
        },
        {
            id: 3,
            title: 'El principito',
            author: 'Antoine de Saint-Exupéry',
            year: 1943,
            isRead: true,
            rating: 4,
            addedDate: new Date(),
            img: 'https://online.fliphtml5.com/ilypf/stri/files/large/1.webp?1601836779&1601836779'
        },
        {
            id: 2,
            title: '1984',
            author: 'George Orwell',
            year: 1949,
            isRead: false,
            rating: 0,
            addedDate: new Date(),
            img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/67/2e/672ee81ffd4909a069d4bbcfeeecfe0e.jpg'
        }
    ];

    getBooks(): Book[]{
        return this.books;
    }

    getReadBooks(): Book[]{
        return this.books.filter(b => b.isRead);
    }

    addBook(book: Omit<Book, 'id' | 'addedDate'>): void {
        const newBook: Book = {
            ...book,
            id: this.books.length + 1,
            addedDate: new Date()
        };
        this.books.push(newBook);
    }

    private generateId(): number {
        return Math.max(...this.books.map(b => b.id), 0) + 1;
    }
}