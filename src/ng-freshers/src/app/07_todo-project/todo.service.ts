import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo-project-demo/models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  fetchAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  saveTodo(todo: Todo): Observable<any> {
    if (todo.id) {
      return this.http.patch(`http://localhost:3000/todos/${todo.id}`, todo);
    } else {
      // id: "", name: "", completed: ""
      // delete todo.id
      const { id, ...newTodo } = todo;
      return this.http.post('http://localhost:3000/todos', newTodo);
    }
  }

  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(`http://localhost:3000/todos/${todo.id}`);
  }
}
