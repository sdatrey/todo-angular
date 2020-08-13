import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputForm: FormGroup;
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
      'to-do': new FormControl(null)
    });

  }
  addnewTodo(newTodoLabel){
    var newTodo= {
      label: newTodoLabel,
      completed: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }


}
