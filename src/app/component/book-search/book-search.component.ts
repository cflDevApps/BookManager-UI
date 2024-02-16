import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';
import { BookItemComponent } from "../book-item/book-item.component";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-book-search',
    standalone: true,
    templateUrl: './book-search.component.html',
    styleUrl: './book-search.component.css',
    imports: [RouterLink,  RouterLinkActive,CommonModule, FormsModule, BookItemComponent]
})
export class BookSearchComponent {

  public bookList: Book[] | undefined;

  bookData: string = ''

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


}
