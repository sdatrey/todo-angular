import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../services/todo.services';
import { Todo } from '../modals/todo.modal';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as TodoListActions from '../store/action/todo.action';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit  {
  inputForm: FormGroup;
  editingMode: boolean;
  editingId: string;
  todos: Observable<Todo[]>;
 constructor(private todoService: TodoService,  private store: Store<{todo: { todos: Todo[] }}>){
 }

 ngOnInit(): void {
   this.inputForm = new FormGroup({
    todo: new FormControl('', [Validators.required])
   });
   this.todos = this.store.select('todo').pipe(
     map((res) => res.todos)
   );
   console.log(this.todos);
   this.getTodos();
 }
 addnewTodo(){
  if (this.inputForm.invalid){
    return console.log('not valid');
  }
  if (this.editingMode) {
    this.todoService.updateTodo({
      _id: this.editingId,
      description: this.inputForm.value.todo,
      completed: false,
    }).subscribe(res => {
      alert(res.msg);
      this.getTodos();
    });
  } else {
   // this.todoService.addTodo(this.inputForm.value.todo)
   // .subscribe(
   //    (res) => {
   //     this.todos.push(res);
   //    }
   this.store.dispatch(new TodoListActions.AddTodo({_id: '5', completed: false, description: 'Test'}));
   this.getTodos();
  }
  this.inputForm.reset();
 }
 getTodos() {
  this.todoService.getTodo().subscribe(
    (res) => {
      // this.todos = res;
    }
  );
 }
 deleteTodo(id: string){
  this.todoService.delTodo(id).subscribe(
   (res) => {
    alert(res.msg);
    this.getTodos();
   }
  );
 }
 editTodo(todo: Todo) {
   this.editingMode = true;
   this.editingId = todo._id;
   this.inputForm.setValue({
     todo: todo.description
   });
 }
}
