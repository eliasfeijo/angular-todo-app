import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        title: "aaa",
        completed: false
      },
      {
        title: "bbbb",
        completed: true
      },
      {
        title: "ccccc",
        completed: false
      }
    ];
  }

}
