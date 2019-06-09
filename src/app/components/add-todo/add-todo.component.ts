import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.title === null || this.title.match(/^ *$/) !== null) {
      return;
    }
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
    this.title = '';
  }

}
