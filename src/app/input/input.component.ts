import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputForm: FormGroup;
  editingMode: boolean;
  editingIndex: number;
  todos = [];

  constructor( private http: HttpClient){
    this.todos = this.getTodos();
  }



  ngOnInit(){
    this.inputForm = new FormGroup({
      todo: new FormControl(null)
    });
    this.editingMode = false;

  }

  getTodos(): any {
    this.http.get('https://auth-ts.herokuapp.com/api/todo/')
    .subscribe(
      (res:any) => {
        this.todos = res.todos;
        console.log(this.todos);
      }
    )
    return this.todos
  }

  addnewTodo(newTodoLabel:string){
   
        if (!this.editingMode) {
          this.http.post('https://auth-ts.herokuapp.com/api/todo/add',{
            description: newTodoLabel,
            completed: false
          })
          .subscribe(
            (res) => {
              this.todos.push({
                description: newTodoLabel,
                completed: false
              });
            }
          );
  } else {
    this.todos[this.editingIndex] = {
      ...this.todos[this.editingIndex], label: newTodoLabel
    } 
    this.editingMode = false;
    this.editingIndex = -1;
  }
    
  this.inputForm.reset();
  }
  deleteTodo(todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  editTodo(index: number){
    this.editingMode = true;
    this.editingIndex = index;
    console.log(index);
    const todo = this.todos[index];
    this.inputForm.setValue({
      todo: todo.label
    });
  }



}
