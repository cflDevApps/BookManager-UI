import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
    selector: 'app-book-edit',
    standalone: true,
    templateUrl: './book-edit.component.html',
    styleUrl: './book-edit.component.css',
    imports: [CommonModule, FormsModule, RouterLink,  RouterLinkActive, BookFormComponent]
})
export class BookEditComponent implements OnInit{

  formItem: Book= {
    name: '',
    author: '',
    publisher: '',
    year: undefined,
    price: undefined,
    imageId: '',
    units: undefined
  };

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getBookById(id);    
  }

  getBookById(bookId: any){
    this.service.getBookByIdObs(parseInt(bookId!)).subscribe({
      next:((reponseItem) => this.formItem = reponseItem),
      error:((responseError) => {
        alert("API failed to get book by ID ")
        console.log(reportError)
      })
    })
  }

  saveBook() {
    this.service.postBookObs(this.formItem).subscribe({
      next:((response) => this.router.navigate(['/stock'])),
      error:((reponseError) =>{
        alert("API failed to save book")
        console.log(reponseError)
      })
    })
  } 

}
