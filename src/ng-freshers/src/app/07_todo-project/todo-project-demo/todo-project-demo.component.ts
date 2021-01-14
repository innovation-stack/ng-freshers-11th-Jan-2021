import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from './models/todo.interface';

@Component({
  selector: 'ngr-todo-project-demo',
  templateUrl: './todo-project-demo.component.html',
  styleUrls: ['./todo-project-demo.component.scss'],
})
export class TodoProjectDemoComponent implements OnInit {
  todos: Todo[] = [];
  todoForm: FormGroup;

  constructor(private todoService: TodoService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fetchAllTodos();
    this.buildForm();
  }

  selectTodo(todo: Todo) {
    this.todoForm.setValue({
      id: todo.id,
      name: todo.name,
      completed: todo.completed,
    });
    this.todoForm.markAsDirty();
  }

  resetForm() {
    this.todoForm.reset();
  }

  handleFormSubmit() {
    this.todoService.saveTodo(this.todoForm.value).subscribe(() => {
      this.fetchAllTodos();
      this.resetForm();
    });
  }

  handleDelete(todo: Todo) {
    return this.todoService.deleteTodo(todo).subscribe(() => {
      this.fetchAllTodos();
      this.resetForm();
    });
  }

  private buildForm() {
    this.todoForm = this.fb.group({
      id: this.fb.control(''),
      name: this.fb.control('', [Validators.required]),
      completed: this.fb.control(''),
    });
  }

  private fetchAllTodos() {
    this.todoService.fetchAllTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
