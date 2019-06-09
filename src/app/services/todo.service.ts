import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: "aaa",
        completed: false
      },
      {
        id: 2,
        title: "bbbb",
        completed: true
      },
      {
        id: 3,
        title: "ccccc",
        completed: false
      }
    ];
  }
}
