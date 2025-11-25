import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-component',
  imports: [ReactiveFormsModule ],
  templateUrl: './add-book-component.html',
  styleUrl: './add-book-component.css',
})
export class AddBookComponent{
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ){
    // Creo el formulario UNA sola vez aquí
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: [2024, Validators.required],
      isRead: [false],
      rating: [0],
      img: ['']
    });
  }

  onSubmit(): void{
    if(this.bookForm.valid){
      const formData = this.bookForm.value;

      this.bookService.addBook(formData);

      this.router.navigate(['/listaLibros']);
    } else {
      this.markFormGroupTouched(this.bookForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  cancelar(){
    this.router.navigate(['/listaLibros']);
  }

  get title() { return this.bookForm.get('title'); }
  get author() { return this.bookForm.get('author'); }
  get year() { return this.bookForm.get('year'); }
  get rating() { return this.bookForm.get('rating'); }
  get img() { return this.bookForm.get('img'); }
}
