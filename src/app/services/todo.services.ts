import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../modals/todo.modal';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class TodoService{
  constructor( private http: HttpClient){
    }
    addTodo(todotitle: string){
    return this.http.post('https://auth-ts.herokuapp.com/api/todo/add', {
      description: todotitle,
      completed: false
    });
  }
  getTodo(): Observable<Todo[]> {
    return this.http.get<{todos: Todo[]}>('https://auth-ts.herokuapp.com/api/todo/').pipe(
      map((res) => res.todos)
    );
  }
  delTodo(id: string){
    return this.http.delete<{msg: string}>(`https://auth-ts.herokuapp.com/api/todo/${id}`);
  }
  updateTodo(data: Todo){
    return this.http.put<{msg: string}>(`https://auth-ts.herokuapp.com/api/todo/${data._id}`, data);
  }
}
