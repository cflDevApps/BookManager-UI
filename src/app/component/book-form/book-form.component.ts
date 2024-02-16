import { Component, Input } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [RouterLink,  RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  @Input() formItem: Book = {
      name: '',
      author: '',
      publisher: '',
      year: undefined,
      price: undefined,
      imageId: '',
      units: undefined
    };

  @Input() saveBook!: Function;

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router){}

  
}
