import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookItemComponent } from '../book-item/book-item.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
    selector: 'app-stock',
    standalone: true,
    templateUrl: './stock.component.html',
    styleUrl: './stock.component.css',
    imports: [RouterLink,  RouterLinkActive,CommonModule, FormsModule, BookItemComponent ]
})
export class StockComponent {

  public bookList: Book[] | undefined;

  bookData: string = ''
  itemSelected: any;

  constructor(private bookService: BookService){}

  ngOnInit():void{
    this.bookService.getBooksObs().subscribe({
      next:(responseList) => this.bookList = responseList,
      error:(responseError) => {
        alert("API failed to load books")
      }
    })
  }

  getBookByFiter(){
    this.bookService.getBooksByFilterObs(this.bookData).subscribe({
      next:(responseList) =>{
        this.bookList = responseList
        console.log(this.bookList)
      }, 
      error:(responseError) => {
        alert("API failed to load books")
      }
    })
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBookByIdObs(bookId).subscribe({
      next:(reponse) => alert(reponse),
      error:(responseError) => {
        alert(responseError.error.message)
        console.log(responseError.error)
      } 
    })
  }
}
