import { Todo } from '../../modals/todo.modal';
import * as TodoAction from '../action/todo.action';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos : [
    {_id: '1', description: 'Test', completed: false},
    {_id: '2', description: 'Test1', completed: true},
  ]
};

export function todoReducer(state = initialState, action: TodoAction.AddTodo){
  switch (action.type){
    case TodoAction.addTodo:
      return{
        ...state,
        todo: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}
