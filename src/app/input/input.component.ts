import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { state } from '@angular/animations';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputForm: FormGroup;
  editingMode: boolean;
  editingIndex: number;
  todos = [
    {
      label: 'Angular Course',
      completed: false
    },
    {
      label: 'Clean house',
      completed: true
    }
    
  ]


  ngOnInit(){
    this.inputForm = new FormGroup({
      todo: new FormControl(null)
    });
    this.editingMode = false;

  }
  addnewTodo(newTodoLabel){
    if (!this.editingMode) {
    var newTodo= {
      label: newTodoLabel,
      completed: false
    };
    this.todos.push(newTodo);
  } else {
    // this.todos[this.editingIndex] = {
    //   completed: false, label: newTodoLabel
    // }
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
  todoComplete(){

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
