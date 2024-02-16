import { Component, Input } from '@angular/core';
import { Book } from '../../models/Book';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-delete',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,  RouterLinkActive],
  templateUrl: './book-delete.component.html',
  styleUrl: './book-delete.component.css'
})
export class BookDeleteComponent {

  item: Book = {
    id: 0,
    name: '',
    publisher: '',
    year: 0,
    price: 0,
    imageId: '',
    author: '',
    units: 0
  }

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getBookById(id);    
  }


  getBookById(bookId: any){
    this.bookService.getBookByIdObs(parseInt(bookId!)).subscribe({
      next:((reponseItem) => this.item = reponseItem),
      error:((responseError) => {
        alert("API failed to get book by ID ")
        console.log(reportError)
      })
    })
  }

  deleteBook(){
    this.bookService.deleteBookByIdObs(this.item.id!).subscribe({
      next:((response)=> {
        this.router.navigate(["/stock"])
      }),
      error:((responseError) => {
        alert("API failed to delete book by ID ")
        console.log(responseError.error)
        this.router.navigate(["/stock"])
      })
    })
  }
}
