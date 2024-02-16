import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';

@Component({
    selector: 'app-book-item',
    standalone: true,
    templateUrl: './book-item.component.html',
    styleUrl: './book-item.component.css',
    imports: [RouterLink, RouterLinkActive, CommonModule]
})
export class BookItemComponent {



  @Input() item: Book = {
    id: 0,
    name: '',
    publisher: '',
    year: 0,
    price: 0,
    imageId: '',
    author: '',
    units: 0
  }

  @Input() type: String = 'search'

  itemSelected: Book= {
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

}
