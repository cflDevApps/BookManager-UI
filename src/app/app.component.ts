import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookFormComponent } from "./component/book-form/book-form.component";
import { HeaderComponent } from "./component/header/header.component";
import { BookSearchComponent } from "./component/book-search/book-search.component";
import { BookItemComponent } from './component/book-item/book-item.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink,  RouterLinkActive,  HeaderComponent, BookFormComponent, BookSearchComponent, BookItemComponent]
})
export class AppComponent {
  title = 'BookManager-UI';
}
