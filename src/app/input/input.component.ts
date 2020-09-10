import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../services/todo.services';
import { Todo } from '../modals/todo.modal';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit  {
  inputForm: FormGroup;
  editingMode: boolean;
  editingId: string;
  todos = [];
 constructor(private todoservice: TodoService){
  
 }

 ngOnInit(): void {
   this.inputForm = new FormGroup({
    todo: new FormControl('',[Validators.required])
   });
  this.getTodos();
 }
 addnewTodo(){
  if(this.inputForm.invalid){
    return console.log('not valid');
  }
  if (this.editingMode) {
    this.todoservice.updateTodo({
      _id: this.editingId,
      description: this.inputForm.value.todo,
      completed: false,
    }).subscribe(res => {
      alert(res.msg);
      this.getTodos();
    });
  } else {
   this.todoservice.addTodo(this.inputForm.value.todo)
   .subscribe(
      (res) => {
       this.todos.push(res)
      }
   )
     this.getTodos();
    }
    this.inputForm.reset();
 }
 getTodos() {
  this.todoservice.getTodo().subscribe(
    (res) =>{
      this.todos = res;
    }
  )
 }
 deleteTodo(id: string){
  this.todoservice.delTodo(id).subscribe(
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
