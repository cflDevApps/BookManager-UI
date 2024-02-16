import { HeaderComponent } from './../component/header/header.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API = 'http://localhost:8080/api/book'

  constructor(private http:HttpClient) { }

  getBooksObs():Observable<Book[]>{
    const url = `${this.API}/getAll`
    return this.http.get<Book[]>(url)
  }
  
  postBookObs(book: Book):Observable<string>{
    return this.http.post<string>(this.API, book)
  }

  getBooksByFilterObs(bookInfo: string): Observable<Book[]>{    
    const url = `${this.API}?bookInfo=${bookInfo}`
    return this.http.get<Book[]>(url)
  }

  deleteBookByIdObs(bookId: number): Observable<string>{
    const url = `${this.API}/${bookId}`
    return this.http.delete<string>(url)
  }

  getBookByIdObs(bookId: number): Observable<Book>{
    const url = `${this.API}/${bookId}`
    return this.http.get<Book>(url)
  } 

}
