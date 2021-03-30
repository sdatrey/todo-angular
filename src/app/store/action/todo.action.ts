import {Action, createAction, props} from '@ngrx/store';
import {Todo} from '../../modals/todo.modal';

export const addTodo = 'Add_Todo';
export const delTodo = 'Del_Todo';
export const updateTodo = 'Update_Todo';

export class AddTodo implements Action {
  readonly type = addTodo;
  constructor(public payload: Todo) {
  }
}
export class DeleteTodo implements Action{
  readonly type = delTodo;
  constructor(public payload: {id: string}) {
  }
}
export class UpdateTodo implements Action{
  readonly type = updateTodo;
  constructor(public payload: {id: string}) {
  }
}

export type TodoListActions = AddTodo | DeleteTodo | UpdateTodo;



// export const AddTodo = createAction<string, { todo: Todo }>(
//   'Add Todo',
//   props<{ todo: Todo }>()
// );
