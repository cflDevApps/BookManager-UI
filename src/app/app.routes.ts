import { Routes } from '@angular/router';
import { BookFormComponent } from './component/book-form/book-form.component';
import { BookSearchComponent } from './component/book-search/book-search.component';
import { StockComponent } from './component/stock/stock.component';
import { BookEditComponent } from './component/book-edit/book-edit.component';
import { BookInsertComponent } from './component/book-insert/book-insert.component';
import { BookDeleteComponent } from './component/book-delete/book-delete.component';

export const routes: Routes = [
    {path: '', redirectTo: '/search', pathMatch: 'full'},
    {path: 'stock', component: StockComponent},
    {path: 'search', component: BookSearchComponent},
    {path: 'edit/:id', component: BookEditComponent},
    {path: 'delete/:id', component: BookDeleteComponent},
    {path: 'add', component: BookInsertComponent}
];
