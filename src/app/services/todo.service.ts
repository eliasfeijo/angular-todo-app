import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    return this.http.get<Todo[]>(url);
  }
}
