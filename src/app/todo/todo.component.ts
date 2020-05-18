import { Component, OnInit } from '@angular/core';
import { Todo } from "../interfaces/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    { task: "just relax", completed: false },
    { task: "clean the litter box", completed: true },
    { task: "walk the dog", completed: true },
    { task: "eat dinner", completed: false },
    { task: "play animal crossing", completed: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
