import { Routes } from '@angular/router';
import { BookListComponent  } from './components/book-list-component/book-list-component';
import { AddBookComponent } from './components/add-book-component/add-book-component';
import { Home } from './components/home/home'
import { StatisticsComponent } from './components/statistics-component/statistics-component';

export const routes: Routes = [
    {
        path: '',
        title: 'MiBiblioteca',
        component: Home
    },
    {
        path: 'listaLibros',
        title: 'Libros',
        component: BookListComponent
    },
    {
        path: 'agregar',
        title: 'Agregar Libro',
        component: AddBookComponent
    },
    {   
        path: 'estadisticas',
        title: 'Estadisticas',
        component: StatisticsComponent
    }
];
