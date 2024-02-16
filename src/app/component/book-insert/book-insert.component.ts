import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-book-insert',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,  RouterLinkActive, BookFormComponent],
  templateUrl: './book-insert.component.html',
  styleUrl: './book-insert.component.css'
})
export class BookInsertComponent {

  formItem: Book = {
    name: '',
    author: '',
    publisher: '',
    year: undefined,
    price: undefined,
    imageId: '',
    units: undefined
  };

constructor(private service: BookService, private route: ActivatedRoute, private router: Router){}

saveBook(){
  this.service.postBookObs(this.formItem).subscribe({
    next:(response) =>{      
      console.log(response)
      this.router.navigate(['/stock'])
    },
    error:(responseError) => {
      alert("API failed to save book")
      console.log(responseError.error)}
  })
}

}
