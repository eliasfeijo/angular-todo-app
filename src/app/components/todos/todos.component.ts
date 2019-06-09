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

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

}
