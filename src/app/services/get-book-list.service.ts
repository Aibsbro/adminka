import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBookListService {

  constructor(private http: HttpClient) { }

  getBookList() {
    const url = 'http://localhost:8181/book/bookList';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers : headers});
  }
}